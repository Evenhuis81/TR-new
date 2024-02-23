<template>
    <div ref="modalTemplate" class="fade modal" tabindex="-1" aria-labelledby="label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div v-if="modal.title" class="flex-column modal-header p-4 pb-3">
                    <ButtonClose />

                    <h3 class="modal-title">{{ modal.title }}</h3>
                </div>

                <div class="lead modal-body modal-text pt-0" :class="{'mt-5': !modal.title}">
                    <p v-for="(message, index) in modal.message" id="label" :key="index" class="lead text-center">
                        {{ message }}
                    </p>
                </div>

                <div class="border-0 d-flex justify-content-end modal-footer pb-4 pe-4 pt-0">
                    <button class="btn btn-secondary me-3 px-4 rounded-5" @click="resolve(false)">
                        {{ modal.cancelButtonText }}
                    </button>

                    <button class="btn btn-primary px-4 rounded-5" type="button" @click="resolve(true)">
                        {{ modal.okButtonText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {ConfirmModalData} from '../types';
import type {Modal} from 'bootstrap';

import {onMounted, ref} from 'vue';

import ButtonClose from 'components/ButtonClose.vue';

import {createModal} from './logic';

const {modal} = defineProps<{modal: ConfirmModalData}>();

const emit = defineEmits<{hide: [void]}>();

const modalTemplate = ref<HTMLDivElement>();

let bootstrapModal: Modal;

onMounted(() => {
    if (!modalTemplate.value) return;
    bootstrapModal = createModal(modalTemplate.value, emit, 'static', false, true);
});

const resolve = (confirm: boolean) => {
    modal.resolver(confirm);
    bootstrapModal.hide();
};
</script>
