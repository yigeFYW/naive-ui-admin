const setting = {
  //导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式
  navMode: 'vertical',
  //导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏
  navTheme: 'dark',
  //顶部
  headerSetting: {
    //背景色
    bgColor: '#fff',
    //固定顶部
    fixed: true,
    //显示重载按钮
    isReload: true
  },
  //页脚
  showFooter:true,
  //多标签
  multiTabsSetting: {
    //背景色
    bgColor: '#fff',
    //是否显示
    show: true,
    //固定多标签
    fixed: true,
  },
  //菜单
  menuSetting: {
    //最小宽度
    minMenuWidth: 64,
    //菜单宽度
    menuWidth: 200,
    //固定菜单
    fixed: true
  },
  //面包屑
  crumbsSetting: {
    //是否显示
    show: true,
    //显示图标
    showIcon: false,
  },
  //菜单权限模式 ROLE 前端固定角色  BACK 动态获取
  permissionMode: 'ROLE',
}
export default setting;
