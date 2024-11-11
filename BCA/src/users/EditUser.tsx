import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../Providers/UserProvider";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");
  const [status, setstatus] = useState(true);

  const pervUser = users.find((user) => id === user.id)!;

  useEffect(() => {
    setusername(pervUser.username);
    setEmail(pervUser.email);
    setAge(pervUser.age);
    setImg(pervUser.img);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status) {
      setUsers((users) =>
        users.map((user) =>
          user.id === id ? { ...user, username, email, age, img } : user
        )
      );
    }

    navigate("/users");
    setstatus(false);
  };
  return (
    <>
      <PageHeader title="Edit pages" subtitle="welcome Edit pages" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img
              src={pervUser.img}
              alt=""
              style={{ maxWidth: "250px", borderRadius: "50%" }}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={pervUser.username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={pervUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              min={0}
              max={120}
              type="number"
              defaultValue={pervUser.age.toString()}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              defaultValue={pervUser.img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
