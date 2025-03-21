const fs = require("fs");
const path = require("path");

const file = path.resolve(
  __dirname,
  "node_modules/@angular-devkit/build-angular/src/utils/process-bundle.js"
);

if (!fs.existsSync(file)) {
  console.error("❌ process-bundle.js not found");
  process.exit(1);
}

let content = fs.readFileSync(file, "utf8");

// Check for SourceMapConsumer.with usage
if (content.includes("SourceMapConsumer.with")) {
  console.log("🔧 Patching process-bundle.js...");

  const lines = content.split("\n");
  const patchedLines = [];
  let skipping = false;

  for (let line of lines) {
    if (line.includes("await source_map_1.SourceMapConsumer.with(first")) {
      patchedLines.push(
        "    const originalConsumer = await new source_map_1.SourceMapConsumer(first);"
      );
      skipping = true;
      continue;
    }
    if (
      skipping &&
      line.includes("await source_map_1.SourceMapConsumer.with(second")
    ) {
      patchedLines.push(
        "    const newConsumer = await new source_map_1.SourceMapConsumer(second);"
      );
      patchedLines.push("    newConsumer.eachMapping(mapping => {");
      continue;
    }
    if (skipping && line.includes("});")) {
      skipping = false;
      continue;
    }
    if (!skipping) {
      patchedLines.push(line);
    }
  }

  fs.writeFileSync(file, patchedLines.join("\n"), "utf8");
  console.log("✅ Patch complete!");
} else {
  console.log("ℹ️ Patch already applied.");
}
