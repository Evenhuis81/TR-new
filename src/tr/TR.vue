<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setController } from './controller';
import { setLevel } from './levels';
import { setPlayer } from './player';
import { controllerStore, playerStore, levelStore } from './store';

const canvasOptions = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
    // clear: true,
};

onMounted(() => {
    const container = document.getElementById('container');

    setController(container, canvasOptions);

    setLevel(1);

    setPlayer();

    const { engine } = controllerStore.state;

    engine.addUpdate(playerStore.state.update);
    engine.addShow(levelStore.state.show);
    engine.addShow(playerStore.state.show);
    engine.run();
});
</script>
