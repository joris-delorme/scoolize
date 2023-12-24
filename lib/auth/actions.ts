'use server'

import { AuthError } from "next-auth";
import { signIn } from ".";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData | { email: string, password: string },
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    console.log("Auth Error", error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}