const fs = require('fs');
const path = require('path');

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('SourceMapConsumer.with')) {
    console.log(`✅ Patching: ${filePath}`);
    content = content.replace(
      /SourceMapConsumer\.with\s*\(.*?\)\s*{/g,
      `SourceMapConsumer.prototype.with = async function (_, fn) { return fn(this); }; // patched\n`
    );
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function findAndPatch(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findAndPatch(fullPath);
    } else if (entry.name === 'source-map.js') {
      patchFile(fullPath);
    }
  }
}

console.log('🔧 Searching for source-map.js...');
findAndPatch(path.resolve(__dirname, 'node_modules'));
console.log('✅ Patch complete.');
