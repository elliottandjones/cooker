import { GluegunToolbox } from 'gluegun'
const generateDefaults = require('../common')

module.exports = {
  name: 'class',
  alias: ['c'],
  descriptions: 'Creates a class component',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    // console.log(parameters)
    const { name, directory, extension } = generateDefaults(parameters)

    await generate({
      template: 'class.js.ejs',
      target: `${directory.endsWith('/') ? directory : `${directory}/`}${name}${extension}`,
      props: { name },
    })

    info(`Generated file at ${directory}${name}${extension}`)
  },
}
