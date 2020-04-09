const compileConfig = require('dmnlint/lib/support/compile-config');


async function dmnlintLoader(source) {

  async function run(code) {

    const config = JSON.parse(code);

    return await compileConfig(config);
  }

  const callback = this.async();

  run(source).then(c => callback(null, c), callback);
}

module.exports = dmnlintLoader;