import styles from "./page.module.css";
import { RegistrationForm } from "@/widgets/RegistrationForm";

export default function SignUpPage() {
  return (
    <main className={styles.main}>
      <RegistrationForm />
    </main>
  );
}
