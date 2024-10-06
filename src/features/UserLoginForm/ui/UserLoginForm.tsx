"use client";

import { Input } from "@/shared/ui/Input/Input";
import styles from "./UserLoginForm.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { getAccessToken } from "../actions";
import { Fields } from "../types";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useUserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";
import { APP_URL } from "@/app/constants/urls";

type Props = {};

export function UserLoginForm({}: Props) {
  const [state, action] = useFormState(getAccessToken, undefined);
  const { pending } = useFormStatus();
  const { setIsAuthenticated } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      setIsAuthenticated(true);
      router.push(APP_URL.PROTECTED);
    }
  }, [state?.success]);

  return (
    <form action={action} className={styles.form} noValidate>
      <Input
        name={Fields.email}
        label="Email"
        type="email"
        error={state?.errors?.email}
      />
      <Input
        name={Fields.password}
        label="Password"
        type="password"
        error={state?.errors?.password}
      />

      <Button type="submit" disabled={pending}>
        Sign In
      </Button>
    </form>
  );
}
