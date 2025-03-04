import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src="/images/hero-keyboard.jpg" alt="Galaxy Mechanical Keyboard" />
      </div>
    </section>
  )
}

export default Hero 