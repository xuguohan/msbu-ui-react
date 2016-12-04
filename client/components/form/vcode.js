import React from 'react';
import classNames from 'classnames';
require('./vcode.scss');
/**
 * image wrapper for vcode
 *
 */
const VCode = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'msbu-vcode-img': true,
        [className]: className
    });

    return (
        <div>
            <img className={cls} {...others}/>
        </div>
    );
};

export default VCode
