import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
require('./select.scss');
/**
 * msbu wrapper for select
 *
 */
export default class Select extends Component {
    renderData(data) {
        return data.map((item,i) => (
            <option
                key={i}
                value={item.value}
                {...item}
            >
                {item.label}
           </option>
        ));
    }

    render() {
        const { className, data, children, ...others } = this.props;
        const cls = classNames({
            'msbu-select': true,
            [className]: className
        });

        return (
            <select className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </select>
        );
    }
};

Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: PropTypes.array
};

Select.defaultProps = {
  data: []
};
