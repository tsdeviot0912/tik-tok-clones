import { Component } from 'react';
import { connect } from 'react-redux';

import './Following.scss';
import * as actions from '../../../../../store/actions';
import useGetToken from '../../../../../components/hooks/useGetToken';
import { SkelotonFollow } from '../../../../../components/SkelotonLoading';
import _ from 'lodash';
import { emitter } from '../../../../../utils/emitter';
import ItemVideo from '../HomePage/ItemVideo';
import Button from '../../../../../components/Button';
import ModalRender from '../../../../../components/Popper/Modal';
import { Link } from 'react-router-dom';
class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listFollow: [...this.props.listFollow],
            listUser: [],
            listUserSuggest: [],
            listVideoLimitFollow: [],
            MetaVideoTypeFollow: {},
            type: 'following',
            pageVideos: 1,
            metaFollow: {},

            MetaAccount: {},
            isOpenModal: false,
            isOpenBtnSeeMore: true,
            isOpenBtnSeeMoreFollow: true,
            page: 1,
            isOpenModalRequired: false,

            isOpenFollowAccount: true,

            WindowScollY: 0,
            HeightPage: 0,
        };
    }

    async componentDidMount() {
        document.title = 'TikTok - Following';

        const { getSuggestedAccountLimitActionSite, getVideoLimitType, isLoggedIn } = this.props;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const Token = await useGetToken();

        getSuggestedAccountLimitActionSite(this.state.page, 10, Token);

        if (isLoggedIn) {
            getVideoLimitType(this.state.type, this.state.pageVideos, Token);
        }

        window.addEventListener('scroll', this.listenScrollEventFollow);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    async componentDidUpdate(prevProps, nextProps, next) {
        if (prevProps.listFollow !== this.props.listFollow) {
            this.setState({
                ...this.state,
                listFollow: [...this.state.listFollow, ...this.props.listFollow],
                isOpenFollowAccount: false,
                isOpenBtnSeeMore: true,
            });
        }

        if (prevProps.listUserSuggestFollow !== this.props.listUserSuggestFollow) {
            this.setState({
                ...this.state,
                listUserSuggest: [...this.state.listUserSuggest, ...this.props.listUserSuggestFollow],
            });
        }

        if (prevProps.listVideoLimitFollow !== this.props.listVideoLimitFollow) {
            this.setState({
                listVideoLimitFollow: [...this.state.listVideoLimitFollow, ...this.props.listVideoLimitFollow],
            });
        }

        if (prevProps.MetaVideoTypeFollow !== this.props.MetaVideoTypeFollow) {
            this.setState({
                MetaVideoTypeFollow: this.props.MetaVideoTypeFollow,
            });
        }

        if (prevProps.MetaAccount !== this.props.MetaAccount) {
            this.setState({
                MetaAccount: this.props.MetaAccount,
            });
        }

        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            const { getVideoLimitType } = this.props;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const Token = useGetToken();

            getVideoLimitType(this.state.type, this.state.pageVideos, Token);
        }

        if (prevProps.detailOneVideo !== this.props.detailOneVideo) {
            const DataBuild =
                this.state.listVideoLimitFollow &&
                this.state.listVideoLimitFollow.length > 0 &&
                this.state.listVideoLimitFollow.map((data) => {
                    if (!_.isEmpty(data.user) && data.uuid === this.props.detailOneVideo.uuid) {
                        return this.props.detailOneVideo;
                    }

                    return data;
                });

            this.setState({
                listVideoLimitFollow: DataBuild,
            });
        }
    }

    listenScrollEventFollow = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.setState({
                WindowScollY: Math.floor(window.innerHeight + window.scrollY),
            });
        }

        if (this.state.HeightPage !== document.documentElement.scrollHeight) {
            this.setState({
                HeightPage: Math.floor(document.documentElement.scrollHeight),
            });
        }
    };

    handleDataBuild = (ArrOne) => {
        let Result = [];
        if (ArrOne && ArrOne.length > 0) {
            Result = ArrOne.filter((data) => !data.is_followed);
        }

        return [...Result];
    };

    handleRenderData = (ArrOne, ArrTwo) => {
        const data = this.handleDataBuild(ArrOne);

        return (
            <>
                {data && data.length > 0
                    ? data.map((data) => (
                          <div className="col-4 item-account" key={data.nickname}>
                              <div
                                  style={{
                                      backgroundImage: `url(${data.avatar})`,
                                  }}
                                  className="following-content"
                              >
                                  <div className="following-overlay"></div>
                                  <div className="avatar">
                                      <img
                                          src={data.avatar}
                                          alt="https://files.fullstack.edu.vn/f8-tiktok/users/13/630267176b15c.jpg"
                                      />
                                  </div>
                                  <div className="body">
                                      <p>
                                          <strong>{data.nickname}</strong>
                                      </p>
                                      <span>{`${data.first_name} ${data.last_name}`}</span>
                                  </div>
                                  <div className="overlay-element">
                                      <button
                                          className="btn btn-follow mx-1"
                                          onClick={() => this.handleFollowBtn(data)}
                                      >
                                          Follow
                                      </button>
                                      <Link
                                          to={`/profile/@${data.nickname}/${data.id}`}
                                          className="btn btn-follow mx-1"
                                      >
                                          xem Profile
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      ))
                    : this.state.isOpenFollowAccount && <SkelotonFollow />}
            </>
        );
    };

    handleSeeMoreSuggest = () => {
        const { getSuggestedAccountLimitActionSite } = this.props;

        const { MetaAccount } = this.state;

        if (!_.isEmpty(MetaAccount)) {
            if (this.state.page < MetaAccount.pagination.total_pages) {
                this.setState({
                    page: this.state.page + 1,
                });
                getSuggestedAccountLimitActionSite(this.state.page + 1, 10);
            }
            if (this.state.page === +MetaAccount.pagination.total_pages - 1) {
                this.setState({
                    isOpenBtnSeeMore: false,
                });
            }
        }
    };

    handleSeeMoreAccountFollow = () => {
        emitter.emit('PAGE_CURRENT_FOLLOWS', (data) => {
            console.log('check data emait :', data);
        });
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.listenScrollEventFollow);
    };

    handleToggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    };

    handleClickHeart = (uuid, token, toggle) => {
        const { likeOneVideo, unLikeOneVideo } = this.props;

        if (!toggle) {
            likeOneVideo(uuid, token);
        } else {
            unLikeOneVideo(uuid, token);
        }
    };

    handleSeeMoreAccountFollowVideo = () => {
        const Token = useGetToken();

        if (
            !_.isEmpty(this.state.MetaVideoTypeFollow) &&
            this.state.pageVideos === this.state.MetaVideoTypeFollow.total_pages
        ) {
            this.setState({
                isOpenBtnSeeMoreFollow: true,
            });
        } else {
            this.props.getVideoLimitType(this.state.type, this.state.pageVideos + 1, Token);
        }
    };

    handleFollowBtn = async (data) => {
        const { isLoggedIn, followingAccount } = this.props;

        const Token = useGetToken();

        if (isLoggedIn) {
            followingAccount(data && data.id ? data.id : '', Token);
        } else {
            this.handleToggleModal();
        }

        const dataBuild =
            this.state.listUserSuggest &&
            this.state.listUserSuggest.length > 0 &&
            // eslint-disable-next-line array-callback-return
            this.state.listUserSuggest.map((item) => {
                if (item.id === data.id) {
                    item.is_followed = true;
                }

                return item;
            });

        this.setState({
            listUserSuggest: dataBuild,
        });
    };

    render() {
        const { listFollow, isOpenBtnSeeMore, listUserSuggest, listVideoLimitFollow } = this.state;

        return (
            <div className="following-wrapper">
                <div className="following-container container">
                    {this.props.isLoggedIn ? (
                        <>
                            <div className="title">
                                <b></b>
                                <span>Video Tài khoản đã theo dõi</span>
                                <b></b>
                            </div>
                            <div>
                                {listVideoLimitFollow &&
                                    listVideoLimitFollow.length > 0 &&
                                    listVideoLimitFollow.map((data, index) => (
                                        <ItemVideo
                                            isFollow={true}
                                            handleClickHeart={this.handleClickHeart}
                                            handleToggleModal={this.handleToggleModal}
                                            key={index}
                                            data={data}
                                        />
                                    ))}
                                {!_.isEmpty(this.state.MetaVideoTypeFollow) &&
                                this.state.pageVideos === this.state.MetaVideoTypeFollow.total_pages ? (
                                    ''
                                ) : (
                                    <div className="my-4 see-more-btn">
                                        <div
                                            className="text text-center"
                                            onClick={this.handleSeeMoreAccountFollowVideo}
                                        >
                                            <span>Xem thêm</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="my-4 d-flex justify-content-center" onClick={this.handleToggleModal}>
                            <Button primary>Đăng Nhập Để Xem Video Những Người Theo Dõi</Button>
                        </div>
                    )}

                    <div className="title-suggest">
                        <b></b>
                        <span>Tài khoản mà bạn có thể chưa biêt</span>
                        <b></b>
                    </div>
                    <div className="row">
                        {this.handleRenderData(listUserSuggest, listFollow)}
                        {isOpenBtnSeeMore && (
                            <div className="my-4 see-more-btn">
                                <div className="text text-center" onClick={this.handleSeeMoreSuggest}>
                                    <span>Xem thêm</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.isOpenModal && (
                    <ModalRender handleToggleModal={this.handleToggleModal} isOpen={this.state.isOpenModal} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listFollow: state.SiteReducer.listFollow,
        listUserSuggestFollow: state.SiteReducer.listUserSuggestFollow,
        MetaAccount: state.AccountReducer.MetaAccount,
        listVideoLimitFollow: state.SiteReducer.listVideoLimitFollow,
        MetaVideoTypeFollow: state.SiteReducer.MetaVideoTypeFollow,
        detailOneVideo: state.SiteReducer.detailOneVideo,
        isLoggedIn: state.user.isLoggedIn,
        detailFollowAndUnFollow: state.SiteReducer.detailFollowAndUnFollow,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListFollowings: (page, token) => dispatch(actions.getListFollowings(page, token)),
        getSuggestedAccountLimitActionSite: (page, per_Page, Token) =>
            dispatch(actions.getSuggestedAccountLimitActionSite(page, per_Page, Token)),
        getVideoLimitType: (type, page, token) => dispatch(actions.getVideoLimitType(type, page, token)),
        likeOneVideo: (uuid, token, type, page) => dispatch(actions.likeOneVideo(uuid, token, type, page)),
        unLikeOneVideo: (uuid, token) => dispatch(actions.unLikeOneVideo(uuid, token)),
        followingAccount: (id, token) => dispatch(actions.followingAccount(id, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
