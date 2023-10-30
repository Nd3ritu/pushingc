import { useState } from "react";

function Form({ handleUpdate }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={formData.date}
        name="date"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formData.description}
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formData.category}
        name="category"
        onChange={handleChange}
      />
      <input
        type="number"
        value={formData.amount}
        name="amount"
        onChange={handleChange}
      />
      <input id="update" type="submit" value="Update" />
    </form>
  );
}

export default Form;
