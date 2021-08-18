const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Z6yqBfjr6SkMy0CjFcwoExMSj5TkISAC`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      title: img.title,
      id: img.id,
      img: img.images.downsized.url,
    };
  });
  return gifs;
};

export default getGif;
