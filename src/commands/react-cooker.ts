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
      message: 'What type of Component? (Defaults to Functional Component)',
      choices: [
        { name: 'Functional', message: 'Functional', hint: 'creates a react functional component' },
        { name: 'Class', message: 'Class', hint: 'creates a react class component' },
      ],
    }
    const componentName = {
      type: 'input',
      name: 'name',
      initial: 'Component',
      message: 'What name are we giving this Component?',
    }
    const componentDir = {
      type: 'input',
      name: 'where',
      initial: './',
      message: 'Where are we generating our Component?',
    }
    // ask a series of questions
    const questions = [componentType, componentName, componentDir]
    const { type, name, where } = await toolbox.prompt.ask(questions)

    if (type === 'Functional') {
      return FunctionalComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: where,
        },
      })
    }
    if (type === 'Class') {
      return ClassComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: where,
        },
      })
    }

    console.log(`${name}, ${type}, ${where}, Gooo!`)
    // print.info('')
  },
}
