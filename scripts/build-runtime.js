const childProcess = require("child_process");
const { readFileSync, writeFileSync } = require("fs");
const glob = require("glob");

function main() {
  childProcess.execSync("npm run build-runtime2", {
    stdio: "pipe",
    encoding: "utf-8",
  });

  const files = glob.globSync("lib/g4/*.ts");

  console.log(files.join("\n"));

  // add @ts-nocheck to all files
  for (const p of files) {
    let file = readFileSync(p, "utf-8");
    file = `// @ts-nocheck\n${file}`;
    writeFileSync(p, file);
  }
  console.log("build-runtime.js: done");
}

main();
