import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import Launch from './components/Launch'
import Register from './components/Register'
import Login from './components/Login'
import Login2 from './components/Login2'
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import Error from './components/Error'
import Home from './components/Home'
import TabView from './components/TabView'


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}
const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class App extends Component {
  render() {
    return (<Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={false}>
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE}/>
                    <Scene key="launch" component={Launch} title="Launch" initial={true} style={{flex:1, backgroundColor:'transparent'}}/>
                    {/* <Scene key="register2" component={Register} title="Register2" duration={1}/>
                    <Scene key="login" direction="vertical">
                        <Scene key="loginModal" component={Login} schema="modal" title="Login"/>
                        <Scene key="loginModal2" hideNavBar={true} component={Login2} title="Login2"/>
                    </Scene>
                    <Scene key="tabbar" tabs={true} >
                        <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                            <Scene key="tab1_1" component={TabView} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
                            <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{color:'black'}}/>
                        </Scene>
                        <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
                            <Scene key="tab2_1" component={TabView} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
                            <Scene key="tab2_2" component={TabView} title="Tab #2_2"/>
                        </Scene>
                        <Scene key="tab3" component={TabView} title="Tab #3" hideTabBar={true} icon={TabIcon}/>
                        <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar={true} icon={TabIcon}/>
                        <Scene key="tab5" component={TabView} title="Tab #5" icon={TabIcon} />
                    </Scene>*/}
                </Scene>
                <Scene key="error" component={Error}/>
            </Scene>
        </Router>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
