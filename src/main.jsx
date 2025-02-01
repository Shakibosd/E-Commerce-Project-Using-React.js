import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import './app.css'
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar'
import HeroSection from './Components/HeroSection/HeroSection'
import TopBanner from './Components/TopBanner/TopBanner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <LogoSearchBar />
    <HeroSection />
    <TopBanner />
  </StrictMode>,
)
