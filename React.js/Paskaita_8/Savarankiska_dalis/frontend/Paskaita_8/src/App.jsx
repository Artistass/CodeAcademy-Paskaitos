import axios from "axios";
import './App.css';
import UserListContainer from './components/UserListContainer/UserListContainer';
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/userList")
      .then(response => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <UserListContainer userList={users} />
    </div>
  );
}

export default App;
