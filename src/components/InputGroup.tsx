import { useContext } from 'react'
import { ForwardMethod } from './App/App'

const InputGroup = () => {
  const { setMethod } = useContext(ForwardMethod);
  return (
    <form className='inputGroup'>
      <div>
        <input
          type='radio'
          value="PropDrilling"
          name='method'
          onChange={(e) => setMethod(e.target.value)}
          defaultChecked={true}
        />
        <label>Prop Drilling</label>
      </div>

      <div>
        <input
          type='radio'
          value="WithContext"
          name='method'
          onChange={(e) => setMethod(e.target.value)}
        />
        <label>Use Context</label>
      </div>
    </form>
  )
}

export default InputGroup