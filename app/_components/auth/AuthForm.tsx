"use client";

import { useState } from "react";
import ButtonPrimary from "../button/ButtonPrimary";
import FormElement from "../form/FormElement";

type AuthFormProps = {
  onSubmit: (email: string, password: string) => Promise<void>;
  defaultSubmitText: string;
  loadingSubmitText: string;
  children?: React.ReactNode;
};

function AuthForm({
  onSubmit,
  defaultSubmitText,
  loadingSubmitText,
  children,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;
    if (isLoading) return;

    setIsLoading(true);

    try {
      await onSubmit(email, password);

      // full page loading when successfully sign in
      window.location.href = "/";
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        // toast
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col justify-center gap-y-5 mb-[10px]"
      onSubmit={handleSubmit}
    >
      {children}
      <FormElement
        label="Email"
        name="userEmail"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        disabled={isLoading}
      >
        {isLoading ? loadingSubmitText : defaultSubmitText}
      </ButtonPrimary>
    </form>
  );
}

export default AuthForm;
