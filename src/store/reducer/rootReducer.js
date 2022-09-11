/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import appReducer from './appReducer';
import userReducer from './userReducer';
import AccountReducer from './AccountReducer';
import SiteReducer from './SiteReducer';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'admin',
    whitelist: ['isLoggedIn', 'userInfo', 'language', 'token'],
    blacklist: ['roleId'],
};

const appPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language'],
};

export default () =>
    combineReducers({
        app: persistReducer(appPersistConfig, appReducer),
        user: persistReducer(userPersistConfig, userReducer),
        AccountReducer: AccountReducer,
        SiteReducer: SiteReducer,
    });
