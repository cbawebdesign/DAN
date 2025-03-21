const fs = require('fs');
const path = require('path');

const patches = [
  {
    file: 'node_modules/@angular-devkit/build-angular/src/utils/process-bundle.js',
    original: `await source_map_1.SourceMapConsumer.with(first, null, originalConsumer => {
        return source_map_1.SourceMapConsumer.with(second, null, newConsumer => {`,
    replacement: `const originalConsumer = await new source_map_1.SourceMapConsumer(first);
        const newConsumer = await new source_map_1.SourceMapConsumer(second);`
  },
  {
    file: 'node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js',
    original: `source_map_1.SourceMapConsumer.with(intermediateSourceMap, null, intermediate => {
                return source_map_1.SourceMapConsumer.with(previousSourceMap, null, previous => {`,
    replacement: `const intermediate = new source_map_1.SourceMapConsumer(intermediateSourceMap);
                const previous = new source_map_1.SourceMapConsumer(previousSourceMap);`
  }
];

patches.forEach(({ file, original, replacement }) => {
  const filePath = path.resolve(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(original)) {
      content = content.replace(original, replacement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Patched: ${filePath}`);
    } else {
      console.log(`ℹ️ No match found in: ${filePath}`);
    }
  } else {
    console.error(`❌ File not found: ${filePath}`);
  }
});
