import axios from 'axios';


export const getAllInOne = async (query) => {

    const options = {
      method: 'GET',
      url: 'https://api.spotify.com/',
      params: {
        q: query,
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'Key': 'BQBCrG1wPcuhc0sBA03TKzEOlul1k0M_cccvzvIDMwzSSB9JU7hFmiCXR3L_r1NjkGH405YWeszLObow9U8xvuLtQuNk6RLnJZ76Ag8S3Hoie0TV4N',
        'Host': 'api.spotify.com/'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
