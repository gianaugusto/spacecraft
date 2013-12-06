﻿define([
    'infrastructure/HealthBar',

    'domain/enemies/Enemy'
], function (HealthBar, Enemy) {

    function Asteroid(config) {
        this.config = config;

        this.pos = this.initPos();
        this.health = config.health;
    }

    Asteroid.prototype = new Enemy();

    return Asteroid;

});