var app = module.exports = require("koa")();

var html =
  `<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Untitled</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="author" href="humans.txt">
        <script src="//localhost:9091"></script>
    </head>
    <body>
        Page loaded at: <span id="demo"></span>
        <script language="javascript">
          document.getElementById('demo').innerHTML = new Date();
        </script>
    </body>
  </html>`;

app.use(function *() {
  if(this.request.path === "/client") {
    this.body = html;
    return;
  }
  this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port != "number") ? port : 3000;

if(!module.parent) {
  app.listen(port);
}
console.log("Application started. Listening on port: " + port);
