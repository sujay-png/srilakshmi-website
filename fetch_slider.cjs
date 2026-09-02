const http = require('http');

http.get('http://srilakshmiconstruction.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^"]*(?:slider|slide)[^"]*)"[^>]*>/gi;
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      console.log("IMG:", match[0]);
    }
    
    const captionRegex = /<div[^>]+class="[^"]*caption[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
    while ((match = captionRegex.exec(data)) !== null) {
      console.log("CAPTION:", match[0].replace(/\s+/g, ' '));
    }
  });
});
