<template>
      <div class = "page page-current" id = "stu_evaluate_page">
            <header class = "bar bar-nav">
                <a class="button button-link button-nav pull-left v-link="{path:'/stu_main'}" data-transition='slide-out'>
                    <span class="icon icon-left menu_back"></span>
                </a>
                <a class="icon icon-menu pull-right header_menu" id = "stu_grade_time_selection">
                    <i class = "iconfont"></i> 
                </a>
                <h1 class = "title">评语</h1>
            </header>
            <div class = "content">
                <div class="content-block-title stu_year_title" id = "content_block_title_stu_evaluate_year">2015-2016学年 第二学期</div>
                <v-list class-name="card_list" id="stu_evaluate_list">
                <div class="list-container">
                    <template v-for="card in cards | orderBy 'created' -1">
                        <li>
                            <v-card>
                                <card-item type="header">
                                    {{card.header}} 
                                </card-item>
                                <card-item type="content">
                                    <card-item type="content-inner">
                                     {{card.content}}
                                    </card-item>
                                </card-item>
                            </v-card>
                        </li>
                     
                    </template>
                </div>
                </v-list>
               </div>
            </div>
        </template>


<script>
import $ from 'zepto'
import VCard from '../components/Card'
import VList from '../components/List'
import CardItem from '../components/CardItem'
import Home from './home'
                
export default {
  ready () {
    console.log('Evaluate ready')
    $.init()
  },
  data () {
    return {
      cards: []
    }
  },
  components: {
    VCard,
    VList,
    CardItem
  },
  route: {
    data ({to, next}) {
      return this.$http.get('homeworks.json')
      .then(({data: {code, message, data}})=>{
        this.cards= data
      })
    }
  }
}
</script>
        
