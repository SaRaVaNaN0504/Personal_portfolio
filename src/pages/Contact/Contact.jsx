import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // ✅ Replace with your EmailJS IDs
  const SERVICE_ID = "service_rkhwhpc";
  const TEMPLATE_ID = "template_2ajacye";
  const PUBLIC_KEY = "WhxZpvyztfCUZk3gr";

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("⚠️ Please fill in all required fields correctly.");
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("✅ Email successfully sent!", result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        },
        (error) => {
          console.error("❌ Email failed to send:", error.text);
          setStatus("❌ There was an error sending your message.");
        }
      );
  };

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg">
                Have a project, question, or opportunity? Fill the form — your message goes directly to my inbox.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">saro.05.11.04@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } focus:border-blue-500 focus:outline-none`}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } focus:border-blue-500 focus:outline-none`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  } focus:border-blue-500 focus:outline-none`}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } focus:border-blue-500 focus:outline-none resize-none`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <div
                className={`mt-4 text-center ${
                  status.includes("✅")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                <p>{status}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
