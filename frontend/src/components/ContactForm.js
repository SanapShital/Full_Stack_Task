
// frontend/src/components/ContactForm.js
import React, { useState } from "react";
import './ContactForm.css';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "Maharashtra",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://laughing-space-waddle-4x6q5pq775xcqjj9-5000.app.github.dev/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        state: "Maharashtra",
        gender: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>

      <label>Name:</label>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br/>

      <label>Email :</label>
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/>

      <label>Mobile:</label>
      <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required /><br/>

      <label>State:</label><br/>
      <select name="state" value={formData.state} onChange={handleChange}>
        <option>Maharashtra</option>
        <option>Goa</option>
        <option>Karnataka</option>
        <option>Gujarat</option>
        <option>Kerala</option>
      </select><br/>

      <label>Gender:</label><br/>
      <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
      <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
      <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label><br/>


      <label>Message:</label>
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea><br/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
