<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getController } from './controller';
import { getLevel } from './levels';
import { getPlayer } from './player';

const options = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
    clear: true,
};

onMounted(() => {
    // avoid passing tv to other gets
    // set background clear
    const container = document.getElementById('container');

    const controller = getController(container, options);

    const level = getLevel(1, controller.tv);

    const player = getPlayer(level.start.x, level.start.y, controller.tv);

    // const engine = getEngine();
    // const player = getPlayer();
    // const level = getLevel();

    // engine.addUpdate(player.update);
    // engine.addShow(level.show);
    // engine.addShow(player.show);
    // engine.run();
});
</script>
