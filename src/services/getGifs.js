const apiKey = "lr8qrEPPqss6gxYCcY4hFRrQ0dJy3cuO";

export default function getGifs({ keyword = "saitama" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { id, images } = image;
          const { url } = images.downsized_medium;
          return { id, url };
        });
        return gifs;
      }
    });
}
