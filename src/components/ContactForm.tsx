import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Let's Talk</h2>
          <p className="text-gray-600 mt-2">Fill in the form and we'll get back to you shortly.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 rounded-2xl shadow-md p-8"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              name="name"
              placeholder="Your name"
              className="p-3 border rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your e-mail"
              className="p-3 border rounded-lg"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="p-3 border rounded-lg h-36"
              onChange={handleChange}
              required
            />
            <button className="mt-2 bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition">
              Send Message
            </button>
            {sent && <div className="text-green-600 mt-2">Message sent — thank you!</div>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
