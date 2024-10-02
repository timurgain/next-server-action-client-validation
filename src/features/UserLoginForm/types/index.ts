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
