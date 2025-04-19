import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../authentication/firebase";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showMedical, setShowMedical] = useState(false);
  const [questionnaireData, setQuestionnaireData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }

        // ✅ Fetch questionnaire response from Firestore
        const qSnapshot = await getDocs(collection(db, "questionnaire_responses"));
qSnapshot.forEach((doc) => {
  console.log("Document ID:", doc.id);
  console.log("Document Data:", doc.data());
});

      } else {
        setUser(null);
        setUserData(null);
        setQuestionnaireData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading or not logged in...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>

      <div className="profile-card">
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt="avatar"
          className="avatar"
        />
        <h3>{userData?.fullName || user.displayName || "John Doe"}</h3>
        <p>{user.email}</p>

        <ul className="profile-options">
          <li>Account</li>
          <li>Notification</li>
          <li>Progress</li>
          <li>Privacy & Security</li>
          <li>Language</li>
          <li onClick={() => setShowMedical(!showMedical)} style={{ cursor: "pointer" }}>
            Medical History
          </li>
          <li>ChatBot</li>
        </ul>

        {showMedical && (
          <div className="medical-history">
            <h4>Medical History</h4>
            {questionnaireData ? (
              <ul>
                {Object.entries(questionnaireData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No medical history found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
