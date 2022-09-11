import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '../../assets/img';

const Image = forwardRef(({ src, className, fallback: customFallback = images.Noimg, ...props }, ref) => {
    const [_fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            {...props}
            onError={handleError}
            alt=""
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
