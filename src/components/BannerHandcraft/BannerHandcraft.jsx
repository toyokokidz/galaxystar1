import styles from './BannerHandcraft.module.scss'

const BannerHandcraft = () => {
  return (
    <section className="container">
      <div className={styles.banner}>
        <img src="/images/handcraft-banner.jpg" alt="HandCraft Banner" />
      </div>
    </section>
  )
}

export default BannerHandcraft