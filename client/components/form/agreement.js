import React from 'react';
import classNames from 'classnames';
require('./agreement.scss');

/**
 * Agreement style checkbox
 *
 */
const Agreement = (props) => {
    const { className, children, id, ...others } = props;
    const cls = classNames({
        'msbu-agree': true,
        [className]: className
    });

    return (
        <label className={cls} htmlFor={id}>
            <input id={id} type="checkbox" className="msbu-agree__checkbox" {...others}/>
            <span className="msbu-agree__text">
                {children}
            </span>
        </label>
    );
};

export default Agreement
