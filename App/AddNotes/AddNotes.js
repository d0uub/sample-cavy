//
//  AddNotes
//  Project
//
//  Created by Roy.
//  Copyright © 2018 HA. All rights reserved.
//

import { StyleSheet, Image, View, Text } from "react-native"
import React from "react"


export default class AddNotes extends React.Component {

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
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.addNotesView}>
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
						left: 15,
						right: 15,
						top: 18,
						bottom: 17,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 17,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/icon-arrow-left.png")}
							style={styles.iconArrowLeftImg}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/icon-star.png")}
							style={styles.iconStarImg}/>
						<Image
							source={require("./../../assets/images/icon-trash.png")}
							style={styles.iconTrashImg}/>
					</View>
					<Text
						style={styles.addSecureNoteTwoTxt}>Add Secure Note</Text>
					<View
						style={styles.nameView}>
						<Text
							style={styles.nameTxt}>Name</Text>
						<View
							style={styles.inputView}>
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangle6SevenImg}/>
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
								<Text
									style={styles.officeWifiTxt}>Office Wifi</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.noteTypeView}>
						<View
							style={styles.group6FiveView}>
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangle6SixImg}/>
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
								<View
									pointerEvents="box-none"
									style={{
										height: 12,
										marginLeft: 8,
										marginRight: 15,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text
										style={styles.wifiPasswordTxt}>Wifi - Password</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/chevron-down.png")}
										style={styles.chevronDownImg}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.noteTypeTxt}>Note Type</Text>
					</View>
					<View
						style={styles.ssidView}>
						<Text
							style={styles.ssidTxt}>SSID</Text>
						<View
							style={styles.group6FourView}>
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangle6FiveImg}/>
							</View>
							<Text
								style={styles.layers23Txt}>LAYERS23</Text>
						</View>
					</View>
					<View
						style={styles.connectionTypeView}>
						<View
							style={styles.group6ThreeView}>
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangle6FourImg}/>
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
								<Text
									style={styles.nTxt}>802.11n</Text>
							</View>
						</View>
						<Text
							style={styles.connectionTypeTxt}>Connection Type</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.connectionModeView}>
						<View
							style={styles.group6TwoView}>
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangle6ThreeImg}/>
							</View>
							<Text
								style={styles.wpa2Txt}>WPA2</Text>
						</View>
						<Text
							style={styles.connectionModeTxt}>Connection Mode</Text>
					</View>
					<View
						style={styles.authenticationView}>
						<Text
							style={styles.authenticationTxt}>Authentication</Text>
						<View
							style={styles.group6View}>
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
									source={require("./../../assets/images/rectangle-6.png")}
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
								<Text
									style={styles.herokuShhTxt}>Heroku SHH</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.addSecureNoteView}>
					<Image
						source={require("./../../assets/images/rectangle-6-4.png")}
						style={styles.rectangle6TwoImg}/>
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
							source={require("./../../assets/images/rectangle-8.png")}
							style={styles.rectangle8Img}/>
					</View>
					<Text
						style={styles.addSecureNoteTxt}>Add Secure Note</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	addNotesView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 528,
	},
	iconArrowLeftImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 14,
		marginTop: 1,
	},
	iconStarImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 17,
		marginRight: 23,
	},
	iconTrashImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 17,
	},
	addSecureNoteTwoTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 1,
		marginTop: 21,
	},
	nameView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		marginTop: 25,
		alignItems: "flex-start",
	},
	nameTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	inputView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 32,
		marginTop: 7,
	},
	rectangle6SevenImg: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 32,
	},
	officeWifiTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	noteTypeView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		marginTop: 16,
	},
	group6FiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 22,
		height: 32,
	},
	rectangle6SixImg: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 32,
	},
	wifiPasswordTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	chevronDownImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 6,
	},
	noteTypeTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		position: "absolute",
		left: 0,
		width: 49,
		top: 0,
	},
	ssidView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		marginTop: 24,
		alignItems: "flex-start",
	},
	ssidTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	group6FourView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 32,
		marginTop: 7,
	},
	rectangle6FiveImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 32,
	},
	layers23Txt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 8,
		width: 46,
		top: 11,
	},
	connectionTypeView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		marginTop: 16,
	},
	group6ThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 22,
		height: 32,
	},
	rectangle6FourImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 32,
	},
	nTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 8,
	},
	connectionTypeTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		position: "absolute",
		left: 0,
		width: 84,
		top: 0,
	},
	connectionModeView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		marginBottom: 16,
	},
	group6TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 22,
		height: 32,
	},
	rectangle6ThreeImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 32,
	},
	wpa2Txt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 8,
		width: 23,
		top: 11,
	},
	connectionModeTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		position: "absolute",
		left: 0,
		width: 90,
		top: 0,
	},
	authenticationView: {
		backgroundColor: "transparent",
		height: 54,
		marginLeft: 1,
		marginRight: 1,
		alignItems: "flex-start",
	},
	authenticationTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
	},
	group6View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 32,
		marginTop: 7,
	},
	rectangle6Img: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 32,
	},
	herokuShhTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	addSecureNoteView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 51,
	},
	rectangle6TwoImg: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.14,
		position: "absolute",
		left: 0,
		right: 1,
		top: 0,
		height: 35,
	},
	rectangle8Img: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 48,
	},
	addSecureNoteTxt: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 129,
		top: 19,
	},
})
