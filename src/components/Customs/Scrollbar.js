import { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
// import ScrollArea from 'react-scrollbar';
import ScrollArea from 'react-scrollbar';

class CustomScrollbars extends Component {
    render() {
        return (
            <Scrollbars
                onScroll={this.handleScroll}
                onScrollFrame={this.handleScrollFrame}
                onScrollStart={this.handleScrollStart}
                onScrollStop={this.handleScrollStop}
                onUpdate={this.handleUpdate}
                renderView={this.renderView}
                renderTrackHorizontal={this.renderTrackHorizontal}
                renderTrackVertical={this.renderTrackVertical}
                renderThumbHorizontal={this.renderThumbHorizontal}
                renderThumbVertical={this.renderThumbVertical}
                autoHide={true}
                autoHideTimeout={700}
                autoHideDuration={200}
                autoHeightMin={500}
                autoHeightMax={600}
                thumbMinSize={30}
                universal={true}
                scrolling={'etst'}
                {...this.props}
            />
        );
    }
}

const ScrollCustom = (props, { children }) => {
    return (
        <ScrollArea {...props} speed={0.8} className="area height-100vh" contentClassName="content" horizontal={true}>
            {children}
        </ScrollArea>
    );
};

export { CustomScrollbars, ScrollCustom };
