define([
    'express',
    'module',
    'path',
    'consolidate',

    'server/routes/api/projectiles',
    'server/routes/api/enemies',
    'server/routes/api/characters',
    'server/routes/api/entities',
     
    'server/routes/home'
], function (
    express,
    module,
    path,
    consolidate,
    
    projectiles,
    enemies,
    characters,
    entities,
     
    home
) {
    
    var dirname = path.dirname(module.uri);
    
    var app = express();

    app.configure(function () {
        app.engine('html', consolidate.underscore);
        app.set('views', dirname + '/../client/views');
        app.set('view engine', 'underscore');
        app.use('/client', express.static(dirname + '/../client'));
    });
    
    // API's
    app.get('/api/projectiles', projectiles.get);
    app.get('/api/enemies', enemies.get);
    app.get('/api/characters', characters.get);
    app.get('/api/entities', entities.get);
    
    // Pages
    app.get('/', home.index);
    app.get('/game', home.index);
    app.get('/projectiles', home.index);
    app.get('/projectile/create', home.index);

    return app;

});