import { write, foo } from './modules/boo';
import { forEach } from 'goog:goog.array';

forEach([[1, 2], [3, 4]], arg => foo.apply(null, arg));
/**
 * @return numner
 */
export function start() {
      write();
      return new Promise(function(resolve, reject) {
            try {
                  document.write('<h1>Hello Closure!</h1>');
                  resolve();
            } catch (e) { reject(e); }
      });
};

window['project_name'] = { start };