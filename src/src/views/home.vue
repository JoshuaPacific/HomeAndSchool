<template>
<div class="content home" action="refresh" distance="55" v-pull-to-refresh>
  <v-layer></v-layer>
  <v-bar
    type="tab"
    :class-name="bar.className">
    <v-tab-item :options="bar"></v-tab-item>
  </v-bar>
  <div class="card-container">
    <v-card-container v-for="task in tasks | orderBy 'created' -1"
    :style="{backgroundColor: task.status === '1' ? 'white': 'rgb(224, 224, 224)' }">
      <card type="content">
        <list type="media">
            <li class="item-content">
              <item type="media">
                <img :src=source width="44">
              </item>
              <item type="inner">
                <item type="title-row">
                  <item type="text">{{task.title}}</item>
                  <item type="text">{{task.created | date 2}}</item>
                </item>
              </item>
            </li>
        </list>
      </card>
      <card type="footer" >
        <div style="color:gray">
        Recent Touching：{{task.advertiser}}
        <span style="margin-left: 1rem;padding: .1rem;border: 1px solid #929292;" :style="{color: task.status === '1' ? 'green': 'gray' }">{{task.status === '0' ? 'Praise' : 'Educate'}}</span>
        </div>
        <span :style="{color: task.status === '1' ? 'orange': 'gray',fontWeight:'bold'}">{{task.read_profit}} score</span>
      </card>
    </v-card-container>
  </div>
</div>
</template>

<script>
import $ from 'zepto'
import VBar from '../components/Bar'
import VTabItem from '../components/BarTabItem'
import VLayer from '../components/PullToRefreshLayer'
import VCardContainer from '../components/Card'
import Btn from '../components/Button'
import Card from '../components/CardItem'
import VContent from '../components/Content'
import List from '../components/List'
import Item from '../components/ListItem'

export default {
  ready () {
    console.log('home ready')
    $.init()
  },
  data () {
    return {
      bar: {
        items: [
          {
            path: '/home/rank',
            icon: 'star',
            label: 'Parents'
          },
          {
            path: '/home/tasks',
            icon: 'computer',
            label: 'Teachers'
          },
          {
            path: '/home/invite',
            icon: 'friends',
            label: 'Students'
          }
        ],
        activeClass: 'inactive',
        className: 'home-bar'
      },
      tasks: [],
      source:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"
    }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  methods: {
    refresh () {
      setTimeout(function () {
        let num = this.length + 1
        let title = `标题${num}`
        let adv = `abc${num}`
        let point = 100 + num - 1
        this.tasks.push({
          id: num,
          title: title,
          adv: adv,
          point: point
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
      }.bind(this), 1500)
    }
  },
  components: {
    VBar,
    VTabItem,
    VLayer,
    VCardContainer,
    Card,
    VContent,
    List,
    Item,
    Btn
  },
  route: {
    data ({to, next}) {
      return this.$http.get('tasks.json')
      .then(({data: {code, message, data}})=>{
        this.tasks = data
      })
    }
  }
}
</script>

<style>
.home {
  top: -2.2rem !important;
}
.home-bar {
  background: #efeff4;
  height: 3.6rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.home-bar .tab-item {
  height: 3.6rem;
  background-color: white;
}
</style>
