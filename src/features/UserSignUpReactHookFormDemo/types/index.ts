export enum Fields {
  username = "username",
  email = "email",
  password = "password",
}

export type SignUpFormData = {
  [Fields.username]?: string;
  [Fields.email]?: string;
  [Fields.password]?: string;
};

export type FormState =
  | {
      errors?: {
        [Fields.username]?: string[];
        [Fields.email]?: string[];
        [Fields.password]?: string[];
      };
      message?: string;
    }
  | undefined;
