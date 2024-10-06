"use client";

import styles from "./Header.module.scss";
import { APP_URL } from "@/app/constants/urls";
import { useUserContext } from "@/app/contexts/userContext";
import { UserSignOut } from "@/features/UserSignOut";
import Link from "next/link";

type Props = {};

export function Header({}: Props) {
  const { isAuthenticated } = useUserContext();

  return (
    <header className={styles.header}>
      {isAuthenticated ? (
        <UserSignOut />
      ) : (
        <>
          <Link href={APP_URL.SIGN_UP}>SIGN_UP</Link>
          <Link href={APP_URL.SIGN_IN}>SIGN_IN</Link>
        </>
      )}
    </header>
  );
}
