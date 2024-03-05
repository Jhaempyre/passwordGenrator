import { useState , useCallback} from 'react'
import './App.css'

function App() {
  const [length , setLength]= useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setpassword]= useState("")

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHITJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm"

    if (numAllowed){
      string = string + "0123456789"
    }

    if (characterAllowed){
      string = string + "~!@#$%^&*()_+=-{}|:<>?:;'"
    }

    for (let i= 0; i < string.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
    }

    pass = string.charAt(char)
    console.log(pass)
    setpassword(pass)

  }, [length,numAllowed,characterAllowed,setpassword])

  return (
    <>
    <h1 className='text-4xl text-center'>passwordGenrator</h1>
    </>
  )
}

export default App
