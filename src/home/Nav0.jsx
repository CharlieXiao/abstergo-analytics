import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from './utils';
import logo from "../img/plane-white.png"

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      // children:a 取别名，转换成其他形式
      const { children: a, subItem, ...itemProps } = item;
      // 当存在有子选项时
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          {/* 跳转连接 */}
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      // 单元素动效组件
      <TweenOne
        // 需要替换的组件
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className='header0 home-page-wrapper'
        // {...dataSource.wrapper}
        {...props}
      >
        <div
          // {...dataSource.page}
          // className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
          // 当手机访问时转换为列表模式
          className={`home-page${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            // {...dataSource.logo}
            className="header0-logo"
          >
            {/* logo设置 */}
            {/* <img width="100%" src={abstergo_logo} alt="img" className="ab-logo-home"/> */}
            <div className="ab-home-logo-container">
              <img src={logo} alt="logo" className="ab-home-logo-img" />
              <div className="ab-home-logo-text" >Abstergo</div>
            </div>
          </TweenOne>
          {/* 手机模式下显示 */}
          {isMobile && (
            <div
              // {...dataSource.mobileMenu}
              className="header0=mobile-menu"
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            // {...dataSource.Menu}
            className="header0-menu"
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              selectedKeys ={[]}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
