import styles from "./RadioFieldset.module.scss";

type Props = {
  legend: string;
  error?: string[];
  children: React.ReactNode;
};

export function RadioFieldset({ legend, error, children }: Props) {
  return (
    <fieldset className={styles.container}>
      {legend && <legend className={styles.legend}>{legend}</legend>}

      {children}

      {error && <span className={styles.error}>{error}</span>}
    </fieldset>
  );
}
