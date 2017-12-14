import React, {Component} from 'react';
import {Animated,Easing,Platform} from  'react-native'

export class AnimationDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeAnimation: new  Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnimation,
            {
                toValue: 1,
                duration:(Platform.OS === 'ios')? 4000:1000,
            }
        ).start();
    }

    render(){
        return(
          <Animated.View
              style={{
                  ...this.props.style,
                  opacity: this.state.fadeAnimation,
              }}
          >
              {this.props.children}
          </Animated.View>
        );
    }
}