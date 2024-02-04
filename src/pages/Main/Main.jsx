import styles from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await getNews();
        setNews(res.news)
        setIsLoading(false);
      } catch (e) {
        console.log(e)
      }
    }
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {
        news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type='banner' />
      }
      {
        isLoading ? <Skeleton count={10} type='item' /> : <NewsList news={news} />
      }
    </main>
  )
}
export default Main;