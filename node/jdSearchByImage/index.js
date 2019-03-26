const request = require('request-promise');
const fs = require('fs');

const options = {
  method: 'GET',
  url: 'https://search.jd.com/image',
  qs: { op: 'upload' },
  headers:
  {
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7,zh-TW;q=0.6',
    'accept-encoding': 'gzip, deflate, br',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    'upgrade-insecure-requests': '1'
  },
  // multipart: [
  //   {
  //     'content-type': 'application/json',
  //     body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': { follows: true, length: 18, 'content_type': 'text/plain' } } })
  //   }
  // ]
};
request(options).then(body => {
  console.log('body----', body);
  // fs.writeFile("files/test", body, function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("The file was saved!");
  // });
});
