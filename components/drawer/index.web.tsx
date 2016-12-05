import React from 'react';
import RcDrawer from 'rc-drawer';
import tsPropsType from './PropsType';
import './style/index.web';

export default class Drawer extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
  };
  render() {
    return <RcDrawer {...this.props} />;
  }
}
