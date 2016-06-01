'use strict';

const babel = require('babel-core');
const expect = require('chai').expect;
const removeProcessEnvAssignment = require('./');

describe('plugin', function() {
  it('works', function() {
    const code = [
      'const a = process.env.TEST;',
      '',
      "process.env.NODE_ENV = args.dev ? 'development' : 'production';",
      '',
      'const options = {',
      '  projectRoots: config.getProjectRoots()',
      '};'
    ].join('\n');

    const options = { plugins: [removeProcessEnvAssignment] };
    const res = babel.transform(code, options);
    expect(res.code.trim()).to.equal([
      'const a = process.env.TEST;',
      '',
      'const options = {',
      '  projectRoots: config.getProjectRoots()',
      '};'
    ].join('\n'));
  });
});
