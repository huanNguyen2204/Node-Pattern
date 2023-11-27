const myModule = (() => {
  const privateFoo = () => {};
  const privateBar = [];

  const exported = {
    publicFoo: () => {},
    publicBar: () => {}
  }

  return exported;
})();

console.log(myModule);
console.log(myModule.privateFoo, myModule.privateBar);

function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);

  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  const module = {
    exports: {},
    id
  }

  require.cache[id] = module;

  loadModule(id, module, require);

  return module.exports;
}

require.cache = {};
require.resolve = (moduleName) => {}