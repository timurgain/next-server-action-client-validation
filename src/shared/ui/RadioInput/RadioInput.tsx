import styles from "./RadioInput.module.scss";

type Props = {
  name: string;
  label: string;
  value: string;
};

export function RadioInput({
  name,
  label,
  value,
}: Props) {
  return (
    <label className={styles.container}>
      <input type='radio' name={name} value={value} className={styles.radio} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
