<template>
    <div class="main-show">
        <div class="folder-unit">
            <div class="folder-unit-title">{{ yearMonthDay }}</div>
            <div class="folder-unit-cells">

            </div>
        </div>

        <div class="condition-filter-unit">
            <div v-show="">{{ yearMonthDay }}</div>
            <div class="sub-unit">
                <div v-show=""  class="sub-unit-title"></div>
                <div class="sub-unit-cells">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import fileCell from './fileCell.vue'
    import fileCell from './folderCell.vue'
export default {

}

</script>

<style>

</style>


