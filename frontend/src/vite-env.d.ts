/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CUSTOMERS_API_URL: string
  // More env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
