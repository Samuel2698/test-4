import { API_KEY, API_URL } from "./settings";

export default function getTrendingTerms() {
  const apiURL = `${API_URL}/trending/search?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};
