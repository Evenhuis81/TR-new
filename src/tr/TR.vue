<template>
    <div id="container" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { setController } from './controller';
import { setLevel } from './levels';
import { setPlayer } from './player';
import { controller, player, level } from './store';

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

    // put this in game initiation
    const { engine } = controller.state;

    engine.addUpdate(player.state.update);
    engine.addShow(level.state.show);
    engine.addShow(player.state.show);
    engine.run();
});
</script>
