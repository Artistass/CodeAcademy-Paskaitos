import UserList from "../UserList/UserList";

export default function UserListContainer({ userList }) {
  return (
    <div>
      {userList.map((user) => <UserList key={user._id} user={user} />)}
    </div>
  );
}
