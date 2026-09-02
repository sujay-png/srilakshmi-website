const http = require('http');
const cheerio = require('cheerio');

http.get('http://srilakshmiconstruction.com/our-experience/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    console.log($('.entry-content').html());
  });
});
