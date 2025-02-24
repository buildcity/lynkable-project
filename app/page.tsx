import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import HybridEvents from "../components/HybridEvents"
import DecentralizedEvents from "../components/DecentralizedEvents"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <HybridEvents />
        <DecentralizedEvents />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

