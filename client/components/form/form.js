import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

require('./form_common.scss');

/**
 * msbu wrapper for form
 *
 */
class Form extends Component {
    render() {
        const { children, className, radio, checkbox, ...others } = this.props;
        const cls = classNames({
            'msbu-cells': true,
            'msbu-cells_form': !radio && !checkbox,
            'msbu-cells_radio': radio,
            'msbu-cells_checkbox': checkbox,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};

Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: PropTypes.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: PropTypes.bool
};

Form.defaultProps = {
    radio: false,
    checkbox: false
};

export default Form;