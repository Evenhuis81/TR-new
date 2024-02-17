<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { get2D } from '../canvasAPI';

onMounted(() => {
    const container = document.getElementById('container');

    const { canvas: cvs, context: ctx } = get2D(container, {
        pos: 'center',
        w: 800,
        h: 500,
        bg: '#000',
    });

    let scale = 30;
    let padding = 40;
    let levelWidth = 5;
    let levelHeight = 5;

    // const solidBlockType = {
    //     fill: 'blue',
    //     x: 100,
    //     y: 100,
    //     w: scale,
    //     h: scale,
    // };

    // const dragBlock = {
    //     x: 0,
    //     y: 0,
    // };

    let drawMovingObject = [() => {}];

    const animate = () => {
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        // types
        ctx.beginPath();
        ctx.font = '16px sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillText('Types: (drag to level)', 100, 85);

        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(100, 100, scale, scale);

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        for (let y = 0; y < levelHeight + 1; y++) {
            ctx.beginPath();
            ctx.moveTo(cvs.width - padding, cvs.height - padding - y * scale);
            ctx.lineTo(
                cvs.width - padding - levelWidth * scale,
                cvs.height - padding - y * scale
            );
            ctx.stroke();
        }

        for (let x = 0; x < levelWidth + 1; x++) {
            ctx.beginPath();
            ctx.moveTo(cvs.width - padding - x * scale, cvs.height - padding);
            ctx.lineTo(
                cvs.width - padding - x * scale,
                cvs.height - padding - levelHeight * scale
            );
            ctx.stroke();
        }

        drawMovingObject[0]();

        requestAnimationFrame(animate);
    };

    animate();
});
</script>
../controller
