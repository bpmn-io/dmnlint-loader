import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'coverage',
    'node_modules'
  ],
  build: [
    '*.js'
  ],
  test: [
    'test/**/*.mjs'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // build / loader (CommonJS)
  ...bpmnIoPlugin.configs.node.map(config => ({
    ...config,
    files: files.build,
    languageOptions: {
      ...config.languageOptions,
      sourceType: 'commonjs'
    }
  })),

  // tests (ESM)
  ...bpmnIoPlugin.configs.node.map(config => ({
    ...config,
    files: files.test
  })),
  ...bpmnIoPlugin.configs.mocha.map(config => ({
    ...config,
    files: files.test
  }))
];
