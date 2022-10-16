import { StyleSheet } from "react-native"

const cameraStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E9EAEA",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	header: {
		height: "30%",
		width: "100%",
		backgroundColor: "#E9EAEA",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	textHeader: {
		fontSize: 30,
		textAlign: "center",
		marginTop: "30%",
		marginLeft: "5%",
		fontWeight: "700",
	},
	barcodeBox: {
		alignItems: "center",
		justifyContent: "center",
		height: 400,
		width: 300,
		overflow: "hidden",
	},
	Icon: {
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		width: 50,
		position: "absolute",
		bottom: 10,
		right: 10,
		height: 50,
		backgroundColor: "#E9EAEA",
	},
	bottom: {
		flexDirection: "row",
		height: "30%",
		width: "100%",
		backgroundColor: "#E9EAEA",
		alignItems: "center",
		justifyContent: "center",
	},
	textBarcode: {
		marginLeft: "5%",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	button: {
		borderRadius: 10,
		padding: 10,
		elevation: 2,
		width: "100%",
	},
	Image: {
		resizeMode: "contain",
		height: 400,
		marginBottom: 20,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
})

export default cameraStyles
