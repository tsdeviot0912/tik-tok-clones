import PropTypes from 'prop-types';
import { memo } from 'react';
import AccountItem from './AccountItem';

import './SuggestAccount.scss';

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeAll: PropTypes.func,
};

SuggestAccount.defaultProps = {
    label: '',
    data: [],
    onSeeAll: () => {},
};

function SuggestAccount({ label, data, onSeeAll }) {
    return (
        <div className="wrapper-suggest-account">
            <div className="suggest-account">
                <p className="title">{label}</p>
                <div className="suggest-account-body">
                    {data && data.length > 0 && data.map((user, index) => <AccountItem key={index} item={user} />)}
                </div>
                <p className="see-more" onClick={onSeeAll}>
                    Xem thêm
                </p>
            </div>
        </div>
    );
}

export default memo(SuggestAccount);
