<template>
    <div class="main-wrap">
        <div class="main-inner">
            <div class="main-inner-wrap">
                <div class="main-box">
                    <sideBar></sideBar>
                    <mainArea></mainArea>
                </div>
            </div>
        </div>
        <div class="main-blank" v-show="cannotFindDirectory"></div>
    </div>
</template>
<script>
import sideBar from './sideBar.vue'
import mainArea from './mainArea.vue'

export default {
  data: {

  },
  components: {
        sideBar,
        mainArea
  },
  methods: {

  },
  computed: {
	  cannotFindDirectory: function() {
	  	return false
      }
  }
}
</script>

<style lang="scss">
    @import "../../styles/scss/variables.scss";

    .main-wrap {
        height: calc(100% - 121px);
        position: relative;
    }
    .main-inner {
        height: 100%;

        .main-inner-wrap {
            width: 100%;
            height: 100%;
            padding: 15px;
            overflow: hidden;
            background: #f0f2f6;
        }
        .main-box {
            width: 100%;
            height: 100%;
            border-radius: $borderRadius;
            display: flex;
            justify-content: flex-start;
            box-shadow: 0 2px 4px 0 rgba(10, 10, 10, .14);
            position: relative;
            overflow: hidden;
            background-color: #fff ;
        }
    }
    .main-blank {
        width:100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
