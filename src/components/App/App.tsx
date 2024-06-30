import './App.css'
import PropDrilling from "../PropDrilling"
import WithContext from "../WithContext"
import { createContext, useState } from 'react'
import InputGroup from '../InputGroup';

export const ForwardMethod = createContext({} as { setMethod: React.Dispatch<React.SetStateAction<string>> })

const App = () => {
  const propToDrill: string = "This is the prop from PropDrilling"
  const propToConsumer: string = "This is the prop from Use Context to Consumer"
  const maxLevel: number = Math.floor(Math.random() * 27)
  const [method, setMethod] = useState("PropDrilling")
  return (
    <>
      <ForwardMethod.Provider value={{ setMethod }}>
        <InputGroup />
      </ForwardMethod.Provider>
      <div className="container">
        {method === "PropDrilling" && <PropDrilling propToDrill={propToDrill} maxLevel={maxLevel} />}
        {method === "WithContext" && <WithContext propToConsumer={propToConsumer} maxLevel={maxLevel} />}
      </div>
    </>
  )
}

export default App