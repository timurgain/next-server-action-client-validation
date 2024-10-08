"use client";

import { UserSignUpForm } from "@/features/UserSignUpForm";
import styles from "./SignUpForm.module.scss";
import { RadioFieldset } from "@/shared/ui/RadioFieldset/RadioFieldset";
import { RadioInput } from "@/shared/ui/RadioInput/RadioInput";
import { LegalStatuses } from "../types";
import { useState } from "react";
import { UserSignUpReactHookFormDemo } from "@/features/UserSignUpReactHookFormDemo";

type Props = {};

export function SignUpForm({}: Props) {
  const [legalStatus, setLegalStatus] = useState<LegalStatuses>(
    LegalStatuses.user,
  );

  const isUser = legalStatus === LegalStatuses.user;
  const isUserReactHookForm =
    legalStatus === LegalStatuses.user_react_hook_form;
  const isCompany = legalStatus === LegalStatuses.company;

  return (
    <section className={styles.section}>
      <RadioFieldset legend="Choose a type">
        <RadioInput
          name={LegalStatuses.user}
          value={LegalStatuses.user}
          checked={isUser}
          onChange={() => setLegalStatus(LegalStatuses.user)}
          label={`${LegalStatuses.user
            .charAt(0)
            .toUpperCase()}${LegalStatuses.user.slice(1)}`}
        />
        <RadioInput
          name={LegalStatuses.user_react_hook_form}
          value={LegalStatuses.user_react_hook_form}
          checked={isUserReactHookForm}
          onChange={() => setLegalStatus(LegalStatuses.user_react_hook_form)}
          label={`${LegalStatuses.user_react_hook_form
            .charAt(0)
            .toUpperCase()}${LegalStatuses.user_react_hook_form.slice(1)}`}
        />
        <RadioInput
          name={LegalStatuses.company}
          value={LegalStatuses.company}
          checked={isCompany}
          onChange={() => setLegalStatus(LegalStatuses.company)}
          label={`${LegalStatuses.company
            .charAt(0)
            .toUpperCase()}${LegalStatuses.company.slice(1)}`}
        />
      </RadioFieldset>

      {isUser && <UserSignUpForm />}
      {isUserReactHookForm && <UserSignUpReactHookFormDemo />}
      {isCompany && <p>Not implemented</p>}
    </section>
  );
}
