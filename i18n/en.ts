// Interfaces
import { Locale } from '.'

export const table: Locale = {
  locale: 'English',
  auth: {
    title: 'Sign in or create an account',
    continue: 'Or continue with',
    social: {
      google: 'Continue with Google',
      github: 'Continue with GitHub',
      twitter: 'Continue with Twitter',
    },
    form: {
      validations: {
        email: {
          valid: 'Email must be valid. i.e: example@website.com',
          required: 'Email is required',
        },
      },
      email: 'Email address',
      password: 'Password',
      button: {
        create: {
          label: "Create account"
        },
        label: 'Sign In',
      },
    },
  },
}
