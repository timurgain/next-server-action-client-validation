'use client';

import { Input } from '@/shared/ui/Input/Input';
import styles from './UserRegisterForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { createUser } from '../actions';
import { Fields } from '../types';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

type Props = {}

export function UserRegisterForm({}: Props) {

  const [state, action] = useFormState(createUser, undefined);
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state?.message) {
      alert(state.message);
    }
    if (state?.mockTokens) {
      alert(JSON.stringify(state.mockTokens))
    }
  }, [state]);

  return (
    <form action={action} className={styles.form} noValidate>
      <Input name={Fields.username} label='Username' type='text' error={state?.errors?.username}/>
      <Input name={Fields.email} label='Email' type='email' error={state?.errors?.email}/>
      <Input name={Fields.password} label='Password' type='password' error={state?.errors?.password}/>

      <Button type='submit' disabled={pending}>Submit</Button>
    </form>
  )
}
