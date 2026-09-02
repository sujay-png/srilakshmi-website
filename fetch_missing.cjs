const http = require('http');

const urls = [
  'http://srilakshmiconstruction.com/our-experience/'
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const textRegex = /<p[^>]*>(.*?)<\/p>/gi;
        let match;
        const paragraphs = [];
        while ((match = textRegex.exec(data)) !== null) {
          paragraphs.push(match[1].replace(/<[^>]+>/g, '').trim());
        }
        resolve(`--- ${url} ---\n${paragraphs.filter(p => p.length > 5).join('\n\n')}`);
      });
    }).on('error', err => reject(err));
  });
}

Promise.all(urls.map(fetchText)).then(results => {
  console.log(results.join('\n\n=====================\n\n'));
});
