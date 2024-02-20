<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setController, controller } from './controller';
import { getLevel } from './levels';
import { getPlayer } from './player';

const options = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
};

onMounted(() => {
    const container = document.getElementById('container');

    setController(container, options);

    const { engine } = controller;

    const level = getLevel(1, controller.tv);

    const player = getPlayer(level, controller);

    engine.addUpdate(player.update);
    engine.addShow(level.show);
    engine.addShow(player.show);
    engine.run();
});
</script>
