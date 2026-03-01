export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const correctPin = process.env.APP_PIN;
  if (!correctPin) {
    // No PIN configured — allow access
    return res.status(200).json({ valid: true });
  }

  const { pin } = req.body || {};
  if (pin === correctPin) {
    return res.status(200).json({ valid: true });
  }

  return res.status(401).json({ valid: false, error: 'Incorrect PIN' });
}
