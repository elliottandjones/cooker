import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'class',
  alias: ['c'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    // console.log(parameters)
    const name = parameters.first || 'Component'
    const directory = parameters.second || null
    const path = directory || name

    await generate({
      template: 'class.js.ejs',
      target: `${path}.js`,
      props: { name }
    })

    info(`Generated file at ${path}`)
  }
}
