import compiler from './compiler';

import { expect } from 'chai';


describe('dmnlint-loader', function() {

  it('should compile', async function() {
    // when
    const { code } = await compile('./fixtures/.dmnlintrc');

    // then
    // expect resolved bundle
    expect(code).to.contain('import rule_0 from \'dmnlint/rules/label-required\'');
    expect(code).to.contain('cache[\'dmnlint/label-required\'] = rule_0');
  });


  it('should fail with error', async function() {

    let err;

    try {
      await compile('./fixtures/dmnlint-config-error.json');
    } catch (e) {
      err = e;
    }

    // then
    expect(err).to.exist;
    expect(err.message).to.eql('bundle build error');
  });

});



// helper ////////////////////

async function compile(fixture) {

  const stats = await compiler(fixture);

  const module = stats.toJson().modules.find(m => m.id === fixture);

  expect(module).to.exist;

  return {
    stats,
    module,
    code: module.source
  };
}