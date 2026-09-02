const http = require('http');

http.get('http://srilakshmiconstruction.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // very basic text extraction
    const lines = data.replace(/<[^>]+>/g, '\n').split('\n');
    lines.forEach(line => {
      const t = line.trim();
      if (t.toLowerCase().includes('certification') || t.toLowerCase().includes('team')) {
        console.log(t);
      }
    });
  });
});
