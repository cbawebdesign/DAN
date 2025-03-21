const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "node_modules/@angular-devkit/build-angular/src/utils/process-bundle.js"
);

if (!fs.existsSync(filePath)) {
  console.error("❌ process-bundle.js not found");
  process.exit(1);
}

let content = fs.readFileSync(filePath, "utf8");

if (content.includes("SourceMapConsumer.with")) {
  console.log("🔧 Patching process-bundle.js...");

  // Find start and end of the .with block and replace manually
  const lines = content.split("\n");
  const patchedLines = [];

  let insidePatch = false;

  for (let line of lines) {
    if (line.includes("await source_map_1.SourceMapConsumer.with(first")) {
      patchedLines.push(
        "    const originalConsumer = await new source_map_1.SourceMapConsumer(first);"
      );
      insidePatch = true;
      continue;
    }

    if (insidePatch && line.includes("await source_map_1.SourceMapConsumer.with(second")) {
      patchedLines.push(
        "    const newConsumer = await new source_map_1.SourceMapConsumer(second);"
      );
      patchedLines.push("    newConsumer.eachMapping(mapping => {");
      continue;
    }

    if (insidePatch && line.trim() === "}); });") {
      insidePatch = false;
      continue; // skip
    }

    if (!insidePatch) {
      patchedLines.push(line);
    }
  }

  fs.writeFileSync(filePath, patchedLines.join("\n"), "utf8");
  console.log("✅ Patch complete!");
} else {
  console.log("ℹ️ Patch already applied.");
}
