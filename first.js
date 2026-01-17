const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Ho World');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Simple Website</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f8f9fa;
      color: #333;
    }

    header {
      background: #007bff;
      color: white;
      padding: 1rem;
      text-align: center;
    }

    nav {
      background: #0056b3;
      padding: 0.5rem;
      text-align: center;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
    }

    nav a:hover {
      text-decoration: underline;
    }

    main {
      padding: 2rem;
      text-align: center;
    }

    section {
      margin: 2rem auto;
      max-width: 600px;
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    footer {
      background: #343a40;
      color: white;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>

  <main>
    <section>
      <h2>About This Site</h2>
      <p>This is a simple HTML and CSS website with no external files. You can modify the content easily.</p>
    </section>

    <section>
      <h2>Our Mission</h2>
      <p>We aim to build clean and responsive websites using just HTML and CSS.</p>
    </section>
  </main>

  <footer>
    &copy; 2025 My Simple Website | All Rights Reserved
  </footer>

</body>
</html>
`);


});

server.listen(80, '127.0.0.1', () => {
  console.log("listenig on port 80");
});



