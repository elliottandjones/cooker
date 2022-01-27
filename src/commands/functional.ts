import { GluegunToolbox } from 'gluegun'
const generateDefaults = require('../common')

module.exports = {
  name: 'functional',
  alias: ['f'],
  descriptions: 'Creates a functional component',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    // console.log(parameters)
    const { name, directory, extension } = generateDefaults(parameters)

    if (extension === '.ts' || extension === '.tsx') {
      await generate({
        template: 'functional.ts.ejs',
        target: `${directory.endsWith('/') ? directory : `${directory}/`}${name}${extension}`,
        props: { name },
      })
    }
    if (extension === '.js' || extension === '.jsx') {
      await generate({
        template: 'functional.js.ejs',
        target: `${directory.endsWith('/') ? directory : `${directory}/`}${name}${extension}`,
        props: { name },
      })
    }

    info(
      `Generated file at ${
        directory.endsWith('/') ? directory : directory + '/'
      }${name}${extension}`,
    )
  },
}
