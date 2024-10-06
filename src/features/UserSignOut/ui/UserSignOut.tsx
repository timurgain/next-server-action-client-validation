'use client';

import { Button } from "@/shared/ui/Button/Button";
import styles from "./UserSignOut.module.scss";
import { signOut } from "../actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useUserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";
import { APP_URL } from "@/app/constants/urls";

type Props = {};

export function UserSignOut({}: Props) {

  const router = useRouter();
  const [state, action] = useFormState(signOut, undefined);
  const { setIsAuthenticated } = useUserContext();
  
  useEffect(() => {
    if (state?.success) {
      setIsAuthenticated(false);
      router.push(APP_URL.MAIN);
    }
  }, [state?.success]);

  return (
    <form action={action} className={styles.form} noValidate>
      <Button type="submit">
        Sign Out
      </Button>
    </form>
  );
}
