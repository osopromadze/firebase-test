// Interfaces
import { Locale } from '.'

export const table: Locale = {
  locale: 'Español',
  auth: {
    title: 'Inicia sesión o crea una cuenta',
    continue: 'O continúa con',
    social: {
      google: 'Continúa con Google',
      github: 'Continúa con GitHub',
      twitter: 'Continúa con Twitter',
    },
    form: {
      validations: {
        email: {
          valid: 'El correo no es válido. ej. example@website.com',
          required: 'El correo es requerido',
        },
      },
      email: 'Correo',
      password: 'Contraseña',
      button: {
        create: {
          label: 'Crea una cuenta',
        },
        label: 'Inicia sesión',
      },
    },
  },
}
