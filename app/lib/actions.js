'use server'
 
import { signIn } from '../lib/auth';
 
export async function authenticate(_currentState, formData) {
    console.log("authentication",formData)
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}