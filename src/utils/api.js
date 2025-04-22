export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = "84ff05f293d74e1e903f149890b4a2db";

const getNews = async (searchText) => {
  const toDate = new Date().toISOString().split("T")[0];
  const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(
    searchText
  )}&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("Fetched data:", data);

    if (!data.articles) {
      console.error("API Error:", data);
      return [];
    }

    return data.articles;
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

export default getNews;
