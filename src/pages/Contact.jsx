import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Contact() {
  const redirectUrl = `${window.location.origin}/`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-160 mx-auto w-full px-6 py-12">
        <h1 className="text-[clamp(28px,3vw,36px)] font-bold text-[#011257] mb-2">
          Contact Me
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
          <form
            action="https://formsubmit.co/e47fe8d77c684f21e1e78265ca919c2a"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                autoFocus
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
            </div>
            <input type="hidden" name="_next" value={redirectUrl} />
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#2563eb] resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start px-6 py-2 bg-[#2563eb] text-white rounded-md font-medium hover:bg-[#183992] transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
