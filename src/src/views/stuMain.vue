<template>
        <div id = "stu_main">
       	   	<!---nav bar-->
	       	<div class = "content">
				<div class="list-block" id = "stu_menu">
				    <ul>
                        <a v-link="{path:'/stu_info'}" class = "menu_option">
					      	<li class="item-content item-link menu_option" id = "stu_info_menu">
					        	<div class="item-media"><i class="icon icon-f7"></i></div>
					        	<div class="item-inner">
					        		<div class="item-title">
					        			<span><i class = "iconfont stu_menu_icon">&#xe603;</i> 个人信息</span>
					        		</div>
					        	</div>
					        </li>
					    </a>
				    	<a v-link="{path:'/stu_hw'}" class = "menu_option">	
					      	<li class="item-content item-link menu_option" id = "stu_hw_menu">
					        	<div class="item-media"><i class="icon icon-f7"></i></div>
					        	<div class="item-inner">
					        		<div class="item-title">
					        			<span><i class = "iconfont stu_menu_icon">&#xe605;</i> 作业</span>
					        		</div>
					        	</div>
					        </li>
				      	</a>
				      	<a v-link="{path:'/stu_grade'}" class = "menu_option">
					        <li class="item-content item-link">
					        	<div class="item-media"><i class="icon icon-f7"></i></div>
					        	<div class="item-inner">
					        		<div class="item-title">
					        			<span> <i class = "iconfont stu_menu_icon">&#xe613;</i> 成绩</span>
					        		</div>
					        	</div>
					        </li>
					    </a>
                        <a class = "menu_option" v-link="{path:'/stu_evaluate'}">  
					        <li class="item-content item-link">
					        	<div class="item-media"><i class="icon icon-f7"></i></div>
					        	<div class="item-inner">
					        		<div class="item-title">
					        			<span> <i class = "iconfont stu_menu_icon">&#xe60b;</i> 评语</span>
					        		</div>
					        	</div>
					        </li>
				    	</a>
				    	<a class = "menu_option" v-link="{path:'/stu_honor'}" >
					        <li class="item-content item-link">
					        	<div class="item-media"><i class="icon icon-f7"></i></div>
					        	<div class="item-inner">
					        		<div class="item-title">
					        			<span> <i class = "iconfont stu_menu_icon">&#xe617;</i> 奖罚</span>
					        		</div>
					        	</div>
					        </li>
				    	</a>
				    </ul>
				</div>
					
				<div class = "content-block">
					<div class = "menu_option_overlay"></div>
					<div class = "init_menu_option_button" id = "index_button">
						<center class = 'iconlocation'>
                          	<i class = "iconfont index_icon ">&#xe618;</i>
                      	</center>  
					</div>
					<div class = "init_menu_option_button " id = "news_button">
                      	<center class = 'iconlocation'>
                          	<i class = "iconfont news_icon ">&#xe60f;</i>
                      	</center>  
					</div>
					<div class = "menu_option_button">
						<center class = "iconlocation">
							<i class = "iconfont self_menu_icon ">&#xe61b;</i>
						</center>
					</div>
					<div class = "init_menu_option_button" id = "activity_button">
						<center class = "iconlocation">
							<i class = "iconfont activity_icon">&#xe60e;</i>
						</center>
					</div>
					<div class = "init_menu_option_button" id = "notification_button">
						<center class = 'iconlocation'>
							<i class = "iconfont notification_icon">&#xe60a;</i>
						</center> 
					</div>
				</div>


        	</div>
        </div>

        <!-- stu info information page -->
        <div class = "page" id = "stu_info">
        	<header class = "bar bar-nav">
        		<a class="button button-link button-nav pull-left v-link="{path:'/home'}" menu_back" data-transition='slide-out'>
      				<span class="icon icon-left menu_back"></span>
    			</a>
    			<h1 class = "title">个人信息</h1>
        	</header>
	       	<div class = "content">

	       		<div class = "list-block">
	       			<ul>
	       				<li>
	       					<div class="item-content">
					          	<div class="item-media"><i class="icon icon-form-name"></i></div>
					          	<div class="item-inner">
					            	<div class="item-title label">姓名</div>
					            	<div class="item-input">
					              		<input type="text" id = "stu_name" disabled placeholder="Your name">
					            	</div>
					          	</div>
					        </div>
	       				</li>
	       				<li>
	       					<div class="item-content">
					          	<div class="item-media"><i class="icon icon-form-name"></i></div>
					          	<div class="item-inner">
					            	<div class="item-title label">学号</div>
					            	<div class="item-input">
					              		<input type="text" id = "stu_num" disabled placeholder="Your id">
					            	</div>
					          	</div>
					        </div>
	       				</li>
	       				<li>
	       					<div class="item-content">
					          	<div class="item-media"><i class="icon icon-form-name"></i></div>
					          	<div class="item-inner">
					            	<div class="item-title label">班级</div>
					            	<div class="item-input">
					              		<input type="text" id = "stu_class" disabled placeholder="Your class">
					            	</div>
					          	</div>
					        </div>
	       				</li>
	       			</ul>
	       		</div>
	       		<div class="content-block">
    				<p><a v-link="{path:'/update_pw''}" class="button button-big" id = "stu_update_pw">Update password</a></p>
    			</div>
				<div class = "content-block logout_content_block">
		       		<div class = "row">
		       			<div class = "col-100">
		       				<a id = "logout_submit" class="button button-big button-fill">退出登录</a>
		       			</div>
    	   			</div>
	       		</div>
	       	</div>
        </div>
</template>


<script>
    import $ from 'zepto'
    import StuMain from './stuMain.vue'
export default {
  ready () {
    console.log('Login into StuMain')
    $.init()
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.left_panel_select_input{
	color: white;
	background-color: #222426;
	border: 0 solid #282829;
	-moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius:5px;
    width: 20%;
    padding: 2%;
}

#submit_select_hw{
	color:white;
	background-color: #222426;
	border: 0;
	-moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius:5px;
    display: block;
}

a.menu_option{
	color:black;
	display:block;
}

a.menu_option div.item-inner{
	border-bottom: 1px solid #eee;
}

a.stu_hw_card{
	color:black;
}

#stu_menu{
	margin-top: 0;
}

#stu_menu ul a:nth-child(1), #stu_menu ul a:nth-child(1) li, #stu_menu ul a:nth-child(1) li div.item-inner{
	height: 4rem;
}

#stu_menu ul a, #stu_menu ul a li, #stu_menu ul li div.item-inner{
	height: 3rem;
}

#logout_submit{
	background-color: #15BBCF;
}

.stu_menu_icon{
	font-size: 1.4rem;
	color: #15BBCF;
}

#stu_menu ul a:nth-child(3) i.stu_menu_icon{
	font-size: 1.5rem;
}

#stu_menu ul a:nth-child(4) i.stu_menu_icon{
	font-size: 1.3rem;
}

.logo{
	width: 5rem;
	height: 5rem;
	background-color: #15BBCF;
	margin: auto;
	-webkit-border-radius: 2.5rem;
}

.logo_div{
	margin-top: 3rem;
	height:7.25rem;
}

.logo_div+div.list-block, #update_pw_list_block, #submit_pw{
	width: 14.5rem;
	margin-left: auto;
	margin-right: auto;
}
div.login_content_block{
	width: 16rem;
	margin-left: auto;
	margin-right: auto;
}
div.login_content_block #login_submit, #submit_pw{
	background-color: #15BBCF;
}

#stu_update_pw{
	width: 14.5rem;
	background-color: #15BBCF;
	color: white;
	margin-right: auto;
	margin-left: auto;
	border:0;
}

#subject_option, #stu_grade_time_selection, #stu_honor_time_selection,
#stu_grade_time_selection, .header_menu{
	font-size: 1.5rem;
	color: #15BBCF;
	font-weight: bold;
}

.menu_back{
	font-size: 1.5rem;
	font-weight: bold;
	color: #15BBCF;
}

.card_list ul{
	background-color: #EEEEF3;
}

.card_list ul li div.card{
	width: 15rem;
	margin-left: auto;
	margin-right: auto;
	-moz-border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    border-radius:0.4rem;
}

.card_list{
	margin-top: 0.5rem;
}

p.stu_hw_date{
	font-size: 0.5rem;
}

#stu_hw_left_panel_selection{
	width: 5rem;
}

#stu_hw_left_panel_overlay{
	margin-left: 5rem;
}

body.with-panel-left-reveal .page{
	transform: translate3d(5rem,0,0);
	-webkit-transform: translate3d(5rem,0,0);
}

div.stu_year_title{
	margin-top: 0.5rem;
	width: 8rem;
	margin-right: auto;
	margin-left: auto;
}

div#stu_grade_page div.content ul{
	background-color: #EEEEF3;
}

#stu_honor_select_button{
	width: 8rem;
	margin-left: auto;
	margin-right: auto;
}

.activity_icon{
	font-size: 1.3rem;
	color: white;
}

.index_icon{
	font-size: 1.3rem;
	color: white;
}

.news_icon{
	font-size: 1.3rem;
	color: white;
}

.notification_icon{
	font-size: 1.1rem;
	color: white;
}

.self_menu_icon{
	font-size: 0.9rem;
	color: white;
}

.mylocation{
  position:absolute;
  right: 1rem;
}

body.with_menu_option_selected div.menu_option_overlay{
	display: block;
}

.menu_option_button{
	margin-left: 12.6rem;
	width: 1.5rem;
	height: 1.5rem;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
}

.menu_option_button a.icon{
	font-size: 1rem;
	font-weight: bold;
	color: white;
}

.init_menu_option_button{
	margin-left: 12.6rem;
	width: 1.5rem;
	height: 1.5rem;
	background-color: #15BBCF; 
	border-radius: 1rem;
	-webkit-border-radius: 1rem;
	float: left;
	display: none;
	position: absolute;
	z-index: 9999;
	opacity: 0;
}


div[class^="menu_option_button_"]{
	width: 2rem;
	height: 2rem;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
	display: none;
}

.menu_option_button_index_final{
	float: left;
	margin-left: 12.35rem;
	margin-top: -3.5rem;
	position: absolute;
	z-index: 9999;
	width: 2rem;
	height: 2rem;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
	opacity: 1;
}

.menu_option_button_news_final{
	float: left;
	margin-left: 9.65rem;
	margin-top: -2.05rem;
	width: 2rem;
	height: 2rem;
	opacity: 1;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
	position: absolute;
	z-index: 9999;
}

.menu_option_button_activity_final{
	float: left;
	margin-left: 9.65rem;
	margin-top: 1.25rem;
	width: 2rem;
	height: 2rem;
	opacity: 1;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
	position: absolute;
	z-index: 9999;
}

.menu_option_button_notification_final{
	float: left;
	margin-left: 12.35rem;
	margin-top: 3rem;
	width: 2rem;
	height: 2rem;
	opacity: 1;
	background-color: #15BBCF; 
	-webkit-border-radius: 1rem;
	position: absolute;
	z-index: 9999;
}


body.with_menu_option_selected div[class^="menu_option_button"]{
	position: absolute;
	z-index: 9999;
}

.menu_option_overlay{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.1;
	z-index: 999;
	display: none;
}

@keyframes index_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to {
		margin-left: 12.35rem;
		margin-top: -3.5rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}


@-webkit-keyframes index_button_show_animate /* Safari 和 Chrome */
{	
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to {
		margin-left: 12.35rem;
		margin-top: -3.5rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}


@keyframes index_button_hide_animate{
	from {
		margin-left: 12.35rem;
		margin-top: -3.5rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to{
		margin-left: 12.6rem;
		margin-top: 0;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@-webkit-keyframes index_button_hide_animate{
	from {
		margin-left: 12.35rem;
		margin-top: -3.5rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to{
		margin-left: 12.6rem;
		margin-top: 0;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@keyframes news_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 9.65rem;
		margin-top: -2.05rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@-webkit-keyframes news_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 9.65rem;
		margin-top: -2.05rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@keyframes news_button_hide_animate{
	from {
		margin-left: 9.65rem;
		margin-top: -2.05rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-top: 0;
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@-webkit-keyframes news_button_hide_animate{
	from {
		margin-left: 9.65rem;
		margin-top: -2.05rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-top: 0;
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@keyframes activity_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 9.65rem;
		margin-top: 1.25rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@-webkit-keyframes activity_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 9.65rem;
		margin-top: 1.25rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@keyframes activity_button_hide_animate{
	from {
		margin-left: 9.65rem;
		margin-top: 0rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-left: 12.6rem;
		margin-top: -1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@-webkit-keyframes activity_button_hide_animate{
	from {
		margin-left: 9.65rem;
		margin-top: 0rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-left: 12.6rem;
		margin-top: -1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@keyframes notification_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 12.35rem;
		margin-top: 3rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@-webkit-keyframes notification_button_show_animate{
	from {
		margin-left: 12.6rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
	to{
		margin-left: 12.35rem;
		margin-top: 3rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
}

@keyframes notification_button_hide_animate{
	from {
		margin-left: 12.35rem;
		margin-top: 1rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-left: 12.6rem;
		margin-top: -1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

@-webkit-keyframes notification_button_hide_animate{
	from {
		margin-left: 12.35rem;
		margin-top: 1rem;
		width: 2rem;
		height: 2rem;
		opacity: 1;
	}
	to {
		margin-left: 12.6rem;
		margin-top: -1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
	}
}

.index_button_show{
	animation: index_button_show_animate 0.2s;
	-moz-animation: index_button_show_animate 0.2s;	/* Firefox */
    -webkit-animation: index_button_show_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: index_button_show_animate 0.2s;	/* Opera */
}

.index_button_hide{
	animation: index_button_hide_animate 0.2s;
	-moz-animation: index_button_hide_animate 0.2s;	/* Firefox */
    -webkit-animation: index_button_hide_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: index_button_hide_animate 0.2s;	/* Opera */
}

.news_button_show{
	animation: news_button_show_animate 0.2s;
	-moz-animation: news_button_show_animate 0.2s;	/* Firefox */
    -webkit-animation: news_button_show_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: news_button_show_animate 0.2s;	/* Opera */
}

.news_button_hide{
	animation: news_button_hide_animate 0.2s;
	-moz-animation: news_button_hide_animate 0.2s;	/* Firefox */
    -webkit-animation: news_button_hide_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: news_button_hide_animate 0.2s;	/* Opera */
}

.activity_button_show{
	animation: activity_button_show_animate 0.2s;
	-moz-animation: activity_button_show_animate 0.2s;	/* Firefox */
    -webkit-animation: activity_button_show_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: activity_button_show_animate 0.2s;	/* Opera */
}

.activity_button_hide{
	animation: activity_button_hide_animate 0.2s;
	-moz-animation: activity_button_hide_animate 0.2s;	/* Firefox */
    -webkit-animation: activity_button_hide_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: activity_button_hide_animate 0.2s;	/* Opera */
}

.notification_button_show{
	animation: notification_button_show_animate 0.2s;
	-moz-animation: notification_button_show_animate 0.2s;	/* Firefox */
    -webkit-animation: notification_button_show_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: notification_button_show_animate 0.2s;	/* Opera */
}

.notification_button_hide{
	animation: notification_button_hide_animate 0.2s;
	-moz-animation: notification_button_hide_animate 0.2s;	/* Firefox */
    -webkit-animation: notification_button_hide_animate 0.2s;	/* Safari 和 Chrome */
    -o-animation: notification_button_hide_animate 0.2s;	/* Opera */
}

</style>    

