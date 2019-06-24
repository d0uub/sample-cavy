//
//  Login
//  Project
//
//  Created by Roy.
//  Copyright © 2018 HA. All rights reserved.
//

import { Image, TouchableOpacity, TextInput, Text, StyleSheet, View } from "react-native"
import React from "react"
import { hook } from 'cavy';


class Login extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
		  login: '',
		  password: ''
		}
	  }

	_onChangeText(value) {
		this.setState(value);
		// this.props.onChange(value);
	}


	componentDidMount() {
	
	}

	onLoginPressed = () => {
		const { navigate } = this.props.navigation
		if (this.state.login=="abc" && this.state.password=="def") {
			navigate("Folder1")
		} else {
			//console.warn("invalid password")
			error={error:"invalid user ID : "+this.state.login}
			this.setState(error)
		}
	}

	render() {
	
		return <View
				style={styles.loginView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/bg.png")}
						style={styles.bgImg}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 45,
						right: 44,
						top: 100,
						bottom: 0,
						alignItems: "center",
					}}>
					<View
						style={styles.logoView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/group-3.png")}
								style={styles.group3Img}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/oval-5--oval-5--oval-5-mask.png")}
								style={styles.oval5Oval5Oval5MaskImg}/>
						</View>
					</View>
					<Text
						style={styles.passwordManagerTxt}>Password Manager</Text>
					<View
						style={styles.usernameView}>
						<View
							style={styles.group2View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-6-5.png")}
									style={styles.rectangle6Img}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<TextInput
									ref={this.props.generateTestHook('Scene.Login')}
									onChangeText={(value) => this._onChangeText({login:value})}
									value={this.state.login}
									autoCorrect={false}
									style={styles.gunaLayersComTextInput}/>
							</View>
						</View>
						<Text
							style={styles.usernameTxt}>Username</Text>
					</View>
					<View
						style={styles.passwordView}>
						<Text
							style={styles.passwordTxt}>Password</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 32,
								marginTop: 7,
							}}>
							<Image
								source={require("./../../assets/images/rectangle-6-5.png")}
								style={styles.rectangle6TwoImg}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 7,
									right: 11,
									top: 10,
									height: 15,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<TextInput
									ref={this.props.generateTestHook('Scene.Password')}
									onChangeText={(value) => this._onChangeText({password:value})}
									value={this.state.password}
									autoCorrect={false}
									secureTextEntry={true}
									style={styles.passwordCodeTextInput}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/eye.png")}
									style={styles.eyeImg}/>
							</View>
						</View>
					</View>
					<Text
						style={styles.forgotPasswordTxt}>Forgot Password?</Text>
					<TouchableOpacity
						ref={this.props.generateTestHook('Scene.LoginButton')}
						onPress={this.onLoginPressed}
						style={styles.loginBtn}>
						<Text
							style={styles.loginBtnText}>	Login</Text>
					
					</TouchableOpacity>
					<Text >{this.state.error}</Text>

					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.donTHaveAnAccounTxt}>Don't have an account? </Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 528,
	},
	logoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 32,
		height: 33,
		marginLeft: 1,
	},
	group3Img: {
		backgroundColor: "transparent",
		resizeMode: "center",
		height: 33,
		marginRight: 1,
	},
	oval5Oval5Oval5MaskImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		height: 32,
	},
	passwordManagerTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 1,
		marginTop: 16,
	},
	usernameView: {
		backgroundColor: "transparent",
		width: 220,
		height: 54,
		marginTop: 25,
	},
	group2View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 22,
		height: 32,
	},
	rectangle6Img: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 32,
	},
	gunaLayersComTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 80,
		height: 12,
		marginLeft: 8,
	},
	usernameTxt: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 74,
		top: 0,
	},
	passwordView: {
		backgroundColor: "transparent",
		width: 220,
		height: 54,
		marginTop: 16,
		alignItems: "flex-start",
	},
	passwordTxt: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangle6TwoImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 32,
	},
	passwordCodeTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 180,
		height: 14,
		marginTop: 1,
	},
	eyeImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 13,
		height: 13,
	},
	forgotPasswordTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 137,
		height: 19,
		marginRight: 1,
		marginTop: 6,
	},
	loginBtn: {
		backgroundColor: "rgb(0, 140, 255)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 220,
		height: 37,
		marginTop: 11,
	},
	loginBtnImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	loginBtnText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	donTHaveAnAccounTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 178,
	},
})

const TestableScene = hook(Login);
export default TestableScene;