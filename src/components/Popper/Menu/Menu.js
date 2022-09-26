import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hdeOnClick: PropTypes.bool,
};

function Menu({ items = [], children, onChange = defaultFn, hdeOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const RenderItem = current.data.map((item, index) => {
        const isParent = !!item.children;

        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        );
    });

    const RenderResult = (attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
            <PopperWrapper custom>
                {history.length > 1 && <Header title={current.title} custom onBack={handleBack} />}
                <div className={cx('menu-body')}>{RenderItem}</div>
            </PopperWrapper>
        </div>
    );

    // chuyển về menu trang đầu tiên
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            delay={[0, 700]}
            offset={[14, 8]}
            hideOnClick={hdeOnClick}
            interactive
            zIndex={999999999999999}
            placement="bottom-end"
            render={RenderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
