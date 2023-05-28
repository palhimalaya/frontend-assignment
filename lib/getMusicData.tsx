const getMusicData = async (searchTerm: string) => {
  const apiKey = process.env.RAPID_API || "";
  const searchParams = new URLSearchParams({
    q: searchTerm,
    type: "albums",
    offset: "0",
    limit: "100",
  });
  const url = "https://spotify23.p.rapidapi.com/search/?" + searchParams;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
  }
};

export default getMusicData;
