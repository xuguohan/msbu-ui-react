import React from 'react';
import classNames from 'classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
class Mask extends React.Component {
    render() {
        const {transparent, className, ...others} = this.props;
        const clz = classNames({
            'msbu-mask': !transparent,
            'msbu-mask_transparent': transparent
        }, className);

        return (
            <div className={clz} {...others}></div>
        );
    }
}

Mask.propTypes = {
    /**
     * Whather mask should be transparent (no color)
     *
     */
    transparent: React.PropTypes.bool
};

Mask.defaultProps = {
    transparent: false
};

export default Mask;