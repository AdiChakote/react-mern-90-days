import useAuth from "../context/auth/useAuth";

function Profile() {
  const { user, login, logout } = useAuth();

  console.log("USER OBJECT 👉", user);

  if (!user) {
    return <button onClick={() => login("Aditya")}>Login</button>;
  }

  return (
    <>
      <h1>Welcome, {user.name} </h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Profile;
