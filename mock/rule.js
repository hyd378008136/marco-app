const urlList = require('./url');
const _ = require('lodash');

module.exports = {
  summary: 'a rule to hack response',
  *beforeSendRequest(requestDetail) {
    if (_.some(urlList, function (url) {
      return requestDetail.url.includes(url)
      })) {
      console.log(requestDetail.url);
      const newRequestOptions = requestDetail.requestOptions;
      requestDetail.protocol = 'http';
      newRequestOptions.hostname = '127.0.0.1'
      newRequestOptions.port = '3001';
      newRequestOptions.path = '/api/rest/getList';
      newRequestOptions.method = 'GET';
      return requestDetail;
    }
    return null;
  },
};