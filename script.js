const canvas_game = document.getElementById('canvas');
const ctx_game = canvas_game.getContext('2d');

const W = canvas_game.width;
const H = canvas_game.height;
const h_score = 200;
const size_W = 100;
const size_H = 100;
const space = 20;
const colour = `rgb(73, 118, 160)`;

function init() {
    ctx_game.beginPath();
    ctx_game.fillStyle = 'rgb(54, 50, 50)';
    ctx_game.fillRect(0, 0, W, H);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            ctx_game.fillStyle = `rgb(1${j}${i}, 1${i}${j}, 1${j}${i})`;
            ctx_game.fillRect(size_W * i + space * (i + 1), size_H * j + space * (j + 1), size_W, size_H);
        }
    }
}

init();

const canvas_score = document.getElementById('score');
const ctx_score = canvas_score.getContext("2d")
ctx_score.fillStyle = 'rgb(153, 140, 140)';
ctx_score.fillRect(0, 0, canvas_score.width, canvas_score.height);