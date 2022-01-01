import { GluegunToolbox } from 'gluegun'

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
    const name = parameters.first || 'Component'
    const directory = parameters.second || null
    let path = ''
    directory ? (path = `${directory}${name}`) : (path = name)
    const extension = path.includes('.js') || path.includes('.ts') ? '' : '.js'

    await generate({
      template: 'functional.js.ejs',
      target: `${path}${extension}`,
      props: { name },
    })

    info(`Generated file at ${path}${extension}`)
  },
}
