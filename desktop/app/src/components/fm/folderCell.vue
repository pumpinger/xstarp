<template>
    <div class="folderCell" @click="folderClick" >
        <div class="icon-folder"></div>
        <div class="cell-btns">
            <div @click="deleteFolder"></div>
            <div @click="markFolder"></div>
        </div>
        <div class="folder-name">{{ folderName }}</div>
        <div class="cell-star"></div>
        <div class="cell-select"></div>
    </div>
</template>

<script>

</script>

<style>

</style>