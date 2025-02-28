import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    pickUpDate: "",
    interest: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://variant-backend-j8qf.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Failed to submit the form.");
      }
    } catch (error) {
      setMessage("Error: Unable to submit the form.");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">CONTACT US</h2>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="row g-4">
        {/* Form Section */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">BOOK SITE VISIT</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number *</label>
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  className: "form-control",
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pick up Date *</label>
              <input
                type="date"
                className="form-control"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Are You Interested in? *</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="interest"
                  value="open_plots"
                  checked={formData.interest === "open_plots"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Open Plots</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="interest"
                  value="houses"
                  checked={formData.interest === "houses"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Individual Houses</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="interest"
                  value="villas"
                  checked={formData.interest === "villas"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Villas</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Location *</label>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="Enter Your Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Submitting..." : "Book Site Visit"}
            </motion.button>
            {message && (
              <div
                className={`alert ${
                  message.includes("success") ? "alert-success" : "alert-danger"
                } mt-3`}
              >
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="col-md-6 text-center">
          <h3 className="fw-bold mb-3">CONTACT</h3>
          <div className="mb-3">
            <div className="fs-3 text-primary">
              <Phone />
            </div>
            <p className="fs-5">+91-7796356789</p>
          </div>
          <div className="mb-3">
            <div className="fs-3 text-primary">
              <Mail />
            </div>
            <p className="fs-5">info@variantinfra.com</p>
          </div>
          <div className="mb-3">
            <div className="fs-3 text-primary">
              <MapPin />
            </div>
            <p className="fs-5">
              7th Lane, Beside Arundelpet Police Station, Brodipet, Guntur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
