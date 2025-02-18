type Props = {};

const getTopChart = async () => {
  const url =
    "https://billboard-api5.p.rapidapi.com/api/charts/billboard-global-200";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API || "",
      "X-RapidAPI-Host": "billboard-api5.p.rapidapi.com",
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

export default getTopChart;
