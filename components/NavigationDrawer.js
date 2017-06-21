import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import TabView from './TabView';
import Launch from './Launch';
import ControlPanel from './ControlPanel';
const propTypes = {
  navigationState: PropTypes.object,
};

class NavigationDrawer extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        type="overlay"
        content={<Launch />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
         <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;
