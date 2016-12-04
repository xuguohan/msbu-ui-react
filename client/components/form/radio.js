import React from 'react';
import classNames from 'classnames';
require('./radio.scss');
/**
 * msbu wrapper for radio
 *
 */
const Radio = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'msbu-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="radio" {...others}/>
            <span className="msbu-icon-checked"></span>
        </div>
    );
};

export default Radio
