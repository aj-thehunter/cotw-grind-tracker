import { cp, mkdir, rm } from "node:fs/promises";

await rm("www", { recursive: true, force: true });
await mkdir("www", { recursive: true });

for (const file of ["index.html", "style.css", "script.js", "service-worker.js", "favicon.svg"]) {
  await cp(file, "www/" + file);
}

console.log("Copied COTW Grind Tracker web app into www/");
