import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TECH_DIR = path.join(ROOT, "public", "tech");
const MANIFEST = path.join(TECH_DIR, "manifest.json");

// hangi uzantılar listelenecek
const exts = [
  ".jpg",".jpeg",".png",".webp",".gif",".svg",
  ".pdf",".ppt",".pptx",".doc",".docx",".xls",".xlsx",
  ".mp4",".webm",".mov",".txt",".md",".csv",".json"
];

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function toPublicPath(abs) {
  return abs.split(path.sep).join("/").split("/public").slice(1).join("/public").replace(/^\/?public/, "");
}

const files = fs.existsSync(TECH_DIR) ? walk(TECH_DIR) : [];
const items = files
  .filter(f => exts.includes(path.extname(f).toLowerCase()))
  .map(f => {
    const rel = toPublicPath(f);
    return {
      name: path.basename(f),
      path: rel.startsWith("/") ? rel : `/${rel}`,
      ext: path.extname(f).slice(1).toLowerCase(),
      size: fs.statSync(f).size
    };
  })
  .sort((a,b)=> a.name.localeCompare(b.name, "tr"));

fs.writeFileSync(MANIFEST, JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2));
console.log(`Wrote ${items.length} items to ${MANIFEST}`);
