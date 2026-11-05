import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...astro.configs['flat/recommended'],
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: config.files ? [...config.files, '**/*.{ts,tsx,js,mjs,cjs}'] : ['**/*.{ts,tsx,js,mjs,cjs}'],
  })),
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  }
);
