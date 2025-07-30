
interface ImportMetaEnv {
  readonly VITE_APP_API: string;
  readonly VITE_APP_AUTHDOMAIN: string;
  readonly VITE_APP_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_SENDER: string;
  readonly VITE_APP_APP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}