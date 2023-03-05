import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "./src/gql/gql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        typesPrefix: 'Annict',
      },
    }
  }
};

export default config;
