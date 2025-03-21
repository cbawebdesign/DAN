const fs = require('fs');
const path = require('path');

const file = path.resolve(
  __dirname,
  'node_modules/@angular-devkit/build-angular/src/utils/process-bundle.js'
);

if (!fs.existsSync(file)) {
  console.error('❌ process-bundle.js not found');
  process.exit(1);
}

let content = fs.readFileSync(file, 'utf8');

// Only patch if `.with(` still exists
if (content.includes('SourceMapConsumer.with')) {
  console.log('🔧 Patching process-bundle.js to remove SourceMapConsumer.with...');

  // Replace the full `.with(...)` block with a clean `new SourceMapConsumer(...)` implementation
  content = content.replace(
    /await source_map_1\.SourceMapConsumer\.with\(first, null,.*?await source_map_1\.SourceMapConsumer\.with\(second, null,.*?newConsumer => \{/s,
    `const originalConsumer = await new source_map_1.SourceMapConsumer(first);
const newConsumer = await new source_map_1.SourceMapConsumer(second);
newConsumer.eachMapping(mapping => {`
  );

  // Remove extra closing }); });
  content = content.replace(/\n\s*\}\);\s*\}\);/, '\n});');

  fs.writeFileSync(file, content, 'utf8');
  console.log('✅ Patched process-bundle.js');
} else {
  console.log('ℹ️ Already patched');
}
