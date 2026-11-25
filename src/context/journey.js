import { createContext, useContext } from 'react'

export const CHAPTERS = [
  { id: 'hero', label: 'Explore Walton' },
  { id: 'story', label: 'Our story' },
]

export const ActiveContext = createContext(0)
export const SetActiveContext = createContext(() => {})

export const useActiveChapter = () => useContext(ActiveContext)
export const useSetActiveChapter = () => useContext(SetActiveContext)