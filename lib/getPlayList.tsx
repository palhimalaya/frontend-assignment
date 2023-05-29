const getPlayList = async () => {
  const url =
    "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API || "",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getPlayList;
