import styles from './Header.module.css';
import {formatDate} from "../../helpers/formatDate.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.mainTitle}>news reactify</h1>
      <p className={styles.titleDate}>{formatDate(new Date())}</p>
    </header>
  )
}
export default Header;