import Header from './components/Header'
import Hero from './sections/Hero'
import Story from './sections/Story'
import JourneyControl from './components/JourneyControl'
import { JourneyProvider } from './context/JourneyContext'

export default function App() {
  return (
    <JourneyProvider>
      <Header />
      <Hero />
      <Story />
      <JourneyControl />
    </JourneyProvider>
  )
}