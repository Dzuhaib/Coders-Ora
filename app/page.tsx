import HeroSlider from "@/components/sections/home/HeroSlider"
import ServicesSection from "@/components/sections/home/ServicesSection"
import AboutPreview from "@/components/sections/home/AboutPreview"
import PortfolioPreview from "@/components/sections/home/PortfolioPreview"
import ContactPreview from "@/components/sections/home/ContactPreview"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
    </>
  )
}
