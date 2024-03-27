
const ContactNameUnorderedList = ({ contacts }) => {
  return (
    <ul>
      {
        contacts.map( person => {
          return <li key={person.name}>{person.name}</li>
        })
      }
    </ul>
  )
}

export default ContactNameUnorderedList