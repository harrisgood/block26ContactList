import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // create variable to store/update our contact api return and set it equal to empty array
  const [contactData, setContactData] = useState([])

  // url we will fetch api data from
  const DATA_API_URL = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    const getContacts = async () => {
      
    }
  }, [])

  return (
    <>

    </>
  )
}

export default App
