const http = require("http");
const fs = require("fs");
const readline = require("readline");
const portar = 8080;
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


function criarArquivo(nomeDoArquivo) {
  fs.appendFileSync(nomeDoArquivo, `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum sodales ullamcorper. Nullam
  vulputate ligula  et suscipit egestas.
  Fusce mi turpis, sagittis quis molestie sed, interdum sed enim. Nullam metus turpis, tempor
  vel.`, (err) => {
    if (err) throw err;
  });
}
criarArquivo('text.txt')
readFileByLine('text.txt')