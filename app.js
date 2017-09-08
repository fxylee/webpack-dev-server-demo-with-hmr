const App = require('./src/js/page/index.js');

App.start();

if (module.hot) {
    module.hot.accept();
}
