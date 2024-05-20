const axios = require('axios');

async function getOpenApiData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
}

const openApiUrl = 'https://api.chzzk.naver.com/service/v1/channels/followings?size=505';
getOpenApiData(openApiUrl)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });