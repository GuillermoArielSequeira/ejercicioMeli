module.exports = (bundle, component) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width">
      <link rel="stylesheet" type="text/css" href="/${bundle}.css">
      <link rel="apple-touch-icon" href="../assets/favicon.ico" />
      <title>Mercado Libre</title>
  </head>
  <body>
    <div id="root">${component}</div>
    <script src="/${bundle}.js"></script>
  </body>
  </html>
  `;
