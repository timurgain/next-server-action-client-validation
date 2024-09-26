'use client';

import { Input } from '@/shared/ui/Input/Input';
import styles from './UserRegisterForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { createUser } from '../actions';
import { RadioFieldset } from '@/shared/ui/RadioFieldset/RadioFieldset';
import { RadioInput } from '@/shared/ui/RadioInput/RadioInput';
import { Entities, Fields } from '../types';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';

type Props = {}

export function UserRegisterForm({}: Props) {

  const [state, action] = useFormState(createUser, undefined);

  useEffect(() => {
    if (state?.message) {
      alert(state.message);
    }
  }, [state]);

  return (
    <form action={action} className={styles.form} noValidate>

      <RadioFieldset legend='Choose a type' error={state?.errors?.entity}>
        <RadioInput name={Fields.entity} value={Entities.user} label='User'/>
        <RadioInput name={Fields.entity} value={Entities.company} label='Company'/>
      </RadioFieldset>
      
      <Input name={Fields.username} label='Username' type='text' error={state?.errors?.username}/>
      <Input name={Fields.email} label='Email' type='email' error={state?.errors?.email}/>
      <Input name={Fields.password} label='Password' type='password' error={state?.errors?.password}/>

      <Button type='submit'>Submit</Button>

    </form>
  )
}
