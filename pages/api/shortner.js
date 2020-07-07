import axios from 'axios';

const API_URL = 'https://cutt.ly/api/api.php';
const API_KEY = '5d4816e7a7f14421efd1412e4a952ff1930c8';

class ShortnerAPI {
  shortUrl = async url => {
    return new Promise((resolve, reject) => {

      axios.get(`${API_URL}`, {
        params: {
          key: API_KEY,
          short: url
        }
      }).then(res => {
        resolve(res.data);
      }).catch(error => {
        reject(error);
      });
      
    });
  };

  getDetails = async shortned_url => {
    return new Promise((resolve, reject) => {

      axios.get(`${API_URL}`, {
        params: {
          stats: shortned_url
        }
      }).then(
        res => resolve(res.data)
      ).catch(error => reject(error));

    });
  };
};

export default new ShortnerAPI();