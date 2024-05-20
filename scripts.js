var request = require('then-jsonp');

var result = request('GET', 'https://api.chzzk.naver.com/service/v1/channels/followings?size=505');
result.done(function (res) {
  console.dir(res);
});