import { useState } from "react";
import StarWrapper from "../hoc/Wrapper";
import { z } from "zod"; // Import Zod
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // h6cBOgSdDKJjHrRT3
  // template_zniqu88
  // service_9er971g
  // State for form submission status
  const [status, setStatus] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const blockedDomains = [
      "yopmail.com",
      "mailinator.com",
      "10minutemail.com",
    ]; // Blocked email domains

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    const domain = email.split("@")[1];
    if (blockedDomains.includes(domain)) {
      return `Emails from ${domain} are not allowed.`;
    }

    return null; // Email is valid
  };
  const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"), // Name must not be empty
    email: z.string().refine((email) => isValidEmail(email) === null, {
      message: "please enter a valid email address or the domain is blocked",
    }),
    message: z.string().min(1, "Message is required"), // Message must not be empty
  });
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      setStatus(validation.error.errors[0].message);
      return;
    }
    try {
      emailjs.send(
        "service_9er971g",
        "template_zniqu88",
        {
          from_name: formData.name,
          to_name: "Hemanth",
          from_email: formData.email,
          to_email: "hemanthms186@gmail.com",
          message: formData.message,
        },
        "h6cBOgSdDKJjHrRT3"
      );
      toast.success("Thanks! I’ll be in touch with you shortly.");
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      toast.error(err?.message)
    }
  };

  return (<>
    <p className=" text-[#6670F1] text-3xl font-bold ">
    {" "}
    Contact Us
  </p>

    <div className="min-h-screen  flex items-center justify-center   py-6">

      
      <div className="bg-gradient-to-l from-[#001F3F] p-8 rounded-lg shadow-md max-w-md w-full">
     
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 bg-gray-400 text-black focus:ring-0  py-2 border rounded-md focus:outline-none  "
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 bg-gray-400 text-black focus:ring-0  py-2 border rounded-md focus:outline-none  "
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 bg-gray-400 text-black focus:ring-0  py-2 border rounded-md focus:outline-none  "
              placeholder="Your Message"
            />
          </div>

          {status && (
            <div
              className={`mb-4 p-2 text-center text-sm ${
                status === "Message sent successfully!"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-l from-[#6670F1] hover:bg-gradient-to-l from-[#6630F1] text-white font-semibold rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default StarWrapper(Contact, "contact");
