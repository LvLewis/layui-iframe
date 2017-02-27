'use strict';

layui.use(['layer', 'element'], function () {
  var layer = layui.layer
    , element = layui.element()
    , frame = {};

  window.$ = layui.jquery;

  // 监听导航点击
  element.on('nav(menu)', function (elem) {
    /*var parentText;

     parentText = elem.parent().parent('.layui-nav-item').find('.menu-title').text();*/

    $('#lps-iframe').attr('src', elem.attr('lps-menu'));

  });

  /**
   * 面包屑导航
   * @param params
   * @param setting
   * @constructor
   */
  frame.NavTitle = function (params, setting) {
    var htmlStr = '', set = setting || {};

    if (set.hide) {
      return $('.lps-breadcrumb').addClass('layui-hide');
    } else {
      $('.lps-breadcrumb').removeClass('layui-hide');
    }

    // htmlStr = '<a href="javascript:void(0);" url="pages/welcome.html">首页<span class="layui-box">&gt;</span></a>';

    if (!_.isEmpty(params)) {
      _.map(params, function (val, index) {
        var tFirst, tLast;

        if (params.length === index + 1) {
          tFirst = '<cite>';
          tLast = '</cite></a>';
        } else {
          tFirst = '';
          tLast = '<span class="layui-box">&gt;</span></a>';
        }

        if (_.isObject(val)) {
          htmlStr += '<a href="javascript:void(0);" url="' + val.url + '">' + tFirst + val.name + tLast;
        } else {
          htmlStr += '<a href="javascript:void(0);">' + tFirst + val + tLast;
        }
      });
      $('.layui-breadcrumb').html(htmlStr);
    }

    // 监听面包屑导航点击
    $('.lps-breadcrumb a').on('click', function () {
      var url = $(this).attr('url');
      if (!_.isEmpty(url)) {
        $('#lps-iframe').attr('src', url);
      }
    });
  };

  // 初始化欢迎页面
  frame.NavTitle(null, {hide: true});

  window.$p = frame;

});

