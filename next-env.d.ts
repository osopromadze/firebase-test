/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'browser-monads' {
  export const window: Window
  export const document: Document

  export function exists(variable: unknown): boolean
}
