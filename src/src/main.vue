<template>
    <div class="page-group">
        <div class="page page-current">
            <v-bar type="tab" v-if="isIndex"> 
                <v-tab-item :options="options"></v-tab-item>
            </v-bar>
            <router-view class="animated" transition="routeview"  keep-alive></router-view>
        </div>
    </div>
</template>

<script>
import VBar from './components/Bar'
import VTabItem from './components/BarTabItem'

export default {
  ready () {
        this.options.items = [
        {
          path: '/home',
          icon: 'home',
          label: 'Home'
        },
        {
        path: '/login',
          icon: 'me',
          label: 'Login'
        }
        ]
    },
  data () {
      return {
         title: '首页',
         isIndex:true,
         options: {
         items: [],
         activeClass: 'active'
         }
      }
  },

  components: {
                    VBar,
                    VTabItem
              }
    }

</script>

<style lang='less'>
@import './animate.css';
/*[v-cloak] {
display: none;
}
.fade-transition {
transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
opacity: 0;
}
 */
.routeview-transition:extend(.slideInLeft){
transition: all 1s ease;
}

.routeview-enter{
    opacity: 0;
}

.routeview-leave{
    opacity:0;
}

[v-cloak] {
  display: none;
}
</style>
