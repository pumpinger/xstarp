<template>
    <div id="main-area">
        <countBar>
            <info-bar v-if="notMultiple"></info-bar>
            <filter-bar v-else></filter-bar>
        </countBar>
        <main-show>
            <!--这里要塞很多东西，都是一个个小组件-->
        </main-show>

        <div>

        </div>
    </div>
</template>

<script>
    import countBar from './count-bar.vue'
    import infoBar from './info-bar.vue'
    import mainShow from './main-show.vue'

    export default {
        components: {
            countBar,
            infoBar,
            mainShow
        },
        methods: {
			notMultiple: ()=>{

            }
        }
    }
</script>


<style lang="scss" src="../../styles/scss/main-area.scss"></style>
