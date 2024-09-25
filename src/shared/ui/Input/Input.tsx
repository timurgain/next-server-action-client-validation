import styles from "./Input.module.scss";

type Props = {
  label?: string;
  type: "text" | "password" | "email";
  placeholder?: string;
  error?: string;
};

export function Input({
  label,
  type,
  placeholder = "Type something...",
  error,
}: Props) {
  return (
    <label className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input type={type} placeholder={placeholder} className={styles.input} />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
