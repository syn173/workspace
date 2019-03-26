'use strict';

// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  // async list(page = 1) {
  //   // read config
  //   // console.log('config', this.config);
  //   const { serverUrl, pageSize } = this.config.news;

  //   // use build-in http client to GET hacker-news api
  //   const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
  //     data: {
  //       orderBy: '"$key"',
  //       startAt: `"${pageSize * (page - 1)}"`,
  //       endAt: `"${pageSize * page - 1}"`,
  //     },
  //     dataType: 'json',
  //   });

  //   // parallel GET detail
  //   const newsList = await Promise.all(
  //     Object.keys(idList).map(key => {
  //       const url = `${serverUrl}/item/${idList[key]}.json`;
  //       return this.ctx.curl(url, { dataType: 'json' });
  //     })
  //   );
  //   return newsList.map(res => res.data);
  // }

  /* eslint-disable */
  async list() {
    const newsList = [{
      "by": "tel",
      "descendants": 16,
      "id": 121003,
      "kids": [121016, 121109, 121168],
      "score": 25,
      "text": "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
      "time": 1203647620,
      "title": "Ask HN: The Arc Effect",
      "type": "story",
      "url": ""
    }, {
      "by": "pg",
      "descendants": 54,
      "id": 126809,
      "kids": [126822, 126823, 126993, 126824, 126934, 127411, 126888, 127681, 126818, 126816, 126854, 127095, 126861, 127313, 127299, 126859, 126852, 126882, 126832, 127072, 127217, 126889, 127535, 126917, 126875],
      "parts": [126810, 126811, 126812],
      "score": 46,
      "text": "",
      "time": 1204403652,
      "title": "Poll: What would happen if News.YC had explicit support for polls?",
      "type": "poll"
    }]
    return newsList;
  }
  /* eslint-enable */
}

module.exports = NewsService;
