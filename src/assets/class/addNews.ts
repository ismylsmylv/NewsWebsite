interface NewsItem {
  title: string;
  text: string;
  authors: string[];
  image: string;
  category: string;
  topic: string;
}

export const newsClass = (
  title: string,
  text: string,
  authors: string[],
  image: string,
  category: string,
  topic: string
): NewsItem[] => {
  const newsItem: NewsItem = {
    title,
    text,
    authors,
    image,
    category,
    topic,
  };

  return newsItem;
};
