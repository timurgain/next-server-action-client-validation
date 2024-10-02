'use client';

import { Input } from '@/shared/ui/Input/Input';
import styles from './UserLoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { loginUser } from '../actions';
import { Fields } from '../types';
import { useFormState, useFormStatus } from 'react-dom';

type Props = {}

export function UserLoginForm({}: Props) {

  const [state, action] = useFormState(loginUser, undefined);
  const { pending } = useFormStatus()

  return (
    <form action={action} className={styles.form} noValidate>
      <Input name={Fields.email} label='Email' type='email' error={state?.errors?.email}/>
      <Input name={Fields.password} label='Password' type='password' error={state?.errors?.password}/>

      <Button type='submit' disabled={pending}>Sing In</Button>
    </form>
  )
}
