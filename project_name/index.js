import { write } from './modules/boo';

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