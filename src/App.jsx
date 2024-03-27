import { useState, useEffect } from 'react'
import './App.css'
import ContactNameUnorderedList from './ContactNameUnorderedList';
import ContactEmailUnorderedList from './ContactEmailUnorderedList';
import ContactPhoneUnorderedList from './ContactPhoneUnorderedList';

function App() {
  // create variable to store/update our contact api return and set it equal to empty array
  const [contactData, setContactData] = useState([]);

  // url we will fetch api data from
  const DATA_API_URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const getContacts = async () => {
      // fetch raw contact data from API
      const apiContacts = await fetch(DATA_API_URL);

      // parse raw data into an object with json
      const jsonContacts = await apiContacts.json();
      // set a const equal to json data but not in a promise
      const contacts = jsonContacts;

      // update contactData useState
      setContactData(contacts);
    }

    getContacts();
  }, [])

  return (
    <>
      <div>
        <h2>Name</h2>
        {/* run our contact name list component with our contactData as an argument for the contacts prop */}
        <ContactNameUnorderedList contacts={contactData} />
      </div>
      
      <div>
        <h2>Email</h2>
        {/* run our contact email list component with our contactData as an argument for the contacts prop */}
        <ContactEmailUnorderedList contacts={contactData} />
      </div>

      <div>
        <h2>Phone</h2>
        {/* run our contact phone number list component with our contactData as an argument for the contacts prop */}
        <ContactPhoneUnorderedList contacts={contactData} />
      </div>
    </>
  )
}

export default App
