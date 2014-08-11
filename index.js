var app = module.exports = require('derby').createApp('d-material', __filename);

app.serverUse(module, 'derby-stylus');
app.use(require('d-material'));

app.loadViews(__dirname);

// Маршрут рендерится на клиене и на сервере
app.get('/', function(page, model) {
    // Подписка обеспечивает синхронизацию данных
    model.subscribe('hello.message', function() {
        page.render('home');
    });
});