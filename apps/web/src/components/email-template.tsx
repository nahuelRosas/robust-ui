import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  text,
}) => (
  <div>
    <h1>Mensaje de {name}</h1>
    <br />
    <p>{email}</p>
    <p>{text}</p>
  </div>
);
