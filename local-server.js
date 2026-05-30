const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
let port = Number(process.env.PORT) || 8000;
const root = process.cwd();

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(filePath, response, statusCode = 200) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Server error");
      return;
    }

    response.writeHead(statusCode, {
      "Content-Type":
        mimeTypes[path.extname(filePath).toLowerCase()] ||
        "application/octet-stream",
    });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url.split("?")[0]);
  const relativePath =
    requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  let filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error) {
      sendFile(path.join(root, "404.html"), response, 404);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    sendFile(filePath, response);
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    port += 1;
    server.listen(port, host);
    return;
  }

  throw error;
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Static server running at http://${host}:${address.port}`);
});

server.listen(port, host);
