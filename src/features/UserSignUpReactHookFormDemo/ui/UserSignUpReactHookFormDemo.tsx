"use client";

import { Input } from "@/shared/ui/Input/Input";
import styles from "./UserSignUpReactHookFormDemo.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { createUser } from "../actions";
import { Fields, SignUpFormData } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemes";
import { useRouter } from "next/navigation";
import { APP_URL } from "@/app/constants/urls";

type Props = {};

export function UserSignUpReactHookFormDemo({}: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      [Fields.username]: "",
      [Fields.email]: "",
      [Fields.password]: "",
    },
  });

  async function signUp(data: SignUpFormData) {
    try {
      const response = await createUser(data);
      if (response.success) {
        alert("User created successfully");
        reset();
        router.replace(APP_URL.SIGN_IN);
      } else {
        alert("User creation failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(signUp)} className={styles.form} noValidate>
      <Input
        name={Fields.username}
        label="Username (dynamic client-side validation)"
        type="text"
        register={register}
        error={errors?.[Fields.username]?.message}
      />
      <Input
        name={Fields.email}
        label="Email (dynamic client-side validation)"
        type="email"
        register={register}
        error={errors?.[Fields.email]?.message}
      />
      <Input
        name={Fields.password}
        label="Password (dynamic client-side validation)"
        type="password"
        register={register}
        error={errors?.[Fields.password]?.message}
      />

      <Button type="submit" disabled={!isValid}>
        Sign Up
      </Button>
    </form>
  );
}
