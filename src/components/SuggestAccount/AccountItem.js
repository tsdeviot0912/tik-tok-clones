import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import Preview from './Preview';
import { Wrapper } from '../Popper';
import Image from '../Image';

AccountItem.propTypes = {
    item: PropTypes.object.isRequired,
};

function AccountItem({ item = {}, isFollow = false }) {
    const PreviewAccount = () => {
        return (
            <Wrapper>
                <Preview data={item} />
            </Wrapper>
        );
    };

    return (
        <>
            {isFollow ? (
                <div className="wrapper-item">
                    <Image src={item.avatar} alt={item.nickname} />
                    <div>
                        <p>
                            <strong>
                                {item.nickname}
                                {item.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                            </strong>
                        </p>
                        <p>{`${item.first_name} ${item.last_name}`}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <Tippy interactive delay={[800, 20]} placement="bottom-start" render={PreviewAccount}>
                        <div className="wrapper-item">
                            <Image src={item.avatar} alt={item.nickname} />
                            <div>
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
