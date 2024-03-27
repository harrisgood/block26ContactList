const ContactPhoneUnorderedList = ({ contacts }) => {
  return (
    <ul>
      {
        contacts.map( person => {
          return <li key={person.phone}>{person.phone}</li>
        })
      }
    </ul>
  )
}

export default ContactPhoneUnorderedList