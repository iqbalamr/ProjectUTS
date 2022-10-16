import React, { useState, useEffect } from "react"
import {
	View,
	Text,
	TouchableOpacity,
} from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import * as Linking from "expo-linking"
import * as Clipboard from "expo-clipboard"

import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';


import cameraStyles from "./styles"

const Camera = () => {
	const [hasPermission, setHasPermission] = useState(null),
		[scanned, setScanned] = useState(false),
		[scan, setScan] = useState(false),
		[type, setType] = useState(BarCodeScanner.Constants.Type.back),
		[X, setX] = useState(0),
		[Y, setY] = useState(0),
		[width, setWidth] = useState(0),
		[height, setHeight] = useState(0),
		[barcode, setBarcode] = useState("Waiting for scan...")

	const copyToClipboard = () => {
		Clipboard.setString(barcode)
		alert("Copied to clipboard!")
	}

	useEffect(() => {
		;(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === "granted")
		})()
	}, [])

	const handleSuccess = ({ bounds, data }) => {
		// setScanned(true)
		setScan(true)
		const { origin, size } = bounds
		setX(origin.x)
		setY(origin.y)
		setWidth(size.width)
		setHeight(size.height)
		setBarcode(data)
		console.log(data)
	}

	if (hasPermission === null) {
		return <Text>Request camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	const handleClick = () => {
		Linking.canOpenURL(barcode).then((supported) => {
			if (supported) {
				Linking.openURL(barcode)
			} else {
				console.log("Result : " + barcode)
			}
		})
	}

	return (
		<View style={cameraStyles.container}>
			<View style={cameraStyles.header}>

					<Text style={cameraStyles.textHeader}>Cam Scanner</Text>
			</View>

			<View style={cameraStyles.barcodeBox}>
				<BarCodeScanner
					type={type}
					barCodeScannerSettings={{
						barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
					}}
					onBarCodeScanned={scanned ? undefined : handleSuccess}
					style={{ width: 300, height: 400}}
				/>
				{scan === true ? (
					<View
						style={{
							position: "absolute",
							top: Y,
							left: X,
							width: width,
							height: height,
							borderColor: "#3f50a6",
							borderWidth: 3,
                            borderRadius: 5,
						}}
					></View>
				) : (
					<View></View>
				)}
				<TouchableOpacity
					style={cameraStyles.Icon}
					onPress={() => {
						setType(
							type === BarCodeScanner.Constants.Type.back
								? BarCodeScanner.Constants.Type.front
								: BarCodeScanner.Constants.Type.back
						)
						console.log(type)
					}}
				>
					<MaterialIcons
						name="flip-camera-ios"
						size={25}
						color="black"
						style={{ alignItems: "center" }}
					/>
				</TouchableOpacity>
			</View>
			<View style={cameraStyles.bottom}>
				{barcode != "Waiting for scan..." ? (
					<TouchableOpacity onPress={copyToClipboard}>
						<Ionicons name="copy" size={24} color="black" />
					</TouchableOpacity>
				) : null}
				<TouchableOpacity
					onPress={handleClick()}
					style={cameraStyles.textBarcode}
				>
					<Text>{barcode}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Camera
