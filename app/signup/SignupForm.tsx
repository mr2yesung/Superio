"use client";

import { useState } from "react";
import AuthForm from "../_components/auth/AuthForm";
import {
  postUserTypeClient,
  signInUser,
  signUpUser,
} from "../_utils/authClient";
import { userType } from "../_lib/types/userType";
import UserTypeSelection from "../_components/auth/UserTypeSelection";

function SignupForm() {
  const [userType, setUserType] = useState<userType>("candidate");

  async function handleSubmit(email: string, password: string) {
    await signUpUser(email, password);

    await signInUser(email, password);

    await postUserTypeClient(userType);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      defaultSubmitText="Sign Up"
      loadingSubmitText="Signing Up"
    >
      <UserTypeSelection userType={userType} setUserType={setUserType} />
    </AuthForm>
  );
}

export default SignupForm;
