import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.scss";

type Props = {
  label?: string;
  type: "text" | "password" | "email";
  name?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  options?: Record<string, string>;
  error?: string[] | string;
};

export function Input({
  label,
  type,
  name,
  placeholder = "Type something...",
  register,
  options = {},
  error,
}: Props) {
  const rHookFormProps =
    register && options && name ? register(name, { ...options }) : {};

  return (
    <label className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...rHookFormProps}
      />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
