import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  background: {
    flex: 0,
  },
  bottomSheetContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  TextInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "black",
  },
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    paddingTop: 0,
  },
  button: {
    backgroundColor: "#5DDE7F",
    marginTop: 0,
    padding: 5,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  DetailContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'flex-start',
  },
  leftWrap: {
    width: '60%',
  },
  rightWrap: {
    marginTop: 40,
    width: '37%',
  },
  additionalInformation: {
    padding: 20,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "green",
  },
  fail: {
    borderColor: 'red',
  },
  failArrow: {
    color: "red",
  },
  PName: {
    fontSize: 20,
    fontWeight: "500",
    color: "green",
  },
  start: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  startName: {
    padding: 20,
    width: '100%',
    borderColor: "green",
    borderWidth: 5,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: "500",
    textAlign: 'center',
  },
  arrow: {
    fontSize: 58,
    color: "green",
  },
  middle: {
    flex: 1.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

  },
  transfer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  transferName: {
    width: "100%",
    padding: 20,
    borderColor: "green",
    borderWidth: 5,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: "500",
    textAlign: 'center',

  },
  end: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  endName: {
    width: '100%',
    padding: 20,
    borderColor: "green",
    borderWidth: 5,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: "500",
    textAlign: 'center',
  },
});

export default styles;
