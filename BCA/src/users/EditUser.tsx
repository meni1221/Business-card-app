import  { useEffect, useState } from "react";

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

export default function EditUser(props: Props) {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    setusername(props.user.username);
    setEmail(props.user.email);
    setAge(props.user.age);
    setImg(props.user.img);
  }, []);

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      
      <button
        onClick={() => props.editUser({ ...props.user, username,email,age,img })}>
            update
      </button>
    </>
  );
}