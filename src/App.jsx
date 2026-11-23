import Header from './components/Header'
import Hero from './sections/Hero'
import Story from './sections/Story'
import JourneyControl from './components/JourneyControl'
import { JourneyProvider } from './context/JourneyContext'
import useRefreshOnLoad from './hooks/useRefreshOnLoad'
import './styles/responsive.css'

export default function App() {
  useRefreshOnLoad()
  return (
    <JourneyProvider>
      <Header />
      <Hero />
      <Story />
      <JourneyControl />
    </JourneyProvider>
  )
}