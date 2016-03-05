import Home from './views/home'
import Login from './views/login' 
import StuMain from './views/stuMain'
import StuInfo from './views/stuInfo'
import StuHw from './views/stuHw'
import StuGrade from './views/stuGrade'
import StuEvaluate from './views/stuEvaluate'
import StuHonor from './views/stuHonor'
import $ from 'zepto'

export default function (router) {
  router.map({
    '/home': {
      component: Home
    },
    '/login':{
        component:Login
    },
    '/stu_main':{
        component:StuMain
    },
    '/stu_info':{
        component:StuInfo 
    },
    '/stu_hw':{
        component:StuHw
    },
    '/stu_grade':{
        component:StuGrade
    },
    '/stu_evaluate':{
        component:StuEvaluate
    },
    '/stu_honor':{
        component:StuHonor
    }
  })
  router.redirect({
    '/': '/home'
  })

  router.beforeEach(function ({to, from, next}) {
    let toPath = to.path;
    let fromPath = from.path;
    console.log('to: ' + toPath + ' from: ' + fromPath);
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false;
    }
    else{
      router.app.isIndex = true;
	}
    next();
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`);
    $.refreshScroller()
  })
}
