import styles from "./Button.module.scss";

type Props = {
  type?: "button" | "submit" | "reset";
  formAction?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export function Button({
  type = "button",
  formAction,
  onClick,
  disabled = false,
  children,
}: Props) {
  return (
    <button
      className={styles.button}
      type={type}
      formAction={formAction}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
