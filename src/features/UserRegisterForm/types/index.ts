export enum Fields {
  entity = "entity",
  username = "username",
  email = "email",
  password = "password",
}

export enum Entities {
  user = "user",
  company = "company",
}

export type FormState =
  | {
      errors?: {
        [Fields.entity]?: string[];
        [Fields.username]?: string[];
        [Fields.email]?: string[];
        [Fields.password]?: string[];
      };
      message?: string;
    }
  | undefined;
