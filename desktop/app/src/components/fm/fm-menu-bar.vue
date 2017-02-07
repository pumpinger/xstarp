<template>
    <div id="menu-bar" class="menu-bar">
        <div class="menu-bar-inner menu-bar-normal">
            <!--前进后退-->
            <div class="go-back">
                <a @click="goBack" class="back-btn"></a>
                <span class="separator-line">|</span>
                <a @click="goNext" class="next-btn"></a>
            </div>
            <!--类型查找-->
            <div class="type-filter">
                <div @click="filterAll">全部</div>
                <div @click="filterVideoHc" >视频回传</div>
                <div @click="filterImage">图片</div>
                <div @click="filterVideo">视频</div>
            </div>
            <!--条件查找-->
            <div class="condition-filter">
                <div @click="onlyMarked" class="onlyMarked">只看标记文件</div>
                <div @click="selectPeople" class="selectPeople">选择人员</div>
                <div @click="selectDate" class="selectDate">选择日期</div>
                <div @click="multipleHandle" class="multipleHandle">批量操作</div>
            </div>
        </div>
        <div class="multiple-menu-bar" v-show="multipleHandle" style="display: none">
            <span class="has-chose-count-box">已选
                <span class="has-choose">{{ hasSelectedNumber }}</span>个文件
                <span v-show="browserFolder">夹</span>
            </span>
            <div class="multiple-menu-btns">
                <button @click="multipleDelete" class="button">删除</button>
                <button @click="multipleMark" class="button">{{ allMarkedText }}</button>
                <span class="separator-line">|</span>
                <button @click="multipleSelect" class="button">{{ allSelectedText }}</button>
                <button @click="multipleCancel" class="button">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: {
        multipleHandle: false
    },
    methods: {
        goBack: function() {},
        goNext: function() {},
        onlyMarked: function() {},
        selectPeople: function() {},
        selectDate: function() {},
        multipleHandle: function() {},
        multipleDelete: function() {},
        multipleMark: function() {},
        multipleSelect: function() {},
        multipleCancel: function() {}
    },
    computed: {
        allMarkedText: function() {
            return "标记";
        },
        allSelectedText: function() {
            return "删除";
        },
        hasSelectedNumber: function() {
            return "5"
        }
    }
}
</script>

<style lang="scss" src="../../styles/scss/fm-menu-bar.scss"></style>
