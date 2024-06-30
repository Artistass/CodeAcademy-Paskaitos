import { Link } from "react-router-dom";


export default function ContactsPage() {

  return (
    <div>
      <Link to={"/home"}>Go to Home Page</Link>
      <h1>Contacts</h1>
      <ul>
        <li>Tel.151451854</li>
        <li>email: asf@dsagsdg.com</li>
        <li>address: Vilnius</li>
      </ul>
    </div>
  )
}
