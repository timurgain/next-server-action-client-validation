import styles from './Button.module.scss';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button({
  type = 'button',
  disabled = false,
  children,
}: Props) {
  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
