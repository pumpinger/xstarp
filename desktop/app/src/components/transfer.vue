<template>
    <div id='app'>

    </div>
</template>

<script>
    import sidebar from './components/sidebar.vue'
    import mainArea from './components/mainArea.vue'

    // With shell.openExternal(url) is how
    // external urls must be handled, not href
    const shell = require('electron').shell

    export default {
        components: {
            sidebar,
            mainArea
        },
        methods: {
          link: (url) => {
            shell.openExternal(url)
          }
        }
    }
</script>

<style>
    html {
        height: 100%;
    }
    body {
        margin: 0 ;
        height: 100%;
    }
    #app {
        color: #2c3e50;
        width: 100%;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        margin: auto;
        background: rgba(237, 255, 74, 0.05);
    }
    #app a {
        color: #42b983;
        text-decoration: none;
    }
    #app p {
        text-align: justify;
        background: rgba(255,255,255,1);
        color:red;
    }

    .main-sidebar-wrapper{
        width: 240px;
        height: 100%;
    }
    .main-area-wrapper {
        width: calc(100% - 240px);
        height: 100%;
    }
</style>
