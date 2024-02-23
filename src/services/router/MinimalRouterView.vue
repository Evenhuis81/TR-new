<template>
    <component :is="component" v-if="component" />

    <LoadingPage v-else />
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';

import LoadingPage from 'components/Loading.vue';

const {depth = 0} = defineProps<{depth?: number}>();

const component = computed(() => {
    const matched = useRoute().matched[depth];
    const MatchedComponent = matched && matched.components?.default;
    if (!matched || !MatchedComponent) return null;

    return MatchedComponent;
});
</script>
