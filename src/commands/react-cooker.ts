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
    const componentExtension = {
      type: 'select',
      name: 'extension',
      initial: '.js',
      message: 'What is the file extension of the Component?',
      choices: [
        { name: '.js', message: '.js', hint: 'creates a file ending in .js' },
        { name: '.jsx', message: '.jsx', hint: 'creates a file ending in .jsx' },
        { name: '.tsx', message: '.tsx', hint: 'creates a file ending in .tsx' },
        { name: '.ts', message: '.ts', hint: 'creates a file ending in .ts' },
      ],
    }
    const componentDirectory = {
      type: 'input',
      name: 'directory',
      initial: './',
      message: 'Where are we generating our Component?',
    }
    // ask a series of questions
    const questions = [componentType, componentName, componentExtension, componentDirectory]
    const { type, name, extension, directory } = await toolbox.prompt.ask(questions)

    if (type === 'Functional') {
      return FunctionalComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: extension,
          third: directory,
        },
      })
    }
    if (type === 'Class') {
      return ClassComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: extension,
          third: directory,
        },
      })
    }

    // console.log(`${name}, ${type}, ${ext}, ${where}, Gooo!`)
    // print.info(`${name}, ${type}, ${extension}, ${directory}, Gooo!`)
  },
}
