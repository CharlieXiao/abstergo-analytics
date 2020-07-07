import React from 'react';
import logo from '../img/plane-white.png'
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#/dashboard',
          children: [{ children: '概览', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '城市', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [

                // // 图片
                // {
                //   name: 'image0',
                //   className: 'item-image',
                //   children:
                //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                // },
                //titie
                {
                  name: 'title',
                  className: 'item-title',
                  children: '最低机票价格',
                  href: '#/city/minprice',
                },
                // //详细描述
                // {
                //   name: 'content',
                //   className: 'item-content',
                //   children: '查询城市到城市间所有特定时间所有的航班信息',
                // },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '平均机票价格',
                  href: '#/city/avgprice',
                },
              ],
            },
          },
          {
            name: 'sub2',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '各市航班数量',
                  href: '#/city/linenum',
                },
              ],
            },
          },
          {
            name: 'sub3',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '价格时间分布',
                  href: '#/city/timeprice',
                },
              ],
            },
          },
        ],
      },

      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '航班', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [

                {
                  name: 'title',
                  className: 'item-title',
                  children: '历史价格查询',
                  href: '#/flight/historyprice',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '航空公司信息',
                  href: '#/flight/companyinfo',
                },
              ],
            },
          },
          {
            name: 'sub2',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '航空公司起降数时间分布',
                  href: '#/flight/timecompanylinenum',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '新冠疫情专题', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [

                {
                  name: 'title',
                  className: 'item-title',
                  children: '机票价格变化',
                  href: '#/corona/price',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: '航班数量变化',
                  href: '#/corona/linenum',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '#/trivial',
          children: [{ children: '你知道吗？', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: '一个高效的页面动画解决方案',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '一站式机票数据分析平台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '将机票数据分析融进一个平台，进行统一管控',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '全面的数据分析、丰富的图表展示',
        className: 'title-content',
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: '数据规模' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万次' },
              toText: true,
              children: '1.83',
            },
            children: { className: 'feature6-text', children: '航班收录' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万条' },
              toText: true,
              children: '216.31',
            },
            children: { className: 'feature6-text', children: '价格信息' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '个' },
              toText: true,
              children: '39',
            },
            children: { className: 'feature6-text', children: '航空公司' },
          },
        ],
      },
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '116',
            },
            children: { className: 'feature6-text', children: '模型数据' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.17',
            },
            children: { className: 'feature6-text', children: '模型迭代数量' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: { className: 'feature6-text', children: '训练样本数量' },
          },
        ],
      },
    ],
  },
};


export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '数据采集',
            },
            { name: 'content', children: '具备专有数据来源通道，数据多元且综合，支持多维度交叉深度分析' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '数据分析',
            },
            {
              name: 'content',
              children: '提供快速查询和分析的能力，支持较大数量数据分析，提供可视化展示',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '辅助决策',
            },
            {
              name: 'content',
              children: '自助化数据分析，可为用户科研学习和日常生活提供数据分析参考',
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            <div className="ab-home-logo-container">
              <img src={logo} alt="logo" className="ab-home-logo-img" />
              <div className="ab-home-logo-text" >PaperPlane</div>
            </div>,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'A website dedicated to flight analysis.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'React' },
            { href: '#', name: 'link1', children: 'Spring Boot' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by PaperPlane Analytics All Rights Reserved
      </span>
    ),
  },
};
