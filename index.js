const http = require("http");
const fs = require("fs");
const portar = 443;
const servidor = http.createServer((req, res) => {
  fs.readFile("pagina.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});
servidor.listen(portar, () => {
  console.log("servidor rodando");
});

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    console.log(line);
  }
}

//readFileByLine('tex.txt')