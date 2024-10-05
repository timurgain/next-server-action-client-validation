import { SessionPayload } from '@/app/lib/definitions';
export enum Fields {
  email = "email",
  password = "password",
}

export type FormState =
  | {
      errors?: {
        [Fields.email]?: string[];
        [Fields.password]?: string[];
      };
      message?: string;
    }
  | undefined;

export type Tokens = {
  access: string;
  refresh: string;
}

export type SessionPayload = Tokens & {
  expiresAt: number;
}

