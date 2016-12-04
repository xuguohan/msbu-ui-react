import React from 'react';
import classNames from 'classnames';
require('./switch.scss');

/**
 * msbu switch style for checkbox
 *
 */
const Switch = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'msbu-switch': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="msbu-icon-checked"></span>
        </div>
    );
};

export default Switch
