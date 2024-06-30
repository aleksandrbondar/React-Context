import './App.css'
import PropDrilling from "../PropDrilling"
import WithContext from "../WithContext"
import { createContext, useState } from 'react'
import InputGroup from '../InputGroup';

export const AppRadio = createContext<{ setMethod: (value: string) => void }>({ setMethod: () => { } });

const App = () => {
  const propToDrill: string = "This is the prop from PropDrilling"
  const propToConsumer: string = "This is the prop from Use Context to Consumer"
  const maxLevel: number = Math.floor(Math.random() * 27)
  const [method, setMethod] = useState("PropDrilling")
  return (
    <>
      <AppRadio.Provider value={{ setMethod }}>
        <InputGroup />
      </AppRadio.Provider>
      <div className="container">
        {method === "PropDrilling" && <PropDrilling propToDrill={propToDrill} maxLevel={maxLevel} />}
        {method === "WithContext" && <WithContext propToConsumer={propToConsumer} maxLevel={maxLevel} />}
      </div>
    </>
  )
}

export default App