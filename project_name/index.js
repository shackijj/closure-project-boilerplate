import { boo } from './modules/boo';

function start() {
      boo();
      return new Promise(function(resolve, reject) {
            try {
                  document.write('<h1>Hello Closure!</h1>');
                  resolve();
            } catch (e) { reject(e); }
      });
};

window['project_name'] = { start };