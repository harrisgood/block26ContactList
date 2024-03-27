const ContactEmailUnorderedList = ({ contacts }) => {
  return (
    <ul>
      {
        contacts.map( person => {
          return <li key={person.email}>{person.email}</li>
        })
      }
    </ul>
  )
}

export default ContactEmailUnorderedList