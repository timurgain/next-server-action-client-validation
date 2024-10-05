import { Button } from "@/shared/ui/Button/Button";
import styles from "./UserSignOut.module.scss";
import { signOut } from "../actions";

type Props = {};

export function UserSignOut({}: Props) {
  return (
    <form action={signOut} className={styles.form} noValidate>
      <Button type="submit">
        Sign Out
      </Button>
    </form>
  );
}
