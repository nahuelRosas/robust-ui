import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";
const resend = new Resend("re_pyuAny5j_6cecft8VdBQ9gBJ2UJ5TRwyE");

export async function POST({
  Message,
  Name,
}: {
  Message: string;
  Name: string;
}) {
  try {
    // const data = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["delivered@resend.dev"],
    //   subject: "Hello world",
    //   react: EmailTemplate({ Message, Name }),
    //   text: "Hello world",
    // // });
    // return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
