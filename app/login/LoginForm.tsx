"use client";

import AuthForm from "../_components/auth/AuthForm";
import { signInUser } from "../_utils/authClient";

function LoginForm() {
  async function handleSubmit(email: string, password: string) {
    await signInUser(email, password);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      defaultSubmitText="Log In"
      loadingSubmitText="Logging In"
    />
  );
}

export default LoginForm;
