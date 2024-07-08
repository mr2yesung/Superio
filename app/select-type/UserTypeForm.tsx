"use client";

import { useState } from "react";
import UserTypeSelection from "../_components/auth/UserTypeSelection";
import { userType } from "../_lib/types/userType";
import ButtonPrimary from "../_components/button/ButtonPrimary";
import { postUserTypeClient } from "../_utils/authClient";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function UserTypeForm() {
  const [userType, setUserType] = useState<userType>("candidate");
  const [isLoading, setIsLoading] = useState(false);
  const { update } = useSession();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      await postUserTypeClient(userType);

      await update();

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      // toast
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col justify-center gap-y-4 mb-[10px]"
      onSubmit={handleSubmit}
    >
      <UserTypeSelection userType={userType} setUserType={setUserType} />

      <ButtonPrimary
        type="submit"
        className="min-w-40 rounded-lg font-normal text-[15px] leading-5 py-[15px]"
        disabled={isLoading}
      >
        {isLoading ? "Submitting" : "Confirm"}
      </ButtonPrimary>
    </form>
  );
}

export default UserTypeForm;
