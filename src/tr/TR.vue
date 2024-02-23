<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getController } from './controller';
import store from './store';
// import { Engine, TransformedView } from './types/index.';
// import { getLevel } from './levels';
// import { getPlayer } from './player';

const options = {
    pos: 'center',
    w: 640,
    h: 480,
    bg: '#000',
    clear: true,
};

onMounted(() => {
    const container = document.getElementById('container');

    const controller = getController(container, options);

    store.set(controller);

    // setLevel(1);

    // setPlayer();

    // const engine = getEngine();
    // const player = getPlayer();
    // const level = getLevel();

    // engine.addUpdate(player.update);
    // engine.addShow(level.show);
    // engine.addShow(player.show);
    // engine.run();
});
</script>
