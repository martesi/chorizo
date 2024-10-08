import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoImports from 'unplugin-auto-import/vite'
import { envParse } from 'vite-plugin-env-parse'
import { TanStackRouterVite as router } from '@tanstack/router-vite-plugin'
import compress from 'vite-plugin-compression'
import env from 'postcss-preset-env'
import icons from 'unplugin-icons/vite'
import resolver from 'unplugin-icons/resolver'

export default defineConfig({
  envDir: '.config',
  plugins: [
    icons({ compiler: 'jsx' }),
    unocss(),
    tsconfigPaths(),
    envParse({ dtsPath: '.config/generated/env.d.ts' }),
    react({ babel: { plugins: ['babel-plugin-react-compiler'] } }),
    router({
      routesDirectory: 'pages',
      generatedRouteTree: '.config/generated/pages.ts',
      disableLogging: true,
    }),
    autoImports({
      resolvers: [
        resolver({
          extension: 'jsx',
          prefix: false,
          enabledCollections: ['mdi'],
        }),
      ],
      include: [/\.tsx?$/],
      imports: [
        'react',
        'jotai/utils',
        'jotai',
        {
          clsx: [['default', 'c']],
          '@tanstack/react-router': [
            'Link',
            'Outlet',
            'Navigate',
            'useParams',
            'useLoaderDeps',
            'useLoaderData',
            'useRouter',
            'useNavigate',
            'useBlocker',
            'useSearch',
            'useMatches',
            'redirect',
            'notFound',
          ],
        },
      ],
      dirs: ['hooks', 'components', 'utils'],
      dts: '.config/generated/auto-imports.d.ts',
    }),
    compress({
      threshold: 10240,
      algorithm: 'gzip',
    }),
  ],
  build: {
    reportCompressedSize: false,
  },
  server: { host: true },
  css: {
    postcss: {
      plugins: [env()],
    },
  },
})
