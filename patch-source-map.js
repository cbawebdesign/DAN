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
  console.log("🔧 Patching .with() usage...");

  content = content.replace(
    /await source_map_1\.SourceMapConsumer\.with\(first, null,.*?await source_map_1\.SourceMapConsumer\.with\(second, null,.*?newConsumer => \{/s,
    `const originalConsumer = await new source_map_1.SourceMapConsumer(first);
const newConsumer = await new source_map_1.SourceMapConsumer(second);
newConsumer.eachMapping(mapping => {`
  );

  // Clean up extra closing }); });
  content = content.replace(/\n\s*\}\);\s*\}\);/, "\n});");

  fs.writeFileSync(filePath, content, "utf8");
  console.log("✅ Patch complete!");
} else {
  console.log("ℹ️ Patch already applied or not needed.");
}
