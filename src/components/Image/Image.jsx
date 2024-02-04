import styles from './Image.module.css';

const Image = ({image}) => {
  return <div className={styles.wrapper}>
    {
      image ? <img className={styles.image} alt='news' src={image} /> : null
    }
  </div>
}

export default Image;