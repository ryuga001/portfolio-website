import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);


  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);

      if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
        console.error("Missing EmailJS configuration");
        alert("Email service is not configured. Please try again later.");
        setLoading(false);
        return;
      }

      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Rahul Singh",
            from_email: form.email,

            message: form.message,
          },
          PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you soon.");
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.error("EmailJS Error:", error);
            alert("Something went wrong. Please try again.");
          }
        );
    },
    [form]
  );

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
