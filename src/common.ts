module.exports = parameters => {
  let name = parameters.first || 'Component'
  let extension = parameters.second || '.js'
  let directory = parameters.third || './'

  return {
    name,
    extension,
    directory,
  }
}
