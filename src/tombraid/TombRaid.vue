<template>
    <canvas
        id="canvas"
        width="200"
        height="400"
        style="background-color: #000"
    ></canvas>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { level1, mapShow, getStart } from './levels';
import { player } from './player';

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let player1: any;

onMounted(() => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    context = canvas.getContext('2d') as CanvasRenderingContext2D;

    player1 = player(context, map);

    animate();
});

const map = {
    blockSize: 20,
    width: 200,
    height: 400,
    playerStart: getStart(),
    content: level1,
};

window.addEventListener('keydown', ({ key }) => {
    player1.input(key);
});

const animate = () => {
    context.clearRect(0, 0, 270, 480);

    mapShow(map, context);

    player1.update();
    player1.show();

    requestAnimationFrame(animate);
};
</script>
