import Experience from '@/components/experience/Experience'
import HeroSection from '@/components/heroSection/HeroSection'
import Projects from '@/components/projects'
import TechStack from '@/components/techStack/TechStack'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Experience />
      <Projects />
    </>
  )
}
