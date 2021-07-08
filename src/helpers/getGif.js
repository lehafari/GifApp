export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )} &api_key=cO2qwxyC7hVzqeDOyNsq4No6Vl04W3UQ&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      img: gif.images.downsized_medium.url,
      title: gif.title,
    };
  });
  return gifs;
};
