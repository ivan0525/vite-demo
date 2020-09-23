// import viteAutoRoutes from './src/plugins/vite-auto-routes'

import fs from 'fs'
import {baseParse, BaseElementNode} from '@vue/compiler-core'
import test from './src/plugins/test'
export default {
  // plugins: [viteAutoRoutes({pagesDir: './src/pages/'})],
  plugins: [test()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      console.log(baseParse(file).children)
      const parsed = baseParse(file).children.find((n) => {
        if ('tag' in n) {
          return n.tag === 'demo'
        }
      })
      const title = 'children' in parsed ? parsed.children[0].content : null
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
}
