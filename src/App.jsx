import Header from './components/Header'
import Hero from './sections/Hero'
import Story from './sections/Story'
import JourneyControl from './components/JourneyControl'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <JourneyControl index={1} total={2} label="Arrival" />
    </>
  )
}