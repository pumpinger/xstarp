<template>
    <div id="fm-app" class="fm-app">
        <top-bar></top-bar>
        <fm-menu-bar></fm-menu-bar>
        <fm-main></fm-main>
    </div>
</template>

<script>
    import topBar from './top-bar.vue'
    import fmMenuBar from './fm/fm-menu-bar.vue'
    import fmMain from './fm/fm-main.vue'

    export default {
        components: {
            topBar,
            fmMenuBar,
            fmMain
        },
        methods: {

        }
    }

</script>

<style>
    * {
        box-sizing: border-box;
    }
    body,html {
        margin: 0;padding:0;
        height: 100%;
    }
    .fm-app {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>