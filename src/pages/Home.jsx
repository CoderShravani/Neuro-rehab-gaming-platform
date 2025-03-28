import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import RecoverySection from "./header/RecoverySection";
import JourneySection from "./header/JourneySection";
import SuccessStories from "./Swiper/Swiper";
import Footer from "./Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="animated-background"></div>

      {/* Header Section */}
      <header className="header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <div className="header-left">
            <div className="logo-container">
              <div className="logo-pulse"></div>
              <img src="/addimage/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="header-text">
              <h1 className="main-title">
                <span className="gradient-text">
                  Welcome to Your Healing Space
                </span>
              </h1>
              <div className="tagline">
                <span className="animated-text">PLAY</span>
                <span className="separator">|</span>
                <span className="animated-text">HEAL</span>
                <span className="separator">|</span>
                <span className="animated-text">THRIVE</span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <button className="notification-button">
              <div className="notification-dot"></div>
              <span className="notification-icon">🔔</span>
            </button>
            <div className="auth-buttons">
              {user ? (
                <>
                  <span className="user-name">Welcome, {user.name}</span>
                  <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Description Section */}
      <div className="description-section">
        <div className="description-card">
          <div className="gradient-bar"></div>
          <div className="description-grid">
            <div className="description-content">
              <h2 className="section-title">
                Your Journey to Recovery Starts Here
              </h2>
              <p className="section-text">
                Welcome to Neuro Rehab, your comprehensive platform for
                neurological rehabilitation and recovery. We combine
                cutting-edge technology with evidence-based therapeutic
                approaches to provide personalized care and support throughout
                your healing journey.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Personalized Care</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Expert Guidance</span>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  <span>Progress Tracking</span>
                </div>
              </div>
            </div>
            <div className="description-image">
              <div className="image-background"></div>
              <div className="image-content">
                <div className="info-card">
                  <div className="info-item blue">
                    <h3>Evidence-Based Approach</h3>
                    <p>
                      Our rehabilitation programs are developed by leading
                      neurological experts and backed by scientific research.
                    </p>
                  </div>
                  <div className="info-item purple">
                    <h3>Comprehensive Support</h3>
                    <p>
                      From initial assessment to recovery milestones, we provide
                      continuous guidance and support throughout your journey.
                    </p>
                  </div>
                  <div className="info-item green">
                    <h3>Interactive Learning</h3>
                    <p>
                      Engage with interactive exercises and real-time feedback
                      to enhance your rehabilitation experience.
                    </p>
                  </div>
                  <div className="info-item orange">
                    <h3>Community Support</h3>
                    <p>
                      Connect with others on similar recovery journeys and share
                      experiences in a supportive environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-wrapper">
        <h2 className="section-title">Let's Begin Your Journey to Recovery!</h2>

        <div className="features-grid">
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/rehab-icon.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Rehabilitation Focus</h3>
              <p className="feature-description">
                Personalized exercises to aid your recovery. Our programs are
                tailored to your needs, ensuring a steady and safe
                rehabilitation journey.
              </p>
            </div>
          </div>
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/games-icon.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Games</h3>
              <p className="feature-description">
                Engaging cognitive and physical therapy games. Improve memory,
                motor skills, and coordination while having fun.
              </p>
            </div>
          </div>
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/Analytics.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Analytics</h3>
              <p className="feature-description">
                Track your progress with real-time insights. Get personalized
                reports and data-driven recommendations.
              </p>
            </div>
          </div>
          <div
            className="grid-item"
            style={{ backgroundImage: "url('/addimage/doctor-logo.png')" }}
          >
            <div className="grid-content">
              <h3 className="feature-title">Connect with Doctor</h3>
              <p className="feature-description">
                Get expert advice from healthcare professionals. Schedule
                virtual consultations and receive tailored medical guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Pain Scale Section */}
        <div className="pain-scale-section">
          <h2 className="section-title">How are you feeling today?</h2>
          <div className="pain-scale-grid">
            {[
              { emoji: "😊", value: "0", label: "No Pain" },
              { emoji: "🙂", value: "2", label: "Mild Discomfort" },
              { emoji: "😐", value: "4", label: "Moderate Pain" },
              { emoji: "😕", value: "6", label: "Severe Pain" },
              { emoji: "😟", value: "8", label: "Very Severe Pain" },
              { emoji: "😢", value: "10", label: "Unbearable Pain" },
            ].map((mood, index) => (
              <button key={index} className="pain-scale-button">
                <p className="mood-emoji">{mood.emoji}</p>
                <p className="mood-value">{mood.value}</p>
                <p className="mood-label">{mood.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="success-stories-section">
          <SuccessStories />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
