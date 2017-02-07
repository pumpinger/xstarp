<template>
    <div class="top-bar">
        <div class="top-left">
            <img src="../assets/logo.png">
            <span>-{{windowName}}</span>
        </div>
        <div class="top-right">

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.top-bar {
    flex-shrink: 0;
    height: 60px;
    color: #fff;
    -webkit-app-region: drag;
    background: url("../assets/header.png");

    .top-left {

    }
}
</style>