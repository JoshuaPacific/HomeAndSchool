<template>
<div id="login">
    <v-bar 
       type="nav"
       :class-name="bar.className">
    <v-btn types="link nav" class-name="pull-left back" data-transition='slide-out'> 
         <span class="icon icon-left menu_back"></span> 
     </v-btn>
<a class="icon icon-menu pull-right header_menu"></a>
        <h1 class='title'>Login</h1>
    </v-bar>

    <v-content>
        <v-content type="block" class-name="logo_div">
            <div class = "logo"></div>
        </v-content>
        <v-list type="block">
            <li>
                <v-item type="content">
                    <v-item type="media">
                        <i class="icon icon-form-name"></i>
                    </v-item>
                    <v-item type="inner">
                        <v-item type="title" class-name="label">
                            ID
                        </v-item>
                        <v-item type="input">
                            <input type="text" placeholder="id">
                        </v-item>
                    </v-item>
                </v-item>
            </li>
            <li>
                <v-item type="content">
                    <v-item type="media">
                        <i class="icon icon-form-password"></i>
                    </v-item>
                    <v-item type="inner">
                        <v-item type="title" class-name="label">
                            PassWord
                        </v-item>
                        <v-item type="input">
                            <input type="password" placeholder="password">
                        </v-item>
                    </v-item>
                </v-item>
            </li>
        </v-list>
        
        <v-content type="block" class-name="login_content_block"> 
            <div class= "row">
                <div id = "login_submit" class = "col-100 button button-big button-fill login"
                v-on:click="PopupVarieties">
                    login
		        </div>
            </div>
        </v-content>

    </v-content>
</div>
</template>

<script>
import $ from 'zepto'
import VBar from '../components/Bar'
import VBtn from '../components/Button'
import VContent from '../components/Content'
import VList from '../components/List'
import VItem from '../components/ListItem'

import Vue from 'vue'

Vue.transition(
    'bounce', {
      enterClass: 'bounceInLeft',
      leaveClass: 'bounceOutRight'
    }
)

export default {
  ready () {
    console.log('Login ready')
    $.init()
  },
  data () {
    return {
      bar:{
        className:'login-bar'
          }
    }
  },
  methods:{
    PopupVarieties:function(){
   	var buttons1 = [
	        {
	          	text: '请选择',
	          	label: true
	        },
	        {
	            text: '家长',
	            onClick: function() {
		            $.alert("以家长身份登录");
	            }
	        },
	        {
	            text: '学生',
	            onClick: function() {
	            	$.alert("以学生身份登录");
                    router.go("/stu_main");
	            }
	        },
	        {
	          	text: '教师',
	          	onClick: function() {
	            	$.alert("以教师身份登录");
	          	}
	        },
        ];
      	var buttons2 = [
	        {
	          	text: '取消',
	          	bg: 'danger'
	        }
      	];
        var groups = [buttons1, buttons2];
      	$.actions(groups);            
    }
  },

  components:{
    VBar,
    VBtn,
    VContent,
    VList,
    VItem
   ,Vue
  }
}

</script>

<style>
.login-bar {
  background: #efeff4;
  height: 3.6rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.menu_back{
	font-size: 1.5rem;
	font-weight: bold;
	color: #15BBCF;
}
 .header_menu{
	font-size: 1.5rem;
	color: #15BBCF;
	font-weight: bold;
}
.logo_div{
	margin-top: 3rem;
	height:7.25rem;
}

.logo_div+div.list-block{
	width: 14.5rem;
	margin-left: auto;
	margin-right: auto;
}
div.login_content_block{
	width: 16rem;
	margin-left: auto;
	margin-right: auto;
}
div.login_content_block #login_submit{
	background-color: #15BBCF;
}
</style>

