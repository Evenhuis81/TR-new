<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { get2D } from '../canvasAPI';

const scale = 20;
// const width = 5;
// const height = 5;

const solid = {
    // fill: 'blue',
    // l: scale,
};

const level = [
    [solid, solid, solid, solid, solid],
    [solid, null, null, null, solid],
    [solid, null, null, null, solid],
    [solid, null, null, null, solid],
    [solid, solid, solid, solid, solid],
];

onMounted(() => {
    const container = document.getElementById('container');

    const { canvas: cvs, context: ctx } = get2D(container, {
        pos: 'center',
        w: 400,
        h: 400,
        bg: '#000',
    });

    ctx.fillStyle = 'blue';

    const animate = () => {
        ctx.clearRect(0, 0, cvs.width, cvs.height);

        for (let y = 0; y < level.length; y++) {
            for (let x = 0; x < level[y].length; x++) {
                switch (level[y][x]) {
                    case solid:
                        ctx.beginPath();
                        ctx.fillRect(x * scale, y * scale, scale, scale);
                        break;

                    case null:
                        console.log('null');
                        break;

                    default:
                        break;
                }
            }
        }
    };

    animate();
});
</script>
../controller
