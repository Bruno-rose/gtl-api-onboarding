interface ImportMetaEnv {
  readonly VITE_GREPTILE_API_KEY: string;
  readonly VITE_GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 