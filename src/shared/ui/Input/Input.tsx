import styles from "./Input.module.scss";

type Props = {
  label?: string;
  type: "text" | "password" | "email";
  name?: string;
  placeholder?: string;
  error?: string[];
};

export function Input({
  label,
  type,
  name,
  placeholder = "Type something...",
  error,
}: Props) {
  return (
    <label className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input type={type} name={name} placeholder={placeholder} className={styles.input} />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
