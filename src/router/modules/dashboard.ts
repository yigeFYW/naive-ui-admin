import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/router/constant';
import { MainView } from '@/layout/components/Main'
import { DashboardOutlined } from '@vicons/antd'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const routeName = 'dashboard'

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/console',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: renderIcon(DashboardOutlined),
      permission: ['dashboard_console', 'dashboard_console', 'dashboard_workplace']
    },
    children: [
      {
        path: 'console',
        name: `${ routeName }_console`,
        meta: {
          title: '主控台',
          permission: ['dashboard_console']
        },
        component: () => import('@/views/dashboard/console/console.vue')
      },
      // {
      //   path: 'monitor',
      //   name: `${ routeName }_monitor`,
      //   meta: {
      //     title: '监控页',
      //     permission: ['dashboard_monitor']
      //   },
      //   component: () => import('@/views/dashboard/monitor/monitor.vue')
      // },
      {
        path: 'workplace',
        name: `${ routeName }_workplace`,
        meta: {
          title: '工作台',
          keepAlive:true,
          permission: ['dashboard_workplace']
        },
        component: () => import('@/views/dashboard/workplace/workplace.vue')
      }
    ]
  }
]

export default routes
