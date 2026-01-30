import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { userName } = useContext(UserContext);

  if (!userName) {
    return <div>Please Login</div>;
  } else {
    return <div>Welcome {userName.name} </div>;
  }
}

export default Profile;
