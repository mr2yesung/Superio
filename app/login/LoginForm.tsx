"use client";

import { useState } from "react";
import FormElement from "../_components/form/FormElement";
import ButtonPrimary from "../_components/button/ButtonPrimary";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col justify-center gap-y-5 mb-[10px]">
      <FormElement
        label="Username"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormElement
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonPrimary
        type="submit"
        className="min-w-40 rounded-lg font-normal text-[15px] leading-5 py-[15px]"
      >
        Log In
      </ButtonPrimary>
    </form>
  );
}

export default LoginForm;
