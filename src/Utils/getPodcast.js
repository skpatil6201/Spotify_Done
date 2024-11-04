export const fetchPodcastEpisodes = async () => {
  const url = "https://spotify23.p.rapidapi.com/v1/episodes"
  const options = {
    method: "GET",
    params: {
      id: '512ojhOuo1ktJprKbVcKyQ'
    },
    headers: {
      "Key": "BQBCrG1wPcuhc0sBA03TKzEOlul1k0M_cccvzvIDMwzSSB9JU7hFmiCXR3L_r1NjkGH405YWeszLObow9U8xvuLtQuNk6RLnJZ76Ag8S3Hoie0TV4N",
      "Host": "api.spotify.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
