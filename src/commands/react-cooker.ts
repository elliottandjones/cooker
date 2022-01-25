const FunctionalComponent = require('./functional')
const ClassComponent = require('./class')

module.exports = {
  name: 'cooker',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
    // multiple choice
    const componentType = {
      type: 'select',
      name: 'type',
      initial: 'Functional',
      message: 'What type of Component?',
      choices: [
        {
          name: 'Functional',
          message: 'Functional',
          hint: 'creates a react functional component (Default)',
        },
        { name: 'Class', message: 'Class', hint: 'creates a react class component' },
      ],
    }
    const componentName = {
      type: 'input',
      name: 'name',
      initial: 'Component',
      message: 'What name are we giving this Component?',
    }
    const componentExt = {
      type: 'select',
      name: 'extension',
      initial: '.js',
      message: 'What is the file extension of the Component?',
      choices: [
        { name: 'js', message: '.js', hint: 'creates a file ending in .js' },
        { name: 'jsx', message: '.jsx', hint: 'creates a file ending in .jsx' },
        { name: 'ts', message: '.ts', hint: 'creates a file ending in .ts' },
        { name: 'tsx', message: '.tsx', hint: 'creates a file ending in .tsx' },
      ],
    }
    const componentDir = {
      type: 'input',
      name: 'where',
      initial: './',
      message: 'Where are we generating our Component?',
    }
    // ask a series of questions
    const questions = [componentType, componentName, componentExt, componentDir]
    const { type, name, ext, where } = await toolbox.prompt.ask(questions)

    if (type === 'Functional') {
      return FunctionalComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: ext,
          third: where,
        },
      })
    }
    if (type === 'Class') {
      return ClassComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: ext,
          third: where,
        },
      })
    }

    console.log(`${name}, ${type}, ${ext}, ${where}, Gooo!`)
    // print.info('')
  },
}
