"use client";

import { signIn, signOut } from "next-auth/react";
import { userType } from "../_lib/types/userType";

async function signInUser(email: string, password: string) {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (!response) throw new Error("Sign In Failed");
  if (!response.ok) {
    if (response.status === 401) throw new Error("Invalid Email and Password");
    else throw new Error(`Sign In Failed with Status: ${response.status}`);
  }
}

async function signUpUser(email: string, password: string) {
  const response = await fetch("/api/supabase/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }
}

async function signOutUser() {
  await signOut({ callbackUrl: "/" });
}

type providerType = "google" | "github";

async function signInUserOAuth(provider: providerType) {
  await signIn(provider, { callbackUrl: "/select-type" });
}

async function postUserTypeClient(userType: userType) {
  const response = await fetch("/api/supabase/set-user-type", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userType }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }
}

export {
  signInUser,
  signUpUser,
  signOutUser,
  signInUserOAuth,
  postUserTypeClient,
};
