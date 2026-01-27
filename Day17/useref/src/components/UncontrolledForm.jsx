import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Type name..." ref={nameRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Type password..."
          ref={passwordRef}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default UncontrolledForm;
