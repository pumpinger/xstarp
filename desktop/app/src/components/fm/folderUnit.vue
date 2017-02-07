<template>
    <div class="folder-unit">
        <div class="folder-unit-title">{{ yearMonthDay }}</div>
        <div class="folder-unit-cells">
            <folder-cell v-for=""></folder-cell>
        </div>
    </div>
</template>

<script>
    import folderCell from './folderCell.vue';

    export default {
    	components: {
    		folderCell
        }
    }
</script>