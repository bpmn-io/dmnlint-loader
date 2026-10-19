import path from 'path';

import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';


export default function compiler(fixture, options = {}) {
  const compiler = webpack({
    mode: 'development',
    context: import.meta.dirname,
    entry: fixture,
    output: {
      path: path.resolve(import.meta.dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.(dmnlintrc|json)$/,
        use: {
          loader: path.resolve(import.meta.dirname, '../index.js')
        }
      }]
    }
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {

      if (stats.hasErrors()) {
        err = err || new Error('bundle build error');
      }

      if (err) {
        err.stats = stats;

        return reject(err);
      }

      resolve(stats);
    });
  });
}