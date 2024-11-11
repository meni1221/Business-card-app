import { useContext } from "react";

import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../Providers/UserProvider";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  deleteUser: (id: string) => void;
  AddStar: (star: User) => void;
}

export default function DisplayUsers(props: Props) {
  const { users, setUsers } = useContext(UserContext);

  return (
    <>
      <PageHeader title="Users pages" subtitle="welcome users pages" />
      <button>
        <NavLink to={"/users/adduser"}>addusers</NavLink>
      </button>
      <br />
      {users!.map((user) => (
        <div className="card" key={user.id}>
          <img src={user.img} alt="error" style={{ maxWidth: "150px" }} />
          <h3> {user.username}</h3>
          <p> {user.email}</p>
          <p> {user.age}</p>
          <button
            onClick={() => {
              setUsers(users.filter((i) => i.id !== user.id));
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setUsers(users.map((itemUser) => (itemUser.id === user.id ? user :itemUser)))
            }}
          >
            <NavLink to={`/users/edit/${user.id}`}>edit</NavLink>
          </button>
          <button
            onClick={() => {
              props.AddStar(user);
            }}
          >
            AddStar
          </button>
        </div>
      ))}
    </>
  );
}
