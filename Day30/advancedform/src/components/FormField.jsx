function FormField({ value, error, onChange, label, type = "text" }) {
  return (
    <>
      <label> {label} </label>
      <input type={type} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </>
  );
}

export default FormField;
