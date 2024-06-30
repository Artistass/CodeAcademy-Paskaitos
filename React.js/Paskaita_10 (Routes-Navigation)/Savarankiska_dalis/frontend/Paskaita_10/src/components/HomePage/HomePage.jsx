import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <div>
      <h1>Welcome to DevConnect!</h1>
      <div>
        <Link to={"/"}>Home</Link> <br />
        <Link to={"/about"}>About</Link> <br />
        <Link to={"/contacts"}>Contacts</Link> <br />
        <Link to={"/users"}>Users</Link> <br />
      </div>
    </div>
  )
}
