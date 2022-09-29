import Skeleton from 'react-loading-skeleton';

export const LoadingHome = () => {
    return (
        <div className="height-100vh overflow-hidden">
            <Skeleton height={50}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={700}></Skeleton>
                <Skeleton
                    height={220}
                    width={100}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={50}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={700}></Skeleton>
                <Skeleton
                    height={220}
                    width={100}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={50}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={700}></Skeleton>
                <Skeleton
                    height={220}
                    width={100}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={50}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={700}></Skeleton>
                <Skeleton
                    height={220}
                    width={100}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
            <Skeleton height={50}></Skeleton>
            <div className="d-flex overflow-hidden mt-2">
                <Skeleton height={220} width={700}></Skeleton>
                <Skeleton
                    height={220}
                    width={100}
                    style={{
                        marginLeft: 14,
                    }}
                ></Skeleton>
            </div>
        </div>
    );
};

export const SkeLotonSlider = () => {
    return (
        <>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
            <div className="d-flex overflow-hidden">
                <Skeleton height={32} width={32} className="test-ting-radius"></Skeleton>
                <Skeleton height={32} width={1000} className="mx-2"></Skeleton>
            </div>
        </>
    );
};

export const SkelotonFollow = () => (
    <div className="d-flex justify-content-between align-items-center overflow-hidden">
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
        <Skeleton height={330} className="mx-2 d-block max-w-100" width={260}></Skeleton>
    </div>
);

export const SkelotonLoading = () => (
    <div>
        <div className="d-flex align-items-center">
            <Skeleton height={116} width={116} className="border-radius-50"></Skeleton>
            <div>
                <Skeleton width={200} count={3} className="my-2 mx-3"></Skeleton>
            </div>
        </div>
        <Skeleton width={400} count={2} className="my-2"></Skeleton>
    </div>
);

export const SkeletonLoadingSearchPage = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <Skeleton height={60} width={60} className="border-radius-50"></Skeleton>
                <div>
                    <Skeleton height={80} width={780} className="my-2 mx-3 border-radius-40"></Skeleton>
                </div>
            </div>
        </div>
    );
};
