import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-black font-bold mb-4">Contact Form</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32"
            />

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
