"use client";

import styles from "./SignInForm.module.scss";
import { RadioFieldset } from "@/shared/ui/RadioFieldset/RadioFieldset";
import { RadioInput } from "@/shared/ui/RadioInput/RadioInput";
import { LegalStatuses } from "../types";
import { useState } from "react";
import { UserSignInForm } from "@/features/UserSignInForm";

type Props = {};

export function SignInForm({}: Props) {
  const [legalStatus, setLegalStatus] = useState<LegalStatuses>(
    LegalStatuses.user
  );

  const isUser = legalStatus === LegalStatuses.user;
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
          name={LegalStatuses.company}
          value={LegalStatuses.company}
          checked={isCompany}
          onChange={() => setLegalStatus(LegalStatuses.company)}
          label={`${LegalStatuses.company
            .charAt(0)
            .toUpperCase()}${LegalStatuses.company.slice(1)}`}
        />
      </RadioFieldset>

      {isUser && <UserSignInForm />}
      {isCompany && <p>Not implemented</p>}
    </section>
  );
}
