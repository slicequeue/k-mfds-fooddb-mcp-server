import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node18',
  outDir: 'dist',
  external: ['@modelcontextprotocol/sdk'],
  shims: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
}) 