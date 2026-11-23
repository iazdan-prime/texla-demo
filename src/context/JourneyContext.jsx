import { useState } from 'react'
import { ActiveContext, SetActiveContext } from './journey'

export function JourneyProvider({ children }) {
  const [active, setActive] = useState(0)
  return (
    <SetActiveContext.Provider value={setActive}>
      <ActiveContext.Provider value={active}>{children}</ActiveContext.Provider>
    </SetActiveContext.Provider>
  )
}