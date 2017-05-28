"use strict";
exports.LINKINPARK = { name: 'Linkin Park', origin: 'USA' };
exports.METEORA = { band: exports.LINKINPARK, name: "Meteora", genre: 'Nu Metal', year: 2003 };
exports.SONGS = [
    { album: exports.METEORA, name: 'Forewordd', id: 1, rate: 1 },
    { album: exports.METEORA, name: 'Dont Stay', id: 2, rate: 7 },
    { album: exports.METEORA, name: 'Somewhere I Belong', id: 3, rate: 10 },
    { album: exports.METEORA, name: 'Lying from You', id: 4, rate: 8 },
    { album: exports.METEORA, name: 'Hit the Floor', id: 5, rate: 5 }
];
//# sourceMappingURL=mock-songs.js.map