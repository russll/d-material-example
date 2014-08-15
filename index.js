var app = module.exports = require('derby').createApp('d-material-example', __filename);

app.serverUse(module, 'derby-stylus');
app.use(require('d-material'));
app.loadViews(__dirname);

// Маршрут рендерится на клиенте и на сервере
app.get('/', function(page, model) {
    page.render('home');
});