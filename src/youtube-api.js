import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAWDMVGneS8zrtcsOttnU6WwEwChOx3JvM';
const STATISTICS_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const viewCountByVideo = (videoId) => {
    const params = {
	key: API_KEY,
	id: videoId,
	part: 'statistics',
    };
    return new Promise((resolve, reject) => {
	    axios.get(STATISTICS_API_URL, { params })
	    .then((response) => {
		    resolve(Number(response.data.items[0].statistics.viewCount));
		})
	    .catch((error) => {
		    console.log(`youtube statistics api error: ${error}`);
		    reject(error);
		});
	});
};


export const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};
