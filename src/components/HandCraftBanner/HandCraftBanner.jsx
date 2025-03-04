import styles from './HandCraftBanner.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const HandCraftBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <Image 
          src="/images/handcraft-banner.jpg"
          alt="HandCraft Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.content}>
          <span className={styles.subtitle}>Discover Art in Technology</span>
          <h2 className={styles.title}>HandCraft</h2>
          <Link href="/handcraft" className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HandCraftBanner