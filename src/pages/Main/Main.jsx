import styles from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews(currentPage, pageSize);
      setNews(res.news)
      setIsLoading(false);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  }

  return (
    <main className={styles.main}>
      {
        news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type='banner' />
      }
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handlePageClick={handlePageClick} handleNextPage={handleNextPage}/>
      {
        isLoading ? <Skeleton count={10} type='item' /> : <NewsList news={news} />
      }
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handlePageClick={handlePageClick} handleNextPage={handleNextPage}/>

    </main>
  )
}
export default Main;