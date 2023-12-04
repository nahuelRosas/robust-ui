import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_LLCCkNaz_GayV92x1VvQGtmUex3W8h3db");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["nahuel.rosas21@gmail.com"],
      subject: "New message from your portfolio",
      react: EmailTemplate({
        name: body.name,
        text: body.text,
        email: body.email,
      }),
      text: "",
    });
    if (data.error !== null) throw new Error(data.error.toString());
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
