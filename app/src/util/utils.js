
const num = 1
const accumulation = () => ++num

const getId = () => '__id__' + new Date().getTime() + (Math.random()*10000)>>>0

export {
  accumulation,
  getId
}
