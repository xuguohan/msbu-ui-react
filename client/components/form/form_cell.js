import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './touch_fix.less';

/**
 * form wrapper for `Cell`
 *
 */
export default class FormCell extends Component {
    render() {
        const {
          className, children,
          radio, checkbox, vcode, warn,
          select, selectPos,
          ...others,
        } = this.props;
        const cellDomProps = Object.assign({}, others);
        delete cellDomProps.switch;
        const cls = classNames({
            'msbu-cell': true,
            'msbu-cell_vcode': vcode,
            'msbu-cell_warn': warn,
            'msbu-cell_switch': this.props.switch,
            'msbu-cell_select': select,
            'msbu-cell_select-before': selectPos == 'before',
            'msbu-cell_select-after': selectPos == 'after',
            'msbu-check__label': radio || checkbox,
            [className]: className
        });

        if(radio || checkbox) {
            return (
                <label className={cls} {...cellDomProps}>{children}</label>
            )
        }else{
            return (
                <div className={cls} {...cellDomProps}>{children}</div>
            );
        }
    }
};

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: PropTypes.bool,
    /**
     * display warn style of cell
     *
     */
    warn: PropTypes.bool,
    /**
     * if cell use for radio
     *
     */
    radio: PropTypes.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: PropTypes.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    switch: PropTypes.bool,
    /**
     * if cell use for select
     *
     */
    select: PropTypes.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: PropTypes.string,
};

FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    switch: false,
    selectPos: undefined
};