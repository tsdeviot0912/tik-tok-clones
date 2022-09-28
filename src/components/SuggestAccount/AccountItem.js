import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import Preview from './Preview';
import { Wrapper } from '../Popper';
import Image from '../Image';

AccountItem.propTypes = {
    item: PropTypes.object.isRequired,
};

function AccountItem({ item = {}, isFollow = false, isHiddenTippy = false }) {
    const history = useNavigate();

    const PreviewAccount = () => {
        return (
            <Wrapper>
                <Preview data={item} />
            </Wrapper>
        );
    };

    const handleClickRedirect = (nickname, id) => {
        history(`/profile/@${nickname}/${id}`);
    };

    return (
        <>
            {isFollow ? (
                <div className="wrapper-item" onClick={() => handleClickRedirect(item.nickname, item.id)}>
                    <Image src={item.avatar} alt={item.nickname} />
                    <div className="jsx-ds-er-ser-account-item">
                        <p>
                            <strong>
                                {item.nickname}
                                {item.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                            </strong>
                        </p>
                        <p>{`${item.first_name} ${item.last_name}`}</p>
                    </div>
                </div>
            ) : isHiddenTippy ? (
                <div>
                    <div className="wrapper-item" onClick={() => handleClickRedirect(item.nickname, item.id)}>
                        <Image src={item.avatar} alt={item.nickname} />
                        <div className="jsx-ds-er-ser-account-item">
                            <p>
                                <strong>
                                    {item.nickname}
                                    {item.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                </strong>
                            </p>
                            <p>{`${item.first_name} ${item.last_name}`}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Tippy interactive delay={[800, 200000000]} placement="bottom-start" render={PreviewAccount}>
                        <div className="wrapper-item" onClick={() => handleClickRedirect(item.nickname, item.id)}>
                            <Image src={item.avatar} alt={item.nickname} />
                            <div className="jsx-ds-er-ser-account-item">
                                <p>
                                    <strong>
                                        {item.nickname}
                                        {item.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                    </strong>
                                </p>
                                <p>{`${item.first_name} ${item.last_name}`}</p>
                            </div>
                        </div>
                    </Tippy>
                </div>
            )}
        </>
    );
}

export default AccountItem;
