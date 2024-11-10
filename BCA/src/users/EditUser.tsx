import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  editUser: (user:User) => void;
  user: User;
}

export default function EditUser({user,editUser}: Props) {
  const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");
  const [status, setstatus] = useState(false)
  const id: string | undefined = user.id;

  useEffect(() => {
    setusername(user.username);
    setEmail(user.email);
    setAge(user.age);
    setImg(user.img);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(status){editUser({
      id,
      username,
      email,
      age,
      img,
    })}
    setstatus(false)
    navigate("/users")
    
  
  };
  return (
    <>
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <img
          src={img}
          alt=""
          style={{ maxWidth: "250px", borderRadius: "50%" }}
      />
      <input
        type="text"
        placeholder={username}
        onChange={(e) => setusername(e.target.value)}
      />

      <input
        type="text"
        placeholder={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder={age.toString()}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder={img}
        onChange={(e) => setImg(e.target.value)}
      />
      
      <button
        onClick={() => setstatus(true)}>
            Save
      </button>

      <button
        onClick={() => editUser(user)}>
            Cancel
      </button>
      </form>
      </div>
    </>
  );
}