import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, db } from "../authentication/firebase"; // Keep only one import statement
import { doc, setDoc } from "../authentication/firebase"; // Import Firestore functions
import "../styles/MedicalForm.css";



const MedicalForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    bloodType: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = auth.currentUser?.uid; // Get logged-in user's UID
    if (!userId) {
      alert("User not logged in!");
      return;
    }

    try {
      await setDoc(doc(db, "users", userId), {
        fullName: formData.fullName,
        bloodType: formData.bloodType,
        emergencyContact: formData.emergencyContact,
        timestamp: new Date(), // Store timestamp
      });

      alert("Medical details saved successfully!");
      navigate("/questionnaire"); // Redirect to the questionnaire page
    } catch (error) {
      console.error("Error saving medical details:", error);
      alert("Error saving data!");
    }
  };

  return (
    <div className="medical-form-container">
      <h2>Medical Information</h2>
      <form className="medical-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleChange}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MedicalForm;
