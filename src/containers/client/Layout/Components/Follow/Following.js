import { Component } from 'react';
import { connect } from 'react-redux';

import './Following.scss';
import * as actions from '../../../../../store/actions';
import useGetToken from '../../../../../components/hooks/useGetToken';
import { SkelotonFollow } from '../../../../../components/SkelotonLoading';
import _ from 'lodash';
import { emitter } from '../../../../../utils/emitter';

class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listFollow: [...this.props.listFollow],
            listUser: [],
            listUserSuggest: [],

            MetaAccount: {},

            page: 1,

            isOpenFollowAccount: true,
        };
    }

    componentDidMount() {
        const { getSuggestedAccountLimitActionSite } = this.props;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // const Token = useGetToken();

        getSuggestedAccountLimitActionSite(this.state.page, 10);
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

        if (prevProps.MetaAccount !== this.props.MetaAccount) {
            this.setState({
                MetaAccount: this.props.MetaAccount,
            });
        }
    }

    handleDataBuild = (ArrOne, ArrTwo) => {
        let Result = [];
        if (ArrOne.length > 0 && ArrTwo.length > 0) {
            Result = ArrOne.filter((data) => !ArrTwo.find((item) => item.id === data.id));
        }

        return [...Result];
    };

    handleRenderData = (ArrOne, ArrTwo) => {
        const data = this.handleDataBuild(ArrOne, ArrTwo);

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
                                      <button className="btn btn-follow mx-1">Follow</button>
                                      <button className="btn btn-follow mx-1">xem Profile</button>
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

    render() {
        const { listFollow, isOpenBtnSeeMore, listUserSuggest } = this.state;

        return (
            <div className="following-wrapper">
                <div className="following-container container">
                    <div className="title">
                        <b></b>
                        <span>Tài khoản mà bạn đã Follow</span>
                        <b></b>
                    </div>
                    <div className="row">
                        {listFollow && listFollow.length > 0 ? (
                            listFollow.map((data) => (
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
                                            <button className="btn btn-follow">xem Profile</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h3>Bạn chưa follow người nào cả</h3>
                        )}
                        <div className="my-4 see-more-btn">
                            <div className="text text-center" onClick={this.handleSeeMoreAccountFollow}>
                                <span>Xem thêm</span>
                            </div>
                        </div>
                    </div>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listFollow: state.SiteReducer.listFollow,
        listUserSuggestFollow: state.SiteReducer.listUserSuggestFollow,
        MetaAccount: state.AccountReducer.MetaAccount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListFollowings: (page, token) => dispatch(actions.getListFollowings(page, token)),
        getSuggestedAccountLimitActionSite: (page, per_Page) =>
            dispatch(actions.getSuggestedAccountLimitActionSite(page, per_Page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
