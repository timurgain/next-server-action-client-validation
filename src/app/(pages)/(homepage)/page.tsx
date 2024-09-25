import { UserRegisterForm } from "@/features/UserRegisterForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserRegisterForm />
    </main>
  );
}
