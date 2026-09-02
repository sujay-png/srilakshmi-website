const http = require('http');

http.get('http://srilakshmiconstruction.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Extract all links
    const linkRegex = /<a[^>]+href=["'](.*?)["'][^>]*>(.*?)<\/a>/gi;
    let match;
    const links = [];
    while ((match = linkRegex.exec(data)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (href.startsWith('http://srilakshmiconstruction.com') || href.startsWith('/')) {
        links.push(`${text} -> ${href}`);
      }
    }
    
    // De-duplicate and print
    const unique = [...new Set(links)];
    console.log("Found " + unique.length + " links:");
    console.log(unique.join('\n'));
  });
}).on('error', err => {
  console.error("Error: " + err.message);
});
