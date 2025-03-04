import styles from './MainBanner.module.scss'

const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <h1>Galaxy Gear</h1>
          <p>Discover the Perfect Fusion of Style and Performance</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default MainBanner 