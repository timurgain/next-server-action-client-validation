import Link from "next/link";
import styles from "./page.module.css";
import { APP_URL } from "@/app/constants/urls";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>HomePage</h1>
      <Link href={APP_URL.SIGN_UP}>SIGN_UP</Link>
      <Link href={APP_URL.SIGN_IN}>SIGN_IN</Link>
      <Link href={APP_URL.PRIVATE}>PRIVATE PAGE EXAMPLE</Link>
    </main>
  );
}
