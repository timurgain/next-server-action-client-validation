import styles from './Button.module.scss';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({
  type = 'button',
  children,
}: Props) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  )
}
