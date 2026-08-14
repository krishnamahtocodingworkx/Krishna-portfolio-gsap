import emailjs from "@emailjs/browser";

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (values: ContactFormValues) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS keys are missing. Add them to .env.local and restart the dev server."
    );
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    },
    { publicKey }
  );
};
