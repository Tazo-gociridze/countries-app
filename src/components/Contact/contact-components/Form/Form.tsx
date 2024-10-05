import React, { useState } from "react";
import { NameState } from "./formLogit";
import Input from "./form-components/Input";

function Form() {
  const [name, setName] = useState<NameState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setName({ firstName, lastName, email, message });
    console.log(name);
    setName({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <Input
          placeholder="First-name"
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <Input
          placeholder="Last-name"
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          value={name.email}
          onChange={(e) => setName({ ...name, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          name="message"
          value={name.message}
          onChange={(e) => setName({ ...name, message: e.target.value })}
        />
        <button type="submit">send</button>
      </div>
    </form>
  );
}

export default Form;
