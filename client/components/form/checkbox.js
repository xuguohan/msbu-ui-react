import React from 'react';
import classNames from 'classnames';

require('./checkbox.scss');

/**
 * msbu wrapper for checkbox
 *
 */
const Checkbox = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'msbu-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="msbu-icon-checked"></span>
        </div>
    );
};

export default Checkbox
