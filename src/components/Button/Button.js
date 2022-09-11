import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outLine: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    sizeS: PropTypes.bool,
    sizeL: PropTypes.bool,
    rounded: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    custom: PropTypes.string,
    onClick: PropTypes.func,
};

function Button({
    primary,
    outLine,
    text,
    disabled = false,
    sizeS = false,
    sizeL = false,
    rounded = false,
    to,
    href,
    children,
    custom,
    onClick,
    ...propsAdd
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...propsAdd,
    };

    // remove event button when is disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const clases = cx('wrapper', {
        primary,
        outLine,
        sizeS,
        sizeL,
        text,
        disabled,
        rounded,
    });

    return (
        <Component className={clases} {...props}>
            <span className={cx(custom)}>{children}</span>
        </Component>
    );
}

export default Button;
