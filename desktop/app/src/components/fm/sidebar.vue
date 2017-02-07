<template>
    <div id="sidebar" class="sidebar">
        <div class="sidebar-inner">
            <div class="folder-list">
                <div class="folder-item" @click="openFolder">
                    <div class="icon-folder"></div>
                    <div class="folder-info">
                        <div class="folder-name">{{ folderName }}</div>
                        <div class="folder-children-count">{{ subFolderCount }}</div>
                    </div>
                </div>
            </div>
            <div class="folder-count">共 {{ folderCount }} 项</div>
        </div>
        <div class="sidebar-blank" ></div>
    </div>
</template>

<script>
export default  {
    data: {

    },
    methods: {
        openFolder: function() {
        	console.log("you click me!");
        }
    },
    computed: {
		folderCount: function() {
			return 2;
        },
		folderName: () => {
			return "nihao"
        },
		subFolderCount: () => {
			return 2
        }
    }

}
</script>

<style lang="scss" src="../../styles/scss/sidebar.scss">

</style>