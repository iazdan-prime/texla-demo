import Header from './components/Header'
import Hero from './sections/Hero'
import JourneyControl from './components/JourneyControl'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <JourneyControl index={1} total={2} label="Arrival" />
    </>
  )
}