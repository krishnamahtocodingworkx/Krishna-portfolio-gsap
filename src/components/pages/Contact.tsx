"use client";
import React, { useState } from "react";
import HeadingButton from "../ui/HeadingButton";
import Image from "next/image";
import {
  sendContactEmail,
  type ContactFormValues,
} from "@/lib/emailjs";

const fieldClassName =
  "border-l-4 border-b-4 border-transparent border-l-black border-b-black bg-transparent outline-none p-3 md:w-2/3 w-full text-[#8B8B8B] font-semibold placeholder:uppercase hover:border-b-blue-500 hover:border-l-blue-500 transition focus:border-b-blue-500 focus:border-l-blue-500";

const initialForm: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [form, setForm] = useState<ContactFormValues>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!emailPattern.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim()) return "Please enter a message.";
    if (form.message.trim().length < 10) {
      return "Message should be at least 10 characters.";
    }
    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      await sendContactEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      setStatus("success");
      setFeedback("Thanks! Your message has been sent.");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      id="contact"
      className="bg-gray-background text-background h-full w-full flex flex-col justify-center items-center gap-10 md:px-[25vw] px-10 py-20"
    >
      <HeadingButton text="contact" />
      <p className="description">
        Have a project in mind or just want to say hello? Drop me a message and
        I&apos;ll get back to you as soon as I can.
      </p>
      <Image src={"/separator.svg"} alt="separator" width={100} height={100} />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full flex flex-col gap-10 justify-center items-center"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          className={fieldClassName}
          placeholder="Enter your name*"
          aria-label="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          className={fieldClassName}
          placeholder="Enter your email*"
          aria-label="Email"
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="Enter your subject*"
          aria-label="Subject"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`${fieldClassName} resize-none`}
          placeholder="Enter your message*"
          aria-label="Message"
        />
        {feedback && (
          <p
            role="status"
            className={`text-sm font-semibold text-center ${
              status === "success" ? "text-green-700" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-montserrat uppercase border-l-2 border-r-2 px-5 py-2 font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "SUBMIT 📮"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
