import { Input } from '@/shared/ui/Input/Input';
import styles from './UserRegisterForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';

type Props = {}

export function UserRegisterForm({}: Props) {
  return (
    <form className={styles.form}>
      <Input label='Email' type='email'/>
      <Input label='Password' type='password'/>
      <Button>Submit</Button>

    </form>
  )
}
