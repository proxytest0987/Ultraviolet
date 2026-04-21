const fs = require("fs");
const path = require("path");

// Ultravioletファイルをpublicにコピー
const uvDest = path.join(__dirname, "public", "uv");
if (!fs.existsSync(uvDest)) {
  fs.mkdirSync(uvDest, { recursive: true });
}

const uvSrc = path.join(__dirname, "node_modules", "@titaniumnetwork-dev", "ultraviolet", "dist");

if (!fs.existsSync(uvSrc)) {
  console.error("Ultraviolet not found. Run: npm install");
  process.exit(1);
}

const files = fs.readdirSync(uvSrc);
files.forEach((file) => {
  fs.copyFileSync(path.join(uvSrc, file), path.join(uvDest, file));
  console.log(`Copied: ${file}`);
});

console.log("✅ Setup completed successfully!");
