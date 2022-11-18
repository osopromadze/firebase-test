export interface Locale {
  locale: string
  auth: {
    title: string
    continue: string
    social: {
      google: string
      github: string
      twitter: string
    }
    form: {
      validations: {
        email: {
          valid: string
          required: string
        }
      }
      email: string
      password: string
      button: {
        create: {
          label: string
        }
        label: string
      }
    }
  }
}
