import styles from "./RadioInput.module.scss";

type Props = {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioInput({ name, label, value, checked, onChange }: Props) {
  return (
    <label className={styles.container}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radio}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
