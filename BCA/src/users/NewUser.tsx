import { useContext, useState } from "react";
import { v4 } from "uuid";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}


export default function NewUser( ) {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");
  
  const addNewUser = (newUser: User) => {
    newUser.id = v4();
    setUsers([...users, newUser]);
  };
  
  const handeleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewUser({
      username,
      email,
      age,
      img,
    });
    navigate("/users")
  };
  
  return (
    <>
      <form onSubmit={handeleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">user Name</label>
          <input
            id="userName"
            type="text"
            value={username}
            placeholder="userName"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="Email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">age</label>
          <input
            id="age"
            type="number"
            value={age}
            placeholder="age"
            min={0}
            max={120}
            onChange={(event) => setAge(Number(event.target.value))}
            />
        </div>

        <div className="form-group">
          <label htmlFor="img">img</label>
          <input
            id="img"
            type="text"
            value={img}
            placeholder="img"
            onChange={(event) => setImg(event.target.value)}
            />
        </div>

        <button type="submit">Add New User</button>
      </form>
    </>
  );
}
