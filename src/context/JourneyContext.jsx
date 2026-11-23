import { createContext, useContext, useState } from 'react'

export const CHAPTERS = [
  { id: 'hero', label: 'Arrival' },
  { id: 'story', label: 'Our story' },
]

const ActiveContext = createContext(0)
const SetActiveContext = createContext(() => {})

export function JourneyProvider({ children }) {
  const [active, setActive] = useState(0)
  return (
    <SetActiveContext.Provider value={setActive}>
      <ActiveContext.Provider value={active}>{children}</ActiveContext.Provider>
    </SetActiveContext.Provider>
  )
}

export const useActiveChapter = () => useContext(ActiveContext)
export const useSetActiveChapter = () => useContext(SetActiveContext)