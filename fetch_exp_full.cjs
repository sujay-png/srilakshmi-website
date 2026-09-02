const http = require('http');
const fs = require('fs');

http.get('http://srilakshmiconstruction.com/our-experience/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let text = data
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' \n ')
      .replace(/\n\s*\n/g, '\n');
    fs.writeFileSync('exp_text.txt', text);
    console.log('Saved to exp_text.txt');
  });
});
