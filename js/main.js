(function () {
  window.$p = window.parent.$p;

  $p.NavTitle(['权限管理', {url: 'http://baidu.com', name: '角色管理'}]);

  // parent.layui.use(['layer', 'element'], function () {
  //   var layer = parent.layui.layer;
  //
  //   layer.alert('酷毙了', {icon: 1});
  //
  // });
})();