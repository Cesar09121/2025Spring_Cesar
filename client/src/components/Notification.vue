<script setup lang="ts">    
import { ref } from 'vue';

const notification = ref([
    'This is a primary notification #1',
    'This is a warning notification #2',
    'This is a danger notification #3',
    'This is a success notification #4',
]);

function reviewNotification(index : number) {
    notification.value.splice(index, 1);
    
}

</script>

<template>
    <div>
        <div v-for="(message, index) in notification" :key="index" class="notification is-primary">
            <button class="delete" @click="reviewNotification(index)"></button>
            {{ message }}
        </div>
    </div>
</template>

<style scoped>

</style>