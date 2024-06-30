export default function Contacts() {

  const firstName = "Antanas";
  const lastName = "Varanauskas";
  const email = "kazkas@gmail.com";
  const tel = "+370123456789";

  return (
    <div>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Email: {email}</li>
        <li>Tel.: {tel}</li>
        <li></li>
      </ul>
    </div>
  )
}
