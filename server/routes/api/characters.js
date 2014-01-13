﻿define([
    'exports'
], function (exports) {

    exports.get = function (req, res) {
        res.json([{
            'type': 'Ship',

            'health': 50,
            'damage': 100,
            'speed': { 'up': 2, 'left': 2, 'right': 2, 'down': 2 },

            'timeNextMove': 5,

            'components': ['Sprite', 'HealthBar'],
            'image': { 'width': 43, 'height': 39, 'src': '../../client/img/characters/shipSprite.png' },

            'width': 43 * 1.5,
            'height': 39 * 1.5,
            'canvas': { 'width': 895, 'height': 600 },
            'pos': { 'x': 1, 'y': 10 },
            'sprite': { 'row': 0, 'col': 0 }
        }, {
            'type': 'Soldier',

            'health': 50,
            'damage': 100,
            'speed': { 'up': 2, 'left': 2, 'right': 2, 'down': 2 },

            'timeNextMove': 15,

            'components': ['Sprite', 'HealthBar'],
            'image': { 'width': 32, 'height': 32, 'src': '../../client/img/characters/soldierSprite.png' },

            'width': 32 * 1.5,
            'height': 32 * 1.5,
            'canvas': { 'width': 895, 'height': 600 },
            'pos': { 'x': 1, 'y': 10 },
            'sprite': { 'row': 0, 'col': 0 }
        }]);
    };

});