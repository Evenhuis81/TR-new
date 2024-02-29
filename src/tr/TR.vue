<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setController } from './controller';
import { setLevel } from './levels';
import { setPlayer } from './player';
import { setUpdates, setDraw, start } from './';

const canvasOptions = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
};

onMounted(() => {
    const container = document.getElementById('container');

    setController(container, canvasOptions);

    setLevel();

    setPlayer();

    setUpdates();

    setDraw();

    start();
});
</script>
