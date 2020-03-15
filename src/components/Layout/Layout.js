import React from 'react';
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar open={this.toggleSideDrawerHandler}/>
                <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;