module.exports = {
  name: 'cooker',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
    // multiple choice
    const componentType = {
      type: 'select',
      name: 'type',
      message: 'What type of component?',
      choices: ['Class Component', 'Functional Component']
    }
    const componentName = {type: 'input', name: 'name', message: 'What name are we giving this Component?'}
    const componentDir = {type: 'input', name: 'where', message: 'Where are we generating our Component?'}

    // ask a series of questions
    const { name, type, where } = await toolbox.prompt.ask(componentType, componentName, componentDir)
    console.log(`${name} ${type}, ${where}, Gooo!`)
    // print.info('')
  }
}

