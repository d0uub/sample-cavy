//
//  Folder1
//  Project
//
//  Created by Roy.
//  Copyright © 2018 HA. All rights reserved.
//

import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native"
import React from "react"


export default class Folder1 extends React.Component {

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

	onIconHomePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
	}

	onOval2Pressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Home")
	}

	render() {
	
		return <View
				style={styles.folder1View}>
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
						source={require("./../../assets/images/rectangle-2-2.png")}
						style={styles.rectangle2Img}/>
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
							style={styles.foldersTxt}>Folders</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/icon-add.png")}
							style={styles.iconPlusImg}/>
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
								source={require("./../../assets/images/rectangle-3-2.png")}
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
									source={require("./../../assets/images/icon-search.png")}
									style={styles.iconSearchImg}/>
								<Text
									style={styles.searchTxt}>Searc</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.socialNetworkView}>
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
								<TouchableOpacity
									onPress={this.onOval2Pressed}
									style={styles.oval2Btn}>
									<Image
										source={require("./../../assets/images/oval-2-10.png")}
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
									source={require("./../../assets/images/share-2.png")}
									style={styles.share2Img}/>
							</View>
						</View>
						<Text
							style={styles.socialNetworkTxt}>Social Network</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightSevenImg}/>
					</View>
					<View
						style={styles.bankView}>
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
									source={require("./../../assets/images/oval-2-6.png")}
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
									source={require("./../../assets/images/credit-card.png")}
									style={styles.creditCardImg}/>
							</View>
						</View>
						<Text
							style={styles.bankTxt}>Bank</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightSixImg}/>
					</View>
					<View
						style={styles.emailView}>
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
									source={require("./../../assets/images/oval-2-12.png")}
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
									source={require("./../../assets/images/mail.png")}
									style={styles.mailImg}/>
							</View>
						</View>
						<Text
							style={styles.emailTxt}>Email</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightFiveImg}/>
					</View>
					<View
						style={styles.businessView}>
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
									source={require("./../../assets/images/oval-2-3.png")}
									style={styles.oval2FourImg}/>
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
									source={require("./../../assets/images/briefcase.png")}
									style={styles.briefcaseImg}/>
							</View>
						</View>
						<Text
							style={styles.businessTxt}>Business</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightFourImg}/>
					</View>
					<View
						style={styles.entertainmentView}>
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
									source={require("./../../assets/images/oval-2-4.png")}
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
									source={require("./../../assets/images/film.png")}
									style={styles.filmImg}/>
							</View>
						</View>
						<Text
							style={styles.entertainmentTxt}>Entertainment</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightThreeImg}/>
					</View>
					<View
						style={styles.productivityToolView}>
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
									source={require("./../../assets/images/oval-2.png")}
									style={styles.oval2TwoImg}/>
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
									source={require("./../../assets/images/box.png")}
									style={styles.boxImg}/>
							</View>
						</View>
						<Text
							style={styles.productivityToolTxt}>Productivity Tool</Text>
						<Image
							source={require("./../../assets/images/chevron-right.png")}
							style={styles.chevronRightTwoImg}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.othersView}>
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
									source={require("./../../assets/images/oval-2-2.png")}
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
									source={require("./../../assets/images/hash.png")}
									style={styles.hashImg}/>
							</View>
						</View>
						<Text
							style={styles.othersTxt}>Others</Text>
						<Image
							source={require("./../../assets/images/chevron-right-2.png")}
							style={styles.chevronRightImg}/>
					</View>
					<View
						style={styles.bottomNavView}>
						<Image
							source={require("./../../assets/images/rectangle-5.png")}
							style={styles.rectangle5Img}/>
						<Image
							source={require("./../../assets/images/rectangle-2.png")}
							style={styles.rectangle2TwoImg}/>
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
							<TouchableOpacity
								onPress={this.onIconHomePressed}
								style={styles.iconHomeBtn}>
								<Image
									source={require("./../../assets/images/icon-home.png")}
									style={styles.iconHomeBtnImage}/>
							</TouchableOpacity>
							<Image
								source={require("./../../assets/images/icon-folder.png")}
								style={styles.iconFolderImg}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/icon-file-text.png")}
								style={styles.iconFileTextImg}/>
							<Image
								source={require("./../../assets/images/icon-settings-2.png")}
								style={styles.iconSettingsImg}/>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	folder1View: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle2Img: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 528,
	},
	foldersTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	iconPlusImg: {
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
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.3,
		height: 38,
	},
	iconSearchImg: {
		backgroundColor: "transparent",
		opacity: 0.3,
		resizeMode: "center",
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
	socialNetworkView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2Btn: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 33,
		height: 33,
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
	share2Img: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 17,
		marginLeft: 8,
	},
	socialNetworkTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 8,
		marginRight: 141,
	},
	chevronRightSevenImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
		width: 8,
		height: 14,
		marginRight: 1,
	},
	bankView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2SixImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 33,
	},
	creditCardImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 12,
		marginLeft: 9,
	},
	bankTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginLeft: 8,
		marginRight: 200,
	},
	chevronRightSixImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
		width: 8,
		height: 14,
		marginRight: 1,
	},
	emailView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2FiveImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 33,
	},
	mailImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 13,
		marginLeft: 9,
	},
	emailTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginLeft: 8,
		marginRight: 199,
	},
	chevronRightFiveImg: {
		backgroundColor: "transparent",
		opacity: 0.8,
		resizeMode: "center",
		width: 8,
		height: 14,
		marginRight: 1,
	},
	businessView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2FourImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	briefcaseImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 15,
		marginLeft: 9,
	},
	businessTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginLeft: 8,
		marginRight: 177,
	},
	chevronRightFourImg: {
		backgroundColor: "transparent",
		opacity: 0.8,
		resizeMode: "center",
		width: 8,
		height: 14,
		marginRight: 1,
	},
	entertainmentView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2ThreeImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	filmImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 16,
		marginLeft: 9,
	},
	entertainmentTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginLeft: 8,
		marginRight: 146,
	},
	chevronRightThreeImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
		width: 8,
		height: 14,
		marginRight: 1,
	},
	productivityToolView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2TwoImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 33,
	},
	boxImg: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 16,
		marginLeft: 9,
	},
	productivityToolTxt: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "flex-end",
		marginLeft: 8,
		marginRight: 133,
	},
	chevronRightTwoImg: {
		backgroundColor: "transparent",
		opacity: 0.8,
		resizeMode: "center",
		width: 8,
		height: 14,
		marginRight: 1,
	},
	othersView: {
		backgroundColor: "transparent",
		height: 32,
		marginLeft: 16,
		marginRight: 14,
		marginBottom: 38,
		flexDirection: "row",
		alignItems: "center",
	},
	oval2Img: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	hashImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 15,
		marginLeft: 10,
	},
	othersTxt: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginLeft: 8,
		marginRight: 190,
	},
	chevronRightImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
		width: 8,
		height: 14,
		marginRight: 1,
	},
	bottomNavView: {
		backgroundColor: "transparent",
		height: 57,
	},
	rectangle5Img: {
		backgroundColor: "transparent",
		opacity: 0.05,
		resizeMode: "cover",
		position: "absolute",
		left: 5,
		right: 4,
		top: 0,
		height: 48,
	},
	rectangle2TwoImg: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 9,
		height: 48,
	},
	iconHomeBtnImage: {
		resizeMode: "contain",
	},
	iconHomeBtn: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 16,
		height: 17,
	},
	iconHomeBtnText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	iconFolderImg: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 18,
		height: 16,
		marginLeft: 63,
	},
	iconFileTextImg: {
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
})
