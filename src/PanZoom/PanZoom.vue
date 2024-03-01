<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getContext } from '../canvas';

const canvasOptions = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
};

onMounted(() => {
    const container = document.getElementById('container');

    const { canvas, context } = getContext(container, canvasOptions);

    console.log(canvas, context);
});
</script>
