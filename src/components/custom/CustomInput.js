import React from "react";

const CustomInput = ({ value, onchange, label }) => {
  // const [name, setName] = useState(null);

  // const handleChange = (e) => {
  //   // setName(e.target.value);
  // };

  return (
    <div style={styles.container}>
      <input
        type="text"
        id="name"
        value={value}
        onChange={(txt) => onchange(txt)}
        className="text-input"
        placeholder={label}
        style={styles.input}
      />
    </div>
  );
};

export default CustomInput;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "300px",
    padding: "8px",
    fontSize: "16px",
    border: "none",
    borderBottom: "2px solid #333",
    outline: "none",
  },
};
