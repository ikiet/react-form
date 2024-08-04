export default ({ id, label, errorMessage, ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor="email">{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};
