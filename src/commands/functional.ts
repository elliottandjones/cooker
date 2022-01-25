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
    let extension = parameters.second || '.js'
    let directory = parameters.third || './'
    if (!directory.endsWith('/')) {
      directory += '/'
      console.log(directory)
    }
    // let path = ''
    // directory.endsWith('/') ? (path = `${directory}${name}`) : (path = name)
    // const extension = path.includes('.js') || path.includes('.ts') ? '' : '.js'

    await generate({
      template: 'functional.js.ejs',
      target: `${directory}${name}${extension}`,
      props: { name },
    })

    info(`Generated file at ${directory}${name}${extension}`)
  },
}
