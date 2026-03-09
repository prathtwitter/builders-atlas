// ============================================================================
// The Builder's Atlas — App.jsx
// Single-file mobile-first React learning app
// ============================================================================

import React, {
  useReducer,
  useEffect,
  useCallback,
  useRef,
  useState,
  useMemo,
} from 'react';
import {
  Globe,
  Server,
  Database,
  Sparkles,
  Layers,
  Wand2,
  Shield,
  Rocket,
  BookOpen,
  Compass,
  BarChart3,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Check,
  CheckCircle2,
  Menu,
  X,
  Clock,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  BookMarked,
  Lock,
  Play,
  Shuffle,
  GitBranch,
  Copy,
  AlertTriangle,
  DollarSign,
  Boxes,
  ListOrdered,
  Link2,
  SlidersHorizontal,
  Key,
  ExternalLink,
  ClipboardCopy,
  Eye,
  EyeOff,
  Zap,
  RefreshCw,
  History,
  Star,
  Send,
  MessageSquare,
  Trophy,
  Award,
} from 'lucide-react';

// ============================================================================
// CONSTANTS
// ============================================================================

const STORAGE_KEY = 'builders-atlas-state';

const ICON_MAP = {
  Globe,
  Server,
  Database,
  Sparkles,
  Layers,
  Wand2,
  Shield,
  Rocket,
};

const TAB_CONFIG = [
  { id: 'learn', label: 'Learn', Icon: BookOpen },
  { id: 'roadmap', label: 'My Roadmap', Icon: Compass },
  { id: 'progress', label: 'Progress', Icon: BarChart3 },
  { id: 'chapters', label: 'Chapters', Icon: LayoutGrid },
];

// ============================================================================
// CHAPTERS DATA
// ============================================================================

const CHAPTERS = [
  {
    id: 1,
    title: 'How the Digital World Actually Works',
    subtitle: "From 'I click a button' to 'I understand what happens'",
    icon: 'Globe',
    lessons: [
      {
        id: '1.1',
        title: 'The Restaurant That Runs the Internet',
        estimatedMinutes: 15,
        hook: 'Every time you open an app on your phone, tap a button, or search for something online, you\'re setting off a chain reaction across the internet. Three invisible layers of technology spring into action \u2014 so fast you never notice. Understanding these three layers is the single most important concept in all of software development.',
        analogy: {
          front: 'Imagine walking into your favorite restaurant. There\'s the dining room where you sit \u2014 the menus, the decor, the plates on your table. That\'s what you see and interact with. But behind a swinging door, there\'s a kitchen you never see \u2014 chefs cooking, timers beeping, recipes being followed. And in the back, there\'s a pantry stocked with all the ingredients. The waiter? He\'s the messenger running between you and the kitchen.',
          back: 'Frontend = the dining room (what users see and interact with). Backend = the kitchen (where logic, processing, and decisions happen). Database = the pantry (where all data is stored). API = the waiter (carries requests and responses between frontend and backend).',
        },
        content: [
          {
            type: 'text',
            body: 'Every app, website, or digital product you\'ve ever used is built on three fundamental layers. The frontend is everything you can see and touch \u2014 buttons, text, images, animations. The backend is the brain \u2014 it processes your requests, runs the logic, enforces the rules. The database is the memory \u2014 it stores every piece of data so the system can remember who you are, what you ordered, and what you did last Tuesday.',
          },
          {
            type: 'callout',
            body: 'When you open Instagram, your phone (frontend) asks Instagram\'s servers (backend) for your feed data (database), and the API carries the request and response. This entire round trip happens in under 200 milliseconds.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Frontend', definition: 'The visual layer users interact with directly \u2014 buttons, forms, layouts, animations. Built with HTML, CSS, and JavaScript (often React, Vue, or Angular).' },
              { term: 'Backend', definition: 'The server-side logic that processes requests, enforces business rules, handles authentication, and coordinates data flow. Built with Python, Node.js, Java, Go, etc.' },
              { term: 'Database', definition: 'The persistent storage layer where all data lives \u2014 user accounts, content, transactions, settings. Examples: PostgreSQL, MongoDB, SQLite.' },
              { term: 'API', definition: 'Application Programming Interface \u2014 the structured messenger that carries requests from frontend to backend and returns responses. Think of it as the contract between the two sides.' },
            ],
          },
          {
            type: 'diagram',
            variant: 'three-layer',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'When you log into an app, where does the password verification happen?',
              options: ['Frontend', 'Backend', 'Database', 'API'],
              correct: 1,
              explanation: 'Password verification is backend work. The frontend collects your input, the API carries it to the backend, the backend checks it against the database, and sends the result back.',
            },
            {
              question: 'Your profile picture is stored in the ___.',
              options: ['Frontend', 'Backend', 'Database', 'Browser cache'],
              correct: 2,
              explanation: 'Profile pictures and other persistent data live in the database (or a storage service connected to it). The frontend only displays a copy.',
            },
            {
              question: 'The color of a button on a website is controlled by the ___.',
              options: ['Frontend', 'Backend', 'Database', 'Server'],
              correct: 0,
              explanation: 'Visual styling \u2014 colors, fonts, layouts, animations \u2014 is entirely frontend territory, handled by CSS and JavaScript.',
            },
          ],
        },
        takeaway: 'Every digital product is built on three layers: a frontend users see, a backend that thinks, and a database that remembers. The API is the messenger connecting them all.',
      },
      {
        id: '1.2',
        title: 'The Post Office of the Internet',
        estimatedMinutes: 12,
        hook: 'Every time you click a link, your browser is sending a letter across the internet \u2014 and getting a reply in milliseconds. Understanding this letter system is the key to understanding how every website and app communicates.',
        analogy: {
          front: 'Think of the old mail-order catalog system. You fill out an order form (your request), write the warehouse\'s address on the envelope (the URL), and mail it. The warehouse finds your item, packs it up (the response), and ships it back. HTTP is this system, but at the speed of light.',
          back: 'Request = your order form. URL = the address. Server = the warehouse. Response = the package. HTTP methods (GET, POST, PUT, DELETE) = types of requests (view, submit, update, cancel).',
        },
        content: [
          {
            type: 'text',
            body: 'HTTP (HyperText Transfer Protocol) is the language your browser and servers speak. Every interaction follows the same pattern: your browser sends a request, a server processes it, and sends back a response. This request-response cycle is the heartbeat of the internet. When you type google.com and press Enter, your browser first asks DNS (the internet\'s phone book) for Google\'s IP address, then sends an HTTP GET request to that address, and Google\'s server responds with the HTML for the search page.',
          },
          {
            type: 'callout',
            body: 'When you Google "best pizza near me," your browser sends a GET request to Google\'s servers with your search query as a parameter. Google\'s backend searches its massive database, ranks the results, and sends back an HTML page \u2014 all in about 0.5 seconds.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'HTTP', definition: 'HyperText Transfer Protocol \u2014 the set of rules browsers and servers follow to exchange information. The foundation of all web communication.' },
              { term: 'HTTPS', definition: 'HTTP Secure \u2014 the encrypted version of HTTP. The "S" means your data is scrambled in transit so nobody can read it. The padlock icon in your browser.' },
              { term: 'URL', definition: 'Uniform Resource Locator \u2014 the address of a resource on the internet. Like a street address, but for web pages, images, or API endpoints.' },
              { term: 'DNS', definition: 'Domain Name System \u2014 the internet\'s phone book. Translates human-readable names (google.com) into machine-readable IP addresses (142.250.80.46).' },
              { term: 'GET', definition: 'An HTTP method that requests data from a server without changing anything. Like asking "Can I see the menu?" Used for loading pages, fetching data.' },
              { term: 'POST', definition: 'An HTTP method that sends data to a server to create something new. Like submitting an order form. Used for sign-ups, form submissions, uploads.' },
            ],
          },
          {
            type: 'order-steps',
            config: {
              instruction: 'Put these steps in the correct order: What happens when you type amazon.com and press Enter?',
              items: [
                { id: 'dns', label: 'Your browser asks DNS to look up amazon.com\'s IP address' },
                { id: 'connect', label: 'Browser establishes a secure HTTPS connection to the server' },
                { id: 'request', label: 'Browser sends an HTTP GET request for the homepage' },
                { id: 'server', label: 'Amazon\'s server processes the request and generates the page' },
                { id: 'response', label: 'Server sends back the HTML, CSS, and JavaScript files' },
                { id: 'render', label: 'Browser renders the page and displays it on your screen' },
              ],
              correctOrder: ['dns', 'connect', 'request', 'server', 'response', 'render'],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the correct order when you type "google.com" in your browser?',
              options: [
                'Browser sends HTTP request -> DNS lookup -> Server responds',
                'DNS lookup -> Browser sends HTTP request -> Server responds',
                'Server responds -> DNS lookup -> Browser renders',
                'Browser renders -> DNS lookup -> Server responds',
              ],
              correct: 1,
              explanation: 'First, DNS translates "google.com" to an IP address. Then your browser sends an HTTP request to that IP. Finally, Google\'s server processes the request and sends back a response.',
            },
            {
              question: 'Which HTTP method would you use to submit a new account registration form?',
              options: ['GET', 'POST', 'PUT', 'DELETE'],
              correct: 1,
              explanation: 'POST is used to send new data to a server \u2014 creating a new account, submitting a form, or uploading a file. GET only reads data; it never creates anything.',
            },
          ],
        },
        takeaway: 'The internet runs on a simple conversation: your browser asks (request), a server answers (response). HTTP is the language they speak, and DNS is the phone book that finds the right server.',
      },
      {
        id: '1.3',
        title: 'Why Your Favorite Sites Never Go Down (And How They Actually Do)',
        estimatedMinutes: 15,
        hook: 'Netflix streams to 260 million people across 190 countries simultaneously. YouTube serves over a billion hours of video per day. How do they handle that kind of load without everything crashing? The answer involves an invisible army of computers spread across the globe.',
        analogy: {
          front: 'Your app is a food truck. If it breaks down, nobody eats. A CDN turns your food truck into a global franchise with locations everywhere. If one location has a problem, customers just go to the nearest one that\'s working.',
          back: 'Single server = food truck (one point of failure). Hosting = the parking spot for your food truck. CDN = franchise with worldwide locations (copies of your content stored on servers globally). DNS = the GPS that directs customers to the nearest location.',
        },
        content: [
          {
            type: 'text',
            body: 'When you build an app, it needs to live somewhere \u2014 a computer that\'s always on, always connected to the internet, ready to serve your app to anyone who asks. That computer is called a server, and renting space on one is called hosting. Think of it as renting a parking spot for your food truck. Without it, your app exists on your laptop and nowhere else.',
          },
          {
            type: 'text',
            body: 'But here\'s the problem: if your server is in New York and someone in Tokyo requests your app, that data has to travel across the entire Pacific Ocean. That takes time \u2014 time users feel as slow loading. A CDN (Content Delivery Network) solves this by copying your app\'s static files (images, CSS, JavaScript) onto servers all over the world. When someone in Tokyo visits your site, they get the copy from a nearby server instead of waiting for New York.',
          },
          {
            type: 'callout',
            body: 'Netflix uses AWS for its backend servers and its own CDN called Open Connect. They have servers embedded directly inside internet service providers worldwide \u2014 so when you stream a show, the data often travels less than a few miles to reach you.',
          },
          {
            type: 'text',
            body: 'DNS (Domain Name System) is the phone book that makes all of this work. When you type "netflix.com" into your browser, DNS translates that human-friendly name into the actual IP address of Netflix\'s server. And with a CDN, DNS is smart enough to route you to the nearest server automatically. SSL/TLS is the encryption layer that protects everything in transit \u2014 it\'s the reason you see a padlock icon in your browser\'s address bar and "https" instead of "http".',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Server', definition: 'A computer that runs 24/7, connected to the internet, serving your app to anyone who requests it. Can be physical hardware or virtual (cloud).' },
              { term: 'Hosting', definition: 'The service of renting server space to keep your app accessible on the internet. Ranges from free tiers (Netlify, Vercel) to enterprise cloud (AWS, GCP).' },
              { term: 'CDN', definition: 'Content Delivery Network \u2014 a global network of servers that cache copies of your static content, so users get data from the nearest location instead of your origin server.' },
              { term: 'Latency', definition: 'The delay between a user\'s request and the server\'s response. Measured in milliseconds. Lower is better. CDNs reduce latency by serving content from nearby locations.' },
              { term: 'DNS', definition: 'Domain Name System \u2014 translates human-readable domain names (google.com) into machine-readable IP addresses (142.250.80.46).' },
              { term: 'SSL/TLS', definition: 'Encryption protocols that secure data in transit between your browser and a server. TLS is the modern version of SSL. Enables HTTPS and the padlock icon.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each hosting type to its best use case.',
              pairs: [
                { left: 'Static site (Netlify)', right: 'Portfolio, blog, or marketing page with no backend' },
                { left: 'Dynamic app (Vercel)', right: 'React/Next.js app with server-side rendering' },
                { left: 'Heavy backend (Railway/AWS)', right: 'Complex API, background jobs, or microservices' },
                { left: 'Database hosting (Supabase)', right: 'Managed database with auth and real-time features' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What does a CDN primarily help with?',
              options: ['Writing backend code faster', 'Reducing load time by serving content from nearby servers', 'Storing user passwords securely', 'Translating domain names to IP addresses'],
              correct: 1,
              explanation: 'A CDN caches copies of your content on servers around the world, so users get data from the nearest location instead of your origin server \u2014 dramatically reducing load time.',
            },
            {
              question: 'What happens when you type "google.com" into your browser before any page loads?',
              options: ['Your browser sends HTML directly to Google', 'DNS translates the domain name into an IP address', 'A CDN creates a copy of your request', 'SSL encrypts the domain name into a URL'],
              correct: 1,
              explanation: 'Before anything else happens, DNS looks up the domain name "google.com" and returns the actual IP address of Google\'s server, so your browser knows where to send the request.',
            },
            {
              question: 'Why does Netflix put servers inside internet service providers?',
              options: ['To make their code run faster', 'To avoid paying for hosting', 'To reduce the physical distance data travels to reach viewers', 'To bypass DNS lookups entirely'],
              correct: 2,
              explanation: 'By placing CDN servers inside ISPs, Netflix minimizes the physical distance between the content and the viewer \u2014 often just a few miles \u2014 which dramatically reduces latency and buffering.',
            },
          ],
        },
        takeaway: 'Your app lives on a server. A CDN spreads copies of it globally for speed. DNS is the phone book, and SSL is the lock on the door.',
      },
      {
        id: '1.4',
        title: 'The Secret Language of Browsers \u2014 HTML',
        estimatedMinutes: 15,
        hook: 'Right-click any webpage right now and click \'Inspect.\' What you see is HTML \u2014 the skeleton that every single webpage on the internet is built from. Every heading, every paragraph, every button, every image \u2014 all HTML.',
        analogy: {
          front: 'HTML is the floor plan of a house. It defines WHAT exists and WHERE things go \u2014 here\'s a bedroom, here\'s a kitchen, here\'s the front door. But the floor plan says nothing about what color the walls are, what furniture goes inside, or whether the lights turn on when you clap.',
          back: 'HTML = floor plan (structure only). Tags like <h1>, <p>, <img>, <button> define WHAT exists. Attributes like src, href, class define properties of those elements. The DOM (Document Object Model) is the browser\'s internal map of your HTML tree.',
        },
        content: [
          {
            type: 'text',
            body: 'HTML (HyperText Markup Language) is the standard language that tells browsers what to display. Every webpage you\'ve ever visited is HTML at its core. It works through tags \u2014 labels wrapped in angle brackets that define elements. A <h1> tag creates a large heading. A <p> tag creates a paragraph. An <img> tag displays an image. A <button> tag creates a clickable button. Tags usually come in pairs \u2014 an opening tag and a closing tag \u2014 with content in between.',
          },
          {
            type: 'text',
            body: 'Elements can have attributes that provide extra information. An image tag needs a src attribute to know which image to display. A link tag needs an href attribute to know where to navigate. A div tag might have a class attribute so CSS can target it for styling. These attributes are the properties that make each element unique.',
          },
          {
            type: 'callout',
            body: 'Semantic HTML means using tags that describe their meaning, not just their appearance. Instead of a generic <div> for everything, you use <nav> for navigation, <header> for the top section, <main> for primary content, and <footer> for the bottom. This helps screen readers, search engines, and other developers understand your page structure.',
          },
          {
            type: 'text',
            body: 'When your browser reads HTML, it builds an internal tree structure called the DOM (Document Object Model). Think of it as a family tree for your webpage \u2014 the <html> tag is the root, <head> and <body> are its children, and every element inside those is a descendant. JavaScript uses the DOM to find, change, add, or remove elements on the page in real-time. Understanding the DOM is the bridge between static HTML and dynamic, interactive websites.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'HTML', definition: 'HyperText Markup Language \u2014 the standard language for defining the structure and content of web pages. Every website starts with HTML.' },
              { term: 'Tag', definition: 'An HTML instruction wrapped in angle brackets (e.g., <h1>, <p>, <img>). Tags define what type of element to create on the page.' },
              { term: 'Element', definition: 'A complete HTML unit including the opening tag, content, and closing tag. For example: <p>Hello world</p> is a paragraph element.' },
              { term: 'Attribute', definition: 'Extra information added to an HTML tag. Attributes like src, href, class, and id customize how elements behave or appear.' },
              { term: 'DOM', definition: 'Document Object Model \u2014 the browser\'s internal tree representation of your HTML. JavaScript reads and manipulates the DOM to create dynamic pages.' },
              { term: 'Semantic HTML', definition: 'Using meaningful tags (<nav>, <header>, <main>, <article>) instead of generic ones (<div>, <span>) to make your page structure clear to browsers, search engines, and screen readers.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each HTML tag to what it creates on the page.',
              pairs: [
                { left: '<h1>', right: 'Large heading' },
                { left: '<p>', right: 'Paragraph of text' },
                { left: '<img>', right: 'Image' },
                { left: '<a>', right: 'Clickable link' },
                { left: '<button>', right: 'Interactive button' },
                { left: '<form>', right: 'Input group for collecting data' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the purpose of HTML attributes like src, href, and class?',
              options: ['They style the element with colors and fonts', 'They provide extra information that customizes how an element behaves', 'They connect the element to a database', 'They make the element interactive with JavaScript'],
              correct: 1,
              explanation: 'Attributes give elements their specific properties \u2014 src tells an image what to display, href tells a link where to go, and class gives CSS a handle for styling.',
            },
            {
              question: 'What is the DOM?',
              options: ['A CSS styling framework', 'A type of database for web pages', 'The browser\'s internal tree representation of your HTML', 'A JavaScript library for animations'],
              correct: 2,
              explanation: 'The DOM (Document Object Model) is the tree structure the browser builds from your HTML. JavaScript reads and manipulates this tree to make pages dynamic.',
            },
            {
              question: 'Why should you use <nav> instead of <div> for a navigation menu?',
              options: ['It loads faster', 'It looks different visually', 'It communicates meaning to browsers, search engines, and screen readers', 'It automatically adds styling'],
              correct: 2,
              explanation: 'Semantic HTML tags like <nav> describe what the content IS, not how it looks. This helps accessibility tools, search engines, and other developers understand your page structure.',
            },
          ],
        },
        takeaway: 'HTML is the skeleton of every webpage \u2014 it defines what exists and where, using tags that browsers understand universally.',
      },
      {
        id: '1.5',
        title: 'Making It Beautiful \u2014 CSS',
        estimatedMinutes: 15,
        hook: 'Two websites can have the exact same HTML \u2014 the exact same structure, the exact same content \u2014 and look completely different. One looks like a polished app, the other looks like a 1995 GeoCities page. The difference? CSS.',
        analogy: {
          front: 'CSS is the interior designer. Give the same empty house (HTML) to three different designers, and you\'ll get three completely different vibes \u2014 minimalist Scandinavian, cozy farmhouse, or sleek modern. The rooms (HTML) are identical. The style (CSS) transforms the experience.',
          back: 'CSS = interior design (styling only). Selectors target which HTML elements to style. Properties define what to change (color, size, spacing). Values define how to change it. Media queries let you change the design based on screen size. Tailwind CSS is a utility-first approach that applies styles via class names directly in HTML.',
        },
        content: [
          {
            type: 'text',
            body: 'CSS (Cascading Style Sheets) is the language that controls how HTML elements look. Without CSS, every website would be black text on a white background with default browser styling. CSS gives you control over colors, fonts, spacing, layout, animations, and how your site adapts to different screen sizes. It works by selecting HTML elements and applying style rules to them.',
          },
          {
            type: 'text',
            body: 'CSS rules follow a simple pattern: selector { property: value; }. The selector targets which elements to style (like h1, .classname, or #id). The property says what to change (color, font-size, margin). The value says how to change it (blue, 24px, 20px). The "cascading" part means multiple rules can apply to the same element, and CSS has a specific order for deciding which rule wins.',
          },
          {
            type: 'text',
            body: 'Modern CSS layout is built on two powerful systems: Flexbox and Grid. Flexbox is perfect for arranging items in a single direction \u2014 a row of buttons, a vertical stack of cards. Grid is ideal for two-dimensional layouts \u2014 like a photo gallery or a dashboard with a sidebar. Together, they handle virtually any layout you can imagine without the hacks developers used to rely on.',
          },
          {
            type: 'callout',
            body: 'Dark mode is just a CSS swap. The HTML structure stays identical \u2014 only the colors change. Most apps implement dark mode by switching a class on the root element, which triggers an entirely different set of CSS color variables. Same skeleton, different skin.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Selector', definition: 'The part of a CSS rule that targets which HTML elements to style. Can target by tag name (h1), class (.card), ID (#header), or combinations.' },
              { term: 'Property', definition: 'What aspect of the element you want to change \u2014 color, font-size, margin, padding, display, background, and hundreds more.' },
              { term: 'Value', definition: 'How you want to change the property \u2014 blue, 16px, center, #FF5733, 2rem. Each property accepts specific types of values.' },
              { term: 'Flexbox', definition: 'A CSS layout system for arranging items in one direction (row or column). Perfect for navigation bars, card rows, or centering content.' },
              { term: 'Grid', definition: 'A CSS layout system for two-dimensional layouts (rows AND columns simultaneously). Ideal for dashboards, galleries, and complex page layouts.' },
              { term: 'Responsive Design', definition: 'Designing your app to work on any screen size by using flexible layouts, relative units, and media queries that adapt the design at specific breakpoints.' },
              { term: 'Media Queries', definition: 'CSS rules that only apply when certain conditions are met (usually screen width). Example: @media (max-width: 768px) targets tablets and phones.' },
              { term: 'Tailwind CSS', definition: 'A utility-first CSS framework where you apply small, single-purpose classes directly in your HTML (e.g., text-blue-500, p-4, flex) instead of writing separate CSS files.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each CSS challenge to the property or technique that solves it.',
              pairs: [
                { left: 'Change text color', right: 'color' },
                { left: 'Add space inside a box', right: 'padding' },
                { left: 'Add space outside a box', right: 'margin' },
                { left: 'Make text bigger', right: 'font-size' },
                { left: 'Arrange items in a row', right: 'display: flex' },
                { left: 'Hide an element on mobile', right: 'media query' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the difference between padding and margin?',
              options: ['Padding is for text, margin is for images', 'Padding is space inside the element\'s border, margin is space outside it', 'Padding pushes other elements away, margin adds internal space', 'There is no difference \u2014 they are interchangeable'],
              correct: 1,
              explanation: 'Padding creates space between an element\'s content and its border (inside). Margin creates space between the element\'s border and neighboring elements (outside). Think of padding as cushioning inside a box, and margin as the gap between boxes.',
            },
            {
              question: 'When would you use CSS Grid instead of Flexbox?',
              options: ['When you need to change colors', 'When you need a one-directional row of items', 'When you need to control layout in both rows and columns simultaneously', 'When you need to add animations'],
              correct: 2,
              explanation: 'Flexbox excels at one-dimensional layouts (a row or a column). Grid handles two-dimensional layouts (rows AND columns at the same time) \u2014 perfect for dashboards, galleries, and complex page structures.',
            },
            {
              question: 'How do most apps implement dark mode?',
              options: ['They use completely different HTML files', 'They swap CSS color variables while keeping the same HTML structure', 'They use JavaScript to redraw every element', 'They serve different images from the CDN'],
              correct: 1,
              explanation: 'Dark mode is a CSS-level change. The HTML structure stays identical \u2014 a class toggle on the root element switches between light and dark color variables, transforming the entire visual theme.',
            },
          ],
        },
        takeaway: 'CSS is the styling layer that transforms raw HTML into beautiful, responsive interfaces \u2014 controlling colors, layout, spacing, and how your app adapts to every screen size.',
      },
      {
        id: '1.6',
        title: 'Making It Alive \u2014 JavaScript',
        estimatedMinutes: 15,
        hook: 'HTML gives you structure. CSS gives you style. But neither can make anything HAPPEN. When you click a Like button and the heart fills in, when you type in a search box and suggestions appear, when your feed loads new posts as you scroll \u2014 that\'s JavaScript. It\'s the difference between a poster and an interactive display.',
        analogy: {
          front: 'HTML is the skeleton, CSS is the skin, and JavaScript is the nervous system. When you poke something (click a button), the nervous system detects it, processes it, and triggers a response (show a popup, fetch new data, update the screen). Without the nervous system, the body looks fine but can\'t move or react.',
          back: 'JavaScript = nervous system (behavior and interactivity). Variables store data temporarily. Functions are reusable actions. Events are things that happen (clicks, scrolls, key presses). Event listeners wait for events and trigger functions. DOM manipulation changes the page in real-time. Async/Await handles tasks that take time (like API calls) without freezing the page.',
        },
        content: [
          {
            type: 'text',
            body: 'JavaScript is the only programming language that runs natively in every web browser. It\'s what bridges the gap between a static document and a living, breathing application. HTML defines the structure, CSS makes it look good, but JavaScript makes it DO things. Every form validation, every animated transition triggered by user action, every piece of data fetched from a server without reloading the page \u2014 that\'s JavaScript at work.',
          },
          {
            type: 'text',
            body: 'The building blocks are simple: variables store data (a user\'s name, a counter, a list of items). Functions are reusable bundles of logic ("when called, do these steps"). Events are things that happen in the browser \u2014 a click, a scroll, a key press, a page load. Event listeners are JavaScript\'s way of saying "when THIS event happens on THAT element, run THIS function." This event-driven pattern is the heartbeat of every interactive website.',
          },
          {
            type: 'callout',
            body: 'When you tap the heart icon on a Twitter post, JavaScript listens for the click event, sends a POST request to Twitter\'s backend API to record your like, and immediately updates the heart icon and count on your screen \u2014 all without reloading the page. The visual change is instant even though the server hasn\'t confirmed yet. This optimistic UI pattern makes apps feel snappy.',
          },
          {
            type: 'text',
            body: 'One of JavaScript\'s most powerful features is async/await \u2014 the ability to handle tasks that take time without freezing the page. When your app needs to fetch data from an API, it could take 200ms or 2 seconds. Without async patterns, the entire page would freeze while waiting. Async/await lets JavaScript say "start this task, but keep the page responsive while I wait for the result." This is how your feed loads new posts while you keep scrolling.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Variable', definition: 'A named container that stores data \u2014 a number, string, boolean, array, or object. Declared with let (changeable) or const (fixed) in modern JavaScript.' },
              { term: 'Function', definition: 'A reusable block of code that performs a specific task. Define it once, call it anywhere. Functions can accept inputs (parameters) and return outputs.' },
              { term: 'Event', definition: 'Something that happens in the browser \u2014 a click, scroll, key press, form submission, or page load. JavaScript can listen for and respond to events.' },
              { term: 'Event Listener', definition: 'Code that watches for a specific event on a specific element and runs a function when it occurs. The glue between user actions and app behavior.' },
              { term: 'DOM Manipulation', definition: 'Using JavaScript to read, add, change, or remove HTML elements on the page in real-time. How apps update the screen without full page reloads.' },
              { term: 'Async/Await', definition: 'A pattern for handling operations that take time (API calls, file loading) without freezing the page. The "await" keyword pauses the function until the result arrives, while the rest of the app stays responsive.' },
              { term: 'Fetch', definition: 'A built-in JavaScript function for making HTTP requests to APIs. Returns a promise that resolves with the server\'s response. The modern way to get data from a backend.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Which technology is needed for each feature? Match the feature to the minimum requirement.',
              pairs: [
                { left: 'Button changes color on hover', right: 'CSS only' },
                { left: 'Heart fills in when clicked', right: 'JavaScript' },
                { left: 'Text appears bold', right: 'CSS only' },
                { left: 'New posts load as you scroll', right: 'JavaScript' },
                { left: 'Image displays on page', right: 'HTML only' },
                { left: 'Search suggestions while typing', right: 'JavaScript' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why is async/await important for web applications?',
              options: ['It makes code run faster', 'It prevents the page from freezing while waiting for slow operations like API calls', 'It replaces the need for HTML', 'It encrypts data sent to servers'],
              correct: 1,
              explanation: 'Async/await lets JavaScript handle time-consuming tasks (like fetching data from an API) without blocking the rest of the page. The user can keep scrolling and clicking while data loads in the background.',
            },
            {
              question: 'What is an event listener?',
              options: ['A CSS rule that changes styles on hover', 'Code that watches for a user action and runs a function in response', 'A server that listens for incoming HTTP requests', 'A database query that watches for data changes'],
              correct: 1,
              explanation: 'An event listener is JavaScript code attached to an HTML element that waits for a specific event (click, scroll, keypress) and executes a function when that event occurs. It\'s how apps respond to user interaction.',
            },
            {
              question: 'A button that changes color when hovered needs JavaScript. True or false?',
              options: ['True \u2014 all interactivity requires JavaScript', 'False \u2014 CSS :hover pseudo-class handles this without JavaScript', 'True \u2014 but only if the color change is animated', 'False \u2014 HTML handles hover states natively'],
              correct: 1,
              explanation: 'CSS has a :hover pseudo-class that can change any style when the user hovers over an element. No JavaScript needed. JavaScript is only required when you need logic, data fetching, or state management beyond what CSS can handle.',
            },
          ],
        },
        takeaway: 'JavaScript is what makes websites interactive \u2014 it listens for user actions, processes logic, communicates with servers, and updates the page in real-time without reloading.',
      },
      {
        id: '1.7',
        title: 'Frameworks \u2014 Why Nobody Builds From Scratch Anymore',
        estimatedMinutes: 15,
        hook: 'Every modern app you use \u2014 Instagram, Airbnb, Netflix, Discord, Spotify \u2014 is built with a framework. Not raw HTML, CSS, and JavaScript from scratch. Frameworks exist because developers got tired of solving the same problems over and over. They standardized the solutions.',
        analogy: {
          front: 'Building with raw HTML/CSS/JS is like building furniture from raw lumber. You can do it, but you need to saw every plank, sand every surface, and drill every joint. Using a framework like React is like using IKEA parts \u2014 standardized, reusable pieces that snap together. You still design the furniture, but you skip the lumber mill.',
          back: 'Framework = IKEA parts (pre-built, standardized, reusable). React uses components (reusable UI pieces with their own logic). Props pass data into components. State manages data that changes over time. Next.js adds routing, server rendering, and API routes on top of React. SPA = Single Page App (one HTML page, JS handles navigation). SSR = Server-Side Rendering (server generates HTML for each page). SSG = Static Site Generation (HTML generated at build time).',
        },
        content: [
          {
            type: 'text',
            body: 'A framework is a pre-built toolkit that gives you standardized ways to solve common problems. Instead of writing your own routing system, state management, component architecture, and build pipeline from scratch, you use a framework that has already solved these problems for thousands of other apps. You focus on what makes YOUR app unique, not on reinventing plumbing.',
          },
          {
            type: 'text',
            body: 'React, built by Facebook (now Meta), is the most popular frontend framework. Its key idea is components \u2014 self-contained, reusable pieces of UI that manage their own display and logic. A "MovieCard" component can be used on the home page, search results, and watchlist \u2014 same component, different data. Props are how you pass data into components (like function arguments). State is data that can change over time (like whether a dropdown is open or how many items are in a cart).',
          },
          {
            type: 'callout',
            body: 'Instagram\'s web app is built entirely with React. Every post, story, reel, and profile page is a composition of reusable React components. When Instagram\'s design team updates the "Like" button component, it updates everywhere across the entire app simultaneously.',
          },
          {
            type: 'text',
            body: 'Next.js (built on top of React) has become the go-to choice for production apps. It adds features React doesn\'t have out of the box: file-based routing (create a file, get a URL), server-side rendering (faster initial load, better SEO), API routes (build your backend in the same project), and automatic code splitting (only load the JavaScript needed for each page). Vue.js is an alternative known for its gentler learning curve. Svelte compiles your code away at build time for smaller, faster output.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Framework', definition: 'A pre-built toolkit providing standardized solutions for common development problems \u2014 routing, state management, component architecture, and build tooling.' },
              { term: 'Component', definition: 'A self-contained, reusable piece of UI that combines structure (HTML), style (CSS), and behavior (JS) into a single unit. The building block of modern frontend apps.' },
              { term: 'Props', definition: 'Short for "properties" \u2014 the data you pass into a component from the outside. Like function arguments, props let you customize each instance of a component.' },
              { term: 'State', definition: 'Data inside a component that can change over time. When state changes, the component automatically re-renders to reflect the new data. Examples: form input values, toggle switches, cart items.' },
              { term: 'SPA', definition: 'Single Page Application \u2014 a web app that loads one HTML page and uses JavaScript to dynamically update content as the user navigates, instead of loading new pages from the server.' },
              { term: 'SSR', definition: 'Server-Side Rendering \u2014 the server generates the full HTML for each page on request, then sends it to the browser. Faster initial load and better for SEO than client-only rendering.' },
              { term: 'SSG', definition: 'Static Site Generation \u2014 HTML pages are pre-built at compile time, not on each request. Extremely fast because servers just serve pre-made files. Ideal for content that doesn\'t change often.' },
            ],
          },
          {
            type: 'decision-tree',
            config: {
              title: 'Which framework should you use?',
              start: 'q1',
              nodes: {
                q1: {
                  question: 'What are you building?',
                  options: [
                    { label: 'Marketing website or blog', next: 'r1' },
                    { label: 'Interactive web app', next: 'q2' },
                    { label: 'Real-time app (chat, live data)', next: 'r3' },
                    { label: 'Mobile app', next: 'r4' },
                  ],
                },
                q2: {
                  question: 'How complex is the state management?',
                  options: [
                    { label: 'Simple \u2014 forms, toggles, basic data', next: 'r2a' },
                    { label: 'Complex \u2014 shopping cart, dashboards, multi-step flows', next: 'r2b' },
                  ],
                },
                r1: {
                  result: 'Next.js with Static Site Generation',
                  detail: 'Pre-built HTML pages served instantly. Perfect for content-focused sites with great SEO. Add dynamic features only where needed.',
                },
                r2a: {
                  result: 'React (or Vue for simpler learning curve)',
                  detail: 'React\'s component model handles moderate interactivity well. Vue is a great alternative if your team prefers a gentler learning curve.',
                },
                r2b: {
                  result: 'React + state management library',
                  detail: 'For complex state, pair React with Zustand, Redux Toolkit, or React Query. Next.js adds server rendering and API routes when you need a full-stack solution.',
                },
                r3: {
                  result: 'Next.js or React + WebSocket integration',
                  detail: 'Real-time features need persistent server connections. Use WebSockets or libraries like Socket.io alongside your React frontend for live updates.',
                },
                r4: {
                  result: 'React Native',
                  detail: 'React Native lets you build native iOS and Android apps using the same React component model and JavaScript skills you already know.',
                },
              },
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the key advantage of a component-based architecture?',
              options: ['It makes websites load faster', 'You build reusable UI pieces that can be used across multiple pages and features', 'It replaces the need for a backend', 'It automatically generates CSS'],
              correct: 1,
              explanation: 'Components are reusable \u2014 build a "Button" or "Card" once and use it everywhere. Change the component in one place and every instance updates. This saves time and ensures consistency.',
            },
            {
              question: 'What does Next.js add on top of React?',
              options: ['A database and authentication system', 'File-based routing, server-side rendering, and API routes', 'A built-in design system and component library', 'Automatic testing and deployment'],
              correct: 1,
              explanation: 'Next.js extends React with file-based routing (create a file, get a URL), SSR/SSG for faster loads and better SEO, and API routes that let you build backend endpoints in the same project.',
            },
            {
              question: 'A blog with mostly static content that rarely changes would benefit most from:',
              options: ['Client-side rendering (SPA)', 'Server-side rendering (SSR)', 'Static site generation (SSG)', 'WebSocket connections'],
              correct: 2,
              explanation: 'SSG pre-builds all pages at compile time as static HTML files. For content that rarely changes (like blog posts), this is the fastest and cheapest approach \u2014 no server processing on each request.',
            },
          ],
        },
        takeaway: 'Frameworks like React let you build with reusable components instead of starting from scratch \u2014 and Next.js is the go-to choice for most modern web applications.',
      },
      {
        id: '1.8',
        title: 'Responsive Design \u2014 One App, Every Screen',
        estimatedMinutes: 15,
        hook: 'Open any modern website on your phone, then open the same site on your laptop. The content is identical, but the layout is completely different. On your phone: single column, hamburger menu, stacked cards. On desktop: sidebar, multi-column grid, expanded navigation. Same code, different presentation. That\'s responsive design.',
        analogy: {
          front: 'Think of responsive design like water. Pour it into a tall glass, it takes that shape. Pour it into a wide bowl, it adapts. Pour it into a coffee mug, it fills that too. Your app\'s layout should flow like water \u2014 taking the shape of whatever screen it\'s poured into.',
          back: 'Responsive design = water (adapts to any container/screen). Breakpoints are the thresholds where the layout changes (typically 768px for tablet, 1024px for desktop). Mobile-first means you design for the smallest screen first, then add complexity for larger ones. Media queries are CSS rules that only apply at certain screen sizes. Flexbox and Grid are CSS layout systems that make responsive layouts much easier to build.',
        },
        content: [
          {
            type: 'text',
            body: 'Over 60% of all web traffic comes from mobile devices. If your app doesn\'t work beautifully on a phone, you\'ve lost the majority of your audience before they even see your content. Responsive design is the practice of building layouts that adapt to any screen size \u2014 from a 375px phone to a 2560px ultrawide monitor \u2014 using the same HTML and CSS.',
          },
          {
            type: 'text',
            body: 'The key tool is the media query. A media query is a CSS rule that says "only apply these styles when the screen width meets this condition." For example: at 768px and above, switch from a single column to two columns. At 1024px, add a sidebar. These width thresholds are called breakpoints, and the most common ones match phone (375px), tablet (768px), and desktop (1024px+) screen sizes.',
          },
          {
            type: 'callout',
            body: 'Mobile-first design is the industry standard. You write your base CSS for the smallest screen, then use media queries to ADD complexity for larger screens. This approach ensures your mobile experience \u2014 where most users are \u2014 is never an afterthought. It also results in cleaner, more maintainable code.',
          },
          {
            type: 'text',
            body: 'The viewport meta tag is a critical but often overlooked piece. Without it, mobile browsers render your page at a desktop-like width and then shrink it down, making everything tiny. Adding the viewport meta tag tells the browser to match its width to the device\'s actual screen width and set an appropriate zoom level. Flexbox and Grid, combined with relative units like percentages and rem, make responsive layouts natural instead of painful.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Breakpoint', definition: 'A specific screen width where your layout changes. Common breakpoints: 375px (phone), 768px (tablet), 1024px (small desktop), 1280px (large desktop).' },
              { term: 'Media Query', definition: 'A CSS rule that applies styles only when certain conditions are met, typically screen width. Syntax: @media (min-width: 768px) { /* styles */ }.' },
              { term: 'Mobile-First', definition: 'A design strategy where you build the mobile layout first (the base CSS), then use min-width media queries to add complexity for larger screens. The industry standard approach.' },
              { term: 'Viewport', definition: 'The visible area of a web page in the browser. The viewport meta tag ensures mobile browsers render at the correct width instead of simulating a desktop-width page.' },
              { term: 'Flexbox', definition: 'A CSS layout system for one-dimensional arrangements (row or column). Items flex to fill available space. Perfect for responsive navigation, card rows, and centering.' },
              { term: 'CSS Grid', definition: 'A CSS layout system for two-dimensional arrangements (rows and columns). Lets you define grid templates that rearrange content at different breakpoints.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each screen size to its typical layout behavior.',
              pairs: [
                { left: 'Phone (375px)', right: 'Single column + hamburger menu' },
                { left: 'Tablet (768px)', right: 'Two columns + visible sidebar' },
                { left: 'Desktop (1024px+)', right: 'Full sidebar + multi-column grid' },
                { left: 'Any screen size', right: 'Flexible images that scale proportionally' },
                { left: 'Small screens first', right: 'Mobile-first design approach' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What does "mobile-first" mean in responsive design?',
              options: ['Build the mobile app before the website', 'Write base CSS for the smallest screen, then add styles for larger screens', 'Only support mobile devices', 'Use a separate codebase for mobile and desktop'],
              correct: 1,
              explanation: 'Mobile-first means your default CSS styles target the smallest screen size. You then use min-width media queries to progressively add layout complexity for tablets and desktops. This ensures mobile is never an afterthought.',
            },
            {
              question: 'What is a breakpoint?',
              options: ['The point where your code has a bug', 'A specific screen width where your CSS layout changes', 'The maximum number of elements on a page', 'A JavaScript debugging tool'],
              correct: 1,
              explanation: 'A breakpoint is a specific screen width (like 768px or 1024px) where your layout transitions \u2014 for example, from a single column to a multi-column grid. Media queries check for these thresholds.',
            },
            {
              question: 'What happens if you forget the viewport meta tag on a mobile device?',
              options: ['The page won\'t load at all', 'The browser renders at desktop width and shrinks everything down, making it tiny', 'The CSS animations stop working', 'The page loads in dark mode by default'],
              correct: 1,
              explanation: 'Without the viewport meta tag, mobile browsers assume your page is designed for a desktop screen (typically 980px wide) and zoom out to fit it all. Everything becomes tiny and unusable until the user pinch-zooms in.',
            },
          ],
        },
        takeaway: 'Responsive design makes your app work on every screen size by using breakpoints, media queries, and flexible layouts \u2014 always design for mobile first.',
      },
      {
        id: '1.9',
        title: 'The Component Mindset \u2014 Thinking in Reusable Pieces',
        estimatedMinutes: 15,
        hook: 'Look at Netflix\'s interface. Every movie has a card with a poster, title, and rating. There are hundreds of these cards on screen. Did a developer build each one individually? Of course not. They built ONE card component and reused it hundreds of times, each time with different data. This is the component mindset \u2014 the fundamental way modern UIs are built.',
        analogy: {
          front: 'LEGO bricks. A \'Button\' brick, a \'Card\' brick, a \'Navigation Bar\' brick. Each brick works independently \u2014 it has its own shape, color, and connection points. You combine different bricks to build pages, screens, and entire applications. Change one brick design, and every page that uses it updates automatically.',
          back: 'Component = LEGO brick (self-contained, reusable UI piece). Props = the data you plug into a component (like giving a Card component a different title and image each time). Children = components nested inside other components. Composition = building complex UIs by combining simple components. Design System = your official LEGO set (standardized components every team uses). Atomic Design = organizing components by size: atoms (Button), molecules (SearchBar), organisms (Header).',
        },
        content: [
          {
            type: 'text',
            body: 'The component mindset is the single most important shift in how you think about building user interfaces. Instead of thinking about pages, you think about pieces. A page is just a composition of components \u2014 a Header component, a Sidebar component, a Feed component made up of PostCard components, each containing Avatar, Text, and ActionBar components. Turtles all the way down.',
          },
          {
            type: 'text',
            body: 'The magic is reusability. Airbnb\'s listing card component appears on search results, wishlists, host dashboards, and email recommendations. It\'s the same component every time, just fed different data through props. If the design team decides to round the corners or add a "Superhost" badge, they change the component once and every single listing card across the entire platform updates automatically.',
          },
          {
            type: 'callout',
            body: 'Most major tech companies maintain a design system \u2014 a library of standardized components that every team uses. Google has Material Design, IBM has Carbon, Shopify has Polaris. For indie builders, shadcn/ui and Tailwind UI provide production-ready component libraries you can customize for your own apps.',
          },
          {
            type: 'text',
            body: 'Atomic Design is a popular framework for organizing components by size. Atoms are the smallest units \u2014 a Button, an Input, an Icon. Molecules combine atoms into functional groups \u2014 a SearchBar (Input + Button + Icon). Organisms combine molecules into distinct sections \u2014 a Header (Logo + Navigation + SearchBar + UserMenu). Templates arrange organisms into page layouts. Pages are templates filled with real data. This hierarchy keeps large codebases organized and maintainable.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Component', definition: 'A self-contained, reusable piece of UI that combines structure, style, and behavior. The fundamental building block of modern frontend development.' },
              { term: 'Props', definition: 'Data passed into a component from its parent, making each instance unique. A MovieCard receives a different title, image, and rating via props.' },
              { term: 'Children', definition: 'Components nested inside other components. A Layout component might contain Header, Main, and Footer as children.' },
              { term: 'Composition', definition: 'The practice of building complex UIs by combining simple, focused components together. Small pieces assembled into larger structures.' },
              { term: 'Design System', definition: 'A library of standardized, reusable components with consistent styling and behavior that an entire team or company uses. Ensures visual and functional consistency.' },
              { term: 'Atomic Design', definition: 'A methodology that organizes components into five levels: Atoms (Button), Molecules (SearchBar), Organisms (Header), Templates (PageLayout), and Pages (filled templates).' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A social media post with an avatar, username, timestamp, text, image, like button, comment button, and share button \u2014 how would a component-minded developer approach this?',
              options: ['Build it as one large component with all the HTML together', 'Break it into reusable sub-components: Avatar, PostHeader, PostBody, ActionBar', 'Create a separate page for each post', 'Write raw HTML without components since it\'s just one post card'],
              correct: 1,
              explanation: 'A component-minded developer breaks the post into small, reusable pieces. The Avatar can be reused in comments and user profiles. The ActionBar (like, comment, share) can appear on posts, photos, and videos. Each piece is built once and composed together.',
            },
            {
              question: 'What is the primary benefit of using a design system?',
              options: ['It makes your app load faster', 'It ensures visual and functional consistency across an entire product', 'It replaces the need for a framework like React', 'It automatically generates API endpoints'],
              correct: 1,
              explanation: 'A design system provides a single source of truth for UI components. Every team uses the same Button, Modal, and Card components, ensuring the product looks and behaves consistently no matter which team builds which feature.',
            },
            {
              question: 'In Atomic Design, what is a "molecule"?',
              options: ['The smallest possible component (like a button)', 'A combination of atoms that form a functional group (like a search bar)', 'A full page layout with real data', 'A CSS animation library'],
              correct: 1,
              explanation: 'A molecule combines multiple atoms into a small functional unit. A SearchBar molecule combines an Input atom, a Button atom, and an Icon atom into a component that has a clear, specific purpose.',
            },
          ],
        },
        takeaway: 'Modern UIs are built from small, reusable components \u2014 build once, reuse everywhere, and change one component to update every place it appears.',
      },
      {
        id: '1.10',
        title: 'Blueprint Your First App',
        estimatedMinutes: 20,
        hook: 'You\'ve learned the building blocks. Now let\'s put them all together. In this capstone, you\'ll architect a complete app from scratch \u2014 choosing your frontend approach, identifying the backend needs, sketching the component tree, and planning which technologies to use. This is what real product builders do before writing a single line of code.',
        analogy: {
          front: 'You\'re an architect about to design a building. Before any construction begins, you need a blueprint that shows every floor, every room, every doorway. This capstone is your chance to create that blueprint for a real app.',
          back: 'Blueprint = your app architecture plan. Floors = the three layers (frontend, backend, database). Rooms = individual features and components. Doorways = APIs connecting different parts. Building materials = your chosen technologies and frameworks.',
        },
        content: [
          {
            type: 'text',
            body: 'Before you write a single line of code, you need a blueprint. Every successful app starts as a plan \u2014 a clear picture of what the three layers look like, what technologies will power them, and how they connect. This is the skill that separates someone who can follow a tutorial from someone who can build a product. Let\'s bring together everything from Chapter 1.',
          },
          {
            type: 'text',
            body: 'Quick reference for your toolkit: HTML defines the structure (what exists on the page). CSS controls the style (how it looks). JavaScript adds behavior (how it responds to users). Frameworks like React give you reusable components and standardized patterns. Responsive design ensures it works on every screen. The component mindset breaks complex UIs into manageable, reusable pieces.',
          },
          {
            type: 'text',
            body: 'On the infrastructure side: the frontend, backend, and database are your three layers. HTTP is how they communicate. APIs are the structured contracts between layers. Hosting keeps your app running 24/7. CDNs make it fast globally. DNS translates domain names to server addresses. SSL/TLS keeps data secure in transit.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The 8-Step App Blueprint Process',
              steps: [
                { label: '1. Define the core problem', detail: 'What does this app do? Who is it for? What\'s the one sentence pitch?' },
                { label: '2. List the key features', detail: 'What can users DO? List every action: sign up, create, read, update, delete, search, filter, share.' },
                { label: '3. Choose the frontend framework', detail: 'React for interactive apps, Next.js for SEO-critical sites, Vue for simpler learning curves.' },
                { label: '4. Identify what needs JavaScript', detail: 'Which features require interactivity beyond HTML/CSS? Forms, real-time updates, dynamic filtering, API calls.' },
                { label: '5. Design the component tree', detail: 'Break the UI into reusable components. Start with pages, then sections, then individual pieces.' },
                { label: '6. Plan the backend needs', detail: 'What data needs processing? Authentication, business logic, third-party integrations, scheduled jobs.' },
                { label: '7. Define the data model', detail: 'What needs to be stored? Users, content, relationships, settings. Choose SQL or NoSQL based on data structure.' },
                { label: '8. Choose your hosting stack', detail: 'Frontend: Vercel or Netlify. Backend: Railway or AWS. Database: Supabase or PlanetScale. CDN: built into most modern hosts.' },
              ],
            },
          },
          {
            type: 'decision-tree',
            config: {
              title: 'Blueprint an app \u2014 pick a project and plan it',
              start: 'pick',
              nodes: {
                pick: {
                  question: 'Choose an app to blueprint:',
                  options: [
                    { label: 'Recipe Tracker', next: 'recipe_fw' },
                    { label: 'Habit Tracker', next: 'habit_fw' },
                    { label: 'Bookshelf App', next: 'book_fw' },
                  ],
                },
                recipe_fw: {
                  question: 'What frontend framework for a Recipe Tracker?',
                  options: [
                    { label: 'Next.js (SSR for SEO + sharing)', next: 'recipe_js' },
                    { label: 'React SPA (simpler, personal use)', next: 'recipe_js' },
                  ],
                },
                recipe_js: {
                  question: 'What needs JavaScript interactivity?',
                  options: [
                    { label: 'Search/filter recipes, ingredient checkboxes, timer, form inputs', next: 'recipe_data' },
                  ],
                },
                recipe_data: {
                  question: 'What data needs to be stored?',
                  options: [
                    { label: 'Recipes (title, ingredients, steps, image), categories, user favorites', next: 'recipe_result' },
                  ],
                },
                recipe_result: {
                  result: 'Recipe Tracker Blueprint',
                  detail: 'Frontend: Next.js with SSG for recipe pages. Components: RecipeCard, IngredientList, StepList, SearchBar, CategoryFilter, Timer. Backend: API routes in Next.js or Supabase. Database: PostgreSQL via Supabase (recipes, categories, users). Hosting: Vercel + Supabase.',
                },
                habit_fw: {
                  question: 'What frontend framework for a Habit Tracker?',
                  options: [
                    { label: 'React SPA (highly interactive, personal tool)', next: 'habit_js' },
                    { label: 'Next.js (if adding social features later)', next: 'habit_js' },
                  ],
                },
                habit_js: {
                  question: 'What needs JavaScript interactivity?',
                  options: [
                    { label: 'Check/uncheck habits, streak counters, charts, notifications, drag-to-reorder', next: 'habit_data' },
                  ],
                },
                habit_data: {
                  question: 'What data needs to be stored?',
                  options: [
                    { label: 'Habits (name, frequency, streak), daily completions, user settings', next: 'habit_result' },
                  ],
                },
                habit_result: {
                  result: 'Habit Tracker Blueprint',
                  detail: 'Frontend: React SPA with Tailwind CSS. Components: HabitCard, StreakCounter, DailyView, WeeklyChart, SettingsPanel, HabitForm. Backend: Supabase (auth + database + real-time). Database: PostgreSQL via Supabase (habits, completions, users). Hosting: Vercel + Supabase.',
                },
                book_fw: {
                  question: 'What frontend framework for a Bookshelf App?',
                  options: [
                    { label: 'Next.js (shareable reading lists, good SEO)', next: 'book_js' },
                    { label: 'React SPA (private reading tracker)', next: 'book_js' },
                  ],
                },
                book_js: {
                  question: 'What needs JavaScript interactivity?',
                  options: [
                    { label: 'Search books (API), rate/review, drag between shelves, reading progress bar', next: 'book_data' },
                  ],
                },
                book_data: {
                  question: 'What data needs to be stored?',
                  options: [
                    { label: 'Books (title, author, cover, rating), shelves (reading, finished, want-to-read), reviews, progress', next: 'book_result' },
                  ],
                },
                book_result: {
                  result: 'Bookshelf App Blueprint',
                  detail: 'Frontend: Next.js with SSR for shareable book lists. Components: BookCard, ShelfRow, SearchBar, RatingStars, ProgressBar, ReviewForm. Backend: Next.js API routes + Google Books API for search. Database: PostgreSQL via Supabase (books, shelves, reviews, users). Hosting: Vercel + Supabase.',
                },
              },
            },
          },
          {
            type: 'order-steps',
            config: {
              instruction: 'What order should you follow when planning a new app from scratch?',
              items: [
                { id: 'problem', label: 'Define the problem you\'re solving and who it\'s for' },
                { id: 'features', label: 'List the must-have features for a minimum viable product' },
                { id: 'data', label: 'Design your data model (what tables and relationships you need)' },
                { id: 'stack', label: 'Choose your tech stack (framework, backend, database, hosting)' },
                { id: 'components', label: 'Plan your UI components and page structure' },
                { id: 'build', label: 'Build one feature at a time, testing as you go' },
              ],
              correctOrder: ['problem', 'features', 'data', 'stack', 'components', 'build'],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which three layers make up every web application?',
              options: ['HTML, CSS, JavaScript', 'Frontend, Backend, Database', 'Server, CDN, DNS', 'Components, Props, State'],
              correct: 1,
              explanation: 'Every web app has a frontend (what users see), a backend (where logic runs), and a database (where data is stored). HTML/CSS/JS are frontend technologies, not the three architectural layers.',
            },
            {
              question: 'Why should you plan your component tree before writing code?',
              options: ['It\'s required by React to compile your app', 'It helps you identify reusable pieces and avoid building the same UI twice', 'It automatically generates your CSS styles', 'It replaces the need for a database schema'],
              correct: 1,
              explanation: 'Planning your component tree upfront reveals which pieces are reusable (a Card appearing on multiple pages), which are shared (a Header on every page), and how data flows between them. This prevents duplicate work and messy architecture.',
            },
            {
              question: 'A recipe website where each recipe should be shareable and discoverable by search engines would benefit most from:',
              options: ['Client-side rendering (SPA) for maximum interactivity', 'Server-side rendering or static generation for SEO and fast initial loads', 'Raw HTML/CSS without a framework', 'A mobile-only design with no desktop support'],
              correct: 1,
              explanation: 'Shareable and search-engine-discoverable content needs SSR or SSG so that the full HTML is available when search engines and social media crawlers visit the page. SPAs render content with JavaScript, which crawlers may not execute.',
            },
            {
              question: 'What connects the frontend to the backend?',
              options: ['CSS media queries', 'The DOM', 'APIs using HTTP requests and responses', 'The viewport meta tag'],
              correct: 2,
              explanation: 'APIs (Application Programming Interfaces) are the structured communication layer between frontend and backend. The frontend sends HTTP requests to API endpoints, and the backend processes them and sends responses back.',
            },
            {
              question: 'In a mobile-first responsive design, which CSS approach is correct?',
              options: ['Write desktop styles first, then use max-width queries for mobile', 'Write mobile styles as the base, then use min-width queries for larger screens', 'Write separate CSS files for each screen size', 'Use only pixel-based widths for all elements'],
              correct: 1,
              explanation: 'Mobile-first means your base CSS targets the smallest screens. You then use min-width media queries to progressively add layout complexity for tablets and desktops. This ensures the mobile experience is always the foundation.',
            },
          ],
        },
        takeaway: 'Before you write any code, blueprint your app: identify the three layers, choose your framework, plan your components, and decide what data needs to be stored.',
      },
    ],
  },
  {
    id: 2,
    title: 'The Backend \u2014 Where the Magic Happens',
    subtitle: 'Servers, logic, and the engine room of every app',
    icon: 'Server',
    lessons: [
      {
        id: '2.1',
        title: 'The Kitchen Nobody Sees',
        estimatedMinutes: 15,
        hook: 'Every time you open DoorDash and place an order, you see a sleek interface with a menu, a cart, and a big orange button. But behind that button, a storm of invisible work erupts \u2014 your identity is verified, the restaurant is notified, a delivery fee is calculated based on distance and demand, your payment is processed through a third-party gateway, and a driver is assigned using a real-time matching algorithm. All of that happens in under two seconds, and none of it lives on your screen. That invisible engine is called the backend.',
        analogy: {
          front: 'If your app is a restaurant, what does the kitchen represent \u2014 and who works in it?',
          back: 'The backend is the kitchen nobody sees. The host (authentication) checks your reservation. The chefs (business logic) prepare your order according to exact recipes. Prep cooks (data processing) clean and organize raw ingredients. Waiters (APIs) carry plates between kitchen and table. And delivery partnerships (integrations) connect the restaurant to the outside world.',
        },
        content: [
          {
            type: 'text',
            body: 'The backend is everything that happens on the server side of an application \u2014 the code, logic, and infrastructure that users never see but always depend on. If the frontend is the dining room of a restaurant, the backend is the kitchen: it\'s where the real work happens. Without it, the frontend is just a pretty menu with nothing to serve.',
          },
          {
            type: 'text',
            body: 'Every backend, from a simple blog to a massive platform like Uber, performs five core jobs. First, authentication \u2014 verifying who you are before granting access. Second, business logic \u2014 the rules that make the app actually do something useful, like calculating a delivery fee based on distance and demand surge pricing. Third, data processing \u2014 transforming raw information into something meaningful, like aggregating your monthly spending from hundreds of individual transactions. Fourth, API management \u2014 defining how the frontend communicates with the backend in a structured, predictable way. Fifth, integrations \u2014 connecting to external services like payment processors (Stripe), email providers (SendGrid), or mapping services (Google Maps).',
          },
          {
            type: 'callout',
            body: 'When you place a DoorDash order, here is what the backend does in roughly two seconds: (1) checks your session token to confirm you\'re logged in, (2) runs business logic to calculate the delivery fee, estimated time, and applicable promotions, (3) sends an API call to the restaurant\'s system to place the order, (4) calls Stripe\'s API to process your payment, and (5) triggers a push notification integration to alert a nearby driver. Five backend jobs, one tap of a button.',
          },
          {
            type: 'text',
            body: 'Here\'s a key insight for product builders: you don\'t need to write a backend from scratch for every project. Modern tools let you assemble backend capabilities like building blocks. But you do need to understand what those blocks do and when you need them. A to-do app might only need authentication and data storage. A marketplace like Etsy needs all five jobs running at scale. Knowing the five jobs of a backend lets you scope any project accurately.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Backend', definition: 'The server-side part of an application that handles logic, data, authentication, and integrations \u2014 everything the user doesn\'t see but the app depends on.' },
              { term: 'Server', definition: 'A computer (physical or virtual) that runs your backend code 24/7, listening for requests from clients (browsers, mobile apps) and sending back responses.' },
              { term: 'Business Logic', definition: 'The rules and calculations specific to your application \u2014 pricing algorithms, eligibility checks, recommendation engines. This is the "brain" of your app.' },
              { term: 'API', definition: 'Application Programming Interface \u2014 a structured set of rules that defines how two systems communicate. The waiter that carries orders between the frontend and backend.' },
              { term: 'Integration', definition: 'A connection between your application and an external third-party service (payments, email, maps, analytics). Your app delegates specialized tasks to services that do them better.' },
              { term: 'Authentication', definition: 'The process of verifying a user\'s identity \u2014 confirming they are who they claim to be, typically through passwords, tokens, or third-party login providers.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each backend job to its restaurant equivalent.',
              pairs: [
                { left: 'Authentication', right: 'Host checking your reservation' },
                { left: 'Business Logic', right: 'Chef following a recipe to prepare your dish' },
                { left: 'Data Processing', right: 'Prep cook cleaning and organizing ingredients' },
                { left: 'API Management', right: 'Waiter carrying orders between kitchen and table' },
                { left: 'Integrations', right: 'Delivery partnership connecting restaurant to drivers' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What are the five core jobs of a backend?',
              options: ['HTML, CSS, JavaScript, React, and Node.js', 'Authentication, business logic, data processing, API management, and integrations', 'Design, development, testing, deployment, and monitoring', 'Login, signup, profile, settings, and logout'],
              correct: 1,
              explanation: 'Every backend performs five core jobs: authentication (who are you?), business logic (what should happen?), data processing (transform raw data), API management (how do systems talk?), and integrations (connect to external services).',
            },
            {
              question: 'In the DoorDash example, which backend job calculates the delivery fee based on distance and demand?',
              options: ['Authentication', 'Integration', 'Business Logic', 'Data Processing'],
              correct: 2,
              explanation: 'Calculating a delivery fee based on distance, demand surge, and promotions is business logic \u2014 the rules and calculations specific to the app\'s purpose.',
            },
            {
              question: 'Why is the backend compared to a restaurant kitchen?',
              options: ['Because both are expensive to build', 'Because both are hidden from the customer but essential to the experience', 'Because both require professional chefs', 'Because both use fire to process things'],
              correct: 1,
              explanation: 'Just like a kitchen is hidden from diners but produces everything they eat, the backend is invisible to users but powers everything they interact with.',
            },
          ],
        },
        takeaway: 'The backend is the invisible engine behind every app, performing five core jobs: authentication, business logic, data processing, API management, and integrations.',
      },
      {
        id: '2.2',
        title: 'APIs \u2014 The Waiters of the Internet',
        estimatedMinutes: 15,
        hook: 'Open any weather app on your phone. That app didn\'t build its own satellite network or hire meteorologists. It asked another service \u2014 probably OpenWeatherMap or WeatherAPI \u2014 for the forecast, and displayed the answer. That conversation between your weather app and the weather service happened through an API. APIs are the reason modern software can be built in weeks instead of years: instead of building everything yourself, you ask other services to do the hard parts.',
        analogy: {
          front: 'You\'re at a restaurant. You can\'t walk into the kitchen and cook your own food. How do you get what you want?',
          back: 'You use a waiter (the API). You make a request from a menu (the API documentation). The waiter takes your order to the kitchen (the server), and brings back exactly what you asked for (the response). You never see or touch the kitchen \u2014 you just get the result. That\'s exactly how APIs work between software systems.',
        },
        content: [
          {
            type: 'text',
            body: 'An API (Application Programming Interface) is a set of rules that lets two software systems talk to each other. When your weather app needs the forecast for Toronto, it sends a structured request to a weather API. That request hits the weather service\'s server, which looks up the data and sends back a structured response \u2014 usually in JSON format. Your app then takes that JSON and displays it as a beautiful weather card. The app never touches the weather database directly; it only communicates through the API.',
          },
          {
            type: 'diagram',
            variant: 'api-flow',
          },
          {
            type: 'text',
            body: 'APIs use HTTP methods \u2014 the same protocol your browser uses \u2014 to define what kind of action you want. GET retrieves data without changing anything (like reading a menu). POST sends new data to the server (like placing a new order). PUT updates existing data entirely (like changing your entire order). PATCH updates part of the data (like swapping just the side dish). DELETE removes data (like canceling your order). Every API request goes to a specific URL called an endpoint \u2014 think of it as the specific counter in the kitchen that handles your type of request.',
          },
          {
            type: 'callout',
            body: 'Status codes are the API\'s way of telling you what happened. 200 means "success, here\'s your data." 201 means "created successfully." 400 means "bad request \u2014 you sent something wrong." 401 means "unauthorized \u2014 who are you?" 404 means "not found \u2014 that doesn\'t exist." 500 means "server error \u2014 something broke on our end." Learning to read status codes is like learning to read the waiter\'s facial expression before they speak.',
          },
          {
            type: 'text',
            body: 'There are two main styles of APIs. REST (Representational State Transfer) is the most common \u2014 it uses standard HTTP methods and URLs to organize resources. You access users at /api/users, a specific user at /api/users/123, and that user\'s orders at /api/users/123/orders. It\'s simple, predictable, and works for most applications. GraphQL is the newer alternative where the client specifies exactly what data it wants in a single request. Instead of hitting five different endpoints, you send one query that says "give me the user\'s name, email, and their last three orders." GraphQL is powerful for complex apps with lots of nested data, but REST is the standard you\'ll encounter most.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Endpoint', definition: 'A specific URL that an API exposes for a particular resource or action. Example: /api/users/123 is an endpoint for user #123.' },
              { term: 'REST', definition: 'Representational State Transfer \u2014 the most common API architecture. Uses standard HTTP methods (GET, POST, PUT, DELETE) and resource-based URLs.' },
              { term: 'GraphQL', definition: 'A query language for APIs where the client specifies exactly what data it needs in a single request, instead of fetching from multiple REST endpoints.' },
              { term: 'JSON', definition: 'JavaScript Object Notation \u2014 the standard data format for API communication. Human-readable text using key-value pairs and arrays.' },
              { term: 'Request', definition: 'A message sent from a client to an API, specifying what action to perform (method), where to perform it (endpoint), and any needed data (body).' },
              { term: 'Response', definition: 'The message an API sends back after processing a request, including a status code and any requested data.' },
              { term: 'Status Code', definition: 'A three-digit number in an API response indicating the result: 200 (success), 404 (not found), 500 (server error), etc.' },
            ],
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                { label: 'GET (Read)', code: 'GET /api/users/42\n\n// Response (200 OK):\n{\n  "id": 42,\n  "name": "Prath",\n  "email": "prath@example.com"\n}' },
                { label: 'POST (Create)', code: 'POST /api/users\nBody: {\n  "name": "Devashree",\n  "email": "dev@example.com"\n}\n\n// Response (201 Created):\n{\n  "id": 43,\n  "name": "Devashree",\n  "email": "dev@example.com"\n}' },
                { label: 'PUT (Update)', code: 'PUT /api/users/42\nBody: {\n  "name": "Prath",\n  "email": "new@example.com"\n}\n\n// Response (200 OK):\n{\n  "id": 42,\n  "name": "Prath",\n  "email": "new@example.com"\n}' },
                { label: 'DELETE (Remove)', code: 'DELETE /api/users/42\n\n// Response (204 No Content):\n// (empty body - resource deleted)' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What HTTP method would you use to retrieve a user\'s profile without changing anything?',
              options: ['POST', 'GET', 'DELETE', 'PUT'],
              correct: 1,
              explanation: 'GET is used to read or retrieve data without modifying anything on the server. It\'s the equivalent of looking at a menu without ordering.',
            },
            {
              question: 'What does a 404 status code mean?',
              options: ['The server crashed', 'The request was successful', 'The resource was not found', 'You are not authorized'],
              correct: 2,
              explanation: '404 means "Not Found" \u2014 the endpoint exists but the specific resource you asked for doesn\'t. Like asking a waiter for a dish that\'s not on the menu.',
            },
            {
              question: 'What is the key difference between REST and GraphQL?',
              options: ['REST is newer and faster than GraphQL', 'GraphQL lets the client specify exactly what data it wants in one request, while REST uses multiple fixed endpoints', 'REST uses JSON but GraphQL uses XML', 'GraphQL only works with JavaScript applications'],
              correct: 1,
              explanation: 'REST uses fixed endpoints that return predetermined data structures. GraphQL lets the client write a query specifying exactly which fields it needs, reducing over-fetching and under-fetching of data.',
            },
          ],
        },
        takeaway: 'APIs are the structured communication layer between software systems \u2014 using HTTP methods (GET, POST, PUT, DELETE), endpoints, and status codes to send requests and receive responses.',
      },
      {
        id: '2.3',
        title: 'Authentication \u2014 The Bouncer at the Door',
        estimatedMinutes: 15,
        hook: 'In 2013, hackers stole 3 billion Yahoo account credentials in what remains the largest data breach in history. In 2021, a Colonial Pipeline password with no multi-factor authentication led to a ransomware attack that shut down fuel supply to the entire U.S. East Coast. Authentication isn\'t just a login screen \u2014 it\'s the single most critical security layer in any application, and getting it wrong has consequences that make headlines.',
        analogy: {
          front: 'You\'re at an airport. You show your passport at security and your boarding pass at the gate. Why are there two separate checks?',
          back: 'Authentication is the passport check \u2014 it verifies WHO you are. Authorization is the boarding pass check \u2014 it determines WHAT you\'re allowed to do. You can be authenticated (proven identity) but not authorized (wrong boarding pass for that flight). Both checks are essential, and they serve different purposes.',
        },
        content: [
          {
            type: 'text',
            body: 'Authentication and authorization sound similar but do completely different jobs. Authentication answers "Who are you?" \u2014 it verifies identity. Authorization answers "What are you allowed to do?" \u2014 it checks permissions. When you log into Netflix, that\'s authentication. When Netflix shows you the admin panel only because you\'re the account owner (not a profile user), that\'s authorization. Every secure app needs both, and confusing them is a common mistake.',
          },
          {
            type: 'text',
            body: 'The simplest authentication is email and password. But passwords alone are fragile \u2014 people reuse them, choose weak ones, and they get stolen in breaches. That\'s why modern apps add layers. Multi-Factor Authentication (MFA) requires a second proof of identity beyond the password \u2014 typically a code sent to your phone or generated by an authenticator app. Password hashing means the server never stores your actual password; it stores a mathematically transformed version that can\'t be reversed. Even if hackers steal the database, they get scrambled hashes, not usable passwords.',
          },
          {
            type: 'callout',
            body: 'When you click "Sign in with Google," you\'re using OAuth \u2014 a protocol that lets you log into App A using your identity from Service B, without App A ever seeing your Google password. Google confirms your identity and sends the app a token (a temporary access pass). The app trusts Google\'s confirmation and lets you in. This is why OAuth is so popular: it offloads the hardest part of authentication to companies that spend billions on security.',
          },
          {
            type: 'text',
            body: 'After you authenticate, the server needs to remember you as you navigate between pages. There are two main approaches. Sessions store your login state on the server \u2014 the server gives your browser a session ID cookie, and checks it with every request. JWTs (JSON Web Tokens) store the login state in the token itself \u2014 the server gives your browser an encrypted token containing your user ID and permissions, and your browser sends it with every request. Sessions are simpler but require server memory. JWTs are stateless and scale better but can\'t be easily revoked.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Authentication', definition: 'Verifying WHO a user is \u2014 confirming identity through passwords, tokens, biometrics, or third-party providers like Google.' },
              { term: 'Authorization', definition: 'Determining WHAT an authenticated user is allowed to do \u2014 checking permissions, roles, and access levels.' },
              { term: 'OAuth', definition: 'Open Authorization \u2014 a protocol that lets users log into an app using their identity from another service (Google, GitHub, Facebook) without sharing their password.' },
              { term: 'JWT', definition: 'JSON Web Token \u2014 an encrypted token containing user identity and permissions, sent with every request so the server can verify the user without storing session state.' },
              { term: 'Session', definition: 'A server-side record of a logged-in user. The server stores the state and gives the browser a session ID cookie to reference it.' },
              { term: 'MFA', definition: 'Multi-Factor Authentication \u2014 requiring two or more forms of identity verification (password + phone code, password + fingerprint) to log in.' },
              { term: 'Password Hashing', definition: 'A one-way mathematical transformation that converts a password into an irreversible string. The server stores the hash, never the actual password.' },
              { term: 'Token', definition: 'A temporary digital credential that proves authentication without requiring the user to re-enter their password on every request.' },
            ],
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'User Clicks "Sign in with Google"', description: 'Your app redirects the user to Google\'s login page. Your app never sees the user\'s Google password.' },
                { label: 'User Authenticates with Google', description: 'The user enters their Google credentials and passes MFA. Google verifies their identity on its own servers.' },
                { label: 'Google Sends Authorization Code', description: 'Google redirects the user back to your app with a temporary authorization code in the URL.' },
                { label: 'Your Server Exchanges Code for Token', description: 'Your backend sends that code to Google\'s API (along with your app\'s secret key) and receives an access token and user info.' },
                { label: 'User is Logged In', description: 'Your app creates a session or JWT using the verified user info from Google, and the user is now authenticated in your app.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the difference between authentication and authorization?',
              options: ['They are the same thing with different names', 'Authentication verifies WHO you are; authorization determines WHAT you can do', 'Authentication is for admins; authorization is for regular users', 'Authentication uses passwords; authorization uses tokens'],
              correct: 1,
              explanation: 'Authentication is identity verification (passport check). Authorization is permission checking (boarding pass check). You need authentication before authorization can happen.',
            },
            {
              question: 'Why does OAuth never share your Google password with the app you\'re logging into?',
              options: ['Because Google doesn\'t store passwords', 'Because the app uses a token from Google instead of needing the actual password', 'Because OAuth only works with email addresses', 'Because passwords are automatically deleted after login'],
              correct: 1,
              explanation: 'OAuth works by having Google verify your identity and then sending the app a token (temporary access pass). The app trusts Google\'s verification and never needs or sees your actual password.',
            },
            {
              question: 'Why do servers store password hashes instead of actual passwords?',
              options: ['Hashes take up less storage space', 'Hashes are faster to verify', 'If the database is breached, hackers get scrambled hashes that can\'t be reversed into real passwords', 'Hashing is required by law in all countries'],
              correct: 2,
              explanation: 'Password hashing is a one-way transformation. Even if attackers steal the entire database, they get irreversible hashes \u2014 not usable passwords. This is the last line of defense in a breach.',
            },
          ],
        },
        takeaway: 'Authentication verifies identity (who are you?), authorization checks permissions (what can you do?), and modern apps use OAuth, JWTs, and MFA to keep users secure without friction.',
      },
      {
        id: '2.4',
        title: 'Backend-as-a-Service \u2014 The Pre-Built Kitchen',
        estimatedMinutes: 15,
        hook: 'In 2020, a solo developer named Tony Dinh built a Twitter analytics tool called BlackMagic.so. He didn\'t write a single line of backend code \u2014 no server, no database configuration, no authentication system. He used Firebase for everything and grew it to $30,000 per month in revenue. Backend-as-a-Service (BaaS) platforms have flipped the script on app development: instead of spending months building infrastructure, you can have a production-ready backend in an afternoon.',
        analogy: {
          front: 'You want to open a restaurant. What\'s the difference between building a kitchen from scratch versus renting a fully equipped commercial kitchen?',
          back: 'Building from scratch (custom backend) means you design every inch \u2014 total control but months of work and high cost. Renting a commercial kitchen (BaaS) means everything is already there: ovens, fridges, prep stations. You just walk in and start cooking. You trade some customization for massive speed. BaaS platforms like Supabase and Firebase are that pre-built kitchen.',
        },
        content: [
          {
            type: 'text',
            body: 'Backend-as-a-Service (BaaS) is exactly what it sounds like: a complete backend that someone else has already built, and you plug into it. Instead of writing server code to handle user authentication, you call supabase.auth.signUp(). Instead of designing database tables and writing SQL queries, you use a visual dashboard to create tables and the platform auto-generates APIs for you. Instead of configuring file storage servers, you call storage.upload(). BaaS platforms handle the five backend jobs from Lesson 2.1 \u2014 you just configure them.',
          },
          {
            type: 'text',
            body: 'Supabase is the leading open-source BaaS. It gives you a PostgreSQL database (the industry standard), built-in authentication with email, OAuth, and magic links, auto-generated REST and GraphQL APIs, file storage, real-time subscriptions (your app updates instantly when data changes), and edge functions for custom server logic. Firebase, by Google, was the pioneer of this space. It offers a NoSQL database (Firestore), authentication, hosting, cloud functions, and excellent mobile SDKs. Appwrite is another open-source alternative gaining traction.',
          },
          {
            type: 'callout',
            body: 'The trade-off with BaaS is simple: speed versus control. You can build a complete app backend in a day instead of a month. But you\'re locked into that platform\'s way of doing things. If Supabase doesn\'t support a specific database feature you need, you\'re stuck. If Firebase changes its pricing (which it has), you can\'t easily migrate. For 80% of apps, BaaS is the right choice. For the other 20% that need deep customization, you\'ll need a custom backend.',
          },
          {
            type: 'text',
            body: 'CRUD is the foundation of what most backends do, and BaaS platforms make it trivial. CRUD stands for Create, Read, Update, Delete \u2014 the four basic operations you perform on any data. Create a new user account. Read a list of products. Update a shipping address. Delete an expired promotion. When you hear developers say "it\'s just a CRUD app," they mean the backend is straightforward data management without complex business logic. BaaS platforms auto-generate CRUD APIs for every table you create, meaning you can go from database table to working API in minutes.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'BaaS', definition: 'Backend-as-a-Service \u2014 a platform that provides a complete pre-built backend (database, auth, APIs, storage) so developers can build apps without writing server code.' },
              { term: 'Supabase', definition: 'An open-source BaaS built on PostgreSQL. Provides database, auth, auto-generated APIs, storage, real-time subscriptions, and edge functions.' },
              { term: 'Firebase', definition: 'Google\'s BaaS platform offering a NoSQL database (Firestore), authentication, cloud functions, hosting, and strong mobile SDKs.' },
              { term: 'CRUD', definition: 'Create, Read, Update, Delete \u2014 the four fundamental data operations that most backends perform. BaaS platforms auto-generate CRUD APIs.' },
              { term: 'Auto-generated APIs', definition: 'APIs that a BaaS platform creates automatically based on your database schema. You define the table; the platform creates the endpoints.' },
              { term: 'Appwrite', definition: 'An open-source BaaS alternative to Firebase and Supabase, offering auth, databases, storage, functions, and messaging.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each capability to whether you build it from scratch or get it included with BaaS.',
              pairs: [
                { left: 'User login with Google OAuth', right: 'BaaS: one config toggle in Supabase/Firebase' },
                { left: 'Custom recommendation algorithm', right: 'Build from scratch: unique business logic' },
                { left: 'Database with auto-generated APIs', right: 'BaaS: create table, APIs appear automatically' },
                { left: 'Proprietary real-time trading engine', right: 'Build from scratch: performance-critical custom code' },
                { left: 'File upload and image storage', right: 'BaaS: built-in storage with CDN' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What does BaaS provide that eliminates the need to write server code?',
              options: ['A frontend framework with built-in components', 'A pre-built backend with database, auth, APIs, and storage', 'A design tool for creating wireframes', 'A testing suite for automated QA'],
              correct: 1,
              explanation: 'BaaS platforms like Supabase and Firebase provide a complete backend out of the box \u2014 database, authentication, auto-generated APIs, and file storage \u2014 so you can build apps without writing traditional server code.',
            },
            {
              question: 'What does CRUD stand for?',
              options: ['Connect, Render, Upload, Deploy', 'Create, Read, Update, Delete', 'Cache, Route, Unpack, Distribute', 'Compile, Run, Update, Debug'],
              correct: 1,
              explanation: 'CRUD \u2014 Create, Read, Update, Delete \u2014 represents the four fundamental operations performed on data. Most backend functionality revolves around these operations.',
            },
            {
              question: 'When should you NOT use a BaaS platform?',
              options: ['When you need user authentication', 'When you need a database with APIs', 'When you need deep customization or complex proprietary business logic', 'When you want to launch quickly'],
              correct: 2,
              explanation: 'BaaS platforms trade customization for speed. If your app requires complex proprietary algorithms, unusual database patterns, or deep infrastructure control, a custom backend gives you the flexibility BaaS cannot.',
            },
          ],
        },
        takeaway: 'BaaS platforms like Supabase and Firebase give you a complete backend \u2014 database, auth, APIs, storage \u2014 in hours instead of months, but you trade deep customization for speed.',
      },
      {
        id: '2.5',
        title: 'Serverless \u2014 The Kitchen That Appears When You Need It',
        estimatedMinutes: 15,
        hook: 'Coca-Cola rebuilt their vending machine system using serverless functions on AWS Lambda. Instead of maintaining servers running 24/7 to handle occasional vending machine transactions, each transaction triggers a tiny function that runs for milliseconds and disappears. The result: they handle millions of transactions while paying only for the exact compute time used. No idle servers burning money at 3 AM when nobody\'s buying a Coke.',
        analogy: {
          front: 'Imagine you\'re running a food business. You could rent a full restaurant (paying rent 24/7) or run a pop-up kitchen that only exists when customers show up. Which makes more sense if your demand is unpredictable?',
          back: 'Serverless is the pop-up kitchen. There\'s no restaurant to maintain when it\'s empty. When an order arrives, a kitchen materializes, cooks the meal, serves it, and vanishes. You only pay for the minutes the kitchen was active. Traditional servers are the full restaurant \u2014 you pay rent whether you have zero customers or a hundred.',
        },
        content: [
          {
            type: 'text',
            body: 'Serverless computing is a model where you write small, focused functions and a cloud provider runs them on demand. You don\'t provision servers, manage operating systems, or worry about scaling. When a request comes in, the cloud provider spins up your function, executes it, and tears it down. You pay only for the milliseconds your code actually ran. The name "serverless" is slightly misleading \u2014 servers still exist, but you never see, manage, or think about them. It\'s like electricity: you don\'t maintain a power plant, you just flip a switch and pay for what you use.',
          },
          {
            type: 'text',
            body: 'Here\'s a practical example: a user uploads a profile photo to your app. Instead of running a server 24/7 that mostly sits idle waiting for uploads, you create a serverless function triggered by the upload event. The function activates, resizes the image into three sizes (thumbnail, medium, large), stores them in your CDN, updates the database with the new URLs, and shuts down. Total execution time: 800 milliseconds. Total cost: a fraction of a cent. If nobody uploads a photo for the next hour, you pay nothing.',
          },
          {
            type: 'text',
            body: 'The main downside is cold starts. When a serverless function hasn\'t been called recently, the cloud provider needs a moment to spin up a fresh execution environment \u2014 typically 100-500 milliseconds of extra delay. Subsequent calls while the function is "warm" are near-instant. This matters for user-facing features where every millisecond counts, but is irrelevant for background tasks like image processing or sending emails. Edge functions are a newer variation that run on servers distributed globally, closer to your users, reducing latency even further. Supabase Edge Functions, Vercel Edge Functions, and Cloudflare Workers are popular options.',
          },
          {
            type: 'callout',
            body: 'The free tiers for serverless are remarkably generous. AWS Lambda gives you 1 million free requests per month. Vercel gives 100,000 function executions on its free plan. For a startup or side project, you might run for months without paying a cent for compute. This is why serverless has become the default for indie developers and small teams.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Serverless', definition: 'A cloud computing model where you write functions and the provider handles all server management, scaling, and infrastructure. You pay only for actual execution time.' },
              { term: 'Lambda', definition: 'AWS Lambda \u2014 Amazon\'s serverless function service and the original pioneer of Function-as-a-Service. Runs code in response to events.' },
              { term: 'Edge Functions', definition: 'Serverless functions that run on globally distributed servers close to the user, reducing latency. Offered by Vercel, Supabase, Cloudflare, and others.' },
              { term: 'Cold Start', definition: 'The delay (100-500ms) when a serverless function is invoked after being idle, as the cloud provider spins up a fresh execution environment.' },
              { term: 'Warm Start', definition: 'When a serverless function is invoked while its execution environment is still active from a recent call, resulting in near-instant response.' },
              { term: 'Function-as-a-Service', definition: 'The cloud computing category that serverless belongs to \u2014 you deploy individual functions rather than entire applications, and the provider handles everything else.' },
            ],
          },
          {
            type: 'cost-calculator',
            config: {
              sliders: [
                { name: 'Monthly Requests', min: 1000, max: 1000000, default: 50000, step: 1000 },
                { name: 'Avg Execution Time (ms)', min: 50, max: 2000, default: 200, step: 50 },
              ],
              formula: 'Traditional Server: ~$20/month fixed (even at 0 requests). Serverless: ~$[((Monthly Requests * Avg Execution Time (ms)) / 1000 / 3600 * 0.0000167).toFixed(2)]/month (pay per use). Savings increase as traffic becomes more variable.',
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is a "cold start" in serverless computing?',
              options: ['When the server crashes due to cold weather in the data center', 'The delay when a function spins up after being idle, as the cloud provider creates a fresh environment', 'When a function runs out of memory', 'The time it takes to deploy a new function for the first time'],
              correct: 1,
              explanation: 'A cold start is the 100-500ms delay when a serverless function hasn\'t been called recently and the cloud provider needs to spin up a new execution environment. Warm functions respond near-instantly.',
            },
            {
              question: 'Why is serverless cost-effective for apps with unpredictable traffic?',
              options: ['Because serverless functions are written in cheaper programming languages', 'Because you only pay for actual execution time, not for idle servers running 24/7', 'Because serverless doesn\'t require a database', 'Because cloud providers offer serverless for free permanently'],
              correct: 1,
              explanation: 'Traditional servers cost money whether they\'re busy or idle. Serverless charges only for the milliseconds your code actually executes. If nobody uses your app at 3 AM, you pay nothing at 3 AM.',
            },
          ],
        },
        takeaway: 'Serverless lets you run backend code without managing servers \u2014 functions spin up on demand, scale automatically, and you only pay for actual execution time.',
      },
      {
        id: '2.6',
        title: 'Webhooks & Cron Jobs \u2014 Automation Behind the Scenes',
        estimatedMinutes: 15,
        hook: 'When you pay for a Spotify subscription, you never manually click a button that says "activate my premium account." The moment Stripe processes your payment, a webhook fires from Stripe to Spotify\'s server saying "this user just paid," and Spotify instantly unlocks your premium features. Meanwhile, every night at midnight, a cron job runs inside Spotify\'s backend to check for subscriptions that expired today and downgrade those accounts. Webhooks and cron jobs are the silent automations that keep modern apps running without human intervention.',
        analogy: {
          front: 'What\'s the difference between a doorbell and an alarm clock? They both get your attention, but in fundamentally different ways.',
          back: 'A webhook is a doorbell \u2014 it rings only when someone shows up (event-driven). You don\'t check the door every five minutes; you wait for the bell. A cron job is an alarm clock \u2014 it goes off at a set time regardless of what\'s happening (schedule-driven). Both automate actions, but webhooks respond to events and cron jobs follow schedules.',
        },
        content: [
          {
            type: 'text',
            body: 'A webhook is a way for one service to notify another service when something happens. Instead of your app constantly asking Stripe "has the user paid yet?" every few seconds (that\'s called polling, and it\'s wasteful), you give Stripe a URL on your server and say "call this URL whenever a payment succeeds." Stripe then sends an HTTP POST request to your URL with the payment details the instant it happens. Your server receives it, processes it, and takes action \u2014 like granting premium access or sending a receipt email.',
          },
          {
            type: 'text',
            body: 'Webhooks are everywhere in modern apps. GitHub sends webhooks when someone pushes code (triggering automatic deployments). Stripe sends webhooks for payments, refunds, and subscription changes. Shopify sends webhooks when an order is placed. Twilio sends webhooks when an SMS is received. The pattern is always the same: "when X happens in Service A, notify Service B by calling this URL." This event-driven architecture is far more efficient than polling, because no work happens until there\'s actually something to respond to.',
          },
          {
            type: 'text',
            body: 'A cron job is a task that runs on a schedule, like clockwork. The name comes from the Unix "cron" utility that\'s been scheduling tasks since the 1970s. Common examples: generating a daily analytics report at 6 AM, cleaning up expired sessions every hour, sending weekly digest emails every Monday morning, checking for expiring subscriptions at midnight, and backing up the database every six hours. Cron jobs don\'t wait for events \u2014 they run on time whether there\'s work to do or not.',
          },
          {
            type: 'callout',
            body: 'A practical example combining both: your SaaS app uses Stripe for payments. When a user pays, Stripe sends a webhook to your server (event-driven \u2014 grant access immediately). Every night at midnight, a cron job checks all subscriptions and sends a reminder email to anyone whose trial expires in 3 days (schedule-driven \u2014 proactive outreach). Webhooks handle real-time reactions; cron jobs handle routine maintenance.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Webhook', definition: 'An HTTP callback \u2014 when an event occurs in one service, it sends an HTTP POST request to a URL you specify, notifying your server in real-time.' },
              { term: 'Cron Job', definition: 'A scheduled task that runs automatically at defined intervals (every hour, daily at 6 AM, weekly on Mondays). Named after the Unix cron utility.' },
              { term: 'Event-driven', definition: 'An architecture where actions are triggered by events (user paid, file uploaded, message received) rather than running on a schedule or being manually initiated.' },
              { term: 'Polling', definition: 'Repeatedly checking a service for updates at regular intervals. Less efficient than webhooks because most checks find nothing new.' },
              { term: 'Payload', definition: 'The data sent in a webhook request \u2014 the details of what happened (payment amount, user ID, event type, timestamp).' },
              { term: 'Endpoint', definition: 'The specific URL on your server that receives webhook notifications. You register this URL with the external service.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each scenario to whether it should use a webhook or a cron job.',
              pairs: [
                { left: 'Grant premium access the instant a payment succeeds', right: 'Webhook from Stripe' },
                { left: 'Send a weekly analytics report every Monday at 9 AM', right: 'Cron job' },
                { left: 'Deploy code automatically when someone pushes to GitHub', right: 'Webhook from GitHub' },
                { left: 'Clean up expired user sessions every hour', right: 'Cron job' },
                { left: 'Send a confirmation SMS when a Shopify order is placed', right: 'Webhook from Shopify' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Webhooks and cron jobs are the building blocks of data pipelines (also called ETL \u2014 Extract, Transform, Load). A data pipeline pulls data from one source (Extract), processes or cleans it (Transform), and stores it somewhere useful (Load). Example: a cron job runs nightly to extract new orders from Shopify (webhook), transform the data into a report format, and load it into a dashboard database. Tools like Apache Airflow, Prefect, and Inngest orchestrate complex pipelines with retry logic, scheduling, and monitoring. For simple pipelines, a cron job calling a serverless function is all you need.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the main advantage of webhooks over polling?',
              options: ['Webhooks are more secure than polling', 'Webhooks only fire when something actually happens, avoiding wasteful repeated checks', 'Webhooks work without an internet connection', 'Webhooks are faster because they use a different protocol'],
              correct: 1,
              explanation: 'Polling wastes resources by repeatedly checking for changes that usually haven\'t happened. Webhooks are event-driven \u2014 they only fire when there\'s an actual event to report, making them far more efficient.',
            },
            {
              question: 'When would you use a cron job instead of a webhook?',
              options: ['When you need to respond to a payment event', 'When you need to run a task on a regular schedule regardless of external events', 'When you need real-time notifications from a third-party service', 'When you need to deploy code after a git push'],
              correct: 1,
              explanation: 'Cron jobs are for scheduled, recurring tasks that need to run at specific times \u2014 like daily reports, hourly cleanups, or weekly emails \u2014 regardless of whether any external event triggered them.',
            },
          ],
        },
        takeaway: 'Webhooks are doorbells (event-driven, real-time reactions), cron jobs are alarm clocks (schedule-driven, routine tasks) \u2014 together they automate everything that happens behind the scenes.',
      },
      {
        id: '2.7',
        title: 'Environment Variables \u2014 The Secret Vault',
        estimatedMinutes: 15,
        hook: 'In 2023, a developer accidentally pushed their OpenAI API key to a public GitHub repository. Within 11 minutes \u2014 not hours, minutes \u2014 automated bots had found it, and within an hour, someone had racked up $1,200 in API charges on their account. GitHub now scans for exposed secrets automatically, but by the time you get the alert, the damage is often done. This lesson is about the simple practice that prevents this entirely: never put secrets in your code.',
        analogy: {
          front: 'Your code is a building with glass walls \u2014 everyone on GitHub can see inside. Where do you keep your valuables?',
          back: 'You keep them in a safe (environment variables). The safe sits inside the building, but its contents are invisible even through the glass walls. Your code references the safe ("get the thing labeled STRIPE_KEY") without ever revealing what\'s inside. The .env file is the safe, .gitignore is the instruction to never photograph the safe\'s contents, and environment variables are the labels on each item inside.',
        },
        content: [
          {
            type: 'text',
            body: 'Environment variables are values stored outside your code that your application reads at runtime. They\'re called "environment" variables because they belong to the environment your code runs in (your laptop, a server, a cloud function) rather than to the code itself. The most common use is storing secrets: API keys, database passwords, encryption keys, and third-party service credentials. But they\'re also used for configuration that changes between environments \u2014 like using a test database URL in development and a production database URL in production.',
          },
          {
            type: 'text',
            body: 'In practice, you create a file called .env in your project root. Inside it, you list key-value pairs: STRIPE_KEY=sk_live_abc123, DATABASE_URL=postgresql://user:pass@host/db, OPENAI_API_KEY=sk-xyz789. Your code reads these values using process.env.STRIPE_KEY (in Node.js) or os.environ["STRIPE_KEY"] (in Python). The critical step: you add .env to your .gitignore file, which tells Git to never track or upload it. Your code goes to GitHub; your secrets stay on your machine.',
          },
          {
            type: 'callout',
            body: 'Key rotation is the practice of regularly changing your API keys and passwords, even if they haven\'t been compromised. Think of it like changing your locks periodically. Most cloud services let you generate new keys and invalidate old ones with a click. If you suspect a key has been exposed, rotate it immediately \u2014 don\'t wait to confirm. The cost of generating a new key is zero; the cost of a compromised key can be thousands.',
          },
          {
            type: 'text',
            body: 'When you deploy your app to production, you don\'t upload a .env file to the server. Instead, you set environment variables directly in your hosting platform\'s dashboard. Vercel, Railway, Supabase, AWS \u2014 they all have a "Environment Variables" section where you paste your secrets. The platform injects them into your app\'s runtime environment securely. This means your secrets exist in exactly two places: your local .env file (for development) and your hosting platform\'s secure storage (for production). Never anywhere in your code or Git history.',
          },
          {
            type: 'vocab',
            terms: [
              { term: '.env File', definition: 'A local file containing key-value pairs of secrets and configuration (API_KEY=abc123). Must be listed in .gitignore to prevent it from being committed to version control.' },
              { term: 'Environment Variables', definition: 'Values stored in the runtime environment (not in code) that your application reads at startup. Used for secrets, API keys, and environment-specific configuration.' },
              { term: 'Secrets', definition: 'Sensitive values like API keys, database passwords, and encryption keys that must never appear in source code or version control.' },
              { term: '.gitignore', definition: 'A file that tells Git which files and folders to exclude from version control. Your .env file should always be listed here.' },
              { term: 'Key Rotation', definition: 'The practice of regularly replacing API keys and passwords with new ones, invalidating the old ones. A core security hygiene practice.' },
            ],
          },
          {
            type: 'spot-the-issue',
            config: {
              code: 'const stripe = require(\'stripe\')(\'sk_live_YOUR_KEY_HERE\');\n\nconst db = {\n  host: \'production-db.aws.com\',\n  password: \'SuperSecret123!\',\n  port: 5432\n};\n\n// .gitignore file:\n// node_modules/\n// dist/',
              issues: [
                { line: 1, hint: 'What is hardcoded in the Stripe initialization?', explanation: 'The live Stripe secret key is hardcoded directly in the source code. Anyone who sees this file (including anyone on GitHub) has full access to your Stripe account. Use process.env.STRIPE_KEY instead.' },
                { line: 4, hint: 'What sensitive information is visible in the database config?', explanation: 'The database password is hardcoded as a plain string. If this code is on GitHub, anyone can connect to your production database. Use process.env.DB_PASSWORD instead.' },
                { line: 9, hint: 'What critical file is missing from .gitignore?', explanation: 'The .gitignore file doesn\'t include .env. If you create a .env file later and forget to add it to .gitignore, your secrets will be committed to Git history. Always include .env in .gitignore from day one.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should API keys never be written directly in source code?',
              options: ['Because it makes the code harder to read', 'Because code is often stored on public repositories where anyone (including bots) can find and exploit exposed keys', 'Because API keys expire too quickly to hardcode', 'Because programming languages don\'t support strings that long'],
              correct: 1,
              explanation: 'Source code often ends up on GitHub or other public repositories. Automated bots scan public repos for exposed API keys and can exploit them within minutes. Environment variables keep secrets out of code entirely.',
            },
            {
              question: 'What is the purpose of adding .env to .gitignore?',
              options: ['To make the .env file run faster', 'To encrypt the .env file automatically', 'To prevent Git from tracking the .env file, keeping secrets out of version control', 'To allow multiple developers to share the same .env file'],
              correct: 2,
              explanation: 'Adding .env to .gitignore tells Git to ignore the file completely \u2014 it won\'t be committed, pushed, or shared. This ensures your secrets stay local and never appear in your repository\'s history.',
            },
          ],
        },
        takeaway: 'Never put secrets in code \u2014 use environment variables stored in .env files locally and in your hosting platform\'s secure settings for production, and always add .env to .gitignore.',
      },
      {
        id: '2.8',
        title: 'Middleware \u2014 The Security Checkpoint',
        estimatedMinutes: 15,
        hook: 'Every request that hits Shopify\'s backend passes through 12 layers of middleware before reaching the actual business logic. Input validation, authentication, authorization, rate limiting, logging, CORS checking, request parsing, error handling \u2014 all happening invisibly in sequence. If any layer fails, the request is rejected before it ever touches the core application. Middleware is the assembly line of quality checks that protects your backend from the chaos of the open internet.',
        analogy: {
          front: 'You\'re entering an airport. You don\'t walk straight to the airplane. What checkpoints do you pass through, and why are they in that specific order?',
          back: 'Middleware is the layered airport security process. Check-in counter (parse the request and extract the data). Passport control (authentication \u2014 verify identity). Security scanner (input validation \u2014 reject dangerous items). Boarding pass check (authorization \u2014 confirm you belong on this flight). Each checkpoint happens in order, and failing any one stops you from proceeding further.',
        },
        content: [
          {
            type: 'text',
            body: 'Middleware is code that sits between an incoming request and your main application logic. When a request arrives at your server, it doesn\'t go straight to the function that handles the business logic. Instead, it passes through a pipeline of middleware functions, each performing a specific check or transformation. If all middleware passes, the request reaches your handler. If any middleware fails, the request is rejected with an appropriate error, and your main code never even sees it.',
          },
          {
            type: 'text',
            body: 'The most common middleware functions serve distinct purposes. Input validation checks that the incoming data is the right format and doesn\'t contain malicious content \u2014 rejecting requests with missing required fields or suspiciously long strings before they can cause damage. Authentication middleware verifies the user\'s identity by checking their JWT token or session cookie. Authorization middleware checks whether the authenticated user has permission to perform the requested action \u2014 a regular user can read posts but only an admin can delete them. Rate limiting tracks how many requests each user makes and blocks them if they exceed the limit, preventing abuse and denial-of-service attacks.',
          },
          {
            type: 'text',
            body: 'CORS (Cross-Origin Resource Sharing) middleware controls which websites are allowed to make requests to your API. Without it, any website could call your API \u2014 which is a security risk. CORS middleware checks the origin of each request and only allows requests from domains you\'ve approved (like your own frontend). Logging middleware records every request that passes through \u2014 who made it, when, what they requested, and how long it took \u2014 creating an audit trail essential for debugging and monitoring. Error handling middleware catches any unexpected errors that occur during processing and returns a clean error response instead of exposing internal server details.',
          },
          {
            type: 'callout',
            body: 'The order of middleware matters. You always validate input before authenticating (why waste time checking a token if the request body is garbage?). You always authenticate before authorizing (you can\'t check permissions for an unknown user). And logging should wrap everything so you capture both successful and failed requests. Think of it as the airport sequence: you check in before going through security, and security happens before the gate.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Middleware', definition: 'Functions that execute in sequence between an incoming request and the main handler, each performing a specific check (validation, auth, logging) or transformation.' },
              { term: 'Request Pipeline', definition: 'The ordered sequence of middleware functions that every incoming request passes through before reaching your core application logic.' },
              { term: 'Rate Limiting', definition: 'Middleware that tracks request frequency per user/IP and blocks requests that exceed a defined threshold, preventing abuse and protecting server resources.' },
              { term: 'CORS', definition: 'Cross-Origin Resource Sharing \u2014 middleware that controls which external websites are permitted to make requests to your API. A critical browser security mechanism.' },
              { term: 'Input Validation', definition: 'Middleware that checks incoming data for correct format, required fields, appropriate length, and absence of malicious content before processing it.' },
              { term: 'Logging', definition: 'Middleware that records details of every request (who, when, what, how long) for debugging, monitoring, and security auditing purposes.' },
            ],
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Request Arrives', description: 'An HTTP request hits your server from the internet. It could be legitimate, malformed, or malicious \u2014 you don\'t know yet.' },
                { label: 'Input Validation', description: 'Check that the request body has required fields, correct data types, and safe content. Reject malformed or suspicious requests immediately.' },
                { label: 'Authentication', description: 'Verify the user\'s identity by checking their JWT token or session cookie. Reject requests with invalid or expired credentials.' },
                { label: 'Authorization', description: 'Check if this authenticated user has permission to perform this specific action. A user can read posts but only an admin can delete them.' },
                { label: 'Rate Limiting', description: 'Check if this user has exceeded their request quota. Block excessive requests to prevent abuse and protect server resources.' },
                { label: 'Handler Executes', description: 'All checks passed. The request reaches your actual business logic, processes the data, and sends back a response.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why does the order of middleware matter?',
              options: ['It doesn\'t \u2014 middleware can run in any order', 'Because each layer depends on the previous one (e.g., you must authenticate before checking authorization)', 'Because faster middleware should always run last', 'Because the database requires a specific order'],
              correct: 1,
              explanation: 'Middleware order is critical because each layer builds on the previous one. You validate input before wasting time on auth. You authenticate before checking permissions. You log everything so failures are captured.',
            },
            {
              question: 'What does CORS middleware prevent?',
              options: ['Users from creating accounts', 'Unauthorized websites from making requests to your API', 'Database queries from running too slowly', 'Developers from deploying broken code'],
              correct: 1,
              explanation: 'CORS middleware checks which domain (origin) a request is coming from and only allows requests from domains you\'ve explicitly approved. Without it, any website could call your API.',
            },
          ],
        },
        takeaway: 'Middleware is a pipeline of security checkpoints \u2014 validation, authentication, authorization, rate limiting, CORS, and logging \u2014 that every request passes through before reaching your application logic.',
      },
      {
        id: '2.9',
        title: 'The Backend Technology Decision Guide',
        estimatedMinutes: 15,
        hook: 'The most common mistake new builders make isn\'t choosing the wrong backend technology \u2014 it\'s spending weeks agonizing over the choice instead of building. The truth is, for 90% of projects, multiple options would work fine. But there are specific scenarios where one choice clearly beats the others. This lesson gives you a decision framework so you can pick confidently in minutes, not weeks, and get back to what matters: building your product.',
        analogy: {
          front: 'You\'re opening a food business. A food truck, a casual diner, a fine dining restaurant, and a catering company all need kitchens \u2014 but very different ones. How do you choose?',
          back: 'The kitchen should match the business. A food truck needs a compact, efficient setup (serverless/BaaS). A casual diner needs a solid, standard kitchen (Node.js/Express or Next.js API routes). A fine dining restaurant needs a high-end custom kitchen (Python/FastAPI or Go for performance). A catering company needs industrial-scale equipment (microservices architecture). Match the tool to the job, not the hype.',
        },
        content: [
          {
            type: 'text',
            body: 'Let\'s cut through the noise. Your backend technology choice should be driven by three factors: what your app actually needs, what you (or your team) already know, and how fast you need to launch. A solo founder building an MVP should optimize for speed \u2014 that usually means BaaS (Supabase/Firebase) or Next.js API routes. A team building a data-heavy application should optimize for the right tool \u2014 that usually means Python/FastAPI. And if you\'re building something real-time or high-concurrency, Node.js or Go should be your starting point.',
          },
          {
            type: 'text',
            body: 'Here are the main options and when each shines. Supabase or Firebase (BaaS): best when you need standard CRUD operations, authentication, and storage, and want to launch in days. You sacrifice customization for speed. Next.js API Routes: best when your frontend is already in React/Next.js and your backend needs are moderate \u2014 a few endpoints, some server-side logic, maybe webhook handlers. Everything lives in one project. Node.js with Express: the workhorse choice for custom backends. Huge ecosystem, massive community, works for almost anything. Best when you need full control but want a mature, well-documented framework.',
          },
          {
            type: 'text',
            body: 'Python with FastAPI: best for data-heavy applications, machine learning backends, or when your team knows Python. FastAPI is modern, fast, and has excellent automatic documentation. Its async support makes it competitive with Node.js for performance. Serverless functions (Vercel, AWS Lambda, Cloudflare Workers): best for apps with highly variable traffic, background processing, or when you want zero infrastructure management. Each function is independent, scales automatically, and costs almost nothing at low volume.',
          },
          {
            type: 'callout',
            body: 'The "when NOT to use" is more important than the "when to use." Don\'t use BaaS when you need complex custom algorithms or unusual data patterns. Don\'t use serverless for long-running processes (most have a 10-30 second timeout). Don\'t use a microservices architecture if you\'re one person \u2014 the operational overhead will crush you. Don\'t pick a technology just because a famous company uses it \u2014 Netflix\'s problems are not your problems.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What type of app are you building?',
              options: [
                {
                  label: 'MVP / Side Project (launch fast)',
                  next: {
                    question: 'Do you need custom business logic beyond CRUD?',
                    options: [
                      { label: 'No \u2014 mostly data storage, auth, and basic APIs', result: 'Use Supabase or Firebase (BaaS). You\'ll have a working backend in hours, not weeks. Migrate to custom later if needed.' },
                      { label: 'Yes \u2014 some custom logic but frontend is React/Next.js', result: 'Use Next.js API Routes. Keep everything in one project. Add Supabase for database and auth. Best of both worlds.' },
                    ],
                  },
                },
                {
                  label: 'Data-Heavy / ML Application',
                  next: {
                    question: 'Is your team primarily Python developers?',
                    options: [
                      { label: 'Yes \u2014 Python is our strength', result: 'Use Python with FastAPI. Excellent for data processing, ML model serving, and scientific computing. Auto-generates API docs.' },
                      { label: 'No \u2014 we prefer JavaScript/TypeScript', result: 'Use Node.js with Express or Fastify. Strong data processing libraries exist in JS. Consider Python microservices just for ML components.' },
                    ],
                  },
                },
                {
                  label: 'Real-Time / High-Concurrency App',
                  next: {
                    question: 'How critical is real-time performance?',
                    options: [
                      { label: 'Chat, live updates, collaborative editing', result: 'Use Node.js (Express or Fastify) with WebSockets (Socket.io). Node\'s event loop excels at concurrent connections. Add Supabase Realtime for simpler use cases.' },
                      { label: 'High-throughput API serving millions of requests', result: 'Use Go or Rust for maximum performance. If that\'s too steep a learning curve, Node.js with Fastify handles high throughput well for most scenarios.' },
                    ],
                  },
                },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A solo founder building an MVP that needs user auth and basic CRUD should choose:',
              options: ['Go with a microservices architecture for future scalability', 'BaaS (Supabase or Firebase) to launch in days, not months', 'A custom C++ backend for maximum performance', 'Ruby on Rails because it\'s battle-tested'],
              correct: 1,
              explanation: 'For an MVP, speed to market is everything. BaaS platforms give you auth, database, and APIs out of the box. You can always migrate to a custom backend when you outgrow it \u2014 but first, validate your idea.',
            },
            {
              question: 'When should you avoid using serverless functions?',
              options: ['When you have unpredictable traffic patterns', 'When you need to process quick, event-driven tasks', 'When your process needs to run for more than 30 seconds continuously', 'When you want to minimize infrastructure costs'],
              correct: 2,
              explanation: 'Most serverless platforms have execution time limits (10-30 seconds typically). Long-running processes like video encoding, large data imports, or complex ML training need a traditional server or dedicated compute.',
            },
          ],
        },
        takeaway: 'Choose your backend based on what your app needs, what your team knows, and how fast you must launch \u2014 not based on what big tech companies use.',
      },
      {
        id: '2.10',
        title: 'Design Your Backend',
        estimatedMinutes: 20,
        hook: 'You now understand the five jobs of a backend, how APIs work, authentication flows, BaaS platforms, serverless computing, webhooks, cron jobs, environment variables, and middleware. That\'s not a collection of random facts \u2014 it\'s a complete toolkit. In this capstone lesson, you\'ll put it all together by designing a backend architecture for a real application. No code required \u2014 just decisions. And those decisions are the most important part of building any product.',
        analogy: {
          front: 'You\'ve learned what every tool in the workshop does. Now it\'s time to build something. What comes first \u2014 picking up a hammer, or looking at the blueprint?',
          back: 'The blueprint always comes first. Designing your backend means deciding which tools to use (and which to skip) before writing a single line of code. The best developers spend more time designing than coding. A well-designed backend is simple to build; a poorly designed one is expensive to fix.',
        },
        content: [
          {
            type: 'text',
            body: 'Designing a backend means answering a series of decisions in the right order. First: what is the core job of this backend? A social app\'s backend is primarily about storing and retrieving user-generated content. A marketplace\'s backend is about connecting buyers and sellers with transactions in between. An analytics dashboard\'s backend is about ingesting, processing, and visualizing data. The core job shapes every decision that follows.',
          },
          {
            type: 'text',
            body: 'Second: choose your backend type. For most new projects, the choice is between BaaS (Supabase/Firebase for speed), framework with BaaS (Next.js API routes + Supabase for flexibility with speed), or custom server (Node.js/Express or Python/FastAPI for full control). Third: choose your authentication method. Email/password is simplest. OAuth ("Sign in with Google") is the most user-friendly. Magic links (passwordless email login) are gaining popularity. Most apps combine OAuth as primary with email/password as fallback.',
          },
          {
            type: 'text',
            body: 'Fourth: plan your data model \u2014 what data you store and how it relates. Users have profiles, profiles have posts, posts have comments. This becomes your database schema (covered in depth in Chapter 3). Fifth: identify your integrations \u2014 payments (Stripe), email (SendGrid/Resend), file storage (Supabase Storage/S3), analytics (PostHog/Mixpanel). Sixth: plan your automation \u2014 which events need webhooks (payment success, user signup) and which tasks need cron jobs (daily reports, cleanup). Seventh: define your middleware pipeline \u2014 what checks every request must pass through.',
          },
          {
            type: 'callout',
            body: 'A common trap is over-engineering. Your v1 backend should be the simplest thing that works. You don\'t need microservices, Kubernetes, or a distributed cache for your first version. Supabase + a few serverless functions + Stripe can power a SaaS app serving thousands of users. Scale when you have the problem, not before. Instagram served 30 million users on a single Django server before rebuilding their architecture.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Backend Type',
                  options: [
                    { name: 'BaaS (Supabase)', description: 'Pre-built backend with PostgreSQL, auth, APIs, storage, and real-time. Best for: MVPs, standard CRUD apps, solo developers. Launch in hours.' },
                    { name: 'BaaS (Firebase)', description: 'Google\'s BaaS with Firestore (NoSQL), auth, hosting, and cloud functions. Best for: mobile-first apps, real-time features, Google ecosystem.' },
                    { name: 'Next.js API Routes', description: 'Backend endpoints alongside your React frontend in one project. Best for: moderate backend needs, full-stack JS teams, Vercel deployment.' },
                    { name: 'Node.js + Express', description: 'The most popular custom backend framework. Best for: full control, complex business logic, large ecosystem of packages.' },
                    { name: 'Python + FastAPI', description: 'Modern Python framework with async support and auto-docs. Best for: data-heavy apps, ML backends, Python teams.' },
                    { name: 'Serverless Functions', description: 'Individual functions that run on demand. Best for: event-driven tasks, variable traffic, zero infrastructure management.' },
                  ],
                },
                {
                  name: 'Auth Method',
                  options: [
                    { name: 'Email + Password', description: 'Traditional login. Simple to implement, familiar to users. Requires password hashing, reset flows, and ideally MFA.' },
                    { name: 'OAuth (Google, GitHub)', description: 'Delegate authentication to trusted providers. Best user experience, highest conversion, no password management needed.' },
                    { name: 'Magic Links', description: 'Passwordless login via email link. Click link, you\'re in. Growing in popularity. No passwords to forget or steal.' },
                    { name: 'OAuth + Email Fallback', description: 'OAuth as primary option, email/password as backup. Covers all users. The most common pattern in modern SaaS apps.' },
                  ],
                },
                {
                  name: 'Database',
                  options: [
                    { name: 'PostgreSQL (via Supabase)', description: 'Industry-standard relational database with Supabase\'s auto-generated APIs. Best for: structured data with relationships.' },
                    { name: 'MongoDB', description: 'Document-based NoSQL database. Flexible schema, good for unstructured or rapidly changing data models.' },
                    { name: 'Firestore', description: 'Firebase\'s NoSQL database with real-time sync. Best for: real-time apps, mobile-first, offline support.' },
                    { name: 'SQLite', description: 'Lightweight file-based database. Best for: prototypes, single-server apps, embedded databases. Zero configuration.' },
                  ],
                },
                {
                  name: 'Hosting',
                  options: [
                    { name: 'Vercel', description: 'Best for Next.js apps. Automatic deployments from Git, serverless functions, edge network. Generous free tier.' },
                    { name: 'Railway', description: 'Simple cloud platform for any backend. Deploy from Git, managed databases, easy environment variables. Great DX.' },
                    { name: 'AWS', description: 'The most comprehensive cloud platform. Lambda, EC2, S3, RDS \u2014 everything. Best for scale, but steeper learning curve.' },
                    { name: 'Fly.io', description: 'Deploy servers globally with minimal configuration. Great for apps that need low latency worldwide.' },
                  ],
                },
              ],
            },
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Define Core Requirements', description: 'List what your backend must do: auth, data storage, payments, notifications, file uploads. This scopes your decisions.' },
                { label: 'Choose Backend Type + Database', description: 'BaaS for speed, custom for control, or hybrid. Pick the database that matches your data relationships.' },
                { label: 'Set Up Authentication', description: 'Configure your auth method (OAuth, email, magic links). This is always step one because almost everything else depends on knowing who the user is.' },
                { label: 'Build Core API Endpoints', description: 'Create the CRUD operations for your main data models. If using BaaS, these are auto-generated. If custom, define your routes and handlers.' },
                { label: 'Add Integrations + Automation', description: 'Connect payment processing, email services, and file storage. Set up webhooks for real-time events and cron jobs for scheduled tasks.' },
                { label: 'Configure Middleware + Security', description: 'Set up input validation, rate limiting, CORS, logging, and error handling. Lock down environment variables. Test the pipeline end to end.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What should be the FIRST step when designing a backend?',
              options: ['Choose a programming language', 'Set up the database schema', 'Define what your backend actually needs to do', 'Deploy to AWS'],
              correct: 2,
              explanation: 'Before choosing any technology, you must define your requirements. What does your backend need to do? Auth, payments, real-time, file uploads? Your requirements drive every technology decision that follows.',
            },
            {
              question: 'Why is authentication typically set up before other features?',
              options: ['Because authentication is the hardest feature to build', 'Because almost every other feature depends on knowing who the user is', 'Because hosting providers require authentication first', 'Because it\'s the only feature users care about'],
              correct: 1,
              explanation: 'Most backend operations need to know which user is making the request. Saving data, checking permissions, personalizing content, processing payments \u2014 all depend on user identity. Auth is the foundation.',
            },
            {
              question: 'A solo developer building an MVP with standard CRUD, user auth, and Stripe payments should likely choose:',
              options: ['Custom Go microservices on AWS EKS', 'Supabase (BaaS) + serverless functions for Stripe webhooks', 'A Ruby on Rails monolith with custom DevOps', 'A distributed event-sourcing architecture'],
              correct: 1,
              explanation: 'For a solo dev building an MVP, Supabase provides the database, auth, and auto-generated APIs out of the box. A single serverless function handles the Stripe webhook. This stack can be set up in a day and scales to thousands of users.',
            },
            {
              question: 'What is the biggest risk of over-engineering your v1 backend?',
              options: ['It might be too fast', 'It might be too secure', 'You spend months building infrastructure instead of validating your product idea', 'It might be too reliable'],
              correct: 2,
              explanation: 'The purpose of a v1 is to validate your idea with real users. Spending months on complex architecture means months without user feedback. Build the simplest backend that works, then evolve based on real needs.',
            },
            {
              question: 'Which combination covers the complete backend build order?',
              options: ['Database first, then auth, then hosting, then API', 'Requirements, then backend type + database, then auth, then APIs, then integrations, then middleware', 'Middleware first, then APIs, then auth, then database', 'Deploy first, then build features as needed'],
              correct: 1,
              explanation: 'The correct order is: define requirements, choose your stack, set up authentication (foundation), build core APIs, add integrations and automation, then configure middleware and security. Each step builds on the previous one.',
            },
          ],
        },
        takeaway: 'Designing a backend is a series of decisions made in order: define requirements, choose your stack, set up auth, build APIs, add integrations, and configure security \u2014 simplest thing that works first.',
      },
    ],
  },
  {
    id: 3,
    title: 'Databases \u2014 Where Everything Is Remembered',
    subtitle: 'From spreadsheets to distributed data stores',
    icon: 'Database',
    lessons: [
      {
        id: '3.1',
        title: 'The World\'s Most Organized Pantry',
        estimatedMinutes: 15,
        hook: 'Every app you use remembers things about you \u2014 your username, your orders, your playlists, your messages. Close the app, restart your phone, even switch devices \u2014 it\'s all still there. That\'s not magic. That\'s a database. And the choice between different types of databases is one of the most consequential decisions you\'ll make when building a product.',
        analogy: {
          front: 'Imagine two ways to organize a massive library. Option A: the Dewey Decimal System \u2014 every book has a strict category, a specific shelf, and a precise call number. You can find any book instantly, but adding a new category requires reorganizing entire sections. Option B: a giant warehouse where each box can contain anything \u2014 books, DVDs, maps, loose papers. Flexible and fast to toss things in, but searching requires different strategies.',
          back: 'SQL databases = the Dewey Decimal library (structured, predictable, great for related data). NoSQL databases = the flexible warehouse (adaptable schemas, great for varied data shapes and massive scale). Most real products use both.',
        },
        content: [
          {
            type: 'text',
            body: 'A database is simply organized storage for your application\'s data. Without one, every piece of information disappears the moment a user closes the app. Databases solve the fundamental problem of persistence \u2014 making sure data survives across sessions, devices, and even server restarts. But not all databases work the same way. The two major families are SQL (relational) and NoSQL (non-relational), and they represent fundamentally different philosophies about how data should be organized.',
          },
          {
            type: 'text',
            body: 'SQL databases \u2014 like PostgreSQL, MySQL, and SQLite \u2014 store data in structured tables with rows and columns, much like spreadsheets. Every row follows the same schema (structure), and tables can be linked together through relationships. This rigidity is a feature, not a bug: it guarantees data consistency and makes complex queries powerful. When a bank needs to ensure that a $500 transfer deducts from one account and adds to another atomically, SQL databases excel.',
          },
          {
            type: 'text',
            body: 'NoSQL databases \u2014 like MongoDB, Redis, and DynamoDB \u2014 take a different approach. They store data in flexible formats: documents (JSON-like objects), key-value pairs, wide columns, or graphs. Each record can have a different shape, which makes them ideal for data that doesn\'t fit neatly into rows and columns. When Twitter needs to track trending hashtags across millions of tweets per minute with constantly changing data structures, NoSQL handles that naturally.',
          },
          {
            type: 'callout',
            body: 'Here\'s the truth most beginners don\'t hear: for 90% of new projects, a SQL database (specifically PostgreSQL) is the right starting choice. NoSQL shines in specific scenarios \u2014 massive scale, flexible schemas, caching \u2014 but SQL\'s structure prevents an enormous number of bugs that plague poorly-designed systems.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Database', definition: 'Organized, persistent storage for application data. The "memory" of your product that survives restarts, crashes, and user sessions.' },
              { term: 'SQL', definition: 'Structured Query Language \u2014 both a language for querying data and a category of databases that use structured tables. Pronounced "sequel" or "S-Q-L."' },
              { term: 'NoSQL', definition: 'A category of databases that don\'t use traditional table structures. Includes document stores, key-value stores, graph databases, and more. "Not Only SQL."' },
              { term: 'Schema', definition: 'The blueprint that defines your data\'s structure \u2014 what tables exist, what columns they have, what types of data each column holds, and how tables relate.' },
              { term: 'Record', definition: 'A single entry in a database \u2014 one user, one order, one product. In SQL, a record is a row in a table.' },
              { term: 'Field', definition: 'A single piece of information within a record \u2014 a name, an email, a price. In SQL, a field is a column value in a row.' },
              { term: 'Table', definition: 'A structured collection of related records in a SQL database. Like a spreadsheet tab \u2014 the Users table, the Orders table, the Products table.' },
              { term: 'Query', definition: 'A request for data from a database. "Show me all users who signed up this month" is a query. SQL is the language used to write them.' },
            ],
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each database type to its best use case:',
              pairs: [
                { left: 'SQL (PostgreSQL)', right: 'Banking transactions requiring strict consistency' },
                { left: 'Document Store (MongoDB)', right: 'User profiles with varying fields per user' },
                { left: 'Key-Value Store (Redis)', right: 'Caching frequently accessed data in memory' },
                { left: 'Graph Database (Neo4j)', right: 'Social network friend recommendations' },
                { left: 'SQL (SQLite)', right: 'Local storage for a mobile app prototype' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the primary purpose of a database in an application?',
              options: ['Making the app look better', 'Persistent storage that survives app restarts', 'Processing user requests faster', 'Connecting the frontend to the backend'],
              correct: 1,
              explanation: 'A database\'s core job is persistence \u2014 storing data so it\'s available even after the app closes, the server restarts, or the user switches devices. Without a database, all data would vanish.',
            },
            {
              question: 'Which scenario is best suited for a SQL database?',
              options: ['Storing millions of IoT sensor readings with varying formats', 'An e-commerce system where orders, users, and products are tightly related', 'Caching API responses for 30 seconds', 'Storing social media posts with unpredictable fields'],
              correct: 1,
              explanation: 'E-commerce data has clear relationships \u2014 users place orders, orders contain products, products belong to categories. SQL databases excel at managing these structured relationships with guaranteed consistency.',
            },
            {
              question: 'What does "schema" mean in the context of databases?',
              options: ['The programming language used to build the database', 'The speed at which a database processes queries', 'The blueprint defining data structure \u2014 tables, columns, types, and relationships', 'The user interface for managing database records'],
              correct: 2,
              explanation: 'A schema is the structural blueprint of your database. It defines what tables exist, what columns each table has, what data types are allowed, and how tables relate to each other. Think of it as the floor plan before building a house.',
            },
          ],
        },
        takeaway: 'Databases are the memory layer of every application \u2014 SQL databases use structured tables for related data with strict consistency, while NoSQL databases offer flexible formats for varied data shapes and massive scale.',
      },
      {
        id: '3.2',
        title: 'Tables, Rows, and Columns \u2014 The Spreadsheet Analogy',
        estimatedMinutes: 15,
        hook: 'If you\'ve ever used a spreadsheet, you already understand 80% of how relational databases work. Seriously. A database table is essentially a spreadsheet with superpowers \u2014 rules that prevent bad data from sneaking in, the ability to handle millions of rows without breaking a sweat, and a language (SQL) that lets you ask incredibly specific questions about your data.',
        analogy: {
          front: 'Open a spreadsheet and create a tab called "Users." Column A is "ID," Column B is "Name," Column C is "Email," Column D is "Signed Up." Each row is a different person. That\'s it \u2014 that\'s a database table. The difference? A real database enforces rules: the ID must be unique, the email must be text, and no one can leave the name blank.',
          back: 'Spreadsheet tab = database table. Column header = field/column definition. Row = record. Cell = field value. The "superpowers" are constraints (rules the database enforces automatically), data types (ensuring numbers stay numbers), and indexes (making searches blazing fast).',
        },
        content: [
          {
            type: 'text',
            body: 'A relational database organizes data into tables, and each table represents a single type of thing \u2014 users, products, orders, comments. Within a table, every row (also called a record) represents one specific instance of that thing: one user, one product, one order. Every column (also called a field) represents one attribute: name, price, date, status. This simple grid structure is what makes relational databases so intuitive and powerful.',
          },
          {
            type: 'text',
            body: 'The most important column in any table is the primary key \u2014 a unique identifier for each row. Think of it like a Social Security number for your data. No two rows can share the same primary key, which means you can always pinpoint exactly one record. Most developers use an auto-incrementing integer (1, 2, 3...) or a UUID (a long random string like "a1b2c3d4-e5f6..."). The primary key is what makes relationships between tables possible, which we\'ll explore in the next lesson.',
          },
          {
            type: 'text',
            body: 'Databases enforce rules through constraints and data types. A data type tells the database what kind of value a column holds: TEXT for names, INTEGER for counts, BOOLEAN for true/false, TIMESTAMP for dates. Constraints add further rules: NOT NULL means the field can\'t be empty, UNIQUE means no duplicates allowed, DEFAULT provides a fallback value. These rules run automatically on every insert and update \u2014 they\'re your first line of defense against bad data.',
          },
          {
            type: 'callout',
            body: 'Why not just use a spreadsheet? Spreadsheets break at scale. They can\'t handle multiple users editing simultaneously without conflicts. They have no built-in rules to prevent someone from putting "banana" in the age column. And they become painfully slow past a few thousand rows. Databases solve all of these problems.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                {
                  label: 'SQL: Create a Table',
                  code: 'CREATE TABLE users (\n  id        SERIAL PRIMARY KEY,\n  name      TEXT NOT NULL,\n  email     TEXT UNIQUE NOT NULL,\n  age       INTEGER,\n  is_active BOOLEAN DEFAULT true,\n  created_at TIMESTAMP DEFAULT NOW()\n);',
                },
                {
                  label: 'Spreadsheet Equivalent',
                  code: '| id | name       | email            | age | is_active | created_at          |\n|----|------------|------------------|-----|-----------|---------------------|\n| 1  | Alice Chen | alice@mail.com   | 28  | true      | 2026-01-15 09:30:00 |\n| 2  | Bob Smith  | bob@mail.com     | 34  | true      | 2026-01-16 14:22:00 |\n| 3  | Carol Lee  | carol@mail.com   | 22  | false     | 2026-02-01 08:45:00 |',
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Table', definition: 'A structured collection of related records, like a spreadsheet tab. Each table represents one entity type (users, products, orders).' },
              { term: 'Row / Record', definition: 'A single entry in a table \u2014 one specific user, one specific order. Each row contains values for every column in that table.' },
              { term: 'Column / Field', definition: 'One attribute shared by all records in a table \u2014 name, email, price. Defined with a data type and optional constraints.' },
              { term: 'Primary Key', definition: 'A column (or combination of columns) that uniquely identifies each row. No duplicates allowed. The "ID card" for every record.' },
              { term: 'Data Type', definition: 'The kind of value a column stores: TEXT, INTEGER, BOOLEAN, TIMESTAMP, FLOAT, UUID, etc. Prevents putting text where numbers belong.' },
              { term: 'NOT NULL', definition: 'A constraint that prevents a column from being empty. If name is NOT NULL, every user must have a name.' },
              { term: 'DEFAULT', definition: 'A fallback value used when no value is provided. "is_active DEFAULT true" means new users are automatically active.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the role of a primary key in a database table?',
              options: ['It makes the table run faster', 'It uniquely identifies each row so no two records are the same', 'It encrypts the data in that column', 'It connects the table to the frontend'],
              correct: 1,
              explanation: 'A primary key is a unique identifier for each row. It ensures you can always find exactly one specific record, and it\'s the foundation for creating relationships between tables.',
            },
            {
              question: 'What does the NOT NULL constraint do?',
              options: ['Deletes empty rows automatically', 'Prevents a column from being left empty when inserting or updating data', 'Makes the column invisible to users', 'Converts empty values to zero'],
              correct: 1,
              explanation: 'NOT NULL is a rule that says "this field must have a value." If someone tries to insert a record without providing a value for a NOT NULL column, the database will reject the entire operation.',
            },
            {
              question: 'A "Users" table with columns for id, name, email, and created_at is most similar to:',
              options: ['A JSON file with nested objects', 'A spreadsheet tab with headers and rows', 'A folder of text files, one per user', 'A CSS stylesheet with classes'],
              correct: 1,
              explanation: 'A relational database table maps directly to a spreadsheet: column headers are field definitions, each row is a record, and each cell is a field value. The database just adds rules, speed, and scale.',
            },
          ],
        },
        takeaway: 'Relational database tables work like spreadsheets with superpowers \u2014 rows are records, columns are fields, primary keys uniquely identify each row, and constraints automatically enforce data quality rules.',
      },
      {
        id: '3.3',
        title: 'Relationships \u2014 How Tables Talk to Each Other',
        estimatedMinutes: 15,
        hook: 'A database with a single table is like a business with one department \u2014 it works, but only for the simplest scenarios. Real applications have users who place orders that contain products that have reviews written by other users. The magic of relational databases is connecting these tables together so you can ask questions like "show me all orders placed by users in Toronto who bought products rated above 4 stars." That\'s relationships in action.',
        analogy: {
          front: 'Think about a school. One teacher teaches many students \u2014 that\'s a one-to-many relationship. Each student has exactly one student ID card \u2014 that\'s one-to-one. Many students take many classes, and many classes have many students \u2014 that\'s many-to-many. To track which students are in which classes, the school office keeps an enrollment list \u2014 a junction table.',
          back: 'Foreign key = the link between tables (like a student ID appearing in the enrollment list). One-to-many = one parent row connects to many child rows (one teacher, many students). Many-to-many = requires a junction table that pairs IDs from both sides (enrollment table pairing student_id and class_id).',
        },
        content: [
          {
            type: 'text',
            body: 'Relationships are what make relational databases relational. They let you split data into separate tables (to avoid repetition) while still connecting related information. The mechanism is simple: a foreign key in one table references the primary key of another table. When the "orders" table has a column called "user_id" that matches the "id" column in the "users" table, you\'ve created a relationship. Now you can ask the database: "show me all orders for user #42" and it knows exactly how to connect the dots.',
          },
          {
            type: 'text',
            body: 'The three types of relationships are one-to-one, one-to-many, and many-to-many. One-to-one means each record in Table A matches exactly one record in Table B \u2014 like a user and their profile settings. One-to-many is the most common: one user has many orders, one author has many blog posts, one category contains many products. Many-to-many is when both sides can have multiple connections: many students take many courses, many products belong to many categories.',
          },
          {
            type: 'text',
            body: 'Many-to-many relationships require a special trick: a junction table (also called a join table or bridge table). You can\'t directly connect "students" to "courses" because there\'s no single place to put the link. Instead, you create an "enrollments" table with two foreign keys \u2014 student_id and course_id. Each row in the enrollments table represents one student being in one course. This pattern appears everywhere: order_items connects orders to products, post_tags connects posts to tags, playlist_songs connects playlists to songs.',
          },
          {
            type: 'callout',
            body: 'Real-world example \u2014 Amazon\'s data model: A Users table connects to an Orders table (one-to-many: one user, many orders). An Orders table connects to an Order_Items junction table, which connects to a Products table (many-to-many: one order has many products, one product appears in many orders). A Products table connects to a Reviews table (one-to-many). All these relationships let Amazon show you "Your Orders" with product details and reviews \u2014 stitched together from five different tables.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each relationship type to the correct real-world example:',
              pairs: [
                { left: 'One-to-One', right: 'A user and their single set of notification preferences' },
                { left: 'One-to-Many', right: 'One author writes many blog posts' },
                { left: 'Many-to-Many', right: 'Many students enrolled in many courses' },
                { left: 'Foreign Key', right: 'The user_id column in the orders table' },
                { left: 'Junction Table', right: 'The order_items table connecting orders to products' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Foreign Key', definition: 'A column in one table that references the primary key of another table. It\'s the "link" that creates relationships between tables.' },
              { term: 'One-to-One', definition: 'A relationship where each record in Table A matches exactly one record in Table B. Rare \u2014 usually means the tables could be merged.' },
              { term: 'One-to-Many', definition: 'The most common relationship \u2014 one record in Table A connects to many records in Table B. One user, many orders. One category, many products.' },
              { term: 'Many-to-Many', definition: 'Both tables can have multiple connections to each other. Requires a junction table to implement. Many students, many courses.' },
              { term: 'Junction Table', definition: 'A bridge table that connects two tables in a many-to-many relationship. Contains foreign keys to both tables \u2014 nothing else.' },
              { term: 'Normalization', definition: 'The process of organizing tables to reduce data duplication. Instead of repeating a user\'s name on every order, store it once in the users table and reference it with a foreign key.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A blog where one author writes many posts is an example of which relationship type?',
              options: ['One-to-one', 'One-to-many', 'Many-to-many', 'No relationship'],
              correct: 1,
              explanation: 'One author connects to many posts \u2014 that\'s the classic one-to-many pattern. The posts table would have an author_id foreign key pointing back to the authors table.',
            },
            {
              question: 'Why do many-to-many relationships require a junction table?',
              options: ['Because databases can only store numbers', 'Because there\'s no single column that can hold multiple connections in both directions', 'Because junction tables are faster than regular tables', 'Because SQL doesn\'t support many-to-many natively'],
              correct: 1,
              explanation: 'A single column can only hold one value. You can\'t put "courses 1, 3, 7" in a student\'s row. A junction table solves this by creating individual rows for each pairing: (student_1, course_3), (student_1, course_7), etc.',
            },
            {
              question: 'In an e-commerce database, the order_items table has columns: id, order_id, product_id, quantity. What is this table\'s role?',
              options: ['It stores all product details', 'It\'s a junction table connecting orders to products in a many-to-many relationship', 'It replaces the need for an orders table', 'It caches order data for faster loading'],
              correct: 1,
              explanation: 'Order_items is a classic junction table. One order can contain many products, and one product can appear in many orders. The junction table connects them with foreign keys (order_id and product_id) plus extra data like quantity.',
            },
          ],
        },
        takeaway: 'Tables connect through foreign keys \u2014 one-to-many relationships use a foreign key in the child table, while many-to-many relationships require a junction table that pairs IDs from both sides.',
      },
      {
        id: '3.4',
        title: 'Data Modeling \u2014 The Skill That Matters Most',
        estimatedMinutes: 15,
        hook: 'Here\'s a secret that separates junior developers from senior ones: the best engineers spend more time designing their database than writing application code. A well-designed data model makes everything easier \u2014 queries are simple, performance is good, bugs are rare. A poorly designed one creates an endless cycle of workarounds, slow queries, and data corruption. Data modeling is the art of getting this right before writing a single line of code.',
        analogy: {
          front: 'An architect doesn\'t start building by pouring concrete. They draw blueprints first \u2014 where do the rooms go? How wide are the hallways? Where does the plumbing run? Building a database without a data model is like constructing a house without blueprints. You might get walls up, but the bathroom will be in the wrong place and the wiring won\'t reach the kitchen.',
          back: 'Entities = rooms (the major things you need to store: users, products, orders). Attributes = features of each room (columns: name, price, date). Relationships = hallways connecting rooms (foreign keys). The data model = the complete blueprint you validate before building.',
        },
        content: [
          {
            type: 'text',
            body: 'Data modeling is the process of deciding what data your application needs to store, how it should be structured, and how different pieces relate to each other \u2014 all before you create a single table. The result is a clear map of your database: every table, every column, every relationship, every constraint. Good data modeling answers three questions: What are the "things" in my system (entities)? What do I need to know about each thing (attributes)? How do these things connect (relationships)?',
          },
          {
            type: 'text',
            body: 'Let\'s walk through designing a data model for a recipe sharing app. First, identify the entities \u2014 the major nouns: Users, Recipes, Ingredients, Comments, Tags. Next, define attributes for each: Users need a name, email, and avatar. Recipes need a title, description, cook time, and serving size. Then map relationships: one user creates many recipes (one-to-many). One recipe has many ingredients and many tags (one-to-many and many-to-many). One recipe has many comments, each written by one user. Finally, add constraints: recipe title is required, cook time must be positive, emails must be unique.',
          },
          {
            type: 'text',
            body: 'A common beginner mistake is trying to cram everything into one table. You might be tempted to put ingredient names directly in the recipe row as a comma-separated string: "flour, eggs, sugar." But this makes it impossible to search by ingredient, count how many recipes use eggs, or ensure consistent ingredient names. The discipline of normalization \u2014 splitting data into proper tables with relationships \u2014 is what makes databases powerful. Every time you see repeated data, it\'s a sign that a new table or relationship is needed.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Identify Entities', description: 'List the major "things" your app needs to store: Users, Products, Orders, Comments, Tags, etc.' },
                { label: 'Define Attributes', description: 'For each entity, list what you need to know: name, email, price, date, status. Include data types.' },
                { label: 'Map Relationships', description: 'Draw the connections: one-to-many, many-to-many. Identify which entities link and how.' },
                { label: 'Add Keys & Constraints', description: 'Assign primary keys, define foreign keys, add NOT NULL and UNIQUE where needed.' },
                { label: 'Validate with Queries', description: 'Before building, ask: "Can I answer the questions my app needs?" Test queries mentally against your model.' },
                { label: 'Implement', description: 'Write the CREATE TABLE statements, run migrations, seed with test data, and verify relationships work.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Pro tip: Start by listing the screens of your app, then ask "what data does each screen need to display?" A recipe detail page needs the recipe title, author name, ingredient list, instructions, comments, and ratings. Working backward from the UI to the data model ensures you build exactly what\'s needed \u2014 nothing more, nothing less.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the first step in data modeling?',
              options: ['Writing SQL queries', 'Choosing between PostgreSQL and MongoDB', 'Identifying the main entities (things) your app needs to store', 'Setting up the server'],
              correct: 2,
              explanation: 'Data modeling starts with identifying entities \u2014 the major nouns in your system. What are the things you need to track? Users, products, orders, messages? Everything else builds from this foundation.',
            },
            {
              question: 'Why is storing a comma-separated list of ingredients in a recipe row a bad practice?',
              options: ['It takes up too much storage space', 'You can\'t search, filter, or count individual ingredients \u2014 and you can\'t enforce consistency', 'Commas are not allowed in database fields', 'It slows down the entire database'],
              correct: 1,
              explanation: 'Comma-separated values in a single field lose all the power of relational databases. You can\'t query "show me all recipes with eggs," you can\'t ensure consistent naming, and you can\'t track ingredient metadata. A separate ingredients table with relationships is the correct approach.',
            },
          ],
        },
        takeaway: 'Data modeling is the blueprint phase \u2014 identify your entities, define their attributes, map their relationships, and validate against your app\'s actual queries before writing a single CREATE TABLE statement.',
      },
      {
        id: '3.5',
        title: 'SQL \u2014 Talking to Your Database',
        estimatedMinutes: 18,
        hook: 'SQL is one of the oldest programming languages still in heavy daily use \u2014 invented in the 1970s and more relevant today than ever. It\'s the language you use to talk to your database: asking questions, inserting data, updating records, and deleting things you don\'t need. The good news? It reads almost like English. "SELECT name FROM users WHERE age > 25 ORDER BY name" is about as readable as code gets.',
        analogy: {
          front: 'Imagine you\'re at a massive library and you walk up to the librarian\'s desk. You say: "Show me all mystery books published after 2020, sorted by rating, but only the top 10." The librarian understands exactly what you want, walks through the aisles, and brings back a neat stack. SQL is you talking to the librarian. The database is the library.',
          back: 'SELECT = "show me." FROM = "from this shelf/table." WHERE = "but only if." ORDER BY = "sorted by." LIMIT = "only the top N." INSERT = "add this new book." UPDATE = "change this book\'s info." DELETE = "remove this book." These six keywords handle 90% of database operations.',
        },
        content: [
          {
            type: 'text',
            body: 'SQL operations fall into four categories, collectively called CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), and Delete (DELETE). Every action your application performs on data maps to one of these four operations. A user signs up? INSERT a new row. A user views their profile? SELECT their record. A user changes their email? UPDATE the record. A user closes their account? DELETE the record. Mastering these four operations is the foundation of working with any SQL database.',
          },
          {
            type: 'text',
            body: 'The real power of SQL comes from filtering and combining data. The WHERE clause filters rows by conditions: "WHERE status = \'active\' AND age > 18". The JOIN clause combines rows from multiple tables: "SELECT users.name, orders.total FROM users JOIN orders ON users.id = orders.user_id" \u2014 this stitches together user names with their order totals. GROUP BY aggregates data: "SELECT category, COUNT(*) FROM products GROUP BY category" counts products per category. These building blocks compose together to answer incredibly specific questions.',
          },
          {
            type: 'text',
            body: 'Indexes are the unsung hero of database performance. Without an index, the database must scan every single row to find what you\'re looking for \u2014 called a full table scan. An index is like the index at the back of a textbook: it maps values to row locations so the database can jump directly to what it needs. Adding an index to a column you frequently search or filter on (like email, or created_at) can speed up queries by 100x or more. But indexes slow down writes because they need to be updated on every insert, so you only add them where they matter.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                {
                  label: 'CREATE (Insert)',
                  code: '-- Add a new user\nINSERT INTO users (name, email, age)\nVALUES (\'Alice Chen\', \'alice@mail.com\', 28);\n\n-- Add multiple users at once\nINSERT INTO users (name, email, age)\nVALUES\n  (\'Bob Smith\', \'bob@mail.com\', 34),\n  (\'Carol Lee\', \'carol@mail.com\', 22);',
                },
                {
                  label: 'READ (Select)',
                  code: '-- Get all active users\nSELECT name, email\nFROM users\nWHERE is_active = true;\n\n-- Get users with their order counts\nSELECT users.name, COUNT(orders.id) as total_orders\nFROM users\nJOIN orders ON users.id = orders.user_id\nGROUP BY users.name\nORDER BY total_orders DESC;',
                },
                {
                  label: 'UPDATE',
                  code: '-- Change a user\'s email\nUPDATE users\nSET email = \'newalice@mail.com\'\nWHERE id = 1;\n\n-- Deactivate users who haven\'t\n-- logged in for 6 months\nUPDATE users\nSET is_active = false\nWHERE last_login < NOW() - INTERVAL \'6 months\';',
                },
                {
                  label: 'DELETE',
                  code: '-- Delete a specific user\nDELETE FROM users\nWHERE id = 42;\n\n-- Delete all inactive users\nDELETE FROM users\nWHERE is_active = false;\n\n-- WARNING: This deletes EVERYTHING\n-- DELETE FROM users;',
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'SELECT', definition: 'The SQL command to read/retrieve data. "SELECT name, email FROM users" returns the name and email columns from the users table.' },
              { term: 'FROM', definition: 'Specifies which table to query. Always paired with SELECT to identify the data source.' },
              { term: 'WHERE', definition: 'Filters rows by conditions. "WHERE age > 25 AND city = \'Toronto\'" returns only rows matching both conditions.' },
              { term: 'INSERT', definition: 'Adds new rows to a table. "INSERT INTO users (name) VALUES (\'Alice\')" creates a new user.' },
              { term: 'UPDATE', definition: 'Modifies existing rows. Always use with WHERE to target specific rows \u2014 without it, you update every row in the table.' },
              { term: 'DELETE', definition: 'Removes rows from a table. Like UPDATE, always use with WHERE unless you intentionally want to delete all data.' },
              { term: 'JOIN', definition: 'Combines rows from two or more tables based on a related column. "JOIN orders ON users.id = orders.user_id" connects users to their orders.' },
              { term: 'ORDER BY', definition: 'Sorts the result set. "ORDER BY created_at DESC" returns newest first. ASC for ascending, DESC for descending.' },
              { term: 'GROUP BY', definition: 'Groups rows with the same values for aggregate calculations. Used with COUNT, SUM, AVG to summarize data.' },
              { term: 'INDEX', definition: 'A data structure that speeds up searches on a column \u2014 like a textbook index. Trade-off: faster reads but slightly slower writes.' },
              { term: 'ORM', definition: 'Object-Relational Mapping \u2014 a tool that lets you write database queries using your programming language instead of raw SQL. Examples: Prisma, SQLAlchemy, Sequelize.' },
            ],
          },
          {
            type: 'order-steps',
            config: {
              instruction: 'Build a SQL query: Find all orders over $50, sorted by date, from the "orders" table',
              items: [
                { id: 'select', label: 'SELECT *' },
                { id: 'from', label: 'FROM orders' },
                { id: 'where', label: 'WHERE amount > 50' },
                { id: 'order', label: 'ORDER BY order_date DESC' },
              ],
              correctOrder: ['select', 'from', 'where', 'order'],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which SQL command retrieves data from a database without changing anything?',
              options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
              correct: 2,
              explanation: 'SELECT is the read operation \u2014 it retrieves data without modifying anything in the database. It\'s by far the most commonly used SQL command.',
            },
            {
              question: 'What happens if you run "UPDATE users SET is_active = false" without a WHERE clause?',
              options: ['Nothing \u2014 it requires a WHERE clause to run', 'It updates only the first row', 'It sets is_active to false for EVERY user in the table', 'It deletes all inactive users'],
              correct: 2,
              explanation: 'Without a WHERE clause, UPDATE applies to every row in the table. This is one of the most common and dangerous database mistakes. Always double-check that your UPDATE and DELETE statements have the correct WHERE clause.',
            },
            {
              question: 'What is the primary benefit of adding an index to a frequently-searched column?',
              options: ['It encrypts the data in that column', 'It makes inserts faster', 'It dramatically speeds up searches by letting the database skip scanning every row', 'It reduces the storage space needed'],
              correct: 2,
              explanation: 'An index creates a lookup structure that lets the database find matching rows without scanning the entire table. A query on an indexed column with millions of rows can return in milliseconds instead of seconds.',
            },
          ],
        },
        takeaway: 'SQL is the universal language for talking to relational databases \u2014 CRUD operations (INSERT, SELECT, UPDATE, DELETE) handle all data manipulation, JOINs connect tables, and indexes make queries fast.',
      },
      {
        id: '3.6',
        title: 'PostgreSQL, MySQL, SQLite \u2014 Choosing Your SQL Database',
        estimatedMinutes: 12,
        hook: 'You\'ve decided to use a SQL database \u2014 now which one? There are dozens of options, but three dominate the landscape for product builders: PostgreSQL, MySQL, and SQLite. Each has a sweet spot, and choosing the right one at the start saves you a painful migration later. The decision comes down to one question: what are you building and who is it for?',
        analogy: {
          front: 'Think of SQL databases like vehicles. SQLite is a bicycle \u2014 lightweight, zero maintenance, perfect for getting around your neighborhood (prototypes, mobile apps, small tools). MySQL is a reliable sedan \u2014 proven, widely available, handles daily commuting and road trips (web apps, WordPress, established systems). PostgreSQL is a high-performance truck \u2014 carries anything, goes anywhere, handles the heaviest loads (complex queries, geospatial data, enterprise apps).',
          back: 'SQLite = file-based, zero setup, embedded in your app. MySQL = server-based, mature ecosystem, powers most of the legacy web. PostgreSQL = server-based, most features, best for new projects that might grow. For most new products in 2026, PostgreSQL (via Supabase or Neon) is the default choice.',
        },
        content: [
          {
            type: 'text',
            body: 'SQLite is unique among databases \u2014 it\'s not a server at all. It stores your entire database in a single file on disk. No installation, no configuration, no port numbers to manage. This makes it perfect for prototyping, mobile apps (every iPhone and Android device has SQLite built in), desktop applications, and small tools. If your project has a single user or doesn\'t need network access, SQLite is often all you need. Its limitation: it doesn\'t handle multiple users writing data simultaneously, so it struggles with web applications serving many concurrent users.',
          },
          {
            type: 'text',
            body: 'MySQL has been the backbone of the web for over two decades. WordPress, Facebook (in its early years), Airbnb, and countless other platforms were built on MySQL. It\'s fast for read-heavy workloads, has massive community support, and every hosting provider supports it. However, its standards compliance is looser than PostgreSQL\'s, and it lacks some advanced features like full JSON support, sophisticated indexing, and better handling of concurrent writes.',
          },
          {
            type: 'text',
            body: 'PostgreSQL (often called "Postgres") is the most full-featured open-source database available. It handles complex queries, JSON data (bridging the SQL/NoSQL gap), full-text search, geospatial data (PostGIS), and even vector embeddings for AI applications (pgvector). Modern platforms like Supabase, Neon, and Railway make PostgreSQL as easy to set up as any cloud service \u2014 you get a database URL and you\'re ready. For new projects in 2026, PostgreSQL through Supabase is the recommended default unless you have a specific reason to choose otherwise.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What are you building?',
              options: [
                {
                  label: 'A prototype or local tool',
                  next: {
                    question: 'Will it need multiple users or network access?',
                    options: [
                      { label: 'No \u2014 single user, runs locally', result: 'Use SQLite \u2014 zero setup, file-based, perfect for prototypes and local tools.' },
                      { label: 'Yes \u2014 it will eventually go online', result: 'Start with PostgreSQL (via Supabase free tier) \u2014 avoid a painful migration later.' },
                    ],
                  },
                },
                {
                  label: 'A web application',
                  next: {
                    question: 'Is this a new project or integrating with an existing system?',
                    options: [
                      { label: 'New project from scratch', result: 'Use PostgreSQL via Supabase \u2014 you get auth, real-time, and auto-generated APIs included.' },
                      { label: 'Integrating with WordPress or legacy system', result: 'Use MySQL \u2014 it\'s what the existing ecosystem expects and supports.' },
                    ],
                  },
                },
                {
                  label: 'A mobile or desktop app',
                  next: {
                    question: 'Does data need to sync across devices?',
                    options: [
                      { label: 'No \u2014 data stays on the device', result: 'Use SQLite \u2014 it\'s already built into iOS and Android.' },
                      { label: 'Yes \u2014 data syncs to the cloud', result: 'Use SQLite locally + PostgreSQL (via Supabase) in the cloud for syncing.' },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'PostgreSQL', definition: 'The most advanced open-source relational database. Supports JSON, full-text search, geospatial data, and vector embeddings. The recommended default for new projects.' },
              { term: 'MySQL', definition: 'The most widely deployed open-source database, powering WordPress and much of the traditional web. Fast reads, huge ecosystem, but fewer advanced features than PostgreSQL.' },
              { term: 'SQLite', definition: 'A file-based database with zero setup. Embedded into every smartphone. Perfect for prototypes, local tools, and single-user applications.' },
              { term: 'Supabase', definition: 'An open-source platform built on PostgreSQL that provides a database, auth, real-time subscriptions, and auto-generated APIs. Often called "the open-source Firebase."' },
              { term: 'Connection Pool', definition: 'A cache of database connections that are reused instead of created fresh for each request. Essential for web apps handling many concurrent users.' },
              { term: 'Managed Database', definition: 'A database hosted by a cloud provider (Supabase, AWS RDS, Neon) that handles backups, scaling, updates, and security for you.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which SQL database is best for a brand new web application in 2026?',
              options: ['SQLite because it\'s the simplest', 'MySQL because it\'s the most popular', 'PostgreSQL because it has the most features and modern tooling support', 'Oracle because enterprises use it'],
              correct: 2,
              explanation: 'For new web applications, PostgreSQL (especially via Supabase) is the recommended default. It handles everything from simple CRUD to complex queries, JSON, full-text search, and even vector embeddings for AI features.',
            },
            {
              question: 'When is SQLite the best choice?',
              options: ['For high-traffic web applications with many concurrent users', 'For prototypes, local tools, and single-user applications', 'For enterprise systems with complex reporting needs', 'For real-time multiplayer games'],
              correct: 1,
              explanation: 'SQLite excels when you need a database with zero setup for a single-user context \u2014 prototypes, mobile apps, desktop tools, CLI utilities. It struggles with concurrent writes from multiple users.',
            },
          ],
        },
        takeaway: 'For new web projects, PostgreSQL (via Supabase) is the default choice. SQLite is perfect for prototypes and single-user apps. MySQL is best when integrating with legacy systems like WordPress.',
      },
      {
        id: '3.7',
        title: 'NoSQL Databases \u2014 When Tables Don\'t Fit',
        estimatedMinutes: 15,
        hook: 'Not everything in the real world fits neatly into rows and columns. A user profile on one platform might have three fields; on another, it has thirty \u2014 and they\'re different for every user. Social network friend connections form a web, not a table. Session data needs to be read in microseconds and expire automatically. These are the problems that NoSQL databases were born to solve.',
        analogy: {
          front: 'Think of three different storage systems in a house. Your filing cabinet stores documents in strict folders \u2014 organized but rigid (that\'s SQL). Your junk drawer stores anything in any shape \u2014 fast to toss things in, flexible (that\'s a document store). Your key rack by the door lets you grab exactly what you need instantly by name (that\'s key-value). Your family tree on the wall shows how everyone is connected (that\'s a graph database).',
          back: 'Document stores (MongoDB) = flexible JSON-like records, each can have a different shape. Key-value stores (Redis) = ultra-fast lookup by key, often in-memory, great for caching. Graph databases (Neo4j) = optimized for traversing connections between entities. Each type solves problems that SQL handles awkwardly.',
        },
        content: [
          {
            type: 'text',
            body: 'Document stores like MongoDB store data as JSON-like documents (called BSON). Each document can have a different structure \u2014 one user profile might have a "linkedin_url" field while another doesn\'t, and that\'s perfectly fine. No migration needed. This flexibility shines when your data schema evolves rapidly during early product development, when you\'re storing user-generated content with unpredictable fields, or when you\'re working with data that\'s naturally nested (like a blog post with embedded comments). The trade-off: relationships between documents are harder to manage than in SQL.',
          },
          {
            type: 'text',
            body: 'Key-value stores like Redis are the simplest and fastest type of database. You store data as pairs: a key (like "session:user_42") and a value (the session data). Redis keeps everything in memory (RAM), making reads and writes happen in microseconds \u2014 100 to 1000 times faster than disk-based databases. This makes Redis essential for caching (storing frequently accessed data to avoid hitting the main database), session management (keeping users logged in), rate limiting (preventing abuse), and real-time features (leaderboards, counters, queues).',
          },
          {
            type: 'text',
            body: 'Graph databases like Neo4j store data as nodes (entities) and edges (relationships), making them exceptionally powerful for relationship-heavy queries. "Find all friends-of-friends who also like jazz music" is a nightmare in SQL (multiple nested joins) but elegant in a graph database (traverse two edges, filter by property). Social networks, recommendation engines, fraud detection, and knowledge graphs all benefit enormously from graph databases. LinkedIn\'s "People You May Know" feature is a classic graph database use case.',
          },
          {
            type: 'callout',
            body: 'Important reality check: most applications don\'t need NoSQL as their primary database. The common pattern is PostgreSQL as the primary database (handling 90% of your data) with Redis for caching and session management. You add MongoDB or Neo4j only when you have a specific use case that SQL handles poorly. Don\'t choose NoSQL because it sounds modern \u2014 choose it because your data genuinely doesn\'t fit tables.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each NoSQL database type to its ideal use case:',
              pairs: [
                { left: 'MongoDB (Document)', right: 'User profiles with different fields per user' },
                { left: 'Redis (Key-Value)', right: 'Caching API responses for faster page loads' },
                { left: 'Neo4j (Graph)', right: 'Social network friend recommendations' },
                { left: 'DynamoDB (Key-Value)', right: 'Massive-scale e-commerce with millions of reads per second' },
                { left: 'Elasticsearch (Search)', right: 'Full-text search across millions of product listings' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Document Store', definition: 'A NoSQL database that stores data as flexible JSON-like documents. Each document can have a different structure. MongoDB is the most popular example.' },
              { term: 'Key-Value Store', definition: 'The simplest NoSQL type \u2014 data is stored as key-value pairs with ultra-fast lookups. Redis (in-memory) and DynamoDB (disk-based) are popular choices.' },
              { term: 'Graph Database', definition: 'A database optimized for storing and querying relationships between entities. Data is nodes (things) and edges (connections). Neo4j is the leading example.' },
              { term: 'MongoDB', definition: 'The most popular document database. Stores data in flexible BSON (binary JSON) documents. Great for rapid prototyping and data with unpredictable schemas.' },
              { term: 'Redis', definition: 'An in-memory key-value store known for extreme speed (sub-millisecond reads). Used for caching, sessions, rate limiting, and real-time features.' },
              { term: 'Neo4j', definition: 'The leading graph database. Stores data as nodes and relationships. Excels at queries like "friends of friends" or "shortest path between two entities."' },
              { term: 'Flexible Schema', definition: 'The ability to store records with different structures in the same collection. Unlike SQL, where every row must match the table\'s column definitions.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which type of NoSQL database would you use to cache frequently accessed data for sub-millisecond response times?',
              options: ['Document store (MongoDB)', 'Key-value store (Redis)', 'Graph database (Neo4j)', 'Wide-column store (Cassandra)'],
              correct: 1,
              explanation: 'Redis is an in-memory key-value store specifically designed for speed. It stores data in RAM rather than on disk, achieving sub-millisecond read times. It\'s the go-to choice for caching, sessions, and real-time features.',
            },
            {
              question: 'When should you choose a NoSQL database as your primary database instead of PostgreSQL?',
              options: ['Always \u2014 NoSQL is more modern and therefore better', 'When your data genuinely doesn\'t fit structured tables and relationships', 'When you want to avoid learning SQL', 'When your app has fewer than 100 users'],
              correct: 1,
              explanation: 'NoSQL databases solve specific problems: highly flexible schemas, extreme read/write speed, or relationship-heavy traversals. For most applications, PostgreSQL is the better primary database, with NoSQL added for specific needs like caching (Redis) or search (Elasticsearch).',
            },
          ],
        },
        takeaway: 'NoSQL databases solve problems that SQL handles awkwardly \u2014 document stores for flexible schemas, key-value stores for blazing-fast caching, and graph databases for relationship-heavy queries. Most apps use SQL as the primary database with Redis for caching.',
      },
      {
        id: '3.8',
        title: 'Vector Databases \u2014 The AI Brain\'s Filing Cabinet',
        estimatedMinutes: 15,
        hook: 'If you\'ve used ChatGPT, searched for "songs that sound like this one," or asked an app to find "photos similar to this," you\'ve benefited from vector databases \u2014 even if you\'ve never heard the term. As AI becomes central to product building, understanding how machines store and search for "meaning" is becoming as essential as understanding traditional databases. This is the technology powering the AI revolution.',
        analogy: {
          front: 'Imagine you could assign GPS coordinates to every sentence ever written. "I love pizza" might be at location (34.5, 12.3). "Pizza is my favorite food" would be nearby at (34.7, 12.1). "I enjoy quantum physics" would be far away at (89.2, 67.8). Now imagine a database that stores these coordinates and instantly finds "the 10 sentences closest to this one." That\'s a vector database.',
          back: 'Embedding = converting text (or images, or audio) into a numerical coordinate (vector) that captures meaning. Vector = a list of numbers representing a piece of content (usually 768 to 1536 numbers). Similarity search = finding the nearest vectors in the coordinate space. Vector database = optimized storage for billions of vectors with fast nearest-neighbor lookup.',
        },
        content: [
          {
            type: 'text',
            body: 'Traditional databases search by exact matches: "find all users named Alice" or "find orders placed on January 15th." But AI applications need to search by meaning: "find documents about renewable energy" should return results about solar panels, wind farms, and battery storage \u2014 even if those exact words weren\'t in the query. Vector databases make this possible by storing data as high-dimensional numerical representations (vectors) and finding the most similar ones using mathematical distance calculations.',
          },
          {
            type: 'text',
            body: 'The process works in two stages. First, an embedding model (like OpenAI\'s text-embedding-3-small) converts your content into vectors. A sentence becomes a list of 1536 numbers that encode its meaning. Similar sentences produce similar number patterns. Second, when someone searches, their query is also converted to a vector, and the database finds the stored vectors closest to the query vector. This is called similarity search or semantic search, and it powers recommendation engines, AI chatbots with memory, search engines that understand intent, and RAG (Retrieval-Augmented Generation) systems.',
          },
          {
            type: 'text',
            body: 'The vector database landscape in 2026 includes several major players. Pinecone is a fully managed cloud service optimized for production use. Weaviate is open-source with built-in embedding generation. Chroma is lightweight and developer-friendly, popular for prototyping. And pgvector is a PostgreSQL extension that adds vector capabilities to your existing Postgres database \u2014 meaning you don\'t need a separate database at all. For many projects, pgvector through Supabase is the simplest starting point because it keeps all your data in one place.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Content Created', description: 'A user writes a document, a product description is added, or a conversation message is sent.' },
                { label: 'Embedding Model', description: 'An AI model (like OpenAI\'s embedding API) converts the text into a vector \u2014 a list of 768 to 1536 numbers.' },
                { label: 'Vector Stored', description: 'The vector is saved in the database alongside the original content and any metadata (author, date, category).' },
                { label: 'Query Arrives', description: 'A user searches for something: "articles about sustainable building materials."' },
                { label: 'Query Embedded', description: 'The search query is converted to a vector using the same embedding model.' },
                { label: 'Similarity Search', description: 'The database calculates distances between the query vector and all stored vectors, finding the nearest matches.' },
                { label: 'Results Returned', description: 'The most semantically similar content is returned, ranked by relevance \u2014 even if no keywords matched exactly.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Embedding', definition: 'The process of converting content (text, images, audio) into a numerical vector that captures its semantic meaning. Similar content produces similar vectors.' },
              { term: 'Vector', definition: 'A list of numbers (typically 768 to 1536) that represents the "meaning" of a piece of content in mathematical space. The building block of AI-powered search.' },
              { term: 'Similarity Search', definition: 'Finding the vectors closest to a query vector in the database. Uses mathematical distance (cosine similarity or Euclidean distance) rather than exact keyword matching.' },
              { term: 'Semantic Search', definition: 'Searching by meaning rather than keywords. "Affordable housing" would match "low-cost apartments" even though no words overlap.' },
              { term: 'Pinecone', definition: 'A fully managed vector database service. Easy to set up, scales automatically, commonly used in production AI applications.' },
              { term: 'Weaviate', definition: 'An open-source vector database with built-in support for generating embeddings. Can run self-hosted or in the cloud.' },
              { term: 'pgvector', definition: 'A PostgreSQL extension that adds vector storage and similarity search to an existing Postgres database. Avoids needing a separate vector database.' },
              { term: 'Chroma', definition: 'A lightweight, developer-friendly vector database popular for prototyping and smaller AI applications.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is an "embedding" in the context of vector databases?',
              options: ['A way to compress files for storage', 'A numerical representation of content that captures its semantic meaning', 'A type of database encryption', 'A method for linking tables together'],
              correct: 1,
              explanation: 'An embedding converts content (text, images, audio) into a vector \u2014 a list of numbers that captures its meaning. Similar content produces similar number patterns, which is what makes semantic search possible.',
            },
            {
              question: 'Why can\'t traditional SQL databases handle "find articles similar to this one" efficiently?',
              options: ['SQL databases are too slow', 'SQL searches by exact matches and keywords, not by semantic meaning', 'SQL databases can\'t store text', 'SQL doesn\'t support search at all'],
              correct: 1,
              explanation: 'Traditional databases search for exact matches (WHERE title = \'something\'). They can\'t understand that "affordable housing" and "low-cost apartments" mean similar things. Vector databases solve this by comparing mathematical representations of meaning.',
            },
          ],
        },
        takeaway: 'Vector databases store content as numerical representations (embeddings) and find similar items using mathematical distance \u2014 enabling AI-powered semantic search, recommendations, and memory features that traditional databases cannot support.',
      },
      {
        id: '3.9',
        title: 'Migrations, Backups, and Not Losing Everything',
        estimatedMinutes: 12,
        hook: 'Your app is live. Real users have real data. Now you need to add a new column, change a field type, or restructure a table. But you can\'t just blow away the database and start over \u2014 people\'s data is in there. This is where database migrations come in. They\'re the controlled, reversible way to evolve your database structure without losing a single record. And backups are your insurance policy when something goes terribly wrong.',
        analogy: {
          front: 'Imagine renovating a house while a family still lives in it. You can\'t tear down the kitchen to build a bigger one if people need to eat dinner tonight. Instead, you work in stages: build the new kitchen addition first, move everything over, then remove the old one. Each stage has a plan, can be reversed if something goes wrong, and the family can keep living normally throughout. Database migrations work the same way.',
          back: 'Migration = a scripted, versioned change to your database structure. Each migration has an "up" (apply the change) and a "down" (reverse it). The migration history tracks which changes have been applied. Backups = regular snapshots of all your data. Together, migrations and backups mean you can evolve your database safely and recover from any disaster.',
        },
        content: [
          {
            type: 'text',
            body: 'A migration is a script that modifies your database structure in a controlled way. Want to add a "phone_number" column to the users table? Write a migration. Need to split a "full_name" column into "first_name" and "last_name"? Write a migration. Each migration is timestamped and versioned, so the system knows which changes have been applied and in what order. This creates a complete, reproducible history of how your database evolved \u2014 from the first table creation to the latest column addition.',
          },
          {
            type: 'text',
            body: 'Every migration has two directions: up (apply the change) and down (reverse it). If adding a column is the "up," then removing that column is the "down" (rollback). This reversibility is crucial in production. If a migration causes problems \u2014 maybe the new column breaks an existing query \u2014 you can roll back to the previous state without data loss. Modern tools like Prisma, Drizzle, Knex, and Django Migrations handle this automatically, generating migration files you can review before applying.',
          },
          {
            type: 'text',
            body: 'Backups are the other half of the safety equation. A backup is a complete snapshot of your database at a point in time. If a catastrophic bug deletes user data, a hacker corrupts your tables, or a bad migration goes sideways, you can restore from a backup. Managed database services (Supabase, AWS RDS, Neon) provide automated daily backups and point-in-time recovery. For critical applications, the rule of thumb is: automated backups every day, tested restores every month, and a documented disaster recovery plan before you launch.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Write Migration', description: 'Create a migration file describing the change: ADD COLUMN phone_number TEXT to users table.' },
                { label: 'Test Locally', description: 'Run the migration on your local database with test data. Verify the change works and the rollback works.' },
                { label: 'Review', description: 'Have a teammate review the migration. Check for data loss risks, performance impacts, and backward compatibility.' },
                { label: 'Apply to Staging', description: 'Run the migration on a staging environment that mirrors production. Test the full application against the changed schema.' },
                { label: 'Verify', description: 'Confirm all features work correctly with the new schema. Run automated tests. Check query performance.' },
                { label: 'Apply to Production', description: 'Run the migration on the live database during low-traffic hours. Monitor for errors. Have rollback ready.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'The golden rule of database changes: never modify a production database manually. Always use migrations, always test on staging first, and always have a backup before applying changes. One accidental "DROP TABLE users" without a backup is a career-defining moment \u2014 in the worst possible way.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Migration', definition: 'A versioned, scripted change to your database structure. Each migration has an "up" (apply) and "down" (rollback) direction, creating a reproducible history of schema changes.' },
              { term: 'Schema', definition: 'The complete structure of your database at any point in time \u2014 all tables, columns, types, constraints, and relationships. Migrations evolve the schema over time.' },
              { term: 'Seed Data', definition: 'Initial data loaded into a fresh database for development or testing. User accounts, sample products, test orders \u2014 the data needed to make the app functional for testing.' },
              { term: 'Backup', definition: 'A complete snapshot of your database at a specific point in time. The insurance policy that lets you recover from data loss, corruption, or bad migrations.' },
              { term: 'Rollback', definition: 'Reversing a migration or transaction to return the database to its previous state. The "undo button" for database changes.' },
              { term: 'Transaction', definition: 'A group of database operations that either all succeed or all fail together. If step 3 of 5 fails, steps 1 and 2 are undone automatically.' },
              { term: 'ACID', definition: 'Four guarantees of reliable transactions: Atomicity (all or nothing), Consistency (rules always enforced), Isolation (concurrent transactions don\'t interfere), Durability (committed data survives crashes).' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the purpose of a database migration?',
              options: ['Moving data from one server to another', 'Making controlled, versioned changes to the database structure', 'Converting a SQL database to NoSQL', 'Speeding up slow queries'],
              correct: 1,
              explanation: 'A migration is a scripted, versioned change to your database schema \u2014 adding a column, creating a table, modifying a constraint. Each migration is tracked so you know exactly what changes have been applied and can roll them back if needed.',
            },
            {
              question: 'What does the "A" in ACID stand for, and why does it matter?',
              options: ['Authentication \u2014 ensures only authorized access', 'Atomicity \u2014 a group of operations either all succeed or all fail together', 'Availability \u2014 the database is always online', 'Accuracy \u2014 data is always correct'],
              correct: 1,
              explanation: 'Atomicity means a transaction is all-or-nothing. If you\'re transferring $500 between accounts, both the deduction and addition must succeed. If either fails, both are reversed. This prevents money from disappearing or appearing out of nowhere.',
            },
          ],
        },
        takeaway: 'Migrations are controlled, reversible scripts that evolve your database structure over time \u2014 always test on staging, always have backups, and never modify production databases manually.',
      },
      {
        id: '3.10',
        title: 'Model Your App\'s Data \u2014 Capstone',
        estimatedMinutes: 20,
        hook: 'You now understand tables, relationships, SQL, NoSQL, vectors, and migrations. It\'s time to put it all together. In this capstone, you\'ll design a complete data strategy for an application \u2014 choosing the right databases, defining entities and relationships, and planning for features like search, caching, and AI. This is the exercise that turns knowledge into skill.',
        analogy: {
          front: 'Building a data model is like planning a city. You need residential areas (user data), commercial districts (product/content data), roads connecting them (relationships), a transit system for speed (caching and indexes), and a city planning office that manages change over time (migrations). A well-planned city grows gracefully. A poorly planned one becomes a mess of dead ends and traffic jams.',
          back: 'Residential = user tables. Commercial = content/product tables. Roads = foreign keys and joins. Transit = Redis cache and database indexes. City planning = migration system. Emergency services = backups and rollback. The complete data strategy covers all of these.',
        },
        content: [
          {
            type: 'text',
            body: 'Let\'s walk through the data strategy for a realistic application: a team project management tool (like a simplified Asana). Users create organizations, organizations have projects, projects contain tasks, tasks have comments and attachments, and users can be assigned to tasks. We need authentication, real-time updates when tasks change, full-text search across all tasks, and eventually AI-powered task suggestions. This exercise touches every concept from this chapter.',
          },
          {
            type: 'text',
            body: 'Start with the primary database choice. This app has structured, highly relational data \u2014 users belong to organizations, organizations own projects, projects contain tasks, tasks connect to users. That screams SQL. PostgreSQL via Supabase gives us the relational database, built-in auth, real-time subscriptions (for live updates), and pgvector for future AI features \u2014 all in one platform. For caching frequently accessed data (like a user\'s active task list), add Redis.',
          },
          {
            type: 'text',
            body: 'The core entities are: Users (name, email, avatar, role), Organizations (name, plan, settings), Projects (name, description, status, org_id), Tasks (title, description, status, priority, due_date, project_id, assignee_id, creator_id), Comments (body, task_id, user_id), and Attachments (file_url, task_id, uploaded_by). Relationships: Organizations to Projects is one-to-many. Projects to Tasks is one-to-many. Tasks to Comments is one-to-many. Users to Organizations is many-to-many (through a memberships junction table with a role column). Users to Tasks is many-to-many for watchers (through a task_watchers junction table).',
          },
          {
            type: 'text',
            body: 'For search, PostgreSQL\'s built-in full-text search handles searching across task titles and descriptions. For AI-powered features (like "suggest similar tasks" or "auto-categorize"), pgvector stores embeddings of task descriptions. Redis caches the "dashboard view" data \u2014 a user\'s active tasks, project summaries, and notification counts \u2014 so the main page loads instantly without hitting PostgreSQL for every request. This layered approach (PostgreSQL for truth, Redis for speed, pgvector for AI) is the standard modern pattern.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Database Type',
                  options: [
                    { name: 'PostgreSQL (via Supabase)', description: 'Relational database with auth, real-time, and vector support. Best for structured data with relationships.' },
                    { name: 'MongoDB', description: 'Document database for flexible schemas. Best when data shapes vary significantly between records.' },
                    { name: 'SQLite', description: 'File-based database for prototypes and local-first apps. Zero setup, single-user.' },
                    { name: 'Supabase + pgvector', description: 'PostgreSQL with vector extension for AI-powered semantic search alongside relational data.' },
                  ],
                },
                {
                  name: 'Data Model Entities',
                  options: [
                    { name: 'Users', description: 'People who interact with the application. Core fields: name, email, role, avatar, created_at.' },
                    { name: 'Products / Items', description: 'Things being sold, listed, or managed. Core fields: name, description, price, status, category.' },
                    { name: 'Orders / Transactions', description: 'Records of purchases or actions. Links users to products with timestamps, totals, and statuses.' },
                    { name: 'Comments / Messages', description: 'User-generated text content linked to other entities. Core fields: body, author_id, parent_id, created_at.' },
                    { name: 'Tags / Categories', description: 'Organizational labels. Many-to-many with content entities via junction tables.' },
                    { name: 'Files / Attachments', description: 'Uploaded media. Core fields: file_url, file_type, size, uploaded_by, linked_entity.' },
                  ],
                },
                {
                  name: 'Relationships',
                  options: [
                    { name: 'One-to-Many', description: 'One parent has many children. Foreign key on the child table points to parent\'s primary key.' },
                    { name: 'Many-to-Many', description: 'Both sides can have multiple connections. Requires a junction table with two foreign keys.' },
                  ],
                },
                {
                  name: 'Performance & Features',
                  options: [
                    { name: 'Full-text Search', description: 'PostgreSQL built-in tsvector or Elasticsearch for searching across text fields.' },
                    { name: 'Real-time Sync', description: 'Supabase Realtime or WebSockets for live updates when data changes.' },
                    { name: 'Vector Search (AI)', description: 'pgvector or Pinecone for semantic similarity search on embeddings.' },
                    { name: 'Redis Caching', description: 'In-memory caching layer for frequently accessed data. Reduces database load, speeds up reads.' },
                  ],
                },
              ],
            },
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'User Clicks "Add Task"', description: 'Frontend sends a POST request with task title, description, project_id, and assignee_id.' },
                { label: 'Backend Validates', description: 'Server checks: Does the user have permission in this project? Are all required fields present? Is the assignee a valid user?' },
                { label: 'Database INSERT', description: 'PostgreSQL inserts a new row in the tasks table with all fields plus auto-generated id and created_at timestamp.' },
                { label: 'Cache Invalidated', description: 'Redis cache for the project\'s task list and the assignee\'s dashboard is cleared so fresh data loads next time.' },
                { label: 'Embedding Generated', description: 'The task description is sent to an embedding model, and the resulting vector is stored via pgvector for future AI search.' },
                { label: 'Real-time Broadcast', description: 'Supabase Realtime pushes the new task to all team members currently viewing the project board.' },
                { label: 'Response Sent', description: 'Frontend receives the created task data and updates the UI instantly without a page reload.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'For a project management app with users, projects, tasks, and comments \u2014 which database type is the best primary choice?',
              options: ['MongoDB \u2014 for flexible task schemas', 'Redis \u2014 for maximum speed', 'PostgreSQL \u2014 for structured relationships between entities', 'Neo4j \u2014 for task connections'],
              correct: 2,
              explanation: 'Project management data is highly relational: users belong to organizations, organizations own projects, projects contain tasks, tasks have comments. PostgreSQL excels at these structured relationships with strong consistency guarantees.',
            },
            {
              question: 'In a many-to-many relationship between Users and Organizations (where users can belong to multiple orgs), what\'s the correct implementation?',
              options: ['Add an array of org_ids to the users table', 'Create a memberships junction table with user_id and org_id columns', 'Store organization data directly in the user record', 'Use a NoSQL database instead'],
              correct: 1,
              explanation: 'Many-to-many relationships require a junction table. A "memberships" table with user_id and org_id (both foreign keys) creates individual rows for each user-organization pair. This junction table can also store extra data like the user\'s role in that organization.',
            },
            {
              question: 'Why would you add Redis to an application that already uses PostgreSQL?',
              options: ['Because PostgreSQL can\'t store text data', 'To cache frequently accessed data in memory for much faster reads', 'Because Redis is required for SQL queries to work', 'To replace PostgreSQL entirely'],
              correct: 1,
              explanation: 'Redis stores data in RAM, making reads 100-1000x faster than disk-based PostgreSQL. By caching frequently accessed data (dashboard stats, active task lists, session data), you reduce PostgreSQL load and make common pages load instantly.',
            },
            {
              question: 'What is the purpose of storing task descriptions as vector embeddings using pgvector?',
              options: ['To compress the data for smaller storage', 'To enable AI-powered semantic search \u2014 finding similar tasks by meaning, not just keywords', 'To encrypt the descriptions for security', 'To speed up standard SQL queries on the tasks table'],
              correct: 1,
              explanation: 'Vector embeddings capture the semantic meaning of text. Storing task descriptions as vectors lets you build AI features like "find similar tasks," "suggest duplicates," or "auto-categorize" based on meaning rather than keyword matching.',
            },
            {
              question: 'A user adds a task to a project board. Which sequence correctly describes the data flow?',
              options: [
                'Database write \u2192 Cache update \u2192 Frontend request \u2192 Backend validation',
                'Frontend request \u2192 Backend validation \u2192 Database write \u2192 Cache invalidation \u2192 Real-time broadcast',
                'Real-time broadcast \u2192 Database write \u2192 Frontend request \u2192 Cache update',
                'Cache write \u2192 Database write \u2192 Frontend request \u2192 Real-time broadcast',
              ],
              correct: 1,
              explanation: 'The correct flow: Frontend sends the request, backend validates permissions and data, PostgreSQL writes the record, Redis cache is invalidated (so stale data isn\'t served), and Supabase Realtime broadcasts the change to all connected clients.',
            },
          ],
        },
        takeaway: 'A complete data strategy combines the right database (PostgreSQL for relational data), caching (Redis for speed), search (full-text or vector), and a migration system \u2014 all chosen based on your application\'s actual data shapes, relationships, and access patterns.',
      },
    ],
  },
  {
    id: 4,
    title: 'The AI & LLM Universe',
    subtitle: 'How machines learn, think, and generate',
    icon: 'Sparkles',
    lessons: [
      {
        id: '4.1',
        title: 'How AI Actually Works (No Math, Promise)',
        estimatedMinutes: 15,
        hook: 'When ChatGPT writes you a poem, generates a business plan, or explains quantum physics in pirate-speak, it feels like magic. It feels like thinking. But it\'s not. Behind every AI response is a breathtakingly simple idea scaled to an incomprehensible size \u2014 and understanding that idea will change how you build products forever.',
        analogy: {
          front: 'Your phone keyboard predicts the next word when you type. Start with "I\'m going to the" and it suggests "store" or "gym." Now imagine that autocomplete was trained on the entire internet \u2014 every book, every article, every conversation \u2014 and had 175 billion knobs to fine-tune its predictions. That\'s an LLM.',
          back: 'Phone autocomplete = tiny prediction model trained on your texts. LLM = massive prediction model trained on the internet. Both predict the next word. The difference is scale \u2014 and at sufficient scale, prediction produces behavior indistinguishable from understanding.',
        },
        content: [
          {
            type: 'text',
            body: 'An LLM (Large Language Model) is, at its core, a next-word prediction machine. You give it some text, and it predicts what word should come next. Then it takes that prediction, adds it to the input, and predicts again. And again. And again. That\'s the entire trick. There is no secret reasoning engine, no hidden database of facts, no consciousness lurking inside. It\'s prediction all the way down. But here\'s what makes it extraordinary: when you train a prediction engine on trillions of words of human text and give it hundreds of billions of adjustable parameters, something remarkable emerges. The model learns grammar, facts, reasoning patterns, coding conventions, humor, and even something that looks a lot like common sense \u2014 all from the single objective of predicting the next word.',
          },
          {
            type: 'callout',
            body: 'GPT-4 was trained on roughly 13 trillion tokens of text. That\'s more text than any human could read in thousands of lifetimes. The training process took months on tens of thousands of specialized chips (GPUs) and cost over $100 million. Once trained, the model\'s knowledge is frozen \u2014 it doesn\'t learn from your conversations.',
          },
          {
            type: 'text',
            body: 'The training process works in two major phases. First, pre-training: the model reads massive amounts of text from the internet and learns to predict the next word. This gives it general knowledge about language, facts, and reasoning. Second, fine-tuning: humans rate the model\'s responses, and the model is adjusted to produce more helpful, accurate, and safe outputs. This is called RLHF (Reinforcement Learning from Human Feedback) and it\'s why ChatGPT feels conversational rather than like a random text generator. After training, the model is deployed for inference \u2014 the process of actually generating responses to your prompts. Training happens once (and costs millions). Inference happens billions of times per day (and costs fractions of a cent per request).',
          },
          {
            type: 'timeline',
            config: {
              title: 'How an LLM Goes from Raw Data to Your Chat Response',
              steps: [
                { label: 'Training Data Collection', detail: 'Trillions of words from books, websites, code repositories, and academic papers are gathered. Quality filtering removes spam, duplicates, and harmful content.' },
                { label: 'Pre-training (Pattern Learning)', detail: 'The model reads all this text and adjusts billions of parameters to get better at predicting the next word. This takes weeks on thousands of GPUs.' },
                { label: 'Fine-tuning (RLHF)', detail: 'Human raters score model responses. The model is adjusted to prefer helpful, accurate, and safe outputs over raw predictions.' },
                { label: 'Evaluation & Safety Testing', detail: 'The model is tested against benchmarks for accuracy, reasoning, coding ability, and safety. Red teams try to break it.' },
                { label: 'Deployment (Inference)', detail: 'The trained model is deployed on servers. When you send a prompt, the model generates a response word by word using its learned patterns.' },
                { label: 'Ongoing Monitoring', detail: 'Usage patterns, errors, and edge cases are monitored. Feedback informs the next training cycle and safety improvements.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'LLM (Large Language Model)', definition: 'A neural network with billions of parameters trained on massive text data to predict and generate human-like text. Examples: GPT-4, Claude, Gemini, Llama.' },
              { term: 'Neural Network', definition: 'A computing system inspired by the brain\'s structure. Layers of interconnected nodes process information and learn patterns from data during training.' },
              { term: 'Training Data', definition: 'The massive corpus of text an LLM learns from \u2014 books, websites, code, articles. The quality and breadth of training data directly determines the model\'s capabilities.' },
              { term: 'Parameters', definition: 'The adjustable numbers inside a neural network that determine its behavior. GPT-4 has estimated 1.7 trillion parameters. More parameters generally means more capability.' },
              { term: 'Inference', definition: 'The process of using a trained model to generate responses. Training happens once; inference happens every time someone sends a prompt.' },
              { term: 'Fine-tuning', definition: 'Additional training on a pre-trained model using specific data or human feedback to improve performance on particular tasks or make responses more helpful.' },
              { term: 'Foundation Model', definition: 'A large pre-trained model (like GPT-4 or Claude) that serves as a base. Can be used directly or fine-tuned for specific applications.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the fundamental mechanism behind how LLMs generate text?',
              options: ['They search a database of pre-written responses', 'They predict the next word based on patterns learned during training', 'They understand language the same way humans do', 'They follow a set of hand-written grammar rules'],
              correct: 1,
              explanation: 'LLMs are next-word prediction machines. They generate text by repeatedly predicting the most likely next word based on patterns learned from trillions of words during training. There is no database of responses or true understanding.',
            },
            {
              question: 'What is RLHF and why is it important?',
              options: ['A programming language for AI development', 'Reinforcement Learning from Human Feedback \u2014 it makes models more helpful and safe by training on human ratings', 'A type of database used to store AI knowledge', 'A hardware chip designed for AI training'],
              correct: 1,
              explanation: 'RLHF (Reinforcement Learning from Human Feedback) is the process where human raters score model responses, and the model is adjusted to prefer helpful, accurate, and safe outputs. It\'s why ChatGPT feels conversational rather than random.',
            },
            {
              question: 'Which is more expensive \u2014 training an LLM or running inference?',
              options: ['Inference is far more expensive per use', 'They cost about the same', 'Training is far more expensive (millions of dollars), but happens once; inference costs fractions of a cent but happens billions of times', 'Neither costs money \u2014 AI is free to run'],
              correct: 2,
              explanation: 'Training GPT-4 cost an estimated $100+ million and took months. But it only happens once. Inference (generating responses) costs fractions of a cent per request but happens billions of times per day across all users.',
            },
          ],
        },
        takeaway: 'LLMs are next-word prediction machines trained on massive text data \u2014 they don\'t think or understand, but prediction at enormous scale produces behavior that\'s remarkably useful for building AI-powered products.',
      },
      {
        id: '4.2',
        title: 'Tokens, Context Windows, and the Economics of AI',
        estimatedMinutes: 15,
        hook: 'Every time you send a message to ChatGPT or Claude, you\'re spending money \u2014 even if you\'re on a free tier, someone is paying. AI isn\'t priced by the word, the sentence, or the request. It\'s priced by the token. Understanding tokens is the key to understanding AI costs, limitations, and why your long conversations sometimes get "forgetful."',
        analogy: {
          front: 'Tokens are like syllables, not words. The word "understanding" is one word but four tokens (un-der-stand-ing). AI charges by the syllable. And the context window? That\'s the AI\'s desk \u2014 it can only hold so many papers at once. When the desk is full, old papers fall off the edge and the AI forgets them.',
          back: 'Token = the smallest unit of text AI processes (~0.75 words). Context window = the total number of tokens the model can "see" at once (its working memory). Input tokens = what you send. Output tokens = what AI generates. Both cost money.',
        },
        content: [
          {
            type: 'text',
            body: 'AI models don\'t read words \u2014 they read tokens. A token is roughly three-quarters of a word. Common words like "the" or "is" are single tokens. Longer words get split: "extraordinary" becomes ["extra", "ordinary"] (2 tokens). Code is especially token-heavy because variable names, brackets, and syntax each consume tokens. Why does this matter? Because every AI API charges per token. You pay for input tokens (your prompt) AND output tokens (the AI\'s response). Output tokens typically cost 3-5x more than input tokens because generating text requires more computation than reading it.',
          },
          {
            type: 'callout',
            body: 'A typical business email (~200 words) is roughly 270 tokens. A full novel (~80,000 words) is about 107,000 tokens. GPT-4o\'s context window is 128,000 tokens \u2014 so it can "read" about one novel\'s worth of text at a time. Claude 3.5 Sonnet supports 200,000 tokens. Google Gemini 1.5 Pro supports 1,000,000 tokens.',
          },
          {
            type: 'text',
            body: 'The context window is the AI\'s working memory \u2014 the total number of tokens it can process in a single conversation. This includes everything: the system prompt, your conversation history, any documents you\'ve pasted in, AND the response it generates. When you hit the context window limit, the model starts "forgetting" the earliest parts of your conversation. This is why long ChatGPT sessions sometimes lose track of what you discussed earlier. For product builders, context window management is a critical design decision. Do you send the entire conversation history every time (expensive, but maintains context)? Or do you summarize and trim (cheaper, but risks losing important details)?',
          },
          {
            type: 'cost-calculator',
            config: {
              sliders: [
                { name: 'Avg Tokens per Request', min: 100, max: 4000, default: 500, step: 100 },
                { name: 'Requests per Day', min: 10, max: 10000, default: 1000, step: 10 },
                { name: 'Cost per 1M Tokens ($)', min: 0.15, max: 15, default: 3, step: 0.15 },
              ],
              formula: 'Monthly API Cost: $[((Avg Tokens per Request * Requests per Day * 30 * Cost per 1M Tokens ($)) / 1000000).toFixed(2)]. At scale, token optimization can save thousands per month. A 20% reduction in prompt length = 20% cost savings.',
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Token', definition: 'The smallest unit of text an LLM processes. Roughly 0.75 words on average. AI APIs charge per token for both input and output.' },
              { term: 'Context Window', definition: 'The maximum number of tokens a model can process in a single request \u2014 its working memory. Includes system prompt, conversation history, and the generated response.' },
              { term: 'Input Tokens', definition: 'The tokens you send to the model (your prompt, system instructions, conversation history). Typically cheaper than output tokens.' },
              { term: 'Output Tokens', definition: 'The tokens the model generates in its response. Typically 3-5x more expensive than input tokens because generation requires more computation.' },
              { term: 'Token Limit', definition: 'The maximum number of tokens a model can generate in a single response. Separate from the context window. Usually 4,096 to 8,192 tokens for most models.' },
              { term: 'Tokenizer', definition: 'The algorithm that converts text into tokens. Different models use different tokenizers, so the same text may produce different token counts across models.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why are output tokens more expensive than input tokens?',
              options: ['Because output text is always longer', 'Because generating text requires more computation than reading it', 'Because output tokens use a different pricing model', 'They\'re actually the same price'],
              correct: 1,
              explanation: 'Generating each output token requires the model to run a forward pass through its entire neural network. Reading input tokens is processed in parallel and is computationally cheaper. That\'s why output tokens cost 3-5x more.',
            },
            {
              question: 'What happens when a conversation exceeds the context window?',
              options: ['The AI crashes and restarts', 'The earliest parts of the conversation are dropped and the AI "forgets" them', 'The AI automatically summarizes the conversation', 'Nothing \u2014 context windows are unlimited'],
              correct: 1,
              explanation: 'When the context window is full, the oldest tokens are dropped. The AI literally cannot see them anymore. This is why long conversations get "forgetful" \u2014 it\'s not a bug, it\'s a hard limit on working memory.',
            },
            {
              question: 'Roughly how many tokens is a 300-word email?',
              options: ['About 100 tokens', 'About 400 tokens', 'About 1,000 tokens', 'About 3,000 tokens'],
              correct: 1,
              explanation: 'The rule of thumb is 1 token per 0.75 words, or about 1.33 tokens per word. A 300-word email would be roughly 400 tokens. This is useful for estimating API costs.',
            },
          ],
        },
        takeaway: 'AI is priced per token (~0.75 words), limited by context windows (working memory), and output costs more than input \u2014 understanding these economics is essential for building cost-effective AI features.',
      },
      {
        id: '4.3',
        title: 'The Model Zoo \u2014 Choosing the Right AI Brain',
        estimatedMinutes: 15,
        hook: 'There are now dozens of AI models available, and the landscape changes every month. GPT-4o, Claude Sonnet, Gemini Flash, Llama 3, Mistral \u2014 each with different strengths, prices, and trade-offs. Picking the wrong model can mean paying 100x too much or getting responses that aren\'t good enough. This lesson gives you the decision framework.',
        analogy: {
          front: 'Choosing an AI model is like hiring an employee. You wouldn\'t hire a senior consultant at $500/hour to answer basic FAQs. And you wouldn\'t hire an intern to design your company\'s legal strategy. Different jobs need different skill levels \u2014 and different budgets.',
          back: 'GPT-4o / Claude Opus = senior consultant (highest quality, highest cost). Claude Sonnet / Gemini Pro = skilled mid-level (great balance). GPT-4o-mini / Claude Haiku / Gemini Flash = fast intern (quick, cheap, good for simple tasks). Llama / Mistral = in-house hire (you host, you control).',
        },
        content: [
          {
            type: 'text',
            body: 'The AI model market is dominated by four major providers: OpenAI (GPT-4o, GPT-4o-mini), Anthropic (Claude Opus, Claude Sonnet, Claude Haiku), Google (Gemini Ultra, Gemini Pro, Gemini Flash), and Meta (Llama 3, open source). Each provider offers a tiered lineup \u2014 a flagship model for maximum quality, a mid-tier model for the best price-to-performance ratio, and a small/fast model for high-volume, simple tasks. Additionally, open-source models like Meta\'s Llama 3 and Mistral can be self-hosted, giving you full control over data privacy and costs at the expense of managing your own infrastructure.',
          },
          {
            type: 'text',
            body: 'The key factors when choosing a model are: quality (how good are the responses for your use case?), speed (how fast does it generate responses?), cost (what\'s the price per million tokens?), context window (how much information can it process at once?), and data privacy (does your data leave your infrastructure?). For most products, you won\'t use a single model \u2014 you\'ll use a tiered approach. Route simple classification tasks to cheap, fast models and reserve expensive flagship models for complex reasoning tasks that justify the cost.',
          },
          {
            type: 'decision-tree',
            config: {
              title: 'Which AI model should you use?',
              start: 'q1',
              nodes: {
                q1: {
                  question: 'What\'s your top priority?',
                  options: [
                    { label: 'Maximum quality and reasoning', next: 'q2' },
                    { label: 'Speed and low cost', next: 'q3' },
                    { label: 'Data privacy / self-hosting', next: 'r5' },
                    { label: 'Best balance of quality and cost', next: 'r4' },
                  ],
                },
                q2: {
                  question: 'What\'s your budget per million tokens?',
                  options: [
                    { label: 'Budget is not a constraint', next: 'r1' },
                    { label: 'Want quality but cost-conscious', next: 'r2' },
                  ],
                },
                q3: {
                  question: 'What volume of requests do you expect?',
                  options: [
                    { label: 'Very high volume (10,000+ requests/day)', next: 'r3a' },
                    { label: 'Moderate volume', next: 'r3b' },
                  ],
                },
                r1: {
                  result: 'Claude Opus or GPT-4o',
                  detail: 'The flagship models offer the best reasoning, nuance, and accuracy. Best for: complex analysis, creative writing, code generation, and tasks where quality is paramount. Expect $10-60 per million tokens.',
                },
                r2: {
                  result: 'Claude Sonnet or GPT-4o',
                  detail: 'These mid-to-high tier models offer excellent quality at a more reasonable price. Claude Sonnet is particularly strong at coding and analysis. Best for: most production applications.',
                },
                r3a: {
                  result: 'GPT-4o-mini or Gemini Flash',
                  detail: 'The fastest, cheapest models designed for high-volume tasks. $0.15-$0.50 per million tokens. Best for: classification, simple Q&A, data extraction, and any task where speed and cost matter more than nuance.',
                },
                r3b: {
                  result: 'Claude Haiku or GPT-4o-mini',
                  detail: 'Small models that punch above their weight. Great for moderate-volume tasks where you need quick responses without premium costs. $0.25-$1 per million tokens.',
                },
                r4: {
                  result: 'Claude Sonnet or Gemini Pro',
                  detail: 'The sweet spot for most applications. Strong quality, reasonable speed, moderate cost ($3-10 per million tokens). These are the workhorses of production AI systems.',
                },
                r5: {
                  result: 'Llama 3 or Mistral (Self-Hosted)',
                  detail: 'Open-source models you can run on your own servers. No data leaves your infrastructure. Trade-off: you manage the GPU infrastructure and the models may be slightly less capable than the top proprietary options.',
                },
              },
            },
          },
          {
            type: 'callout',
            body: 'The smartest AI architecture uses multiple models. Route easy tasks (classification, extraction) to cheap models like GPT-4o-mini ($0.15/1M tokens) and reserve expensive models like Claude Opus ($15/1M tokens) for complex reasoning. This "model routing" approach can cut costs by 80% while maintaining quality where it matters.',
          },
          {
            type: 'text',
            body: 'Multimodal AI is the next frontier. Models like GPT-4o, Gemini Pro, and Claude can now process images, audio, and video alongside text. This means your app can analyze photos (product identification, medical imaging, document scanning), transcribe and summarize audio (meeting notes, podcast highlights), and even understand video content. When choosing a model, check its multimodal capabilities: some excel at vision tasks, others at audio. For image-heavy products (e-commerce, real estate, healthcare), multimodal support is a must-have, not a nice-to-have.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why would a product use multiple AI models instead of just one?',
              options: ['Because no single model works at all', 'To route simple tasks to cheap/fast models and complex tasks to high-quality models, optimizing cost and performance', 'Because AI providers require you to use multiple models', 'For aesthetic variety in responses'],
              correct: 1,
              explanation: 'Model routing is a core AI architecture pattern. Simple tasks like classification don\'t need a $15/1M token model \u2014 a $0.15/1M token model handles them fine. Save the expensive models for complex reasoning tasks.',
            },
            {
              question: 'What is the main advantage of open-source models like Llama 3?',
              options: ['They are always higher quality than proprietary models', 'You can self-host them, keeping all data on your own infrastructure', 'They are free to run with zero costs', 'They have unlimited context windows'],
              correct: 1,
              explanation: 'Open-source models can be run on your own servers, meaning no data ever leaves your infrastructure. This is critical for healthcare, finance, and any domain with strict data privacy requirements. However, you pay for GPU hosting instead of API costs.',
            },
            {
              question: 'Which model tier would you choose for a high-volume customer support chatbot handling simple FAQs?',
              options: ['Claude Opus (flagship)', 'GPT-4o (high-tier)', 'GPT-4o-mini or Gemini Flash (small/fast)', 'Llama 3 self-hosted'],
              correct: 2,
              explanation: 'Simple FAQ responses don\'t require the reasoning power of flagship models. A small, fast model like GPT-4o-mini or Gemini Flash can handle them at a fraction of the cost \u2014 potentially 100x cheaper per request.',
            },
          ],
        },
        takeaway: 'The AI model landscape offers tiers from cheap and fast to expensive and powerful \u2014 the best products use model routing to match task complexity with the right model, optimizing both cost and quality.',
      },
      {
        id: '4.4',
        title: 'Temperature, System Prompts, and Controlling the AI',
        estimatedMinutes: 15,
        hook: 'Same model, same prompt, wildly different results. One response is a crisp, factual list. Another is a creative, rambling essay. The difference isn\'t luck \u2014 it\'s configuration. A handful of settings give you precise control over how AI behaves, and mastering them is what separates amateur integrations from polished products.',
        analogy: {
          front: 'Temperature is like a chef\'s dial between "follow the recipe exactly" (0) and "improvise with whatever inspires you" (1). A system prompt is the restaurant\'s policy manual \u2014 every chef follows it, but customers never see it. Together, they define what kind of meal you get.',
          back: 'Temperature 0 = deterministic, consistent, factual. Temperature 1 = creative, varied, surprising. System prompt = hidden instructions that shape every response. Together with max tokens and stop sequences, these settings are the control panel for AI behavior.',
        },
        content: [
          {
            type: 'text',
            body: 'When you call an AI model, you don\'t just send a prompt \u2014 you send configuration parameters that dramatically affect the output. Temperature is the most important: it controls randomness. At temperature 0, the model always picks the most probable next word, producing consistent and deterministic output. At temperature 1, it samples more broadly from probable words, producing creative and varied output. For a customer support bot, you want temperature 0 \u2014 consistent, predictable answers. For a creative writing tool, temperature 0.7-0.9 gives interesting variety.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                { label: 'Temperature 0 (Precise)', code: 'Prompt: "Describe the color blue"\n\nResponse: "Blue is a primary color\nwith a wavelength of\napproximately 450-495\nnanometers. It is commonly\nassociated with the sky and\nocean."\n\n// Run it 10 times: same answer\n// every single time.' },
                { label: 'Temperature 0.5 (Balanced)', code: 'Prompt: "Describe the color blue"\n\nResponse: "Blue carries the calm\nof a clear morning sky. It is\none of the three primary colors,\nfound in ocean depths and\ncornflower petals alike."\n\n// Run it 10 times: similar\n// structure, slightly varied\n// word choices each time.' },
                { label: 'Temperature 1.0 (Creative)', code: 'Prompt: "Describe the color blue"\n\nResponse: "Blue is that quiet\nrebel of the spectrum \u2014 the\nmood of midnight jazz, the\ncolor of almost-forgotten\ndreams, swimming somewhere\nbetween melancholy and infinite\npossibility."\n\n// Run it 10 times: wildly\n// different every time.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'The system prompt is your most powerful tool as a product builder. It\'s a hidden instruction set that the model follows for every response, but the user never sees. Think of it as programming the AI\'s personality, rules, and constraints. A well-crafted system prompt can turn a generic LLM into a specialized medical assistant, a code reviewer, a customer support agent, or a creative writing coach. System prompts typically include: the AI\'s role and personality, rules about what it should and shouldn\'t do, output format requirements, and examples of ideal responses.',
          },
          {
            type: 'callout',
            body: 'Anthropic\'s Claude uses a system prompt internally that\'s thousands of words long, defining its personality, safety guidelines, and response formatting. When you write a system prompt for your product, you\'re doing the same thing \u2014 creating a custom AI personality tailored to your users\' needs.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Temperature', definition: 'Controls randomness in AI responses. 0 = deterministic and consistent. 1 = creative and varied. Most production apps use 0-0.3 for factual tasks and 0.7-0.9 for creative tasks.' },
              { term: 'System Prompt', definition: 'Hidden instructions sent to the model before every user message. Defines the AI\'s role, personality, rules, and output format. The user never sees it but it shapes every response.' },
              { term: 'Max Tokens', definition: 'The maximum number of tokens the model will generate in a response. Set it to prevent runaway responses and control costs. Too low and responses get cut off.' },
              { term: 'Stop Sequence', definition: 'A string that tells the model to stop generating. Useful for structured outputs \u2014 e.g., stop at "\\n\\n" to get only one paragraph.' },
              { term: 'Top-p (Nucleus Sampling)', definition: 'An alternative to temperature. Instead of adjusting randomness, it limits the model to the top P% of probable tokens. Top-p 0.1 means only the top 10% most likely words are considered.' },
              { term: 'Frequency Penalty', definition: 'Reduces repetition by penalizing tokens that have already appeared in the response. Higher values produce more varied vocabulary.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What temperature would you set for a customer support chatbot that needs consistent, accurate answers?',
              options: ['Temperature 1.0 for creative responses', 'Temperature 0 to 0.3 for deterministic, consistent output', 'Temperature 0.9 for varied, interesting responses', 'Temperature doesn\'t matter for chatbots'],
              correct: 1,
              explanation: 'Customer support needs consistent, reliable answers. Low temperature (0-0.3) ensures the model gives the same correct answer every time, rather than creatively improvising different responses to the same question.',
            },
            {
              question: 'What is the purpose of a system prompt?',
              options: ['To debug errors in the AI model', 'To provide hidden instructions that shape the AI\'s personality, rules, and output format for every response', 'To increase the model\'s context window', 'To reduce the cost of API calls'],
              correct: 1,
              explanation: 'The system prompt is your primary tool for customizing AI behavior. It defines the AI\'s role, constraints, and response format. Users never see it, but it shapes every response the AI generates in your product.',
            },
          ],
        },
        takeaway: 'Temperature controls creativity vs consistency, system prompts define AI personality and rules, and settings like max tokens and stop sequences give you precise control over AI output \u2014 these are your product\'s AI control panel.',
      },
      {
        id: '4.5',
        title: 'Streaming \u2014 Why AI Responses Type at You',
        estimatedMinutes: 12,
        hook: 'You\'ve noticed it every time you use ChatGPT or Claude \u2014 the text appears word by word, like someone typing in real time. That\'s not a gimmick or an animation. It\'s a fundamental technical pattern called streaming, and without it, you\'d stare at a blank screen for 10-30 seconds before getting a wall of text all at once. Streaming is essential UX for any AI product.',
        analogy: {
          front: 'Imagine ordering five dishes at a restaurant. Option A: the waiter waits until ALL five dishes are ready, then brings them all at once \u2014 you sit staring at an empty table for 45 minutes. Option B: the waiter brings each dish as it\'s ready \u2014 you start eating in 5 minutes. Same total food, dramatically different experience.',
          back: 'Non-streaming = wait for entire response, then display all at once (blank screen for seconds). Streaming = display each word as it\'s generated in real time (instant feedback). Same total response, but streaming feels 10x faster to users.',
        },
        content: [
          {
            type: 'text',
            body: 'LLMs generate text one token at a time. Without streaming, your app sends a request to the AI and waits for the complete response before showing anything. For a 500-word response, that\'s 10-30 seconds of staring at a loading spinner. With streaming, each token is sent to your app the instant it\'s generated. The user sees text appearing word by word in real time, usually starting within 200-500 milliseconds. The total time to generate the full response is the same, but the perceived speed is dramatically faster because users start reading immediately.',
          },
          {
            type: 'timeline',
            config: {
              title: 'Streaming vs Non-Streaming: What the User Experiences',
              steps: [
                { label: 'User Sends Prompt', detail: 'The user clicks send. In both approaches, the request is sent to the AI API server.' },
                { label: 'Streaming: First Token (200ms)', detail: 'With streaming, the first word appears on screen in 200-500ms. The user starts reading immediately. Server-Sent Events (SSE) deliver each token as it\'s generated.' },
                { label: 'Non-Streaming: Waiting... (10-30s)', detail: 'Without streaming, the user sees a loading spinner. The server is generating tokens but not sending any of them yet.' },
                { label: 'Streaming: Response Builds (1-15s)', detail: 'Words continue appearing in real time. Users read as the response generates. They can even start responding mentally.' },
                { label: 'Non-Streaming: Full Response Appears', detail: 'After 10-30 seconds, the entire response appears at once as a wall of text. Same content, but the wait felt interminable.' },
                { label: 'Result', detail: 'Both deliver the same response. But streaming feels 10x faster. In UX studies, perceived speed matters more than actual speed for user satisfaction.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Streaming is implemented using Server-Sent Events (SSE) \u2014 a simple HTTP-based protocol where the server keeps the connection open and pushes data chunks to the client as they become available. Unlike WebSockets (which are bidirectional), SSE is one-way: server to client. This is perfect for AI responses because the data only flows one direction. Every major AI API (OpenAI, Anthropic, Google) supports streaming by adding a simple parameter to your request: stream: true. On the frontend, you read the response as a stream of chunks, appending each token to the displayed text. Most modern frameworks handle this cleanly with async iterators or event handlers.',
          },
          {
            type: 'callout',
            body: 'The metric that matters for streaming UX is "Time-to-First-Token" (TTFT) \u2014 how long until the user sees the first word appear. For a great experience, TTFT should be under 500ms. This is one reason smaller, faster models are sometimes preferred for user-facing features: their TTFT is much lower, even if the total generation time is similar.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Streaming', definition: 'Delivering AI responses token by token in real time, rather than waiting for the complete response. Dramatically improves perceived speed and user experience.' },
              { term: 'Server-Sent Events (SSE)', definition: 'A simple HTTP protocol where the server keeps a connection open and pushes data to the client. One-way communication, perfect for streaming AI responses.' },
              { term: 'WebSocket', definition: 'A bidirectional communication protocol. More complex than SSE but allows two-way data flow. Used for chat apps and real-time collaboration, sometimes overkill for AI streaming.' },
              { term: 'Chunked Response', definition: 'A response sent in pieces (chunks) over time rather than all at once. Each chunk in AI streaming typically contains one or a few tokens.' },
              { term: 'Time-to-First-Token (TTFT)', definition: 'The latency between sending a request and receiving the first token of the response. The most important UX metric for streaming AI. Target: under 500ms.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why does streaming make AI responses feel faster even though total generation time is the same?',
              options: ['Streaming actually reduces total generation time', 'Users start reading immediately instead of staring at a loading spinner, so perceived speed is dramatically higher', 'Streaming compresses the response data', 'It doesn\'t \u2014 streaming is purely decorative'],
              correct: 1,
              explanation: 'Streaming doesn\'t change how fast the AI generates tokens \u2014 it changes when users start seeing them. Instead of waiting 15 seconds for a complete response, users see the first words in under 500ms and read as the response builds. Perceived speed matters more than actual speed.',
            },
            {
              question: 'What protocol do most AI APIs use for streaming responses?',
              options: ['WebSockets', 'Server-Sent Events (SSE)', 'GraphQL subscriptions', 'FTP'],
              correct: 1,
              explanation: 'Server-Sent Events (SSE) are the standard for AI streaming. They\'re simpler than WebSockets because AI responses only flow one direction (server to client). You just add stream: true to your API call and read the tokens as they arrive.',
            },
          ],
        },
        takeaway: 'Streaming delivers AI responses word-by-word using Server-Sent Events, transforming a 15-second blank screen into an immediate, engaging experience \u2014 it\'s a non-negotiable UX pattern for any AI product.',
      },
      {
        id: '4.6',
        title: 'RAG \u2014 Teaching AI Your Private Knowledge',
        estimatedMinutes: 18,
        hook: 'LLMs know a lot about the world, but they know nothing about your company\'s internal documents, your product specs, or last quarter\'s financial report. Ask GPT-4 about your company\'s refund policy and it\'ll confidently make one up. RAG (Retrieval-Augmented Generation) solves this by giving AI access to your private knowledge \u2014 without retraining the model.',
        analogy: {
          front: 'You\'re a consultant hired by a new client. The client asks about their Q3 revenue. You don\'t know from memory, but they give you access to a filing cabinet full of reports. You search the cabinet (retrieval), pull out the relevant folders (chunks), read them (context), and answer the question using those documents (generation). That\'s RAG.',
          back: 'Filing cabinet = vector database storing document embeddings. Searching = similarity search using the user\'s query. Relevant folders = retrieved chunks of text. Reading them = adding chunks to the LLM\'s context window. Answering = LLM generates a response grounded in your actual documents.',
        },
        content: [
          {
            type: 'text',
            body: 'RAG stands for Retrieval-Augmented Generation. It\'s the most important pattern in production AI today. The idea is simple: before the LLM generates a response, first retrieve relevant information from your private documents and include it in the prompt. The LLM then generates its answer based on your actual data, not its training data. This means you can build AI systems that answer questions about your company, your products, your legal documents \u2014 anything \u2014 without fine-tuning or retraining the model.',
          },
          {
            type: 'diagram',
            variant: 'rag-pipeline',
          },
          {
            type: 'timeline',
            config: {
              title: 'The RAG Pipeline: From Documents to Answers',
              steps: [
                { label: '1. Document Ingestion', detail: 'Your documents (PDFs, web pages, docs, databases) are loaded into the system. This is a one-time setup step (plus updates when documents change).' },
                { label: '2. Chunking', detail: 'Documents are split into smaller pieces (chunks) \u2014 typically 200-500 words each. Why? Because context windows are limited and you only want the relevant portions, not entire documents.' },
                { label: '3. Embedding', detail: 'Each chunk is converted into a numerical vector (a list of numbers) that represents its meaning. This is done by an embedding model. Similar meanings produce similar vectors.' },
                { label: '4. Vector Storage', detail: 'These vectors are stored in a vector database (Pinecone, Weaviate, pgvector, Chroma). Think of it as a filing cabinet organized by meaning rather than alphabetically.' },
                { label: '5. User Query', detail: 'A user asks a question. Their question is also converted into a vector using the same embedding model.' },
                { label: '6. Similarity Search', detail: 'The vector database finds the chunks whose vectors are most similar to the query vector. "Most similar" means semantically closest \u2014 even if different words are used.' },
                { label: '7. Context Assembly', detail: 'The top retrieved chunks are inserted into the LLM\'s prompt as context: "Based on the following information: [chunks]. Answer the user\'s question: [query]."' },
                { label: '8. LLM Generation', detail: 'The LLM generates a response grounded in the retrieved chunks. Because the answer is based on your actual documents, it\'s accurate and can cite sources.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Embeddings are the secret sauce that makes RAG work. An embedding is a list of numbers (a vector) that captures the meaning of text. The word "dog" and the phrase "furry pet that barks" would have very similar embedding vectors, even though they share no words in common. This allows semantic search \u2014 searching by meaning rather than keywords. When a user asks "What\'s our return policy?" the embedding model captures the meaning, and the vector database finds document chunks about refunds, exchanges, and return windows \u2014 even if those chunks never use the exact phrase "return policy."',
          },
          {
            type: 'callout',
            body: 'Real-world RAG in action: Notion AI searches your workspace documents before answering. GitHub Copilot retrieves relevant code from your codebase. Customer support bots search knowledge base articles. Legal AI tools search case law. In each case, retrieval happens before generation \u2014 that\'s the RAG pattern.',
          },
          {
            type: 'text',
            body: 'RAG vs. Fine-tuning: two ways to customize AI, with very different trade-offs. RAG retrieves relevant documents at query time and adds them to the prompt \u2014 no model changes needed, easy to update (just add new documents), and works with any model. Fine-tuning actually retrains the model on your data, permanently changing its behavior. Fine-tuning is best for teaching AI a specific style, tone, or domain vocabulary. RAG is best for giving AI access to facts, documents, and current information. The rule of thumb: use RAG for knowledge ("what does our refund policy say?") and fine-tuning for behavior ("respond in our brand voice"). Most products need RAG. Very few need fine-tuning. Start with RAG and only fine-tune if RAG can\'t achieve the quality you need.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'RAG (Retrieval-Augmented Generation)', definition: 'A pattern where relevant documents are retrieved and added to the AI\'s prompt before generating a response. The most common way to give AI access to private or up-to-date knowledge.' },
              { term: 'Chunking', definition: 'Splitting documents into smaller, manageable pieces (typically 200-500 words). Chunks should be semantically meaningful \u2014 splitting mid-sentence creates poor retrieval quality.' },
              { term: 'Embedding', definition: 'A numerical vector that represents the meaning of text. Similar meanings produce similar vectors. The foundation of semantic search and RAG retrieval.' },
              { term: 'Vector Store / Vector Database', definition: 'A database optimized for storing and searching embedding vectors. Finds the most semantically similar documents in milliseconds. Examples: Pinecone, Weaviate, Chroma, pgvector.' },
              { term: 'Semantic Search', definition: 'Searching by meaning rather than exact keywords. "How do I get a refund?" matches documents about "return policy" because the embeddings capture the same intent.' },
              { term: 'Hallucination', definition: 'When an AI generates confident-sounding but factually incorrect information. RAG reduces hallucination by grounding responses in actual source documents.' },
              { term: 'LlamaIndex', definition: 'A Python framework for building RAG applications. Handles document loading, chunking, embedding, vector storage, and query pipelines with minimal code. Pairs with LangChain for agent workflows.' },
              { term: 'Fine-tuning', definition: 'Retraining an AI model on your specific data to permanently change its behavior, style, or domain knowledge. More expensive and complex than RAG, but useful for teaching consistent tone or specialized vocabulary.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What problem does RAG solve that prompting alone cannot?',
              options: ['RAG makes the AI generate text faster', 'RAG gives the AI access to private, current, or specialized knowledge that wasn\'t in its training data', 'RAG reduces the cost of API calls', 'RAG makes the AI model smaller'],
              correct: 1,
              explanation: 'LLMs only know what was in their training data (which has a cutoff date and doesn\'t include your private documents). RAG retrieves relevant information from your own data sources and includes it in the prompt, so the AI can answer questions about things it was never trained on.',
            },
            {
              question: 'What is an embedding in the context of RAG?',
              options: ['A compressed version of a document', 'A numerical vector that represents the meaning of text, enabling semantic similarity search', 'A type of database index', 'A formatting style for AI responses'],
              correct: 1,
              explanation: 'Embeddings convert text into vectors (lists of numbers) that capture meaning. Similar meanings produce similar vectors. This is what enables semantic search \u2014 finding relevant documents based on meaning rather than exact keyword matches.',
            },
            {
              question: 'Why are documents chunked before being embedded?',
              options: ['To save storage space', 'Because embedding models can only process small text inputs, and you only want the most relevant portions in the AI\'s limited context window', 'To make documents load faster on the frontend', 'Chunking is optional and doesn\'t affect quality'],
              correct: 1,
              explanation: 'Context windows are limited and expensive. If you embed entire documents, you\'d waste context space on irrelevant sections. Chunking lets you retrieve only the most relevant portions \u2014 the specific paragraphs that answer the user\'s question.',
            },
          ],
        },
        takeaway: 'RAG retrieves relevant private documents and feeds them to the LLM before generation \u2014 it\'s how you build AI that answers questions about your own data without retraining the model.',
      },
      {
        id: '4.7',
        title: 'Function Calling \u2014 Giving AI Hands and Eyes',
        estimatedMinutes: 15,
        hook: 'Ask an LLM "What\'s the weather in Toronto?" and it\'ll guess based on general knowledge. But with function calling, the AI can actually check a real weather API and give you the current temperature. Function calling transforms AI from a text generator into an agent that can take real actions \u2014 check databases, send emails, book appointments, and interact with any system that has an API.',
        analogy: {
          front: 'An LLM without function calling is like a brilliant advisor locked in a room with no phone, no computer, no tools. They can give great advice based on what they already know, but they can\'t check facts, look things up, or do anything in the real world. Function calling gives them a phone, a computer, and access to your company\'s systems.',
          back: 'Without function calling = text in, text out (pure generation). With function calling = AI recognizes when to call an external function, formats the arguments, your code executes the function, and the result is fed back to the AI for its final response.',
        },
        content: [
          {
            type: 'text',
            body: 'Function calling (also called "tool use") is a feature where you describe available functions to the AI model, and the model decides when to call them based on the user\'s request. You don\'t hardcode "if user says weather, call weather API." Instead, you tell the AI "you have access to a get_weather function that takes a city name" and the AI figures out on its own when to use it. This is a fundamental shift \u2014 the AI becomes a reasoning engine that orchestrates real tools rather than just generating text.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                { label: '1. Define Functions', code: '// Tell the AI what tools it has:\ntools: [{\n  name: "get_weather",\n  description: "Get current weather\n    for a city",\n  parameters: {\n    type: "object",\n    properties: {\n      city: {\n        type: "string",\n        description: "City name"\n      }\n    },\n    required: ["city"]\n  }\n}]' },
                { label: '2. AI Decides to Call', code: '// User: "What\'s the weather\n//         in Toronto?"\n\n// AI response (not text!):\n{\n  "tool_calls": [{\n    "function": "get_weather",\n    "arguments": {\n      "city": "Toronto"\n    }\n  }]\n}\n\n// AI chose to call the function\n// instead of generating text' },
                { label: '3. Execute & Return', code: '// Your code runs the function:\nconst result = await\n  getWeather("Toronto");\n// Returns: { temp: -5,\n//   condition: "snow" }\n\n// Feed result back to AI:\n// AI final response:\n// "It\'s currently -5\u00b0C in\n//  Toronto with snow. You\n//  might want a warm coat!"' },
              ],
            },
          },
          {
            type: 'text',
            body: 'The power of function calling becomes clear when you give AI access to multiple tools. A customer service AI could have: check_order_status, initiate_refund, schedule_callback, search_knowledge_base, and escalate_to_human. The AI reasons about which tool to use (or which combination of tools) based on the user\'s request. "Where\'s my order #1234?" triggers check_order_status. "I want a refund for order #1234" triggers check_order_status (to verify the order) AND initiate_refund. The AI orchestrates these calls automatically.',
          },
          {
            type: 'callout',
            body: 'Function calling is how AI assistants like Claude and ChatGPT browse the web, run code, search files, and interact with external services. When ChatGPT searches Bing or runs Python code, it\'s using function calling behind the scenes \u2014 the model decides it needs external information, calls the appropriate tool, and incorporates the result into its response.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Function Calling', definition: 'A feature where AI models can invoke predefined functions based on user intent. The model decides when to call a function, what arguments to pass, and incorporates the result into its response.' },
              { term: 'Tool Use', definition: 'Another name for function calling, used by Anthropic (Claude). The concept is identical: giving AI the ability to use external tools.' },
              { term: 'Tool Definition', definition: 'A JSON schema describing a function the AI can call \u2014 its name, description, parameters, and parameter types. This is how the AI knows what tools are available.' },
              { term: 'Parameters (in function calling)', definition: 'The inputs a function requires. Defined using JSON Schema so the AI knows what data types and values to provide (string, number, required vs optional).' },
              { term: 'JSON Schema', definition: 'A standard for describing the structure of JSON data. Used in function calling to define what arguments a function accepts and their types.' },
              { term: 'Structured Output', definition: 'Forcing the AI to respond in a specific format (JSON, XML, etc.) rather than free-form text. Often used alongside function calling for reliable parsing.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'How does the AI know which function to call?',
              options: ['The developer hardcodes if/else rules for each user message', 'The AI reads the function definitions and autonomously decides which function matches the user\'s intent', 'The user explicitly tells the AI which function to run', 'Functions are called randomly'],
              correct: 1,
              explanation: 'You describe available functions (name, description, parameters) to the AI. The model then uses its reasoning ability to decide which function is appropriate for each user request. No hardcoded rules needed.',
            },
            {
              question: 'What happens after the AI decides to call a function?',
              options: ['The AI executes the function directly on the server', 'The AI returns a structured request, YOUR code executes the function, and the result is sent back to the AI', 'The function runs automatically in the cloud', 'The user must approve each function call manually'],
              correct: 1,
              explanation: 'The AI never executes functions directly \u2014 it returns a structured response indicating which function to call and with what arguments. Your backend code is responsible for actually executing the function and feeding the result back to the AI.',
            },
          ],
        },
        takeaway: 'Function calling lets AI invoke real tools \u2014 APIs, databases, external services \u2014 based on user intent, transforming it from a text generator into an intelligent orchestrator that can take real actions.',
      },
      {
        id: '4.8',
        title: 'AI Agents \u2014 Autonomous Problem Solvers',
        estimatedMinutes: 15,
        hook: 'A single AI call answers a question. An AI agent completes a project. Agents take a goal, break it into steps, use tools to execute each step, evaluate results, adjust their plan, and keep going until the task is done. They\'re not just answering \u2014 they\'re doing. This is the frontier of AI product development.',
        analogy: {
          front: 'An API call is like a freelancer: you give them one specific task, they do it, and they\'re done. An AI agent is like an employee: you give them a project brief ("redesign our homepage"), and they break it into tasks, use tools, check their own work, ask for clarification when needed, and deliver a final result.',
          back: 'Single API call = one question, one answer. Agent = task decomposition + tool use + memory + iteration. The agent loop: Receive goal \u2192 Plan steps \u2192 Execute (using tools) \u2192 Observe result \u2192 Decide next step \u2192 Repeat until done.',
        },
        content: [
          {
            type: 'text',
            body: 'An AI agent is a system where an LLM acts as the "brain" that plans and makes decisions, while having access to tools (functions, APIs, databases) that serve as its "hands." The key difference between an agent and a simple API call is the loop: the agent takes an action, observes the result, and decides what to do next. It can execute multiple steps, handle errors, change its approach, and work toward complex goals that no single prompt could achieve.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The Agent Loop: How AI Agents Work',
              steps: [
                { label: 'Receive Task', detail: 'The agent receives a complex goal: "Research competitors and create a comparison table" or "Fix the failing test in the checkout module."' },
                { label: 'Plan Steps', detail: 'The LLM breaks the goal into subtasks: Step 1: Search for competitor list. Step 2: Visit each competitor\'s site. Step 3: Extract pricing data. Step 4: Format into a table.' },
                { label: 'Execute Tool', detail: 'The agent calls a tool to perform the current step \u2014 web search, file read, API call, code execution. Each tool returns a result.' },
                { label: 'Observe Result', detail: 'The agent evaluates the tool\'s output. Did it work? Is the data sufficient? Were there errors? This is where agents differ from scripts \u2014 they reason about results.' },
                { label: 'Decide Next Action', detail: 'Based on the observation, the agent decides: proceed to the next step, retry with a different approach, request more information, or determine the task is complete.' },
                { label: 'Iterate or Complete', detail: 'The loop continues until the agent determines the goal is fully achieved. It then delivers the final result \u2014 often a complete document, code change, or action taken.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Real AI agents are already in production. Claude Code (which you might be reading about in this very app) is an AI agent that plans code changes, writes files, runs tests, fixes errors, and iterates until the code works. Cursor and GitHub Copilot Workspace are AI coding agents that can implement features across multiple files. Customer support agents can handle entire support tickets \u2014 looking up order status, checking refund eligibility, processing the refund, and sending a confirmation email \u2014 all autonomously. The multi-agent pattern takes this further: multiple specialized agents collaborate on complex tasks. One agent plans, another writes code, a third reviews it, and a fourth runs tests.',
          },
          {
            type: 'callout',
            body: 'The risk with agents is that they can go off-track. A poorly designed agent might get stuck in a loop, call expensive APIs unnecessarily, or take actions you didn\'t intend. Production agent systems always include guardrails: maximum iteration limits, cost caps, human-in-the-loop approval for critical actions, and comprehensive logging.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Agent Loop', definition: 'The core cycle of an AI agent: perceive \u2192 plan \u2192 act \u2192 observe \u2192 repeat. The agent keeps looping until the goal is achieved or a limit is reached.' },
              { term: 'Planning', definition: 'The agent\'s ability to decompose a complex goal into an ordered sequence of subtasks. Better planning = fewer wasted steps and lower costs.' },
              { term: 'Tool Use (in agents)', definition: 'Agents use tools (APIs, code execution, file operations, web search) to interact with the real world. Tools are the agent\'s "hands."' },
              { term: 'Memory', definition: 'An agent\'s ability to remember information across steps. Short-term memory lives in the context window. Long-term memory is stored externally (database, vector store).' },
              { term: 'Multi-Agent System', definition: 'Multiple specialized AI agents working together. Example: a planner agent, a coder agent, a reviewer agent, and a tester agent collaborating on a software project.' },
              { term: 'Orchestration', definition: 'The coordination layer that manages agent execution \u2014 routing tasks, managing state, handling errors, and enforcing guardrails. Frameworks: LangGraph, CrewAI, Autogen.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the fundamental difference between a single AI API call and an AI agent?',
              options: ['Agents use a different, more expensive model', 'Agents iterate \u2014 they plan, execute, observe results, and decide next steps in a loop, while API calls are one-shot', 'Agents are always open-source', 'There is no real difference \u2014 it\'s just marketing'],
              correct: 1,
              explanation: 'A single API call is one question, one answer. An agent is a loop: it plans steps, executes them using tools, observes results, and decides what to do next. This iteration is what allows agents to complete complex, multi-step tasks.',
            },
            {
              question: 'Why do production agent systems need guardrails?',
              options: ['Because AI models are always wrong', 'Because agents can get stuck in loops, spend too much on API calls, or take unintended actions without limits and oversight', 'Guardrails are optional and rarely used', 'Because agents need to be restarted frequently'],
              correct: 1,
              explanation: 'Agents make autonomous decisions, which means they can go off-track. Without guardrails like iteration limits, cost caps, and human approval for critical actions, an agent could rack up thousands in API costs or take unintended actions.',
            },
          ],
        },
        takeaway: 'AI agents are autonomous systems that plan, execute tools, observe results, and iterate toward complex goals \u2014 they\'re the evolution from AI as a question-answerer to AI as a project-completer.',
      },
      {
        id: '4.9',
        title: 'Prompt Engineering \u2014 The Most Important Skill You\'ll Learn',
        estimatedMinutes: 15,
        hook: 'The difference between a useless AI response and a brilliant one often has nothing to do with the model \u2014 it\'s the prompt. Prompt engineering is the skill of writing instructions that get dramatically better results from AI. It\'s the most leveraged skill in the AI era because a well-crafted prompt can make a $0.001 API call more useful than a poorly-prompted $0.10 one.',
        analogy: {
          front: 'Asking AI "Write about marketing" is like telling a chef "Make food." You\'ll get something, but it probably won\'t be what you wanted. Asking "Write a 200-word LinkedIn post for B2B SaaS founders about why case studies outperform testimonials, using a data-driven tone with one specific example" \u2014 that\'s a recipe a chef can nail.',
          back: 'Vague prompt = vague result. Specific prompt = specific result. The key techniques: be specific, provide context, give examples (few-shot), request a reasoning chain (chain-of-thought), and define the output format explicitly.',
        },
        content: [
          {
            type: 'text',
            body: 'Prompt engineering is not about tricks or hacks \u2014 it\'s about clear communication. The model is trying to predict what response best matches your prompt. The more precise and detailed your prompt, the better the prediction. There are five core principles that will dramatically improve every AI interaction you have: (1) Be specific about what you want. (2) Provide context about who you are and what the output is for. (3) Give examples of ideal output (called "few-shot prompting"). (4) Ask for reasoning before conclusions (called "chain-of-thought"). (5) Define the exact output format you need.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                { label: 'Bad: Summarization', code: '// Bad prompt:\n"Summarize this article."\n\n// Result: Generic, unfocused\n// summary you can\'t use.\n\n// Good prompt:\n"Summarize this article in\n3 bullet points for a product\nmanager. Focus on actionable\ninsights about user retention.\nEach bullet: max 20 words.\nStart each with a verb."\n\n// Result: Crisp, actionable,\n// ready to paste into a doc.' },
                { label: 'Bad: Code Generation', code: '// Bad prompt:\n"Write a login function."\n\n// Result: Generic function,\n// wrong language, no error\n// handling, no context.\n\n// Good prompt:\n"Write a login function in\nNode.js using Express and\nbcrypt. Accept email and\npassword via POST body.\nReturn JWT on success,\n401 on invalid credentials.\nInclude input validation\nand rate limiting. Use\nasync/await with try/catch."\n\n// Result: Production-ready.' },
                { label: 'Bad: Analysis', code: '// Bad prompt:\n"Analyze this data."\n\n// Result: Superficial overview\n// that misses what you need.\n\n// Good prompt:\n"You are a senior data analyst.\nAnalyze this sales data for Q4.\nCompare vs Q3 and vs Q4 last\nyear. Identify the top 3 trends.\nFor each trend, explain:\n1. What changed\n2. Likely cause\n3. Recommended action\nFormat as a table with columns:\nTrend | Change | Cause | Action"\n\n// Result: Executive-ready\n// analysis in 30 seconds.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Chain-of-thought prompting deserves special attention. Instead of asking the AI for a direct answer, you ask it to think step by step before concluding. For complex reasoning tasks \u2014 math, logic, analysis \u2014 this dramatically improves accuracy. Simply adding "Think through this step by step before giving your final answer" can be the difference between a wrong answer and a correct one. This works because the model\'s reasoning is built incrementally with each token it generates. When it "thinks out loud," each reasoning step creates context that informs the next step.',
          },
          {
            type: 'callout',
            body: 'The debugging prompt formula: when asking AI to help fix code, always include: (1) the error message, (2) the relevant code, (3) what you expected to happen, (4) what actually happened, and (5) your tech stack. This formula applies to any troubleshooting scenario and consistently produces better results than "my code is broken, help."',
          },
          {
            type: 'prompt-lab',
            config: {
              title: 'Prompt Engineering: Bad vs Good',
              pairs: [
                {
                  bad: {
                    text: 'Write me a website.',
                    annotations: ['No context about what kind of website', 'No tech stack specified', 'No description of features or pages', 'AI will make random assumptions about everything']
                  },
                  good: {
                    text: 'Build a personal portfolio website using Next.js and Tailwind CSS. It should have 4 pages: Home (hero section with name and tagline), Projects (grid of project cards with title, description, image, and GitHub link), About (bio paragraph and skills list), and Contact (form with name, email, and message fields that sends to my email via Resend API). Mobile-responsive, dark theme, deploy to Vercel.',
                    annotations: ['Specifies exact tech stack (Next.js + Tailwind)', 'Lists every page with detailed content requirements', 'Describes interactive elements (contact form with specific fields)', 'Includes deployment target and design direction']
                  }
                },
                {
                  bad: {
                    text: 'My app is broken. Fix it.',
                    annotations: ['No error message provided', 'No description of what "broken" means', 'No context about what the app does', 'AI cannot reproduce or diagnose the issue']
                  },
                  good: {
                    text: 'I\'m getting a "TypeError: Cannot read property \'map\' of undefined" on line 45 of src/components/UserList.jsx. The error happens when the page first loads. I\'m fetching users from /api/users using useEffect and storing them in state with useState([]). The API returns { data: [...users] } but I\'m trying to map over response.users instead of response.data. Using React 18 + Next.js 14.',
                    annotations: ['Exact error message with file and line number', 'Describes when the error occurs (on first load)', 'Shows the code pattern being used (useEffect + useState)', 'Identifies the likely root cause (wrong property name)', 'Specifies framework versions for accurate solutions']
                  }
                },
                {
                  bad: {
                    text: 'Add authentication to my app.',
                    annotations: ['No auth method specified (email, social, magic link?)', 'No information about protected routes or roles', 'No tech stack context for the AI to work with', 'Could mean anything from a login form to enterprise SSO']
                  },
                  good: {
                    text: 'Add email/password authentication to my Next.js 14 app using Supabase Auth. Requirements: signup page with email and password fields (validate password min 8 chars), login page, protected dashboard route that redirects to login if not authenticated, a "Sign Out" button in the navbar, and persist the session across page refreshes. Use the Supabase client library (@supabase/supabase-js). My Supabase project URL and anon key are already in .env.local.',
                    annotations: ['Specifies auth method (email/password) and provider (Supabase)', 'Lists every UI element needed (signup, login, sign out button)', 'Defines the security requirement (protected route with redirect)', 'Mentions session persistence requirement', 'References existing configuration (.env.local)']
                  }
                }
              ]
            }
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is "few-shot prompting"?',
              options: ['Sending multiple small prompts instead of one large one', 'Providing examples of ideal input/output pairs in your prompt so the AI understands the pattern you want', 'Using a low temperature setting', 'Limiting the AI to a few sentences of response'],
              correct: 1,
              explanation: 'Few-shot prompting means including examples in your prompt: "Here are 2 examples of what I want: [example 1], [example 2]. Now do the same for: [your input]." The AI learns the pattern from examples and replicates it.',
            },
            {
              question: 'Why does "think step by step" improve AI responses for complex tasks?',
              options: ['It makes the AI respond slower, which is more accurate', 'Each reasoning step the AI generates creates context that informs subsequent steps, building better intermediate reasoning', 'It activates a special reasoning mode in the model', 'It doesn\'t actually help \u2014 it\'s a myth'],
              correct: 1,
              explanation: 'LLMs generate text sequentially. When the model "thinks out loud," each step it writes becomes part of its context for the next step. This chain of reasoning helps it reach more accurate conclusions than jumping directly to an answer.',
            },
            {
              question: 'Which of these is the BEST prompt for getting useful code help?',
              options: ['My code is broken, fix it', 'I\'m getting a TypeError: Cannot read property "map" of undefined on line 42 of UserList.jsx. Here\'s the component code: [code]. I expect it to render a list of users from the API. The API returns data correctly (verified in console). Using React 18 + TypeScript.', 'Write better code for me', 'Help with JavaScript error'],
              correct: 1,
              explanation: 'The best prompt includes: the specific error, where it occurs, the relevant code, expected vs actual behavior, and the tech stack. This gives the AI everything it needs to diagnose and solve the problem accurately.',
            },
          ],
        },
        takeaway: 'Prompt engineering is clear communication: be specific, provide context, give examples, request step-by-step reasoning, and define the output format \u2014 these five principles make any AI model dramatically more useful.',
      },
      {
        id: '4.10',
        title: 'AI Integration Patterns for Apps',
        estimatedMinutes: 15,
        hook: 'You\'ve decided your app needs AI. But how do you actually integrate it? "Add AI" is like saying "add a kitchen" \u2014 there are fundamentally different ways to do it, and each is suited to different needs. This lesson covers the five proven integration patterns that cover 95% of AI features in production apps today.',
        analogy: {
          front: 'Think of five ways a restaurant can use a chef. A chat interface is an open kitchen where diners talk directly to the chef. Structured output is a meal prep service \u2014 precise portions, labeled containers, zero improvisation. RAG Q&A is a chef with a recipe book. Agent with tools is a personal chef who shops, cooks, and cleans. Content pipeline is a factory kitchen producing meals at scale.',
          back: 'Chat Interface = conversational AI (ChatGPT-style). Structured Output = AI that returns JSON/data, not prose. RAG Q&A = AI grounded in your documents. Agent with Tools = AI that takes actions. Content Pipeline = AI processing content in batch. Each pattern has its own complexity, cost, and ideal use case.',
        },
        content: [
          {
            type: 'text',
            body: 'Pattern 1: Chat Interface. The most recognizable AI pattern \u2014 a conversational interface where users type messages and get responses. Think ChatGPT, Claude, or customer support bots. The key technical considerations are streaming (mandatory for UX), conversation history management (context window limits), and system prompts that define the assistant\'s personality and boundaries. Best for: customer support, coaching/tutoring, creative collaboration, technical Q&A. Complexity: Medium. Real examples: Intercom Fin, Jasper Chat, Claude.',
          },
          {
            type: 'text',
            body: 'Pattern 2: Structured Output. Instead of generating prose, AI returns structured data (JSON, categories, scores). This is the workhorse of AI features that aren\'t chatbots. Examples: sentiment analysis (returns positive/negative/neutral), content classification (returns category labels), data extraction (pulls structured fields from unstructured text). The key is using system prompts and JSON mode to force consistent output formats. Best for: automation, classification, data processing, form auto-fill. Complexity: Low-Medium. Real examples: email categorization, lead scoring, receipt scanning.',
          },
          {
            type: 'text',
            body: 'Pattern 3: RAG Q&A. AI answers questions using your private data (covered in depth in Lesson 4.6). The user asks a question, your system retrieves relevant documents, and the AI generates an answer grounded in those documents. Best for: knowledge bases, internal documentation, legal/medical reference, product support. Complexity: High (requires embedding pipeline and vector database). Real examples: Notion AI, Glean, custom support bots.',
          },
          {
            type: 'text',
            body: 'Pattern 4: Agent with Tools. AI that can take actions \u2014 not just generate text (covered in depth in Lesson 4.8). The AI decides which tools to use based on user intent: search databases, call APIs, execute code, send notifications. Best for: complex workflows, task automation, developer tools, multi-step processes. Complexity: Very High. Real examples: Claude Code, Cursor, Devin, AI SDRs (sales development reps).',
          },
          {
            type: 'text',
            body: 'Pattern 5: Content Pipeline. AI processes content in bulk, usually without real-time user interaction. Think scheduled batch jobs: summarize all new support tickets nightly, generate product descriptions for 1,000 SKUs, translate documentation into 12 languages. The key optimization is batching and parallel processing to minimize cost and maximize throughput. Best for: content generation at scale, translation, summarization, data enrichment. Complexity: Medium. Real examples: marketing copy generation, automated report creation, SEO content.',
          },
          {
            type: 'callout',
            body: 'AI SDKs simplify integration dramatically. The Vercel AI SDK provides a unified TypeScript interface for streaming, tool calling, and structured output across OpenAI, Anthropic, Google, and open-source models \u2014 switch providers by changing one line. LangChain and LlamaIndex are Python frameworks that handle RAG pipelines, agent orchestration, and memory management. These tools save weeks of boilerplate and handle edge cases (retry logic, token counting, rate limiting) that trip up custom implementations.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each product description to the AI integration pattern it uses.',
              pairs: [
                { left: 'A chatbot that helps customers track orders and get refund status', right: 'Agent with Tools' },
                { left: 'An app that scans receipts and extracts merchant, amount, and date into a spreadsheet', right: 'Structured Output' },
                { left: 'A tool that lets employees search company HR policies using natural language', right: 'RAG Q&A' },
                { left: 'A marketing platform that generates 500 product descriptions overnight', right: 'Content Pipeline' },
                { left: 'A coding assistant where developers describe features and get implementation suggestions', right: 'Chat Interface' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which AI integration pattern would you use for an app that automatically categorizes incoming emails as "urgent," "normal," or "spam"?',
              options: ['Chat Interface', 'Structured Output', 'RAG Q&A', 'Agent with Tools'],
              correct: 1,
              explanation: 'Email categorization needs structured, consistent output (a category label), not a conversation or document search. Structured Output forces the AI to return a classification (urgent/normal/spam) rather than prose.',
            },
            {
              question: 'What makes the "Agent with Tools" pattern the most complex?',
              options: ['It requires the most expensive AI models', 'It involves an iterative loop of planning, tool execution, result observation, and decision-making \u2014 with guardrails to prevent runaway costs or actions', 'It only works with one specific model provider', 'It requires a custom-trained model'],
              correct: 1,
              explanation: 'Agents are complex because they\'re autonomous: they plan, execute, observe, and iterate. Each step requires error handling, cost controls, logging, and often human-in-the-loop approval for critical actions. The iterative nature compounds complexity.',
            },
            {
              question: 'When would you choose a Content Pipeline over a Chat Interface?',
              options: ['When you need real-time user interaction', 'When you need to process large volumes of content in batch without real-time user interaction', 'When you need the cheapest possible solution', 'When your content is private and sensitive'],
              correct: 1,
              explanation: 'Content Pipelines are for batch processing: generate 500 product descriptions, translate 1,000 pages, summarize a month of support tickets. No real-time interaction needed \u2014 the processing runs in the background, often on a schedule.',
            },
          ],
        },
        takeaway: 'The five AI integration patterns \u2014 Chat Interface, Structured Output, RAG Q&A, Agent with Tools, and Content Pipeline \u2014 cover virtually every AI feature in production apps; pick the pattern that matches your use case before writing any code.',
      },
      {
        id: '4.11',
        title: 'AI Cost Management \u2014 Don\'t Go Broke',
        estimatedMinutes: 15,
        hook: 'A startup launched an AI feature with GPT-4 and burned through $47,000 in API costs in one month \u2014 they expected $3,000. AI costs can spiral out of control faster than any other infrastructure expense because they scale with usage AND complexity. This lesson teaches you the strategies that separate sustainable AI products from financial disasters.',
        analogy: {
          front: 'Running AI without cost management is like leaving every light, appliance, and faucet running in your house 24/7. Sure, everything works. But the utility bill will destroy you. Cost management is being intentional about what gets turned on, when, and at what power setting.',
          back: 'Lights on 24/7 = sending every request to the most expensive model. Cost management = model routing (cheap model for simple tasks), caching (don\'t regenerate the same answer), prompt compression (fewer tokens = lower cost), and rate limiting (hard caps on spending).',
        },
        content: [
          {
            type: 'text',
            body: 'AI costs are driven by four factors: model choice (100x price difference between cheapest and most expensive), token count (both input and output), request volume (scales linearly with users), and feature design (some patterns are inherently more expensive). The good news: with the right strategies, you can often reduce costs by 80-95% without noticeably impacting quality. The key is being intentional about which model handles which task, how much context you include, and whether you cache responses.',
          },
          {
            type: 'cost-calculator',
            config: {
              sliders: [
                { name: 'Cost per 1M Tokens ($)', min: 0.15, max: 60, default: 3, step: 0.15 },
                { name: 'Avg Tokens per Request', min: 200, max: 2000, default: 800, step: 100 },
                { name: 'Daily Active Users', min: 100, max: 100000, default: 5000, step: 100 },
                { name: 'Requests per User per Day', min: 1, max: 50, default: 5, step: 1 },
              ],
              formula: 'Monthly AI Cost: $[((Cost per 1M Tokens ($) * Avg Tokens per Request * Daily Active Users * Requests per User per Day * 30) / 1000000).toFixed(2)]. Switch from a $15/1M model to a $0.15/1M model for simple tasks and costs drop 100x.',
            },
          },
          {
            type: 'text',
            body: 'Strategy 1: Model Routing. Use cheap models (GPT-4o-mini at $0.15/1M tokens) for simple tasks like classification, extraction, and short answers. Reserve expensive models (Claude Opus at $15/1M tokens) for complex reasoning that actually benefits from the capability. A simple classifier can route requests: "Is this question simple or complex?" and direct accordingly. This single strategy often cuts costs by 60-80%.',
          },
          {
            type: 'text',
            body: 'Strategy 2: Response Caching. If 100 users ask "What are your business hours?" you don\'t need 100 separate AI calls. Cache common responses and serve them instantly. Semantic caching goes further \u2014 it recognizes that "When are you open?" and "What time do you close?" are the same question and serves the cached answer for both. Strategy 3: Prompt Compression. Trim unnecessary context, summarize conversation history instead of sending it all, and use concise system prompts. Every token counts. Strategy 4: Rate Limiting and Budget Caps. Set hard limits on API spending per user, per feature, and per month. Alert when thresholds are hit. Never run AI features without a kill switch.',
          },
          {
            type: 'callout',
            body: 'The tiered model approach in practice: a support bot receives a user message. Step 1: A tiny classifier model ($0.15/1M tokens) determines if the question is simple FAQ, needs document lookup, or requires complex reasoning. Step 2: Simple FAQs go to cache or GPT-4o-mini. Document lookups use RAG with a mid-tier model. Complex reasoning escalates to Claude Sonnet. Result: 80% of requests are handled by the cheapest tier.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the single most effective strategy for reducing AI API costs?',
              options: ['Reducing response quality', 'Model routing \u2014 using cheap models for simple tasks and expensive models only for complex tasks', 'Asking users to type shorter messages', 'Switching to a single open-source model for everything'],
              correct: 1,
              explanation: 'Model routing provides the biggest cost savings because the price difference between model tiers is 10-100x. Most requests (simple questions, classification, extraction) don\'t need flagship model capabilities, so routing them to cheap models slashes costs dramatically.',
            },
            {
              question: 'Why is response caching especially effective for AI costs?',
              options: ['Because caching makes the AI smarter', 'Because many users ask the same or semantically similar questions, and serving a cached response costs virtually nothing compared to a new API call', 'Because caching reduces the model\'s context window', 'Caching only works for image generation, not text'],
              correct: 1,
              explanation: 'In many applications, 20-40% of questions are the same or very similar. Each cached response you serve avoids an API call entirely. Semantic caching extends this further by recognizing that different phrasings of the same question can share a cached answer.',
            },
          ],
        },
        takeaway: 'AI costs scale with usage and model choice \u2014 control them with model routing (cheap for simple, expensive for complex), response caching, prompt compression, and hard budget caps; these strategies can cut costs by 80-95%.',
      },
      {
        id: '4.12',
        title: 'Design Your AI Feature (Capstone)',
        estimatedMinutes: 20,
        hook: 'You\'ve learned how AI models work, how tokens and costs function, how to choose models, how RAG and agents operate, and how to manage costs. Now it\'s time to put it all together. In this capstone lesson, you\'ll design a complete AI feature from scratch \u2014 picking the right model, integration pattern, data strategy, and cost tier. This is the skill that turns AI knowledge into AI products.',
        analogy: {
          front: 'Building an AI feature is like designing a new dish for a restaurant menu. You need to pick the right chef (model), the cooking technique (integration pattern), the ingredients source (data strategy), and the price point (cost tier). Getting any one of these wrong means the dish either tastes bad, takes too long, costs too much, or all three.',
          back: 'Chef = AI model (quality vs cost). Cooking technique = integration pattern (chat, structured output, RAG, agent, pipeline). Ingredient source = data strategy (no external data, RAG, APIs, user history). Price point = cost tier (free through $200+/month). The best features nail all four.',
        },
        content: [
          {
            type: 'text',
            body: 'Designing an AI feature starts with a clear answer to one question: What specific problem does this feature solve for the user? Not "add AI to our app" but "help users find answers in our 500-page documentation instantly" or "automatically categorize and route incoming support tickets." The problem statement determines everything else: which integration pattern to use, how much model capability you need, what data sources are required, and what the acceptable cost per interaction is.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'AI Model',
                  options: [
                    { name: 'GPT-4o', description: 'OpenAI\'s flagship. Excellent at reasoning, coding, and analysis. $5-15/1M tokens. Best for: complex tasks where quality is critical.' },
                    { name: 'Claude Sonnet', description: 'Anthropic\'s balanced model. Strong at coding, analysis, and nuanced writing. $3-15/1M tokens. Best for: production workhorses needing quality and speed.' },
                    { name: 'Gemini Flash', description: 'Google\'s fast, cheap model. Very long context window (1M tokens). $0.15-0.60/1M tokens. Best for: high-volume, long-context tasks.' },
                    { name: 'Llama 3', description: 'Meta\'s open-source model. Self-hostable for full data privacy. Cost: GPU hosting ($1-10/hour). Best for: data-sensitive applications.' },
                    { name: 'GPT-4o-mini', description: 'OpenAI\'s small model. Incredibly cheap at $0.15/1M tokens. Best for: classification, extraction, simple Q&A, and high-volume routing.' },
                  ],
                },
                {
                  name: 'Integration Pattern',
                  options: [
                    { name: 'Chat Interface', description: 'Conversational AI with message history. Requires streaming and context management. Best for: customer support, tutoring, creative collaboration.' },
                    { name: 'Structured Output', description: 'AI returns JSON/data, not prose. Best for: classification, data extraction, form automation, and any feature feeding into other systems.' },
                    { name: 'RAG (Retrieval-Augmented Generation)', description: 'AI answers from your documents. Requires embedding pipeline and vector database. Best for: knowledge bases, documentation search, legal/medical reference.' },
                    { name: 'Agent with Tools', description: 'AI that plans and executes multi-step tasks autonomously. Requires tool definitions and guardrails. Best for: complex workflows, developer tools, task automation.' },
                    { name: 'Content Pipeline', description: 'Batch AI processing without real-time interaction. Best for: bulk content generation, translation, summarization, and data enrichment.' },
                  ],
                },
                {
                  name: 'Data Strategy',
                  options: [
                    { name: 'No External Data', description: 'Rely entirely on the model\'s training knowledge. Simplest to implement. Risk: hallucination on specific or recent topics. Best for: creative tasks, general Q&A.' },
                    { name: 'RAG with Documents', description: 'Embed and retrieve from your own documents. Requires vector database setup. Best for: company knowledge bases, product documentation, policy lookups.' },
                    { name: 'Real-time API Calls', description: 'Function calling to fetch live data (weather, stock prices, order status). Best for: features that need current information.' },
                    { name: 'User History / Personalization', description: 'Use the user\'s past interactions, preferences, and data to personalize responses. Best for: recommendations, coaching, adaptive learning.' },
                  ],
                },
                {
                  name: 'Cost Tier',
                  options: [
                    { name: 'Free Tier Only ($0/mo)', description: 'Use free API tiers from providers (limited requests). Good for prototyping and very low-volume internal tools.' },
                    { name: 'Starter ($10-50/mo)', description: 'Covers a few thousand requests per day with mid-tier models. Suitable for MVPs and early-stage products with limited users.' },
                    { name: 'Growth ($50-200/mo)', description: 'Supports moderate traffic with model routing. Mix of cheap and premium models. Suitable for products with paying users.' },
                    { name: 'Scale ($200+/mo)', description: 'High-volume production with sophisticated model routing, caching, and multiple model tiers. Suitable for products with significant user bases.' },
                  ],
                },
              ],
            },
          },
          {
            type: 'text',
            body: 'When you build your AI feature, follow this order. First, validate the problem \u2014 make sure AI actually adds value (not everything needs AI). Second, prototype with the most powerful model available \u2014 prove the concept works before optimizing cost. Third, design the integration pattern based on the user experience you want. Fourth, implement the data strategy if the feature needs knowledge beyond the model\'s training. Fifth, optimize costs by routing to cheaper models, adding caching, and compressing prompts. Sixth, add guardrails: rate limits, content filters, fallback responses, and monitoring. Shipping an AI feature without guardrails is like deploying a web app without error handling.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The AI Feature Build Order',
              steps: [
                { label: '1. Define the Problem', detail: 'What specific user problem does this solve? Write a one-sentence description. If you can\'t, the feature isn\'t ready to build.' },
                { label: '2. Prototype with Best Model', detail: 'Use Claude Opus or GPT-4o. Prove the AI can solve the problem at all. Don\'t optimize cost yet \u2014 validate quality first.' },
                { label: '3. Design the UX Pattern', detail: 'Chat, form auto-fill, search, automation? The integration pattern determines your frontend and backend architecture.' },
                { label: '4. Build the Data Pipeline', detail: 'If RAG: set up document chunking, embedding, and vector storage. If tools: define function schemas. If no external data: craft a great system prompt.' },
                { label: '5. Optimize for Cost', detail: 'Route simple tasks to cheaper models. Add caching for common queries. Compress prompts. Set budget caps.' },
                { label: '6. Add Guardrails', detail: 'Rate limiting, content filtering, error handling, fallback responses, usage monitoring, and cost alerts. Never skip this step.' },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should you prototype with the most powerful (expensive) model first?',
              options: ['Because expensive models are the only ones that work', 'To validate that AI can solve the problem at all before optimizing cost \u2014 if the best model can\'t do it, a cheaper one definitely can\'t', 'Because prototypes don\'t incur API costs', 'To impress stakeholders with response quality'],
              correct: 1,
              explanation: 'Prototyping with the best model separates "can AI solve this problem?" from "can we afford it?" If Claude Opus can\'t produce good results, switching to a cheaper model won\'t help. But if it works well, you can then systematically downgrade to find the cheapest model that maintains acceptable quality.',
            },
            {
              question: 'A startup wants to build a feature that lets users search their company\'s internal wiki using natural language. Which combination is most appropriate?',
              options: ['Chat Interface + No External Data + GPT-4o', 'RAG + Documents + Claude Sonnet with a Growth cost tier', 'Agent with Tools + Real-time APIs + Llama 3', 'Content Pipeline + User History + GPT-4o-mini'],
              correct: 1,
              explanation: 'Searching an internal wiki is a textbook RAG use case: embed the wiki documents, retrieve relevant chunks when a user asks a question, and generate an answer grounded in those documents. Claude Sonnet provides a good quality/cost balance. A Growth tier budget supports moderate internal usage.',
            },
            {
              question: 'What is the FIRST step when designing an AI feature?',
              options: ['Choose the AI model', 'Set up the vector database', 'Define the specific problem the feature solves for users', 'Estimate the API cost budget'],
              correct: 2,
              explanation: 'Everything flows from the problem statement. The model, pattern, data strategy, and cost tier are all determined by what you\'re trying to solve. "Add AI to our app" is not a problem statement. "Help users find answers in our 500-page documentation instantly" is.',
            },
            {
              question: 'Which AI integration pattern would you use for an app that generates weekly performance reports from database metrics?',
              options: ['Chat Interface', 'Agent with Tools', 'Content Pipeline', 'RAG Q&A'],
              correct: 2,
              explanation: 'Generating scheduled reports from data is a batch processing task without real-time user interaction. A Content Pipeline runs on schedule, pulls database metrics, generates the report using AI, and delivers it \u2014 no chat interface or document retrieval needed.',
            },
            {
              question: 'Why should you never skip adding guardrails to an AI feature?',
              options: ['Guardrails make the AI smarter', 'Without rate limits, content filters, and cost caps, the feature can generate harmful content, rack up unlimited costs, or fail silently \u2014 affecting users and budget', 'Guardrails are required by law', 'AI models refuse to work without them'],
              correct: 1,
              explanation: 'AI features without guardrails are production liabilities. Without rate limits, one user could generate thousands of API calls. Without content filters, the AI could produce inappropriate responses. Without cost caps, a traffic spike could generate a massive bill. Guardrails are as essential as error handling in any software.',
            },
          ],
        },
        takeaway: 'Designing an AI feature means choosing the right model, integration pattern, data strategy, and cost tier \u2014 start by defining the problem, prototype with the best model, then systematically optimize for cost and add guardrails before shipping.',
      },
    ],
  },
  {
    id: 5,
    title: 'The Ecosystem \u2014 Services, Tools, and Infrastructure',
    subtitle: 'Cloud, APIs, third-party services, and the tools that glue it all together',
    icon: 'Layers',
    lessons: [
      {
        id: '5.1',
        title: 'Standing on the Shoulders of Giants \u2014 The API Economy',
        estimatedMinutes: 15,
        hook: 'Here\'s a secret most people outside the tech industry don\'t know: almost no modern app builds everything from scratch. That login screen? A third-party service. The payment processing? Another company entirely. The email that confirms your purchase? Yet another specialized provider. The modern software industry runs on an API economy \u2014 thousands of specialized services that you snap together like building blocks to create a complete product. Understanding this ecosystem is the difference between spending two years building a product and spending two months.',
        analogy: {
          front: 'Think of building a product like being a general contractor building a house. You don\'t manufacture your own bricks, wire your own electricity, or forge your own pipes. You hire specialists: an electrician, a plumber, a roofer. Each one is world-class at their job. Your skill is knowing which specialists to hire and how to coordinate them into a finished house.',
          back: 'In software, third-party services are your specialists. Stripe is your payment electrician. Clerk is your security system installer. Resend is your mail carrier. Supabase is your plumber (data pipelines). Your job as a product builder is choosing the right services and wiring them together through APIs \u2014 not building each capability from scratch.',
        },
        content: [
          {
            type: 'text',
            body: 'Twenty years ago, building a web application meant writing everything yourself \u2014 authentication, payments, email, file storage, search, analytics. A team of ten engineers might spend a year just building infrastructure before the first feature was ready. Today, a single developer can assemble a production-ready application in weeks by connecting specialized third-party services through APIs. This is the API economy, and it has fundamentally changed who can build software products.',
          },
          {
            type: 'text',
            body: 'An API (Application Programming Interface) is simply a way for two pieces of software to talk to each other. When your app needs to charge a customer, it sends a structured request to Stripe\'s API. When it needs to send a welcome email, it talks to Resend\'s API. When it needs to verify a user\'s identity, it communicates with Clerk\'s API. Each of these services has teams of hundreds of engineers maintaining, securing, and improving that one specific capability. You get the benefit of all that expertise through a simple API call.',
          },
          {
            type: 'callout',
            body: 'The average modern SaaS product uses 15-25 third-party APIs. Even massive companies like Uber rely on Google Maps for routing, Twilio for SMS, Stripe for payments, and SendGrid for email. Building everything in-house is almost never the right choice \u2014 your competitive advantage is your unique product, not your homegrown email system.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each service category to the leading tool that most startups reach for first.',
              pairs: [
                { left: 'Authentication & Login', right: 'Clerk' },
                { left: 'Payments & Subscriptions', right: 'Stripe' },
                { left: 'Transactional Email', right: 'Resend' },
                { left: 'File Storage', right: 'Supabase Storage / S3' },
                { left: 'Error Tracking', right: 'Sentry' },
                { left: 'Hosting & Deployment', right: 'Vercel' },
              ],
            },
          },
          {
            type: 'text',
            body: 'The trade-off with third-party services is vendor lock-in \u2014 the more deeply you integrate a service, the harder it is to switch later. Stripe handles your entire payment flow? Migrating to a competitor means rewriting payment logic, migrating customer data, and updating every webhook. The mitigation strategy is abstraction: wrap third-party calls in your own functions so you can swap the underlying provider without changing your app\'s core logic. Not every service needs this treatment \u2014 but for critical ones like payments and auth, it\'s worth the small upfront effort.',
          },
          {
            type: 'text',
            body: 'Every third-party service has rate limits \u2014 caps on how many requests you can make per second or per day. Stripe might allow 100 requests per second. A free tier on an email API might cap you at 100 emails per day. Hitting rate limits crashes your features. Before choosing a service, check three things: the rate limits on your expected tier, the pricing structure (per-request, monthly flat, or tiered), and the reliability guarantees (uptime SLAs). A service that\'s cheap but unreliable will cost you far more in lost users than a premium one that never goes down.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'API Economy', definition: 'The ecosystem of thousands of specialized software services that communicate through APIs. Products are assembled by connecting these services rather than building every capability from scratch.' },
              { term: 'Third-party Service', definition: 'A specialized software product built by another company that you integrate into your own product via API. Examples: Stripe for payments, Clerk for auth, Resend for email.' },
              { term: 'SaaS (Software as a Service)', definition: 'Software delivered over the internet on a subscription basis. Most third-party services you integrate are SaaS products \u2014 you pay monthly and access them via API.' },
              { term: 'Integration', definition: 'The process of connecting your application to a third-party service via its API. Usually involves installing an SDK, adding API keys, and writing code to send and receive data.' },
              { term: 'Vendor Lock-in', definition: 'The difficulty of switching away from a service once you\'ve deeply integrated it. Mitigated by wrapping third-party calls in abstraction layers.' },
              { term: 'Rate Limit', definition: 'A cap on how many API requests you can make in a given time period. Exceeding it returns errors. Designed to prevent abuse and ensure fair usage across all customers.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why do most modern startups use third-party services instead of building everything from scratch?',
              options: ['Third-party services are always free', 'Each service has specialized teams maintaining that one capability, giving you enterprise-grade features without the engineering cost', 'It\'s required by law to use established providers', 'Third-party services are faster because they run on better hardware'],
              correct: 1,
              explanation: 'Third-party services employ hundreds of engineers focused on one problem \u2014 payments, auth, email. You get the benefit of all that expertise through a simple API call, which is dramatically faster and cheaper than building and maintaining it yourself.',
            },
            {
              question: 'What is vendor lock-in and how do you mitigate it?',
              options: ['A security feature that locks your data \u2014 mitigated by using open-source alternatives', 'The difficulty of switching services after deep integration \u2014 mitigated by wrapping API calls in abstraction layers', 'A pricing model that locks in rates \u2014 mitigated by annual contracts', 'A type of API rate limit \u2014 mitigated by caching responses'],
              correct: 1,
              explanation: 'Vendor lock-in means the more deeply you integrate a service, the harder it is to switch. The best mitigation is abstraction \u2014 wrap third-party calls in your own functions so you can swap providers without rewriting your entire application.',
            },
            {
              question: 'What are the three critical factors to check before choosing a third-party service?',
              options: ['Logo design, documentation length, and company age', 'Rate limits, pricing structure, and reliability guarantees (uptime SLAs)', 'Number of employees, office location, and founding year', 'GitHub stars, Twitter followers, and blog post frequency'],
              correct: 1,
              explanation: 'Rate limits determine if the service can handle your traffic. Pricing structure determines if you can afford it at scale. Reliability guarantees (uptime SLAs) determine if your users will have a consistent experience. These three factors directly impact your product\'s viability.',
            },
          ],
        },
        takeaway: 'Modern products are assembled from specialized third-party services connected through APIs \u2014 your job as a builder is choosing the right services and wiring them together, not reinventing every capability from scratch.',
      },
      {
        id: '5.2',
        title: 'Authentication Services \u2014 The Identity Layer',
        estimatedMinutes: 15,
        hook: 'Every app you\'ve ever used has asked you to log in. It seems simple \u2014 email, password, done. But behind that simple form is a minefield of security concerns: password hashing, session management, OAuth flows, magic links, multi-factor authentication, bot protection, and compliance with privacy laws. Building authentication from scratch is one of the most dangerous things a developer can do, because a single mistake exposes every user\'s data. That\'s why authentication services exist \u2014 they\'ve solved these problems so you don\'t have to.',
        analogy: {
          front: 'Imagine your app is a nightclub. You could hire untrained staff to check IDs at the door \u2014 but they might let in minors, accept fake IDs, or forget to check anyone at all. Or you could hire a professional security firm that\'s been doing this for years, has facial recognition, knows every fake ID trick, and has never had an incident.',
          back: 'Authentication services are professional security firms for your app. Clerk, Auth0, and Supabase Auth have teams dedicated to security, compliance, and fraud detection. They handle password hashing, session tokens, OAuth flows, and MFA \u2014 all the things that go catastrophically wrong when built by hand. You just install their SDK and add a login component.',
        },
        content: [
          {
            type: 'text',
            body: 'Authentication ("auth") answers one question: who is this user? It\'s the foundation of every personalized experience \u2014 saving preferences, protecting data, enabling payments, controlling access. The auth landscape has matured dramatically in recent years, and today\'s services handle far more than just username and password. They manage social logins (Google, GitHub, Apple), magic links (passwordless email login), multi-factor authentication (SMS or authenticator app), single sign-on for enterprise customers, and user management dashboards. Choosing the right auth service is one of the most important early decisions for your product.',
          },
          {
            type: 'text',
            body: 'Let\'s look at the leading options. Clerk is the fastest-rising auth service \u2014 it provides beautiful prebuilt UI components, handles user management, and integrates seamlessly with Next.js. Its free tier covers 10,000 monthly active users. Supabase Auth is tightly integrated with the Supabase database, making it ideal if you\'re already using Supabase for your backend \u2014 auth and data in one place. Auth0 (by Okta) is the enterprise heavyweight, with the most flexibility and the steepest learning curve. NextAuth (now Auth.js) is an open-source library rather than a hosted service \u2014 you run it yourself, giving maximum control but requiring more setup. Firebase Auth is Google\'s offering, great for mobile-first apps and rapid prototyping with the Firebase ecosystem.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What type of app are you building?',
              options: [
                {
                  label: 'A Next.js web app',
                  next: {
                    question: 'How important is a polished prebuilt login UI?',
                    options: [
                      { label: 'Very \u2014 I want drop-in components', result: 'Clerk \u2014 best prebuilt UI, excellent Next.js integration, generous free tier. You can have a full auth system running in under 30 minutes.' },
                      { label: 'I\'ll build my own UI', result: 'NextAuth (Auth.js) \u2014 open-source, self-hosted, maximum control. Ideal if you want custom login pages and don\'t mind more configuration.' },
                    ],
                  },
                },
                {
                  label: 'A full-stack app with a database',
                  next: {
                    question: 'Are you already using Supabase for your database?',
                    options: [
                      { label: 'Yes, Supabase is my backend', result: 'Supabase Auth \u2014 integrated directly with your database. Row-level security policies tie auth to data access automatically. One platform for everything.' },
                      { label: 'No, I\'m using something else', result: 'Clerk or Auth0 \u2014 both work with any backend. Clerk for simplicity, Auth0 for enterprise features like SAML SSO and advanced role management.' },
                    ],
                  },
                },
                {
                  label: 'A mobile-first or cross-platform app',
                  next: {
                    question: 'What\'s your priority?',
                    options: [
                      { label: 'Speed of development', result: 'Firebase Auth \u2014 great SDKs for iOS, Android, Flutter, and React Native. Tight integration with other Firebase services. The fastest path to a working mobile auth system.' },
                      { label: 'Enterprise security features', result: 'Auth0 \u2014 the most configurable option. Supports every OAuth provider, SAML, custom databases, and advanced security policies. Higher learning curve but maximum flexibility.' },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'callout',
            body: 'A critical concept: never store passwords yourself. Every modern auth service hashes passwords using algorithms like bcrypt or Argon2 before storing them. If your database is breached, attackers get meaningless hashes instead of actual passwords. This alone is reason enough to use an auth service \u2014 getting password storage wrong is one of the most common and devastating security failures in software.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Clerk', definition: 'A modern authentication service with prebuilt UI components and excellent Next.js integration. Free up to 10,000 monthly active users. Popular for its developer experience and speed of setup.' },
              { term: 'Supabase Auth', definition: 'Authentication built into the Supabase platform. Integrates directly with the database through row-level security. Best when you\'re already using Supabase for your backend.' },
              { term: 'Auth0', definition: 'An enterprise-grade auth platform by Okta. The most flexible and configurable option, supporting SAML, SSO, custom databases, and advanced policies. Higher complexity but maximum power.' },
              { term: 'NextAuth / Auth.js', definition: 'An open-source authentication library for Next.js. Self-hosted, giving you full control. Requires more configuration than hosted services but avoids vendor lock-in.' },
              { term: 'Social Login', definition: 'Letting users sign in with existing accounts (Google, GitHub, Apple) instead of creating a new username and password. Reduces friction and increases signup rates.' },
              { term: 'Magic Link', definition: 'A passwordless login method where users click a link sent to their email. No password to remember or forget. Popular for its simplicity and security.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should you use an authentication service instead of building auth from scratch?',
              options: ['Auth services are always free', 'Authentication involves complex security (password hashing, sessions, OAuth, MFA) where a single mistake exposes all user data', 'Building auth is illegal without a license', 'Auth services make your app load faster'],
              correct: 1,
              explanation: 'Authentication is a security-critical system where mistakes have catastrophic consequences \u2014 data breaches, leaked passwords, unauthorized access. Auth services have dedicated security teams that handle password hashing, session management, and compliance so you don\'t have to risk getting it wrong.',
            },
            {
              question: 'Which auth service would you choose for a Next.js app where you want prebuilt login components?',
              options: ['Firebase Auth \u2014 it\'s Google\'s solution', 'Auth0 \u2014 it\'s the most powerful', 'Clerk \u2014 it has the best prebuilt UI components and Next.js integration', 'Roll your own \u2014 it\'s simpler than using a service'],
              correct: 2,
              explanation: 'Clerk is specifically designed for excellent Next.js integration with beautiful prebuilt components. You can have a full auth system with social login, magic links, and user management running in under 30 minutes.',
            },
          ],
        },
        takeaway: 'Authentication services like Clerk, Supabase Auth, and Auth0 handle the complex security of user identity so you don\'t have to \u2014 choose based on your framework, existing stack, and whether you need prebuilt UI or maximum customization.',
      },
      {
        id: '5.3',
        title: 'Payments \u2014 Making Money Work',
        estimatedMinutes: 15,
        hook: 'The moment your product accepts money, everything changes. You\'re handling credit card numbers, navigating PCI compliance, managing subscriptions that renew at midnight, processing refunds, calculating taxes across jurisdictions, and dealing with failed charges on expired cards. One security flaw and you\'re liable for every stolen credit card. One billing bug and you\'re either undercharging (losing money) or overcharging (losing trust). Payment services exist because handling money is too important and too dangerous to improvise.',
        analogy: {
          front: 'Imagine opening a retail store. You could build your own cash register from spare parts, print your own receipts, create your own credit card reader, and figure out sales tax rules for every state yourself. Or you could buy a modern POS system that handles all of it \u2014 cards, taxes, receipts, refunds \u2014 and you focus on selling great products.',
          back: 'Stripe is the POS system for internet businesses. It handles credit cards, sales tax, subscriptions, invoices, refunds, and fraud detection. You never touch raw card numbers (PCI compliance handled). LemonSqueezy goes even further \u2014 it acts as your "merchant of record," handling global tax compliance entirely. You focus on building your product, not becoming a finance company.',
        },
        content: [
          {
            type: 'text',
            body: 'Stripe is the dominant payment platform for software products, and for good reason. It handles one-time payments, recurring subscriptions, invoicing, marketplace payouts, and even in-person card readers. Its API is famously well-designed, its documentation is considered the gold standard in the industry, and its ecosystem of plugins and integrations is massive. For most products, Stripe is the default choice unless you have a specific reason to use something else.',
          },
          {
            type: 'text',
            body: 'The core concept to understand is the payment flow. When a user clicks "Buy" in your app, here\'s what actually happens: your server creates a Checkout Session with Stripe, telling it what the user is buying and how much it costs. Stripe redirects the user to a hosted payment page (you never see the card number). The user enters payment details on Stripe\'s secure page. Stripe processes the charge, handles fraud checks, and redirects the user back to your app. Stripe then sends a webhook \u2014 a server-to-server notification \u2014 to your backend confirming the payment succeeded. Your backend receives the webhook and grants access to the purchased product. This is critical: never grant access based on the redirect alone, because users can manipulate URLs. Always wait for the webhook.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'User Clicks "Buy"', description: 'Your frontend sends a request to your backend with the product/plan details. No payment information touches your server yet.' },
                { label: 'Server Creates Checkout Session', description: 'Your backend calls Stripe\'s API to create a Checkout Session, specifying the price, product, and success/cancel URLs. Stripe returns a URL.' },
                { label: 'User on Stripe\'s Hosted Page', description: 'The user is redirected to Stripe\'s secure payment page. They enter card details directly on Stripe\'s servers. Your app never sees the card number (PCI compliance handled).' },
                { label: 'Stripe Processes Payment', description: 'Stripe runs fraud detection, charges the card, and handles any 3D Secure authentication required by the bank. This happens in seconds.' },
                { label: 'User Redirected Back', description: 'On success, the user is sent to your success URL. On failure, to your cancel URL. But don\'t trust this redirect for granting access \u2014 it can be faked.' },
                { label: 'Webhook Confirms Payment', description: 'Stripe sends a server-to-server webhook to your backend with cryptographic proof that the payment succeeded. THIS is when you grant access, update the database, and send the confirmation email.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Subscriptions add another layer of complexity. A subscription isn\'t a single payment \u2014 it\'s a lifecycle. Users sign up, their card is charged monthly, cards expire and need updating, payments fail and require retry logic, users upgrade or downgrade plans, and eventually users cancel. Stripe handles this entire lifecycle. You define your plans and prices in Stripe\'s dashboard, and Stripe manages billing cycles, proration (adjusting charges when users switch plans mid-cycle), dunning (retrying failed payments), and sending receipt emails. You just listen for webhooks to know when to grant or revoke access.',
          },
          {
            type: 'text',
            body: 'LemonSqueezy is a newer alternative that solves a specific pain point: tax compliance. When you sell digital products globally, you\'re legally required to collect and remit sales tax, VAT, and GST in dozens of countries. Stripe leaves this to you. LemonSqueezy acts as your "Merchant of Record" \u2014 they\'re technically the seller, handling all tax obligations worldwide. You just receive your payout. For solo builders and small teams selling digital products, this simplicity is worth LemonSqueezy\'s slightly higher fees. PayPal remains relevant for markets where credit card penetration is low, but its developer experience is significantly worse than Stripe\'s.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Payment Intent', definition: 'Stripe\'s representation of a single payment attempt. It tracks the lifecycle of a charge from creation through success or failure, including retries and authentication.' },
              { term: 'Checkout Session', definition: 'A Stripe-hosted payment page that handles card entry, fraud detection, and compliance. You create it via API and redirect users to it \u2014 the most secure way to accept payments.' },
              { term: 'Subscription', definition: 'A recurring payment arrangement where users are charged automatically at regular intervals (monthly, yearly). Includes lifecycle management: upgrades, downgrades, cancellations, and failed payment retries.' },
              { term: 'Webhook', definition: 'A server-to-server HTTP callback that Stripe sends to your backend when events occur (payment succeeded, subscription canceled, invoice paid). The only trustworthy way to confirm payment status.' },
              { term: 'Recurring Billing', definition: 'Automatically charging customers at set intervals. Requires handling card expiration, payment failures, plan changes, and proration. Stripe and LemonSqueezy automate this entirely.' },
              { term: 'Merchant of Record', definition: 'The legal entity responsible for the sale, including tax collection and compliance. LemonSqueezy acts as your Merchant of Record, handling global tax obligations so you don\'t have to.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should you grant access based on webhooks rather than the redirect URL after payment?',
              options: ['Webhooks are faster than redirects', 'Redirect URLs can be manipulated by users, but webhooks are server-to-server with cryptographic proof', 'Webhooks look better in code', 'Redirects don\'t work on mobile devices'],
              correct: 1,
              explanation: 'When Stripe redirects a user to your success URL, a technically savvy user could navigate directly to that URL without paying. Webhooks are server-to-server calls with cryptographic signatures that prove the payment actually happened. Always use webhooks as the source of truth.',
            },
            {
              question: 'What is the main advantage of LemonSqueezy over Stripe for a solo builder selling a digital product globally?',
              options: ['LemonSqueezy is free while Stripe charges fees', 'LemonSqueezy acts as Merchant of Record, handling global tax compliance automatically', 'LemonSqueezy processes payments faster', 'LemonSqueezy supports more payment methods'],
              correct: 1,
              explanation: 'LemonSqueezy\'s killer feature is acting as your Merchant of Record. They handle VAT, sales tax, and GST collection and remittance for every country. With Stripe, you\'d need to figure out tax obligations yourself or add another service like Stripe Tax. For a solo builder, LemonSqueezy\'s simplicity is worth the slightly higher fees.',
            },
          ],
        },
        takeaway: 'Stripe is the default choice for payments with its excellent API and ecosystem \u2014 always use webhooks (not redirects) to confirm payments, and consider LemonSqueezy if global tax compliance is a headache you want eliminated.',
      },
      {
        id: '5.4',
        title: 'Email, Notifications, and Communication',
        estimatedMinutes: 14,
        hook: 'Your user just signed up. They need a verification email. They bought a subscription and need a receipt. Their password reset link needs to arrive in seconds, not minutes. Their teammate mentioned them in a comment and they should get a push notification. Communication is the invisible thread that ties your product to your users \u2014 and if it breaks, users assume your product is broken. The services in this lesson handle the most under-appreciated layer of every product: keeping users informed.',
        analogy: {
          front: 'Think of your app as a hotel. Communication services are the hotel\'s concierge team. Transactional emails are the concierge confirming your reservation and sending your room key. Marketing emails are the hotel newsletter about weekend deals. Push notifications are the concierge tapping your shoulder to say your table is ready. SMS is an urgent phone call for time-sensitive alerts.',
          back: 'Different communication types need different services. Resend and Postmark specialize in transactional email (receipts, password resets) with high deliverability. SendGrid handles both transactional and marketing email at scale. OneSignal manages push notifications. Twilio handles SMS and voice. Choose based on what your product actually needs to communicate.',
        },
        content: [
          {
            type: 'text',
            body: 'The most important distinction in email is transactional vs. marketing. Transactional emails are triggered by user actions: password resets, purchase receipts, verification emails, shipping notifications. They must arrive in seconds and have near-100% deliverability. Marketing emails are promotional: newsletters, product updates, sale announcements. They\'re sent in bulk on a schedule and have lower deliverability expectations. These two types should almost always use different services (or at minimum, different sending domains) because marketing emails damage your sender reputation, and if transactional emails share that reputation, your password reset emails start landing in spam.',
          },
          {
            type: 'text',
            body: 'For transactional email, the top options are Resend and Postmark. Resend is newer and developer-friendly \u2014 it integrates with React Email, letting you build beautiful email templates using React components. Its free tier includes 3,000 emails per month. Postmark has been around longer and has the highest deliverability rates in the industry \u2014 if you absolutely cannot afford an email not arriving (think: two-factor authentication codes), Postmark is the safest bet. SendGrid (by Twilio) is the volume play, handling both transactional and marketing email at massive scale. It\'s less developer-friendly but extremely battle-tested. For marketing email specifically, tools like Mailchimp, ConvertKit, or Loops are better choices since they include audience management, automation, and unsubscribe handling.',
          },
          {
            type: 'text',
            body: 'Beyond email, modern products communicate through push notifications and SMS. Push notifications \u2014 those alerts on your phone from apps \u2014 are managed through services like OneSignal or Firebase Cloud Messaging. They\'re free to send (unlike SMS) but require user permission and can be disabled. SMS is the nuclear option: expensive (1-5 cents per message), but nearly 100% open rate. Services like Twilio handle SMS programmatically. Use SMS sparingly for high-value alerts: two-factor auth codes, critical security warnings, or time-sensitive notifications. Using SMS for marketing without explicit consent is both annoying and illegal in most jurisdictions.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each communication type to the most appropriate service for the job.',
              pairs: [
                { left: 'Password reset email (must arrive instantly)', right: 'Postmark or Resend' },
                { left: 'Weekly newsletter to 50,000 subscribers', right: 'SendGrid or Mailchimp' },
                { left: 'Two-factor authentication code via text', right: 'Twilio SMS' },
                { left: 'Mobile app alert: "Your order is ready"', right: 'OneSignal Push Notification' },
                { left: 'Beautiful HTML purchase receipt', right: 'Resend with React Email templates' },
                { left: 'Bulk promotional email with unsubscribe handling', right: 'ConvertKit or Loops' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Deliverability is the hidden metric that makes or breaks email. It\'s not enough to send an email \u2014 it needs to actually arrive in the inbox, not the spam folder. Deliverability depends on your sender reputation, email authentication (SPF, DKIM, DMARC records), content quality, and whether recipients mark you as spam. Services like Postmark and Resend maintain high sender reputation because they only allow transactional email \u2014 no spam on their infrastructure means better deliverability for everyone.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Transactional Email', definition: 'Email triggered by a user action: password resets, receipts, verification emails. Must arrive in seconds. Requires high deliverability. Should use a separate sending domain from marketing email.' },
              { term: 'Marketing Email', definition: 'Promotional email sent in bulk: newsletters, product updates, sales. Has lower deliverability expectations and requires unsubscribe links (legally mandated by CAN-SPAM and GDPR).' },
              { term: 'Push Notification', definition: 'An alert sent from a server to a user\'s device (phone or browser). Free to send, requires user permission. Managed through services like OneSignal or Firebase Cloud Messaging.' },
              { term: 'SMS API', definition: 'A programmatic interface for sending text messages. Twilio is the dominant provider. Expensive per message but has near-100% open rates. Use sparingly for high-value alerts.' },
              { term: 'Email Deliverability', definition: 'The percentage of emails that actually reach the inbox vs. landing in spam or being blocked. Affected by sender reputation, authentication records (SPF, DKIM), and content quality.' },
              { term: 'SMTP', definition: 'Simple Mail Transfer Protocol \u2014 the technical standard for sending email. Modern email services abstract SMTP behind simple APIs, but understanding it helps when debugging delivery issues.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should transactional and marketing emails use separate sending domains or services?',
              options: ['It\'s cheaper to use two services', 'Marketing emails damage sender reputation, and if transactional emails share that reputation, they start landing in spam', 'There\'s no technical reason \u2014 it\'s just a convention', 'Marketing emails are faster to send separately'],
              correct: 1,
              explanation: 'Marketing emails inevitably get some spam complaints, which lowers your sender reputation. If your transactional emails (password resets, verification codes) share that reputation, they start landing in spam too. Separating them protects the deliverability of your most critical communications.',
            },
            {
              question: 'When is SMS the right communication channel for your product?',
              options: ['Always \u2014 SMS has the highest open rates', 'For high-value, time-sensitive alerts like two-factor authentication codes and critical security warnings', 'For marketing promotions \u2014 everyone reads texts', 'Only for international users who don\'t have email'],
              correct: 1,
              explanation: 'SMS costs 1-5 cents per message and should be reserved for high-value alerts: 2FA codes, security warnings, and time-critical notifications. Using SMS for marketing without explicit consent is both costly and illegal in most jurisdictions. Push notifications are free and better for routine alerts.',
            },
          ],
        },
        takeaway: 'Separate transactional email (Resend, Postmark) from marketing email (SendGrid, Mailchimp) to protect deliverability \u2014 and use push notifications for routine alerts, reserving expensive SMS for critical, time-sensitive communications.',
      },
      {
        id: '5.5',
        title: 'File Storage \u2014 Where Uploads Live',
        estimatedMinutes: 14,
        hook: 'A user uploads a profile photo. Another attaches a PDF to a support ticket. Someone else shares a 4K video in your platform. Where do these files actually go? Not in your database \u2014 databases are designed for structured data like text, numbers, and timestamps, not binary blobs of image and video data. Files live in object storage \u2014 specialized cloud services designed to store, organize, and serve files at massive scale. Every photo on Instagram, every file on Dropbox, every video on YouTube lives in object storage. Understanding how it works is essential for any product that handles uploads.',
        analogy: {
          front: 'Think of file storage like a self-storage facility. Your house (database) is great for furniture and daily items (structured data). But when you have 500 boxes of old records, a boat, and seasonal decorations, you put them in a storage unit. Each unit has a unique number (like a file URL), you can control who has the key (permissions), and the facility handles security, climate control, and insurance.',
          back: 'Object storage is the self-storage facility for your app. Each file gets a unique URL (the unit number). Bucket policies control access (the key). CDN distribution is like having satellite locations around the world so anyone can access your files from the nearest point (no driving across town). Signed URLs are temporary visitor passes \u2014 time-limited access links that expire after a set period.',
        },
        content: [
          {
            type: 'text',
            body: 'Object storage is fundamentally different from the file system on your computer. Instead of folders and drives, you have buckets (containers) and objects (files). Each object has a unique key (its path within the bucket) and is accessed via URL. The critical advantage: object storage scales infinitely. Whether you have 100 files or 100 million, the service handles it without you managing servers, disk space, or backups. Files are automatically replicated across multiple data centers for durability \u2014 AWS S3 guarantees 99.999999999% durability, meaning you\'d statistically lose one file every 10 million years.',
          },
          {
            type: 'text',
            body: 'The leading options map to different needs. AWS S3 is the original and most powerful \u2014 every other object storage service is essentially "S3-compatible." It\'s incredibly flexible but can be complex for beginners. Supabase Storage integrates directly with Supabase Auth, so you can set file access policies based on who\'s logged in \u2014 ideal if you\'re already in the Supabase ecosystem. Cloudflare R2 is the cost disruptor \u2014 it\'s S3-compatible but charges zero egress fees (the cost of users downloading your files), which can save significant money at scale. Uploadthing is the simplest option for Next.js developers, abstracting away all the complexity into a few lines of code.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'User Selects File', description: 'The user picks a file from their device. Your frontend validates the file type and size before uploading (reject a 2GB video if your limit is 10MB).' },
                { label: 'Request Presigned URL', description: 'Your frontend asks your backend for a "presigned URL" \u2014 a temporary, authenticated upload link. This lets the user upload directly to storage without the file passing through your server (saving bandwidth and speed).' },
                { label: 'Direct Upload to Storage', description: 'The file uploads directly from the user\'s browser to the storage bucket using the presigned URL. Your server never handles the raw file data.' },
                { label: 'Processing (Optional)', description: 'A serverless function triggers automatically: resizing images to multiple sizes (thumbnail, medium, full), converting video formats, scanning for malware, or extracting metadata.' },
                { label: 'CDN Distribution', description: 'The processed file is distributed to CDN edge servers worldwide. A user in Tokyo gets the file from a Japanese server, not from your US-based storage bucket. Load times drop from seconds to milliseconds.' },
                { label: 'Served to Users', description: 'Users access the file via a CDN URL. For private files, you generate signed URLs that expire after a set time (e.g., 1 hour), preventing unauthorized sharing of direct links.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'The presigned URL pattern is a game-changer for file uploads. Instead of uploading through your server (which costs bandwidth and creates a bottleneck), users upload directly to storage. Your server just generates a temporary, authenticated URL. This is how every major platform handles uploads \u2014 it\'s faster for users, cheaper for you, and more scalable.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Object Storage', definition: 'A storage architecture that manages data as "objects" (files + metadata) in flat "buckets" rather than hierarchical folders. Scales infinitely and stores files across multiple data centers for durability.' },
              { term: 'Bucket', definition: 'A container in object storage that holds files. Like a top-level folder. You set permissions, lifecycle rules, and access policies at the bucket level.' },
              { term: 'Signed URL', definition: 'A temporary, time-limited URL that grants access to a private file. Expires after a set period (e.g., 1 hour). Prevents unauthorized long-term access to sensitive files.' },
              { term: 'CDN (Content Delivery Network)', definition: 'A global network of servers that cache and serve your files from the location nearest to each user. Dramatically reduces load times for images, videos, and static assets.' },
              { term: 'Presigned Upload', definition: 'A pattern where your server generates a temporary authenticated URL, and the user uploads directly to storage without the file passing through your server. Faster, cheaper, and more scalable.' },
              { term: 'Egress', definition: 'The cost of data leaving a storage service (downloads). AWS S3 charges for egress; Cloudflare R2 does not. At scale, egress costs can exceed storage costs significantly.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should files upload directly to storage instead of passing through your server?',
              options: ['It\'s more secure because your server doesn\'t touch the files', 'Direct upload is faster for users, cheaper for you (no server bandwidth costs), and more scalable', 'Servers can\'t handle file uploads at all', 'It\'s required by law for files larger than 1MB'],
              correct: 1,
              explanation: 'Direct upload via presigned URLs means the file goes straight from the user\'s browser to storage. Your server just generates the temporary URL. This saves your server\'s bandwidth, eliminates a bottleneck, reduces costs, and is faster for users since they\'re uploading to the nearest storage node.',
            },
            {
              question: 'What is the main cost advantage of Cloudflare R2 over AWS S3?',
              options: ['R2 has more storage capacity', 'R2 charges zero egress fees \u2014 no cost when users download files', 'R2 is faster at uploading', 'R2 doesn\'t require authentication'],
              correct: 1,
              explanation: 'Egress fees (the cost of users downloading your files) are often the most expensive part of object storage at scale. AWS S3 charges for every byte downloaded. Cloudflare R2 charges zero egress fees while remaining S3-compatible, which can save significant money for products serving lots of files.',
            },
          ],
        },
        takeaway: 'Object storage (S3, Supabase Storage, Cloudflare R2) handles file uploads at any scale \u2014 use presigned URLs for direct browser-to-storage uploads, CDN distribution for fast delivery, and signed URLs for private file access.',
      },
      {
        id: '5.6',
        title: 'Hosting & Deployment \u2014 Getting Your App on the Internet',
        estimatedMinutes: 15,
        hook: 'You\'ve built your app on your laptop. It works perfectly on localhost:3000. Now what? "Hosting" is the process of putting your app on a server connected to the internet so anyone in the world can access it by typing a URL. The hosting landscape ranges from drag-and-drop simplicity to managing entire server clusters. The right choice depends on what you\'re deploying, how much traffic you expect, and how much infrastructure you want to manage. Picking the wrong host is like renting a warehouse for a lemonade stand \u2014 or running a warehouse business from your garage.',
        analogy: {
          front: 'Hosting is like choosing a place to sell your food. A farmer\'s market stall (static hosting) is cheap and simple for baked goods. A food truck (managed platform) gives you mobility and moderate capacity. A restaurant (cloud server) gives you full control but requires managing staff, inventory, and maintenance. A franchise chain (enterprise cloud) is for massive scale.',
          back: 'Static hosting (Netlify) is cheap and fast for simple websites. Managed platforms (Vercel, Railway) handle servers, scaling, and deployment \u2014 you just push code. Cloud servers (AWS EC2, DigitalOcean) give full control but you manage everything. Enterprise cloud (AWS/GCP/Azure) is for massive scale with dedicated infrastructure teams. Most products start with a managed platform and only "graduate" when they need to.',
        },
        content: [
          {
            type: 'text',
            body: 'The modern hosting spectrum has four tiers. Static hosting (Netlify, GitHub Pages, Cloudflare Pages) is for sites with no server-side logic \u2014 just HTML, CSS, and JavaScript. It\'s essentially free, incredibly fast (served from CDN), and nearly unhackable since there\'s no server to attack. Managed platforms (Vercel, Railway, Render, Fly.io) handle server management, auto-scaling, and deployment pipelines. You push code; they handle everything else. Cloud infrastructure (AWS, GCP, Azure) gives you raw servers, databases, networking, and 200+ services to configure. Maximum power, maximum complexity. The right tier depends on your product, not your ambition.',
          },
          {
            type: 'text',
            body: 'For most product builders reading this, the choice is straightforward. If you\'re building with Next.js, Vercel is the obvious choice \u2014 they created Next.js, and their platform is optimized for it. Every git push auto-deploys. Every pull request gets a preview URL. Edge functions run your server code globally. The free tier is generous for side projects. If you need a backend (Python, Node.js, Go), Railway is the easiest path \u2014 connect your GitHub repo, and it detects and deploys your application with zero configuration. Render is similar, with a focus on simplicity and a generous free tier. Fly.io is for when you need your servers close to your users globally \u2014 it deploys containers to edge locations worldwide.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What are you deploying?',
              options: [
                {
                  label: 'A Next.js or React app',
                  next: {
                    question: 'Does it have server-side features (API routes, SSR)?',
                    options: [
                      { label: 'Yes \u2014 API routes, SSR, or server actions', result: 'Vercel \u2014 built by the creators of Next.js. Best-in-class support for server-side rendering, edge functions, and API routes. Auto-deploys from GitHub. Free tier is generous.' },
                      { label: 'No \u2014 it\'s a static React app (client-side only)', result: 'Netlify or Cloudflare Pages \u2014 static hosting is cheaper and faster for client-only apps. Free tiers are extremely generous. CDN delivery makes it blazing fast globally.' },
                    ],
                  },
                },
                {
                  label: 'A backend API or server',
                  next: {
                    question: 'How much infrastructure do you want to manage?',
                    options: [
                      { label: 'None \u2014 just deploy my code', result: 'Railway \u2014 connect GitHub, auto-detect your app, deploy in minutes. Handles databases, environment variables, and scaling. The easiest backend hosting available.' },
                      { label: 'Some \u2014 I want more control', result: 'Render or Fly.io \u2014 Render offers a Heroku-like experience with more flexibility. Fly.io deploys containers to edge locations globally. Both give you more control than Railway with good developer experience.' },
                    ],
                  },
                },
                {
                  label: 'A complex multi-service architecture',
                  next: {
                    question: 'What\'s your team size?',
                    options: [
                      { label: 'Solo or small team (1-5 people)', result: 'Start with Railway or Render for simplicity. You can always migrate to AWS/GCP later. Premature infrastructure complexity kills more products than scaling limitations.' },
                      { label: 'Larger team with DevOps experience', result: 'AWS, GCP, or Azure \u2014 full cloud infrastructure with maximum flexibility. Use services like ECS (containers), Lambda (serverless), RDS (databases). Requires dedicated infrastructure knowledge.' },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'callout',
            body: 'The single most powerful feature of modern hosting is continuous deployment from GitHub. You push code to your main branch, and the hosting platform automatically builds, tests, and deploys your application within minutes. No FTP uploads, no manual server restarts, no SSH sessions. Pull request preview deployments take this further \u2014 every PR gets its own live URL that your team can review before merging. This workflow is free on every major platform.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Continuous Deployment', definition: 'Automatically building, testing, and deploying your app every time you push code to your main branch. No manual steps. Every major hosting platform supports this via GitHub integration.' },
              { term: 'Preview Deployment', definition: 'A temporary live deployment created for every pull request. Your team can click a link to see the exact changes in a real environment before merging code. Free on Vercel and Netlify.' },
              { term: 'Edge Network', definition: 'A global network of servers that runs your code close to your users. Instead of all requests going to one server in Virginia, they\'re handled by the nearest server in 40+ locations worldwide.' },
              { term: 'Custom Domain', definition: 'Using your own domain name (yourapp.com) instead of a platform subdomain (yourapp.vercel.app). Involves configuring DNS records to point to your hosting platform.' },
              { term: 'SSL Certificate', definition: 'Encryption that enables HTTPS (the lock icon in browsers). Every modern hosting platform provides free SSL certificates via Let\'s Encrypt. Without SSL, browsers show "Not Secure" warnings.' },
              { term: 'Build Pipeline', definition: 'The automated sequence of steps that transforms your source code into a deployable application: install dependencies, compile code, run tests, optimize assets, and deploy.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'You\'re a solo builder deploying a Next.js app with API routes. Which platform is the most natural fit?',
              options: ['AWS EC2 \u2014 maximum control and flexibility', 'Vercel \u2014 they created Next.js and optimize for it', 'GitHub Pages \u2014 it\'s free', 'Heroku \u2014 it\'s the classic choice'],
              correct: 1,
              explanation: 'Vercel literally created Next.js and their platform is purpose-built for it. Server-side rendering, API routes, edge functions, and preview deployments all work out of the box. For a solo builder, the developer experience and free tier make it the obvious choice.',
            },
            {
              question: 'What is a preview deployment and why is it valuable?',
              options: ['A deployment to a staging server that only your team can access', 'A temporary live deployment created for every pull request, letting your team review changes in a real environment before merging', 'A local development server that simulates production', 'A deployment that only shows a preview of the homepage'],
              correct: 1,
              explanation: 'Preview deployments automatically create a live URL for every pull request. Instead of reviewing code abstractly, your team can click a link and interact with the actual changes in a real environment. This catches bugs that code review alone would miss.',
            },
          ],
        },
        takeaway: 'Start with managed platforms (Vercel for Next.js, Railway for backends) that offer continuous deployment from GitHub \u2014 you can always graduate to AWS/GCP later, but premature infrastructure complexity kills more products than scaling limitations.',
      },
      {
        id: '5.7',
        title: 'Search \u2014 Finding Needles in Haystacks',
        estimatedMinutes: 14,
        hook: 'You type "blue running shoes size 10" into Amazon and get relevant results in 200 milliseconds. You search "meeting notes from last Tuesday" in Notion and it finds the right document from thousands. You ask ChatGPT a question and it retrieves relevant context from millions of documents. Search seems simple from the outside, but it\'s one of the hardest problems in software. There are three fundamentally different approaches, and choosing the wrong one means your users can\'t find what they\'re looking for \u2014 which is effectively the same as your product not having the content at all.',
        analogy: {
          front: 'Imagine three ways to find a book in a library. Method 1 (database search): flip through every book checking if the title contains your exact words. Method 2 (full-text search): use the card catalog, which has indexed every word in every book and returns results ranked by relevance. Method 3 (semantic search): ask a librarian who understands what you mean, even if you can\'t remember the exact title.',
          back: 'Database search (SQL LIKE) scans rows sequentially \u2014 slow and only matches exact words. Full-text search (Algolia, Meilisearch) pre-indexes content and returns ranked, typo-tolerant results in milliseconds. Semantic search (vector databases) understands meaning \u2014 searching "how to fix a leaky faucet" finds "plumbing repair guide" even though they share no words. Each level is more powerful and more complex.',
        },
        content: [
          {
            type: 'text',
            body: 'Database search is where most products start: a SQL query with WHERE title LIKE "%search term%". This scans every row, checking if the text contains the exact characters you typed. It\'s simple, requires no additional services, and works fine for small datasets (under 10,000 records). But it falls apart quickly: it can\'t handle typos ("runnng shoes" returns nothing), it can\'t rank results by relevance, it doesn\'t understand synonyms ("sneakers" won\'t match "shoes"), and it gets slower as your data grows. For anything user-facing beyond a simple admin lookup, you need something better.',
          },
          {
            type: 'text',
            body: 'Full-text search is the workhorse of modern applications. Services like Algolia, Meilisearch, Typesense, and Elasticsearch build a search index \u2014 a data structure optimized for finding words across millions of documents in milliseconds. They handle typo tolerance (finding "running" when you type "runnng"), synonym matching, faceted search (filtering by category, price range, brand), and relevance ranking. Algolia is the premium option: fastest results, best relevance, but expensive at scale. Meilisearch is the open-source alternative: self-hostable, excellent developer experience, and free. Typesense is similar to Meilisearch with some performance advantages. Elasticsearch is the enterprise heavyweight: the most powerful but the most complex to operate.',
          },
          {
            type: 'text',
            body: 'Semantic search is the newest frontier, powered by AI embeddings. Instead of matching keywords, it understands the meaning of your query. You search "affordable places to stay in Paris" and it returns results about "budget hotels in the French capital" \u2014 even though the words are completely different. This works by converting text into vectors (arrays of numbers that represent meaning) and storing them in vector databases like Pinecone, Weaviate, or Qdrant. Semantic search is essential for AI products that need to retrieve relevant documents (this is the "R" in RAG \u2014 Retrieval-Augmented Generation). For traditional product search (e-commerce, documentation), full-text search is still the better choice because it\'s faster, more predictable, and easier to tune.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each search scenario to the most appropriate search approach.',
              pairs: [
                { left: 'Admin panel filtering 500 users by name', right: 'Database search (SQL LIKE)' },
                { left: 'E-commerce product search with typo tolerance and filters', right: 'Full-text search (Algolia / Meilisearch)' },
                { left: 'AI chatbot finding relevant docs to answer questions', right: 'Semantic search (Vector database)' },
                { left: 'Documentation site with search-as-you-type', right: 'Full-text search (Algolia / Typesense)' },
                { left: 'Customer support finding similar past tickets', right: 'Semantic search (Pinecone / Weaviate)' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Full-text Search', definition: 'A search approach that pre-indexes every word in your content, enabling instant, typo-tolerant, relevance-ranked results across millions of documents. Algolia, Meilisearch, and Elasticsearch are leading implementations.' },
              { term: 'Semantic Search', definition: 'AI-powered search that understands meaning, not just keywords. Converts text into vectors (numerical representations) to find conceptually similar content even when wording differs completely.' },
              { term: 'Search Index', definition: 'A pre-computed data structure optimized for fast text lookup. Like a book\'s index but for your entire dataset. Must be kept in sync with your primary database.' },
              { term: 'Relevance Ranking', definition: 'Ordering search results by how well they match the query. Factors include word frequency, field importance (title matches rank higher than body matches), and custom business rules.' },
              { term: 'Fuzzy Search', definition: 'Search that tolerates typos and misspellings. "Runnng" still finds "Running." Measured by edit distance \u2014 the number of character changes needed to match.' },
              { term: 'Faceted Search', definition: 'Filtering search results by categories or attributes (brand, price range, color, size). The left sidebar on any e-commerce site is faceted search. Full-text search services handle this natively.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'When should you graduate from database search (SQL LIKE) to a full-text search service?',
              options: ['Only when you have over 1 million records', 'When you need typo tolerance, relevance ranking, or fast search across user-facing content', 'Never \u2014 database search is always sufficient', 'Only when using a NoSQL database'],
              correct: 1,
              explanation: 'Database search breaks down when users expect a modern search experience: typo tolerance, instant results, relevance ranking, and filtering. If your search is user-facing (not just an admin tool), full-text search services provide the experience users expect from every modern application.',
            },
            {
              question: 'What is the key difference between full-text search and semantic search?',
              options: ['Full-text search is faster and semantic search is slower', 'Full-text search matches keywords while semantic search understands meaning \u2014 finding conceptually similar content even with different wording', 'Full-text search is for small datasets and semantic search is for large ones', 'There is no practical difference \u2014 they produce the same results'],
              correct: 1,
              explanation: 'Full-text search finds documents containing your keywords (with typo tolerance and ranking). Semantic search understands the meaning behind your query \u2014 "affordable places to stay" matches "budget hotels" even though they share no words. Semantic search is essential for AI applications; full-text search is better for traditional product search.',
            },
          ],
        },
        takeaway: 'Choose your search approach based on the use case: database search for simple admin tools, full-text search (Algolia, Meilisearch) for user-facing product search, and semantic search (vector databases) for AI-powered meaning-based retrieval.',
      },
      {
        id: '5.8',
        title: 'Real-Time Systems \u2014 When Things Need to Be Live',
        estimatedMinutes: 14,
        hook: 'You\'re in a WhatsApp group chat and messages appear the instant someone sends them. You\'re watching a stock ticker and prices update every second without refreshing the page. You\'re editing a Google Doc and you see your colleague\'s cursor moving in real time. None of this works with the standard web model of "request then wait for response." These products use real-time communication patterns that push data to your screen the moment it changes. Understanding these patterns is essential for any product where freshness matters \u2014 chat, live updates, collaboration, notifications, or dashboards.',
        analogy: {
          front: 'Three ways to check if you got mail. Polling: walk to the mailbox every 5 minutes and check. Server-Sent Events: the mailman rings your doorbell whenever a letter arrives (one-way \u2014 he delivers, you listen). WebSockets: install an intercom system between you and the post office \u2014 you can talk back and forth instantly, anytime.',
          back: 'Polling is the simplest: your app asks the server "anything new?" every few seconds. Simple but wasteful \u2014 99% of checks return nothing. SSE is one-way push: the server notifies your app whenever data changes. Perfect for live feeds and dashboards. WebSockets are bidirectional: both sides send messages instantly. Required for chat, gaming, and real-time collaboration where both sides need to talk.',
        },
        content: [
          {
            type: 'text',
            body: 'The standard web model is request-response: your browser asks the server for something, the server responds. This works for loading pages and submitting forms, but it breaks down when data changes frequently and users need to see updates immediately. Imagine a chat app using request-response: you\'d have to click a "refresh" button to see new messages. That\'s the problem real-time systems solve. There are three patterns, each with different complexity and use cases.',
          },
          {
            type: 'text',
            body: 'Polling is the simplest approach: your app sends a request to the server every N seconds asking "has anything changed?" If yes, it gets the new data and updates the UI. If no, it gets an empty response. Polling works and is easy to implement, but it\'s wasteful \u2014 if you poll every 5 seconds and data only changes once a minute, 92% of your requests return nothing. For non-critical updates (checking for new emails every 30 seconds, refreshing a dashboard every minute), polling is perfectly acceptable. Its simplicity is an advantage when real-time speed isn\'t critical.',
          },
          {
            type: 'text',
            body: 'Server-Sent Events (SSE) are a step up. The browser opens a persistent connection to the server, and the server pushes data through that connection whenever something changes. No wasted requests \u2014 data only flows when there\'s something new. SSE is one-directional: server to client. The client can\'t send messages back through the same connection (it uses regular HTTP requests for that). SSE is perfect for live feeds, notifications, stock tickers, and any scenario where the server broadcasts updates. It\'s also how AI streaming works \u2014 the model pushes tokens to your browser as they\'re generated.',
          },
          {
            type: 'text',
            body: 'WebSockets are the full real-time solution. They establish a persistent, bidirectional connection between the browser and server. Both sides can send messages at any time with minimal overhead. WebSockets are required for chat applications (both sides send messages), real-time collaboration (Google Docs, Figma), multiplayer games, and any scenario where both the client and server need to push data instantly. The trade-off: WebSockets are more complex to implement, harder to scale (each connection consumes server resources), and trickier to deploy. Services like Pusher, Ably, and Supabase Realtime handle this complexity for you.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                { label: 'Polling', code: '// Check for new messages every 5 seconds\nsetInterval(async () => {\n  const response = await\n    fetch(\'/api/messages?since=\'\n      + lastTimestamp);\n  const newMessages =\n    await response.json();\n\n  if (newMessages.length > 0) {\n    displayMessages(newMessages);\n    lastTimestamp = Date.now();\n  }\n  // 92% of these requests\n  // return empty arrays\n}, 5000);' },
                { label: 'Server-Sent Events (SSE)', code: '// Server pushes updates as\n// they happen (one-way)\nconst eventSource =\n  new EventSource(\'/api/stream\');\n\neventSource.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  displayMessage(data);\n};\n\n// No wasted requests!\n// Data arrives only when\n// something actually changes.\n// Perfect for: notifications,\n// live feeds, AI streaming.' },
                { label: 'WebSocket', code: '// Bidirectional real-time\n// connection\nconst ws =\n  new WebSocket(\'wss://api.app\');\n\n// Receive messages\nws.onmessage = (event) => {\n  const data = JSON.parse(\n    event.data);\n  displayMessage(data);\n};\n\n// Send messages (both ways!)\nws.send(JSON.stringify({\n  text: \'Hello!\',\n  user: \'Prath\'\n}));\n// Required for: chat, collab,\n// gaming.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'A common pattern in production: use SSE or WebSockets for the real-time layer, but keep a polling fallback. WebSocket connections can drop (network changes, sleeping laptops), and SSE can be blocked by some corporate firewalls. The fallback ensures your app still works, just with a slight delay. Libraries like Socket.IO handle this automatically \u2014 they try WebSocket first, fall back to polling, and reconnect seamlessly when the connection drops.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'WebSocket', definition: 'A protocol for persistent, bidirectional communication between browser and server. Both sides can send messages at any time. Required for chat, collaboration, and real-time multiplayer.' },
              { term: 'Server-Sent Events (SSE)', definition: 'A protocol for one-way server-to-client push over a persistent HTTP connection. Simpler than WebSockets. Perfect for notifications, live feeds, and AI streaming.' },
              { term: 'Polling', definition: 'Repeatedly requesting data from the server at fixed intervals. Simple but wasteful. Acceptable for non-critical updates where slight delay is tolerable.' },
              { term: 'Real-time', definition: 'Data updates appearing in the UI within milliseconds of the change occurring, without the user refreshing. Achieved through WebSockets, SSE, or frequent polling.' },
              { term: 'Bidirectional', definition: 'Communication flowing in both directions simultaneously. WebSockets are bidirectional (client and server both send). SSE is unidirectional (server pushes only).' },
              { term: 'Socket.IO', definition: 'A popular JavaScript library that abstracts real-time communication. Tries WebSocket first, falls back to polling, handles reconnection, and provides room-based broadcasting.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Which real-time pattern would you use for a live stock price dashboard?',
              options: ['WebSockets \u2014 you need bidirectional communication', 'Polling every second \u2014 it\'s the simplest approach', 'Server-Sent Events \u2014 the server pushes price updates one-way to the client', 'Regular HTTP requests \u2014 the user can refresh the page'],
              correct: 2,
              explanation: 'A stock ticker is a one-way data flow: the server pushes price updates to the client. The client never sends price data back. SSE is the perfect fit \u2014 it\'s simpler than WebSockets and designed exactly for server-to-client push scenarios like live feeds and dashboards.',
            },
            {
              question: 'Why would you keep a polling fallback even when using WebSockets?',
              options: ['Polling is faster than WebSockets', 'WebSocket connections can drop due to network changes, and some firewalls block them \u2014 polling ensures the app still works', 'Polling uses less bandwidth', 'WebSockets are deprecated'],
              correct: 1,
              explanation: 'WebSocket connections are fragile \u2014 they drop when networks change (WiFi to cellular), when laptops sleep, and when corporate firewalls block non-HTTP traffic. A polling fallback ensures your real-time features degrade gracefully instead of breaking completely.',
            },
          ],
        },
        takeaway: 'Use polling for non-critical updates, Server-Sent Events for one-way live data (feeds, notifications, AI streaming), and WebSockets for bidirectional real-time features (chat, collaboration) \u2014 always keep a fallback for dropped connections.',
      },
      {
        id: '5.9',
        title: 'Monitoring & Analytics \u2014 Eyes on Your Product',
        estimatedMinutes: 14,
        hook: 'It\'s 3 AM. Your app\'s checkout flow has been silently broken for two hours. Users are getting a white screen after clicking "Pay," giving up, and leaving. You won\'t know until you wake up and check customer support emails. By then, you\'ve lost hundreds of sales and your reputation has taken a hit. This scenario is completely preventable. Monitoring and analytics tools watch your product 24/7, catching errors the instant they happen, tracking how users actually behave, and alerting you before small issues become disasters. Setting these up before launch is not optional \u2014 it\'s as essential as having a login page.',
        analogy: {
          front: 'Running a product without monitoring is like driving a car with no dashboard. No speedometer, no fuel gauge, no check engine light. You don\'t know how fast you\'re going, when you\'ll run out of fuel, or that the engine is overheating. You find out about problems when the car breaks down on the highway.',
          back: 'Error tracking (Sentry) is your check engine light \u2014 it alerts you the instant something breaks, with the exact location and cause. Product analytics (PostHog, Mixpanel) is your speedometer and odometer \u2014 how fast you\'re growing, how far users get in your flows. Uptime monitoring is your fuel gauge \u2014 is the engine even running? You\'d never drive without a dashboard. Don\'t ship without monitoring.',
        },
        content: [
          {
            type: 'text',
            body: 'Monitoring covers three distinct needs: error tracking (what\'s breaking?), product analytics (how are users behaving?), and infrastructure monitoring (is everything running?). Most teams set up analytics after launch and error tracking after the first disaster. The smart move is to set up all three before your first user arrives. Here\'s why: the first hours after launch are when you\'ll have the most bugs, the most valuable user behavior data, and the highest risk of downtime. If you\'re flying blind during that critical window, you\'re leaving money and insights on the table.',
          },
          {
            type: 'text',
            body: 'Error tracking is the most immediately valuable. Sentry is the industry standard \u2014 when an error occurs anywhere in your app (frontend or backend), Sentry captures the error message, stack trace, browser/device information, the user who was affected, and the exact sequence of actions that led to the error. It groups identical errors together and tracks their frequency. You get a Slack or email alert within seconds. Sentry\'s free tier covers 5,000 errors per month, which is more than enough for most products. The alternative is hoping users report bugs (they usually don\'t \u2014 they leave), or manually checking server logs (you won\'t, especially at 3 AM).',
          },
          {
            type: 'text',
            body: 'Product analytics answers questions that error tracking can\'t: What percentage of users complete the signup flow? Where do they drop off? Which features are actually used? How often do users return? PostHog is the modern choice \u2014 it\'s open-source, self-hostable, and includes analytics, session replay (watch recordings of user sessions), feature flags, and A/B testing in one platform. Its free tier is generous: 1 million events per month. Mixpanel is the established player, particularly strong for event-based analytics and funnel analysis. Vercel Analytics provides basic web performance metrics if you\'re hosted on Vercel. Google Analytics is free but increasingly complex and privacy-invasive \u2014 PostHog is a better fit for most product builders.',
          },
          {
            type: 'text',
            body: 'Infrastructure monitoring covers the basics: is your app online? How fast is it responding? Are servers running out of memory? Services like BetterUptime and UptimeRobot ping your app every minute and alert you if it goes down. Application Performance Monitoring (APM) tools like Datadog and New Relic track response times, database query performance, and server resource usage. For most early-stage products, Sentry (errors) + PostHog (analytics) + a simple uptime monitor is the right combination. Add APM when you have performance issues to investigate.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each monitoring need to the most appropriate tool.',
              pairs: [
                { left: 'An error crashed checkout for 50 users at 3 AM', right: 'Sentry (error tracking + alerting)' },
                { left: 'What percentage of users complete the onboarding flow?', right: 'PostHog or Mixpanel (product analytics)' },
                { left: 'Watch a recording of what a confused user actually did', right: 'PostHog Session Replay' },
                { left: 'Is the app even online right now?', right: 'BetterUptime or UptimeRobot' },
                { left: 'API responses are getting slower \u2014 which endpoint is the bottleneck?', right: 'Datadog or New Relic (APM)' },
                { left: 'Which version of the signup page converts better?', right: 'PostHog A/B Testing' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Session replay is a superpower most builders underuse. PostHog and similar tools record anonymized videos of real user sessions. When a user reports "it didn\'t work," instead of guessing what happened, you watch exactly what they did: where they clicked, what they saw, and where things went wrong. It\'s like having a security camera for your user experience. Set it up on day one.',
          },
          {
            type: 'text',
            body: 'Core Web Vitals are Google\'s three metrics for measuring user experience, and they directly affect your search ranking. LCP (Largest Contentful Paint) measures loading speed \u2014 the main content should appear within 2.5 seconds. FID/INP (Interaction to Next Paint) measures responsiveness \u2014 interactions should respond within 200ms. CLS (Cumulative Layout Shift) measures visual stability \u2014 elements shouldn\'t jump around as the page loads. Track these with Vercel Analytics, Google PageSpeed Insights, or Lighthouse. Common fixes: optimize images (use WebP/AVIF format, lazy-load below-the-fold images), enable code splitting (load only the JavaScript needed for the current page), and use a CDN for static assets.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Error Tracking', definition: 'Automatically capturing, categorizing, and alerting on errors in your application. Sentry is the industry standard. Captures stack traces, user context, browser info, and action sequences.' },
              { term: 'Product Analytics', definition: 'Tracking and analyzing user behavior patterns: signups, feature usage, retention, and conversion funnels. PostHog and Mixpanel are leading tools. Answers "what are users doing?" not just "is it working?"' },
              { term: 'Session Replay', definition: 'Recordings of real user sessions showing exactly what users saw, clicked, and experienced. Invaluable for debugging UX issues. Available in PostHog, FullStory, and Hotjar.' },
              { term: 'Uptime Monitoring', definition: 'Services that ping your app at regular intervals and alert you if it goes down. BetterUptime and UptimeRobot are popular choices. The most basic monitoring \u2014 ensures your app is actually reachable.' },
              { term: 'APM (Application Performance Monitoring)', definition: 'Deep monitoring of application performance: response times, database query speed, server CPU/memory usage. Datadog and New Relic are the leaders. Needed when you have performance issues to investigate.' },
              { term: 'Feature Flags', definition: 'Toggles that let you enable or disable features for specific users without deploying code. Used for gradual rollouts, A/B testing, and instant rollback if something breaks.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should you set up monitoring BEFORE launch rather than after?',
              options: ['It\'s cheaper before launch', 'The first hours after launch have the most bugs, most valuable user data, and highest risk of downtime \u2014 flying blind during this window wastes critical insights', 'Monitoring tools take weeks to install', 'It\'s required by hosting providers'],
              correct: 1,
              explanation: 'Launch day is when everything is most likely to break and when user behavior data is most valuable. If monitoring isn\'t in place, you won\'t see the errors, won\'t learn from first users, and won\'t know if the app goes down. Setting up Sentry and PostHog takes under an hour and pays for itself immediately.',
            },
            {
              question: 'What is the recommended starter monitoring stack for most new products?',
              options: ['Datadog + New Relic + Splunk (enterprise APM)', 'Sentry (error tracking) + PostHog (analytics) + uptime monitor \u2014 covers errors, user behavior, and availability', 'Just Google Analytics \u2014 it covers everything', 'No monitoring until you have 10,000 users'],
              correct: 1,
              explanation: 'Sentry catches errors instantly with full context. PostHog tracks user behavior, session replays, and feature flags. An uptime monitor ensures the app is reachable. Together they cover the three essential monitoring needs. All have generous free tiers. Add APM (Datadog/New Relic) later when you have performance issues to investigate.',
            },
          ],
        },
        takeaway: 'Set up error tracking (Sentry), product analytics (PostHog), and uptime monitoring before your first user arrives \u2014 monitoring is not a post-launch luxury, it\'s a pre-launch necessity that pays for itself from day one.',
      },
      {
        id: '5.10',
        title: 'Assemble Your Stack \u2014 Putting It All Together',
        estimatedMinutes: 18,
        hook: 'You\'ve now explored the entire ecosystem of services that modern products are built from: authentication, payments, email, file storage, hosting, search, real-time, and monitoring. Each lesson covered individual tools. But a real product doesn\'t use tools in isolation \u2014 it combines them into a cohesive stack where every piece works together. This capstone lesson is about making real choices. You\'ll assemble a complete technology stack for a product, understanding which combinations work well together and which create unnecessary complexity. By the end, you\'ll have a reusable mental framework for the "what do I use to build this?" question.',
        analogy: {
          front: 'Assembling a tech stack is like packing for a specific trip. A weekend camping trip needs a tent, sleeping bag, and flashlight \u2014 not a suit and tie. A business conference needs professional clothes and a laptop \u2014 not hiking boots. The wrong gear for the wrong trip creates problems. And overpacking (bringing everything "just in case") slows you down more than missing one item.',
          back: 'A simple SaaS product needs auth, database, hosting, and payments \u2014 not a real-time engine and vector database. A content platform needs search and storage \u2014 not payment processing on day one. Overengineering your stack (choosing enterprise tools for a weekend project) slows you down more than picking the "wrong" tool. Start with the minimum viable stack and add services as real needs emerge.',
        },
        content: [
          {
            type: 'text',
            body: 'The key insight of this entire chapter is that there\'s no single "best" stack \u2014 there\'s only the best stack for your specific product at your specific stage. A solo builder launching an MVP needs simplicity above all else. A growing startup with paying users needs reliability and scalability. An enterprise product needs compliance, security, and customization. The tools are the same; the selection criteria change. Here are the principles that guide good stack decisions.',
          },
          {
            type: 'text',
            body: 'Principle 1: Minimize the number of services. Every service you add is another dashboard to monitor, another API key to manage, another potential point of failure, and another bill to pay. If Supabase gives you auth, database, storage, and real-time in one platform, that\'s four fewer integration points than using Clerk + PlanetScale + S3 + Pusher separately. The combined approach has trade-offs (less flexibility, vendor lock-in), but for an MVP, fewer moving parts means fewer things that can break.',
          },
          {
            type: 'text',
            body: 'Principle 2: Choose services that integrate well together. Vercel + Next.js + Clerk + Stripe is a well-worn path with extensive documentation, tutorials, and community support. Choosing Fly.io + SvelteKit + Auth0 + LemonSqueezy works but has fewer resources when you get stuck. Early in a product\'s life, community and documentation matter more than theoretical capability. Pick the path with the most footprints.',
          },
          {
            type: 'text',
            body: 'Principle 3: Don\'t add services until you need them. You don\'t need full-text search until your database search is visibly slow. You don\'t need a CDN until you have users in multiple regions. You don\'t need real-time features until your users actually need live updates. Starting with the minimum viable stack and adding services as real (not imagined) needs emerge is the fastest path to a launched product. Every hour spent configuring a service you don\'t yet need is an hour stolen from building features users care about.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Authentication',
                  options: [
                    { name: 'Clerk', description: 'Best prebuilt UI, excellent Next.js integration. Free up to 10K MAUs. Best for: Next.js apps wanting fast setup.' },
                    { name: 'Supabase Auth', description: 'Integrated with Supabase database and storage. Best for: teams already using Supabase as their backend.' },
                    { name: 'Auth0', description: 'Enterprise-grade with SAML, SSO, and advanced policies. Best for: B2B products needing enterprise security features.' },
                    { name: 'Firebase Auth', description: 'Great mobile SDKs, tight Firebase ecosystem integration. Best for: mobile-first apps and rapid prototyping.' },
                  ],
                },
                {
                  name: 'Database',
                  options: [
                    { name: 'Supabase (PostgreSQL)', description: 'Full PostgreSQL with real-time, auth, and storage included. The "everything in one platform" choice. Best for: most new products.' },
                    { name: 'MongoDB Atlas', description: 'Document database, flexible schema. Best for: products with varied data structures or rapid prototyping where schema might change frequently.' },
                    { name: 'PlanetScale', description: 'Serverless MySQL with branching (like Git for databases). Best for: teams that want database schema changes to be reviewed like code.' },
                    { name: 'Firebase Firestore', description: 'NoSQL with real-time sync and offline support. Best for: mobile apps needing offline-first functionality.' },
                  ],
                },
                {
                  name: 'Hosting',
                  options: [
                    { name: 'Vercel', description: 'Built for Next.js. Auto-deploy from GitHub, preview deployments, edge functions. Best for: Next.js and React apps.' },
                    { name: 'Netlify', description: 'Excellent for static sites and Jamstack. Generous free tier. Best for: static websites, blogs, documentation.' },
                    { name: 'Railway', description: 'Simplest backend hosting. Connect GitHub, deploy anything. Best for: Python, Node.js, or Go backends.' },
                    { name: 'AWS / GCP / Azure', description: 'Full cloud infrastructure. Maximum power and complexity. Best for: larger teams with DevOps expertise.' },
                  ],
                },
                {
                  name: 'Payments',
                  options: [
                    { name: 'Stripe', description: 'Industry standard. Subscriptions, one-time payments, invoicing. Best documentation. Best for: most products that charge money.' },
                    { name: 'LemonSqueezy', description: 'Merchant of Record \u2014 handles global tax compliance. Best for: solo builders selling digital products who don\'t want to deal with tax.' },
                    { name: 'None needed', description: 'Your product is free, ad-supported, or monetized through other channels.' },
                  ],
                },
                {
                  name: 'Email',
                  options: [
                    { name: 'Resend', description: 'Modern developer experience with React Email templates. 3K emails/month free. Best for: transactional email with beautiful designs.' },
                    { name: 'SendGrid', description: 'Battle-tested volume player. Handles transactional and marketing. Best for: high-volume senders needing both types.' },
                    { name: 'None needed', description: 'Your product doesn\'t send emails yet (auth service handles verification).' },
                  ],
                },
                {
                  name: 'File Storage',
                  options: [
                    { name: 'Supabase Storage', description: 'Integrated with Supabase Auth for access control. Best for: teams already on Supabase.' },
                    { name: 'AWS S3', description: 'The original object storage. Most ecosystem support. Best for: maximum flexibility and third-party integration.' },
                    { name: 'Cloudflare R2', description: 'S3-compatible with zero egress fees. Best for: products serving lots of downloads where bandwidth costs matter.' },
                    { name: 'None needed', description: 'Your product doesn\'t handle file uploads.' },
                  ],
                },
                {
                  name: 'Monitoring',
                  options: [
                    { name: 'Sentry + PostHog', description: 'Error tracking + product analytics + session replay. The recommended starter combo. Free tiers cover most early products.' },
                    { name: 'Vercel Analytics', description: 'Basic web vitals and performance metrics. Built into Vercel. Best for: Vercel-hosted apps wanting simple insights without adding services.' },
                    { name: 'None yet', description: 'Planning to add monitoring later. (Not recommended \u2014 set it up before launch!)' },
                  ],
                },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Here\'s a proven starter stack used by thousands of successful products: Next.js + Vercel (frontend and hosting) + Supabase (database, auth, storage) + Stripe (payments) + Resend (email) + Sentry + PostHog (monitoring). That combination covers 90% of what a typical SaaS product needs, has extensive documentation and community support, and costs $0/month until you have meaningful traffic. Start here unless you have a specific reason not to.',
          },
          {
            type: 'text',
            body: 'The final piece of wisdom: your stack will evolve. The tools you choose for your MVP won\'t be the same tools you use at 100,000 users. That\'s normal and expected. Supabase might be perfect now but limiting at scale \u2014 you\'ll migrate to dedicated services when the need is real, not imagined. The biggest mistake isn\'t choosing the "wrong" tool; it\'s spending so long choosing that you never ship. Pick the well-documented, well-supported option. Build. Ship. Iterate. Your stack is a living thing, not a wedding vow.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the most important principle when assembling a tech stack for an MVP?',
              options: ['Use as many services as possible for maximum capability', 'Minimize the number of services \u2014 fewer moving parts means fewer things that can break', 'Always choose the most enterprise-grade option', 'Pick whatever is trending on social media'],
              correct: 1,
              explanation: 'Every service you add is another dashboard, another API key, another bill, and another potential failure point. For an MVP, fewer moving parts means faster development, easier debugging, and quicker launch. Add services as real needs emerge, not imagined ones.',
            },
            {
              question: 'Why is choosing a well-documented stack with community support more important than choosing the theoretically "best" tools?',
              options: ['Popular tools are always technically superior', 'When you get stuck (and you will), extensive documentation and community support help you solve problems faster \u2014 which matters more than theoretical capability', 'Less popular tools are always outdated', 'Community support means the tools are free'],
              correct: 1,
              explanation: 'As a product builder, you\'ll encounter integration issues, edge cases, and bugs. A well-documented stack with active community support means someone has likely encountered and solved your exact problem before. The best tool you can\'t debug is worse than the good tool with a Stack Overflow answer.',
            },
            {
              question: 'What is the recommended starter stack for a typical SaaS product?',
              options: ['AWS + MongoDB + Kubernetes + Docker', 'Next.js + Vercel + Supabase + Stripe + Resend + Sentry + PostHog', 'WordPress + WooCommerce + shared hosting', 'React Native + Firebase + LemonSqueezy'],
              correct: 1,
              explanation: 'Next.js + Vercel (frontend/hosting) + Supabase (database/auth/storage) + Stripe (payments) + Resend (email) + Sentry + PostHog (monitoring) covers 90% of SaaS needs, has extensive documentation, and costs $0/month until you have meaningful traffic.',
            },
            {
              question: 'When should you add full-text search (like Algolia or Meilisearch) to your stack?',
              options: ['On day one \u2014 every product needs search', 'When database search is visibly slow or users need typo tolerance, relevance ranking, and filtering', 'Only when you have over 1 million users', 'Never \u2014 database search is always sufficient'],
              correct: 1,
              explanation: 'Don\'t add services until you need them. Database search works fine for early products. When users start complaining about search quality, when you need typo tolerance, or when your database search is visibly slow \u2014 that\'s when you add a full-text search service. Real needs, not imagined ones.',
            },
            {
              question: 'What is the biggest mistake when choosing a tech stack?',
              options: ['Choosing the wrong tool', 'Spending so long choosing that you never ship \u2014 your stack will evolve anyway', 'Not using enough services', 'Choosing tools that are too simple'],
              correct: 1,
              explanation: 'Your stack is a living thing, not a wedding vow. The tools you choose for your MVP won\'t be the same at 100,000 users. The biggest mistake is analysis paralysis \u2014 spending weeks comparing tools instead of building. Pick the well-documented option, ship, and iterate based on real experience.',
            },
          ],
        },
        takeaway: 'Assemble your stack with three principles: minimize services (fewer moving parts), choose well-documented tools that integrate well together, and don\'t add services until you actually need them \u2014 ship first, optimize second.',
      },
    ],
  },
  {
    id: 6,
    title: "No-Code, Low-Code, and the Builder's Spectrum",
    subtitle: 'From drag-and-drop to full-stack \u2014 find your level',
    icon: 'Wand2',
    lessons: [
      {
        id: '6.1',
        title: 'The Builder\'s Spectrum \u2014 From No-Code to Full Code',
        estimatedMinutes: 15,
        hook: 'Here\'s a secret the tech industry doesn\'t advertise: most software products don\'t need a single line of hand-written code. Billion-dollar companies have launched MVPs using drag-and-drop tools. Internal dashboards that would take engineering teams weeks get built in an afternoon with low-code platforms. The real skill isn\'t knowing how to code \u2014 it\'s knowing when to code and when not to. The builder\'s spectrum ranges from fully visual no-code tools all the way to raw programming, and the smartest builders always start as far left (simple) as possible before moving right (complex).',
        analogy: {
          front: 'Think of it like getting from Toronto to Montreal. You could walk (full code \u2014 maximum control, very slow). You could drive (AI-assisted code \u2014 faster, you still steer). You could take a train (low-code \u2014 fast, fixed routes but comfortable). Or you could fly (no-code \u2014 fastest, but you go where the airline goes).',
          back: 'No-code tools like Bubble and Zapier are the flight: fastest to launch, but constrained to what the platform supports. Low-code tools like Retool add flexibility with some scripting. AI-assisted code (Cursor, Claude) lets you write real code with AI doing the heavy lifting. Full custom code gives total control but takes the longest. Each step right adds power and complexity. The goal is to stay as far left as your product requirements allow.',
        },
        content: [
          {
            type: 'text',
            body: 'The builder\'s spectrum has four zones, and understanding them changes how you approach every project. On the far left is no-code: platforms like Bubble, Webflow, Zapier, and Glide where you build entirely through visual interfaces. You drag components, configure logic with dropdowns, and connect services without seeing a single line of code. These tools are powerful enough to build complete web apps, automate business workflows, and launch landing pages \u2014 often in hours instead of weeks. The ceiling is real though: when you need something the platform doesn\'t support, you hit a wall.',
          },
          {
            type: 'text',
            body: 'Next is low-code: platforms like Retool, Appsmith, and OutSystems. These give you visual builders for 80% of the work but let you drop into code (usually JavaScript or SQL) for custom logic. Think of a dashboard where the layout is drag-and-drop but the data transformation is a snippet of JavaScript. Low-code is the sweet spot for internal tools \u2014 admin panels, customer support dashboards, data management interfaces \u2014 where speed matters more than pixel-perfect design.',
          },
          {
            type: 'text',
            body: 'Then comes AI-assisted code: tools like Cursor, GitHub Copilot, Claude, and Windsurf where you write real code but AI does 60-80% of the typing. You describe what you want in plain English and the AI generates working code. This is the fastest-growing zone on the spectrum. You get the flexibility of real code (no platform ceilings) with dramatically faster development. The catch: you still need to understand what the code does, even if you didn\'t write every line. This is where this course has been preparing you.',
          },
          {
            type: 'text',
            body: 'Finally, full custom code: raw React, Python, Swift, or whatever language fits. No platform constraints, no AI middleman, complete control over every pixel and every byte. This is where you go for novel user experiences, performance-critical systems, and anything that doesn\'t fit existing tool categories. But it\'s also the slowest and most expensive path. The biggest mistake new builders make is starting here when they should start further left. A Webflow landing page with a Zapier integration launched this week beats a custom Next.js app launched in three months \u2014 every time.',
          },
          {
            type: 'callout',
            body: 'The cardinal rule of the builder\'s spectrum: always start with the simplest tool that could possibly work. You can always move right (toward more code) later. You can never get back the months you spent over-engineering something that a no-code tool could have handled.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each product idea to the most appropriate point on the builder\'s spectrum.',
              pairs: [
                { left: 'Landing page for a new startup to validate interest', right: 'No-code (Webflow / Carrd)' },
                { left: 'Internal admin panel for customer support team', right: 'Low-code (Retool)' },
                { left: 'Automated workflow: new signup \u2192 send welcome email \u2192 add to CRM', right: 'No-code (Zapier / Make)' },
                { left: 'Real-time multiplayer game with custom physics', right: 'Full custom code' },
                { left: 'SaaS product with unique drag-and-drop interface', right: 'AI-assisted code (Cursor / Claude)' },
                { left: 'Simple mobile app listing local restaurant menus', right: 'No-code (Glide / Adalo)' },
                { left: 'Data dashboard showing sales metrics from a database', right: 'Low-code (Retool / Streamlit)' },
                { left: 'E-commerce store selling handmade jewelry', right: 'No-code (Shopify / Webflow)' },
                { left: 'Chrome extension that modifies web page content', right: 'AI-assisted code (Cursor / Claude)' },
                { left: 'Operating system or database engine', right: 'Full custom code' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'No-Code', definition: 'Platforms that let you build software entirely through visual interfaces \u2014 dragging components, configuring logic with dropdowns, and connecting services without writing any code. Bubble, Webflow, and Zapier are prominent examples.' },
              { term: 'Low-Code', definition: 'Platforms that provide visual builders for most functionality but allow you to add custom code (usually JavaScript or SQL) for advanced logic. Retool and Appsmith are leading examples. Faster than full code, more flexible than no-code.' },
              { term: 'AI-Assisted Code', definition: 'Writing real code with AI tools (Cursor, Claude, GitHub Copilot) generating most of it from natural language descriptions. You get full-code flexibility at dramatically higher speed, but still need to understand what the code does.' },
              { term: 'Full Code', definition: 'Writing every line of code by hand using programming languages and frameworks. Maximum control and flexibility, but slowest development speed. Reserved for novel experiences, performance-critical systems, or highly custom products.' },
              { term: 'Visual Builder', definition: 'A drag-and-drop interface for constructing software. Instead of writing HTML and CSS, you place elements on a canvas, resize them, and configure properties through panels. Webflow and Bubble are visual builders.' },
              { term: 'Citizen Developer', definition: 'A non-engineer who builds functional software using no-code and low-code tools. Marketing managers creating automations, analysts building dashboards, founders prototyping MVPs \u2014 all citizen developers.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the "cardinal rule" of the builder\'s spectrum?',
              options: ['Always use full custom code for maximum control', 'Start with the simplest tool that could possibly work and move toward more code only when needed', 'No-code tools are always better than writing code', 'Learn to code first, then explore no-code tools'],
              correct: 1,
              explanation: 'The smartest builders start as far left on the spectrum (simplest tools) as possible. You can always add complexity later, but you can never recover the time spent over-engineering. A working product built with a simple tool beats a perfect product that\'s still in development.',
            },
            {
              question: 'A startup founder wants to validate a product idea before hiring engineers. They need a functional web app with user accounts and a database. What\'s the best starting point?',
              options: ['Hire a React developer to build a custom app', 'Use Bubble to build a fully functional no-code web app', 'Write the code themselves using Python and Django', 'Wait until they have funding for a proper engineering team'],
              correct: 1,
              explanation: 'Bubble can handle user accounts, database logic, and complex workflows \u2014 all without code. It\'s the fastest way to get a functional product in front of users to validate the idea. If it works, then invest in custom code for scale and customization.',
            },
            {
              question: 'When should you move from no-code to AI-assisted or custom code?',
              options: ['As soon as the project starts \u2014 no-code is never good enough', 'When you hit the platform\'s ceiling and need functionality it can\'t provide', 'Only when you have a team of 10+ engineers', 'Never \u2014 no-code can handle everything'],
              correct: 1,
              explanation: 'No-code tools have real ceilings. When your product needs custom logic, performance optimization, or features the platform doesn\'t support, that\'s when you graduate to code. The key is letting the product\'s requirements drive this decision, not ego or assumptions about what "real" software looks like.',
            },
          ],
        },
        takeaway: 'The builder\'s spectrum runs from no-code to full code, and the smartest move is always starting with the simplest tool that meets your needs \u2014 you can move toward more complexity later, but you can never recover time spent over-engineering.',
      },
      {
        id: '6.2',
        title: 'Automation Tools \u2014 Connecting Everything',
        estimatedMinutes: 14,
        hook: 'Every business runs on repetitive tasks. Someone fills out a form, and the data needs to go into a spreadsheet, then a task needs to be created, then a notification needs to be sent. Do this manually ten times a day and it\'s annoying. Do it a hundred times and it\'s a full-time job. Automation tools like Zapier, Make, and n8n let you connect services together with visual workflows: "When THIS happens in one app, do THAT in another." No servers, no code, no maintenance \u2014 just logic.',
        analogy: {
          front: 'Think of automation tools like a postal sorting system. Letters (data) arrive at the post office (trigger). A sorting machine reads the address (filter/condition), routes the letter to the right bin (action), stamps it (transform), and sends it out for delivery (final action). You set up the rules once, and the system handles every letter automatically.',
          back: 'The "letters" are events \u2014 a new form submission, an email, a payment. The "sorting machine" is the automation platform (Zapier, Make, n8n) applying your rules. The "bins" are the destination apps (Slack, Asana, Google Sheets). You define the workflow visually: trigger \u2192 condition \u2192 action \u2192 action. It runs 24/7 without you touching it.',
        },
        content: [
          {
            type: 'text',
            body: 'The core concept behind every automation tool is the same: triggers and actions. A trigger is an event that starts the workflow \u2014 a new row in Google Sheets, a form submission on Typeform, a new email in Gmail, a payment in Stripe. An action is what happens in response \u2014 create a task in Asana, send a message in Slack, update a record in Airtable, generate a PDF. You chain these together into workflows (Zapier calls them "Zaps," Make calls them "Scenarios"). The simplest workflow has one trigger and one action. Complex workflows branch, filter, loop, and touch a dozen different apps.',
          },
          {
            type: 'text',
            body: 'Zapier is the most popular automation platform with 6,000+ app integrations. It\'s the easiest to learn and the fastest to set up. You pick a trigger app, pick a trigger event, pick an action app, pick an action, map the data fields, and you\'re live in minutes. The trade-off: Zapier charges per task (each step in a workflow counts), so costs can escalate quickly for high-volume automations. Simple workflows are cheap, but a 5-step Zap running 1,000 times a day gets expensive fast. Zapier is ideal for small businesses and simple integrations where ease-of-use matters more than cost optimization.',
          },
          {
            type: 'text',
            body: 'Make (formerly Integromat) is the power user\'s choice. Its visual builder shows workflows as a flowchart with branching paths, filters, and iterators. Make is significantly cheaper than Zapier at scale \u2014 it charges per operation rather than per step, and one operation does more work. Make also handles complex logic better: routers that split workflows into parallel paths, iterators that process arrays one item at a time, error handling that catches failures and retries. The learning curve is steeper than Zapier but the ceiling is much higher. If your workflow has any conditional logic ("only do this if the amount is over $100"), Make handles it more naturally.',
          },
          {
            type: 'text',
            body: 'n8n is the open-source alternative. You can self-host it for free on your own server, which means zero per-task costs \u2014 you only pay for the server. n8n also lets you add custom JavaScript code within any workflow step, making it the most flexible option. The trade-off: you\'re responsible for hosting, updates, and uptime. n8n also has fewer pre-built integrations than Zapier (though it covers most major apps). n8n is the best choice for developers who want automation without recurring platform fees, or for workflows that need custom code logic mixed in.',
          },
          {
            type: 'callout',
            body: 'Start with Zapier for your first automation \u2014 it\'s the fastest to learn. Migrate to Make when you need complex logic or lower costs at scale. Move to n8n when you want full control and zero per-task fees.',
          },
          {
            type: 'timeline',
            config: {
              steps: [
                { label: 'Trigger Event', description: 'Something happens in an app: new Google Sheets row, Stripe payment, Typeform submission, email received. This kicks off the entire workflow.' },
                { label: 'Filter / Condition', description: 'Check if this event meets your criteria. "Is the payment over $50?" or "Does the email contain URGENT?" If no, stop. If yes, continue.' },
                { label: 'Action 1: Transform', description: 'Prepare the data for downstream apps. Extract the customer name, format the date, calculate a total. This is the "glue" that makes apps speak the same language.' },
                { label: 'Action 2: Create Record', description: 'Push data to a destination: create an Asana task, add a row to Google Sheets, insert a record in Airtable, update a CRM contact.' },
                { label: 'Action 3: Notify', description: 'Alert the right people: send a Slack message, fire an email, push a mobile notification. The human learns what happened without checking manually.' },
                { label: 'Log Result', description: 'Record that this workflow ran successfully. Track failures. Over time, you build a reliable audit trail of every automated action.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Zapier', definition: 'The most popular automation platform with 6,000+ app integrations. Workflows are called "Zaps." Easiest to learn but charges per task, so costs scale with volume.' },
              { term: 'Make', definition: 'Formerly Integromat. A visual automation platform with a flowchart-style builder, branching logic, and lower cost per operation than Zapier. Steeper learning curve, higher ceiling.' },
              { term: 'n8n', definition: 'Open-source automation platform you can self-host for free. Supports custom JavaScript code in workflows. Best for developers who want full control without per-task fees.' },
              { term: 'Trigger', definition: 'The event that starts an automation workflow. Examples: a new row in a spreadsheet, a form submission, a payment received, a new email. Every workflow begins with exactly one trigger.' },
              { term: 'Action', definition: 'A step in the workflow that does something in response to the trigger. Examples: send a Slack message, create a task, update a database record. Workflows can have many actions chained together.' },
              { term: 'Zap', definition: 'Zapier\'s name for an automated workflow. A Zap consists of one trigger and one or more actions. "I built a Zap" means "I created an automation in Zapier."' },
              { term: 'Workflow', definition: 'The complete automation from trigger to final action. Also called a Scenario in Make. A workflow defines the entire chain of "when this happens, do that, then that, then that."' },
              { term: 'Integration', definition: 'A connection between the automation platform and a specific app. Zapier\'s Slack integration lets Zaps read from and write to Slack. More integrations means more apps you can connect.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the fundamental concept behind all automation tools like Zapier, Make, and n8n?',
              options: ['Writing code that runs on a schedule', 'Triggers and actions \u2014 when something happens in one app, do something in another', 'Building mobile apps without coding', 'Replacing entire engineering teams with AI'],
              correct: 1,
              explanation: 'Every automation platform is built on the same core concept: a trigger (an event that starts the workflow) and one or more actions (things that happen in response). The platform handles the connections between apps so you don\'t need to write API integration code.',
            },
            {
              question: 'Which automation platform would you choose for a high-volume workflow (10,000+ runs per day) where cost matters most?',
              options: ['Zapier \u2014 it has the most integrations', 'Make \u2014 it charges per operation and costs less at scale', 'All three cost the same at scale', 'Automation tools can\'t handle that volume'],
              correct: 1,
              explanation: 'Make is significantly cheaper than Zapier at high volumes because it charges per operation (and one operation does more work than one Zapier task). For very high volumes, self-hosted n8n is even cheaper since you only pay for the server. Zapier\'s per-task pricing makes it the most expensive at scale.',
            },
          ],
        },
        takeaway: 'Automation tools (Zapier, Make, n8n) connect apps through triggers and actions \u2014 start with Zapier for simplicity, graduate to Make for complex logic and lower costs, and consider n8n for self-hosted control and zero per-task fees.',
      },
      {
        id: '6.3',
        title: 'No-Code App Builders \u2014 Full Apps Without Code',
        estimatedMinutes: 15,
        hook: 'In 2023, a solo founder built a complete project management tool using Bubble \u2014 no engineers, no code \u2014 and grew it to $30,000 in monthly recurring revenue. That\'s not an outlier. Thousands of real businesses run on apps built entirely with visual builders. No-code app platforms like Bubble, Glide, Softr, and Adalo let you build complete web and mobile applications with user accounts, databases, payment processing, and complex logic. They\'re not toys. They\'re legitimate tools with real ceilings that you need to understand.',
        analogy: {
          front: 'No-code app builders are like IKEA furniture. IKEA gives you pre-made components (shelves, doors, hinges) and clear assembly instructions. You can build impressive furniture without woodworking skills. But if you want a curved shelf that IKEA doesn\'t offer, you\'re stuck. Custom carpentry (code) can build anything but takes ten times longer.',
          back: 'Bubble, Glide, and Softr provide pre-built components (user auth, databases, forms, lists, payment integration) that you assemble visually. You can build impressive applications without programming. But each platform has a ceiling \u2014 performance limits, design constraints, and features they simply don\'t support. Knowing these ceilings before you start is critical to avoiding a painful migration later.',
        },
        content: [
          {
            type: 'text',
            body: 'Bubble is the most powerful no-code app builder. It gives you a visual programming environment where you design your UI by dragging elements onto a canvas and define logic through visual workflows. It includes a built-in database, user authentication, API connections, and plugin marketplace. Bubble apps can handle thousands of users and complex business logic \u2014 conditional forms, role-based permissions, multi-step workflows, Stripe payments. The learning curve is the steepest of any no-code platform (expect 2-4 weeks to become productive), but the ceiling is the highest. If you can build it in Bubble, you probably don\'t need code.',
          },
          {
            type: 'text',
            body: 'Glide turns spreadsheets into mobile-first apps. You connect a Google Sheet or Airtable base, and Glide generates an app interface automatically. It\'s the fastest path from data to a working app \u2014 literally minutes. The best use cases: internal tools, inventory trackers, directory apps, simple CRMs, and field team apps. Glide apps look polished out of the box but offer less customization than Bubble. If your app is essentially "a nice interface on top of structured data," Glide is hard to beat.',
          },
          {
            type: 'text',
            body: 'Softr turns Airtable bases into web apps and client portals. It\'s purpose-built for membership sites, client dashboards, and internal tools where the data lives in Airtable. You pick pre-built blocks (list, detail, chart, form), connect them to Airtable views, and add user authentication. Softr is less flexible than Bubble but much faster to set up for its sweet spot. Adalo is another option, focused on native mobile apps (iOS and Android) built visually. It\'s the go-to if your product must be a native mobile app and you don\'t want to code.',
          },
          {
            type: 'text',
            body: 'Now the ceilings. Every no-code platform has them, and pretending they don\'t exist leads to painful rewrites. Performance: Bubble apps are noticeably slower than custom-coded apps, especially with complex database queries. Customization: you can only build what the platform\'s components support. SEO: most no-code platforms produce web apps (single-page applications) that search engines struggle to index. Vendor lock-in: if Bubble shuts down or triples its prices, migrating to code means rebuilding from scratch \u2014 there\'s no "export" button. Cost: Bubble\'s paid plans start at $29/month and can reach $349/month for production apps. For many products, these ceilings never matter. For others, they\'re deal-breakers. Know them upfront.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What kind of app are you building?',
              options: [
                {
                  label: 'A complex web app with custom logic',
                  next: {
                    question: 'How much time can you invest learning the platform?',
                    options: [
                      { label: '2-4 weeks to learn, maximum flexibility needed', result: 'Bubble \u2014 steepest learning curve but highest ceiling. Build complex web apps with workflows, databases, and API integrations.' },
                      { label: 'Need something working this week', result: 'AI-assisted code (Cursor + Claude) \u2014 if you have some technical comfort, you\'ll get more flexibility faster than learning Bubble from scratch.' },
                    ],
                  },
                },
                {
                  label: 'A mobile app (iOS / Android)',
                  next: {
                    question: 'How custom does the design need to be?',
                    options: [
                      { label: 'Standard layouts with data from a spreadsheet', result: 'Glide \u2014 spreadsheet to app in minutes. Best for internal tools and data-driven mobile apps.' },
                      { label: 'Custom native experience with complex navigation', result: 'Adalo \u2014 visual builder specifically for native mobile apps. More design control than Glide.' },
                    ],
                  },
                },
                {
                  label: 'A client portal or membership site',
                  next: {
                    question: 'Where does your data live?',
                    options: [
                      { label: 'Airtable', result: 'Softr \u2014 purpose-built for turning Airtable bases into client portals with user authentication and role-based access.' },
                      { label: 'Google Sheets or other sources', result: 'Bubble or Glide \u2014 Bubble for complex portals, Glide for simpler data-driven interfaces.' },
                    ],
                  },
                },
                {
                  label: 'A simple data-driven app (directory, inventory, tracker)',
                  next: {
                    question: 'Who will use it?',
                    options: [
                      { label: 'Internal team members', result: 'Glide \u2014 connect your spreadsheet and get a polished internal app in minutes. Lowest learning curve.' },
                      { label: 'External customers', result: 'Softr for Airtable-based data, or Bubble if you need more customization and branding control.' },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Bubble', definition: 'The most powerful no-code web app builder. Offers visual programming with a built-in database, workflows, API connections, and plugins. Steep learning curve (2-4 weeks) but can build complex, production-grade applications.' },
              { term: 'Glide', definition: 'Turns Google Sheets or Airtable into mobile-first apps in minutes. Best for internal tools, directories, and data-driven apps. Fast setup, limited customization.' },
              { term: 'Softr', definition: 'Turns Airtable bases into web apps and client portals with user authentication. Purpose-built for membership sites and dashboards on top of Airtable data.' },
              { term: 'Visual Programming', definition: 'Building software logic through visual interfaces (flowcharts, drag-and-drop, dropdowns) instead of writing text-based code. Bubble\'s workflow editor is visual programming.' },
              { term: 'Responsive Layout', definition: 'A design that automatically adjusts to different screen sizes (desktop, tablet, phone). No-code builders handle this with responsive settings on each element, similar to CSS media queries.' },
              { term: 'Plugin Marketplace', definition: 'A library of pre-built extensions that add functionality to a no-code platform. Bubble\'s plugin marketplace includes Stripe payments, Google Maps, chart libraries, and hundreds more.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the most significant ceiling of no-code app builders like Bubble?',
              options: ['They can\'t handle more than 10 users', 'Vendor lock-in \u2014 no export option, so migrating means rebuilding from scratch', 'They only work on mobile devices', 'They don\'t support databases'],
              correct: 1,
              explanation: 'Vendor lock-in is the most significant long-term risk. Bubble, Glide, and Softr don\'t let you export your app as code. If you outgrow the platform, the pricing changes, or the company shuts down, you rebuild from zero. This is acceptable for MVPs and internal tools but a real risk for products you plan to scale.',
            },
            {
              question: 'Which no-code tool would be the fastest choice for turning a Google Sheets inventory list into a mobile app for warehouse workers?',
              options: ['Bubble \u2014 it\'s the most powerful platform', 'Glide \u2014 it turns spreadsheets into mobile apps in minutes', 'Webflow \u2014 it\'s a website builder', 'Zapier \u2014 it connects apps together'],
              correct: 1,
              explanation: 'Glide is specifically designed to turn spreadsheets into mobile-first apps with minimal setup. For a data-driven internal tool like an inventory app, it\'s the fastest path from data to working app \u2014 often under an hour.',
            },
          ],
        },
        takeaway: 'No-code app builders (Bubble, Glide, Softr, Adalo) can produce real, revenue-generating products \u2014 choose based on what you\'re building, understand the ceilings (performance, lock-in, customization), and treat them as serious tools with real trade-offs.',
      },
      {
        id: '6.4',
        title: 'Internal Tool Builders \u2014 Dashboards in Minutes',
        estimatedMinutes: 14,
        hook: 'Here\'s a dirty secret of the software industry: roughly 80% of the software companies build is internal. Admin panels, customer support dashboards, data management tools, approval workflows, reporting interfaces. None of it needs to look beautiful. None of it gets shown to customers. And yet, engineering teams spend months building these tools from scratch. Internal tool builders like Retool, Appsmith, and Tooljet exist to make this absurd. They\'re platforms designed specifically for building internal software in hours instead of months.',
        analogy: {
          front: 'Think of internal tool builders like office furniture catalogs. You don\'t hire an architect to design a desk for your back office. You pick a desk from a catalog, customize the size and color, and it\'s delivered ready to use. Internal tool builders are the catalog for software: pre-made components (tables, forms, charts, buttons) you assemble into functional tools, customized to your data.',
          back: 'Retool, Appsmith, and Tooljet provide pre-built UI components (data tables, forms, charts, buttons, modals) that you drag onto a canvas and connect to your existing databases and APIs. You write small snippets of JavaScript or SQL to customize behavior. The result: a functional internal tool in hours that would take an engineering team weeks to build from scratch.',
        },
        content: [
          {
            type: 'text',
            body: 'Retool is the market leader in internal tools. You drag UI components onto a canvas \u2014 tables, forms, charts, buttons, text inputs, modals \u2014 and connect them to your existing data sources. Retool connects directly to PostgreSQL, MySQL, MongoDB, REST APIs, GraphQL, Google Sheets, Airtable, Stripe, and dozens more. Once connected, you write SQL queries or JavaScript to fetch and transform data, and the UI components display it automatically. A customer support dashboard that shows user details, recent orders, and support tickets \u2014 all pulling from different databases \u2014 takes hours in Retool instead of weeks in React.',
          },
          {
            type: 'text',
            body: 'Appsmith is the open-source alternative to Retool. You can self-host it for free on your own infrastructure, which matters for companies with strict data policies \u2014 the data never leaves your servers. Appsmith\'s feature set is comparable to Retool: drag-and-drop UI builder, database connections, JavaScript for custom logic, and Git-based version control. The trade-off: slightly less polished UX and smaller community, but zero licensing costs for the core product. Tooljet is another open-source option with similar capabilities and a cleaner interface.',
          },
          {
            type: 'text',
            body: 'The key insight is that internal tools follow predictable patterns. Almost every one is a combination of: display a list of records (table), let users filter and search, show details for a selected record (detail view), let users edit records (form), trigger actions (approve, reject, refund, disable), and show aggregate data (charts/metrics). Internal tool builders give you these patterns as pre-built components. You\'re not building from scratch \u2014 you\'re assembling from proven patterns and wiring them to your data.',
          },
          {
            type: 'text',
            body: 'When should you NOT use an internal tool builder? When the tool needs to be user-facing (Retool apps look functional, not beautiful). When performance is critical (these platforms add overhead). When you need highly custom interactions that don\'t fit standard components. And when your team doesn\'t have any technical people \u2014 Retool requires SQL and JavaScript knowledge. It\'s low-code, not no-code. The target user is an engineer who wants to build internal tools faster, not a non-technical person who wants to avoid code entirely.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each internal tool need to the most appropriate platform.',
              pairs: [
                { left: 'Customer support dashboard pulling from PostgreSQL', right: 'Retool \u2014 direct database connection, pre-built table and detail components' },
                { left: 'Internal tool for a company that requires on-premise hosting', right: 'Appsmith \u2014 open-source, self-hostable, data stays on your servers' },
                { left: 'Quick admin panel for a small startup with Airtable data', right: 'Softr or Retool \u2014 both connect to Airtable, Softr for simpler needs' },
                { left: 'Approval workflow: manager reviews and approves expense reports', right: 'Retool \u2014 forms, conditional logic, and action buttons for approve/reject' },
                { left: 'Data management tool for a team that wants zero licensing costs', right: 'Tooljet \u2014 open-source, self-hosted, free core product' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Retool', definition: 'The leading low-code platform for building internal tools. Drag-and-drop UI components connected to databases and APIs. Requires SQL/JavaScript knowledge. Paid product with a free tier.' },
              { term: 'Appsmith', definition: 'Open-source alternative to Retool. Self-hostable, free core product, comparable feature set. Best for teams with data privacy requirements or those wanting to avoid licensing costs.' },
              { term: 'Admin Panel', definition: 'An internal dashboard used by team members to manage data, users, and operations. Not customer-facing. Almost every software company has multiple admin panels.' },
              { term: 'Internal Tool', definition: 'Software built for employees, not customers. Customer support dashboards, inventory managers, approval workflows, reporting tools. 80% of software companies build is internal.' },
              { term: 'CRUD Interface', definition: 'Create, Read, Update, Delete \u2014 the four basic operations on data. Most internal tools are CRUD interfaces: display records, let users search/filter, edit fields, and delete entries.' },
              { term: 'Data Source Connector', definition: 'A pre-built integration that lets a low-code platform connect to a database or API. Retool\'s PostgreSQL connector lets you query your database directly from the visual builder.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why do internal tool builders like Retool save so much engineering time?',
              options: ['They use AI to write all the code', 'Internal tools follow predictable patterns (tables, forms, filters, detail views) that are provided as pre-built components', 'They replace the need for databases', 'They automatically generate customer-facing apps'],
              correct: 1,
              explanation: 'Almost every internal tool is a combination of the same patterns: list records in a table, filter/search, view details, edit with a form, trigger actions. Internal tool builders provide these as pre-built, configurable components. You assemble the tool from proven patterns instead of coding from scratch.',
            },
            {
              question: 'What is the key difference between Retool and Appsmith?',
              options: ['Retool is for web apps and Appsmith is for mobile apps', 'Retool is a paid product; Appsmith is open-source and can be self-hosted for free', 'Retool requires code and Appsmith is fully no-code', 'They are identical products with different names'],
              correct: 1,
              explanation: 'Both tools are low-code internal tool builders with similar capabilities. The key difference is that Appsmith is open-source and self-hostable, meaning your data stays on your servers and you pay zero licensing costs. Retool is a paid SaaS product with a more polished experience and larger ecosystem.',
            },
          ],
        },
        takeaway: 'Internal tool builders (Retool, Appsmith, Tooljet) turn weeks of engineering work into hours by providing pre-built components for the patterns every internal tool shares \u2014 tables, forms, filters, and actions wired to your existing databases and APIs.',
      },
      {
        id: '6.5',
        title: 'Website Builders \u2014 Beyond WordPress',
        estimatedMinutes: 14,
        hook: 'For decades, "building a website" meant WordPress. Today, a new generation of website builders has leapfrogged WordPress for most use cases. Webflow gives you the power of custom CSS with a visual interface. Framer turns Figma designs into live, interactive websites. Carrd lets you spin up a beautiful single-page site in under an hour. And here\'s the strategic insight: Y Combinator startups routinely launch their landing pages on Webflow weeks before writing a line of product code. The website is the first product \u2014 it validates demand before anyone builds anything.',
        analogy: {
          front: 'WordPress was like a Swiss Army knife \u2014 it could do everything (blogs, stores, portfolios, forums) but nothing exceptionally well. Modern website builders are like specialized tools. Webflow is a professional chef\'s knife: precise, powerful, takes skill. Framer is a food processor: feed it a design and it outputs the finished product. Carrd is a microwave: dead simple, limited range, but impossibly fast for what it does.',
          back: 'Webflow produces clean, production-grade code with full CSS control via a visual interface \u2014 professional sites for agencies, startups, and marketing teams. Framer excels at interactive, animated sites and converts Figma designs directly. Carrd is a single-page site builder: landing pages, link-in-bio pages, and simple portfolios in minutes. Each has a clear sweet spot.',
        },
        content: [
          {
            type: 'text',
            body: 'Webflow is the most powerful modern website builder. Its visual interface maps directly to HTML and CSS \u2014 every layout tool corresponds to a real CSS property (flexbox, grid, position). This means Webflow sites produce clean code, load fast, and are fully responsive. Webflow also includes a built-in CMS (content management system) for blogs, portfolios, product catalogs, and any structured content. You define your content structure (blog post has title, author, date, body, featured image), create a template, and Webflow generates pages for each entry. The CMS handles SEO metadata, dynamic filtering, and pagination. For marketing sites, company websites, and content-heavy sites, Webflow is the gold standard among no-code tools.',
          },
          {
            type: 'text',
            body: 'Framer has surged in popularity as a website builder for designers. It started as a prototyping tool and pivoted to production websites. Its strength: interactive animations and micro-interactions that would take custom JavaScript to build elsewhere. Framer also has deep Figma integration \u2014 you can import Figma components and turn them into live website sections. For portfolio sites, product launch pages, and design-forward marketing sites, Framer produces results that look custom-coded. The trade-off: Framer\'s CMS is less mature than Webflow\'s, and complex multi-page sites are harder to manage.',
          },
          {
            type: 'text',
            body: 'Carrd is the simplest tool in this category. It builds single-page websites \u2014 one scrollable page with sections. That\'s it. No CMS, no multi-page navigation, no blog. And that\'s exactly why it works. A huge percentage of websites only need one page: startup landing pages, personal portfolios, link-in-bio pages, event pages, waitlist pages. Carrd does this in 30 minutes for $19/year. If your website is essentially "one page that explains something and has a call-to-action button," Carrd is absurdly cost-effective.',
          },
          {
            type: 'text',
            body: 'When should you still use code? When your website IS the product (a web app, not a marketing site). When you need complex interactivity beyond animations (user dashboards, real-time features, personalization). When you need server-side rendering for advanced SEO requirements. And when performance must be absolutely optimized \u2014 custom-coded sites with static generation (Next.js, Astro) will always outperform visual builders on raw speed. But for 80% of "I need a website" situations, one of these three tools will get you live faster and cheaper than coding.',
          },
          {
            type: 'decision-tree',
            config: {
              question: 'What kind of website do you need?',
              options: [
                {
                  label: 'Marketing site or company website',
                  next: {
                    question: 'Do you need a blog or content management?',
                    options: [
                      { label: 'Yes \u2014 blog, portfolio, or content-heavy pages', result: 'Webflow \u2014 best CMS among website builders. Define content types, create templates, and let editors manage content without touching the design.' },
                      { label: 'No \u2014 just a polished marketing site', result: 'Webflow or Framer \u2014 Webflow for maximum layout control, Framer for interactive animations and design-forward pages.' },
                    ],
                  },
                },
                {
                  label: 'Single-page landing or portfolio',
                  next: {
                    question: 'How important are animations and design flair?',
                    options: [
                      { label: 'Clean and simple is fine', result: 'Carrd \u2014 live in 30 minutes, $19/year. The fastest and cheapest option for single-page sites.' },
                      { label: 'Need impressive animations and interactions', result: 'Framer \u2014 built for interactive, animated single-page experiences that look custom-coded.' },
                    ],
                  },
                },
                {
                  label: 'A web application (dashboards, user accounts, complex features)',
                  next: {
                    question: 'Does it need custom business logic?',
                    options: [
                      { label: 'Yes \u2014 complex features and interactions', result: 'This isn\'t a website builder problem. Use Bubble (no-code) or AI-assisted code (Cursor/Claude) for web applications with custom logic.' },
                      { label: 'Mostly content display with simple forms', result: 'Webflow with third-party integrations (Memberstack for auth, Airtable for data) can stretch surprisingly far before you need code.' },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Webflow', definition: 'A professional visual website builder that maps directly to HTML/CSS. Includes a CMS for content management, responsive design tools, and hosting. Produces clean, fast-loading code. The gold standard for no-code marketing sites.' },
              { term: 'Framer', definition: 'A design-forward website builder known for interactive animations and Figma integration. Best for portfolio sites, product launches, and pages that need to impress visually.' },
              { term: 'Carrd', definition: 'A minimalist single-page website builder. Builds one-page sites (landing pages, portfolios, link-in-bio) in under an hour for $19/year. The simplest and cheapest option for simple sites.' },
              { term: 'CMS', definition: 'Content Management System \u2014 a tool that lets non-technical users create and manage website content (blog posts, products, team members) without touching the design or code. Webflow and WordPress both include a CMS.' },
              { term: 'Landing Page', definition: 'A single web page designed to convert visitors into leads or customers. Usually focused on one product, one message, and one call-to-action (sign up, buy, subscribe). The most common first website for startups.' },
              { term: 'Template', definition: 'A pre-designed website layout you customize with your own content, colors, and images. Templates dramatically speed up website creation. All three builders offer templates as starting points.' },
              { term: 'Custom Domain', definition: 'Using your own domain name (yourcompany.com) instead of the builder\'s default URL (yoursite.webflow.io). All website builders support custom domains on paid plans.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why do many Y Combinator startups launch their landing pages on Webflow before writing any product code?',
              options: ['Webflow is the only website builder that supports custom domains', 'A landing page validates demand and collects signups before investing months in product development', 'Webflow is required by Y Combinator\'s program', 'Custom-coded sites always take longer than 6 months to build'],
              correct: 1,
              explanation: 'The website IS the first product. A Webflow landing page can validate whether anyone cares about your idea in days, not months. Collect email signups, measure traffic, test messaging \u2014 all before writing a line of product code. This is lean startup methodology applied to web development.',
            },
            {
              question: 'Which website builder is the best choice for a single-page "coming soon" page with an email signup form?',
              options: ['Webflow \u2014 most powerful visual builder', 'Framer \u2014 best for animations', 'Carrd \u2014 single-page sites in 30 minutes for $19/year', 'WordPress \u2014 the industry standard'],
              correct: 2,
              explanation: 'Carrd is purpose-built for exactly this: simple, single-page sites. A "coming soon" page with an email form is Carrd\'s sweet spot. Using Webflow or Framer for this would be like driving a truck to the corner store \u2014 it works, but it\'s overkill.',
            },
          ],
        },
        takeaway: 'Modern website builders (Webflow for content-rich sites, Framer for design-forward pages, Carrd for simple landing pages) have replaced WordPress for most use cases \u2014 the website is often the first product, so launch it fast and validate before coding anything.',
      },
      {
        id: '6.6',
        title: 'Data Apps \u2014 Streamlit and Gradio',
        estimatedMinutes: 14,
        hook: 'You\'ve built a Python script that analyzes sales data and produces charts. Your manager wants to see it. Do you email a PDF? Schedule a screen share? What about next week when the data changes? Data apps solve this: with Streamlit or Gradio, you wrap your Python script in an interactive web interface in under 50 lines of code. Sliders, dropdowns, charts, tables \u2014 all controlled by the person viewing it. Data scientists use Streamlit to share analysis with non-technical colleagues. AI researchers use Gradio to demo models to the world. If you write Python and need others to interact with your work, these tools are transformational.',
        analogy: {
          front: 'Think of Streamlit and Gradio as picture frames for your Python work. Your analysis or model is a painting. Without a frame (web interface), you\'d have to hold it up and describe it to everyone individually. The frame lets you hang it on a wall (the web) where anyone can walk by and see it. Streamlit is an elegant gallery frame \u2014 beautiful, versatile, good for any art. Gradio is a display case with buttons \u2014 specifically designed for interactive exhibits.',
          back: 'Streamlit converts Python scripts into interactive web dashboards. You write Python with Streamlit commands (st.slider, st.chart, st.dataframe) and it renders a web app. Best for data exploration, dashboards, and analysis tools. Gradio creates web interfaces specifically for ML models: input goes in (text, image, audio), output comes out. Best for AI demos and model testing. Both deploy with one command.',
        },
        content: [
          {
            type: 'text',
            body: 'Streamlit turns Python scripts into interactive web apps with almost no extra effort. You write normal Python code, and wherever you want user interaction, you add Streamlit widgets: st.slider() for numeric inputs, st.selectbox() for dropdowns, st.file_uploader() for file inputs, st.dataframe() for interactive tables, st.line_chart() for visualizations. The entire script re-runs every time a user interacts with a widget, recalculating everything with the new inputs. This "reactive" model means you don\'t need to manage state or write callbacks \u2014 just write top-to-bottom Python and Streamlit handles the rest.',
          },
          {
            type: 'text',
            body: 'Gradio is purpose-built for machine learning demos. Its core abstraction is input \u2192 function \u2192 output. You define what goes in (text box, image upload, audio recorder, slider), what your function does (run an ML model, process data), and what comes out (text, image, chart, label). Gradio generates a polished web interface automatically. This makes it the go-to tool for AI researchers sharing models: Hugging Face\'s entire Spaces platform runs on Gradio. If you\'re building an AI product and want to demo your model to stakeholders, investors, or users, Gradio gets you from Python function to shareable web demo in under 10 lines of code.',
          },
          {
            type: 'text',
            body: 'When should you choose each? Streamlit is the right choice for data dashboards, analysis tools, reporting interfaces, and any app where users explore data through filters, charts, and tables. It\'s a general-purpose data app framework. Gradio is the right choice for ML model demos, AI tools, and any interface that follows the input-process-output pattern. There\'s overlap \u2014 you can build a model demo in Streamlit or a dashboard in Gradio \u2014 but each tool excels in its lane. Deployment is easy for both: Streamlit offers free hosting on Streamlit Community Cloud, and Gradio deploys free on Hugging Face Spaces.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                {
                  label: 'Streamlit \u2014 Sales Dashboard',
                  code: 'import streamlit as st\nimport pandas as pd\n\nst.title("Sales Dashboard")\n\n# File upload\ndata = st.file_uploader("Upload CSV")\nif data:\n    df = pd.read_csv(data)\n    \n    # Interactive filters\n    region = st.selectbox("Region", df["region"].unique())\n    min_sales = st.slider("Minimum Sales", 0, 10000, 1000)\n    \n    # Filter and display\n    filtered = df[(df["region"] == region) & (df["sales"] >= min_sales)]\n    st.dataframe(filtered)\n    st.line_chart(filtered.set_index("date")["sales"])\n    st.metric("Total Sales", f"${filtered[\'sales\'].sum():,.0f}")',
                },
                {
                  label: 'Gradio \u2014 AI Sentiment Analyzer',
                  code: 'import gradio as gr\nfrom transformers import pipeline\n\n# Load model once\nclassifier = pipeline("sentiment-analysis")\n\ndef analyze(text):\n    result = classifier(text)[0]\n    return f"{result[\'label\']} ({result[\'score\']:.1%})"\n\n# Create interface: text in, label out\ndemo = gr.Interface(\n    fn=analyze,\n    inputs=gr.Textbox(label="Enter text to analyze"),\n    outputs=gr.Textbox(label="Sentiment"),\n    title="Sentiment Analyzer",\n    examples=["I love this product!", "Terrible service."]\n)\n\ndemo.launch()',
                },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Both Streamlit and Gradio are "low-code" rather than "no-code" \u2014 they require Python. But they eliminate the web development part entirely. You don\'t need to know HTML, CSS, JavaScript, React, or any frontend framework. If you can write Python, you can build interactive web apps.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Streamlit', definition: 'A Python framework that turns scripts into interactive web dashboards. Add widgets (sliders, dropdowns, charts) with simple commands. The script re-runs reactively when users interact. Free hosting on Streamlit Community Cloud.' },
              { term: 'Gradio', definition: 'A Python framework for building web interfaces for ML models. Define inputs, a function, and outputs \u2014 Gradio generates the UI. Free hosting on Hugging Face Spaces. The standard tool for AI model demos.' },
              { term: 'Data App', definition: 'A web application designed for data exploration and interaction. Users filter data, adjust parameters, and see results update in real time. Streamlit and Gradio are the two leading frameworks.' },
              { term: 'Dashboard', definition: 'A visual display of key metrics and data, typically with charts, tables, and summary numbers. Dashboards answer "what is happening right now?" at a glance.' },
              { term: 'Interactive Widget', definition: 'A UI element that accepts user input: sliders, dropdowns, text fields, checkboxes, file uploaders. In Streamlit, each widget returns a Python value you use in your calculations.' },
              { term: 'Demo Deployment', definition: 'Publishing a model or analysis as an interactive web app that others can use. Streamlit Community Cloud and Hugging Face Spaces provide free hosting for data apps and ML demos.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the core difference between Streamlit and Gradio?',
              options: ['Streamlit is free and Gradio is paid', 'Streamlit is best for general data dashboards; Gradio is purpose-built for ML model demos with an input-process-output pattern', 'Streamlit requires JavaScript and Gradio requires Python', 'There is no meaningful difference \u2014 they are interchangeable'],
              correct: 1,
              explanation: 'While there\'s overlap, each tool has a clear strength. Streamlit shines for data dashboards, exploratory analysis, and reporting tools with filters, charts, and tables. Gradio shines for ML model demos where the pattern is: user provides input, model processes it, user sees output. Choose based on whether your app is data exploration or model interaction.',
            },
            {
              question: 'What technical skill do Streamlit and Gradio require?',
              options: ['HTML, CSS, and JavaScript', 'Python only \u2014 no web development knowledge needed', 'React and Node.js', 'No technical skills at all \u2014 they are fully no-code'],
              correct: 1,
              explanation: 'Both Streamlit and Gradio are Python frameworks. You write Python code with their specific commands (st.slider(), gr.Interface()), and they handle all web rendering, layout, and interactivity. You never touch HTML, CSS, or JavaScript. This makes them "low-code" \u2014 some code required, but far less than building a web app from scratch.',
            },
          ],
        },
        takeaway: 'Streamlit and Gradio let Python developers share interactive analysis and AI models as web apps without any web development skills \u2014 Streamlit for data dashboards, Gradio for ML demos, both deployable for free.',
      },
      {
        id: '6.7',
        title: 'Airtable, Notion, and the Spreadsheet-App Hybrids',
        estimatedMinutes: 14,
        hook: 'What if I told you that many startups run their entire business on a spreadsheet with superpowers? Not Google Sheets \u2014 something more structured, more powerful, and with a real API. Airtable, Notion, and Coda sit in a fascinating middle ground between spreadsheets and custom software. They look familiar enough that non-technical people can use them immediately, but they have relational databases, automations, and API access under the hood. Some companies run CRMs, project management, inventory tracking, and even customer portals on these tools \u2014 and they never need anything more.',
        analogy: {
          front: 'A regular spreadsheet is like a notepad: flexible, freeform, great for quick notes, but terrible for structured information. A custom database application is like a filing cabinet with labeled folders and strict rules about what goes where. Airtable, Notion, and Coda are like a smart binder: organized sections, tabs for different views, easy to reorganize, but you can still scribble notes in the margins.',
          back: 'Google Sheets stores data in a flat grid with no structure \u2014 columns can mean anything, relationships between tables require clunky formulas. Custom databases (PostgreSQL) enforce strict schemas but require SQL knowledge. Airtable, Notion, and Coda give you relational data (linked records, lookup fields) with a spreadsheet-like interface. Non-technical users get structure and relationships. Technical users get APIs and automations.',
        },
        content: [
          {
            type: 'text',
            body: 'Airtable is a relational database disguised as a spreadsheet. Each "base" contains tables (like sheets), but tables can be linked together: your Customers table links to your Orders table, your Orders link to your Products table. Change a customer\'s name, and it updates everywhere that customer is referenced. This is what databases have done for decades, but Airtable makes it accessible to anyone who\'s used a spreadsheet. Beyond linked records, Airtable offers multiple views of the same data (grid, calendar, kanban, gallery, gantt chart), filtering and grouping, automations (when a record is created, send an email), and a full REST API so developers can read and write data programmatically.',
          },
          {
            type: 'text',
            body: 'Notion is a different animal. It\'s a workspace that combines documents, wikis, databases, and project management in one tool. While Airtable is "spreadsheet that became a database," Notion is "document editor that learned databases." Notion\'s databases are powerful (linked records, rollups, formulas, multiple views), but they\'re embedded within a rich document system. This makes Notion ideal for teams that need knowledge management alongside data: company wikis with embedded task databases, meeting notes linked to project trackers, documentation alongside roadmaps. The trade-off: Notion\'s database features are less mature than Airtable\'s, and its API, while capable, is newer and less documented.',
          },
          {
            type: 'text',
            body: 'Coda is the formula-heavy option. It feels like a document but thinks like a spreadsheet. Coda\'s formulas are more powerful than Notion\'s, with a programming-like formula language that can manipulate data, trigger automations, and even build interactive buttons. Coda is best for teams that want a single tool to replace Google Docs, Google Sheets, and a project management app. The downside: the learning curve is steeper, and the community is smaller than Airtable or Notion.',
          },
          {
            type: 'text',
            body: 'The strategic question: when do you use these tools versus building something custom? Use Airtable/Notion/Coda when: your data is relatively simple (under 100,000 records), your users are internal team members, you need flexibility to change the structure frequently, and development speed matters more than performance. Build custom when: you have complex business logic beyond what automations can handle, you need to scale beyond the platform\'s limits (Airtable caps at 100,000 records per table on paid plans), or you need custom user interfaces for external customers. Many companies start on Airtable and only migrate to custom software when the data or complexity outgrows the platform.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each business need to the most appropriate spreadsheet-app hybrid.',
              pairs: [
                { left: 'Sales CRM tracking leads, deals, and companies with linked records', right: 'Airtable \u2014 strongest relational database features, multiple views, CRM templates available' },
                { left: 'Company knowledge base with embedded project trackers', right: 'Notion \u2014 best combination of documents, wikis, and databases in one workspace' },
                { left: 'Inventory management with complex calculated fields and automations', right: 'Airtable \u2014 robust formulas, automations, and Zapier/Make integrations for inventory workflows' },
                { left: 'Team workspace replacing Google Docs + Sheets + Asana', right: 'Coda \u2014 designed to be the single doc that replaces multiple tools with powerful formulas' },
                { left: 'Simple project management with kanban boards and document links', right: 'Notion \u2014 kanban views, rich document integration, and clean team collaboration' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Airtable', definition: 'A relational database with a spreadsheet interface. Tables link together, data has multiple views (grid, kanban, calendar, gallery), includes automations and a REST API. The most powerful spreadsheet-database hybrid.' },
              { term: 'Notion', definition: 'An all-in-one workspace combining documents, wikis, databases, and project management. Databases are embedded within rich documents. Best for teams needing knowledge management alongside data.' },
              { term: 'Coda', definition: 'A document-first workspace with powerful formula capabilities. Combines docs, spreadsheets, and apps into a single surface. Steepest learning curve, most formula power among the three.' },
              { term: 'Relational Spreadsheet', definition: 'A spreadsheet where tables can reference each other through linked records. Changing data in one table automatically updates everywhere it\'s referenced. This is the core feature that separates Airtable from Google Sheets.' },
              { term: 'View', definition: 'A different visual presentation of the same data. The same Airtable table can be displayed as a grid, kanban board, calendar, gallery, or Gantt chart. The underlying data is identical \u2014 only the presentation changes.' },
              { term: 'Automation', definition: 'A rule that triggers actions automatically. "When a record is created in the Leads table, send a welcome email and create a task in the Tasks table." Airtable, Notion, and Coda all support built-in automations.' },
              { term: 'API Access', definition: 'The ability to read and write data programmatically through HTTP requests. Airtable\'s REST API lets developers build custom interfaces, integrations, and automations on top of Airtable data.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the key feature that separates Airtable from a regular spreadsheet like Google Sheets?',
              options: ['Better formatting and colors', 'Relational data \u2014 tables can link together, and changes propagate automatically across linked records', 'More rows and columns', 'Built-in AI features'],
              correct: 1,
              explanation: 'Airtable\'s core innovation is bringing relational database concepts (linked records, foreign keys) into a spreadsheet interface. In Google Sheets, relating data between tabs requires fragile VLOOKUP formulas. In Airtable, you click to link records, and relationships are maintained automatically. This is what databases have done for decades, made accessible to non-technical users.',
            },
            {
              question: 'When should a team migrate from Airtable to custom software?',
              options: ['Immediately \u2014 Airtable is only for prototyping', 'When they exceed platform limits (100K records), need complex business logic, or need custom user interfaces for external customers', 'Never \u2014 Airtable can handle any scale', 'As soon as they hire their first engineer'],
              correct: 1,
              explanation: 'Airtable works surprisingly well for many businesses, but it has concrete ceilings: 100,000 records per table, limited custom logic, and interfaces designed for internal users. When data volume, business logic complexity, or the need for customer-facing interfaces exceeds these limits, it\'s time to build custom. Many companies operate on Airtable for years before hitting these ceilings.',
            },
          ],
        },
        takeaway: 'Airtable, Notion, and Coda give you the power of relational databases with the accessibility of spreadsheets \u2014 use them to run entire business operations, and only migrate to custom software when you genuinely outgrow the platform.',
      },
      {
        id: '6.8',
        title: 'Right-Size Your Solution',
        estimatedMinutes: 18,
        hook: 'This is the lesson that ties the entire chapter together. You\'ve learned about automation tools, no-code app builders, internal tool platforms, website builders, data apps, and spreadsheet-database hybrids. Now comes the hardest skill: choosing the right one. Over-engineering is the most common mistake builders make. A startup spends three months building a custom React app when a Bubble app would have launched in two weeks. A data scientist writes a Flask web app from scratch when Streamlit would have worked in an afternoon. The cheapest, fastest solution that actually solves the problem IS the right solution. There is no bonus for using harder tools.',
        analogy: {
          front: 'Choosing your tech approach is like choosing transportation for a trip. You wouldn\'t rent a helicopter to go to the grocery store, even though a helicopter is objectively "better" transportation. The right choice depends on the distance (project complexity), the cargo (data and features), the budget (time and money), and the road conditions (your constraints).',
          back: 'A landing page (grocery run) needs Carrd or Webflow, not a custom Next.js app (helicopter). An internal dashboard (daily commute) needs Retool, not a custom React app (sports car). A novel consumer product (cross-country move) might actually need custom code (moving truck). Right-sizing means matching the tool to the job, not the job to the tool you want to use.',
        },
        content: [
          {
            type: 'text',
            body: 'The right-sizing framework comes down to four questions. First: who uses it? If the users are your internal team, you can tolerate less polish and use low-code tools (Retool, Airtable). If the users are paying customers, you need more control over the experience. Second: how custom is the interaction? Standard patterns (forms, tables, filters, CRUD) scream for no-code/low-code. Novel interactions (custom drag-and-drop, real-time collaboration, game-like mechanics) require code. Third: what\'s the timeline? If you need it this week, no-code. If you have months, code might make sense. Fourth: what\'s the scale? Under 10,000 users, most no-code tools handle it fine. At 100,000+ users, you\'ll likely need custom infrastructure.',
          },
          {
            type: 'text',
            body: 'Let\'s walk through real scenarios. Scenario 1: A freelance consultant wants a website to showcase services and collect leads. Answer: Carrd ($19/year) or Webflow (free tier). Building a custom site for this is like hiring a caterer for a sandwich. Scenario 2: A startup needs to test if people will pay for a meal planning app. Answer: Bubble. Build the MVP in 2-3 weeks, validate with real users, and only invest in custom code once you\'ve proven demand. Scenario 3: A data team needs to share weekly sales reports with executives. Answer: Streamlit. Wrap the existing Python analysis in widgets, deploy in an afternoon.',
          },
          {
            type: 'text',
            body: 'Scenario 4: A company needs a customer support dashboard showing user details from PostgreSQL. Answer: Retool. Connect the database, drag in a table and detail view, add action buttons \u2014 done in a day. Scenario 5: A design agency wants a portfolio site with smooth animations. Answer: Framer. Purpose-built for this exact use case. Scenario 6: An AI startup needs to demo their language model to investors. Answer: Gradio. Model demo in 10 lines of Python, shareable link in minutes. Scenario 7: A small business needs to track inventory across three locations. Answer: Airtable. Linked tables for products and locations, multiple views, automations for low-stock alerts.',
          },
          {
            type: 'text',
            body: 'Scenario 8: A company wants to build the next Figma \u2014 a collaborative design tool with a custom canvas, real-time editing, and complex object manipulation. Answer: full custom code. There is no no-code tool that can produce a novel, performance-critical application with a custom interaction model. This IS the use case for raw engineering. But notice: only one of eight scenarios actually requires full custom code. That ratio is roughly accurate for the real world. Most software products can be built faster and cheaper with tools that already exist. The skill isn\'t building everything from scratch \u2014 it\'s knowing when not to.',
          },
          {
            type: 'callout',
            body: 'The biggest trap in building software is ego-driven engineering. Choosing a harder tool because it feels more "real" or "professional" is not engineering rigor \u2014 it\'s waste. The professional choice is the one that solves the problem with the least time, money, and complexity. Full stop.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Approach',
                  options: [
                    { name: 'No-Code', description: 'Visual builders, zero code. Fastest launch, limited customization. Best for validation and standard patterns.' },
                    { name: 'Low-Code', description: 'Visual builders with code snippets (JS/SQL). Balances speed and flexibility. Best for internal tools and data apps.' },
                    { name: 'AI-Assisted Code', description: 'Real code with AI generating most of it. Full flexibility, faster than manual coding. Best for custom products.' },
                    { name: 'Full Custom Code', description: 'Hand-written code, total control. Slowest development, highest ceiling. Only for novel or performance-critical products.' },
                  ],
                },
                {
                  name: 'Primary Tool',
                  options: [
                    { name: 'Bubble', description: 'Most powerful no-code web app builder. Complex logic, user auth, database, API integrations.' },
                    { name: 'Webflow', description: 'Visual website builder with CMS. Marketing sites, content-heavy pages, landing pages.' },
                    { name: 'Retool', description: 'Low-code internal tool builder. Admin panels, dashboards, data management. Connects to databases and APIs.' },
                    { name: 'Zapier / Make', description: 'Automation platforms. Connect apps with trigger-action workflows. No UI needed \u2014 just logic.' },
                    { name: 'Streamlit', description: 'Python framework for data dashboards. Interactive widgets, charts, tables. Free deployment.' },
                    { name: 'Cursor / Claude', description: 'AI-assisted code editors. Write real code with AI generating 60-80%. Full flexibility at higher speed.' },
                    { name: 'React / Next.js', description: 'Full custom frontend frameworks. Maximum control, performance, and customization. Slowest to build.' },
                  ],
                },
                {
                  name: 'Database',
                  options: [
                    { name: 'Airtable', description: 'Spreadsheet-database hybrid. Relational data, multiple views, automations, API. Up to 100K records per table.' },
                    { name: 'Notion', description: 'Workspace with embedded databases. Best when data lives alongside documentation and project management.' },
                    { name: 'Supabase', description: 'Open-source Firebase alternative with PostgreSQL. Auth, storage, realtime, and edge functions. Developer-friendly.' },
                    { name: 'Custom PostgreSQL', description: 'Full relational database. Unlimited scale and control. Requires SQL knowledge and server management.' },
                  ],
                },
                {
                  name: 'Timeline',
                  options: [
                    { name: '1 Day', description: 'Landing page (Carrd/Webflow), simple automation (Zapier), data dashboard (Streamlit), or Airtable-based workflow.' },
                    { name: '1 Week', description: 'Bubble MVP, Retool admin panel, Webflow marketing site with CMS, or Gradio AI demo.' },
                    { name: '1 Month', description: 'Complete Bubble app with complex logic, AI-assisted coded product, or polished Streamlit data platform.' },
                    { name: '3+ Months', description: 'Full custom-coded product with novel interactions, performance optimization, and production infrastructure.' },
                  ],
                },
              ],
            },
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the "right-sizing" principle for choosing tools?',
              options: ['Always use the most powerful tool available', 'The cheapest, fastest solution that solves the problem IS the right solution', 'Start with custom code and simplify later', 'Use whatever the largest tech companies use'],
              correct: 1,
              explanation: 'Right-sizing means matching the tool to the problem, not the other way around. A landing page doesn\'t need React. An admin panel doesn\'t need custom code. The professional choice minimizes time, cost, and complexity while still solving the actual problem.',
            },
            {
              question: 'A startup founder has validated their idea with a Bubble MVP and now has 50,000 users. Performance is getting sluggish and they need custom features Bubble can\'t support. What should they do?',
              options: ['Abandon Bubble immediately and rewrite everything in React', 'This is the right time to migrate to custom code \u2014 the product has proven demand and has outgrown the no-code platform', 'Stay on Bubble forever since migration is too risky', 'They should have built in code from the start'],
              correct: 1,
              explanation: 'This is exactly how the spectrum works in practice. The founder used Bubble to validate fast (correct), grew to a point where the platform\'s ceilings became blockers (expected), and now has the revenue and data to justify the investment in custom code. They saved months and thousands of dollars by NOT building in code from day one.',
            },
            {
              question: 'A data scientist wants to share an interactive sales analysis with their non-technical CEO. What\'s the best approach?',
              options: ['Build a React web app from scratch', 'Email a PDF report', 'Build a Streamlit dashboard and deploy it so the CEO can interact with it anytime', 'Create a PowerPoint presentation'],
              correct: 2,
              explanation: 'Streamlit is purpose-built for this exact scenario. Wrap the existing Python analysis in interactive widgets (date pickers, filters, charts), deploy for free on Streamlit Community Cloud, and send the CEO a link. Interactive, always up-to-date, and built in an afternoon. A React app would take weeks; a PDF is static and outdated immediately.',
            },
            {
              question: 'Which of these scenarios actually requires full custom code?',
              options: ['A company blog with CMS', 'A customer support dashboard pulling from PostgreSQL', 'A real-time collaborative design tool with custom canvas interactions', 'An internal inventory tracker for a 20-person team'],
              correct: 2,
              explanation: 'A collaborative design tool with a custom canvas requires novel interaction patterns (custom rendering, real-time collaboration, complex object manipulation) that no existing no-code or low-code tool can provide. The blog is a Webflow site, the dashboard is a Retool app, and the inventory tracker is an Airtable base. Only truly novel, performance-critical applications need full custom code.',
            },
            {
              question: 'What is the "biggest trap" in building software, according to the right-sizing principle?',
              options: ['Using no-code tools for everything', 'Ego-driven engineering \u2014 choosing harder tools because they feel more "real" or "professional" rather than because the problem demands it', 'Not learning to code at all', 'Spending too long on planning before building'],
              correct: 1,
              explanation: 'Ego-driven engineering is choosing React when Bubble works, building a custom dashboard when Retool does the job, or writing a web server when Streamlit covers the need. The professional move is always to minimize unnecessary complexity. Harder tools aren\'t better tools \u2014 they\'re just harder.',
            },
          ],
        },
        takeaway: 'Right-size every solution by asking: who uses it, how custom is the interaction, what\'s the timeline, and what\'s the scale \u2014 the cheapest and fastest tool that solves the problem is always the right choice, and over-engineering is the biggest trap in building.',
      },
    ],
  },
  {
    id: 7,
    title: 'Security, DevOps, and Production Readiness',
    subtitle: 'From "it works on my machine" to "it works for millions"',
    icon: 'Shield',
    lessons: [
      {
        id: '7.1',
        title: 'The 6 Security Rules That Prevent 90% of Hacks',
        estimatedMinutes: 15,
        hook: 'In 2022, a developer accidentally pushed an API key to a public GitHub repository. Within four minutes \u2014 not hours, minutes \u2014 automated bots found it and began draining the connected cloud account. The bill hit $45,000 before anyone noticed. Most security breaches don\'t happen because hackers are geniuses. They happen because developers skip basic rules. Here are the six non-negotiable rules that prevent the vast majority of real-world hacks.',
        analogy: {
          front: 'Think of security like locking up a restaurant at night. You wouldn\'t leave the cash register open, tape the alarm code to the front door, let anyone walk into the kitchen, or skip checking if the back door locks. Security isn\'t one big thing \u2014 it\'s a checklist of small, obvious things that most people just forget to do.',
          back: 'Cash register = your database (protect the valuable data). Alarm code on the door = hardcoded secrets in code (don\'t expose credentials). Kitchen access = authorization (not everyone gets in). Back door lock = HTTPS (encrypt everything in transit). Each rule is simple alone \u2014 together they stop 90% of attacks.',
        },
        content: [
          {
            type: 'text',
            body: 'Security feels intimidating because the news makes it sound like you need to be a cryptography expert to protect your app. You don\'t. The overwhelming majority of real-world breaches \u2014 the ones that make headlines and cost companies millions \u2014 come from developers ignoring a small set of basic rules. Not sophisticated zero-day exploits. Not nation-state hackers. Just forgotten API keys, unsanitized form inputs, and passwords stored in plain text. If you follow six rules, you\'ll be more secure than 90% of apps on the internet.',
          },
          {
            type: 'callout',
            body: 'Rule 1: Never put secrets in your code. API keys, database passwords, and tokens belong in environment variables (.env files), never in source code. Bots scan every public GitHub repository 24/7 looking for exposed keys. If you push a secret, assume it\'s compromised within minutes.',
          },
          {
            type: 'text',
            body: 'Rule 2: Never trust user input. Every form field, URL parameter, and API request body is a potential attack vector. Always validate and sanitize everything a user sends you. If your app expects an email address, verify it looks like an email before doing anything with it. If it expects a number, confirm it\'s actually a number. This single rule prevents SQL injection, cross-site scripting, and a dozen other common attacks.',
          },
          {
            type: 'text',
            body: 'Rule 3: HTTPS everywhere, no exceptions. HTTPS encrypts all data traveling between the user\'s browser and your server. Without it, anyone on the same WiFi network can read passwords, tokens, and personal data in plain text. Every modern hosting platform (Vercel, Netlify, Railway) gives you HTTPS for free \u2014 there is zero reason not to use it. Rule 4: Use established authentication \u2014 never build your own. Use Supabase Auth, Firebase Auth, Auth0, or NextAuth. These libraries handle password hashing, session management, token rotation, and dozens of edge cases you\'d never think of. Rolling your own auth is the single fastest way to introduce critical vulnerabilities.',
          },
          {
            type: 'text',
            body: 'Rule 5: Least privilege \u2014 give every user, service, and API key only the minimum permissions needed. Your frontend should never have a database admin key. Your read-only analytics service shouldn\'t have write access. If an attacker compromises one component, least privilege limits the blast radius. Rule 6: Keep dependencies updated. Open-source packages have known vulnerabilities that get published in public databases. Run npm audit regularly and update packages with known security issues. Attackers specifically target apps running outdated libraries because the exploits are well-documented and easy to execute.',
          },
          {
            type: 'spot-the-issue',
            config: {
              code: 'const stripe = require(\'stripe\')(\'sk_live_YOUR_KEY_HERE\');\n\napp.post(\'/search\', (req, res) => {\n  const query = req.body.query;\n  db.execute(`SELECT * FROM products WHERE name = \'${query}\'`);\n});\n\napp.get(\'/api/data\', (req, res) => {\n  // Serving over HTTP (no HTTPS)\n  res.json({ users: allUserData });\n});',
              issues: [
                { line: 1, hint: 'Look at the Stripe initialization \u2014 what\'s hardcoded?', explanation: 'The live Stripe secret key is hardcoded directly in source code. Anyone who sees this file has full access to your Stripe account and can process charges, issue refunds, or steal customer payment data. Use process.env.STRIPE_SECRET_KEY instead.' },
                { line: 5, hint: 'How is the user\'s search query being used in the database call?', explanation: 'The user\'s input is inserted directly into a SQL query without any sanitization or parameterization. An attacker could type something like \' OR 1=1 -- into the search box and retrieve your entire database. Use parameterized queries: db.execute(\'SELECT * FROM products WHERE name = $1\', [query]).' },
                { line: 9, hint: 'What protocol is this API serving data over?', explanation: 'Serving user data over plain HTTP means the data travels unencrypted. Anyone on the network can intercept and read it \u2014 including passwords, emails, and personal information. Always enforce HTTPS for every endpoint.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'OWASP', definition: 'Open Web Application Security Project \u2014 a nonprofit that publishes the OWASP Top 10, the industry-standard list of the most critical web application security risks. Updated every few years.' },
              { term: 'Input Validation', definition: 'Checking that data from users matches expected formats before processing it. Rejects malformed, malicious, or unexpected input at the gate.' },
              { term: 'Least Privilege', definition: 'A security principle where every user, process, and service is given only the minimum permissions needed to do its job \u2014 nothing more.' },
              { term: 'Dependency Vulnerability', definition: 'A known security flaw in a third-party package your app uses. Public databases track these, and tools like npm audit detect them automatically.' },
              { term: 'Secret Management', definition: 'The practice of storing sensitive credentials (API keys, database passwords, tokens) securely in environment variables or secret vaults \u2014 never in source code.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A developer pushes code containing an API key to a public GitHub repository. How quickly can automated bots find and exploit it?',
              options: ['Within a few days', 'Within a few hours', 'Within minutes', 'It\'s safe as long as the repo has few stars'],
              correct: 2,
              explanation: 'Automated bots continuously scan every public GitHub push for patterns that look like API keys, database credentials, and tokens. Exposed secrets are typically discovered and exploited within minutes, not hours or days.',
            },
            {
              question: 'What is the safest way to handle user input in a database query?',
              options: ['Wrap it in quotes inside the SQL string', 'Use parameterized queries that separate data from the query structure', 'Check if the input contains the word "DROP" and reject it', 'Limit the input to 100 characters'],
              correct: 1,
              explanation: 'Parameterized queries (also called prepared statements) keep user data completely separate from SQL commands. The database engine treats parameters as data, never as executable code \u2014 making SQL injection impossible regardless of what the user types.',
            },
            {
              question: 'Why should you use Supabase Auth or Auth0 instead of building your own authentication system?',
              options: ['They\'re faster to set up', 'They handle password hashing, session management, token rotation, and hundreds of edge cases that are easy to get wrong', 'They\'re free', 'They look better on a resume'],
              correct: 1,
              explanation: 'Authentication has an enormous attack surface: password hashing algorithms, timing attacks, session fixation, token expiration, brute force protection, and more. Established auth libraries have been battle-tested by millions of users and security researchers. Building your own means rediscovering all of these problems yourself.',
            },
          ],
        },
        takeaway: 'Six rules prevent 90% of security breaches: keep secrets out of code, validate all user input, enforce HTTPS everywhere, use established auth libraries, apply least privilege permissions, and keep dependencies updated.',
      },
      {
        id: '7.2',
        title: 'Hashing, Encryption, and Keeping Secrets Secret',
        estimatedMinutes: 15,
        hook: 'When LinkedIn was breached in 2012, 6.5 million passwords were leaked. The reason it was catastrophic? They were hashed without salting \u2014 meaning attackers could crack most of them in hours using precomputed tables. If LinkedIn had added one simple step, those passwords would have been nearly useless to the attackers. Understanding the difference between hashing, encryption, and salting isn\'t just academic \u2014 it\'s the difference between a breach being an inconvenience and a disaster.',
        analogy: {
          front: 'Encryption is a lockbox with a key \u2014 you lock something inside, and anyone with the right key can unlock it and see the original. Hashing is a paper shredder \u2014 you feed a document in and get confetti out, but you can never reassemble the original document from the confetti. Salting is mixing a handful of random glitter into the document before shredding it, so even two identical documents produce completely different confetti.',
          back: 'Encryption = reversible with the right key (lockbox). Hashing = one-way transformation, irreversible (shredder). Salting = adding random data before hashing so identical inputs produce different outputs (glitter before shredding). Passwords should always be hashed + salted, never encrypted.',
        },
        content: [
          {
            type: 'text',
            body: 'There are two fundamentally different ways to protect data, and confusing them is one of the most common security mistakes. Encryption is two-way: you take readable data (plaintext), transform it into unreadable data (ciphertext) using a key, and later reverse the process with the same key (or a paired key) to get the original back. This is perfect for things you need to read later \u2014 credit card numbers, medical records, private messages. AES-256 is the gold standard encryption algorithm, used by banks and governments worldwide.',
          },
          {
            type: 'text',
            body: 'Hashing is one-way: you take input data, run it through a mathematical function, and get a fixed-length string of characters called a hash (also called a digest). The critical property is that you cannot reverse a hash back to the original input. The same input always produces the same hash, but even a tiny change in input produces a completely different hash. This is why passwords should be hashed, not encrypted. Your app never needs to know a user\'s actual password \u2014 it only needs to verify that what they typed produces the same hash as what\'s stored.',
          },
          {
            type: 'callout',
            body: 'Why hash passwords instead of encrypting them? If your database is breached and passwords are encrypted, the attacker just needs to find the encryption key (which is stored somewhere on your server) and they can decrypt every single password. If passwords are hashed, there\'s no key to find \u2014 the original passwords simply don\'t exist anywhere.',
          },
          {
            type: 'text',
            body: 'But hashing alone isn\'t enough. If two users both choose "password123" as their password, they\'ll have the exact same hash. Attackers exploit this with rainbow tables \u2014 precomputed databases of common passwords and their hashes. This is where salting comes in. A salt is a random string generated uniquely for each user and prepended to their password before hashing. So "password123" with salt "x7k9" produces a completely different hash than "password123" with salt "m2p4". Even identical passwords become unique. bcrypt, the industry standard for password hashing, automatically handles salting for you.',
          },
          {
            type: 'text',
            body: 'Data also needs protection in two states: at rest and in transit. At-rest encryption protects stored data \u2014 your database on disk, files in cloud storage, backups on hard drives. If someone physically steals a server or gains unauthorized access to storage, encrypted data is unreadable without the key. In-transit encryption (TLS/HTTPS) protects data as it travels across networks. When you log into your bank, TLS ensures your password travels as scrambled gibberish that only your bank\'s server can decode. Together, these two layers ensure data is protected whether it\'s sitting still or moving.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each security concept to its real-world analogy and correct use case.',
              pairs: [
                { left: 'Encryption (AES)', right: 'Lockbox with a key \u2014 protecting credit card numbers you need to read later' },
                { left: 'Hashing (bcrypt)', right: 'Paper shredder \u2014 storing passwords where you never need the original' },
                { left: 'Salting', right: 'Adding random glitter before shredding \u2014 making identical passwords produce different hashes' },
                { left: 'TLS/HTTPS', right: 'Armored truck in transit \u2014 encrypting data as it moves across the internet' },
                { left: 'At-rest encryption', right: 'Bank vault \u2014 encrypting data stored on disk so stolen servers are useless' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Encryption', definition: 'A two-way process that transforms readable data into unreadable ciphertext using a key. The original data can be recovered with the correct decryption key.' },
              { term: 'Hashing', definition: 'A one-way mathematical function that converts input of any size into a fixed-length string. Cannot be reversed. Same input always produces the same output.' },
              { term: 'Salt', definition: 'A random string added to input data before hashing, ensuring identical inputs produce different hashes. Generated uniquely per user/record.' },
              { term: 'bcrypt', definition: 'The industry-standard password hashing algorithm. Automatically handles salting and is intentionally slow to make brute-force attacks impractical.' },
              { term: 'AES', definition: 'Advanced Encryption Standard \u2014 the most widely used symmetric encryption algorithm. AES-256 (256-bit key) is considered unbreakable with current technology.' },
              { term: 'TLS', definition: 'Transport Layer Security \u2014 the encryption protocol behind HTTPS. Protects data in transit between browser and server. Successor to the older SSL protocol.' },
              { term: 'At-rest Encryption', definition: 'Encryption applied to stored data (databases, files, backups). Protects against physical theft or unauthorized access to storage systems.' },
              { term: 'In-transit Encryption', definition: 'Encryption applied to data moving across a network (HTTPS/TLS). Prevents eavesdropping, man-in-the-middle attacks, and data tampering during transmission.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should passwords be hashed instead of encrypted?',
              options: ['Hashing is faster than encryption', 'If the database is breached, there\'s no decryption key that can recover the original passwords', 'Encrypted passwords take up more storage space', 'Hashing is required by law in most countries'],
              correct: 1,
              explanation: 'Encryption is reversible \u2014 if an attacker finds the decryption key, they can recover every password in the database. Hashing is one-way, so even with full database access, the original passwords don\'t exist and can\'t be recovered.',
            },
            {
              question: 'What problem does salting solve?',
              options: ['It makes hashing faster', 'It prevents two users with the same password from having the same hash, defeating rainbow table attacks', 'It encrypts the hash for extra security', 'It compresses the hash to save storage'],
              correct: 1,
              explanation: 'Without salting, identical passwords produce identical hashes. Attackers precompute hashes for millions of common passwords (rainbow tables) and simply look up matches. Salting adds unique randomness to each password before hashing, making rainbow tables useless.',
            },
          ],
        },
        takeaway: 'Encryption is a lockbox (reversible with a key), hashing is a shredder (one-way, irreversible), and salting adds randomness so identical inputs produce different hashes \u2014 always hash and salt passwords with bcrypt, and encrypt sensitive data at rest and in transit.',
      },
      {
        id: '7.3',
        title: 'CORS, CSRF, XSS \u2014 The Alphabet Soup of Web Security',
        estimatedMinutes: 15,
        hook: 'In 2018, a vulnerability on British Airways\' website allowed attackers to inject a tiny script that silently copied every customer\'s credit card details as they typed them into the payment form. 380,000 customers were affected, and BA was fined \u00a3183 million. The attack type? Cross-site scripting \u2014 XSS. These three-letter acronyms sound intimidating, but they describe simple concepts that every builder needs to recognize. You don\'t need to become a security researcher. You need to know what these attacks do and how to tell your AI assistant to prevent them.',
        analogy: {
          front: 'Imagine a building with three types of security threats. XSS is someone sneaking a hidden camera into the lobby \u2014 it captures everything visitors do without them knowing. CSRF is someone forging your signature on a document while you\'re already logged into the building \u2014 the system thinks it\'s you. CORS is the security desk policy about which visitors from other buildings are allowed in.',
          back: 'XSS = injected malicious scripts that run in users\' browsers (hidden camera). CSRF = forged requests that exploit an active user session (forged signature). CORS = browser policy controlling which domains can make requests to your server (visitor policy). SQL Injection = smuggling commands into your database through form inputs.',
        },
        content: [
          {
            type: 'text',
            body: 'Cross-Site Scripting (XSS) is the most common web vulnerability in the world. It happens when an attacker injects malicious JavaScript into your website that then runs in other users\' browsers. Imagine a comment section where someone posts a comment containing a hidden script tag. If your app displays that comment without sanitizing it, the script executes in every visitor\'s browser \u2014 stealing cookies, redirecting users, or capturing keystrokes. The fix is straightforward: never render raw user input as HTML. Always sanitize or escape user-generated content before displaying it. Modern frameworks like React do this automatically for most cases, which is one reason they\'re recommended.',
          },
          {
            type: 'text',
            body: 'Cross-Site Request Forgery (CSRF) tricks a user\'s browser into making requests to your app while the user is already authenticated. Here\'s how it works: you\'re logged into your bank. You visit a malicious website in another tab. That site contains a hidden form that automatically submits a transfer request to your bank \u2014 and because your browser automatically includes your bank\'s session cookie with every request to that domain, the bank thinks it\'s you. The fix is CSRF tokens \u2014 a unique, unpredictable token embedded in every form that the server verifies before processing the request. A malicious site can\'t know or guess this token.',
          },
          {
            type: 'text',
            body: 'Cross-Origin Resource Sharing (CORS) isn\'t an attack \u2014 it\'s a defense mechanism built into browsers. By default, a web page on domain-a.com cannot make API requests to domain-b.com. This prevents malicious websites from making requests to your API on behalf of unsuspecting users. CORS headers tell the browser which external domains are allowed to make requests. If your React frontend is on app.com and your API is on api.app.com, you need to configure CORS to allow requests from app.com. Getting CORS wrong usually means your own app can\'t talk to your own API \u2014 frustrating but not dangerous. The errors show up as big red messages in your browser console.',
          },
          {
            type: 'text',
            body: 'SQL Injection is the oldest and most devastating attack on this list. It happens when user input is inserted directly into a database query without sanitization. If a login form sends the username directly into a query like SELECT * FROM users WHERE name = \'[user input]\', an attacker can type \' OR 1=1 -- and the query becomes SELECT * FROM users WHERE name = \'\' OR 1=1 --\' which returns every user in the database. The fix is always using parameterized queries, which every modern database library supports. Content Security Policy (CSP) headers add another layer by telling browsers which scripts, styles, and resources are allowed to load on your page \u2014 blocking injected scripts even if they somehow get through.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each vulnerability to what it does and how to prevent it.',
              pairs: [
                { left: 'XSS (Cross-Site Scripting)', right: 'Injects malicious scripts into your page \u2014 prevent by sanitizing all user-generated content' },
                { left: 'CSRF (Cross-Site Request Forgery)', right: 'Forges requests using an active session \u2014 prevent with CSRF tokens in forms' },
                { left: 'CORS (Cross-Origin Resource Sharing)', right: 'Browser policy blocking cross-domain requests \u2014 configure allowed origins on your server' },
                { left: 'SQL Injection', right: 'Smuggles database commands through form inputs \u2014 prevent with parameterized queries' },
                { left: 'Content Security Policy', right: 'HTTP header that restricts which scripts and resources can load \u2014 blocks injected scripts' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'XSS', definition: 'Cross-Site Scripting \u2014 an attack where malicious JavaScript is injected into a website and executed in other users\' browsers. The most common web vulnerability worldwide.' },
              { term: 'CSRF', definition: 'Cross-Site Request Forgery \u2014 an attack that tricks a user\'s browser into making authenticated requests to a target site without the user\'s knowledge.' },
              { term: 'CORS', definition: 'Cross-Origin Resource Sharing \u2014 a browser security mechanism that controls which external domains can make requests to your API. Configured via HTTP headers.' },
              { term: 'SQL Injection', definition: 'An attack where malicious SQL code is inserted through user input fields to manipulate or extract data from a database. Prevented by parameterized queries.' },
              { term: 'Content Security Policy', definition: 'An HTTP header that tells browsers which sources of scripts, styles, and media are trusted. Blocks execution of injected malicious scripts.' },
              { term: 'Sanitization', definition: 'The process of cleaning user input by removing or escaping potentially dangerous characters (like <script> tags) before storing or displaying it.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A user posts a comment containing <script>alert("hacked")</script> on your blog. If it runs in other visitors\' browsers, what type of attack is this?',
              options: ['CSRF', 'CORS violation', 'XSS (Cross-Site Scripting)', 'SQL Injection'],
              correct: 2,
              explanation: 'This is XSS \u2014 Cross-Site Scripting. Malicious JavaScript was injected through user input (a comment) and executed in other users\' browsers. The fix is sanitizing user input before rendering it as HTML.',
            },
            {
              question: 'Your React frontend on app.com can\'t fetch data from api.app.com and shows a red error in the browser console about "blocked by CORS policy." What needs to happen?',
              options: ['The frontend needs a CORS plugin', 'The API server needs to add CORS headers allowing requests from app.com', 'The user needs to disable browser security', 'The frontend needs to use a different HTTP method'],
              correct: 1,
              explanation: 'CORS is configured on the server side. The API at api.app.com needs to include headers (Access-Control-Allow-Origin) that explicitly permit requests from app.com. This is a server configuration, not a frontend fix.',
            },
            {
              question: 'An attacker types \' OR 1=1 -- into a login form and gains access to all user accounts. What type of vulnerability allowed this?',
              options: ['XSS', 'CSRF', 'CORS misconfiguration', 'SQL Injection'],
              correct: 3,
              explanation: 'SQL Injection occurs when user input is inserted directly into SQL queries without parameterization. The attacker\'s input modified the query logic to bypass authentication. Parameterized queries prevent this by treating user input as data, never as executable SQL.',
            },
          ],
        },
        takeaway: 'XSS injects scripts into your pages (sanitize user input), CSRF forges requests using active sessions (use CSRF tokens), CORS controls which domains can access your API (configure server headers), and SQL injection manipulates database queries (use parameterized queries).',
      },
      {
        id: '7.4',
        title: 'Git & GitHub \u2014 Your Code\'s Time Machine',
        estimatedMinutes: 15,
        hook: 'Every professional software team on the planet uses Git. Every open-source project you\'ve ever benefited from lives on GitHub. When something breaks at 2 AM, Git is what lets you rewind to the exact moment before the bug was introduced. When two developers change the same file, Git is what figures out how to combine their work. It\'s not optional \u2014 it\'s the foundation every other tool in this chapter builds on.',
        analogy: {
          front: 'Git is a video game save system for your code. Every commit is a save point \u2014 a snapshot of your entire project at that moment. Branching is creating a new save slot so you can try a risky strategy without losing your main progress. Merging is keeping the rewards from a side quest and bringing them back to your main game. Pushing is uploading your save to the cloud so it\'s backed up and your co-op partners can access it.',
          back: 'Commit = save point (snapshot of all files at a moment in time). Branch = new save slot (parallel version of your code). Merge = combine side quest with main game (integrate changes). Push = upload save to cloud (send to GitHub). Pull = download teammate\'s latest save. Repository = the entire save file collection.',
        },
        content: [
          {
            type: 'text',
            body: 'Git is a version control system \u2014 software that tracks every change ever made to your project. It was created by Linus Torvalds (who also created Linux) in 2005 because he needed something fast enough to manage the Linux kernel, which had thousands of contributors changing thousands of files simultaneously. A repository (or "repo") is a project folder tracked by Git. Every file, every change, every version is recorded. You could delete half your code, and Git could restore it from any point in history. This is why it\'s called a time machine.',
          },
          {
            type: 'text',
            body: 'The basic workflow has five steps you\'ll repeat hundreds of times. First, you make changes to your code \u2014 edit files, add features, fix bugs. Second, you stage those changes with git add, telling Git "these are the changes I want to save." Third, you commit with git commit, creating a permanent snapshot with a message describing what changed and why. Fourth, you push with git push, uploading your commits to GitHub (or another remote host) so they\'re backed up and accessible to your team. Fifth, when working with others, you pull with git pull to download their latest changes before starting your own work.',
          },
          {
            type: 'text',
            body: 'Branches are parallel versions of your code. The main branch (called "main" or "master") is the stable, production-ready version. When you want to add a feature or fix a bug, you create a new branch \u2014 a copy where you can experiment freely without affecting main. Once your feature works, you merge it back into main. Pull requests (PRs) on GitHub add a review step \u2014 before your branch merges, teammates can review your changes, leave comments, and approve or request changes. This is where code quality happens at scale.',
          },
          {
            type: 'callout',
            body: 'The .gitignore file tells Git which files to never track. Always include: .env (secrets), node_modules/ (dependencies, reinstallable), .DS_Store (Mac system files), dist/ or build/ (generated files). Forgetting to gitignore .env is one of the most common security mistakes \u2014 and once a secret is in Git history, removing it completely is extremely difficult.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The Git Workflow \u2014 From Code Change to Live App',
              steps: [
                { label: 'Write Code', detail: 'Make changes to your files \u2014 add features, fix bugs, update styling. These changes exist only on your local machine.' },
                { label: 'Stage Changes (git add)', detail: 'Select which changes you want to include in this save point. You can stage everything or just specific files.' },
                { label: 'Commit (git commit)', detail: 'Create a permanent snapshot with a descriptive message. Each commit has a unique ID and records exactly what changed.' },
                { label: 'Push to GitHub (git push)', detail: 'Upload your commits to the remote repository. Now they\'re backed up in the cloud and visible to your team.' },
                { label: 'Pull Request (optional)', detail: 'On GitHub, open a PR to propose merging your branch into main. Teammates review, discuss, and approve.' },
                { label: 'Auto-Deploy', detail: 'When code merges to main, platforms like Vercel and Netlify automatically build and deploy your app. Changes go live in seconds.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Repository (Repo)', definition: 'A project folder tracked by Git. Contains all files, all changes, and the complete history. Can be local (on your machine) or remote (on GitHub).' },
              { term: 'Commit', definition: 'A snapshot of your project at a specific point in time. Includes a unique hash ID, a message describing the changes, and a timestamp.' },
              { term: 'Branch', definition: 'A parallel version of your code. Allows multiple features or fixes to be developed simultaneously without interfering with each other.' },
              { term: 'Merge', definition: 'Combining changes from one branch into another. Integrates completed features or fixes back into the main codebase.' },
              { term: 'Pull Request (PR)', definition: 'A GitHub feature for proposing and reviewing changes before merging. Enables code review, discussion, and approval workflows.' },
              { term: 'Clone', definition: 'Creating a local copy of a remote repository. Downloads all files, branches, and history to your machine.' },
              { term: 'Fork', definition: 'Creating your own copy of someone else\'s repository on GitHub. Commonly used to propose changes to open-source projects.' },
              { term: '.gitignore', definition: 'A file that tells Git which files and folders to never track. Used for secrets (.env), dependencies (node_modules), and generated files.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'You\'ve been working on a new feature for two days and realize it\'s fundamentally broken. What Git concept lets you safely abandon this work without losing your stable code?',
              options: ['Commit \u2014 save the broken code for later', 'Branch \u2014 your broken work is on a separate branch, so main is untouched', 'Push \u2014 upload it and let someone else fix it', 'Fork \u2014 copy the repository and start over'],
              correct: 1,
              explanation: 'Branches isolate experimental work from your stable main branch. If the feature branch doesn\'t work out, you simply delete it. The main branch was never affected.',
            },
            {
              question: 'What is the purpose of a Pull Request on GitHub?',
              options: ['To download code from GitHub to your local machine', 'To propose, review, and discuss changes before merging them into the main branch', 'To automatically fix merge conflicts', 'To deploy code to production'],
              correct: 1,
              explanation: 'Pull Requests are a code review and collaboration mechanism. They let teammates review proposed changes, leave feedback, request modifications, and approve merges \u2014 ensuring code quality before changes reach the main branch.',
            },
            {
              question: 'Which file should ALWAYS be in your .gitignore?',
              options: ['package.json', 'README.md', '.env (environment variables with secrets)', 'index.html'],
              correct: 2,
              explanation: 'The .env file contains secrets like API keys and database passwords. If committed to Git, these secrets become part of the permanent history and can be exposed if the repository is ever made public. Always gitignore .env files.',
            },
          ],
        },
        takeaway: 'Git tracks every change to your code as commits (save points), branches let you work on features without risking stable code, and GitHub adds collaboration through pull requests \u2014 always gitignore your .env file with secrets.',
      },
      {
        id: '7.5',
        title: 'Environments \u2014 Dev, Staging, Production',
        estimatedMinutes: 12,
        hook: 'In 2017, a developer at GitLab accidentally ran a database deletion command on the production server instead of the staging server. The result? Six hours of user data was permanently lost, and GitLab live-streamed their recovery effort to the entire internet. This is why your app should exist in three separate versions at all times \u2014 so that mistakes happen where they can\'t hurt real users.',
        analogy: {
          front: 'Think of environments like a restaurant testing a new menu item. The kitchen (development) is where the chef experiments freely \u2014 trying ingredients, making mistakes, tasting everything. The soft launch to staff (staging) tests the dish with a small audience under real conditions. The public menu (production) is what paying customers actually see and order. You would never serve an untested experimental dish to paying customers.',
          back: 'Development = chef\'s kitchen (experiment freely, break things). Staging = staff taste test (real conditions, limited audience). Production = public menu (paying customers, must be perfect). Environment variables change between environments \u2014 same code, different configuration.',
        },
        content: [
          {
            type: 'text',
            body: 'Every professional app exists in at least three versions simultaneously, running on different servers with different configurations. The development environment (often just "dev" or "local") runs on your own computer. This is your sandbox \u2014 you can break things, experiment with new features, and test wild ideas without consequences. The database is full of fake test data, API keys point to free sandbox accounts, and nothing is accessible to the public. You spend 90% of your building time here.',
          },
          {
            type: 'text',
            body: 'The staging environment is an exact replica of production, but not accessible to real users. It runs on a real server, uses a real (but separate) database, and processes real API calls \u2014 but with test data and test accounts. Staging is where you catch the bugs that only appear under production-like conditions: real network latency, real server memory limits, real database connection pools. Many platforms like Vercel create staging environments automatically for every pull request, calling them "preview deployments."',
          },
          {
            type: 'text',
            body: 'The production environment is the live version your real users interact with. Real data, real money, real consequences. Production should only receive code that has been tested in development and verified in staging. Direct edits to production are never acceptable \u2014 changes flow through the pipeline: dev \u2192 staging \u2192 production. Environment variables are the mechanism that makes this work. The same code runs in all three environments, but each environment has its own .env file with different values. In dev, DATABASE_URL points to your local SQLite database. In staging, it points to a test PostgreSQL server. In production, it points to the real thing.',
          },
          {
            type: 'callout',
            body: 'Feature flags let you deploy code to production without activating it for users. You wrap new features in if-statements that check a configuration flag. Deploy the code, test it internally with the flag on, then flip the flag for 1% of users, then 10%, then 100%. If something goes wrong, flip the flag off \u2014 instant rollback without deploying any code.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The Deployment Pipeline \u2014 From Your Laptop to Live Users',
              steps: [
                { label: 'Local Development', detail: 'Write and test code on your machine. Fake data, sandbox APIs, full freedom to experiment and break things.' },
                { label: 'Push to Feature Branch', detail: 'Commit your changes and push to GitHub. This triggers automated processes.' },
                { label: 'Preview / Staging Deploy', detail: 'Vercel or Netlify automatically creates a preview URL for your branch. Test under real server conditions with test data.' },
                { label: 'Code Review (Pull Request)', detail: 'Teammates review your changes on GitHub. Automated tests run. Issues are caught before merging.' },
                { label: 'Merge to Main Branch', detail: 'Approved changes merge into the main branch. This triggers the production deployment pipeline.' },
                { label: 'Production Deployment', detail: 'Your code goes live to real users. Monitoring tools watch for errors. Rollback is ready if needed.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Development Environment', definition: 'Your local machine where you write and test code. Uses fake data, sandbox API keys, and is accessible only to you. The experimentation zone.' },
              { term: 'Staging Environment', definition: 'A replica of production that isn\'t public. Uses real infrastructure but test data. Catches bugs that only appear under production-like conditions.' },
              { term: 'Production Environment', definition: 'The live version real users interact with. Real data, real transactions. Only receives thoroughly tested code.' },
              { term: 'Environment Variable', definition: 'A configuration value that changes per environment. Same code reads DATABASE_URL, but the actual value differs in dev, staging, and production.' },
              { term: 'Feature Flag', definition: 'A configuration toggle that enables or disables features without deploying code. Enables gradual rollouts and instant rollbacks.' },
              { term: 'Rollback', definition: 'Reverting to a previous working version of your application when a new deployment causes problems. Should take seconds, not hours.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Your app works perfectly on your laptop but crashes on the staging server. What is the most likely cause?',
              options: ['Your laptop is faster than the server', 'An environment variable is missing or configured differently on the staging server', 'The staging server uses a different programming language', 'Your code has a bug that only appears on Tuesdays'],
              correct: 1,
              explanation: 'The most common cause of "works locally but fails elsewhere" is environment configuration differences. A missing or misconfigured environment variable (database URL, API key, feature flag) causes the app to behave differently across environments.',
            },
            {
              question: 'What is the primary benefit of using feature flags?',
              options: ['They make code run faster', 'They let you deploy code to production without activating it for users, enabling gradual rollouts and instant rollbacks', 'They replace the need for staging environments', 'They automatically fix bugs in production'],
              correct: 1,
              explanation: 'Feature flags decouple deployment from release. You can deploy new code any time, but users only see it when you flip the flag. If something goes wrong, disable the flag instantly \u2014 no emergency re-deployment needed.',
            },
          ],
        },
        takeaway: 'Every app should exist in three environments \u2014 development (your sandbox), staging (production replica with test data), and production (real users) \u2014 with environment variables providing different configuration values to the same code in each.',
      },
      {
        id: '7.6',
        title: 'CI/CD \u2014 The Automated Assembly Line',
        estimatedMinutes: 15,
        hook: 'Before CI/CD, deploying a new version of an application was an event. Teams would pick a "deployment day" (usually Friday \u2014 terrible idea), one person would manually copy files to the server, cross their fingers, and hope nothing broke. Deployments took hours and regularly failed. Today, companies like Netflix deploy thousands of times per day, automatically, with zero downtime. The technology that made this possible is CI/CD \u2014 and it\'s available to every builder for free.',
        analogy: {
          front: 'CI/CD is a factory assembly line for your code. Every time a worker (developer) finishes a component, it goes onto the conveyor belt. First station: quality control inspectors check for defects (automated tests). Second station: the product is assembled (build step). Third station: it\'s packaged and shipped to the store (deployment). If QC finds a defect, the conveyor belt stops and the product goes back to the worker \u2014 it never reaches the store shelf.',
          back: 'Continuous Integration = QC inspection (automated tests run on every code push). Continuous Deployment = automated shipping (code that passes all checks is deployed automatically). Build step = assembly (converting source code into a runnable application). Pipeline = the entire conveyor belt from push to production.',
        },
        content: [
          {
            type: 'text',
            body: 'CI/CD stands for Continuous Integration and Continuous Deployment (sometimes Continuous Delivery). These are two linked practices that automate the path from code change to live application. Continuous Integration means that every time a developer pushes code, automated processes immediately run: linting checks code style, automated tests verify nothing is broken, and the build step compiles the application. If any step fails, the developer is notified immediately and the code doesn\'t proceed. This catches bugs within minutes of being introduced, rather than days or weeks later when they\'re harder to diagnose.',
          },
          {
            type: 'diagram',
            variant: 'cicd-pipeline',
          },
          {
            type: 'text',
            body: 'Continuous Deployment takes it one step further: code that passes all CI checks is automatically deployed to production without any manual intervention. This sounds scary, but it\'s actually safer than manual deployment because humans forget steps, click wrong buttons, and make mistakes under pressure. Automated pipelines execute the same steps perfectly every single time. Continuous Delivery is a slightly more cautious variant \u2014 code is automatically prepared for deployment, but a human clicks the final "deploy" button. Most teams start with Continuous Delivery and graduate to Continuous Deployment as their test suite grows more comprehensive.',
          },
          {
            type: 'callout',
            body: 'The easiest way to experience CI/CD: connect a GitHub repository to Vercel. Every push to any branch creates a preview deployment. Every merge to main deploys to production. Build fails? The old version stays live. This entire setup takes about two minutes and zero configuration files.',
          },
          {
            type: 'text',
            body: 'GitHub Actions is the most popular CI/CD tool for individual developers and small teams. It\'s built directly into GitHub and uses YAML configuration files to define pipelines. A typical pipeline has stages: first lint the code for style issues, then run the test suite, then build the application, then deploy. Each stage only runs if the previous one succeeds. Other CI/CD tools include GitLab CI, CircleCI, and Jenkins, but GitHub Actions dominates because it\'s free for public repositories and tightly integrated with the pull request workflow.',
          },
          {
            type: 'timeline',
            config: {
              title: 'A CI/CD Pipeline in Action',
              steps: [
                { label: 'Developer Pushes Code', detail: 'A developer commits changes and pushes to GitHub. This triggers the CI/CD pipeline automatically.' },
                { label: 'Lint Check', detail: 'Automated tools scan for code style issues, formatting problems, and common mistakes. Fails fast on obvious problems.' },
                { label: 'Run Test Suite', detail: 'Automated tests (unit, integration) verify that existing features still work and new code behaves correctly.' },
                { label: 'Build Application', detail: 'Source code is compiled into a deployable artifact \u2014 optimized JavaScript bundles, Docker images, or static files.' },
                { label: 'Deploy to Staging', detail: 'The built application is deployed to a staging environment for final verification under production-like conditions.' },
                { label: 'Deploy to Production', detail: 'After all checks pass, the application is deployed to the live production environment. Users see the new version.' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'CI (Continuous Integration)', definition: 'The practice of automatically running tests and checks every time code is pushed. Catches bugs immediately rather than during manual review.' },
              { term: 'CD (Continuous Deployment)', definition: 'Automatically deploying code to production after all CI checks pass. No manual steps between code push and live deployment.' },
              { term: 'Pipeline', definition: 'The sequence of automated steps code goes through from push to deployment: lint, test, build, deploy. Each step gates the next.' },
              { term: 'Build Step', definition: 'The process of transforming source code into a deployable artifact \u2014 minifying JavaScript, compiling TypeScript, optimizing images, generating static pages.' },
              { term: 'Test Suite', definition: 'The collection of all automated tests for a project. A comprehensive test suite is the foundation that makes safe automated deployment possible.' },
              { term: 'GitHub Actions', definition: 'GitHub\'s built-in CI/CD platform. Uses YAML files to define pipelines that run automatically on push, pull request, or schedule. Free for public repos.' },
              { term: 'Deploy Hook', definition: 'A URL or event trigger that initiates a deployment. Vercel and Netlify create deploy hooks automatically when connected to a GitHub repository.' },
              { term: 'Dependabot / Renovate', definition: 'Automated tools that scan your project dependencies for security vulnerabilities and outdated packages. They create pull requests with updates automatically. GitHub\'s Dependabot is built-in and free \u2014 enable it on every repository.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'A developer pushes code that breaks an existing feature. In a CI/CD pipeline, when is this discovered?',
              options: ['During the weekly code review meeting', 'Immediately \u2014 automated tests catch the regression and alert the developer within minutes', 'When users report the bug in production', 'During the next manual deployment attempt'],
              correct: 1,
              explanation: 'CI runs automated tests on every push. If the new code breaks an existing test, the pipeline fails immediately and the developer is notified. The broken code never reaches production.',
            },
            {
              question: 'What is the key difference between Continuous Delivery and Continuous Deployment?',
              options: ['Continuous Delivery is faster', 'In Continuous Delivery, a human approves the final deploy; in Continuous Deployment, it\'s fully automatic', 'Continuous Deployment doesn\'t run tests', 'They are the same thing with different names'],
              correct: 1,
              explanation: 'Continuous Delivery automatically prepares code for deployment but requires human approval for the final step. Continuous Deployment removes even that manual step \u2014 code that passes all automated checks deploys to production automatically.',
            },
          ],
        },
        takeaway: 'CI/CD automates the path from code push to live deployment: Continuous Integration catches bugs instantly through automated tests, and Continuous Deployment ships verified code to production automatically \u2014 making deploys safe, fast, and repeatable.',
      },
      {
        id: '7.7',
        title: 'Docker \u2014 Ship Your App in a Box',
        estimatedMinutes: 15,
        hook: '"It works on my machine" is the most infamous phrase in software development. A developer writes code, tests it locally, ships it to the server \u2014 and it crashes. Different operating system, different library versions, different file paths, different everything. Docker was created to make this problem impossible. It packages your entire application \u2014 code, runtime, libraries, settings, and operating system \u2014 into a single portable unit that runs identically everywhere.',
        analogy: {
          front: 'Moving apartments without Docker is like packing everything into separate boxes and hoping you remember every item. Did I pack the spatula? Which box has the power cables? Is the TV compatible with the new wall mount? Moving with Docker is like picking up your entire kitchen, bathroom, and living room as complete sealed units and dropping them into the new apartment. Everything is exactly where it was, every cable is connected, and every appliance works immediately.',
          back: 'Container = sealed room unit (your app with all dependencies). Image = blueprint for the room (instructions to recreate the container). Dockerfile = the packing list (step-by-step instructions). Docker Compose = floor plan for multiple rooms (orchestrating multiple containers together). Registry = storage unit facility (where images are stored and shared).',
        },
        content: [
          {
            type: 'text',
            body: 'A Docker container is a lightweight, standalone, executable package that includes everything your application needs to run: the code itself, the programming language runtime (Node.js, Python), system libraries, environment variables, and configuration files. Unlike a virtual machine that simulates an entire computer with its own operating system, a container shares the host operating system\'s kernel and only packages the application layer. This makes containers startup in seconds (not minutes), use megabytes of memory (not gigabytes), and run efficiently at scale.',
          },
          {
            type: 'text',
            body: 'A Docker image is the blueprint for a container. It\'s created from a Dockerfile \u2014 a plain text file with step-by-step instructions for building the image. A typical Dockerfile says: start with a base image (like node:18), copy my code into the container, install dependencies (npm install), expose port 3000, and run the start command (npm start). Once built, an image is immutable \u2014 it never changes. You can create as many identical containers from a single image as you need.',
          },
          {
            type: 'text',
            body: 'Docker Compose is for running multiple containers together. A real application typically needs more than just your app code \u2014 it needs a database, maybe a cache server (Redis), maybe a background job processor. Docker Compose lets you define all of these services in a single docker-compose.yml file and start everything with one command: docker-compose up. The containers can communicate with each other over an internal network, and you can start, stop, and rebuild the entire stack in seconds.',
          },
          {
            type: 'callout',
            body: 'Honest truth: if you\'re deploying to Vercel, Netlify, or Railway, you probably don\'t need Docker. These platforms handle containerization behind the scenes. Docker becomes essential when you need a complex multi-service setup (app + database + cache + worker), when you\'re deploying to AWS/GCP, or when you need your development environment to exactly match production. Know it exists, understand the concepts, and use it when the situation demands it.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                {
                  label: 'Dockerfile',
                  code: '# Start with Node.js 18 base image\nFROM node:18-alpine\n\n# Set working directory inside container\nWORKDIR /app\n\n# Copy package files first (caching trick)\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy all source code\nCOPY . .\n\n# Expose port 3000\nEXPOSE 3000\n\n# Start the application\nCMD ["npm", "start"]',
                },
                {
                  label: 'docker-compose.yml',
                  code: 'version: "3.8"\nservices:\n  app:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - DATABASE_URL=postgres://db:5432/myapp\n    depends_on:\n      - db\n\n  db:\n    image: postgres:15\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_PASSWORD=secret\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:',
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Container', definition: 'A lightweight, isolated runtime environment that packages an application with all its dependencies. Starts in seconds, uses minimal resources, runs identically everywhere.' },
              { term: 'Docker', definition: 'The platform for building, shipping, and running containers. The de facto standard for containerization in the software industry.' },
              { term: 'Image', definition: 'An immutable blueprint for creating containers. Built from a Dockerfile. Can be stored in registries and shared across teams and environments.' },
              { term: 'Dockerfile', definition: 'A text file with instructions for building a Docker image. Specifies the base image, dependencies, code, configuration, and startup command.' },
              { term: 'Docker Compose', definition: 'A tool for defining and running multi-container applications. Uses a YAML file to configure services, networks, and volumes for an entire application stack.' },
              { term: 'Volume', definition: 'Persistent storage for containers. Since containers are ephemeral (data is lost when they stop), volumes keep data (like database files) alive across container restarts.' },
              { term: 'Registry', definition: 'A repository for Docker images. Docker Hub is the public default. AWS ECR, Google GCR, and GitHub Container Registry are private alternatives.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What problem does Docker primarily solve?',
              options: ['Making code run faster', 'Ensuring an application runs identically across every environment by packaging it with all dependencies', 'Replacing the need for a database', 'Automatically writing deployment scripts'],
              correct: 1,
              explanation: 'Docker\'s core value is eliminating "it works on my machine" problems. By packaging the application, runtime, libraries, and configuration into a single container, it guarantees identical behavior on every machine \u2014 from a developer\'s laptop to a production server.',
            },
            {
              question: 'When do you probably NOT need Docker?',
              options: ['When deploying a Next.js app to Vercel', 'When running multiple services (app + database + cache)', 'When deploying to AWS with custom infrastructure', 'When your dev and production environments need to match exactly'],
              correct: 0,
              explanation: 'Vercel handles containerization behind the scenes for you. Docker adds complexity that platforms like Vercel, Netlify, and Railway abstract away. Docker becomes essential for multi-service architectures, custom cloud deployments, or when you need exact environment parity.',
            },
          ],
        },
        takeaway: 'Docker packages your application with all its dependencies into a portable container that runs identically everywhere \u2014 use it for complex multi-service setups and custom cloud deployments, but platforms like Vercel handle it for you in simpler cases.',
      },
      {
        id: '7.8',
        title: 'Scaling \u2014 Handling 10 Users vs. 10 Million',
        estimatedMinutes: 15,
        hook: 'When Twitter was growing rapidly in 2008, it crashed so often during high-traffic events that users coined the term "Fail Whale" for its error page. The engineering team had to fundamentally redesign their architecture to handle the load. Here\'s the honest truth though: most apps you build will never face Twitter\'s scaling problems. But understanding the concepts prevents you from making architectural decisions early on that would make scaling impossible later \u2014 like building a road that can\'t be widened.',
        analogy: {
          front: 'Scaling is like handling a growing restaurant. Vertical scaling means buying a bigger kitchen with more powerful ovens \u2014 you can cook more, but eventually even the biggest kitchen hits its limit. Horizontal scaling means opening more restaurant locations \u2014 each one handles its own customers, and you can keep adding locations indefinitely. A load balancer is the host at the front door who sends groups to whichever location has the shortest wait.',
          back: 'Vertical scaling = bigger server (more CPU, RAM, storage). Horizontal scaling = more servers (distribute load across multiple machines). Load balancer = traffic director (routes requests to the least busy server). CDN = franchise locations for static content (images, CSS, JS cached globally). Caching = prep cook who pre-makes popular dishes (stores frequent query results).',
        },
        content: [
          {
            type: 'text',
            body: 'Scaling means handling more users, more data, and more requests without your app slowing down or crashing. There are two fundamental approaches. Vertical scaling (scaling up) means making your existing server more powerful \u2014 adding CPU cores, RAM, and faster storage. It\'s the simplest approach: no code changes needed, just upgrade the hardware. The limit is that there\'s a maximum size for any single server, and you still have a single point of failure. If that one supercharged server goes down, everything goes down.',
          },
          {
            type: 'text',
            body: 'Horizontal scaling (scaling out) means adding more servers and distributing the load across them. Instead of one powerful server handling everything, you have ten regular servers each handling a portion of the traffic. A load balancer sits in front of all your servers and routes each incoming request to the server with the most available capacity. This approach has no theoretical upper limit \u2014 need to handle more traffic? Add another server. Cloud platforms like AWS, Google Cloud, and Azure offer auto-scaling, which automatically adds and removes servers based on current demand. Your app scales up during Black Friday and scales down at 3 AM.',
          },
          {
            type: 'text',
            body: 'Caching is the single most effective scaling technique at any size. A cache stores the results of expensive operations (database queries, API calls, computations) so they can be served instantly on repeat requests. Instead of querying the database every time someone loads your homepage, cache the result for 60 seconds and serve all visitors the cached version. Redis is the most popular caching tool. CDNs are a form of caching too \u2014 they cache your static assets (images, CSS, JavaScript) on servers around the world. Connection pooling prevents your database from being overwhelmed by reusing existing database connections instead of opening a new one for every request.',
          },
          {
            type: 'callout',
            body: 'Premature optimization is the root of all evil \u2014 Donald Knuth. Most AI-built products will serve dozens to thousands of users, not millions. At that scale, a single server with basic caching handles everything effortlessly. Don\'t architect for Netflix on day one. Build simply, measure actual bottlenecks with real traffic, and scale only what needs scaling. The right order is: ship it, measure it, then optimize the slow parts.',
          },
          {
            type: 'text',
            body: 'Edge computing pushes your application logic closer to users by running code on servers distributed worldwide. Instead of every request traveling to a single data center in Virginia, it\'s handled by the nearest edge server \u2014 in Tokyo, London, or S\u00e3o Paulo. Vercel Edge Functions, Cloudflare Workers, and AWS Lambda@Edge all offer this capability. Edge is ideal for personalization (showing location-specific content), authentication checks, A/B testing, and API response caching. For latency-sensitive features like AI streaming or real-time dashboards, edge computing can cut response times by 50-200ms \u2014 a noticeable improvement in user experience.',
          },
          {
            type: 'decision-tree',
            config: {
              title: 'What\'s your scaling need?',
              start: 'q1',
              nodes: {
                q1: {
                  question: 'How many concurrent users do you expect?',
                  options: [
                    { label: 'Under 1,000 users', next: 'r1' },
                    { label: '1,000 \u2014 100,000 users', next: 'q2' },
                    { label: '100,000+ users', next: 'q3' },
                  ],
                },
                q2: {
                  question: 'Where is the bottleneck?',
                  options: [
                    { label: 'Database queries are slow', next: 'r2a' },
                    { label: 'Server response times are high', next: 'r2b' },
                    { label: 'Static assets load slowly globally', next: 'r2c' },
                  ],
                },
                q3: {
                  question: 'What type of scaling do you need?',
                  options: [
                    { label: 'Read-heavy (content, feeds, dashboards)', next: 'r3a' },
                    { label: 'Write-heavy (transactions, real-time data)', next: 'r3b' },
                  ],
                },
                r1: {
                  result: 'A single server is plenty. Focus on clean code and basic caching.',
                  detail: 'At under 1,000 users, a single Vercel/Railway deployment handles everything. Add Redis caching for frequently accessed data and use a CDN for static assets. Don\'t over-engineer \u2014 ship and iterate.',
                },
                r2a: {
                  result: 'Add caching and optimize database queries.',
                  detail: 'Use Redis to cache frequent query results. Add database indexes to slow queries. Implement connection pooling. Consider read replicas if queries are still bottlenecked.',
                },
                r2b: {
                  result: 'Vertical scale first, then horizontal with a load balancer.',
                  detail: 'Upgrade your server\'s CPU and RAM. If that\'s maxed out, add more server instances behind a load balancer. Auto-scaling on cloud platforms adjusts capacity automatically.',
                },
                r2c: {
                  result: 'Use a CDN to serve static content from edge servers globally.',
                  detail: 'Cloudflare, AWS CloudFront, or Vercel\'s built-in CDN cache your images, CSS, and JavaScript on servers worldwide. Users get content from the nearest location.',
                },
                r3a: {
                  result: 'Heavy caching + CDN + read replicas + horizontal scaling.',
                  detail: 'Cache aggressively at every layer. Use CDN for static content, Redis for dynamic data, database read replicas for query distribution, and auto-scaling server groups.',
                },
                r3b: {
                  result: 'Message queues + database sharding + specialized infrastructure.',
                  detail: 'Write-heavy workloads need message queues (RabbitMQ, Kafka) to buffer requests, database sharding to distribute writes, and potentially specialized databases for different workload types.',
                },
              },
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Vertical Scaling', definition: 'Making a single server more powerful by adding CPU, RAM, or storage. Simple but has an upper limit and single point of failure.' },
              { term: 'Horizontal Scaling', definition: 'Adding more servers to distribute load. No theoretical upper limit. Requires a load balancer to route traffic across instances.' },
              { term: 'Load Balancer', definition: 'A traffic director that distributes incoming requests across multiple servers based on availability and capacity. Prevents any single server from being overwhelmed.' },
              { term: 'Auto-scaling', definition: 'Cloud feature that automatically adds or removes server instances based on current demand. Scales up during traffic spikes, scales down during quiet periods.' },
              { term: 'Connection Pool', definition: 'A cache of reusable database connections. Instead of opening a new connection per request (expensive), requests share from a pool of existing connections.' },
              { term: 'Caching Layer', definition: 'An intermediate storage (like Redis) that keeps frequently accessed data in fast memory, reducing database load and response time dramatically.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'You have a single server handling 500 users fine, but response times spike during peak hours. What\'s the most appropriate first step?',
              options: ['Immediately switch to a microservices architecture', 'Add caching for frequently accessed data and optimize database queries', 'Rewrite the entire application in a faster programming language', 'Add 10 more servers behind a load balancer'],
              correct: 1,
              explanation: 'At 500 users, the bottleneck is almost certainly inefficient database queries or missing caches, not server capacity. Caching and query optimization are the cheapest, most effective first steps. Don\'t reach for complex solutions before exhausting simple ones.',
            },
            {
              question: 'What is the key advantage of horizontal scaling over vertical scaling?',
              options: ['It\'s always cheaper', 'It has no theoretical upper limit and eliminates single points of failure', 'It requires no code changes', 'It\'s simpler to implement'],
              correct: 1,
              explanation: 'Vertical scaling hits a ceiling \u2014 there\'s a maximum size for any single server. Horizontal scaling can add servers indefinitely and provides redundancy (if one server fails, others keep running). The trade-off is increased complexity in architecture and deployment.',
            },
          ],
        },
        takeaway: 'Vertical scaling makes one server bigger, horizontal scaling adds more servers behind a load balancer, and caching is the most effective technique at any scale \u2014 but don\'t optimize for millions of users on day one; ship first, measure bottlenecks, then scale what actually needs it.',
      },
      {
        id: '7.9',
        title: 'Testing \u2014 How to Know Things Actually Work',
        estimatedMinutes: 15,
        hook: 'In 1999, NASA lost the Mars Climate Orbiter \u2014 a $327 million spacecraft \u2014 because one team used metric units and another used imperial units, and nobody tested the interface between the two systems. The orbiter approached Mars at the wrong angle and disintegrated in the atmosphere. Testing isn\'t glamorous. Testing doesn\'t feel productive. But testing is the difference between software that works and software that works until it doesn\'t.',
        analogy: {
          front: 'Testing is like quality control in a car factory. A unit test checks each individual part \u2014 does this brake pad grip properly? An integration test checks that parts work together \u2014 does the brake pedal correctly activate the brake pads? An end-to-end test puts a test driver in the car and has them drive a full route \u2014 does everything work together for a real driver in real conditions?',
          back: 'Unit test = individual part inspection (tests a single function in isolation). Integration test = assembled component test (tests multiple parts working together). End-to-end (E2E) test = full test drive (simulates a real user performing real actions). Manual testing = human QA driver checking edge cases and "feel."',
        },
        content: [
          {
            type: 'text',
            body: 'There are four levels of testing, and each catches a different category of bugs. Unit tests are the foundation \u2014 they test individual functions or components in complete isolation. Does the calculateTotal function return the correct sum? Does the UserCard component render the right name? Unit tests are fast (thousands can run in seconds), easy to write, and pinpoint exactly where a bug lives. They\'re written using frameworks like Jest (JavaScript) or pytest (Python). Most codebases should have the highest volume of unit tests.',
          },
          {
            type: 'text',
            body: 'Integration tests verify that multiple components work correctly together. Your login form (frontend component) sends data to your auth endpoint (backend API) which checks credentials against the database. An integration test verifies this entire chain works \u2014 not just that each piece works in isolation. These tests catch the "handshake" bugs that unit tests miss: miscommunicated data formats, wrong API endpoints, database connection issues. They\'re slower than unit tests but catch an entirely different class of failures.',
          },
          {
            type: 'text',
            body: 'End-to-end (E2E) tests simulate a real user interacting with your complete application. A tool like Playwright or Cypress opens a real browser, clicks buttons, fills forms, navigates pages, and verifies that the right things happen. "User signs up, gets confirmation email, logs in, creates a project, and sees it on the dashboard" \u2014 that\'s an E2E test. These are the slowest and most fragile tests, but they catch the bugs that matter most: the ones your actual users would encounter.',
          },
          {
            type: 'callout',
            body: 'Practical testing strategy for AI-built products: Always manually test on both phone and desktop (responsive layouts break constantly). Always test edge cases: empty form submissions, extremely long inputs, special characters, slow network connections. Always have at least one other person try your app before launch \u2014 they\'ll immediately find things you missed because you\'re too familiar with your own product.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each testing type to what it verifies and when to use it.',
              pairs: [
                { left: 'Unit Test', right: 'Tests a single function or component in isolation \u2014 use for every piece of business logic' },
                { left: 'Integration Test', right: 'Tests multiple components working together \u2014 use for API endpoints, database operations, and service interactions' },
                { left: 'End-to-End (E2E) Test', right: 'Simulates a real user in a real browser \u2014 use for critical user flows like signup, checkout, and data entry' },
                { left: 'Manual Testing', right: 'Human testing on real devices \u2014 use for responsive layout checks, UX feel, and edge cases automation misses' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Unit Test', definition: 'A test that verifies a single function or component in isolation. Fast, precise, and the foundation of any test strategy. Written with Jest, pytest, or similar frameworks.' },
              { term: 'Integration Test', definition: 'A test that verifies multiple components work correctly together \u2014 API endpoints, database operations, service interactions. Catches "handshake" bugs.' },
              { term: 'E2E Test', definition: 'End-to-End test \u2014 simulates a real user interacting with the complete application in a real browser. Tools: Playwright, Cypress. Slowest but highest confidence.' },
              { term: 'Test Coverage', definition: 'The percentage of your codebase that is executed during testing. 80% coverage is a common target \u2014 100% is usually impractical and not worth the effort.' },
              { term: 'Edge Case', definition: 'An unusual or extreme input that tests the boundaries of your logic \u2014 empty strings, maximum values, special characters, network timeouts, concurrent requests.' },
              { term: 'Regression Test', definition: 'A test that verifies previously working features still work after changes. Prevents new code from accidentally breaking existing functionality.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Your calculateDiscount function works perfectly in isolation, but when integrated with the checkout flow, it returns wrong values. Which type of test would have caught this?',
              options: ['Unit test', 'Integration test', 'E2E test', 'Manual test'],
              correct: 1,
              explanation: 'Integration tests verify that components work correctly together. The function works in isolation (unit tests would pass), but the interaction between the discount function and the checkout flow has a bug \u2014 exactly what integration tests are designed to catch.',
            },
            {
              question: 'What is the most practical first testing step for an AI-built MVP?',
              options: ['Write 100% unit test coverage', 'Set up a full Playwright E2E test suite', 'Manually test on phone and desktop, test edge cases, and have another person try the app', 'Skip testing until you have users'],
              correct: 2,
              explanation: 'For an MVP, manual testing gives you the highest value for the least effort. Test on real devices, try unusual inputs, and get fresh eyes on the product. Automated tests become increasingly important as the app grows and the cost of regression bugs increases.',
            },
          ],
        },
        takeaway: 'Unit tests verify individual functions, integration tests verify components working together, and E2E tests simulate real users \u2014 for MVPs, start with thorough manual testing on multiple devices and edge cases, then add automated tests as the product grows.',
      },
      {
        id: '7.10',
        title: 'The Production Readiness Checklist',
        estimatedMinutes: 18,
        hook: 'You\'ve built your app. It works on your machine. It looks good. Features are done. So it\'s ready to launch, right? Not quite. The gap between "it works" and "it\'s ready for real users" is where most apps fail. A production-ready application doesn\'t just work \u2014 it works securely, fails gracefully, recovers automatically, and gives you visibility into what\'s happening. This lesson is your pre-flight checklist. No pilot takes off without one, and neither should you.',
        analogy: {
          front: 'Launching an app is like opening a restaurant. Having delicious food (working features) is necessary but not sufficient. You also need fire extinguishers (error handling), security cameras (monitoring), health inspections (security audit), trained staff who know what to do if the oven breaks (incident response), and a backup generator for power outages (rollback plan). The checklist ensures nothing is forgotten on opening day.',
          back: 'Working features = delicious food (necessary but not sufficient). Error handling = fire extinguishers (graceful failure). Monitoring = security cameras (visibility into what\'s happening). Security audit = health inspection (verify safety standards). Rollback plan = backup generator (recover from failures). The checklist = pre-flight inspection (systematic, nothing missed).',
        },
        content: [
          {
            type: 'text',
            body: 'Production readiness is a systematic evaluation across five domains: security, monitoring, testing, deployment, and data. Skipping any one of these domains doesn\'t mean your app won\'t launch \u2014 it means you\'re flying blind in that area, and when something goes wrong (and it will), you\'ll have no safety net. The good news: for most AI-built products, covering the basics in each domain takes hours, not weeks. You don\'t need enterprise-grade infrastructure. You need the essentials done right.',
          },
          {
            type: 'text',
            body: 'Security readiness means all secrets are in environment variables (never in code), all user input is validated and sanitized, authentication uses an established library (Supabase Auth, Auth0, NextAuth), HTTPS is enforced on every endpoint, and dependencies have been audited for known vulnerabilities (npm audit). If your app handles user data, you also need a privacy policy and should understand basic GDPR/CCPA requirements. Rate limiting on authentication endpoints prevents brute-force attacks.',
          },
          {
            type: 'text',
            body: 'Monitoring means you can see what\'s happening in production without relying on users to tell you. Error tracking (Sentry is the industry standard) automatically captures and alerts you when errors occur in production \u2014 with full stack traces, user context, and frequency data. Analytics (Plausible, PostHog, or Vercel Analytics) tell you how many people are using your app and what they\'re doing. Uptime monitoring (UptimeRobot, BetterUptime) pings your app every few minutes and alerts you if it goes down. Without monitoring, you\'re only finding out about problems when users complain \u2014 or worse, when they silently leave. Performance monitoring is equally critical: track Core Web Vitals (LCP, INP, CLS) to ensure your app loads fast and responds instantly. Slow apps lose 53% of mobile visitors if pages take more than 3 seconds to load.',
          },
          {
            type: 'text',
            body: 'Testing readiness means you\'ve manually tested all critical user flows on both mobile and desktop, tested edge cases (empty inputs, extremely long inputs, special characters, slow connections), verified all forms validate correctly, and had at least one person outside your development process try the app. Deployment readiness means CI/CD is configured, you\'ve tested the staging environment, you have a rollback plan if something goes wrong, and you know how to read your deployment logs. Data readiness means your database has a backup strategy, migrations work reliably, and you have seed data for new environments.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Security Checks',
                  options: [
                    { name: 'Secrets in environment variables', description: 'All API keys, database passwords, and tokens are stored in .env files and managed through your hosting platform\'s secret management \u2014 never hardcoded in source code.' },
                    { name: 'Input validation on all forms', description: 'Every form field validates format, length, and type. User input is sanitized before database storage or HTML rendering. Parameterized queries for all database calls.' },
                    { name: 'Authentication working and tested', description: 'Login, signup, password reset, and session management work correctly using an established auth library. Edge cases tested: expired tokens, concurrent sessions, rate limiting.' },
                    { name: 'HTTPS enforced everywhere', description: 'All endpoints served over HTTPS. HTTP requests redirect to HTTPS automatically. SSL certificates are valid and auto-renewing.' },
                    { name: 'Dependencies audited', description: 'Run npm audit (or equivalent) with zero high-severity vulnerabilities. Outdated packages reviewed and updated where possible.' },
                  ],
                },
                {
                  name: 'Monitoring Setup',
                  options: [
                    { name: 'Error tracking (Sentry)', description: 'Sentry or equivalent captures production errors automatically with stack traces, user context, and frequency data. Alerts sent to your notification channel.' },
                    { name: 'Analytics installed', description: 'Plausible, PostHog, or Vercel Analytics tracking page views, user flows, and key actions. Respects user privacy and GDPR requirements.' },
                    { name: 'Uptime monitoring', description: 'UptimeRobot or BetterUptime pings your app every 1-5 minutes. Alerts you via email, Slack, or SMS if your app is unreachable.' },
                  ],
                },
                {
                  name: 'Testing Complete',
                  options: [
                    { name: 'Edge cases tested', description: 'Empty submissions, extremely long text, special characters (&, <, \', \"), rapid double-clicks, back button behavior, and expired sessions \u2014 all tested.' },
                    { name: 'Mobile tested on real device', description: 'Not just browser DevTools responsive mode \u2014 actually tested on a real phone. Touch targets are large enough, text is readable, forms are usable with a phone keyboard.' },
                    { name: 'Cross-browser tested', description: 'Tested on Chrome, Safari, and Firefox at minimum. Safari on iOS has notable quirks with forms, dates, and CSS that Chrome doesn\'t.' },
                    { name: 'Another person tested it', description: 'At least one person who didn\'t build the app has used it end-to-end. Fresh eyes catch the majority of UX issues and confusing flows developers are blind to.' },
                  ],
                },
                {
                  name: 'Deployment Ready',
                  options: [
                    { name: 'CI/CD pipeline configured', description: 'Code pushes trigger automated builds and deployments. Build failures block deployment. The previous version stays live if the new build fails.' },
                    { name: 'Staging environment tested', description: 'The app has been deployed to a staging environment and tested under production-like conditions before going live.' },
                    { name: 'Rollback plan documented', description: 'You know exactly how to revert to the previous version if the deployment causes problems. On Vercel, this is one click. Document the process.' },
                  ],
                },
                {
                  name: 'Data Readiness',
                  options: [
                    { name: 'Database backed up', description: 'Automated daily backups configured. Backups have been tested by actually restoring one. Untested backups are not backups.' },
                    { name: 'Migrations tested', description: 'Database schema changes (adding columns, creating tables) work reliably and have been tested in staging before running in production.' },
                    { name: 'Seed data ready', description: 'Scripts or configurations exist to populate a fresh database with required initial data (admin accounts, default settings, reference data).' },
                  ],
                },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Error Tracking', definition: 'Automated capture and reporting of production errors. Sentry is the industry standard \u2014 provides stack traces, user context, error frequency, and alert notifications.' },
              { term: 'Uptime Monitoring', definition: 'A service that periodically checks if your app is accessible and alerts you when it\'s not. Detects outages before users report them.' },
              { term: 'Database Backup', definition: 'Regular automated copies of your database. Critical rule: a backup that hasn\'t been test-restored is not a backup. Always verify restore works.' },
              { term: 'Migration', definition: 'A versioned change to your database schema \u2014 adding tables, modifying columns, creating indexes. Tracked in code so they can be applied consistently across environments.' },
              { term: 'Seed Data', definition: 'Initial data required for your application to function \u2014 admin accounts, default settings, category lists. Applied when setting up a fresh database.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Your app has been live for a week and users report that the login page "sometimes doesn\'t work." You have no error tracking installed. What is the first thing you should do?',
              options: ['Ask users for more details about when it happens', 'Install Sentry (error tracking) to capture the actual errors with full context', 'Rewrite the login page from scratch', 'Check if the server is running'],
              correct: 1,
              explanation: 'Without error tracking, you\'re debugging blindly based on vague user reports. Installing Sentry will immediately capture the actual error, its stack trace, how often it occurs, and which users are affected \u2014 giving you the data to fix the problem efficiently.',
            },
            {
              question: 'You\'ve tested your app thoroughly in the browser\'s responsive mode and it looks perfect. A friend opens it on their iPhone and the layout is broken. Why?',
              options: ['iPhones can\'t run web apps', 'Browser responsive mode doesn\'t perfectly simulate real device behavior \u2014 Safari on iOS has different rendering, touch handling, and CSS quirks', 'The friend has an old phone', 'Browser responsive mode is more accurate than real devices'],
              correct: 1,
              explanation: 'Browser DevTools responsive mode simulates screen size but not the actual rendering engine. Safari on iOS handles forms, dates, CSS properties (especially flexbox edge cases), and viewport units differently than Chrome. Always test on a real phone before launching.',
            },
            {
              question: 'What does "a backup that hasn\'t been test-restored is not a backup" mean?',
              options: ['You need to back up more frequently', 'Backups are only reliable if you\'ve verified they can actually be restored \u2014 a corrupted or misconfigured backup is useless when you need it', 'You should keep backups for at least a year', 'Automated backups are unreliable'],
              correct: 1,
              explanation: 'Many teams discover their backups are corrupted, incomplete, or in an incompatible format only when they desperately need to restore. Regularly testing the restore process \u2014 actually spinning up a database from a backup \u2014 is the only way to know your safety net is real.',
            },
            {
              question: 'Which of these is NOT part of production readiness?',
              options: ['Error tracking and uptime monitoring', 'Having 100% automated test coverage', 'HTTPS enforcement on all endpoints', 'A rollback plan for failed deployments'],
              correct: 1,
              explanation: '100% test coverage is generally impractical and not a production readiness requirement. Diminishing returns set in well before 100%. Production readiness requires reasonable test coverage of critical paths, not exhaustive coverage of every line of code.',
            },
            {
              question: 'You\'re about to launch your app. You\'ve completed all security checks, set up monitoring, tested on multiple devices, and configured CI/CD. What\'s the one thing you should still do before launch?',
              options: ['Rewrite all the code in TypeScript', 'Have at least one person who didn\'t build the app test it end-to-end', 'Wait six months to make sure nothing changes', 'Add more features to impress early users'],
              correct: 1,
              explanation: 'Fresh eyes are your most valuable testing tool. Developers are blind to issues in their own products because they know exactly how it\'s supposed to work. Someone unfamiliar with the app will immediately find confusing flows, unclear labels, and broken edge cases that you\'ve been unconsciously working around.',
            },
          ],
        },
        takeaway: 'Production readiness is a checklist across five domains: security (secrets, input validation, auth, HTTPS), monitoring (error tracking, analytics, uptime), testing (edge cases, real devices, fresh eyes), deployment (CI/CD, staging, rollback), and data (backups, migrations, seed data).',
      },
    ],
  },
  {
    id: 8,
    title: "The Builder's Process \u2014 From Idea to Shipped Product",
    subtitle: 'Ideation, planning, building, launching, and iterating',
    icon: 'Rocket',
    lessons: [
      {
        id: '8.1',
        title: 'The 8-Phase Product Lifecycle',
        estimatedMinutes: 15,
        hook: 'Most people who try to build a product with AI start by opening a code editor and typing prompts. That\'s like building a house by picking up a hammer before you have blueprints, a foundation, or even a plot of land. The reason most AI-assisted projects fail isn\'t that the AI wrote bad code \u2014 it\'s that the builder skipped the planning phases entirely. There\'s an 8-phase lifecycle that separates shipped products from abandoned side projects.',
        analogy: {
          front: 'Building a product is like planning a cross-country road trip. You don\'t just get in the car and drive. First you pick a destination (problem), plan your route (solution design), choose your vehicle (architecture), pack your bags (data model), set your GPS (UI/UX), then drive (build), check the engine along the way (test), and finally arrive and park (deploy).',
          back: 'Destination = Problem Definition. Route = Solution Design. Vehicle = Architecture Decision. Packing = Data Modeling. GPS = UI/UX Design. Driving = Iterative Building. Engine checks = Testing. Arrival = Deployment. Skipping any phase means you\'ll get lost or break down.',
        },
        content: [
          {
            type: 'text',
            body: 'Every successful digital product \u2014 from a weekend side project to a billion-dollar startup \u2014 follows the same fundamental lifecycle. The phases might overlap, compress, or expand depending on the project\'s complexity, but they never disappear. Skip one, and you\'ll pay for it later with rewrites, confused users, or a product nobody wants. The 8 phases are: Problem Definition, Solution Design, Architecture Decision, Data Modeling, UI/UX Design, Iterative Building, Testing, and Deployment.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The 8-Phase Product Lifecycle',
              steps: [
                { label: 'Phase 1: Problem Definition (10%)', description: 'WHO has this problem? WHAT are they struggling with? HOW do they solve it today? This phase prevents you from building something nobody needs.' },
                { label: 'Phase 2: Solution Design (10%)', description: 'Define your MVP \u2014 the smallest version that delivers core value. Prioritize features ruthlessly. Say no to 80% of your ideas.' },
                { label: 'Phase 3: Architecture Decision (10%)', description: 'Choose your tech stack: frontend framework, backend approach, database, hosting. These decisions are hard to change later.' },
                { label: 'Phase 4: Data Modeling (10%)', description: 'Design your database schema before writing any code. What entities exist? What fields do they have? How do they relate to each other?' },
                { label: 'Phase 5: UI/UX Design (15%)', description: 'Wireframe your screens, map user flows, inventory your components. You don\'t need to be a designer \u2014 you need a plan for what users will see and do.' },
                { label: 'Phase 6: Iterative Building (30%)', description: 'Build one feature at a time. Test it. Commit it. Then build the next. This is where AI tools accelerate you \u2014 but only if the previous phases are done.' },
                { label: 'Phase 7: Testing (10%)', description: 'Test like a real user, not a developer. Different devices, edge cases, broken inputs, fresh eyes. Find the problems before your users do.' },
                { label: 'Phase 8: Deployment (5%)', description: 'Ship it. Set up monitoring. Gather feedback. Iterate. A product is never done \u2014 it\'s just live.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Notice that Building is only 30% of the total effort. The other 70% is thinking, planning, and validating. This is why "vibe coding" \u2014 jumping straight to prompting AI for code \u2014 produces fragile, confusing products. The best AI-assisted builders spend MORE time on phases 1-5 than on the actual coding.',
          },
          {
            type: 'text',
            body: 'The percentages above are time allocation guidance, not rigid rules. A weekend hackathon might compress phases 1-5 into an hour of focused thinking. A serious product might spend weeks on problem definition alone. But the order matters \u2014 each phase builds on the previous one. You can\'t choose an architecture without knowing your solution, and you can\'t design your data model without knowing your architecture.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Product Lifecycle', definition: 'The complete journey of a product from initial idea through planning, building, launching, and iterating. Every phase feeds into the next.' },
              { term: 'Waterfall', definition: 'A development approach where each phase is completed fully before the next begins. Linear and sequential. Works for well-defined projects with stable requirements.' },
              { term: 'Agile', definition: 'An iterative development approach where you build in short cycles (sprints), ship frequently, and adapt based on feedback. Better for products with evolving requirements.' },
              { term: 'Sprint', definition: 'A fixed time period (usually 1-2 weeks) during which a specific set of features is built, tested, and shipped. The heartbeat of Agile development.' },
              { term: 'Iteration', definition: 'One cycle of building and improving. Ship version 1, learn from users, improve in version 2. Products improve through rapid iterations, not big bang releases.' },
              { term: 'Scope Creep', definition: 'When a project gradually expands beyond its original goals by adding "just one more feature." The silent killer of side projects. Combat it with a strict MVP definition.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What percentage of total effort should be spent on phases BEFORE building (phases 1-5)?',
              options: ['About 20%', 'About 40%', 'About 55%', 'About 80%'],
              correct: 2,
              explanation: 'Phases 1-5 (Problem Definition through UI/UX Design) account for approximately 55% of total effort. Building is only 30%, with Testing and Deployment making up the remaining 15%. Most failed projects skip this planning majority.',
            },
            {
              question: 'Why do most AI-assisted building projects fail?',
              options: ['Because AI writes bad code', 'Because the builder skipped the planning phases and jumped straight to generating code', 'Because AI can\'t handle complex applications', 'Because the builder chose the wrong programming language'],
              correct: 1,
              explanation: 'AI is excellent at writing code when given clear direction. The failure point is almost always that the builder skipped problem definition, solution design, architecture decisions, and data modeling \u2014 then asked AI to build something vague.',
            },
            {
              question: 'What is scope creep, and when does it typically happen?',
              options: ['A database error that occurs during deployment', 'The gradual expansion of a project beyond its original goals by continuously adding features', 'A security vulnerability in third-party packages', 'A performance issue caused by too many API calls'],
              correct: 1,
              explanation: 'Scope creep is when you keep adding "just one more feature" until the project becomes unmanageable. It typically happens during the building phase when you\'re excited and generating code is easy. A strict MVP definition from Phase 2 is your defense.',
            },
          ],
        },
        takeaway: 'Every product follows 8 phases: Problem Definition, Solution Design, Architecture, Data Modeling, UI/UX, Building, Testing, and Deployment. Building is only 30% of the work \u2014 the other 70% is thinking and planning that prevents expensive mistakes.',
      },
      {
        id: '8.2',
        title: 'Phase 1 \u2014 Defining the Problem Worth Solving',
        estimatedMinutes: 15,
        hook: 'The graveyard of failed apps is full of beautifully coded solutions to problems nobody actually has. Before you write a single line of code \u2014 before you even think about technology \u2014 you need to answer four questions so clearly that a stranger could understand what you\'re building and why. This is the phase that separates products people use from products people forget.',
        analogy: {
          front: 'Imagine a doctor who prescribes medicine before asking what\'s wrong. "Here, take this pill!" But for what? A headache? A broken arm? Depression? The pill might be perfectly manufactured, but if it doesn\'t match the actual problem, it\'s useless. Defining the problem is the diagnosis before the prescription.',
          back: 'Doctor = you (the builder). Diagnosis = problem definition. Prescription = your product. Symptoms = what users complain about. Root cause = the real problem you need to solve. Wrong diagnosis = building the wrong product.',
        },
        content: [
          {
            type: 'text',
            body: 'A problem statement is your product\'s foundation. Get it right, and every decision that follows becomes clearer. Get it wrong, and you\'ll build an elegant solution to the wrong problem. The framework is four questions: WHO has this problem? WHAT is the specific problem they face? HOW do they solve it today? WHY would they switch to your solution? If you can\'t answer all four clearly, you don\'t have a product idea yet \u2014 you have a hunch.',
          },
          {
            type: 'callout',
            body: 'Bad problem statement: "I want to build a task management app." Good problem statement: "Freelancers juggling 3-5 clients lose track of deliverables because existing tools like Trello are designed for teams, not solo workers. They currently use scattered notes and email, causing missed deadlines. A single-view dashboard showing all client deadlines would save them 30 minutes daily."',
          },
          {
            type: 'text',
            body: 'The Mom Test, from Rob Fitzpatrick\'s book, is the gold standard for validating problems. The core rule: never ask people if they\'d use your app. Instead, ask about their actual behavior. Don\'t say "Would you use an app that tracks your freelance deadlines?" because everyone will politely say yes. Instead ask: "When was the last time you missed a deadline? What happened? How did you try to prevent it?" If they can\'t describe a real problem with real consequences, the problem isn\'t painful enough to build for.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each vague app idea to a sharp problem statement.',
              pairs: [
                { left: '"I want to build a recipe app"', right: 'Home cooks waste 20 minutes per meal deciding what to cook because they forget what ingredients they already have at home' },
                { left: '"I want to build a fitness tracker"', right: 'Gym beginners quit within 3 months because generic workout plans don\'t adapt to their progress or schedule changes' },
                { left: '"I want to build a budget app"', right: 'Couples fight about money because they have no shared visibility into discretionary spending versus bills' },
                { left: '"I want to build a study tool"', right: 'University students fail to retain lecture material because they review notes passively instead of testing themselves with active recall' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Jobs-to-be-Done (JTBD) is another powerful framework. Instead of thinking about what your product IS, think about what job the user is hiring it to DO. People don\'t buy a quarter-inch drill because they want a drill \u2014 they buy it because they want a quarter-inch hole. The "job" your product gets hired for reveals the real problem. A task management app isn\'t hired to manage tasks \u2014 it\'s hired to reduce the anxiety of forgetting something important.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Problem Statement', definition: 'A clear description of WHO has the problem, WHAT the problem is, HOW they solve it today, and WHY they\'d switch. The foundation of every product.' },
              { term: 'User Research', definition: 'The practice of talking to real people to understand their problems, behaviors, and needs before building anything. Prevents building products nobody wants.' },
              { term: 'Pain Point', definition: 'A specific, recurring frustration that users experience. The sharper and more frequent the pain, the more likely they\'ll adopt a solution.' },
              { term: 'Jobs-to-be-Done', definition: 'A framework that focuses on what "job" users hire a product to do, rather than what the product is. Reveals the real motivation behind user behavior.' },
              { term: 'Mom Test', definition: 'A set of rules for customer conversations: ask about real past behavior, not hypothetical future behavior. Named because even your mom will lie to you about whether she\'d use your app.' },
              { term: 'Validation', definition: 'The process of confirming that a real problem exists before building a solution. Saves weeks or months of wasted development time.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'According to the Mom Test, which question is the best way to validate a problem?',
              options: ['Would you use an app that does X?', 'How much would you pay for a tool that does X?', 'Tell me about the last time you experienced [problem]. What did you do?', 'Do you think this is a good idea?'],
              correct: 2,
              explanation: 'The Mom Test says to ask about real, past behavior \u2014 not hypothetical future actions. "Tell me about the last time..." gets honest, specific answers. "Would you use..." gets polite lies.',
            },
            {
              question: 'What are the four questions in a strong problem statement?',
              options: ['What, When, Where, Why', 'Who has the problem, What is it, How do they solve it today, Why would they switch', 'How big is the market, Who are competitors, What\'s the revenue model, When to launch', 'What features to build, Which framework to use, How to deploy, When to test'],
              correct: 1,
              explanation: 'A complete problem statement answers WHO (target user), WHAT (specific problem), HOW (current workaround), and WHY (reason to switch). Without all four, you\'re guessing.',
            },
          ],
        },
        takeaway: 'Before building anything, answer four questions: WHO has this problem, WHAT is the problem, HOW do they solve it today, and WHY would they switch to your solution. Validate by asking about real past behavior, not hypothetical future actions.',
      },
      {
        id: '8.3',
        title: 'Phase 2 \u2014 MVP Thinking: The Art of Doing Less',
        estimatedMinutes: 15,
        hook: 'Airbnb\'s first version was a website with photos of the founders\' apartment, an air mattress, and an email address for booking. No payments, no search, no reviews, no map, no messaging. Just photos and an email. That bare-bones version taught them more about their market in one weekend than a year of planning would have. The most powerful skill in product building isn\'t adding features \u2014 it\'s knowing which features to leave out.',
        analogy: {
          front: 'An MVP is like a food truck before opening a restaurant. You don\'t sign a 10-year lease, hire a full kitchen staff, and print 50-page menus to test whether people like your tacos. You get a truck, make three kinds of tacos, and park near an office building at lunch. If people line up, you know the food works. Then you expand.',
          back: 'Food truck = MVP (minimum investment to test core value). Three taco types = must-have features. Office building crowd = target users. The line = validation. Full restaurant = the complete product you build AFTER validation.',
        },
        content: [
          {
            type: 'text',
            body: 'A Minimum Viable Product is the smallest version of your product that delivers its core value proposition. Not a prototype. Not a mockup. A real, usable product that solves the core problem \u2014 just nothing else. The goal of an MVP isn\'t to impress people. It\'s to learn whether your solution actually solves the problem you identified in Phase 1. Every extra feature you add before launching is a guess about what users want. The MVP lets you replace guesses with evidence.',
          },
          {
            type: 'text',
            body: 'MoSCoW prioritization is the framework that makes MVP thinking concrete. Every feature idea goes into one of four buckets: Must-have features are essential \u2014 the product literally doesn\'t work without them. Should-have features are important but the product can launch without them. Could-have features are nice but not necessary. Won\'t-have features are explicitly out of scope for this version. Your MVP ships with only the Must-haves. Everything else waits for version 2, 3, or never.',
          },
          {
            type: 'match',
            config: {
              instruction: 'A task management app for freelancers \u2014 categorize each feature as Must / Should / Could / Won\'t for the MVP.',
              pairs: [
                { left: 'Must-have', right: 'Add tasks with due dates and client names' },
                { left: 'Should-have', right: 'Email reminders for upcoming deadlines' },
                { left: 'Could-have', right: 'Color-coded tags and custom categories' },
                { left: 'Won\'t-have (v1)', right: 'AI-powered time estimation and invoicing integration' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'Real MVP examples that became billion-dollar companies: Dropbox started as a 3-minute demo video (not even a real product). Twitter started as an internal SMS tool at a podcasting company. Zappos\' founder manually bought shoes from retail stores and shipped them to customers to test demand before building inventory systems.',
          },
          {
            type: 'text',
            body: 'The hardest part of MVP thinking isn\'t knowing what to include \u2014 it\'s having the discipline to leave things out. Feature creep kills more side projects than bad code ever will. Every time you think "it would also be cool if..." during the planning phase, write it down in a "Version 2" list and move on. Your MVP is a hypothesis: "If I build X, users will get value Y." Ship the hypothesis, measure the result, then decide what to build next based on real data instead of imagination.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'MVP', definition: 'Minimum Viable Product \u2014 the smallest version of a product that delivers core value and generates real user feedback. Not a prototype or demo \u2014 a usable product.' },
              { term: 'MoSCoW', definition: 'A prioritization framework: Must-have, Should-have, Could-have, Won\'t-have. Forces you to categorize every feature by necessity, not desire.' },
              { term: 'Feature Creep', definition: 'The gradual, uncontrolled addition of features beyond the original scope. Happens when you say yes to every "it would be cool if..." idea. Delays launch indefinitely.' },
              { term: 'Core Value Proposition', definition: 'The single most important thing your product does for users \u2014 the one reason they\'d choose it. If your MVP doesn\'t deliver this, nothing else matters.' },
              { term: 'User Story', definition: 'A feature described from the user\'s perspective: "As a [type of user], I want to [action] so that [benefit]." Keeps features focused on user value, not technical coolness.' },
              { term: 'Iteration', definition: 'One cycle of build \u2192 measure \u2192 learn. MVPs are designed to maximize learning per iteration. Ship fast, learn fast, improve fast.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the primary goal of an MVP?',
              options: ['To impress investors with a polished product', 'To learn whether your solution actually solves the problem, with minimum investment', 'To build every feature users might want', 'To demonstrate your technical skills to potential employers'],
              correct: 1,
              explanation: 'An MVP exists to learn, not to impress. It\'s the fastest way to test whether your solution solves the problem you identified. Every extra feature delays that learning.',
            },
            {
              question: 'In MoSCoW prioritization, what defines a "Must-have" feature?',
              options: ['Something users would enjoy having', 'Something competitors already offer', 'Something the product literally cannot function without', 'Something that would make the UI look more professional'],
              correct: 2,
              explanation: 'Must-have means the product doesn\'t work without it. If a task manager can\'t create tasks, it\'s not a task manager. Everything else \u2014 no matter how nice \u2014 is Should/Could/Won\'t for the MVP.',
            },
            {
              question: 'Airbnb\'s first version had no payment system, no search, and no reviews. Why did it still work as an MVP?',
              options: ['Because they had a big marketing budget', 'Because it delivered the core value \u2014 connecting people who had space with people who needed a place to stay', 'Because the founders were experienced developers', 'Because there were no competitors at the time'],
              correct: 1,
              explanation: 'The core value proposition was "find a place to stay at someone\'s home." Photos and an email address was enough to test whether anyone would actually do that. Payments, search, and reviews are Should/Could features for later.',
            },
          ],
        },
        takeaway: 'An MVP is the smallest product that delivers core value. Use MoSCoW to separate must-haves from nice-to-haves, and ship only the must-haves. Everything else goes in the Version 2 list.',
      },
      {
        id: '8.4',
        title: 'Phase 3 \u2014 Choosing Your Architecture',
        estimatedMinutes: 15,
        hook: 'Choosing a tech stack feels overwhelming because there are hundreds of options. React or Vue? Supabase or Firebase? PostgreSQL or MongoDB? Vercel or Railway? But here\'s the secret: there\'s no universally "best" stack. There\'s only the best stack for YOUR specific product, YOUR timeline, and YOUR skill level. This lesson gives you a decision framework so you never freeze at the starting line again.',
        analogy: {
          front: 'Choosing architecture is like choosing a vehicle for a trip. A sedan, a pickup truck, and a motorcycle can all get you from A to B. But if you\'re moving furniture, the sedan is wrong. If you\'re commuting solo, the truck wastes gas. The "best" vehicle depends entirely on what you\'re carrying and where you\'re going.',
          back: 'Sedan = lightweight stack (static site, no backend). Pickup truck = full-stack app (React + Node + PostgreSQL). Motorcycle = serverless functions (fast, lean, limited cargo). What you\'re carrying = your data and features. Where you\'re going = your product goals.',
        },
        content: [
          {
            type: 'text',
            body: 'Architecture decisions are the hardest to change later. Switching a database from MongoDB to PostgreSQL after you\'ve built 50 features is a months-long migration project. Switching from React to Vue means rewriting your entire frontend. That\'s why Phase 3 matters so much \u2014 you\'re making decisions that your future self will live with for the entire life of the product. The good news: for most products, the "right" answer is the same boring, battle-tested combination.',
          },
          {
            type: 'decision-tree',
            config: {
              title: 'What type of product are you building?',
              start: 'q1',
              nodes: {
                q1: {
                  question: 'What type of product are you building?',
                  options: [
                    { label: 'Content site (blog, portfolio, docs)', next: 'r1' },
                    { label: 'Interactive web app (dashboard, tool, SaaS)', next: 'q2' },
                    { label: 'AI-powered product (chat, analysis, generation)', next: 'q3' },
                    { label: 'Mobile app', next: 'r4' },
                  ],
                },
                q2: {
                  question: 'How fast do you need to launch?',
                  options: [
                    { label: 'This weekend / under a week', next: 'r2a' },
                    { label: '2-4 weeks, I want more control', next: 'r2b' },
                  ],
                },
                q3: {
                  question: 'What\'s the AI component?',
                  options: [
                    { label: 'Simple chat or text generation', next: 'r3a' },
                    { label: 'RAG, embeddings, or multi-step agents', next: 'r3b' },
                  ],
                },
                r1: {
                  result: 'Next.js + Vercel (or Astro for pure content)',
                  detail: 'Static site generation gives you blazing speed and great SEO. Vercel deploys from Git automatically. Add a CMS like Sanity or MDX for content management.',
                },
                r2a: {
                  result: 'React + Supabase + Vercel',
                  detail: 'Supabase gives you PostgreSQL, auth, storage, and auto-generated APIs out of the box. Focus your energy on the frontend and business logic, not infrastructure.',
                },
                r2b: {
                  result: 'Next.js + Node.js API + PostgreSQL + Railway',
                  detail: 'Full control over both frontend and backend. Next.js API routes or a separate Express server. PostgreSQL for relational data. Railway for easy deployment.',
                },
                r3a: {
                  result: 'Next.js + OpenAI/Anthropic API + Supabase',
                  detail: 'Use the AI provider\'s API directly from Next.js API routes. Store conversation history in Supabase. Stream responses for a good user experience.',
                },
                r3b: {
                  result: 'Python (FastAPI) + pgvector + React frontend',
                  detail: 'Python excels at AI/ML workflows. FastAPI for the backend API. pgvector in PostgreSQL for embedding storage. A React frontend for the user interface.',
                },
                r4: {
                  result: 'React Native (or Flutter) + Supabase',
                  detail: 'React Native lets you build iOS and Android from one codebase using JavaScript. Supabase handles the backend. Expo simplifies the build process.',
                },
              },
            },
          },
          {
            type: 'callout',
            body: 'The "default stack" for most products in 2026: React (or Next.js) for the frontend, Supabase for database + auth + storage, Vercel for hosting, and your AI provider\'s API for any AI features. This combination has the best documentation, the largest community, and the fastest time-to-launch. Deviate only when you have a specific reason to.',
          },
          {
            type: 'text',
            body: 'Mobile is no longer optional \u2014 over 60% of web traffic comes from mobile devices. You have three paths. A Progressive Web App (PWA) is a regular web app enhanced with mobile features: installable on the home screen, works offline, sends push notifications. The advantage is one codebase that works everywhere (web + mobile) with zero app store approval needed. React Native and Flutter let you build native mobile apps with a single codebase that runs on both iOS and Android. The trade-off: you get access to native device features (camera, GPS, health data) and app store distribution, but you maintain a separate codebase and deal with app store review processes. For most products, start with a responsive web app (or PWA). Only build native mobile if you need device APIs, push notifications are critical, or your audience expects an app store presence.',
          },
          {
            type: 'text',
            body: 'Here\'s a principle that will save you countless hours: choose boring technology. The newest, trendiest framework might have exciting features, but it also has fewer tutorials, less community support, more bugs, and a higher chance of breaking changes. PostgreSQL has been battle-tested for 30+ years. React has the largest ecosystem in frontend development. Express.js has millions of production deployments. Boring technology is boring because it works reliably \u2014 and reliability is what you want when you\'re building a real product.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why are architecture decisions the hardest to change later?',
              options: ['Because they require the most code', 'Because switching a database or framework after building many features requires massive rewrites and data migration', 'Because architecture tools are expensive', 'Because you need a team to make architecture changes'],
              correct: 1,
              explanation: 'Architecture decisions (database type, frontend framework, backend language) are deeply woven into every line of code. Changing them after building 50 features means rewriting most of the product, which can take months.',
            },
            {
              question: 'What does "choose boring technology" mean?',
              options: ['Always use the oldest tools available', 'Prefer well-tested, widely-used tools with strong community support over new, trendy alternatives', 'Avoid using any AI tools in your stack', 'Only build simple, boring products'],
              correct: 1,
              explanation: 'Boring technology (PostgreSQL, React, Express) has extensive documentation, huge communities, proven reliability, and fewer surprises. New tools may be exciting but come with less support and more risk for production products.',
            },
          ],
        },
        takeaway: 'Architecture decisions are hard to reverse, so make them carefully. For most products, the default stack is React + Supabase + Vercel. Deviate only when you have a specific reason to, and always prefer boring, battle-tested technology over new and trendy.',
      },
      {
        id: '8.5',
        title: 'Phase 4 \u2014 Data Modeling Before Code',
        estimatedMinutes: 15,
        hook: 'If your database schema is wrong, every feature you build on top of it will fight you. Queries become slow and complex. Simple features require ugly workarounds. New requirements force painful migrations. But if your data model is right, features almost build themselves. Data modeling is the single most impactful pre-coding activity \u2014 30 minutes here saves 30 hours of debugging later.',
        analogy: {
          front: 'A data model is like the filing system in an office. If you throw all documents into one giant drawer, finding anything takes forever and papers get mixed up. But if you have labeled folders (Clients, Invoices, Contracts), with clear rules about what goes where and which folders reference each other, the whole office runs smoothly.',
          back: 'Folders = database tables. Labels = column names and data types. Filing rules = constraints (NOT NULL, UNIQUE). References between folders = foreign keys and relationships. A good filing system = a good data model.',
        },
        content: [
          {
            type: 'text',
            body: 'Data modeling is the process of defining what data your application stores, how it\'s structured, and how different pieces of data relate to each other. Before you write a single line of code, you need to answer: What are the main "things" (entities) in my app? What information does each thing have (fields)? How do things connect to each other (relationships)? What rules must the data follow (constraints)? This isn\'t abstract \u2014 it directly determines how easy or painful every feature will be to build.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The Data Modeling Process',
              steps: [
                { label: '1. List Your Entities', description: 'Identify the main "things" your app deals with. A recipe app has Users, Recipes, Ingredients, and Categories. A job board has Companies, Jobs, Applications, and Users.' },
                { label: '2. Define Fields for Each Entity', description: 'What information does each entity need? A Recipe needs: title (text), description (text), prep_time (integer), servings (integer), image_url (text), created_at (timestamp).' },
                { label: '3. Set Primary Keys', description: 'Every entity needs a unique identifier. Usually an auto-incrementing integer (id) or a UUID. This is how the database finds specific records.' },
                { label: '4. Map Relationships', description: 'How do entities connect? A User has many Recipes (one-to-many). A Recipe has many Ingredients and an Ingredient can be in many Recipes (many-to-many, needs a junction table).' },
                { label: '5. Add Constraints', description: 'What rules must data follow? Email must be UNIQUE. Title must be NOT NULL. Servings must be a positive integer. Constraints prevent bad data at the database level.' },
                { label: '6. Validate Against Use Cases', description: 'Walk through every feature in your MVP and make sure the data model supports it. Can a user search recipes by ingredient? Can they filter by prep time? If not, adjust the model.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Let\'s walk through a real example. Imagine you\'re building a recipe-sharing app. Your entities are: Users (people who create and save recipes), Recipes (the dishes themselves), Ingredients (items used in recipes), and Categories (like "Breakfast" or "Vegan"). A User has many Recipes \u2014 that\'s a one-to-many relationship with a user_id foreign key on the Recipes table. A Recipe has many Ingredients, and an Ingredient can appear in many Recipes \u2014 that\'s a many-to-many relationship requiring a junction table called recipe_ingredients that stores recipe_id and ingredient_id pairs, plus the quantity and unit for each.',
          },
          {
            type: 'callout',
            body: 'The most common data modeling mistake: not thinking about relationships early enough. If you build a recipe app where ingredients are stored as a comma-separated text field inside the recipe ("flour, sugar, eggs"), you can never search by ingredient, calculate nutrition, or suggest recipes based on what\'s in your fridge. A proper Ingredients table with a many-to-many junction table makes all of these features trivial.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Entity', definition: 'A distinct "thing" your app tracks \u2014 users, products, orders, messages. Each entity typically gets its own database table.' },
              { term: 'Field / Column', definition: 'One piece of information about an entity \u2014 name, email, price, created_at. Each field has a data type (text, integer, boolean, timestamp).' },
              { term: 'Primary Key', definition: 'A unique identifier for each record in a table. Usually an auto-incrementing integer (id) or UUID. No two records can share the same primary key.' },
              { term: 'Foreign Key', definition: 'A field in one table that references the primary key of another table. Creates a link between related data \u2014 like user_id in a Recipes table pointing to the Users table.' },
              { term: 'Junction Table', definition: 'A table that connects two entities in a many-to-many relationship. Contains foreign keys to both tables. Example: recipe_ingredients links Recipes and Ingredients.' },
              { term: 'Constraint', definition: 'A rule enforced by the database: NOT NULL (field can\'t be empty), UNIQUE (no duplicates allowed), CHECK (value must meet a condition). Prevents bad data.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why is data modeling the most impactful pre-coding activity?',
              options: ['Because it\'s the most technically difficult phase', 'Because a wrong data model makes every feature harder to build, requiring complex queries and painful workarounds', 'Because databases are the most expensive part of hosting', 'Because users interact directly with the database'],
              correct: 1,
              explanation: 'Your data model is the foundation every feature is built on. If it\'s wrong, simple features become complex, queries become slow, and new requirements force migrations. Get it right and features almost build themselves.',
            },
            {
              question: 'When do you need a junction table?',
              options: ['When a table has more than 10 columns', 'When two entities have a many-to-many relationship', 'When you want to add indexes for faster queries', 'When a table exceeds 1 million rows'],
              correct: 1,
              explanation: 'A many-to-many relationship (like Recipes and Ingredients \u2014 one recipe has many ingredients, one ingredient appears in many recipes) requires a junction table to store the connections between them.',
            },
          ],
        },
        takeaway: 'Design your data model before writing code: list entities, define fields, set primary keys, map relationships, add constraints, and validate against your use cases. Thirty minutes of data modeling saves thirty hours of debugging.',
      },
      {
        id: '8.6',
        title: 'Phase 5 \u2014 UI/UX Design for Non-Designers',
        estimatedMinutes: 15,
        hook: 'You don\'t need to be a designer to design a good interface. You need three things: a rough wireframe showing what goes where, a user flow showing how people move through your app, and a component inventory listing everything you need to build. Professional designers use these same tools \u2014 they just make them prettier. The structure is what matters, and that\'s something anyone can do.',
        analogy: {
          front: 'UI design is like arranging furniture in a room. You don\'t need to be an interior decorator to know that the couch should face the TV, the lamp should be near the reading chair, and people shouldn\'t trip over the coffee table walking to the kitchen. Good layout is mostly common sense and thinking about how people actually move through the space.',
          back: 'Room layout = page layout (wireframe). Furniture = UI components (buttons, forms, cards). Walking paths = user flows (how people navigate). Interior decorator = professional UI designer. You = someone who can still make a functional, comfortable room.',
        },
        content: [
          {
            type: 'text',
            body: 'A wireframe is a rough sketch of what each screen looks like \u2014 where the navigation goes, where the main content lives, where buttons and forms appear. It\'s intentionally ugly because the point is structure, not beauty. You can wireframe with pen and paper, Excalidraw (free), or Figma (free tier). The key rule: wireframe every screen in your MVP before building any of them. This reveals navigation problems, missing screens, and unclear user flows before you write a single line of code.',
          },
          {
            type: 'text',
            body: 'A user flow is a diagram showing how a user moves through your app to complete a task. For a recipe app: Home \u2192 Browse Recipes \u2192 Open Recipe \u2192 Tap "Cook This" \u2192 Step-by-Step View \u2192 Mark Complete. Every fork in the road (What if they\'re not logged in? What if the recipe has no image?) reveals edge cases you need to handle. Drawing user flows takes 15 minutes and prevents building dead-end screens that confuse users.',
          },
          {
            type: 'callout',
            body: 'The non-designer\'s shortcut that actually works: Find 3-5 apps similar to what you\'re building. Screenshot the screens you like. Use those as visual references when describing your UI to an AI coding assistant. "Build a dashboard page that looks like this screenshot" is 10x more effective than "build a nice-looking dashboard."',
          },
          {
            type: 'text',
            body: 'Design systems are your secret weapon. Instead of designing every button, card, and form from scratch, use a pre-built component library. shadcn/ui gives you beautiful, accessible React components you can copy into your project. Tailwind UI offers pre-designed page templates. Material UI provides Google\'s design language in React components. Using a design system means your app looks professional and consistent without any design skill \u2014 because the design decisions were already made by professionals.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each UI/UX concept to what it accomplishes.',
              pairs: [
                { left: 'Wireframe', right: 'Shows the structural layout of each screen before any code is written' },
                { left: 'User Flow Diagram', right: 'Maps how users navigate through the app to complete tasks' },
                { left: 'Component Inventory', right: 'Lists every UI element needed (buttons, forms, cards, modals) to estimate building time' },
                { left: 'Design System (shadcn/ui)', right: 'Provides pre-built, professional-quality components so you don\'t design from scratch' },
              ],
            },
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Wireframe', definition: 'A rough sketch of a screen\'s layout showing where elements go, without colors, fonts, or images. Structure only. The blueprint before the building.' },
              { term: 'User Flow', definition: 'A diagram showing the path a user takes through an app to complete a task. Reveals dead ends, missing screens, and confusing navigation.' },
              { term: 'Component Library', definition: 'A collection of pre-built, reusable UI elements (buttons, inputs, cards, modals) that maintain consistent design across the entire app.' },
              { term: 'Design System', definition: 'A complete set of design standards, component libraries, and patterns (like shadcn/ui or Material UI) that ensure visual consistency and save development time.' },
              { term: 'Responsive Design', definition: 'Building interfaces that adapt to any screen size \u2014 phone, tablet, desktop. Uses flexible layouts and media queries. Essential because most users are on mobile.' },
              { term: 'Figma', definition: 'A free, browser-based design tool for creating wireframes, mockups, and prototypes. The industry standard for UI design, even for non-designers sketching ideas.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should wireframes be intentionally ugly?',
              options: ['Because making them pretty takes too long', 'Because ugly wireframes force you to focus on structure and layout, not visual polish that distracts from flow problems', 'Because wireframes are only for developers, not designers', 'Because the final app will look different anyway'],
              correct: 1,
              explanation: 'The point of a wireframe is to nail the structure \u2014 where things go, how screens connect, what information appears where. If the wireframe is beautiful, people focus on colors and fonts instead of flow and function.',
            },
            {
              question: 'What is the "non-designer\'s shortcut" for UI design?',
              options: ['Skip the UI phase entirely and let the code dictate the layout', 'Screenshot similar apps you admire and use them as visual references when building', 'Hire a freelance designer on Fiverr', 'Use only text-based interfaces with no styling'],
              correct: 1,
              explanation: 'Finding 3-5 similar apps and screenshotting the screens you like gives you concrete visual references. Showing these to an AI coding assistant ("build something like this") produces dramatically better results than vague descriptions.',
            },
          ],
        },
        takeaway: 'You don\'t need to be a designer. Wireframe every screen, diagram your user flows, list your components, and use a design system like shadcn/ui. The non-designer\'s shortcut: screenshot apps you like and use them as references.',
      },
      {
        id: '8.7',
        title: 'Phase 6 \u2014 The AI-Assisted Building Workflow',
        estimatedMinutes: 18,
        hook: 'This is the phase where everything you\'ve learned comes together. You have a defined problem, a prioritized MVP, a chosen tech stack, a data model, and wireframes. Now you build. But building with AI requires a specific workflow \u2014 not "generate everything at once and hope it works." The builders who ship real products follow a disciplined 10-step process, and the single most important rule is: build one feature at a time.',
        analogy: {
          front: 'AI-assisted building is like cooking with a sous chef. You don\'t hand the sous chef a menu and say "make everything." You say "prep the vegetables for dish one." Check the result. "Now sear the protein." Check. "Now plate dish one." Check. Then move to dish two. One instruction at a time, with quality checks between each step.',
          back: 'You = the head chef (decision-maker). AI = the sous chef (fast executor). One instruction at a time = one feature per prompt. Quality check = test before moving on. "Make everything at once" = the recipe for a kitchen disaster.',
        },
        content: [
          {
            type: 'text',
            body: 'The 10-step AI-assisted building workflow: (1) Define the problem statement from Phase 1. (2) Lock in your tech stack from Phase 3. (3) Specify your data model from Phase 4. (4) Provide UI references from Phase 5. (5) Scaffold the project structure. (6) Build one feature at a time. (7) Test each feature before building the next. (8) Git commit after each working feature. (9) Iterate based on testing results. (10) Deploy when all MVP features work. Steps 6-9 are a loop \u2014 you repeat them for every feature in your MVP.',
          },
          {
            type: 'callout',
            body: 'Rule #1 of AI-assisted building: NEVER generate 5 features at once. Build one feature, test it, make sure it works, commit it, THEN build the next. When you ask AI to generate an entire app at once, bugs compound, errors become impossible to trace, and you spend more time debugging than you saved by generating in bulk.',
          },
          {
            type: 'code-compare',
            config: {
              tabs: [
                {
                  label: 'Bad Prompt (vague, bulk)',
                  code: '// What NOT to do:\n\n"Build me a task management app with\nuser auth, task CRUD, due dates,\nclient assignment, email reminders,\na dashboard with charts, and deploy\nit to Vercel."\n\n// Problems:\n// - Too many features at once\n// - No tech stack specified\n// - No data model defined\n// - No UI reference provided\n// - Impossible to debug when\n//   something breaks (and it will)',
                },
                {
                  label: 'Good Prompt (specific, incremental)',
                  code: '// What TO do (Feature 1 of 8):\n\n"I\'m building a task manager for\nfreelancers using Next.js 14,\nSupabase (PostgreSQL), and\nshadcn/ui.\n\nThe tasks table has: id (uuid),\ntitle (text, not null), due_date\n(date), client_name (text),\nstatus (text, default \'pending\'),\nuser_id (uuid, FK to auth.users),\ncreated_at (timestamp).\n\nBuild ONLY the task creation form\nwith these fields: title, due date\n(date picker), client name (text),\nstatus (dropdown). Save to Supabase\non submit. Show success toast.\n\nHere\'s my wireframe: [screenshot]"',
                },
              ],
            },
          },
          {
            type: 'text',
            body: 'When things break (and they will), use the debugging prompt formula: (1) the exact error message, (2) the steps you took that triggered it, (3) what you expected to happen vs. what actually happened, and (4) your tech stack. "I\'m getting \'relation tasks does not exist\' when I submit the task form in my Next.js 14 + Supabase app. I expected the task to save to the tasks table. The table exists in Supabase but the RLS policies might be blocking inserts." This gives AI the exact context it needs to diagnose the problem in one shot.',
          },
          {
            type: 'text',
            body: 'Git commits are your safety net. After every feature that works, commit it: "feat: add task creation form with Supabase integration." If the next feature breaks everything, you can roll back to the last working state. Without commits, a single bad generation can corrupt your entire codebase with no way to undo it. Think of commits as save points in a video game \u2014 you\'d never play a boss fight without saving first.',
          },
          {
            type: 'prompt-lab',
            config: {
              title: 'Coding Prompts: Bad vs Good',
              pairs: [
                {
                  bad: {
                    text: 'Build the whole app at once with all features.',
                    annotations: ['Tries to generate entire application in one shot', 'AI loses context and coherence on large outputs', 'Impossible to debug when something goes wrong', 'Violates the #1 rule: build one feature at a time']
                  },
                  good: {
                    text: 'I\'m building a task management app with Next.js + Supabase. The database schema is already set up with "tasks" table (id, title, description, status, user_id, created_at). Right now I need ONLY the task creation feature: a form component with title (required) and description (optional) fields, a submit handler that inserts into Supabase, optimistic UI update to the task list, and error handling with a toast notification. The task list component already exists at src/components/TaskList.jsx.',
                    annotations: ['Scopes to ONE feature (task creation only)', 'References existing schema so AI knows the data structure', 'Lists exact UI and logic requirements', 'Mentions existing code to integrate with', 'Includes error handling expectations upfront']
                  }
                },
                {
                  bad: {
                    text: 'Make the app look better.',
                    annotations: ['Completely subjective \u2014 "better" means nothing to AI', 'No reference to current design or desired direction', 'No specific elements to improve', 'Will produce random, potentially conflicting changes']
                  },
                  good: {
                    text: 'Redesign the dashboard page (src/app/dashboard/page.tsx) to match this style: dark background (#1a1a2e), cards with subtle borders (#333) and rounded corners (12px), amber accent color (#e8a838) for primary buttons and active states, DM Sans font for body text at 16px. The dashboard has 3 sections: stats cards row at top, main content area with task list, sidebar with recent activity. Use Tailwind CSS classes only.',
                    annotations: ['Names the exact file to modify', 'Provides specific color hex codes and measurements', 'Describes the layout structure clearly', 'Specifies the styling approach (Tailwind only)', 'Gives enough detail for consistent, predictable results']
                  }
                }
              ]
            }
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is Rule #1 of AI-assisted building?',
              options: ['Always use the latest AI model available', 'Never generate 5 features at once \u2014 build one feature, test it, commit it, then build the next', 'Let AI make all architecture decisions for you', 'Generate the entire app first, then debug everything at the end'],
              correct: 1,
              explanation: 'When you generate multiple features simultaneously, bugs compound and become impossible to trace. One feature at a time means every bug is isolated to the most recent change, making it trivially easy to diagnose.',
            },
            {
              question: 'What four elements should a debugging prompt include?',
              options: ['File name, line number, variable names, function names', 'Error message, steps to reproduce, expected vs. actual behavior, tech stack', 'Screenshot, code snippet, AI model used, time of day', 'Operating system, browser version, screen resolution, network speed'],
              correct: 1,
              explanation: 'The debugging formula \u2014 error message, reproduction steps, expected vs. actual, and tech stack \u2014 gives AI the exact context needed to diagnose the problem quickly. Missing any of these leads to vague, unhelpful responses.',
            },
            {
              question: 'Why should you Git commit after every working feature?',
              options: ['Because GitHub requires frequent commits', 'Because commits make your code run faster', 'Because if the next feature breaks everything, you can roll back to the last working state', 'Because commits automatically fix bugs in your code'],
              correct: 2,
              explanation: 'Git commits are save points. If feature #4 breaks your app, you can roll back to the commit after feature #3 and try again. Without commits, a single bad AI generation can corrupt your entire codebase with no undo option.',
            },
          ],
        },
        takeaway: 'Build one feature at a time, test it, commit it, then build the next. Use specific prompts with your data model and tech stack. When debugging, provide the error, reproduction steps, expected vs. actual, and your stack.',
      },
      {
        id: '8.8',
        title: 'Phase 7 \u2014 Testing Like a Real User',
        estimatedMinutes: 15,
        hook: 'Developers are the worst testers of their own products. You know exactly how the app is supposed to work, so you unconsciously avoid the paths that break it. You always enter valid data. You always click buttons in the right order. You always use Chrome on a laptop. Real users do none of these things. Testing like a real user means actively trying to break your own creation \u2014 because your users will, whether you like it or not.',
        analogy: {
          front: 'Testing is like proofreading your own essay. You\'ll miss typos because your brain auto-corrects what it already knows you meant to write. That\'s why editors exist \u2014 fresh eyes catch what yours can\'t. The same applies to software: you need to test with the mindset of someone who has never seen your app before and might do anything.',
          back: 'Your essay = your app. Typos = bugs. Your brain auto-correcting = developer blindness. Editor = a fresh tester (or you, deliberately being destructive). Proofreading carefully = testing methodically with a checklist.',
        },
        content: [
          {
            type: 'text',
            body: 'The "What If?" game is the most powerful manual testing technique. For every input and every action, ask: What if the input is empty? What if it\'s 10,000 characters long? What if it contains HTML tags or SQL syntax? What if the user hits the submit button twice rapidly? What if they navigate backward after submitting? What if they lose internet mid-action? What if they\'re on a phone with a 4-inch screen? What if they\'re using Safari instead of Chrome? Each "What if?" reveals an edge case your code probably doesn\'t handle.',
          },
          {
            type: 'match',
            config: {
              instruction: 'Match each test scenario to the type of issue it catches.',
              pairs: [
                { left: 'Submit a form with empty fields', right: 'Edge case handling \u2014 does the app validate input or crash on null values?' },
                { left: 'Paste a SQL injection string into a search box', right: 'Security vulnerability \u2014 is user input sanitized before reaching the database?' },
                { left: 'Open the app on an iPhone SE in Safari', right: 'Cross-browser / responsive \u2014 does the layout break on small screens or non-Chrome browsers?' },
                { left: 'Click the "Save" button 5 times in 2 seconds', right: 'Performance / race condition \u2014 does the app create duplicate records or crash on rapid input?' },
              ],
            },
          },
          {
            type: 'text',
            body: 'Here\'s a manual testing checklist for every MVP before launch. Device testing: try your app on at least one phone, one tablet, and one desktop. Browser testing: Chrome, Safari, and Firefox at minimum. Input testing: empty inputs, extremely long inputs, special characters, copy-pasted text with hidden formatting. Navigation testing: use the browser back button, refresh the page mid-flow, open links in new tabs. Auth testing: try accessing protected pages while logged out, let the session expire, log in from two devices. Network testing: disable Wi-Fi mid-action and see what happens.',
          },
          {
            type: 'callout',
            body: 'The single most valuable test you can do: hand your app to someone who has never seen it and say nothing. Don\'t explain how it works. Don\'t guide them. Just watch. Every place they hesitate, look confused, or click the wrong thing reveals a UX problem you\'re blind to as the builder.',
          },
          {
            type: 'vocab',
            terms: [
              { term: 'Edge Case', definition: 'An unusual or extreme condition that your code might not handle: empty input, maximum length, special characters, simultaneous actions. Most bugs live in edge cases.' },
              { term: 'Happy Path', definition: 'The ideal user journey where everything goes right \u2014 valid input, correct order, no errors. The path developers test first and users follow last.' },
              { term: 'Unhappy Path', definition: 'Every other journey: wrong input, unexpected navigation, errors, timeouts, invalid data. The paths real users actually take. Where most bugs hide.' },
              { term: 'Cross-browser Testing', definition: 'Verifying that your app works correctly in multiple browsers (Chrome, Safari, Firefox, Edge). Each browser renders things slightly differently.' },
              { term: 'Responsive Testing', definition: 'Checking that your layout adapts correctly to phones, tablets, and desktops. Elements that overlap, text that overflows, and buttons too small to tap are common issues.' },
              { term: 'Regression', definition: 'When fixing one thing breaks something else that was already working. Happens often when features share code. Git commits help you spot exactly when a regression was introduced.' },
            ],
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why are developers the worst testers of their own products?',
              options: ['Because developers don\'t understand testing', 'Because they unconsciously avoid the paths that break the app since they know exactly how it\'s supposed to work', 'Because automated tests are always better than manual testing', 'Because developers only test on expensive hardware'],
              correct: 1,
              explanation: 'Developer blindness is real: you know the "right" way to use your app, so you never test the wrong ways. You always enter valid data in the right order. Real users explore chaotically \u2014 and find every edge case you missed.',
            },
            {
              question: 'What is the single most valuable test you can perform?',
              options: ['Running an automated test suite with 100% code coverage', 'Hand the app to someone who has never seen it and watch them use it without guidance', 'Testing on the latest iPhone Pro Max', 'Checking that all buttons have the correct color'],
              correct: 1,
              explanation: 'Fresh eyes are invaluable. Someone who has never seen your app will immediately find confusing navigation, unclear labels, and broken flows that you\'ve been unconsciously working around. No automated test can replace this.',
            },
          ],
        },
        takeaway: 'Test like someone who has never seen your app: empty inputs, wrong browsers, rapid clicks, no internet, and the back button. The "What If?" game catches edge cases. Fresh eyes catch everything else.',
      },
      {
        id: '8.9',
        title: 'Phase 8 \u2014 Launch, Monitor, Iterate',
        estimatedMinutes: 15,
        hook: 'Launching isn\'t the end of building \u2014 it\'s the beginning of learning. Every product you admire today looks nothing like its first version. Instagram started as a location check-in app called Burbn. Slack was a failed video game\'s internal chat tool. YouTube was a video dating site. The products that win aren\'t the ones that launch perfectly \u2014 they\'re the ones that launch, learn, and iterate faster than everyone else.',
        analogy: {
          front: 'Launching a product is like opening night for a play. You\'ve rehearsed, built the set, and printed the programs. But opening night isn\'t the finish line \u2014 it\'s the first real test. The audience\'s reactions tell you what works, what\'s confusing, and what to change for tomorrow\'s show. The best plays improve with every performance.',
          back: 'Rehearsal = testing. Opening night = launch. Audience = your users. Their reactions = feedback and usage data. Tomorrow\'s show = the next iteration. A production that never adjusts = a product that never improves.',
        },
        content: [
          {
            type: 'text',
            body: 'The launch sequence is a checklist, not a single moment. First, final QA \u2014 one last pass through your testing checklist from Phase 7. Second, deploy to production \u2014 push your code to the live environment using your hosting provider. Third, set up monitoring \u2014 error tracking (Sentry), uptime monitoring, and basic analytics so you know what\'s happening. Fourth, soft launch \u2014 share with a small group of trusted users (friends, community, beta list) before going wide. Fifth, gather feedback \u2014 watch how people actually use it, what confuses them, what they ask for. Sixth, iterate \u2014 fix the top 3 issues and ship an update. Seventh, full launch \u2014 once you\'re confident the core experience works.',
          },
          {
            type: 'timeline',
            config: {
              title: 'The Launch Sequence',
              steps: [
                { label: 'Final QA', description: 'Run through your complete testing checklist one last time. Test on multiple devices and browsers. Fix any critical bugs. This is your last chance before real users arrive.' },
                { label: 'Deploy to Production', description: 'Push your code to the live environment. Vercel, Railway, or your chosen host. Verify the deployment works by testing the live URL yourself.' },
                { label: 'Set Up Monitoring', description: 'Install error tracking (Sentry or LogRocket), uptime monitoring (BetterUptime), and analytics (Plausible or PostHog). You need to know what\'s breaking before users tell you.' },
                { label: 'Soft Launch', description: 'Share with 10-50 trusted people: friends, community members, colleagues. Ask them to use it for real tasks, not just click around. Real usage reveals real problems.' },
                { label: 'Gather Feedback', description: 'Collect feedback through a simple form, direct messages, or watching session replays. Focus on: what confused them, what they wanted but couldn\'t do, what broke.' },
                { label: 'Iterate', description: 'Fix the top 3 issues from feedback. Don\'t add new features yet \u2014 fix what\'s broken and confusing first. Ship the update. This is the build-measure-learn loop.' },
                { label: 'Full Launch', description: 'Once the core experience works smoothly for soft-launch users, go wide. Share on social media, communities, Product Hunt, or your target audience\'s gathering places.' },
              ],
            },
          },
          {
            type: 'text',
            body: 'The feedback loop \u2014 Ship, Learn, Improve, Ship again \u2014 is the heartbeat of every successful product. Version 1 is your hypothesis. Usage data and feedback tell you where the hypothesis was wrong. Version 2 fixes those gaps. Repeat forever. Even Netflix and Google ship updates daily. "Done" is an illusion \u2014 products are living things that evolve based on how people actually use them versus how you imagined they would.',
          },
          {
            type: 'callout',
            body: 'The #1 mistake after launching: adding new features before fixing existing problems. If users say the sign-up flow is confusing, don\'t respond by adding a dashboard widget. Fix the sign-up flow first. Feature additions on top of a shaky foundation just create more surface area for confusion and bugs.',
          },
          {
            type: 'text',
            body: 'Where to launch for maximum learning: Share in communities where your target users already gather. A developer tool belongs on Hacker News and relevant Discords. A consumer app belongs on Product Hunt and relevant subreddits. An internal tool belongs in a demo with the stakeholders who\'ll use it. Don\'t broadcast to everyone \u2014 target the people most likely to give you honest, useful feedback.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'Why should you soft-launch to a small group before going public?',
              options: ['To generate hype and build a waitlist', 'Because small groups find bugs and confusion that your testing missed, and you can fix them before the wider audience arrives', 'To test whether your hosting can handle traffic', 'Because Product Hunt requires a beta period'],
              correct: 1,
              explanation: 'Soft-launching to 10-50 trusted users reveals real-world problems in a low-stakes environment. You can fix confusing flows, squash bugs, and smooth the experience before hundreds or thousands of people see your product for the first time.',
            },
            {
              question: 'After launching, what should you prioritize: adding new features or fixing existing problems?',
              options: ['Adding new features to attract more users', 'Fixing existing problems before adding anything new', 'Both equally \u2014 alternate between new features and fixes', 'Neither \u2014 wait three months before making any changes'],
              correct: 1,
              explanation: 'Fix what\'s broken and confusing FIRST. New features on a shaky foundation create more problems. If the sign-up flow confuses users, a fancy new dashboard won\'t help \u2014 they\'ll never get past sign-up to see it.',
            },
          ],
        },
        takeaway: 'Launch is the beginning, not the end. Follow the sequence: Final QA, Deploy, Monitor, Soft Launch, Gather Feedback, Iterate, Full Launch. Fix existing problems before adding new features, and remember: Ship, Learn, Improve, Ship again.',
      },
      {
        id: '8.10',
        title: 'Build Your Product Blueprint',
        estimatedMinutes: 20,
        hook: 'You\'ve made it. Eight chapters. From understanding how the internet works to databases, APIs, AI integration, security, and now the complete building process. You didn\'t just learn theory \u2014 you built a mental model of how every piece of modern technology fits together. That mental model is what separates someone who can prompt AI to generate code from someone who can actually ship a real product. This final lesson ties everything together into one cohesive blueprint.',
        analogy: {
          front: 'You\'ve spent this course learning every instrument in the orchestra. Now it\'s time to conduct. You know what the strings, brass, woodwinds, and percussion each do. You understand rhythm, melody, and harmony. Conducting isn\'t about playing every instrument \u2014 it\'s about knowing how they fit together to create something greater than the sum of their parts.',
          back: 'Instruments = technologies (frontend, backend, database, AI, security). Music theory = the concepts from Chapters 1-7. Conducting = the builder\'s process from Chapter 8. The symphony = your shipped product. You are the conductor.',
        },
        content: [
          {
            type: 'text',
            body: 'Let\'s walk through the complete journey. In Chapter 1, you learned that every digital product is built on three layers: a frontend users see, a backend that thinks, and a database that remembers. In Chapter 2, you learned how backends process logic, authenticate users, and talk to databases through APIs. In Chapter 3, you learned how databases store, structure, and relate data. In Chapter 4, you discovered how AI models can be integrated as intelligent features. In Chapter 5, you saw how to connect services through APIs and architecture patterns. In Chapter 6, you explored the tools and workflows that make building possible. In Chapter 7, you learned how to secure and harden everything for production. And in this chapter, you learned the 8-phase process that turns all of that knowledge into a shipped product.',
          },
          {
            type: 'stack-builder',
            config: {
              categories: [
                {
                  name: 'Problem Type',
                  options: [
                    { name: 'Consumer App', description: 'A product for everyday people \u2014 social, productivity, health, finance. Needs polished UI, mobile support, and simple onboarding. Examples: expense tracker, recipe app, habit tracker.' },
                    { name: 'Business Tool', description: 'A product for professionals or teams \u2014 CRM, project management, analytics dashboard. Needs robust data handling, role-based access, and reporting. Examples: client portal, invoice generator.' },
                    { name: 'Data Dashboard', description: 'A visualization tool for monitoring metrics \u2014 sales data, analytics, system health. Needs charts, filters, real-time updates, and data connections. Examples: KPI tracker, market monitor.' },
                    { name: 'AI Feature Product', description: 'A product where AI is the core feature \u2014 chat, analysis, generation, recommendation. Needs prompt engineering, API integration, and cost management. Examples: AI writing tool, code assistant.' },
                    { name: 'Marketplace', description: 'A platform connecting buyers and sellers (or any two-sided market). Needs dual user types, listings, search, transactions, and trust features. Examples: freelancer marketplace, local services.' },
                  ],
                },
                {
                  name: 'MVP Scope',
                  options: [
                    { name: 'Weekend Project (2-3 days)', description: 'Single core feature, minimal UI, one user type. Perfect for testing an idea fast. Auth + one CRUD resource + basic styling. Ship by Sunday.' },
                    { name: '1-Week Sprint', description: '3-5 features, polished UI with a design system, basic error handling and testing. Enough to show real users and gather meaningful feedback.' },
                    { name: 'Month-long Build', description: 'Full MVP with 8-12 features, multiple user types, integrations, proper testing, CI/CD, and monitoring. Ready for a real launch to a wider audience.' },
                  ],
                },
                {
                  name: 'Tech Stack',
                  options: [
                    { name: 'No-Code (Bubble, Webflow)', description: 'Build without writing code. Fastest launch, most constrained. Best for: validating ideas, non-technical founders, simple CRUD apps. Limitation: hard to customize deeply.' },
                    { name: 'BaaS + Frontend (Supabase + React)', description: 'Write frontend code, let the BaaS handle backend. Fast launch with full frontend control. Best for: solo builders who know React but don\'t want to build a custom API.' },
                    { name: 'Full Custom (Next.js + Node + PostgreSQL)', description: 'Full control over everything. Slower to launch, unlimited flexibility. Best for: complex business logic, custom requirements, serious products.' },
                    { name: 'AI-Assisted Full Stack', description: 'Use AI coding assistants (Claude, Cursor, Copilot) to accelerate a full custom stack. Best for: builders who understand the concepts and use AI as an accelerator, not a replacement for thinking.' },
                  ],
                },
                {
                  name: 'AI Integration',
                  options: [
                    { name: 'None Needed', description: 'Not every product needs AI. If your core value doesn\'t require intelligence or generation, skip it. Add it later if users request it.' },
                    { name: 'Simple Chat / Generation', description: 'One API call to generate text, summarize content, or answer questions. Straightforward to implement. Watch costs at scale.' },
                    { name: 'RAG System', description: 'AI that answers from YOUR data using retrieval-augmented generation. Requires embedding pipeline, vector database, and careful prompt design.' },
                    { name: 'AI Agent', description: 'AI that plans and executes multi-step tasks with tool use. Complex to build reliably. Requires guardrails, testing, and fallback handling.' },
                    { name: 'Content Pipeline', description: 'Batch AI processing for generating, translating, or enriching content at scale. Background jobs, queue management, and cost optimization.' },
                  ],
                },
                {
                  name: 'Database',
                  options: [
                    { name: 'Airtable', description: 'Spreadsheet-database hybrid. No code needed. Great for prototypes and small datasets. Limitation: not suitable for production apps with complex queries.' },
                    { name: 'Supabase (PostgreSQL)', description: 'Managed PostgreSQL with auto-generated APIs, auth, and real-time. The default choice for most products. Relational, powerful, and well-documented.' },
                    { name: 'MongoDB', description: 'Document database with flexible schemas. Good for data that doesn\'t fit neatly into rows and columns. Popular in Node.js ecosystems.' },
                    { name: 'PostgreSQL (self-managed)', description: 'Direct PostgreSQL on Railway or AWS. Full control, more setup required. Best for complex queries, custom extensions, or specific compliance needs.' },
                  ],
                },
                {
                  name: 'Launch Strategy',
                  options: [
                    { name: 'Soft Launch to Friends', description: 'Share with 10-20 trusted people for honest feedback. Lowest risk. Best for: first-time builders testing whether the core concept works.' },
                    { name: 'Beta with Waitlist', description: 'Build anticipation with a landing page, collect emails, invite in batches. Best for: products targeting a specific niche with potential word-of-mouth.' },
                    { name: 'Public Launch', description: 'Ship to Product Hunt, Hacker News, relevant subreddits, and social media. Best for: polished MVPs ready for broad feedback and early adoption.' },
                    { name: 'Internal Tool', description: 'Deploy for your team, company, or personal use. No public launch needed. Best for: tools that solve your own problems or automate your own workflows.' },
                  ],
                },
              ],
            },
          },
          {
            type: 'timeline',
            config: {
              title: 'Your Complete Build Plan',
              steps: [
                { label: '1. Define the Problem', description: 'WHO has this problem? WHAT is it? HOW do they solve it today? WHY would they switch? Validate with real conversations, not assumptions.' },
                { label: '2. Design the MVP', description: 'MoSCoW your features. Must-haves only for version 1. Write user stories. Define what "done" looks like. Put everything else in the Version 2 list.' },
                { label: '3. Choose Your Stack', description: 'Pick your frontend, backend, database, hosting, and AI tools. Choose boring technology. Match the stack to your product type and timeline.' },
                { label: '4. Model Your Data', description: 'List entities, define fields, set primary keys, map relationships, add constraints. Validate against every MVP feature. This is your foundation.' },
                { label: '5. Design the UI', description: 'Wireframe every screen. Diagram user flows. Inventory components. Screenshot similar apps for reference. Pick a design system.' },
                { label: '6. Build Feature by Feature', description: 'One feature at a time. Specific prompts with your data model and stack. Test each feature. Git commit after each working feature. Repeat.' },
                { label: '7. Test Everything', description: 'Play the "What If?" game. Test on phones, tablets, different browsers. Get fresh eyes on it. Fix edge cases and confusing flows.' },
                { label: '8. Ship It', description: 'Final QA. Deploy. Monitor. Soft launch. Gather feedback. Fix the top 3 issues. Full launch. Then: Ship, Learn, Improve, Ship again. Forever.' },
              ],
            },
          },
          {
            type: 'callout',
            body: 'You now know more about how software products are built than 95% of people who try to use AI to build apps. The difference between you and a "vibe coder" is that you understand the WHY behind every decision. You know why data models matter, why architecture choices are hard to reverse, why security can\'t be an afterthought, and why building one feature at a time beats generating everything at once. That understanding is permanent \u2014 and it makes every AI tool exponentially more powerful in your hands.',
          },
        ],
        checkpoint: {
          type: 'quiz',
          questions: [
            {
              question: 'What is the correct order of the 8-phase product lifecycle?',
              options: ['Architecture \u2192 Problem \u2192 Data \u2192 UI \u2192 Build \u2192 MVP \u2192 Test \u2192 Deploy', 'Problem \u2192 MVP \u2192 Architecture \u2192 Data Model \u2192 UI/UX \u2192 Build \u2192 Test \u2192 Deploy', 'Build \u2192 Test \u2192 Problem \u2192 MVP \u2192 Architecture \u2192 Data \u2192 UI \u2192 Deploy', 'MVP \u2192 Build \u2192 Architecture \u2192 Problem \u2192 UI \u2192 Data \u2192 Test \u2192 Deploy'],
              correct: 1,
              explanation: 'The lifecycle always starts with the problem, then designs the minimum solution, makes technology choices, models the data, designs the interface, builds incrementally, tests thoroughly, and finally deploys. Each phase builds on the previous one.',
            },
            {
              question: 'A user tells you: "I want to build an app that helps people find dog walkers in their neighborhood." What should you do FIRST?',
              options: ['Open a code editor and scaffold a React app', 'Choose between Supabase and Firebase', 'Ask: Who specifically has this problem? How do they find dog walkers today? Why would they switch from existing solutions?', 'Design the database schema for users, dog walkers, and bookings'],
              correct: 2,
              explanation: 'Phase 1 is always Problem Definition. Before any technology decisions, you need to understand WHO has the problem, HOW they solve it today (maybe they already use Rover or Nextdoor), and WHY they\'d switch to a new solution. The answers shape everything else.',
            },
            {
              question: 'Which of these is the BEST reason to choose React + Supabase + Vercel for a new project?',
              options: ['Because it\'s the newest, most cutting-edge stack available', 'Because it\'s the most expensive, so it must be the best', 'Because it\'s well-documented, has the largest community, and offers the fastest path from idea to deployed product', 'Because everyone on Twitter recommends it'],
              correct: 2,
              explanation: 'The "boring technology" principle: choose tools with strong documentation, large communities, and proven reliability. React + Supabase + Vercel checks all three boxes, plus offers an extremely fast development cycle for most product types.',
            },
            {
              question: 'You\'re building a recipe-sharing app. You store ingredients as a comma-separated text field in the recipes table: "flour, sugar, eggs." What problem will this cause?',
              options: ['The text field will run out of storage space', 'You won\'t be able to search by ingredient, calculate nutrition, or suggest recipes by available ingredients', 'Commas will break the SQL query syntax', 'Users won\'t be able to read the ingredient list on mobile screens'],
              correct: 1,
              explanation: 'Storing ingredients as comma-separated text prevents you from querying individual ingredients. A proper Ingredients table with a many-to-many junction table (recipe_ingredients) makes search, filtering, and nutrition calculation trivial.',
            },
            {
              question: 'You\'ve completed all 8 chapters of The Builder\'s Atlas. What is the single most important thing that separates you from someone who just "vibe codes" with AI?',
              options: ['You can write code faster than they can', 'You understand the WHY behind every decision \u2014 data models, architecture, security, testing \u2014 which makes AI tools exponentially more powerful in your hands', 'You know more programming languages', 'You have access to better AI models'],
              correct: 1,
              explanation: 'AI tools are force multipliers \u2014 they multiply whatever understanding you bring. Someone with deep understanding of architecture, data modeling, and security gets 10x value from AI. Someone without that understanding gets 10x confusion. You now have the understanding.',
            },
          ],
        },
        takeaway: 'You now have the complete mental model: problem definition, MVP design, architecture, data modeling, UI/UX, iterative building, testing, and deployment. This understanding makes every AI tool exponentially more powerful in your hands. Head to the "My Roadmap" tab to get an AI-generated blueprint for YOUR specific product idea \u2014 you\'ve earned it.',
      },
    ],
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Compute total lesson count across all chapters.
 * @returns {number}
 */
function getTotalLessons() {
  return CHAPTERS.reduce((sum, ch) => sum + ch.lessons.length, 0);
}

/**
 * Compute total available (non-coming-soon) lesson count.
 * @returns {number}
 */
function getAvailableLessons() {
  return CHAPTERS.reduce(
    (sum, ch) => sum + ch.lessons.filter((l) => !l.comingSoon).length,
    0
  );
}

/**
 * Get flat list of all lesson IDs.
 * @returns {string[]}
 */
function getAllLessonIds() {
  return CHAPTERS.flatMap((ch) => ch.lessons.map((l) => l.id));
}

/**
 * Compute completion percentage for a chapter.
 * @param {object} chapter
 * @param {string[]} completedLessons
 * @returns {number} 0-100
 */
function getChapterProgress(chapter, completedLessons) {
  if (!chapter.lessons.length) return 0;
  const done = chapter.lessons.filter((l) =>
    completedLessons.includes(l.id)
  ).length;
  return Math.round((done / chapter.lessons.length) * 100);
}

/**
 * Compute overall completion percentage.
 * @param {string[]} completedLessons
 * @returns {number} 0-100
 */
function getOverallProgress(completedLessons) {
  const total = getTotalLessons();
  if (!total) return 0;
  return Math.round((completedLessons.length / total) * 100);
}

/**
 * Estimate remaining minutes based on incomplete lessons.
 * @param {string[]} completedLessons
 * @returns {number}
 */
function getEstimatedTimeRemaining(completedLessons) {
  let minutes = 0;
  CHAPTERS.forEach((ch) => {
    ch.lessons.forEach((l) => {
      if (!completedLessons.includes(l.id) && !l.comingSoon) {
        minutes += l.estimatedMinutes || 10;
      }
    });
  });
  return minutes;
}

/**
 * Find chapter and lesson indices from a lesson ID like "1.2".
 * @param {string} lessonId
 * @returns {{ chapterIndex: number, lessonIndex: number } | null}
 */
function findLessonById(lessonId) {
  for (let ci = 0; ci < CHAPTERS.length; ci++) {
    for (let li = 0; li < CHAPTERS[ci].lessons.length; li++) {
      if (CHAPTERS[ci].lessons[li].id === lessonId) {
        return { chapterIndex: ci, lessonIndex: li };
      }
    }
  }
  return null;
}

/**
 * Get next lesson indices (cross-chapter navigation).
 * @param {number} chapterIndex
 * @param {number} lessonIndex
 * @returns {{ chapterIndex: number, lessonIndex: number } | null}
 */
function getNextLesson(chapterIndex, lessonIndex) {
  const chapter = CHAPTERS[chapterIndex];
  if (lessonIndex < chapter.lessons.length - 1) {
    return { chapterIndex, lessonIndex: lessonIndex + 1 };
  }
  if (chapterIndex < CHAPTERS.length - 1) {
    return { chapterIndex: chapterIndex + 1, lessonIndex: 0 };
  }
  return null;
}

/**
 * Get previous lesson indices (cross-chapter navigation).
 * @param {number} chapterIndex
 * @param {number} lessonIndex
 * @returns {{ chapterIndex: number, lessonIndex: number } | null}
 */
function getPrevLesson(chapterIndex, lessonIndex) {
  if (lessonIndex > 0) {
    return { chapterIndex, lessonIndex: lessonIndex - 1 };
  }
  if (chapterIndex > 0) {
    const prevChapter = CHAPTERS[chapterIndex - 1];
    return {
      chapterIndex: chapterIndex - 1,
      lessonIndex: prevChapter.lessons.length - 1,
    };
  }
  return null;
}

// ============================================================================
// REDUCER
// ============================================================================

const initialState = {
  activeTab: 'learn',
  currentChapter: 0,
  currentLesson: 0,
  completedLessons: [],
  quizAnswers: {},
  sidebarOpen: false,
  solver: {
    step: 'input',
    userIdea: '',
    followUpQuestions: [],
    followUpAnswers: {},
    roadmap: null,
    generatedPrompt: null,
    selectedOption: 'free',
    history: [],
  },
  apiKey: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, activeTab: action.payload, sidebarOpen: false };

    case 'NAVIGATE_LESSON':
      return {
        ...state,
        currentChapter: action.payload.chapterIndex,
        currentLesson: action.payload.lessonIndex,
        activeTab: 'learn',
        sidebarOpen: false,
      };

    case 'COMPLETE_LESSON': {
      const lessonId = action.payload;
      if (state.completedLessons.includes(lessonId)) return state;
      return {
        ...state,
        completedLessons: [...state.completedLessons, lessonId],
      };
    }

    case 'ANSWER_QUIZ': {
      const { lessonId, questionIndex, selectedOption } = action.payload;
      return {
        ...state,
        quizAnswers: {
          ...state.quizAnswers,
          [lessonId]: {
            ...(state.quizAnswers[lessonId] || {}),
            [questionIndex]: selectedOption,
          },
        },
      };
    }

    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case 'SOLVER_SET_STEP':
      return { ...state, solver: { ...state.solver, step: action.payload } };

    case 'SOLVER_SET_IDEA':
      return { ...state, solver: { ...state.solver, userIdea: action.payload } };

    case 'SOLVER_SET_QUESTIONS':
      return { ...state, solver: { ...state.solver, followUpQuestions: action.payload, followUpAnswers: {} } };

    case 'SOLVER_ANSWER':
      return {
        ...state,
        solver: {
          ...state.solver,
          followUpAnswers: {
            ...state.solver.followUpAnswers,
            [action.payload.index]: action.payload.value,
          },
        },
      };

    case 'SOLVER_SET_ROADMAP':
      return {
        ...state,
        solver: {
          ...state.solver,
          roadmap: action.payload.roadmap,
          generatedPrompt: action.payload.prompt,
          step: 'roadmap',
        },
      };

    case 'SOLVER_RESET':
      return {
        ...state,
        solver: {
          ...state.solver,
          step: 'input',
          userIdea: '',
          followUpQuestions: [],
          followUpAnswers: {},
          roadmap: null,
          generatedPrompt: null,
          selectedOption: 'free',
        },
      };

    case 'SOLVER_SELECT_OPTION':
      return { ...state, solver: { ...state.solver, selectedOption: action.payload } };

    case 'SOLVER_ADD_HISTORY': {
      const entry = {
        id: Date.now(),
        idea: state.solver.userIdea,
        roadmap: state.solver.roadmap,
        prompt: state.solver.generatedPrompt,
        createdAt: new Date().toISOString(),
      };
      return {
        ...state,
        solver: {
          ...state.solver,
          history: [entry, ...state.solver.history].slice(0, 20),
        },
      };
    }

    case 'SET_API_KEY':
      return { ...state, apiKey: action.payload };

    case 'LOAD_SAVED':
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

/**
 * Detect swipe gestures for touch navigation.
 * @param {Function} onSwipeLeft  - Called when user swipes left (next)
 * @param {Function} onSwipeRight - Called when user swipes right (prev)
 * @returns {object} Touch event handlers to spread on a container
 */
function useSwipe(onSwipeLeft, onSwipeRight) {
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) onSwipeLeft();
    if (isRightSwipe && onSwipeRight) onSwipeRight();

    touchStart.current = null;
    touchEnd.current = null;
  }, [onSwipeLeft, onSwipeRight]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}

/**
 * Reactive media query hook.
 * @param {string} query - CSS media query string
 * @returns {boolean}
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * Persist and load state from localStorage.
 * @param {string} key
 * @param {*} initialValue
 * @returns {[*, Function]}
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.error('useLocalStorage write error:', err);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

// ============================================================================
// ATOMIC COMPONENTS
// ============================================================================

/**
 * Reusable button with variant, size, and full-width support.
 */
function Button({
  children,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-200 touch-press focus:outline-none focus:ring-2 focus:ring-amber/50 disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-amber text-charcoal hover-glow hover:bg-amber-light active:bg-amber-dark',
    secondary: 'bg-charcoal-light text-cream border border-charcoal-lighter hover:bg-charcoal-lighter active:bg-charcoal',
    ghost: 'bg-transparent text-cream/70 hover:text-cream hover:bg-charcoal-light active:bg-charcoal-lighter',
    danger: 'bg-danger text-white hover:bg-danger-light active:bg-danger',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    default: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

/**
 * Card container with optional glow (amber border).
 */
function Card({ children, glow = false, className = '', onClick, ...rest }) {
  return (
    <div
      className={`p-5 rounded-xl bg-charcoal-light shadow-lg transition-all duration-200 ${
        glow ? 'border border-amber/40 hover-glow' : 'border border-charcoal-lighter/30'
      } ${onClick ? 'cursor-pointer touch-press' : ''} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Small rounded pill badge for metadata.
 */
function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-charcoal-lighter/60 text-cream/70',
    amber: 'bg-amber/20 text-amber',
    sage: 'bg-sage/20 text-sage-light',
    danger: 'bg-danger/20 text-danger-light',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium font-body ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Horizontal progress bar with animated fill.
 */
function ProgressBar({ value = 0, max = 100, height = 'h-1.5', className = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full bg-charcoal-lighter/40 rounded-full overflow-hidden ${height} ${className}`}>
      <div
        className="h-full bg-amber rounded-full transition-all duration-700 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/**
 * SVG progress ring for chapter completion.
 */
function ProgressRing({ value = 0, size = 48, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-charcoal-lighter/40"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="text-amber transition-all duration-700 ease-out"
        style={{ '--circumference': circumference }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-cream fill-current transform rotate-90 origin-center"
        style={{ fontSize: size * 0.28, fontFamily: 'DM Sans' }}
      >
        {value}%
      </text>
    </svg>
  );
}

// ============================================================================
// CONTENT RENDERING COMPONENTS
// ============================================================================

/**
 * Flip card for the analogy (front = plain-English analogy, back = technical mapping).
 */
function ConceptCard({ analogy }) {
  const [flipped, setFlipped] = useState(false);

  if (!analogy.front && !analogy.back) return null;

  return (
    <Card className="!p-0 overflow-hidden cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className="p-4 pb-2 flex items-center justify-between">
        <span className="text-xs font-body uppercase tracking-wider text-amber/80">
          {flipped ? 'Technical Mapping' : 'The Analogy'}
        </span>
        <span className="text-xs text-cream/40 flex items-center gap-1">
          <RotateCcw size={12} />
          Tap to flip
        </span>
      </div>
      <div className="relative" style={{ minHeight: 140 }}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="flip-card-front absolute inset-0 p-4 pt-1">
            <p className="font-body text-cream/90 leading-relaxed text-sm">
              {analogy.front}
            </p>
          </div>
          <div className="flip-card-back absolute inset-0 p-4 pt-1 bg-charcoal-light">
            <p className="font-body text-amber-light leading-relaxed text-sm font-medium">
              {analogy.back}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

/**
 * Vocabulary term list.
 */
function VocabBlock({ terms }) {
  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <BookMarked size={16} />
        Key Vocabulary
      </h4>
      <dl className="space-y-3">
        {terms.map((t, i) => (
          <div key={i} className="pl-3 border-l-2 border-charcoal-lighter">
            <dt className="font-body font-semibold text-cream text-sm">{t.term}</dt>
            <dd className="font-body text-cream/60 text-sm mt-0.5">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

/**
 * Diagram placeholder with a visual representation.
 */
function DiagramBlock({ variant }) {
  if (variant === 'three-layer') {
    return (
      <Card className="!p-4 text-center">
        <p className="text-xs text-cream/40 uppercase tracking-wider mb-3 font-body">Architecture Diagram</p>
        <div className="space-y-2">
          <div className="bg-electric/20 border border-electric/30 rounded-lg py-3 px-4">
            <span className="text-electric-light font-body text-sm font-medium">Frontend (User Interface)</span>
          </div>
          <div className="flex items-center justify-center">
            <ChevronDown size={16} className="text-cream/30" />
            <span className="text-xs text-cream/30 mx-2 font-body">API</span>
            <ChevronUp size={16} className="text-cream/30" />
          </div>
          <div className="bg-amber/20 border border-amber/30 rounded-lg py-3 px-4">
            <span className="text-amber-light font-body text-sm font-medium">Backend (Logic & Processing)</span>
          </div>
          <div className="flex items-center justify-center">
            <ChevronDown size={16} className="text-cream/30" />
            <ChevronUp size={16} className="text-cream/30" />
          </div>
          <div className="bg-sage/20 border border-sage/30 rounded-lg py-3 px-4">
            <span className="text-sage-light font-body text-sm font-medium">Database (Storage)</span>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'api-flow') {
    const steps = [
      { label: 'User', color: 'electric', icon: '👤' },
      { label: 'Frontend', color: 'electric', icon: '🖥️' },
      { label: 'API Request', color: 'amber', icon: '📤' },
      { label: 'Backend', color: 'amber', icon: '⚙️' },
      { label: 'Database', color: 'sage', icon: '🗄️' },
      { label: 'Response', color: 'amber', icon: '📥' },
      { label: 'Frontend', color: 'electric', icon: '🖥️' },
      { label: 'User', color: 'electric', icon: '👤' },
    ];
    const colorMap = {
      electric: 'bg-electric/20 border-electric/30 text-electric-light',
      amber: 'bg-amber/20 border-amber/30 text-amber-light',
      sage: 'bg-sage/20 border-sage/30 text-sage-light',
    };
    return (
      <Card className="!p-4 text-center">
        <p className="text-xs text-cream/40 uppercase tracking-wider mb-3 font-body">API Request Flow</p>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className={`border rounded-lg py-2 px-3 ${colorMap[step.color]}`}
                style={{ animationDelay: `${i * 150}ms`, animation: 'fadeInUp 0.4s ease-out both' }}
              >
                <div className="text-base leading-none mb-1">{step.icon}</div>
                <span className="font-body text-xs font-medium">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={14} className="text-cream/30 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs text-cream/30 mt-3 font-body">Data flows from user to database and back — the API is the messenger at each boundary</p>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Card>
    );
  }

  if (variant === 'rag-pipeline') {
    const phases = [
      { section: 'Ingestion (One-time Setup)', color: 'electric', steps: [
        { icon: '📄', label: 'Documents' },
        { icon: '✂️', label: 'Chunking' },
        { icon: '🔢', label: 'Embedding' },
        { icon: '🗄️', label: 'Vector DB' },
      ]},
      { section: 'Query (Every Question)', color: 'amber', steps: [
        { icon: '❓', label: 'User Question' },
        { icon: '🔢', label: 'Embedding' },
        { icon: '🔍', label: 'Similarity Search' },
      ]},
      { section: 'Generation', color: 'sage', steps: [
        { icon: '📋', label: 'Relevant Chunks + Question' },
        { icon: '🤖', label: 'LLM' },
        { icon: '✅', label: 'Grounded Answer' },
      ]},
    ];
    const sectionColors = {
      electric: { bg: 'bg-electric/10', border: 'border-electric/20', text: 'text-electric-light', stepBg: 'bg-electric/20', stepBorder: 'border-electric/30' },
      amber: { bg: 'bg-amber/10', border: 'border-amber/20', text: 'text-amber-light', stepBg: 'bg-amber/20', stepBorder: 'border-amber/30' },
      sage: { bg: 'bg-sage/10', border: 'border-sage/20', text: 'text-sage-light', stepBg: 'bg-sage/20', stepBorder: 'border-sage/30' },
    };
    return (
      <Card className="!p-4">
        <p className="text-xs text-cream/40 uppercase tracking-wider mb-3 font-body text-center">RAG Pipeline</p>
        <div className="space-y-3">
          {phases.map((phase, pi) => {
            const c = sectionColors[phase.color];
            return (
              <div key={pi} className={`${c.bg} border ${c.border} rounded-lg p-3`} style={{ animationDelay: `${pi * 200}ms`, animation: 'fadeInUp 0.4s ease-out both' }}>
                <p className={`text-xs font-body font-semibold ${c.text} mb-2 uppercase tracking-wider`}>{phase.section}</p>
                <div className="flex flex-wrap items-center justify-center gap-1">
                  {phase.steps.map((step, si) => (
                    <React.Fragment key={si}>
                      <div className={`${c.stepBg} border ${c.stepBorder} rounded-md py-1.5 px-2.5`}>
                        <div className="text-sm leading-none mb-0.5">{step.icon}</div>
                        <span className={`font-body text-xs font-medium ${c.text}`}>{step.label}</span>
                      </div>
                      {si < phase.steps.length - 1 && (
                        <ArrowRight size={12} className="text-cream/30 flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Card>
    );
  }

  if (variant === 'cicd-pipeline') {
    const stages = [
      { icon: '💻', label: 'Code Push', sub: 'Developer commits', color: 'electric' },
      { icon: '🐙', label: 'GitHub', sub: 'Triggers pipeline', color: 'electric' },
      { icon: '🧪', label: 'Run Tests', sub: 'Lint + unit tests', color: 'amber' },
      { icon: '🔨', label: 'Build', sub: 'Compile & bundle', color: 'amber' },
      { icon: '🚀', label: 'Deploy', sub: 'Push to server', color: 'sage' },
      { icon: '🌐', label: 'Live Site', sub: 'Users see changes', color: 'sage' },
    ];
    const colorMap = {
      electric: { bg: 'bg-electric/20', border: 'border-electric/30', text: 'text-electric-light' },
      amber: { bg: 'bg-amber/20', border: 'border-amber/30', text: 'text-amber-light' },
      sage: { bg: 'bg-sage/20', border: 'border-sage/30', text: 'text-sage-light' },
    };
    return (
      <Card className="!p-4 text-center">
        <p className="text-xs text-cream/40 uppercase tracking-wider mb-3 font-body">CI/CD Pipeline</p>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {stages.map((stage, i) => {
            const c = colorMap[stage.color];
            return (
              <React.Fragment key={i}>
                <div
                  className={`${c.bg} border ${c.border} rounded-lg py-2 px-3 min-w-[70px]`}
                  style={{ animationDelay: `${i * 150}ms`, animation: 'fadeInUp 0.4s ease-out both' }}
                >
                  <div className="text-base leading-none mb-1">{stage.icon}</div>
                  <span className={`font-body text-xs font-medium ${c.text} block`}>{stage.label}</span>
                  <span className="font-body text-[10px] text-cream/40 block mt-0.5">{stage.sub}</span>
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight size={14} className="text-cream/30 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs font-body">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-electric/50 inline-block"></span> <span className="text-cream/40">Source</span></span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber/50 inline-block"></span> <span className="text-cream/40">Verify & Build</span></span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sage/50 inline-block"></span> <span className="text-cream/40">Ship</span></span>
        </div>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Card>
    );
  }

  return (
    <Card className="!p-4 text-center">
      <p className="text-cream/40 text-sm font-body">Diagram: {variant}</p>
    </Card>
  );
}

/**
 * Quiz checkpoint component with interactive answer selection.
 */
function QuizCheckpoint({ checkpoint, lessonId, quizAnswers, dispatch }) {
  if (!checkpoint || checkpoint.type !== 'quiz') return null;

  const answers = quizAnswers[lessonId] || {};
  const allAnswered = checkpoint.questions.every(
    (_, i) => answers[i] !== undefined
  );
  const correctCount = checkpoint.questions.filter(
    (q, i) => answers[i] === q.correct
  ).length;

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-4 flex items-center gap-2">
        <CheckCircle2 size={16} />
        Knowledge Check
      </h4>
      <div className="space-y-5">
        {checkpoint.questions.map((q, qi) => {
          const selected = answers[qi];
          const hasAnswered = selected !== undefined;
          const isCorrect = selected === q.correct;

          return (
            <div key={qi} className="space-y-2">
              <p className="font-body text-cream text-sm font-medium">
                {qi + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {q.options.map((opt, oi) => {
                  let optionClass =
                    'px-3 py-2 rounded-lg text-sm font-body text-left transition-all duration-200 cursor-pointer border ';

                  if (!hasAnswered) {
                    optionClass +=
                      'bg-charcoal/60 border-charcoal-lighter/30 text-cream/80 hover:bg-charcoal-lighter/50 hover:border-cream/20';
                  } else if (oi === q.correct) {
                    optionClass +=
                      'bg-sage/20 border-sage/40 text-sage-light';
                  } else if (oi === selected && !isCorrect) {
                    optionClass +=
                      'bg-danger/20 border-danger/40 text-danger-light';
                  } else {
                    optionClass +=
                      'bg-charcoal/30 border-charcoal-lighter/20 text-cream/40';
                  }

                  return (
                    <button
                      key={oi}
                      className={optionClass}
                      disabled={hasAnswered}
                      onClick={() =>
                        dispatch({
                          type: 'ANSWER_QUIZ',
                          payload: {
                            lessonId,
                            questionIndex: qi,
                            selectedOption: oi,
                          },
                        })
                      }
                    >
                      <span className="font-medium mr-2 text-cream/40">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {hasAnswered && (
                <p
                  className={`text-xs font-body mt-1 pl-3 border-l-2 ${
                    isCorrect
                      ? 'border-sage text-sage-light/80'
                      : 'border-danger text-danger-light/80'
                  }`}
                >
                  {isCorrect ? 'Correct! ' : 'Not quite. '}
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {allAnswered && (
        <div className="mt-4 pt-3 border-t border-charcoal-lighter/30 text-center">
          <p className="font-body text-sm text-cream/70">
            Score:{' '}
            <span className="text-amber font-semibold">
              {correctCount}/{checkpoint.questions.length}
            </span>
          </p>
        </div>
      )}
    </Card>
  );
}

// ============================================================================
// INTERACTIVE COMPONENT TYPES
// ============================================================================

/**
 * DecisionTree — Interactive branching flowchart.
 * User clicks an answer to see the next question, eventually reaching a recommendation.
 * @param {{ config: { title: string, start: string, nodes: Object } }} props
 */
function DecisionTree({ config }) {
  const [currentNodeId, setCurrentNodeId] = useState(config.start);
  const [history, setHistory] = useState([]);

  const currentNode = config.nodes[currentNodeId];
  const isResult = !!currentNode?.result;

  const handleOption = (nextId) => {
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(nextId);
  };

  const handleStartOver = () => {
    setHistory([]);
    setCurrentNodeId(config.start);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentNodeId(prev);
  };

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-4 flex items-center gap-2">
        <GitBranch size={16} />
        {config.title}
      </h4>

      {/* Progress breadcrumb */}
      {history.length > 0 && (
        <div className="flex items-center gap-1 mb-3 flex-wrap">
          {history.map((nodeId, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[10px] font-body text-cream/30">
                {config.nodes[nodeId]?.question ? 'Q' + (idx + 1) : 'R'}
              </span>
              <ChevronRight size={10} className="text-cream/20" />
            </React.Fragment>
          ))}
          <span className="text-[10px] font-body text-amber">
            {isResult ? 'Result' : 'Q' + (history.length + 1)}
          </span>
        </div>
      )}

      {/* Current node */}
      {isResult ? (
        <div className="bg-sage/15 border border-sage/30 rounded-lg p-4 mb-3">
          <p className="text-xs font-body text-sage-light/70 uppercase tracking-wider mb-1">
            Recommendation
          </p>
          <p className="font-display text-sage-light text-base font-semibold mb-2">
            {currentNode.result}
          </p>
          {currentNode.explanation && (
            <p className="font-body text-cream/70 text-sm">
              {currentNode.explanation}
            </p>
          )}
        </div>
      ) : (
        <div className="mb-3">
          <p className="font-body text-cream font-medium text-sm mb-3">
            {currentNode.question}
          </p>
          <div className="space-y-2">
            {currentNode.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOption(opt.next)}
                className="w-full min-h-[48px] px-4 py-3 rounded-lg text-sm font-body text-left
                  bg-charcoal/60 border border-charcoal-lighter/30 text-cream/80
                  hover:bg-charcoal-lighter/50 hover:border-cream/20
                  transition-all duration-200 cursor-pointer touch-press
                  flex items-center gap-2"
              >
                <ChevronRight size={14} className="text-amber shrink-0" />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex gap-2">
        {history.length > 0 && (
          <Button variant="ghost" size="sm" onClick={handleBack}>
            <ChevronLeft size={14} />
            Back
          </Button>
        )}
        {(isResult || history.length > 0) && (
          <Button variant="secondary" size="sm" onClick={handleStartOver}>
            <RotateCcw size={14} />
            Start Over
          </Button>
        )}
      </div>
    </Card>
  );
}

/**
 * OrderSteps — Tap-to-order exercise.
 * User taps items in the order they think is correct. Items move between
 * "available" and "ordered" pools. NOT drag-and-drop (mobile-friendly).
 * @param {{ config: { instruction: string, items: Array, correctOrder: string[] } }} props
 */
function OrderSteps({ config }) {
  const [ordered, setOrdered] = useState([]);
  const [checked, setChecked] = useState(false);

  const available = config.items.filter(
    (item) => !ordered.find((o) => o.id === item.id)
  );

  const handleTapAvailable = (item) => {
    if (checked) return;
    setOrdered((prev) => [...prev, item]);
  };

  const handleTapOrdered = (item) => {
    if (checked) return;
    setOrdered((prev) => prev.filter((o) => o.id !== item.id));
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    setOrdered([]);
    setChecked(false);
  };

  const isCorrectPosition = (item, index) => {
    return config.correctOrder[index] === item.id;
  };

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <ListOrdered size={16} />
        Order the Steps
      </h4>
      <p className="font-body text-cream/80 text-sm mb-4">{config.instruction}</p>

      {/* Your Order section */}
      <div className="mb-4">
        <p className="text-xs font-body text-cream/50 uppercase tracking-wider mb-2">
          Your Order {ordered.length > 0 && `(${ordered.length}/${config.items.length})`}
        </p>
        {ordered.length === 0 ? (
          <div className="border border-dashed border-charcoal-lighter/40 rounded-lg py-4 text-center">
            <p className="text-xs font-body text-cream/30">Tap items below to order them</p>
          </div>
        ) : (
          <div className="space-y-1.5">
            {ordered.map((item, idx) => {
              let itemClass =
                'w-full min-h-[48px] px-4 py-3 rounded-lg text-sm font-body text-left flex items-center gap-3 transition-all duration-200 cursor-pointer touch-press border ';

              if (checked) {
                itemClass += isCorrectPosition(item, idx)
                  ? 'bg-sage/15 border-sage/40 text-sage-light'
                  : 'bg-danger/15 border-danger/40 text-danger-light';
              } else {
                itemClass += 'bg-amber/10 border-amber/30 text-cream';
              }

              return (
                <button
                  key={item.id}
                  className={itemClass}
                  onClick={() => handleTapOrdered(item)}
                  disabled={checked}
                >
                  <span className="font-semibold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-charcoal-lighter/40">
                    {idx + 1}
                  </span>
                  <span className="flex-1">{item.text}</span>
                  {checked && (
                    isCorrectPosition(item, idx)
                      ? <Check size={14} className="text-sage-light shrink-0" />
                      : <X size={14} className="text-danger-light shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Available items */}
      {available.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-body text-cream/50 uppercase tracking-wider mb-2">
            Available Items
          </p>
          <div className="space-y-1.5">
            {available.map((item) => (
              <button
                key={item.id}
                className="w-full min-h-[48px] px-4 py-3 rounded-lg text-sm font-body text-left
                  bg-charcoal/60 border border-charcoal-lighter/30 text-cream/80
                  hover:bg-charcoal-lighter/50 hover:border-cream/20
                  transition-all duration-200 cursor-pointer touch-press
                  flex items-center gap-3"
                onClick={() => handleTapAvailable(item)}
                disabled={checked}
              >
                <ArrowRight size={14} className="text-amber/60 shrink-0" />
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2">
        {ordered.length === config.items.length && !checked && (
          <Button variant="primary" size="sm" onClick={handleCheck}>
            <Check size={14} />
            Check Answer
          </Button>
        )}
        {(ordered.length > 0 || checked) && (
          <Button variant="secondary" size="sm" onClick={handleReset}>
            <RotateCcw size={14} />
            Reset
          </Button>
        )}
      </div>

      {/* Score display */}
      {checked && (
        <div className="mt-3 pt-3 border-t border-charcoal-lighter/30 text-center">
          <p className="font-body text-sm text-cream/70">
            Correct positions:{' '}
            <span className="text-amber font-semibold">
              {ordered.filter((item, idx) => isCorrectPosition(item, idx)).length}/
              {config.items.length}
            </span>
          </p>
        </div>
      )}
    </Card>
  );
}

/**
 * MatchExercise — Match items from column A to column B.
 * User taps a left item to select it, then taps a right item to pair them.
 * Uses distinct colors for each matched pair.
 * @param {{ config: { instruction: string, pairs: Array<{ left: string, right: string }> } }} props
 */
function MatchExercise({ config }) {
  const PAIR_COLORS = [
    { bg: 'bg-amber/20', border: 'border-amber/50', text: 'text-amber-light' },
    { bg: 'bg-electric/20', border: 'border-electric/50', text: 'text-electric-light' },
    { bg: 'bg-sage/20', border: 'border-sage/50', text: 'text-sage-light' },
    { bg: 'bg-danger/20', border: 'border-danger/50', text: 'text-danger-light' },
    { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-300' },
    { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-300' },
    { bg: 'bg-pink-500/20', border: 'border-pink-500/50', text: 'text-pink-300' },
    { bg: 'bg-orange-500/20', border: 'border-orange-500/50', text: 'text-orange-300' },
  ];

  // Shuffle right column on mount
  const shuffledRight = useMemo(() => {
    const arr = config.pairs.map((p, i) => ({ text: p.right, originalIndex: i }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [config.pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // { leftIndex: rightOriginalIndex }
  const [checked, setChecked] = useState(false);

  const handleLeftTap = (leftIndex) => {
    if (checked) return;
    // If already matched, unmatch it
    if (matches[leftIndex] !== undefined) {
      setMatches((prev) => {
        const next = { ...prev };
        delete next[leftIndex];
        return next;
      });
      return;
    }
    setSelectedLeft(leftIndex === selectedLeft ? null : leftIndex);
  };

  const handleRightTap = (rightOriginalIndex) => {
    if (checked || selectedLeft === null) return;
    // Check if this right item is already matched to something else
    const alreadyMatchedLeft = Object.keys(matches).find(
      (k) => matches[k] === rightOriginalIndex
    );
    if (alreadyMatchedLeft !== undefined) {
      // Unmatch the old pairing
      setMatches((prev) => {
        const next = { ...prev };
        delete next[alreadyMatchedLeft];
        next[selectedLeft] = rightOriginalIndex;
        return next;
      });
    } else {
      setMatches((prev) => ({ ...prev, [selectedLeft]: rightOriginalIndex }));
    }
    setSelectedLeft(null);
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setSelectedLeft(null);
    setMatches({});
    setChecked(false);
  };

  const getLeftColor = (leftIndex) => {
    if (matches[leftIndex] !== undefined) {
      const colorIdx = leftIndex % PAIR_COLORS.length;
      return PAIR_COLORS[colorIdx];
    }
    return null;
  };

  const getRightColor = (rightOriginalIndex) => {
    const matchedLeft = Object.keys(matches).find(
      (k) => matches[k] === rightOriginalIndex
    );
    if (matchedLeft !== undefined) {
      const colorIdx = parseInt(matchedLeft) % PAIR_COLORS.length;
      return PAIR_COLORS[colorIdx];
    }
    return null;
  };

  const isMatchCorrect = (leftIndex) => {
    return matches[leftIndex] === leftIndex;
  };

  const allMatched = Object.keys(matches).length === config.pairs.length;
  const correctCount = checked
    ? Object.keys(matches).filter((k) => isMatchCorrect(parseInt(k))).length
    : 0;

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <Link2 size={16} />
        Match the Pairs
      </h4>
      <p className="font-body text-cream/80 text-sm mb-4">{config.instruction}</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column — terms */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-body text-cream/40 uppercase tracking-wider mb-1">Terms</p>
          {config.pairs.map((pair, idx) => {
            const color = getLeftColor(idx);
            const isSelected = selectedLeft === idx;
            let cls =
              'w-full min-h-[48px] px-3 py-2.5 rounded-lg text-sm font-body text-left transition-all duration-200 cursor-pointer touch-press border flex items-center ';

            if (checked && matches[idx] !== undefined) {
              cls += isMatchCorrect(idx)
                ? 'bg-sage/15 border-sage/40 text-sage-light '
                : 'bg-danger/15 border-danger/40 text-danger-light ';
            } else if (color) {
              cls += `${color.bg} ${color.border} ${color.text} `;
            } else if (isSelected) {
              cls += 'bg-amber/20 border-amber/50 text-amber-light ring-2 ring-amber/30 ';
            } else {
              cls += 'bg-charcoal/60 border-charcoal-lighter/30 text-cream/80 hover:bg-charcoal-lighter/50 ';
            }

            return (
              <button key={idx} className={cls} onClick={() => handleLeftTap(idx)} disabled={checked}>
                <span className="font-medium">{pair.left}</span>
              </button>
            );
          })}
        </div>

        {/* Right column — descriptions (shuffled) */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-body text-cream/40 uppercase tracking-wider mb-1">Descriptions</p>
          {shuffledRight.map((item, idx) => {
            const color = getRightColor(item.originalIndex);
            let cls =
              'w-full min-h-[48px] px-3 py-2.5 rounded-lg text-sm font-body text-left transition-all duration-200 cursor-pointer touch-press border flex items-center ';

            if (checked && color) {
              const matchedLeft = Object.keys(matches).find(
                (k) => matches[k] === item.originalIndex
              );
              const correct = matchedLeft !== undefined && parseInt(matchedLeft) === item.originalIndex;
              cls += correct
                ? 'bg-sage/15 border-sage/40 text-sage-light '
                : 'bg-danger/15 border-danger/40 text-danger-light ';
            } else if (color) {
              cls += `${color.bg} ${color.border} ${color.text} `;
            } else {
              cls += 'bg-charcoal/60 border-charcoal-lighter/30 text-cream/80 hover:bg-charcoal-lighter/50 ';
            }

            return (
              <button key={idx} className={cls} onClick={() => handleRightTap(item.originalIndex)} disabled={checked}>
                <span className="text-xs leading-snug">{item.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-4">
        {allMatched && !checked && (
          <Button variant="primary" size="sm" onClick={handleCheck}>
            <Check size={14} />
            Check Matches
          </Button>
        )}
        {Object.keys(matches).length > 0 && (
          <Button variant="secondary" size="sm" onClick={handleReset}>
            <RotateCcw size={14} />
            Reset
          </Button>
        )}
      </div>

      {/* Score */}
      {checked && (
        <div className="mt-3 pt-3 border-t border-charcoal-lighter/30 text-center">
          <p className="font-body text-sm text-cream/70">
            Correct matches:{' '}
            <span className="text-amber font-semibold">
              {correctCount}/{config.pairs.length}
            </span>
          </p>
        </div>
      )}
    </Card>
  );
}

/**
 * CodeCompare — Side-by-side (desktop) or tabbed (mobile) comparison of two code/text blocks.
 * @param {{ config: { title: string, left: { label: string, content: string, annotation: string }, right: { label: string, content: string, annotation: string } } }} props
 */
function CodeCompare({ config }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeTab, setActiveTab] = useState('left');

  const renderBlock = (side) => {
    const data = config[side];
    return (
      <div className="flex flex-col h-full">
        <div className="bg-charcoal/80 rounded-lg p-3 flex-1 border border-charcoal-lighter/20">
          <pre className="font-mono text-sm text-cream/90 whitespace-pre-wrap break-words leading-relaxed">
            {data.content}
          </pre>
        </div>
        {data.annotation && (
          <p className="font-body text-xs text-cream/50 mt-2 italic">
            {data.annotation}
          </p>
        )}
      </div>
    );
  };

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <Copy size={16} />
        {config.title}
      </h4>

      {isDesktop ? (
        /* Desktop: side-by-side */
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-body font-semibold text-danger-light mb-2 uppercase tracking-wider">
              {config.left.label}
            </p>
            {renderBlock('left')}
          </div>
          <div>
            <p className="text-xs font-body font-semibold text-sage-light mb-2 uppercase tracking-wider">
              {config.right.label}
            </p>
            {renderBlock('right')}
          </div>
        </div>
      ) : (
        /* Mobile: tabbed */
        <div>
          <div className="flex mb-3 bg-charcoal/60 rounded-lg p-0.5">
            <button
              className={`flex-1 min-h-[40px] rounded-md text-sm font-body font-medium transition-all duration-200 ${
                activeTab === 'left'
                  ? 'bg-danger/20 text-danger-light'
                  : 'text-cream/50 hover:text-cream/70'
              }`}
              onClick={() => setActiveTab('left')}
            >
              {config.left.label}
            </button>
            <button
              className={`flex-1 min-h-[40px] rounded-md text-sm font-body font-medium transition-all duration-200 ${
                activeTab === 'right'
                  ? 'bg-sage/20 text-sage-light'
                  : 'text-cream/50 hover:text-cream/70'
              }`}
              onClick={() => setActiveTab('right')}
            >
              {config.right.label}
            </button>
          </div>
          {renderBlock(activeTab)}
        </div>
      )}
    </Card>
  );
}

/**
 * CostCalculator — Interactive sliders for estimating AI/hosting costs.
 * Real-time cost comparison table updates as sliders change.
 * @param {{ config: { title: string, variables: Array, formula: string, models: Array<{ name: string, costPerToken: number }> } }} props
 */
function CostCalculator({ config }) {
  const [values, setValues] = useState(() => {
    const initial = {};
    config.variables.forEach((v) => {
      initial[v.id] = v.default;
    });
    return initial;
  });

  const handleChange = (id, val) => {
    setValues((prev) => ({ ...prev, [id]: Number(val) }));
  };

  const calculateCost = (costPerToken) => {
    // Monthly cost = tokens * requests * users * 30 days * costPerToken
    const tokens = values.tokens || values[config.variables[0]?.id] || 0;
    const requests = values.requests || values[config.variables[1]?.id] || 0;
    const users = values.users || values[config.variables[2]?.id] || 0;

    // Try to use the formula variables generically
    let totalTokensPerMonth = 1;
    config.variables.forEach((v) => {
      totalTokensPerMonth *= values[v.id] || 0;
    });
    totalTokensPerMonth *= 30; // monthly

    return totalTokensPerMonth * costPerToken;
  };

  const formatCost = (cost) => {
    if (cost < 0.01) return '< $0.01';
    if (cost < 1) return `$${cost.toFixed(2)}`;
    if (cost < 1000) return `$${cost.toFixed(2)}`;
    return `$${cost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-4 flex items-center gap-2">
        <DollarSign size={16} />
        {config.title}
      </h4>

      {/* Sliders */}
      <div className="space-y-4 mb-5">
        {config.variables.map((v) => (
          <div key={v.id}>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-body text-sm text-cream/80">{v.label}</label>
              <span className="font-body text-sm text-amber font-semibold tabular-nums">
                {values[v.id].toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={v.min}
              max={v.max}
              step={v.step}
              value={values[v.id]}
              onChange={(e) => handleChange(v.id, e.target.value)}
              className="w-full h-2 bg-charcoal-lighter/40 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber
                [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
            />
            <div className="flex justify-between mt-0.5">
              <span className="text-[10px] font-body text-cream/30">{v.min.toLocaleString()}</span>
              <span className="text-[10px] font-body text-cream/30">{v.max.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cost comparison table */}
      <div className="bg-charcoal/60 rounded-lg overflow-hidden border border-charcoal-lighter/20">
        <div className="grid grid-cols-2 gap-0 bg-charcoal-lighter/20 px-3 py-2">
          <span className="text-xs font-body font-semibold text-cream/60">Model</span>
          <span className="text-xs font-body font-semibold text-cream/60 text-right">Monthly Cost</span>
        </div>
        {config.models.map((model, idx) => {
          const cost = calculateCost(model.costPerToken);
          return (
            <div
              key={idx}
              className={`grid grid-cols-2 gap-0 px-3 py-2.5 ${
                idx < config.models.length - 1 ? 'border-b border-charcoal-lighter/15' : ''
              }`}
            >
              <span className="font-body text-sm text-cream/80">{model.name}</span>
              <span className="font-body text-sm text-amber font-semibold text-right tabular-nums">
                {formatCost(cost)}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] font-body text-cream/30 mt-2 text-center">
        Estimated costs based on per-token pricing. Actual costs may vary.
      </p>
    </Card>
  );
}

/**
 * StackBuilder — User selects tools for different layers of a tech stack.
 * Tappable chip/pill options per category. Summary card when all selected.
 * @param {{ config: { instruction: string, layers: Array<{ category: string, options: string[], recommended: string }> } }} props
 */
function StackBuilder({ config }) {
  const [selections, setSelections] = useState({});

  const handleSelect = (category, option) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === option ? undefined : option,
    }));
  };

  const allSelected = config.layers.every((layer) => selections[layer.category]);
  const matchesRecommended = config.layers.filter(
    (layer) => selections[layer.category] === layer.recommended
  ).length;

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <Boxes size={16} />
        Stack Builder
      </h4>
      <p className="font-body text-cream/80 text-sm mb-4">{config.instruction}</p>

      <div className="space-y-4">
        {config.layers.map((layer) => (
          <div key={layer.category}>
            <p className="font-body text-xs text-cream/50 uppercase tracking-wider mb-2">
              {layer.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {layer.options.map((option) => {
                const isSelected = selections[layer.category] === option;
                const isRecommended = option === layer.recommended;
                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(layer.category, option)}
                    className={`min-h-[40px] px-4 py-2 rounded-full text-sm font-body font-medium
                      transition-all duration-200 cursor-pointer touch-press border
                      ${
                        isSelected
                          ? 'bg-amber/20 border-amber/50 text-amber-light'
                          : 'bg-charcoal/60 border-charcoal-lighter/30 text-cream/70 hover:bg-charcoal-lighter/50 hover:border-cream/20'
                      }`}
                  >
                    {option}
                    {isSelected && isRecommended && (
                      <Check size={12} className="inline ml-1.5 text-sage-light" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Summary card */}
      {allSelected && (
        <div className="mt-4 bg-charcoal/60 rounded-lg p-4 border border-charcoal-lighter/20">
          <p className="text-xs font-body text-cream/50 uppercase tracking-wider mb-2">
            Your Stack
          </p>
          <div className="space-y-1.5">
            {config.layers.map((layer) => (
              <div key={layer.category} className="flex items-center justify-between">
                <span className="font-body text-sm text-cream/60">{layer.category}:</span>
                <span className="font-body text-sm text-amber font-medium">
                  {selections[layer.category]}
                  {selections[layer.category] === layer.recommended && (
                    <span className="ml-1.5 text-sage-light text-xs">(recommended)</span>
                  )}
                </span>
              </div>
            ))}
          </div>
          {matchesRecommended === config.layers.length && (
            <div className="mt-3 pt-2 border-t border-charcoal-lighter/20 text-center">
              <Badge variant="sage">
                <CheckCircle2 size={10} />
                Matches all recommended choices
              </Badge>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

/**
 * TimelineFlow — Animated step-by-step process display.
 * Vertical timeline with numbered circles. Steps animate in one-by-one via Play button.
 * @param {{ config: { title: string, steps: Array<{ label: string, description: string }> } }} props
 */
function TimelineFlow({ config }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) return;
    setVisibleCount(0);
    setIsPlaying(true);
  };

  const handleShowAll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setVisibleCount(config.steps.length);
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setVisibleCount(0);
  };

  useEffect(() => {
    if (!isPlaying) return;

    let step = 0;
    timerRef.current = setInterval(() => {
      step++;
      setVisibleCount(step);
      if (step >= config.steps.length) {
        clearInterval(timerRef.current);
        setIsPlaying(false);
      }
    }, 500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, config.steps.length]);

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <ArrowRight size={16} />
        {config.title}
      </h4>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <Button
          variant="primary"
          size="sm"
          onClick={handlePlay}
          disabled={isPlaying}
        >
          <Play size={14} />
          {visibleCount > 0 ? 'Replay' : 'Play'}
        </Button>
        {visibleCount < config.steps.length && (
          <Button variant="ghost" size="sm" onClick={handleShowAll}>
            Show All
          </Button>
        )}
        {visibleCount > 0 && (
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <RotateCcw size={14} />
            Reset
          </Button>
        )}
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-charcoal-lighter/30" />

        <div className="space-y-4">
          {config.steps.map((step, idx) => {
            const isVisible = idx < visibleCount;
            return (
              <div
                key={idx}
                className={`relative transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
                style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
              >
                {/* Numbered circle */}
                <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-amber flex items-center justify-center">
                  <span className="text-[10px] font-body font-bold text-charcoal">{idx + 1}</span>
                </div>

                {/* Content */}
                <div>
                  <p className="font-body text-sm text-cream font-semibold">{step.label}</p>
                  <p className="font-body text-sm text-cream/60 mt-0.5">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty state placeholder so layout doesn't collapse */}
      {visibleCount === 0 && (
        <div className="text-center py-4">
          <p className="text-xs font-body text-cream/30">Press Play to start the animation</p>
        </div>
      )}
    </Card>
  );
}

/**
 * SpotTheIssue — Present a scenario and ask user to identify the problem.
 * Scenario in an amber card, options as tappable buttons with correct/incorrect feedback.
 * @param {{ config: { scenario: string, question: string, options: Array<{ text: string, isCorrect: boolean }>, explanation: string } }} props
 */
function SpotTheIssue({ config }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const hasAnswered = selected !== null;
  const isCorrect = hasAnswered && config.options[selected]?.isCorrect;

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-3 flex items-center gap-2">
        <AlertTriangle size={16} />
        Spot the Issue
      </h4>

      {/* Scenario */}
      <div className="bg-amber/10 border border-amber/30 rounded-lg p-3 mb-3">
        <p className="font-body text-sm text-cream/90 leading-relaxed">
          {config.scenario}
        </p>
      </div>

      {/* Question */}
      <p className="font-body text-sm text-cream font-medium mb-3">
        {config.question}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {config.options.map((opt, idx) => {
          let optClass =
            'w-full min-h-[48px] px-4 py-3 rounded-lg text-sm font-body text-left transition-all duration-200 cursor-pointer touch-press border ';

          if (!hasAnswered) {
            optClass += 'bg-charcoal/60 border-charcoal-lighter/30 text-cream/80 hover:bg-charcoal-lighter/50 hover:border-cream/20';
          } else if (opt.isCorrect) {
            optClass += 'bg-sage/15 border-sage/40 text-sage-light';
          } else if (idx === selected && !opt.isCorrect) {
            optClass += 'bg-danger/15 border-danger/40 text-danger-light';
          } else {
            optClass += 'bg-charcoal/30 border-charcoal-lighter/20 text-cream/40';
          }

          return (
            <button
              key={idx}
              className={optClass}
              onClick={() => handleSelect(idx)}
              disabled={hasAnswered}
            >
              <span className="font-medium mr-2 text-cream/40">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt.text}
              {hasAnswered && opt.isCorrect && (
                <Check size={14} className="inline ml-2 text-sage-light" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div
          className={`mt-3 p-3 rounded-lg text-sm font-body border ${
            isCorrect
              ? 'bg-sage/10 border-sage/20 text-sage-light/90'
              : 'bg-danger/10 border-danger/20 text-danger-light/90'
          }`}
        >
          <p className="font-medium mb-1">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
          <p className="text-cream/70">{config.explanation}</p>
        </div>
      )}
    </Card>
  );
}

/**
 * PromptLab — Bad vs. Good prompt comparison with detailed annotations.
 * Two stacked cards on mobile (bad on top, good below). Annotations as numbered callouts.
 * @param {{ config: { title: string, pairs: Array<{ bad: { text: string, annotations: string[] }, good: { text: string, annotations: string[] } }> } }} props
 */
function PromptLab({ config }) {
  const renderPromptCard = (prompt, variant) => {
    const isBad = variant === 'bad';
    const bgClass = isBad ? 'bg-danger/10 border-danger/25' : 'bg-sage/10 border-sage/25';
    const labelClass = isBad ? 'text-danger-light' : 'text-sage-light';
    const label = isBad ? 'Bad Prompt' : 'Good Prompt';
    const icon = isBad ? <X size={14} /> : <Check size={14} />;

    return (
      <div className={`rounded-lg p-3 border ${bgClass}`}>
        <div className={`flex items-center gap-1.5 mb-2 ${labelClass}`}>
          {icon}
          <span className="text-xs font-body font-semibold uppercase tracking-wider">
            {label}
          </span>
        </div>
        <div className="bg-charcoal/60 rounded-md p-3 mb-2 border border-charcoal-lighter/15">
          <p className="font-mono text-sm text-cream/90 whitespace-pre-wrap break-words leading-relaxed">
            {prompt.text}
          </p>
        </div>
        {prompt.annotations && prompt.annotations.length > 0 && (
          <div className="space-y-1">
            {prompt.annotations.map((note, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span
                  className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold mt-0.5 ${
                    isBad
                      ? 'bg-danger/30 text-danger-light'
                      : 'bg-sage/30 text-sage-light'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="font-body text-xs text-cream/60">{note}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="!p-4">
      <h4 className="font-display text-sm text-amber mb-4 flex items-center gap-2">
        <Wand2 size={16} />
        {config.title}
      </h4>

      <div className="space-y-4">
        {config.pairs.map((pair, idx) => (
          <div key={idx} className="space-y-3">
            {renderPromptCard(pair.bad, 'bad')}
            {renderPromptCard(pair.good, 'good')}
          </div>
        ))}
      </div>
    </Card>
  );
}

// ============================================================================
// LAYOUT COMPONENTS
// ============================================================================

/**
 * Sticky top bar showing chapter/lesson info and overall progress.
 */
function TopBar({ state }) {
  const chapter = CHAPTERS[state.currentChapter];
  const lesson = chapter?.lessons[state.currentLesson];
  const overallPct = getOverallProgress(state.completedLessons);

  return (
    <header className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-sm border-b border-charcoal-lighter/20">
      {/* Ultra-thin overall progress line */}
      <div className="h-0.5 w-full bg-charcoal-lighter/20">
        <div
          className="h-full bg-amber transition-all duration-700"
          style={{ width: `${overallPct}%` }}
        />
      </div>
      <div className="flex items-center h-14 md:h-16 px-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-amber/70 font-body">
            Chapter {chapter?.id}
          </p>
          <p className="text-sm font-body font-medium text-cream truncate">
            {lesson?.title || 'Select a lesson'}
          </p>
        </div>
        {lesson && !lesson.comingSoon && (
          <Badge variant="default" className="ml-3 shrink-0">
            <Clock size={10} />
            {lesson.estimatedMinutes} min
          </Badge>
        )}
      </div>
    </header>
  );
}

/**
 * Mobile bottom navigation bar with 4 tabs.
 */
function BottomNav({ activeTab, dispatch }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-t border-charcoal-lighter/20 md:hidden safe-bottom">
      <div className="flex items-center justify-around h-16">
        {TAB_CONFIG.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => dispatch({ type: 'SET_TAB', payload: id })}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[48px] px-2 py-1 transition-colors duration-200 ${
                isActive ? 'text-amber' : 'text-cream/40'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[10px] font-body font-medium">{label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-amber mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * Desktop sidebar with chapter navigation.
 */
function Sidebar({ state, dispatch }) {
  const [expandedChapters, setExpandedChapters] = useState({
    [state.currentChapter]: true,
  });

  const toggleChapter = (idx) => {
    setExpandedChapters((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <aside className="hidden md:flex md:flex-col fixed left-0 top-0 h-full w-[280px] lg:w-[320px] bg-charcoal border-r border-charcoal-lighter/20 z-30 overflow-hidden">
      {/* Header */}
      <div className="p-5 pb-3 border-b border-charcoal-lighter/20">
        <h1 className="font-display text-lg text-cream">The Builder's Atlas</h1>
        <p className="text-xs text-cream/40 font-body mt-1">
          {state.completedLessons.length} of {getTotalLessons()} lessons
          complete
        </p>
        <ProgressBar
          value={state.completedLessons.length}
          max={getTotalLessons()}
          className="mt-2"
        />
      </div>

      {/* Scrollable chapter list */}
      <div className="flex-1 overflow-y-auto py-2">
        {CHAPTERS.map((chapter, ci) => {
          const ChIcon = ICON_MAP[chapter.icon] || Globe;
          const progress = getChapterProgress(chapter, state.completedLessons);
          const isExpanded = expandedChapters[ci];

          return (
            <div key={chapter.id} className="mb-0.5">
              {/* Chapter header */}
              <button
                onClick={() => toggleChapter(ci)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-charcoal-light/50 transition-colors"
              >
                <ChIcon size={18} className="text-amber/70 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-body font-medium text-cream truncate">
                    Ch {chapter.id}: {chapter.title}
                  </p>
                  <p className="text-[10px] text-cream/30 font-body">
                    {progress}% complete
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronUp size={14} className="text-cream/30 shrink-0" />
                ) : (
                  <ChevronDown size={14} className="text-cream/30 shrink-0" />
                )}
              </button>

              {/* Lesson list */}
              {isExpanded && (
                <div className="ml-4 border-l border-charcoal-lighter/20">
                  {chapter.lessons.map((lesson, li) => {
                    const isActive =
                      ci === state.currentChapter &&
                      li === state.currentLesson &&
                      state.activeTab === 'learn';
                    const isCompleted = state.completedLessons.includes(
                      lesson.id
                    );

                    return (
                      <button
                        key={lesson.id}
                        onClick={() =>
                          dispatch({
                            type: 'NAVIGATE_LESSON',
                            payload: {
                              chapterIndex: ci,
                              lessonIndex: li,
                            },
                          })
                        }
                        className={`w-full flex items-center gap-2 px-4 py-2 text-left text-sm font-body transition-all duration-150 ${
                          isActive
                            ? 'bg-amber/10 text-amber border-l-2 border-amber -ml-[1px]'
                            : 'text-cream/60 hover:text-cream/80 hover:bg-charcoal-light/30'
                        }`}
                      >
                        {isCompleted ? (
                          <Check size={14} className="text-sage shrink-0" />
                        ) : lesson.comingSoon ? (
                          <Lock size={14} className="text-cream/20 shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full border border-charcoal-lighter/50 shrink-0" />
                        )}
                        <span className="truncate">
                          {lesson.comingSoon
                            ? `${lesson.id} \u2014 Coming Soon`
                            : `${lesson.id} \u2014 ${lesson.title}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom section: Roadmap link */}
      <div className="p-4 border-t border-charcoal-lighter/20">
        <Button
          variant="secondary"
          fullWidth
          onClick={() => dispatch({ type: 'SET_TAB', payload: 'roadmap' })}
        >
          <Compass size={16} />
          My Roadmap
        </Button>
      </div>
    </aside>
  );
}

/**
 * Renders a full lesson with all its content sections.
 */
function LessonRenderer({ lesson, state, dispatch }) {
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <BookOpen size={48} className="text-cream/20 mb-4" />
        <p className="font-body text-cream/40">Select a lesson to begin</p>
      </div>
    );
  }

  if (lesson.comingSoon) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <Lock size={48} className="text-cream/20 mb-4" />
        <h3 className="font-display text-xl text-cream mb-2">Content Coming Soon</h3>
        <p className="font-body text-cream/40 max-w-md">
          {lesson.content[0]?.body ||
            'This lesson is currently being developed. Check back soon.'}
        </p>
      </div>
    );
  }

  const isCompleted = state.completedLessons.includes(lesson.id);

  return (
    <div className="space-y-4 pb-8">
      {/* Lesson title */}
      <div className="mb-2">
        <h2 className="font-display text-xl md:text-2xl text-cream leading-tight">
          {lesson.title}
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <Badge>
            <Clock size={10} />
            {lesson.estimatedMinutes} min
          </Badge>
          {isCompleted && (
            <Badge variant="sage">
              <Check size={10} />
              Completed
            </Badge>
          )}
        </div>
      </div>

      {/* Hook */}
      {lesson.hook && (
        <Card className="!border-l-4 !border-l-amber !rounded-l-none">
          <p className="font-body text-cream/90 italic leading-relaxed text-sm">
            {lesson.hook}
          </p>
        </Card>
      )}

      {/* Analogy flip card */}
      {lesson.analogy && (lesson.analogy.front || lesson.analogy.back) && (
        <ConceptCard analogy={lesson.analogy} />
      )}

      {/* Content blocks */}
      {lesson.content.map((block, i) => {
        switch (block.type) {
          case 'text':
            return (
              <Card key={i} className="!bg-transparent !border-none !shadow-none !p-0 !px-1">
                <p className="font-body text-cream/80 leading-relaxed text-sm">
                  {block.body}
                </p>
              </Card>
            );

          case 'callout':
            return (
              <Card key={i} className="!bg-electric/5 !border-electric/20">
                <div className="flex gap-3">
                  <Lightbulb
                    size={18}
                    className="text-electric-light shrink-0 mt-0.5"
                  />
                  <p className="font-body text-cream/80 text-sm leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </Card>
            );

          case 'vocab':
            return <VocabBlock key={i} terms={block.terms} />;

          case 'diagram':
            return <DiagramBlock key={i} variant={block.variant} />;

          case 'decision-tree':
            return <DecisionTree key={i} config={block.config} />;

          case 'order-steps':
            return <OrderSteps key={i} config={block.config} />;

          case 'match':
            return <MatchExercise key={i} config={block.config} />;

          case 'code-compare':
            return <CodeCompare key={i} config={block.config} />;

          case 'cost-calculator':
            return <CostCalculator key={i} config={block.config} />;

          case 'stack-builder':
            return <StackBuilder key={i} config={block.config} />;

          case 'timeline':
            return <TimelineFlow key={i} config={block.config} />;

          case 'spot-the-issue':
            return <SpotTheIssue key={i} config={block.config} />;

          case 'prompt-lab':
            return <PromptLab key={i} config={block.config} />;

          default:
            return null;
        }
      })}

      {/* Checkpoint — quiz or interactive component */}
      {lesson.checkpoint && (() => {
        const cp = lesson.checkpoint;
        switch (cp.type) {
          case 'quiz':
            return (
              <QuizCheckpoint
                checkpoint={cp}
                lessonId={lesson.id}
                quizAnswers={state.quizAnswers}
                dispatch={dispatch}
              />
            );
          case 'decision-tree':
            return <DecisionTree config={cp.config || cp} />;
          case 'order-steps':
            return <OrderSteps config={cp.config || cp} />;
          case 'match':
            return <MatchExercise config={cp.config || cp} />;
          case 'code-compare':
            return <CodeCompare config={cp.config || cp} />;
          case 'cost-calculator':
            return <CostCalculator config={cp.config || cp} />;
          case 'stack-builder':
            return <StackBuilder config={cp.config || cp} />;
          case 'timeline':
            return <TimelineFlow config={cp.config || cp} />;
          case 'spot-the-issue':
            return <SpotTheIssue config={cp.config || cp} />;
          case 'prompt-lab':
            return <PromptLab config={cp.config || cp} />;
          default:
            return null;
        }
      })()}

      {/* Takeaway */}
      {lesson.takeaway && (
        <Card className="!bg-sage/10 !border-sage/20">
          <div className="flex gap-3">
            <Lightbulb size={18} className="text-sage-light shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-sage-light/70 uppercase tracking-wider font-body mb-1">
                Key Takeaway
              </p>
              <p className="font-body text-cream font-medium text-sm leading-relaxed">
                {lesson.takeaway}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Mark complete button */}
      {!isCompleted && (
        <div className="pt-2">
          <Button
            variant="primary"
            fullWidth
            size="lg"
            onClick={() =>
              dispatch({ type: 'COMPLETE_LESSON', payload: lesson.id })
            }
          >
            <Check size={18} />
            Mark Lesson Complete
          </Button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// PAGE / TAB COMPONENTS
// ============================================================================

/**
 * LearnTab: main learning view with lesson content and swipe navigation.
 */
function LearnTab({ state, dispatch, isDesktop }) {
  const chapter = CHAPTERS[state.currentChapter];
  const lesson = chapter?.lessons[state.currentLesson];
  const scrollRef = useRef(null);

  const nextLesson = getNextLesson(state.currentChapter, state.currentLesson);
  const prevLesson = getPrevLesson(state.currentChapter, state.currentLesson);

  const goNext = useCallback(() => {
    if (nextLesson) {
      dispatch({ type: 'NAVIGATE_LESSON', payload: nextLesson });
    }
  }, [nextLesson, dispatch]);

  const goPrev = useCallback(() => {
    if (prevLesson) {
      dispatch({ type: 'NAVIGATE_LESSON', payload: prevLesson });
    }
  }, [prevLesson, dispatch]);

  // Scroll to top on lesson change
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.currentChapter, state.currentLesson]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto"
    >
      <div className="px-4 py-5 max-w-3xl mx-auto">
        <LessonRenderer
          lesson={lesson}
          state={state}
          dispatch={dispatch}
        />
      </div>

      {/* Floating navigation buttons */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-8 flex flex-col gap-2 z-30">
        {prevLesson && (
          <button
            onClick={goPrev}
            className="w-12 h-12 rounded-full bg-charcoal-light border border-charcoal-lighter/30 flex items-center justify-center shadow-lg hover:bg-charcoal-lighter transition-colors touch-press"
            title="Previous lesson"
          >
            <ChevronLeft size={20} className="text-cream/70" />
          </button>
        )}
        {nextLesson && (
          <button
            onClick={goNext}
            className="w-12 h-12 rounded-full bg-amber flex items-center justify-center shadow-lg hover:bg-amber-light transition-colors touch-press"
            title="Next lesson"
          >
            <ArrowRight size={20} className="text-charcoal" />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * ProgressTab: stats overview, chapter breakdown, recently completed.
 */
function ProgressTab({ state }) {
  const totalLessons = getTotalLessons();
  const completedCount = state.completedLessons.length;
  const overallPct = getOverallProgress(state.completedLessons);
  const timeRemaining = getEstimatedTimeRemaining(state.completedLessons);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-5 max-w-3xl mx-auto space-y-6">
        <h2 className="font-display text-xl text-cream">Your Progress</h2>

        {/* Completion certificate */}
        {overallPct === 100 && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber/20 via-charcoal-light to-amber/10 border border-amber/30 p-6 text-center">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(232,168,56,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,168,56,0.3) 0%, transparent 50%)' }} />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/20 mb-4">
                <Trophy size={32} className="text-amber" />
              </div>
              <h3 className="font-display text-2xl text-amber mb-2">Course Complete!</h3>
              <p className="font-body text-cream/70 text-sm mb-4 max-w-sm mx-auto">
                You&apos;ve completed all {totalLessons} lessons across 8 chapters. You now have the knowledge to build real AI-powered products.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20">
                <Award size={16} className="text-amber" />
                <span className="font-body text-sm text-amber font-medium">Builder&apos;s Atlas Graduate</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-display text-lg text-cream">{totalLessons}</p>
                  <p className="font-body text-xs text-cream/40">Lessons</p>
                </div>
                <div>
                  <p className="font-display text-lg text-cream">8</p>
                  <p className="font-body text-xs text-cream/40">Chapters</p>
                </div>
                <div>
                  <p className="font-display text-lg text-cream">80+</p>
                  <p className="font-body text-xs text-cream/40">Concepts</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overall stats */}
        <Card glow>
          <div className="flex items-center gap-5">
            <ProgressRing value={overallPct} size={72} strokeWidth={5} />
            <div>
              <p className="font-display text-2xl text-cream">
                {completedCount}
                <span className="text-cream/40 text-lg"> / {totalLessons}</span>
              </p>
              <p className="font-body text-cream/50 text-sm">lessons completed</p>
              {timeRemaining > 0 && (
                <p className="font-body text-cream/40 text-xs mt-1 flex items-center gap-1">
                  <Clock size={10} />
                  ~{timeRemaining} min remaining
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Chapter breakdown */}
        <div>
          <h3 className="font-display text-sm text-cream/70 mb-3 uppercase tracking-wider">
            By Chapter
          </h3>
          <div className="space-y-2">
            {CHAPTERS.map((chapter) => {
              const ChIcon = ICON_MAP[chapter.icon] || Globe;
              const progress = getChapterProgress(
                chapter,
                state.completedLessons
              );
              const completedInChapter = chapter.lessons.filter((l) =>
                state.completedLessons.includes(l.id)
              ).length;

              return (
                <Card key={chapter.id} className="!p-3">
                  <div className="flex items-center gap-3">
                    <ProgressRing
                      value={progress}
                      size={40}
                      strokeWidth={3}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm text-cream font-medium truncate">
                        {chapter.title}
                      </p>
                      <p className="font-body text-xs text-cream/40">
                        {completedInChapter} of {chapter.lessons.length} lessons
                      </p>
                    </div>
                    <ChIcon size={16} className="text-cream/20 shrink-0" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recently completed */}
        {completedCount > 0 && (
          <div>
            <h3 className="font-display text-sm text-cream/70 mb-3 uppercase tracking-wider">
              Recently Completed
            </h3>
            <div className="space-y-1.5">
              {[...state.completedLessons]
                .reverse()
                .slice(0, 5)
                .map((lessonId) => {
                  const loc = findLessonById(lessonId);
                  if (!loc) return null;
                  const ch = CHAPTERS[loc.chapterIndex];
                  const ls = ch.lessons[loc.lessonIndex];
                  return (
                    <div
                      key={lessonId}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-charcoal-light/40"
                    >
                      <Check size={14} className="text-sage shrink-0" />
                      <span className="font-body text-sm text-cream/70 truncate">
                        {ls.id} {'\u2014'} {ls.title}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ChaptersTab: full list of chapters with expandable lessons (mobile version of sidebar).
 */
function ChaptersTab({ state, dispatch }) {
  const [expandedChapters, setExpandedChapters] = useState({
    [state.currentChapter]: true,
  });

  const toggleChapter = (idx) => {
    setExpandedChapters((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-5 max-w-3xl mx-auto">
        <h2 className="font-display text-xl text-cream mb-4">All Chapters</h2>

        <div className="space-y-2">
          {CHAPTERS.map((chapter, ci) => {
            const ChIcon = ICON_MAP[chapter.icon] || Globe;
            const progress = getChapterProgress(
              chapter,
              state.completedLessons
            );
            const isExpanded = expandedChapters[ci];

            return (
              <Card key={chapter.id} className="!p-0 overflow-hidden">
                {/* Chapter header */}
                <button
                  onClick={() => toggleChapter(ci)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-charcoal-lighter/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-charcoal flex items-center justify-center shrink-0">
                    <ChIcon size={20} className="text-amber" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-semibold text-cream">
                      Chapter {chapter.id}
                    </p>
                    <p className="font-body text-xs text-cream/50 truncate">
                      {chapter.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-cream/30 font-body">
                      {progress}%
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={16} className="text-cream/30" />
                    ) : (
                      <ChevronDown size={16} className="text-cream/30" />
                    )}
                  </div>
                </button>

                {/* Lesson list */}
                {isExpanded && (
                  <div className="border-t border-charcoal-lighter/20 px-4 py-2">
                    <p className="text-[10px] text-cream/30 font-body uppercase tracking-wider mb-2">
                      {chapter.subtitle}
                    </p>
                    {chapter.lessons.map((lesson, li) => {
                      const isCompleted = state.completedLessons.includes(
                        lesson.id
                      );
                      const isCurrent =
                        ci === state.currentChapter &&
                        li === state.currentLesson;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() =>
                            dispatch({
                              type: 'NAVIGATE_LESSON',
                              payload: {
                                chapterIndex: ci,
                                lessonIndex: li,
                              },
                            })
                          }
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 mb-1 ${
                            isCurrent
                              ? 'bg-amber/10 border border-amber/20'
                              : 'hover:bg-charcoal/50'
                          }`}
                        >
                          {isCompleted ? (
                            <Check size={16} className="text-sage shrink-0" />
                          ) : lesson.comingSoon ? (
                            <Lock
                              size={16}
                              className="text-cream/20 shrink-0"
                            />
                          ) : (
                            <span className="w-4 h-4 rounded-full border-2 border-charcoal-lighter/50 shrink-0" />
                          )}
                          <div className="min-w-0 flex-1">
                            <p
                              className={`font-body text-sm truncate ${
                                lesson.comingSoon
                                  ? 'text-cream/30'
                                  : 'text-cream/80'
                              }`}
                            >
                              {lesson.comingSoon
                                ? 'Coming Soon'
                                : lesson.title}
                            </p>
                          </div>
                          {!lesson.comingSoon && lesson.estimatedMinutes > 0 && (
                            <Badge className="shrink-0">
                              {lesson.estimatedMinutes}m
                            </Badge>
                          )}
                          <ChevronRight
                            size={14}
                            className="text-cream/20 shrink-0"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// AI UTILITY & EXAMPLE DATA
// ============================================================================

/**
 * Call the AI proxy endpoint.
 * @param {string} systemPrompt - System instructions for the model
 * @param {string} userMessage - The user's message content
 * @param {string} apiKey - Optional API key override
 * @returns {Promise<string>} The text content from the AI response
 */
const callAI = async (systemPrompt, userMessage, apiKey) => {
  const headers = { 'Content-Type': 'application/json' };
  if (apiKey) headers['x-api-key'] = apiKey;
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers,
    body: JSON.stringify({ systemPrompt, userMessage }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `API error: ${response.status}`);
  }
  const data = await response.json();
  return data.text;
};

const SOLVER_SYSTEM_PROMPTS = {
  followUp: `You are an expert product architect helping a non-technical person plan a software product. The user has described an idea. Your job is to ask 3-5 clarifying questions that will help you recommend the right technical stack and approach.

Focus your questions on:
1. Who will use this? (just them, their team, public users, customers?)
2. What's the scale? (personal project, small team, hundreds/thousands of users?)
3. Are there specific integrations needed? (specific services, data sources, APIs?)
4. What's the priority? (speed to launch, polish/design, cost efficiency, scalability?)
5. Any constraints? (budget, timeline, existing tools they must work with?)

Format your response as a JSON array of question objects:
[
  {
    "question": "Who will be using this?",
    "type": "single_select",
    "options": ["Just me", "My team (2-10 people)", "Public users (anyone)", "Customers/clients"]
  }
]
Types: "single_select", "multi_select", or "free_text". Prefer select types. Max 5 questions. Respond ONLY with JSON array.`,

  roadmap: `You are the world's best product architect. Given the user's idea and requirements, generate a complete build roadmap.

CRITICAL RULES:
1. ALWAYS present TWO options: "Free-First Build" and "Premium Build". Lead with Free-First.
2. For EVERY tool recommended, explain WHY in 1-2 sentences.
3. Reference lessons: [-> Lesson X.Y: "Title"]
4. Include build ORDER.
5. Include a data model (tables, key fields, relationships).
6. Address cost estimates.

Format as JSON:
{
  "summary": "One-paragraph description",
  "free_option": {
    "label": "Free-First Build",
    "estimated_monthly_cost": "$0-5/month",
    "stack": [{ "layer": "Frontend", "tool": "React + Next.js", "why": "...", "lesson_ref": "1.7", "future_use": "..." }],
    "build_order": [{ "phase": 1, "title": "...", "description": "...", "estimated_time": "1-2 hours" }],
    "data_model": [{ "table": "users", "fields": ["id (uuid, PK)", "email (text)"], "relationships": "..." }]
  },
  "premium_option": {
    "label": "Premium Build",
    "estimated_monthly_cost": "$20-50/month",
    "stack": [{ "layer": "Frontend", "tool": "...", "why": "...", "lesson_ref": "...", "future_use": "..." }],
    "build_order": [{ "phase": 1, "title": "...", "description": "...", "estimated_time": "..." }],
    "data_model": [{ "table": "users", "fields": ["id (uuid, PK)", "email (text)"], "relationships": "..." }],
    "premium_justification": "..."
  },
  "key_decisions": [{ "decision": "Why X over Y?", "reasoning": "...", "lesson_ref": "3.6" }],
  "risks_and_gotchas": ["Risk 1...", "Risk 2..."]
}
Respond ONLY with JSON.`,

  prompt: `Generate a comprehensive, production-ready prompt that can be pasted into Claude Code or Cursor to build this product. Include: project overview, tech stack, database schema, every feature with user flow/UI/backend logic/edge cases, auth flow, API endpoints, env variables, responsive requirements, error handling, build order. 1500-3000 words. Start with "Build a [type] called [name] using [stack]." Respond with ONLY the prompt text.`,
};

const PLACEHOLDER_IDEAS = [
  'I want to build a tool that automatically tracks my expenses from bank emails...',
  'I need an app for my team to submit and vote on feature ideas...',
  'I want to create a chatbot that answers questions about my company\'s documentation...',
  'I need a dashboard that shows me my social media analytics in one place...',
];

const EXAMPLE_ROADMAPS = [
  {
    id: 'example-expense',
    idea: 'Personal Expense Tracker',
    roadmap: {
      summary: 'A personal expense tracking app that lets you log transactions, categorize spending, and visualize monthly budgets. Built with React for a snappy UI and Supabase for free hosted database and auth.',
      free_option: {
        label: 'Free-First Build',
        estimated_monthly_cost: '$0/month',
        stack: [
          { layer: 'Frontend', tool: 'React + Vite', why: 'Fast dev server, minimal config, great for single-page apps.', lesson_ref: '1.7', future_use: 'Foundation for any web app you build next.' },
          { layer: 'Styling', tool: 'Tailwind CSS', why: 'Utility-first CSS \u2014 build UIs fast without writing custom stylesheets.', lesson_ref: '2.3', future_use: 'Industry standard, used in most modern apps.' },
          { layer: 'Backend + DB', tool: 'Supabase (free tier)', why: 'Gives you PostgreSQL database, auth, and REST API \u2014 all free for personal use.', lesson_ref: '3.2', future_use: 'Scales to production with paid plans.' },
          { layer: 'Hosting', tool: 'Vercel (free tier)', why: 'Zero-config deployment for React apps. Push to GitHub, auto-deploys.', lesson_ref: '5.1', future_use: 'Handles custom domains and serverless functions.' },
          { layer: 'Charts', tool: 'Recharts', why: 'Simple, React-native charting library. Perfect for budget visualizations.', lesson_ref: '2.5', future_use: 'Works in any React dashboard.' },
        ],
        build_order: [
          { phase: 1, title: 'Project Setup & Auth', description: 'Initialize React + Vite, connect Supabase, implement email/password signup and login.', estimated_time: '2-3 hours' },
          { phase: 2, title: 'Transaction CRUD', description: 'Build forms to add, edit, delete transactions. Store in Supabase with categories.', estimated_time: '3-4 hours' },
          { phase: 3, title: 'Dashboard & Charts', description: 'Monthly spending chart, category breakdown pie chart, budget progress bars.', estimated_time: '2-3 hours' },
          { phase: 4, title: 'Polish & Deploy', description: 'Responsive design, loading states, error handling. Deploy to Vercel.', estimated_time: '2-3 hours' },
        ],
        data_model: [
          { table: 'users', fields: ['id (uuid, PK)', 'email (text)', 'created_at (timestamp)'], relationships: 'Managed by Supabase Auth' },
          { table: 'transactions', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'amount (decimal)', 'category (text)', 'description (text)', 'date (date)', 'type (enum: income/expense)'], relationships: 'user_id \u2192 users.id' },
          { table: 'budgets', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'category (text)', 'monthly_limit (decimal)', 'month (text)'], relationships: 'user_id \u2192 users.id' },
        ],
      },
      premium_option: {
        label: 'Premium Build',
        estimated_monthly_cost: '$25-40/month',
        stack: [
          { layer: 'Frontend', tool: 'Next.js', why: 'Server-side rendering for SEO, API routes built-in, better performance.', lesson_ref: '1.7', future_use: 'The gold standard for production React apps.' },
          { layer: 'Styling', tool: 'Tailwind CSS + shadcn/ui', why: 'Pre-built accessible components speed up development significantly.', lesson_ref: '2.3', future_use: 'Professional component library.' },
          { layer: 'Backend', tool: 'Supabase Pro', why: 'More storage, daily backups, higher rate limits, priority support.', lesson_ref: '3.2', future_use: 'Production-ready infrastructure.' },
          { layer: 'Hosting', tool: 'Vercel Pro', why: 'Analytics, faster builds, team collaboration features.', lesson_ref: '5.1', future_use: 'Commercial-grade hosting.' },
          { layer: 'AI', tool: 'OpenAI API', why: 'Auto-categorize transactions from descriptions using GPT.', lesson_ref: '6.2', future_use: 'Add smart insights and predictions.' },
        ],
        build_order: [
          { phase: 1, title: 'Project Setup & Auth', description: 'Next.js with Supabase Auth, social login (Google/GitHub).', estimated_time: '3-4 hours' },
          { phase: 2, title: 'Transaction System + AI', description: 'Full CRUD with auto-categorization via OpenAI. Receipt photo upload.', estimated_time: '5-6 hours' },
          { phase: 3, title: 'Advanced Dashboard', description: 'Interactive charts, budget forecasting, spending trends over time.', estimated_time: '4-5 hours' },
          { phase: 4, title: 'Notifications & Export', description: 'Budget alerts via email, CSV/PDF export, recurring transactions.', estimated_time: '3-4 hours' },
        ],
        data_model: [
          { table: 'users', fields: ['id (uuid, PK)', 'email (text)', 'avatar_url (text)', 'created_at (timestamp)'], relationships: 'Managed by Supabase Auth' },
          { table: 'transactions', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'amount (decimal)', 'category (text)', 'description (text)', 'date (date)', 'type (enum)', 'receipt_url (text)', 'ai_category (text)'], relationships: 'user_id \u2192 users.id' },
          { table: 'budgets', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'category (text)', 'monthly_limit (decimal)', 'month (text)', 'alert_threshold (decimal)'], relationships: 'user_id \u2192 users.id' },
          { table: 'recurring', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'amount (decimal)', 'category (text)', 'frequency (enum)', 'next_date (date)'], relationships: 'user_id \u2192 users.id' },
        ],
        premium_justification: 'AI-powered categorization saves time, social login reduces friction, and advanced analytics provide genuine financial insights beyond simple tracking.',
      },
      key_decisions: [
        { decision: 'Why Supabase over Firebase?', reasoning: 'Supabase uses PostgreSQL (industry standard SQL), has a more generous free tier, and the data is portable. Firebase locks you into Google ecosystem with NoSQL.', lesson_ref: '3.2' },
        { decision: 'Why not a mobile app?', reasoning: 'A responsive web app works on all devices without App Store approval. You can add PWA support later for offline access and home screen install.', lesson_ref: '2.1' },
      ],
      risks_and_gotchas: [
        'Bank email parsing is fragile \u2014 formats change. Start with manual entry, add parsing later as a bonus feature.',
        'Supabase free tier has a 500MB database limit. Plenty for personal use, but be aware for multi-user scenarios.',
        'Currency handling: always store amounts in cents (integers) to avoid floating-point rounding errors.',
      ],
    },
    prompt: 'Build a personal expense tracker called "SpendWise" using React + Vite + Supabase + Tailwind CSS + Recharts.\n\nProject Overview: A single-user expense tracking app with transaction logging, category management, budget tracking, and visual analytics.\n\nTech Stack: React 18 with Vite, Tailwind CSS for styling, Supabase for auth + database + storage, Recharts for data visualization, deployed on Vercel.\n\nDatabase Schema:\n- users: managed by Supabase Auth\n- transactions: id (uuid PK), user_id (uuid FK\u2192auth.users), amount (integer, cents), category (text), description (text), date (date), type (text: income/expense), created_at (timestamptz)\n- budgets: id (uuid PK), user_id (uuid FK\u2192auth.users), category (text), monthly_limit (integer, cents), created_at (timestamptz)\n\nFeatures:\n1. Auth: Email/password signup and login via Supabase Auth. Protected routes redirect to login. Session persistence.\n2. Dashboard: Monthly spending summary card, category breakdown pie chart (Recharts), budget progress bars, recent transactions list. Date range selector.\n3. Add Transaction: Modal form with amount (currency input), category (dropdown with custom option), description, date, type toggle (income/expense). Validate amount > 0.\n4. Transaction List: Sortable/filterable table. Edit inline or via modal. Delete with confirmation. Search by description. Filter by category, date range, type.\n5. Budget Management: Set monthly limits per category. Visual progress bar (green < 75%, yellow 75-90%, red > 90%). Summary of over-budget categories.\n6. Categories: Default set (Food, Transport, Entertainment, Bills, Shopping, Health, Other). User can add custom categories. Color-coded throughout app.\n\nUI Requirements: Mobile-first responsive design. Dark theme with amber accents. Smooth transitions. Loading skeletons. Empty states with helpful CTAs. Toast notifications for actions.\n\nError Handling: Supabase connection errors show retry UI. Form validation with inline errors. Optimistic updates with rollback on failure. Global error boundary.\n\nBuild Order: 1) Vite + React + Tailwind setup, 2) Supabase project + schema + RLS policies, 3) Auth flow, 4) Transaction CRUD, 5) Dashboard charts, 6) Budget system, 7) Polish + deploy.',
  },
  {
    id: 'example-chatbot',
    idea: 'AI Customer Support Bot',
    roadmap: {
      summary: 'An AI-powered chatbot that answers questions about your company docs using RAG (Retrieval-Augmented Generation). Upload documents, and the bot retrieves relevant sections to give accurate, sourced answers.',
      free_option: {
        label: 'Free-First Build',
        estimated_monthly_cost: '$0-5/month',
        stack: [
          { layer: 'Frontend', tool: 'Next.js', why: 'API routes let you build the chat backend without a separate server.', lesson_ref: '1.7', future_use: 'Add landing pages, admin dashboards later.' },
          { layer: 'Styling', tool: 'Tailwind CSS', why: 'Build the chat UI fast with utility classes.', lesson_ref: '2.3', future_use: 'Consistent styling across the app.' },
          { layer: 'AI/LLM', tool: 'OpenAI API (pay-per-use)', why: 'GPT-4o-mini is cheap (~$0.15/1M tokens) and great for Q&A tasks.', lesson_ref: '6.2', future_use: 'Swap models as better/cheaper ones emerge.' },
          { layer: 'Vector DB', tool: 'Supabase pgvector (free tier)', why: 'Store document embeddings alongside your regular data. No extra service.', lesson_ref: '6.4', future_use: 'Production-ready vector search.' },
          { layer: 'Hosting', tool: 'Vercel (free tier)', why: 'Deploys Next.js natively with edge functions for low latency.', lesson_ref: '5.1', future_use: 'Scale with usage.' },
        ],
        build_order: [
          { phase: 1, title: 'Project Setup & Document Upload', description: 'Next.js app with file upload. Parse PDFs/text files, chunk into sections.', estimated_time: '3-4 hours' },
          { phase: 2, title: 'Embedding Pipeline', description: 'Generate embeddings for each chunk using OpenAI, store in Supabase pgvector.', estimated_time: '2-3 hours' },
          { phase: 3, title: 'Chat Interface & RAG', description: 'Build chat UI. On each question, search similar chunks, feed to GPT with context.', estimated_time: '3-4 hours' },
          { phase: 4, title: 'Sources & Polish', description: 'Show source documents for answers, add conversation history, deploy.', estimated_time: '2-3 hours' },
        ],
        data_model: [
          { table: 'documents', fields: ['id (uuid, PK)', 'name (text)', 'uploaded_at (timestamp)', 'file_url (text)'], relationships: 'Parent of chunks' },
          { table: 'chunks', fields: ['id (uuid, PK)', 'document_id (uuid, FK)', 'content (text)', 'embedding (vector)', 'metadata (jsonb)'], relationships: 'document_id \u2192 documents.id' },
          { table: 'conversations', fields: ['id (uuid, PK)', 'created_at (timestamp)'], relationships: 'Parent of messages' },
          { table: 'messages', fields: ['id (uuid, PK)', 'conversation_id (uuid, FK)', 'role (text)', 'content (text)', 'sources (jsonb)', 'created_at (timestamp)'], relationships: 'conversation_id \u2192 conversations.id' },
        ],
      },
      premium_option: {
        label: 'Premium Build',
        estimated_monthly_cost: '$30-60/month',
        stack: [
          { layer: 'Frontend', tool: 'Next.js + shadcn/ui', why: 'Pre-built components for chat bubbles, file uploads, toasts.', lesson_ref: '1.7', future_use: 'Professional polish.' },
          { layer: 'AI/LLM', tool: 'OpenAI GPT-4o', why: 'Best reasoning for complex questions. Worth the cost for customer-facing use.', lesson_ref: '6.2', future_use: 'Handles nuanced queries.' },
          { layer: 'Vector DB', tool: 'Pinecone', why: 'Purpose-built vector database. Faster similarity search at scale.', lesson_ref: '6.4', future_use: 'Handles millions of embeddings.' },
          { layer: 'Backend', tool: 'Supabase Pro', why: 'Auth, database, and storage with daily backups.', lesson_ref: '3.2', future_use: 'Multi-tenant ready.' },
          { layer: 'Analytics', tool: 'Langfuse (open-source)', why: 'Track LLM usage, costs, response quality, user satisfaction.', lesson_ref: '6.6', future_use: 'Essential for improving AI quality.' },
        ],
        build_order: [
          { phase: 1, title: 'Infrastructure & Auth', description: 'Next.js with Supabase auth, admin vs user roles, Pinecone setup.', estimated_time: '4-5 hours' },
          { phase: 2, title: 'Document Pipeline', description: 'Drag-drop upload, automatic PDF/DOCX parsing, smart chunking with overlap.', estimated_time: '4-5 hours' },
          { phase: 3, title: 'RAG Chat Engine', description: 'Streaming responses, source citations, conversation memory, feedback buttons.', estimated_time: '5-6 hours' },
          { phase: 4, title: 'Admin Dashboard', description: 'Document management, conversation analytics, cost tracking, quality metrics.', estimated_time: '4-5 hours' },
        ],
        data_model: [
          { table: 'documents', fields: ['id (uuid, PK)', 'org_id (uuid, FK)', 'name (text)', 'status (enum)', 'chunk_count (int)', 'uploaded_at (timestamp)'], relationships: 'org_id \u2192 organizations.id' },
          { table: 'chunks', fields: ['id (uuid, PK)', 'document_id (uuid, FK)', 'content (text)', 'embedding (vector)', 'metadata (jsonb)', 'token_count (int)'], relationships: 'document_id \u2192 documents.id' },
          { table: 'conversations', fields: ['id (uuid, PK)', 'user_id (uuid, FK)', 'title (text)', 'rating (int)', 'created_at (timestamp)'], relationships: 'user_id \u2192 users.id' },
          { table: 'messages', fields: ['id (uuid, PK)', 'conversation_id (uuid, FK)', 'role (text)', 'content (text)', 'sources (jsonb)', 'tokens_used (int)', 'latency_ms (int)'], relationships: 'conversation_id \u2192 conversations.id' },
        ],
        premium_justification: 'Customer-facing AI needs reliability and quality. GPT-4o gives better answers, Pinecone scales vector search, and Langfuse ensures you can monitor and improve response quality over time.',
      },
      key_decisions: [
        { decision: 'Why RAG over fine-tuning?', reasoning: 'RAG lets you update knowledge instantly by uploading new docs. Fine-tuning requires retraining, costs more, and can hallucinate. RAG also shows sources for verifiability.', lesson_ref: '6.4' },
        { decision: 'Why chunk documents?', reasoning: 'LLMs have context limits. Chunking (500-1000 tokens each) lets you retrieve only the most relevant sections, saving tokens and improving answer quality.', lesson_ref: '6.4' },
      ],
      risks_and_gotchas: [
        'Chunking strategy matters a lot \u2014 too small and you lose context, too large and you waste tokens. Start with 500 tokens with 50-token overlap.',
        'PDF parsing can be unreliable for complex layouts (tables, columns). Consider requiring Markdown or plain text uploads initially.',
        'Always show source citations \u2014 users trust AI more when they can verify answers.',
      ],
    },
    prompt: 'Build an AI customer support chatbot called "DocBot" using Next.js + Supabase (pgvector) + OpenAI API + Tailwind CSS.\n\nProject Overview: A RAG-powered chatbot that ingests company documents and answers user questions with sourced, accurate responses.\n\nTech Stack: Next.js 14 (App Router), Tailwind CSS, Supabase (PostgreSQL + pgvector + Auth + Storage), OpenAI API (embeddings + chat), deployed on Vercel.\n\nDatabase Schema:\n- documents: id (uuid PK), user_id (uuid FK), name (text), file_type (text), status (text: processing/ready/error), created_at (timestamptz)\n- chunks: id (uuid PK), document_id (uuid FK\u2192documents), content (text), embedding (vector(1536)), chunk_index (int), metadata (jsonb)\n- conversations: id (uuid PK), user_id (uuid FK), title (text), created_at (timestamptz)\n- messages: id (uuid PK), conversation_id (uuid FK\u2192conversations), role (text: user/assistant), content (text), sources (jsonb), created_at (timestamptz)\n\nFeatures:\n1. Document Upload: Drag-drop zone, accept .txt .md .pdf. Parse and chunk (500 tokens, 50 overlap). Generate embeddings via OpenAI text-embedding-3-small. Store chunks + vectors in Supabase.\n2. Chat Interface: Real-time streaming responses. Chat bubble UI. New conversation button. Conversation history sidebar.\n3. RAG Pipeline: On user message \u2192 generate embedding \u2192 similarity search top 5 chunks \u2192 construct prompt with retrieved context \u2192 stream GPT response \u2192 display with source citations.\n4. Source Display: Each answer shows collapsible source cards with document name, relevant excerpt, similarity score.\n\nBuild Order: 1) Next.js + Supabase + pgvector setup, 2) Document upload + parsing + embedding pipeline, 3) Chat UI + RAG query flow, 4) Source citations + conversation history, 5) Polish + deploy.',
  },
  {
    id: 'example-tasks',
    idea: 'Team Task Manager',
    roadmap: {
      summary: 'A collaborative task management app where team members can create projects, assign tasks, track progress, and communicate in real-time. Think a simplified Trello/Asana for small teams.',
      free_option: {
        label: 'Free-First Build',
        estimated_monthly_cost: '$0/month',
        stack: [
          { layer: 'Frontend', tool: 'React + Vite', why: 'Fast development, component-based UI perfect for kanban boards and task cards.', lesson_ref: '1.7', future_use: 'Reusable component patterns for any project.' },
          { layer: 'Styling', tool: 'Tailwind CSS', why: 'Rapid prototyping of complex layouts (boards, columns, cards) without custom CSS.', lesson_ref: '2.3', future_use: 'Standard across the industry.' },
          { layer: 'Backend + DB', tool: 'Supabase (free tier)', why: 'Real-time subscriptions built-in \u2014 perfect for live task updates. Free PostgreSQL database.', lesson_ref: '3.2', future_use: 'Real-time features scale with Pro plan.' },
          { layer: 'Drag & Drop', tool: 'dnd-kit', why: 'Modern, accessible drag-and-drop for React. Better than react-beautiful-dnd (unmaintained).', lesson_ref: '2.5', future_use: 'Reusable in any interactive UI.' },
          { layer: 'Hosting', tool: 'Vercel (free tier)', why: 'Automatic deploys from Git. Great for team collaboration on code.', lesson_ref: '5.1', future_use: 'Scales to Pro when needed.' },
        ],
        build_order: [
          { phase: 1, title: 'Auth & Team Setup', description: 'Supabase Auth with magic links. Create/join teams with invite codes.', estimated_time: '3-4 hours' },
          { phase: 2, title: 'Project & Task CRUD', description: 'Create projects with kanban columns. Add/edit/delete tasks with assignees and due dates.', estimated_time: '4-5 hours' },
          { phase: 3, title: 'Kanban Board & Drag-Drop', description: 'Drag tasks between columns, reorder within columns. Optimistic updates.', estimated_time: '3-4 hours' },
          { phase: 4, title: 'Real-time & Notifications', description: 'Supabase real-time subscriptions for live updates. In-app notification bell.', estimated_time: '3-4 hours' },
        ],
        data_model: [
          { table: 'teams', fields: ['id (uuid, PK)', 'name (text)', 'invite_code (text, unique)', 'created_at (timestamp)'], relationships: 'Parent of members and projects' },
          { table: 'team_members', fields: ['id (uuid, PK)', 'team_id (uuid, FK)', 'user_id (uuid, FK)', 'role (enum: owner/admin/member)'], relationships: 'team_id \u2192 teams.id, user_id \u2192 auth.users.id' },
          { table: 'projects', fields: ['id (uuid, PK)', 'team_id (uuid, FK)', 'name (text)', 'description (text)', 'columns (jsonb)'], relationships: 'team_id \u2192 teams.id' },
          { table: 'tasks', fields: ['id (uuid, PK)', 'project_id (uuid, FK)', 'title (text)', 'description (text)', 'status (text)', 'assignee_id (uuid, FK)', 'due_date (date)', 'position (int)', 'priority (enum)'], relationships: 'project_id \u2192 projects.id, assignee_id \u2192 auth.users.id' },
        ],
      },
      premium_option: {
        label: 'Premium Build',
        estimated_monthly_cost: '$30-50/month',
        stack: [
          { layer: 'Frontend', tool: 'Next.js + shadcn/ui', why: 'SSR for faster loads, built-in API routes, professional component library.', lesson_ref: '1.7', future_use: 'Production-grade framework.' },
          { layer: 'Backend', tool: 'Supabase Pro', why: 'More connections for real-time, daily backups, higher storage.', lesson_ref: '3.2', future_use: 'Supports hundreds of concurrent users.' },
          { layer: 'File Storage', tool: 'Supabase Storage', why: 'Attach files, images, and documents to tasks.', lesson_ref: '3.4', future_use: 'CDN-backed file delivery.' },
          { layer: 'Search', tool: 'Supabase Full-Text Search', why: 'Search across all tasks, comments, and project descriptions.', lesson_ref: '3.5', future_use: 'PostgreSQL tsvector is powerful and free.' },
          { layer: 'Email', tool: 'Resend', why: 'Send task assignment and due date reminder emails. Simple API, generous free tier.', lesson_ref: '5.3', future_use: 'Transactional email for any SaaS.' },
        ],
        build_order: [
          { phase: 1, title: 'Auth, Teams & Permissions', description: 'Social login, team creation with invites, role-based access control.', estimated_time: '5-6 hours' },
          { phase: 2, title: 'Projects, Boards & Tasks', description: 'Full kanban with drag-drop, task detail modals, file attachments, comments.', estimated_time: '6-8 hours' },
          { phase: 3, title: 'Real-time & Search', description: 'Live cursors, presence indicators, full-text search across everything.', estimated_time: '4-5 hours' },
          { phase: 4, title: 'Notifications & Reporting', description: 'Email digests, in-app notifications, team velocity charts, due date tracking.', estimated_time: '4-5 hours' },
        ],
        data_model: [
          { table: 'teams', fields: ['id (uuid, PK)', 'name (text)', 'invite_code (text)', 'avatar_url (text)', 'created_at (timestamp)'], relationships: 'Parent of everything' },
          { table: 'team_members', fields: ['id (uuid, PK)', 'team_id (uuid, FK)', 'user_id (uuid, FK)', 'role (enum)', 'joined_at (timestamp)'], relationships: 'Junction table' },
          { table: 'projects', fields: ['id (uuid, PK)', 'team_id (uuid, FK)', 'name (text)', 'description (text)', 'columns (jsonb)', 'archived (bool)'], relationships: 'team_id \u2192 teams.id' },
          { table: 'tasks', fields: ['id (uuid, PK)', 'project_id (uuid, FK)', 'title (text)', 'description (text)', 'status (text)', 'assignee_id (uuid, FK)', 'due_date (date)', 'position (float)', 'priority (enum)', 'labels (text[])'], relationships: 'project_id \u2192 projects.id' },
          { table: 'comments', fields: ['id (uuid, PK)', 'task_id (uuid, FK)', 'user_id (uuid, FK)', 'content (text)', 'created_at (timestamp)'], relationships: 'task_id \u2192 tasks.id' },
          { table: 'attachments', fields: ['id (uuid, PK)', 'task_id (uuid, FK)', 'file_url (text)', 'file_name (text)', 'file_size (int)'], relationships: 'task_id \u2192 tasks.id' },
        ],
        premium_justification: 'Team tools need reliability, real-time sync, and proper permissions. The premium stack handles concurrent users, file sharing, and email notifications that teams expect.',
      },
      key_decisions: [
        { decision: 'Why Supabase real-time over WebSockets?', reasoning: 'Supabase real-time is built on PostgreSQL replication. You get live updates without managing WebSocket servers, reconnection logic, or message queues.', lesson_ref: '3.2' },
        { decision: 'Why kanban over list view?', reasoning: 'Kanban is more visual and intuitive for small teams. Start with kanban, add list/calendar views later as user feedback guides priorities.', lesson_ref: '2.1' },
      ],
      risks_and_gotchas: [
        'Drag-and-drop is complex \u2014 dnd-kit handles it well, but test thoroughly on mobile (touch events behave differently).',
        'Real-time conflict resolution: if two users move the same task simultaneously, last-write-wins. For v1 this is acceptable; add operational transforms later if needed.',
        'Invite codes should expire after 7 days for security. Add a regenerate option for team admins.',
      ],
    },
    prompt: 'Build a team task management app called "FlowBoard" using React + Vite + Supabase + Tailwind CSS + dnd-kit.\n\nProject Overview: A kanban-style task manager for small teams (2-10 people) with real-time collaboration, drag-and-drop boards, and team management.\n\nTech Stack: React 18 with Vite, Tailwind CSS, Supabase (PostgreSQL + Auth + Real-time), dnd-kit for drag-and-drop, deployed on Vercel.\n\nDatabase Schema:\n- teams: id (uuid PK), name (text), invite_code (text unique), created_at (timestamptz)\n- team_members: id (uuid PK), team_id (uuid FK\u2192teams), user_id (uuid FK\u2192auth.users), role (text: owner/admin/member)\n- projects: id (uuid PK), team_id (uuid FK\u2192teams), name (text), description (text), columns (jsonb: [{id, title, color}])\n- tasks: id (uuid PK), project_id (uuid FK\u2192projects), title (text), description (text), status (text), assignee_id (uuid FK\u2192auth.users), due_date (date), position (float), priority (text: low/medium/high/urgent), created_at (timestamptz)\n\nFeatures:\n1. Auth: Magic link login via Supabase. No passwords. Session management.\n2. Teams: Create team (auto-generate invite code), join via code, member list with roles, leave team.\n3. Projects: Create/edit/archive projects within a team. Customizable columns (default: To Do, In Progress, Done).\n4. Kanban Board: Drag tasks between columns and reorder within columns. Optimistic UI updates with Supabase sync.\n5. Tasks: Create with title, description (Markdown), assignee, due date, priority. Detail modal with all fields. Comments thread on each task.\n6. Real-time: Supabase real-time subscriptions on tasks table. See team changes live without refresh.\n\nBuild Order: 1) Vite + React + Supabase + Tailwind setup, 2) Auth + team CRUD + invite system, 3) Project + task CRUD, 4) Kanban board with dnd-kit, 5) Real-time subscriptions, 6) Polish + deploy.',
  },
];

const LOADING_MESSAGES = [
  'Analyzing your idea...',
  'Mapping the architecture...',
  'Choosing the best tools...',
  'Generating your roadmap...',
];

// ============================================================================
// ROADMAP TAB \u2014 Full "Problem Solver" / "My Roadmap" Feature
// ============================================================================

/**
 * RoadmapTab: AI-powered flow that turns app ideas into technical roadmaps.
 * @param {{ state: object, dispatch: Function }} props
 */
function RoadmapTab({ state, dispatch }) {
  const { solver } = state;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  switch (solver.step) {
    case 'input':
      return <SolverInput state={state} dispatch={dispatch} isDesktop={isDesktop} />;
    case 'followup':
      return <SolverFollowUp state={state} dispatch={dispatch} isDesktop={isDesktop} />;
    case 'loading':
      return <SolverLoading />;
    case 'roadmap':
      return <SolverRoadmapView state={state} dispatch={dispatch} isDesktop={isDesktop} />;
    case 'error':
      return <SolverError state={state} dispatch={dispatch} />;
    default:
      return <SolverInput state={state} dispatch={dispatch} isDesktop={isDesktop} />;
  }
}

// ---------------------------------------------------------------------------
// Step 1: Input Screen
// ---------------------------------------------------------------------------

function SolverInput({ state, dispatch, isDesktop }) {
  const { solver, apiKey } = state;
  const [localIdea, setLocalIdea] = useState(solver.userIdea);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderFade, setPlaceholderFade] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  const [localApiKey, setLocalApiKey] = useState(apiKey);
  const [viewingExample, setViewingExample] = useState(null);
  const textareaRef = useRef(null);

  // Cycle placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_IDEAS.length);
        setPlaceholderFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-expand textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [localIdea]);

  const handleSaveApiKey = () => {
    dispatch({ type: 'SET_API_KEY', payload: localApiKey.trim() });
  };

  const handleAnalyze = async () => {
    if (!localIdea.trim()) return;
    dispatch({ type: 'SOLVER_SET_IDEA', payload: localIdea.trim() });
    dispatch({ type: 'SOLVER_SET_STEP', payload: 'loading' });

    try {
      const raw = await callAI(SOLVER_SYSTEM_PROMPTS.followUp, localIdea.trim(), apiKey);
      const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const questions = JSON.parse(cleaned);
      dispatch({ type: 'SOLVER_SET_QUESTIONS', payload: questions });
      dispatch({ type: 'SOLVER_SET_STEP', payload: 'followup' });
    } catch (err) {
      console.error('Follow-up generation failed:', err);
      dispatch({ type: 'SOLVER_SET_STEP', payload: 'error' });
    }
  };

  // If viewing an example roadmap, show it
  if (viewingExample) {
    return (
      <SolverRoadmapView
        state={{
          ...state,
          solver: {
            ...state.solver,
            roadmap: viewingExample.roadmap,
            generatedPrompt: viewingExample.prompt,
            selectedOption: 'free',
          },
        }}
        dispatch={dispatch}
        isDesktop={isDesktop}
        isExample
        onBack={() => setViewingExample(null)}
        exampleTitle={viewingExample.idea}
      />
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className={`px-4 py-8 mx-auto ${isDesktop ? 'max-w-2xl' : 'max-w-lg'}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-4">
            <Compass size={32} className="text-amber" />
          </div>
          <h1 className="font-display text-3xl text-cream mb-2">
            What do you want to build?
          </h1>
          <p className="font-body text-cream/50 text-sm leading-relaxed">
            Describe your problem or idea. Don&apos;t worry about technical details — that&apos;s my job.
          </p>
        </div>

        {/* Optional: Bring your own API key */}
        <button
          onClick={() => setShowApiKey(!showApiKey)}
          className="flex items-center gap-1.5 text-cream/30 text-xs font-body mb-4 hover:text-cream/50 transition-colors"
        >
          <Key size={12} />
          {apiKey ? 'API key saved' : 'Use your own API key'}
          {showApiKey ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
        {showApiKey && (
          <Card className="mb-6 border-charcoal-lighter/30">
            <p className="font-body text-cream/40 text-xs leading-relaxed mb-3">
              Optional — enter your own API key for local development. On the hosted version, this is handled automatically.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={localApiKey}
                onChange={(e) => setLocalApiKey(e.target.value)}
                placeholder="AIza..."
                className="flex-1 bg-charcoal border border-charcoal-lighter/40 rounded-lg px-3 py-2 text-sm text-cream font-mono placeholder:text-cream/20 focus:outline-none focus:ring-2 focus:ring-amber/50"
              />
              <Button size="sm" onClick={handleSaveApiKey} disabled={!localApiKey.trim()}>
                Save
              </Button>
            </div>
          </Card>
        )}

        {/* Textarea */}
        <div className="relative mb-4">
          <textarea
            ref={textareaRef}
            value={localIdea}
            onChange={(e) => setLocalIdea(e.target.value)}
            rows={4}
            className="w-full bg-charcoal-light border border-charcoal-lighter/40 rounded-xl px-4 py-4 text-base text-cream font-body placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-amber/50 resize-none leading-relaxed"
            style={{ minHeight: '120px' }}
          />
          {/* Floating placeholder */}
          {!localIdea && (
            <div
              className={`absolute top-4 left-4 right-4 pointer-events-none text-base text-cream/25 font-body leading-relaxed transition-opacity duration-300 ${placeholderFade ? 'opacity-100' : 'opacity-0'}`}
            >
              {PLACEHOLDER_IDEAS[placeholderIndex]}
            </div>
          )}
        </div>

        {/* Analyze button */}
        <Button
          fullWidth
          size="lg"
          onClick={handleAnalyze}
          disabled={!localIdea.trim()}
          className="mb-8"
        >
          <Send size={18} />
          Analyze My Idea
          <ArrowRight size={18} />
        </Button>

        {/* Past Roadmaps */}
        {solver.history.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <History size={16} className="text-cream/40" />
              <h3 className="font-display text-sm text-cream/60">Past Roadmaps</h3>
            </div>
            <div className="space-y-2">
              {solver.history.map((item) => (
                <Card
                  key={item.id}
                  className="cursor-pointer hover:border-amber/30 transition-colors"
                  onClick={() => {
                    dispatch({ type: 'SOLVER_SET_IDEA', payload: item.idea });
                    dispatch({
                      type: 'SOLVER_SET_ROADMAP',
                      payload: { roadmap: item.roadmap, prompt: item.prompt },
                    });
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-cream font-medium truncate">{item.idea}</p>
                      <p className="text-xs text-cream/30 mt-0.5">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-cream/30 flex-shrink-0" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Example Roadmaps */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-cream/40" />
            <h3 className="font-display text-sm text-cream/60">Example Roadmaps</h3>
          </div>
          <p className="text-xs text-cream/30 mb-3 font-body">Browse these without an API key</p>
          <div className="space-y-2">
            {EXAMPLE_ROADMAPS.map((example) => (
              <Card
                key={example.id}
                className="cursor-pointer hover:border-amber/30 transition-colors"
                onClick={() => setViewingExample(example)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={16} className="text-amber" />
                    </div>
                    <div>
                      <p className="text-sm text-cream font-medium">{example.idea}</p>
                      <p className="text-xs text-cream/30 mt-0.5">
                        {example.roadmap.free_option.stack.length} tools &middot;{' '}
                        {example.roadmap.free_option.build_order.length} phases
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-cream/30 flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step 2: Follow-up Questions
// ---------------------------------------------------------------------------

function SolverFollowUp({ state, dispatch, isDesktop }) {
  const { solver } = state;
  const { followUpQuestions, followUpAnswers } = solver;

  const allAnswered = followUpQuestions.every((_, i) => {
    const answer = followUpAnswers[i];
    if (!answer) return false;
    if (Array.isArray(answer)) return answer.length > 0;
    return answer.trim && answer.trim().length > 0;
  });

  const handleSelect = (qIndex, value, type) => {
    if (type === 'multi_select') {
      const current = followUpAnswers[qIndex] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      dispatch({ type: 'SOLVER_ANSWER', payload: { index: qIndex, value: updated } });
    } else {
      dispatch({ type: 'SOLVER_ANSWER', payload: { index: qIndex, value } });
    }
  };

  const handleGenerate = async () => {
    dispatch({ type: 'SOLVER_SET_STEP', payload: 'loading' });

    const answersText = followUpQuestions
      .map((q, i) => {
        const a = followUpAnswers[i];
        const answerStr = Array.isArray(a) ? a.join(', ') : a;
        return `Q: ${q.question}\nA: ${answerStr}`;
      })
      .join('\n\n');

    const userMessage = `My idea: ${solver.userIdea}\n\nFollow-up answers:\n${answersText}`;

    try {
      // Generate roadmap
      const roadmapRaw = await callAI(SOLVER_SYSTEM_PROMPTS.roadmap, userMessage, state.apiKey);
      const roadmapCleaned = roadmapRaw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const roadmap = JSON.parse(roadmapCleaned);

      // Generate production prompt
      const promptRaw = await callAI(
        SOLVER_SYSTEM_PROMPTS.prompt,
        `Idea: ${solver.userIdea}\n\nRequirements:\n${answersText}\n\nChosen stack (free option): ${JSON.stringify(roadmap.free_option.stack)}`,
        state.apiKey
      );

      dispatch({
        type: 'SOLVER_SET_ROADMAP',
        payload: { roadmap, prompt: promptRaw },
      });
      dispatch({ type: 'SOLVER_ADD_HISTORY' });
    } catch (err) {
      console.error('Roadmap generation failed:', err);
      dispatch({ type: 'SOLVER_SET_STEP', payload: 'error' });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className={`px-4 py-6 mx-auto ${isDesktop ? 'max-w-2xl' : 'max-w-lg'}`}>
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => dispatch({ type: 'SOLVER_SET_STEP', payload: 'input' })}
            className="flex items-center gap-1 text-cream/40 text-sm mb-4 hover:text-cream/60 transition-colors"
          >
            <ChevronLeft size={16} />
            Back
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
              <MessageSquare size={20} className="text-amber" />
            </div>
            <div>
              <h2 className="font-display text-xl text-cream">A few quick questions</h2>
              <p className="text-xs text-cream/40 font-body">Help me tailor the perfect roadmap</p>
            </div>
          </div>
        </div>

        {/* Idea summary */}
        <Card className="mb-6 bg-charcoal border-charcoal-lighter/20">
          <p className="text-xs text-cream/30 font-body mb-1">Your idea</p>
          <p className="text-sm text-cream/70 font-body leading-relaxed">{solver.userIdea}</p>
        </Card>

        {/* Questions */}
        <div className="space-y-5 mb-8">
          {followUpQuestions.map((q, qi) => {
            const isAnswered = followUpAnswers[qi] && (
              Array.isArray(followUpAnswers[qi])
                ? followUpAnswers[qi].length > 0
                : followUpAnswers[qi].trim().length > 0
            );

            return (
              <Card key={qi} className={isAnswered ? 'border-sage/30' : ''}>
                <div className="flex items-start gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-amber">
                    {qi + 1}
                  </span>
                  <p className="text-sm text-cream font-medium leading-relaxed">{q.question}</p>
                </div>

                {q.type === 'free_text' ? (
                  <textarea
                    value={followUpAnswers[qi] || ''}
                    onChange={(e) =>
                      dispatch({
                        type: 'SOLVER_ANSWER',
                        payload: { index: qi, value: e.target.value },
                      })
                    }
                    rows={2}
                    className="w-full bg-charcoal border border-charcoal-lighter/40 rounded-lg px-3 py-2 text-sm text-cream font-body placeholder:text-cream/20 focus:outline-none focus:ring-2 focus:ring-amber/50 resize-none"
                    placeholder="Type your answer..."
                  />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(q.options || []).map((opt, oi) => {
                      const answer = followUpAnswers[qi];
                      const isSelected =
                        q.type === 'multi_select'
                          ? (answer || []).includes(opt)
                          : answer === opt;

                      return (
                        <button
                          key={oi}
                          onClick={() => handleSelect(qi, opt, q.type)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-body transition-all duration-200 touch-press border ${
                            isSelected
                              ? 'bg-amber/20 border-amber/50 text-amber'
                              : 'bg-charcoal border-charcoal-lighter/30 text-cream/60 hover:border-cream/20 hover:text-cream/80'
                          }`}
                          style={{ minHeight: '48px' }}
                        >
                          {q.type === 'multi_select' && isSelected && (
                            <Check size={14} className="inline mr-1" />
                          )}
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {isAnswered && (
                  <div className="flex items-center gap-1 mt-2">
                    <CheckCircle2 size={12} className="text-sage" />
                    <span className="text-xs text-sage font-body">Answered</span>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Generate button */}
        <div className={`${!isDesktop ? 'sticky bottom-0 pb-4 pt-2 bg-gradient-to-t from-charcoal via-charcoal to-transparent -mx-4 px-4' : ''}`}>
          <Button
            fullWidth
            size="lg"
            onClick={handleGenerate}
            disabled={!allAnswered}
          >
            <Zap size={18} />
            Generate My Roadmap
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step 3: Loading State
// ---------------------------------------------------------------------------

function SolverLoading() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-4">
        {/* Skeleton cards */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-charcoal-light rounded-xl p-5 border border-charcoal-lighter/20 animate-pulse"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-charcoal-lighter/40" />
              <div className="h-4 bg-charcoal-lighter/40 rounded w-1/3" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-charcoal-lighter/30 rounded w-full" />
              <div className="h-3 bg-charcoal-lighter/30 rounded w-4/5" />
              {i <= 2 && <div className="h-3 bg-charcoal-lighter/30 rounded w-2/3" />}
            </div>
          </div>
        ))}

        {/* Rotating message */}
        <div className="text-center pt-4">
          <p className="text-sm text-amber font-body animate-pulse">{LOADING_MESSAGES[msgIndex]}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step 4: Roadmap Display
// ---------------------------------------------------------------------------

function SolverRoadmapView({ state, dispatch, isDesktop, isExample = false, onBack = null, exampleTitle = null }) {
  const { solver } = state;
  const { roadmap, generatedPrompt, selectedOption } = solver;
  const [expandedLayers, setExpandedLayers] = useState({});
  const [showFullPrompt, setShowFullPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!roadmap) return null;

  const activeOption = selectedOption === 'free' ? roadmap.free_option : roadmap.premium_option;

  const toggleLayer = (idx) => {
    setExpandedLayers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopyPrompt = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = generatedPrompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNewIdea = () => {
    dispatch({ type: 'SOLVER_RESET' });
  };

  const handleBackToLearning = () => {
    dispatch({ type: 'SET_TAB', payload: 'learn' });
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className={`px-4 py-6 mx-auto ${isDesktop ? 'max-w-3xl' : 'max-w-lg'} pb-28`}>
        {/* Back button */}
        <button
          onClick={isExample ? onBack : handleNewIdea}
          className="flex items-center gap-1 text-cream/40 text-sm mb-4 hover:text-cream/60 transition-colors"
        >
          <ChevronLeft size={16} />
          {isExample ? 'Back to Examples' : 'New Idea'}
        </button>

        {/* A. Summary Card */}
        <Card glow className="mb-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
              <Rocket size={20} className="text-amber" />
            </div>
            <div>
              <h2 className="font-display text-xl text-cream">
                {isExample ? exampleTitle : 'Your Roadmap'}
              </h2>
              {isExample && <Badge variant="amber" className="mt-1">Example</Badge>}
            </div>
          </div>
          <p className="text-sm text-cream/70 font-body leading-relaxed">{roadmap.summary}</p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {activeOption.stack.map((s, i) => (
              <Badge key={i} variant="default">{s.tool}</Badge>
            ))}
          </div>
        </Card>

        {/* B. Option Toggle */}
        <div className={`flex gap-2 mb-6 ${!isDesktop ? 'sticky top-0 z-10 bg-charcoal py-2 -mx-4 px-4' : ''}`}>
          <button
            onClick={() => dispatch({ type: 'SOLVER_SELECT_OPTION', payload: 'free' })}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-body font-medium transition-all border ${
              selectedOption === 'free'
                ? 'bg-sage/10 border-sage/40 text-sage-light'
                : 'bg-charcoal-light border-charcoal-lighter/30 text-cream/50 hover:text-cream/70'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span>Free-First</span>
              <span className="text-xs opacity-60">{roadmap.free_option.estimated_monthly_cost}</span>
            </div>
          </button>
          <button
            onClick={() => dispatch({ type: 'SOLVER_SELECT_OPTION', payload: 'premium' })}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-body font-medium transition-all border ${
              selectedOption === 'premium'
                ? 'bg-amber/10 border-amber/40 text-amber'
                : 'bg-charcoal-light border-charcoal-lighter/30 text-cream/50 hover:text-cream/70'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span>Premium</span>
              <span className="text-xs opacity-60">{roadmap.premium_option.estimated_monthly_cost}</span>
            </div>
          </button>
        </div>

        {/* Premium justification */}
        {selectedOption === 'premium' && roadmap.premium_option.premium_justification && (
          <Card className="mb-6 border-amber/20">
            <div className="flex items-start gap-2">
              <Zap size={16} className="text-amber mt-0.5 flex-shrink-0" />
              <p className="text-xs text-cream/60 font-body leading-relaxed">
                {roadmap.premium_option.premium_justification}
              </p>
            </div>
          </Card>
        )}

        {/* C. Tech Stack Breakdown */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-amber" />
            <h3 className="font-display text-base text-cream">Tech Stack</h3>
          </div>
          <div className="space-y-2">
            {activeOption.stack.map((item, idx) => (
              <Card key={idx} className="cursor-pointer" onClick={() => toggleLayer(idx)}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="amber">{item.layer}</Badge>
                    <span className="text-sm text-cream font-medium">{item.tool}</span>
                  </div>
                  {expandedLayers[idx] ? (
                    <ChevronUp size={16} className="text-cream/30" />
                  ) : (
                    <ChevronDown size={16} className="text-cream/30" />
                  )}
                </div>
                {expandedLayers[idx] && (
                  <div className="mt-3 pt-3 border-t border-charcoal-lighter/20 space-y-2">
                    <p className="text-xs text-cream/60 font-body leading-relaxed">
                      <span className="text-cream/40 font-medium">Why: </span>
                      {item.why}
                    </p>
                    {item.future_use && (
                      <p className="text-xs text-cream/60 font-body leading-relaxed">
                        <span className="text-cream/40 font-medium">Future use: </span>
                        {item.future_use}
                      </p>
                    )}
                    {item.lesson_ref && (
                      <p className="text-xs text-amber/60 font-body">
                        <BookOpen size={10} className="inline mr-1" />
                        Lesson {item.lesson_ref}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* D. Build Order Timeline */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <ListOrdered size={16} className="text-amber" />
            <h3 className="font-display text-base text-cream">Build Order</h3>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-6 bottom-6 w-px bg-charcoal-lighter/30" />
            <div className="space-y-3">
              {activeOption.build_order.map((phase, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-amber z-10">
                    {phase.phase}
                  </div>
                  <Card className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm text-cream font-medium">{phase.title}</h4>
                      <Badge variant="default">
                        <Clock size={10} className="inline mr-0.5" />
                        {phase.estimated_time}
                      </Badge>
                    </div>
                    <p className="text-xs text-cream/50 font-body leading-relaxed">
                      {phase.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E. Data Model */}
        {activeOption.data_model && activeOption.data_model.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Database size={16} className="text-amber" />
              <h3 className="font-display text-base text-cream">Data Model</h3>
            </div>
            <div className={`${isDesktop ? 'grid grid-cols-2 gap-3' : 'space-y-3'}`}>
              {activeOption.data_model.map((table, idx) => (
                <Card key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <Boxes size={14} className="text-amber" />
                    <h4 className="text-sm text-cream font-mono font-medium">{table.table}</h4>
                  </div>
                  <div className="space-y-1 mb-2">
                    {table.fields.map((field, fi) => (
                      <p key={fi} className="text-xs text-cream/50 font-mono pl-2 border-l border-charcoal-lighter/30">
                        {field}
                      </p>
                    ))}
                  </div>
                  {table.relationships && (
                    <div className="flex items-center gap-1 pt-2 border-t border-charcoal-lighter/20">
                      <Link2 size={10} className="text-cream/30" />
                      <p className="text-xs text-cream/30 font-body">{table.relationships}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* F. Key Decisions */}
        {roadmap.key_decisions && roadmap.key_decisions.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <GitBranch size={16} className="text-amber" />
              <h3 className="font-display text-base text-cream">Key Decisions</h3>
            </div>
            <div className="space-y-2">
              {roadmap.key_decisions.map((dec, idx) => (
                <Card key={idx}>
                  <h4 className="text-sm text-cream font-medium mb-2">{dec.decision}</h4>
                  <p className="text-xs text-cream/50 font-body leading-relaxed">{dec.reasoning}</p>
                  {dec.lesson_ref && (
                    <p className="text-xs text-amber/60 font-body mt-2">
                      <BookOpen size={10} className="inline mr-1" />
                      Lesson {dec.lesson_ref}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* G. Risks */}
        {roadmap.risks_and_gotchas && roadmap.risks_and_gotchas.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={16} className="text-amber" />
              <h3 className="font-display text-base text-cream">Risks & Gotchas</h3>
            </div>
            <div className="space-y-2">
              {roadmap.risks_and_gotchas.map((risk, idx) => (
                <Card key={idx} className="border-amber/20">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-amber/60 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-cream/60 font-body leading-relaxed">{risk}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* H. Generated Prompt */}
        {generatedPrompt && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Copy size={16} className="text-amber" />
                <h3 className="font-display text-base text-cream">Build Prompt</h3>
              </div>
              <Button size="sm" variant="secondary" onClick={handleCopyPrompt}>
                {copied ? (
                  <>
                    <CheckCircle2 size={14} className="text-sage" />
                    Copied
                  </>
                ) : (
                  <>
                    <ClipboardCopy size={14} />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <Card className="bg-charcoal border-charcoal-lighter/20">
              <pre className={`text-xs text-cream/60 font-mono whitespace-pre-wrap leading-relaxed ${!showFullPrompt && !isDesktop ? 'max-h-32 overflow-hidden' : ''}`}>
                {showFullPrompt || isDesktop
                  ? generatedPrompt
                  : generatedPrompt.split('\n').slice(0, 5).join('\n') + '\n...'}
              </pre>
              {!isDesktop && (
                <button
                  onClick={() => setShowFullPrompt(!showFullPrompt)}
                  className="flex items-center gap-1 text-amber text-xs font-medium mt-3 hover:text-amber-light transition-colors"
                >
                  {showFullPrompt ? (
                    <>
                      <EyeOff size={12} />
                      Collapse
                    </>
                  ) : (
                    <>
                      <Eye size={12} />
                      See Full Prompt
                    </>
                  )}
                </button>
              )}
            </Card>
          </div>
        )}
      </div>

      {/* I. Sticky Actions Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-charcoal/95 backdrop-blur-sm border-t border-charcoal-lighter/20 px-4 py-3">
        <div className={`flex gap-2 mx-auto ${isDesktop ? 'max-w-3xl' : 'max-w-lg'}`}>
          {generatedPrompt && (
            <Button variant="primary" className="flex-1" onClick={handleCopyPrompt}>
              {copied ? (
                <>
                  <CheckCircle2 size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <ClipboardCopy size={16} />
                  Copy Prompt
                </>
              )}
            </Button>
          )}
          {!isExample && (
            <Button variant="secondary" onClick={handleNewIdea}>
              <RefreshCw size={16} />
              {isDesktop ? 'Start New Idea' : 'New'}
            </Button>
          )}
          {isExample && onBack && (
            <Button variant="secondary" onClick={onBack}>
              <ChevronLeft size={16} />
              Back
            </Button>
          )}
          <Button variant="ghost" onClick={handleBackToLearning}>
            <BookOpen size={16} />
            {isDesktop ? 'Back to Learning' : 'Learn'}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Error State
// ---------------------------------------------------------------------------

function SolverError({ state, dispatch }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center max-w-md mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-danger/10 flex items-center justify-center mb-6">
        <AlertTriangle size={32} className="text-danger-light" />
      </div>
      <h2 className="font-display text-xl text-cream mb-2">Something went wrong</h2>
      <p className="font-body text-cream/50 text-sm leading-relaxed mb-6">
        Hmm, the AI architect is taking a break. Please try again in a moment.
      </p>
      <div className="flex gap-3">
        <Button
          onClick={() => dispatch({ type: 'SOLVER_SET_STEP', payload: 'input' })}
          variant="secondary"
        >
          <ChevronLeft size={16} />
          Start Over
        </Button>
        <Button
          onClick={() => {
            // Re-trigger from the appropriate step
            if (state.solver.followUpQuestions.length > 0) {
              dispatch({ type: 'SOLVER_SET_STEP', payload: 'followup' });
            } else {
              dispatch({ type: 'SOLVER_SET_STEP', payload: 'input' });
            }
          }}
        >
          <RefreshCw size={16} />
          Try Again
        </Button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const hasHydrated = useRef(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        dispatch({
          type: 'LOAD_SAVED',
          payload: {
            completedLessons: saved.completedLessons || [],
            quizAnswers: saved.quizAnswers || {},
            currentChapter: saved.currentChapter || 0,
            currentLesson: saved.currentLesson || 0,
            activeTab: saved.activeTab || 'learn',
            apiKey: '',
            solver: {
              ...initialState.solver,
              history: saved.solverHistory || [],
            },
          },
        });
      }
    } catch {
      // Ignore parse errors
    }
    hasHydrated.current = true;
  }, []);

  // Save to localStorage on relevant state changes
  useEffect(() => {
    if (!hasHydrated.current) return;
    try {
      const toSave = {
        completedLessons: state.completedLessons,
        quizAnswers: state.quizAnswers,
        currentChapter: state.currentChapter,
        currentLesson: state.currentLesson,
        activeTab: state.activeTab,
        solverHistory: state.solver.history,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      // Ignore write errors
    }
  }, [
    state.completedLessons,
    state.quizAnswers,
    state.currentChapter,
    state.currentLesson,
    state.activeTab,
    state.solver.history,
  ]);

  // On desktop, redirect "chapters" tab to "learn" (sidebar handles chapters)
  const activeTab = isDesktop && state.activeTab === 'chapters' ? 'learn' : state.activeTab;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <LearnTab state={state} dispatch={dispatch} isDesktop={isDesktop} />
        );
      case 'progress':
        return <ProgressTab state={state} />;
      case 'chapters':
        return <ChaptersTab state={state} dispatch={dispatch} />;
      case 'roadmap':
        return <RoadmapTab state={state} dispatch={dispatch} />;
      default:
        return (
          <LearnTab state={state} dispatch={dispatch} isDesktop={isDesktop} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-cream font-body">
      {/* Desktop sidebar */}
      {isDesktop && <Sidebar state={state} dispatch={dispatch} />}

      {/* Main content area */}
      <div
        className={`flex flex-col min-h-screen ${
          isDesktop ? 'md:ml-[280px] lg:ml-[320px]' : ''
        }`}
      >
        {/* Top bar */}
        {activeTab === 'learn' && <TopBar state={state} />}

        {/* Tab content */}
        <main className={`flex-1 flex flex-col ${!isDesktop ? 'pb-20' : ''}`}>
          {renderTabContent()}
        </main>
      </div>

      {/* Mobile bottom nav */}
      {!isDesktop && <BottomNav activeTab={activeTab} dispatch={dispatch} />}
    </div>
  );
}

// ============================================================================
// PIN GATE
// ============================================================================

function PinGate({ children }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem('ba_auth') === 'true'
  );
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const [pinRequired, setPinRequired] = useState(null); // null = unknown

  // Check if PIN is required on mount
  useEffect(() => {
    fetch('/api/verify-pin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: '' }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) {
          // No PIN configured — skip gate
          setPinRequired(false);
          setAuthenticated(true);
        } else {
          setPinRequired(true);
        }
      })
      .catch(() => setPinRequired(false)); // If API fails, allow access
  }, []);

  if (authenticated) return children;
  if (pinRequired === null) return null; // Loading
  if (pinRequired === false) return children;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pin.trim()) return;
    setChecking(true);
    setError('');
    try {
      const res = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pin.trim() }),
      });
      const data = await res.json();
      if (data.valid) {
        sessionStorage.setItem('ba_auth', 'true');
        setAuthenticated(true);
      } else {
        setError('Wrong PIN');
        setPin('');
      }
    } catch {
      setError('Could not verify. Try again.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xs text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center mx-auto mb-6">
          <Lock size={28} className="text-amber" />
        </div>
        <h1 className="font-display text-2xl text-cream mb-2">Builder&apos;s Atlas</h1>
        <p className="font-body text-cream/40 text-sm mb-8">Enter PIN to continue</p>
        <input
          type="password"
          inputMode="numeric"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter PIN"
          autoFocus
          className="w-full bg-charcoal-light border border-charcoal-lighter/40 rounded-xl px-4 py-3 text-center text-xl text-cream font-mono tracking-[0.3em] placeholder:text-cream/20 placeholder:tracking-normal placeholder:text-base focus:outline-none focus:ring-2 focus:ring-amber/50 mb-3"
        />
        {error && (
          <p className="text-red-400 text-sm font-body mb-3">{error}</p>
        )}
        <button
          type="submit"
          disabled={!pin.trim() || checking}
          className="w-full bg-amber text-charcoal font-display font-semibold py-3 rounded-xl hover:bg-amber-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {checking ? 'Checking...' : 'Enter'}
        </button>
      </form>
    </div>
  );
}

// ============================================================================
// EXPORT
// ============================================================================

function AppWithGate() {
  return (
    <PinGate>
      <App />
    </PinGate>
  );
}

export default AppWithGate;
