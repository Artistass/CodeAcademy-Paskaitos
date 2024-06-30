import { Link } from "react-router-dom";

export default function NavigationBar() {


  return (
    <div style={{marginBottom: "40px"}}>
      <Link 
      style={{margin: "20px"}} 
      to={"/"}
      >Home</Link>
      <Link  
      style={{margin: "20px"}} 
      to={"/about"}
       >About</Link>
      <Link 
       style={{margin: "20px"}} 
      to={"/contacts"}
      >Contacts</Link>
      <Link to={"/users"}>Users</Link>
    </div>
  )
}
