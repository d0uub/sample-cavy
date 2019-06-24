//
//  App.js
//  Project
//
//  Created by Roy.
//  Copyright © 2018 HA. All rights reserved.
//

import Home from "./App/Home/Home"
import { createStackNavigator, createAppContainer } from "react-navigation"
import React from "react"
import Folder1 from "./App/Folder1/Folder1"
import AddNotes from "./App/AddNotes/AddNotes"
import Login from "./App/Login/Login"
import { Tester, TestHookStore } from 'cavy';
import AppSpec from './AppSpec';

const testHookStore = new TestHookStore();

const PushRouteOne = createStackNavigator({
	Login: {
		screen: Login,
	},
	Folder1: {
		screen: Folder1,
	},
	Home: {
		screen: Home,
	},
	AddNotes: {
		screen: AddNotes,
	},
}, {
	initialRouteName: "Login",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	render() {
		return (
		<Tester specs={[AppSpec]} store={testHookStore}>
        <AppContainer/>
      </Tester>
		)
	}
}
