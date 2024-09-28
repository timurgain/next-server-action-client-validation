"use server";
import { z } from 'zod';
import { Fields, FormState } from '../types';

const schema = z.object({
  [Fields.username]: z.string().min(2, { message: 'Username must be at least 2 characters long' }).trim(),
  [Fields.email]: z.string().email({ message: 'Invalid email address' }).trim(),
  [Fields.password]: z.string().min(4, { message: 'Password must be at least 4 characters long' }).trim(),
});

export async function createUser(state: FormState, formData: FormData) {

  const rowData = {
    [Fields.username]: formData.get(Fields.username),
    [Fields.email]: formData.get(Fields.email),
    [Fields.password]: formData.get(Fields.password),
  }

  const validatedFields = schema.safeParse(rowData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Send data to the server
  try {
    throw new Error('Not implemented');
  } catch (error) {
    return {
      message: `An error occurred. Please try again later: ${error}`,
    }
  }

}
