'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARTrackingTargets,
    ViroArScene,
    ViroMaterials,
    ViroVideo,
    ViroMaterialVideo
} from 'react-viro';

var createReactClass = require('create-react-class');

var ARTruck = createReactClass({
    getInitialState: function () {
        return {
            loopState: false,
            animationName: "01",
            pauseUpdates: false,
            playAnim: false,
            modelAnim: false,
        };
    },
    render: function () {
        return (
            <ViroARScene>
                <ViroARImageMarker target={"poster"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
                    <ViroVideo
                        source={require('./res/Cab_tilt_down.mp4')}
                        height={2}
                        width={2}
                        loop={true}
                        position={[0, 2, -5]}
                        dragType={FixedToWorld}
                        paused={this.pauseUpdates}
                        play={this.playAnim
                    />
                </ViroARImageMarker>
            </ViroARScene>
        );
    },
    _onFinish() {
        this.setState({
            animationName: "02",
            loopState: true,
        })
    },

    _onAnchorFound() {
        this.setState({
            pauseUpdates: true,
            playAnim: true,
            modelAnim: true,
        })
    },
});

ViroARTrackingTargets.createTargets({
    "poster": {
        source: require('./res/Cab_tilt_down_First_Frame.png'),
        orientation: "Up",
        physicalWidth: 0.6096 // real world width in meters
    }
});

module.exports = ARTruck;
