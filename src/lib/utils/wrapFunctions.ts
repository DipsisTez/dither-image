function wrapFunctions(functions: Function[]) {
  const wrappedFunctions: {[key: string]: Function} = {};
  functions.forEach(func => {
    wrappedFunctions[func.name] = func;
  });
  return wrappedFunctions;
}

export default wrapFunctions;
