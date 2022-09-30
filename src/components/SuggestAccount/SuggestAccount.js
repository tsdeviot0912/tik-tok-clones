import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { SkeLotonSlider } from '../SkelotonLoading';

import AccountItem from './AccountItem';
import './SuggestAccount.scss';

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeAll: PropTypes.func,
    setFollowEnded: PropTypes.bool,
    isFollow: PropTypes.bool,
    isHiddenTippy: PropTypes.bool,
};

SuggestAccount.defaultProps = {
    label: '',
    data: [],
    onSeeAll: () => {},
    followEnded: false,
    isHiddenTippy: false,
    isFollow: false,
};

function SuggestAccount({ label, data, onSeeAll, isFollow = false, isHiddenTippy = false, followEnded = false }) {
    const history = useNavigate();

    const onRedireact = () => {
        history(`/customer/following`);
    };

    return (
        <div className="wrapper-suggest-account">
            <div className="suggest-account">
                <p className="title">{label}</p>
                <div className="suggest-account-body">
                    {data && data.length > 0 ? (
                        data.map((user, index) => (
                            <div key={index}>
                                <div className="pc-max-lg">
                                    <AccountItem
                                        isFollow={isFollow}
                                        key={index}
                                        item={user}
                                        isHiddenTippy={isHiddenTippy}
                                    />
                                </div>
                                <div className="pc-min-lg">
                                    <AccountItem isFollow={isFollow} key={index} item={user} isHiddenTippy={true} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <SkeLotonSlider />
                        </>
                    )}
                </div>
                {!followEnded ? (
                    <p className="see-more" onClick={onSeeAll}>
                        Xem thêm
                    </p>
                ) : (
                    <p className="see-more text-center" onClick={onRedireact}>
                        Click đễ xem những tài khoản đề xuất
                    </p>
                )}
            </div>
        </div>
    );
}

export default SuggestAccount;
