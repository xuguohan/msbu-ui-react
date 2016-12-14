import React, { PropTypes } from 'react';
import './Page.less';

const Page = React.createClass({
  PropTypes: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any,
    isIndex: PropTypes.bool,
    logo: PropTypes.string,
    style: PropTypes.object,
  },
  getDefaultProps() {
    return {
      logo: '',
      title: '',
      subtitle: '',
      isApp: 0,
      style: {},
    };
  },
  componentDidMount() {
    this.initScroller();
  },
  componentWillUnmount() {
    if (this.props.isIndex) {
      window.scrolltopNumber = document.querySelector('.am-demo-page').scrollTop;
    }
  },
  initScroller() {
    /* eslint prefer-template: 0 */
    this.refs.demoPage.style.height = document.documentElement.clientHeight + 'px';
    this.refs.demoPage.style.overflowY = 'scroll';
    if (this.props.isIndex) {
      document.querySelector('.am-demo-page').scrollTop = window.scrolltopNumber;
    } else {
      document.querySelector('.am-demo-page').scrollTop = 0;
    }
  },
  render() {
    const { children, style } = this.props;
    /* eslint prefer-template: 0 */
    return (
      <section className="am-demo-page" ref="demoPage" style={style}>
        <div className="am-demo-bd">
          {children}
        </div>
      </section>
    );
  },
});

export default Page;
