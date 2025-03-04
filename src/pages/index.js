import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import HandCrafted from '../components/HandCrafted/HandCrafted'
import HandCraftBanner from '../components/HandCraftBanner/HandCraftBanner'
import AboutSection from '../components/AboutSection/AboutSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <HandCrafted />
        <HandCraftBanner />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}