export const path = {
    redirect: '/',
    default: '/customer/*',
    client: '/client/*',
    home: '/home',
    follow: '/following',
    profile: '/profile/@:nickname/:id',
    detailVideo: '/video-details-with-id-and-user/:uuid',
    detailVideoCopy: '/video-details-with-id-and-user/:uuid/:view',
    upLoadVideo: '/upload/*',
    profileMe: 'profile/me-tai-khoan-cua-toi',
    logout: '/logout',
    search: '/search/:q',
    sliDebar: {
        follow: '/customer/following',
        live: '/customer/live',
    },
};
