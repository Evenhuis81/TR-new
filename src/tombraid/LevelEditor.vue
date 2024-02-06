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
            <canvas id="canvas-editor" style="background-color: white" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

console.log('leveleditor setup');

onMounted(() => {
    console.log('leveleditor mounted');
});
</script>
