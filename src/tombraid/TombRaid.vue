<template>
    <div style="background-color: #000; height: 100vh">
        <div
            style="
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
            "
        >
            <canvas
                id="canvas"
                width="400"
                height="400"
                style="background-color: #000"
            ></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import { level1, mapShow, getStart } from './levels';
// import { player } from './player';
import { get2D } from './index';

// let canvas: HTMLCanvasElement;
// let context: CanvasRenderingContext2D;
// let player1: any;

onMounted(() => {
    const { canvas, context } = get2D('canvas');

    console.log(canvas);
    console.log(context);

    // player1 = player(context, map);

    // animate();
});

// const map = {
//     blockSize: 20,
//     width: 400,
//     height: 400,
//     playerStart: getStart(),
//     content: level1,
// };

// window.addEventListener('keydown', ({ key }) => {
//     player1.input(key);
// });

// const animate = () => {
//     context.clearRect(0, 0, 400, 400);

//     mapShow(map, context);

//     player1.update();
//     player1.show();

//     requestAnimationFrame(animate);
// };
</script>
