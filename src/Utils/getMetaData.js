import axios from 'axios';

export const getMetaData = async() =>{

const options = {
  method: 'GET',
  url: 'https://api.spotify.com/v1/albums',
  params: {
    id: '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc'
  },
  headers: {
    'X-RapidAPI-Key': 'BQBCrG1wPcuhc0sBA03TKzEOlul1k0M_cccvzvIDMwzSSB9JU7hFmiCXR3L_r1NjkGH405YWeszLObow9U8xvuLtQuNk6RLnJZ76Ag8S3Hoie0TV4N',
    'X-RapidAPI-Host': 'api.spotify.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}