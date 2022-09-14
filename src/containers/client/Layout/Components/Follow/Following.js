import { Component } from 'react';
import { connect } from 'react-redux';

import './Following.scss';
import * as actions from '../../../../../store/actions';
import useGetToken from '../../../../../components/hooks/useGetToken';
import { SkelotonFollow } from '../../../../../components/SkelotonLoading';

class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listFollow: [],
            listUser: [],
            listUserSuggest: [],

            page: 1,

            isOpenFollowAccount: true,
        };
    }

    componentDidMount() {
        const { getListFollowings, getSuggestedAccountLimitActionSite } = this.props;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const Token = useGetToken();

        getListFollowings(this.state.page, Token);
        getSuggestedAccountLimitActionSite(1, 10);
    }

    async componentDidUpdate(prevProps, nextProps, next) {
        if (prevProps.listFollow !== this.props.listFollow) {
            this.setState({
                ...this.state,
                listFollow: this.props.listFollow,
                isOpenFollowAccount: false,
            });
        }

        if (prevProps.listUserSuggestFollow !== this.props.listUserSuggestFollow || this.state.listFollow.length > 0) {
            if (this.props.listUserSuggestFollow.length > 0 && this.props.listFollow.length > 0) {
                const data = await this.handleDataBuild(
                    this.props.listUserSuggestFollow,
                    this.props.listFollow || this.state.listFollow,
                );

                this.setState({
                    ...this.state,
                    listUserSuggest: data,
                });
            }
        }
    }

    handleDataBuild = (ArrOne, ArrTwo) => {
        let Result;
        if (ArrOne.length > 0 && ArrTwo.length > 0) {
            Result = ArrOne.filter((data) => !ArrTwo.find((item) => item.id === data.id));
        }

        return Result;
    };

    render() {
        const { listFollow, isOpenFollowAccount, listUserSuggest } = this.state;

        return (
            <div className="following-wrapper">
                <div className="following-container container">
                    <div className="title">
                        <b></b>
                        <span>Tài khoản mà bạn đã Follow</span>
                        <b></b>
                    </div>
                    <div className="row">
                        {listFollow && listFollow.length > 0
                            ? listFollow.map((data) => (
                                  <div className="col-4 item-account" key={data.id}>
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
                            : isOpenFollowAccount && <SkelotonFollow />}
                    </div>
                    <div className="title-suggest">
                        <b></b>
                        <span>Tài khoản mà bạn có thể chưa biêt</span>
                        <b></b>
                    </div>
                    <div className="row">
                        {listUserSuggest &&
                            listUserSuggest.length > 0 &&
                            listUserSuggest.map((data) => (
                                <div className="col-4 item-account" key={data.id}>
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
                            ))}
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
