export const compose = (...hocs) => (Component) => {

  return hocs.reduceRight((prevResult, hoc) => hoc(prevResult), Component)
};