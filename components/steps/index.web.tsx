import React from 'react';
import RcSteps from 'rc-steps';
import './style/index.web';
import classNames from 'classnames';

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
  current?: number;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step = (RcSteps as any).Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0,
  };

  render() {
    const { children } = this.props;
    const newChildren = React.Children.map(children, (item: any, index) => {
      let className = '';

      if (index < children.length - 1 && children[index + 1].props.status === 'error') {
        className = 'error-tail';
      }

      let icon = item.props.icon;

      className = classNames(className, item.props.className);

      return React.cloneElement(item, { icon, className });
    });
    return <RcSteps {...this.props}>{newChildren}</RcSteps>;
  }
}
