import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_LLCCkNaz_GayV92x1VvQGtmUex3W8h3db");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["nahuel.rosas21@gmail.com"],
      subject: "Mensaje de contacto",
      react: EmailTemplate({
        name: req.body.name,
        text: req.body.text,
        email: req.body.email,
      }),
      text: "",
    });
    if (data.error !== null) throw new Error(data.error.toString());
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
