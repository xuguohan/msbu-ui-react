import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * msbu wrapper for textarea
 *
 */
export default class TextArea extends Component {
    state = {
        textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
    };

    handleChange(e){
        this.setState({textCounter: e.target.value.length});

        //forward event to props if any
        if(this.props.onChange) this.props.onChange(e);
    }

    render(){
        const { className, children, showCounter, maxlength, onChange, ...others } = this.props;
        const cls = classNames({
            'msbu-textarea': true,
            [className]: className
        });

        return (
            <div>
                <textarea
                className={cls}
                maxLength={maxlength}
                onChange={this.handleChange.bind(this)}
                {...others}>
                    {children}
                </textarea>
                {
                    showCounter ?
                    <div className="msbu-textarea-counter">
                        <span>{this.state.textCounter}</span>{maxlength ? '/' + maxlength : false}
                    </div>
                    : false
                }
            </div>
        );
    }
};

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: PropTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
};

TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};