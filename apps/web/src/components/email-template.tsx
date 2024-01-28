import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export function EmailTemplate({ name, email, text }: EmailTemplateProps) {
  return (
    <div>
      <span>Hola Nahuel,</span>
      <br />
      <br />
      <span>Este es un mensaje automatico de tu portfolio.</span>
      <br />
      <br />
      <span>Nombre: </span>
      {name}
      <br />
      <br />
      <span>Correo electrónico:</span>
      <span>{email}</span>
      <br />
      <br />
      <span>Mensaje:</span>
      <span>{text}</span>
    </div>
  );
}
