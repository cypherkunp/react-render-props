import React, { Component } from 'react';

class Mouse extends Component {
    state = { x: 0, y: 0 };

    handleOnMouseMove = event => {
        this.setState({ x: event.clientX, y: event.clientY });
    };

    render() {
        return (
            <div
                style={{
                    cursor: 'pointer',
                    height: '100%',
                    width: '100%'
                }}
                onMouseMove={this.handleOnMouseMove}
            >
                <span>
                    X: {this.state.x} | Y: {this.state.y}
                </span>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;
