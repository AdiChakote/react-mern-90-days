function FormField({ label, value, onChange, error, type }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </>
  );
}

export default FormField;
