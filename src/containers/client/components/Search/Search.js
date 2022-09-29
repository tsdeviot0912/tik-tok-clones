import className from 'classnames/bind';
import { useState, useRef, useEffect, useMemo } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import { SearchIcon, LoadingIcon } from '../../../../components/Icons';
import { useDebounce } from '../../../../components/hooks';
// import * as searchService from '../../../services/searchService';
import Renderresult from './RenderResult';
import { SearchUserAndVideo } from '../../../../services/AppServices';
import * as actions from '../../../../store/actions';

const cx = className.bind(styles);

Search.propTypes = {};

function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputElementRef = useRef();
    const button = useRef();
    const history = useNavigate();
    const dispatch = useDispatch();

    // handle user nhap liên tục value chánh hiện tương bắn required liên tục lên máy chủ
    const debounceValue = useDebounce(searchText, 500);

    const RenderItemAccount = useMemo(
        () => (attrs) => {
            return (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-account-title')}>Tài khoản </h4>
                        <Renderresult searchResults={searchResults} />
                    </PopperWrapper>
                </div>
            );
        },
        [searchResults],
    );

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const results = await SearchUserAndVideo(debounceValue, 'less');

            setLoading(false);

            if (results && results.data.length > 0) {
                setSearchResults(results.data);
            } else {
                setSearchResults([]);
            }
        };

        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        inputElementRef.current.focus();
        setSearchResults([]);
        setSearchText('');
    };

    const handleHidenResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchInput = e.target.value;

        if (!searchInput.startsWith(' ')) {
            setSearchText(searchInput);
        }
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        setShowResult(false);
        history(`/customer/search/${debounceValue || searchText}`);
        dispatch(actions.searchUserAndVideoNodataSuccess(''));
    };

    return (
        /* 
            Using a wrapper <div> tag around the reference element solves
            this by creating a new parentNode context. 
        */
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResults.length > 0}
                render={RenderItemAccount}
                onClickOutside={handleHidenResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputElementRef}
                        value={searchText}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => handleChange(e)}
                        onFocus={() => setShowResult(true)}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleSubmitSearch(e);
                            }
                        }}
                    />
                    {!!searchText && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <div className={cx('loading')}>
                            <LoadingIcon className={cx('loading-rotate')} />
                        </div>
                    )}
                    <button ref={button} className={cx('search-btn')} onMouseDown={(e) => handleSubmitSearch(e)}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
