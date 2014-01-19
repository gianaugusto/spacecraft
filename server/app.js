define([
    'express',
    'module',
    'path',
    'consolidate',
    'mongoose',

    'server/routes/api/projectiles',
    'server/routes/api/enemies',
    'server/routes/api/characters',
    'server/routes/api/entities',
     
    'server/routes/home',
    'server/routes/setup'
], function (
    express,
    module,
    path,
    consolidate,
    mongoose,
    
    projectiles,
    enemies,
    characters,
    entities,
     
    home,
    setup
) {
    
    var dirname = path.dirname(module.uri);
    
    var app = express();

    app.configure(function () {
        app.use(express.bodyParser());
        app.engine('html', consolidate.underscore);
        app.set('views', dirname + '/../client/views');
        app.set('view engine', 'underscore');
        app.use('/client', express.static(dirname + '/../client'));
    });
        
    mongoose.connect('mongodb://sa:sa@alex.mongohq.com:10022/spacecraft');
    
    // API's
    app.get('/api/projectiles', projectiles.all);
    app.get('/api/projectiles/:_id', projectiles.get);
    app.post('/api/projectiles', projectiles.post);
    app.put('/api/projectiles/:_id', projectiles.put);
    app.del('/api/projectiles/:_id', projectiles.delete);
        
    app.get('/api/enemies', enemies.get);
    app.get('/api/characters', characters.get);
    app.get('/api/entities', entities.get);
    
    // Pages
    app.get('/', home.index);
    app.get('/game', home.index);
    app.get('/projectiles', home.index);
    app.get('/projectile/create', home.index);
    app.get('/projectile/edit/:id', home.index);
        
    app.get('/setup', setup.index);

    return app;

});