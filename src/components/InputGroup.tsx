import { AppRadio } from './App/App'

const InputGroup = () => {
  return (
    <AppRadio.Consumer>
      {(value) => {
        const { setMethod } = value
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

      }}
    </AppRadio.Consumer>
  )
}

export default InputGroup