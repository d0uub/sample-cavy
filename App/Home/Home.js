//
//  Home
//  Project
//
//  Created by Roy.
//  Copyright © 2018 HA. All rights reserved.
//

import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import React from "react"


export default class Home extends React.Component {

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

	onOval2Pressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("AddNotes")
	}

	render() {
	
		return <View
				style={styles.homeView}>
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
						left: 0,
						right: 0,
						top: 16,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 18,
							marginLeft: 16,
							marginRight: 15,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.passwordManagerTxt}>Password Manager</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/icon-external-link.png")}
							style={styles.iconExternalLinkImg}/>
						<Image
							source={require("./../../assets/images/icon-add.png")}
							style={styles.iconAddImg}/>
					</View>
					<View
						style={styles.searchView}>
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
								source={require("./../../assets/images/rectangle-3.png")}
								style={styles.rectangle3Img}/>
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
							<View
								pointerEvents="box-none"
								style={{
									width: 70,
									height: 17,
									marginLeft: 7,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/search.png")}
									style={styles.searchImg}/>
								<Text
									style={styles.searchTxt}>Searc</Text>
							</View>
						</View>
					</View>
					<Text
						style={styles.matchingSiteTxt}>Matching Site</Text>
					<View
						style={styles.matchingSiteView}>
						<View
							pointerEvents="box-none"
							style={{
								width: 33,
								height: 34,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<TouchableOpacity
									onPress={this.onOval2Pressed}
									style={styles.oval2Btn}>
									<Image
										source={require("./../../assets/images/oval-2-15.png")}
										style={styles.oval2BtnImage}/>
								</TouchableOpacity>
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
								<Image
									source={require("./../../assets/images/oval-2-11.png")}
									style={styles.oval2SevenImg}/>
							</View>
						</View>
						<View
							style={styles.groupFourView}>
							<Text
								style={styles.dribbbleTxt}>Dribbble</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.sampleGmailComFourTxt}>sample@gmail.com</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group3FourView}>
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
									source={require("./../../assets/images/rectangle-4.png")}
									style={styles.rectangle4FourImg}/>
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
								<Text
									style={styles.launchFourTxt}>Launch</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.site1View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 33,
								height: 33,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/oval-2-14.png")}
									style={styles.oval2FiveImg}/>
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
								<Image
									source={require("./../../assets/images/oval-2-13.png")}
									style={styles.oval2SixImg}/>
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
								<Image
									source={require("./../../assets/images/do.png")}
									style={styles.doImg}/>
							</View>
						</View>
						<View
							style={styles.groupThreeView}>
							<Text
								style={styles.digitalOceanTxt}>Digital Ocean</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.sampleGmailComThreeTxt}>sample@gmail.com</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group3ThreeView}>
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
									source={require("./../../assets/images/rectangle-4.png")}
									style={styles.rectangle4ThreeImg}/>
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
								<Text
									style={styles.launchThreeTxt}>Launch</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.site2View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 33,
								height: 33,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/oval-2-5.png")}
									style={styles.oval2ThreeImg}/>
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
								<Image
									source={require("./../../assets/images/oval-2-7.png")}
									style={styles.oval2FourImg}/>
							</View>
						</View>
						<View
							style={styles.groupTwoView}>
							<Text
								style={styles.heapAnalyticsTxt}>Heap Analytics</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.sampleGmailComTwoTxt}>sample@gmail.com</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group3TwoView}>
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
									source={require("./../../assets/images/rectangle-4.png")}
									style={styles.rectangle4TwoImg}/>
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
								<Text
									style={styles.launchTwoTxt}>Launch</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.site3View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 33,
								height: 33,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/oval-2-8.png")}
									style={styles.oval2Img}/>
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
								<Image
									source={require("./../../assets/images/oval-2-9.png")}
									style={styles.oval2TwoImg}/>
							</View>
						</View>
						<View
							style={styles.groupView}>
							<Text
								style={styles.shopifyTxt}>Shopify</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.sampleGmailComTxt}>sample@gmail.com</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group3View}>
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
									source={require("./../../assets/images/rectangle-4-2.png")}
									style={styles.rectangle4Img}/>
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
								<Text
									style={styles.launchTxt}>Launch</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.genetratePasswordView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 2,
								right: 3,
								top: 1,
								bottom: 7,
							}}>
							<Image
								source={require("./../../assets/images/rectangle-5-2.png")}
								style={styles.rectangle5TwoImg}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									right: 14,
									bottom: 2,
									height: 57,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Text
									style={styles.advancedOptionTxt}>Advanced Option</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/refresh-cw.png")}
									style={styles.refreshCwImg}/>
								<View
									style={styles.copyView}>
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
											source={require("./../../assets/images/rectangle-6-6.png")}
											style={styles.rectangle6TwoImg}/>
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
											source={require("./../../assets/images/rectangle-6-6.png")}
											style={styles.rectangle6ThreeImg}/>
									</View>
									<Text
										style={styles.copyTxt}>Copy</Text>
								</View>
							</View>
							<Text
								style={styles.generateSecurePassTxt}>Generate Secure Password</Text>
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
							<View
								style={styles.outputView}>
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
										source={require("./../../assets/images/rectangle-6-3.png")}
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
										style={styles.x3Hi7cykugYiyTxt}>0x3</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.bottomNavView}>
						<Image
							source={require("./../../assets/images/rectangle-5-3.png")}
							style={styles.rectangle5Img}/>
						<Image
							source={require("./../../assets/images/rectangle-2.png")}
							style={styles.rectangle2Img}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 29,
								right: 31,
								top: 24,
								height: 18,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/icon-home-2.png")}
								style={styles.iconHomeImg}/>
							<Image
								source={require("./../../assets/images/icon-folder-2.png")}
								style={styles.iconFolderImg}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/icon-securenote.png")}
								style={styles.iconSecurenoteImg}/>
							<Image
								source={require("./../../assets/images/icon-settings.png")}
								style={styles.iconSettingsImg}/>
						</View>
					</View>
				</View>
				<Text
					style={styles.recentSiteTxt}>Recent Site</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgImg: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 528,
	},
	passwordManagerTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	iconExternalLinkImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
		marginRight: 23,
		marginTop: 1,
	},
	iconAddImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 14,
		marginTop: 3,
	},
	searchView: {
		backgroundColor: "transparent",
		height: 38,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 17,
	},
	rectangle3Img: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "cover",
		height: 38,
	},
	searchImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.3,
		width: 16,
		height: 16,
	},
	searchTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.3,
		marginLeft: 11,
	},
	matchingSiteTxt: {
		backgroundColor: "transparent",
		opacity: 0.6,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 20,
	},
	matchingSiteView: {
		backgroundColor: "transparent",
		height: 33,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 11,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2BtnText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	oval2BtnImage: {
		resizeMode: "contain",
	},
	oval2Btn: {
		backgroundColor: "transparent",
		opacity: 0.3,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 33,
		height: 33,
	},
	oval2SevenImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	groupFourView: {
		backgroundColor: "transparent",
		width: 104,
		height: 33,
		marginLeft: 8,
	},
	dribbbleTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
	},
	sampleGmailComFourTxt: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 1,
	},
	group3FourView: {
		backgroundColor: "transparent",
		width: 62,
		height: 24,
	},
	rectangle4FourImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.3,
		height: 24,
	},
	launchFourTxt: {
		color: "rgb(16, 16, 16)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
	},
	site1View: {
		backgroundColor: "transparent",
		height: 33,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 48,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2FiveImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	oval2SixImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 33,
	},
	doImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 26,
		height: 26,
		marginLeft: 4,
	},
	groupThreeView: {
		backgroundColor: "transparent",
		width: 104,
		height: 33,
		marginLeft: 8,
	},
	digitalOceanTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	sampleGmailComThreeTxt: {
		backgroundColor: "transparent",
		opacity: 0.5,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 1,
	},
	group3ThreeView: {
		backgroundColor: "transparent",
		width: 62,
		height: 24,
	},
	rectangle4ThreeImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		height: 24,
	},
	launchThreeTxt: {
		color: "rgb(16, 16, 16)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
	},
	site2View: {
		backgroundColor: "transparent",
		height: 33,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2ThreeImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	oval2FourImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	groupTwoView: {
		backgroundColor: "transparent",
		width: 104,
		height: 33,
		marginLeft: 8,
	},
	heapAnalyticsTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 14,
	},
	sampleGmailComTwoTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		marginRight: 1,
	},
	group3TwoView: {
		backgroundColor: "transparent",
		width: 62,
		height: 24,
	},
	rectangle4TwoImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		height: 24,
	},
	launchTwoTxt: {
		color: "rgb(16, 16, 16)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
	},
	site3View: {
		backgroundColor: "transparent",
		height: 33,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2Img: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	oval2TwoImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	groupView: {
		backgroundColor: "transparent",
		width: 104,
		height: 33,
		marginLeft: 8,
	},
	shopifyTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	sampleGmailComTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		opacity: 0.5,
		marginRight: 1,
	},
	group3View: {
		backgroundColor: "transparent",
		width: 62,
		height: 24,
	},
	rectangle4Img: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		height: 24,
	},
	launchTxt: {
		color: "rgb(16, 16, 16)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
	},
	genetratePasswordView: {
		backgroundColor: "transparent",
		height: 103,
		marginLeft: 14,
		marginRight: 13,
		marginBottom: 5,
	},
	rectangle5TwoImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 95,
	},
	advancedOptionTxt: {
		backgroundColor: "transparent",
		opacity: 0.8,
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 73,
	},
	refreshCwImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
		width: 15,
		height: 13,
		marginRight: 15,
	},
	copyView: {
		backgroundColor: "transparent",
		width: 52,
		height: 25,
	},
	rectangle6TwoImg: {
		backgroundColor: "transparent",
		opacity: 0.77,
		resizeMode: "center",
		height: 25,
	},
	rectangle6ThreeImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		height: 25,
	},
	copyTxt: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 4,
		bottom: 0,
	},
	generateSecurePassTxt: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 14,
		width: 190,
		top: 14,
	},
	outputView: {
		backgroundColor: "transparent",
		width: 190,
		height: 25,
		marginLeft: 16,
	},
	rectangle6Img: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 25,
	},
	x3Hi7cykugYiyTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	bottomNavView: {
		backgroundColor: "transparent",
		height: 57,
	},
	rectangle5Img: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.05,
		position: "absolute",
		left: 5,
		right: 4,
		top: 0,
		height: 48,
	},
	rectangle2Img: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 9,
		height: 48,
	},
	iconHomeImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 17,
	},
	iconFolderImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 18,
		height: 16,
		marginLeft: 63,
	},
	iconSecurenoteImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 14,
		height: 17,
		marginRight: 62,
		marginTop: 1,
	},
	iconSettingsImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
		width: 16,
		height: 16,
		marginTop: 1,
	},
	recentSiteTxt: {
		backgroundColor: "transparent",
		opacity: 0.6,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 16,
		width: 81,
		top: 190,
	},
})
