import fs from 'fs'
import path from 'path'
import marked from 'marked'
function parsePagesDirectory() {
  const files = fs
    .readdirSync('./src/pages')
    .map((f) => ({ name: f.split('.')[0], importPath: `/src/pages/${f}` }))

  const imports = files.map((f) => `import ${f.name} from '${f.importPath}'`)

  const routes = files.map(
    (f) => `{
        name: '${f.name}',
        path: '/${f.name}',
        component: () => import('${f.importPath}'),
      }
      `
  );

  return { imports, routes }
}

const markdownToJs = (s) => {
  const content = JSON.stringify(marked(s))
  return `export default ${content}`
}

export default () => {
  const { imports, routes } = parsePagesDirectory()

  const moduleContent = `
    export const routes = [${routes.join(', \n')}]
  `

  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        if (ctx.path.startsWith('/@modules/vue-auto-routes')) {
          ctx.type = 'js'
          ctx.body = moduleContent
        } else if (ctx.path.endsWith('.md')) {
          ctx.type = 'js'
          const filepath = path.posix.join(process.cwd(), ctx.path)
          ctx.body = markdownToJs(fs.readFileSync(filepath)&&fs.readFileSync(filepath).toString())
        } else {
          await next()
        }
      })
    },
  ]

  return { configureServer }
}
