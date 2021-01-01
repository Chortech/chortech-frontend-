import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  customInputContainer: {
    marginTop: 15,
  },
  label: {
    color: "#053751",
    fontFamily: "IRANSansWeb_Bold",
    textAlign: "right",
    paddingRight: 3,
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    paddingBottom: 5,
  },
  inputContainerError: {
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 10,
    color: "#053751",
    padding: 10,
    fontFamily: "Dirooz",
    textAlign: "right",
  },
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginTop: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  cancelIcon: {
    flex: 1,
    marginRight: 5,
    marginTop: 4,
    marginLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  confirmIcon: {
    flex: 1,
    marginRight: 8,
    marginTop: 4,
    marginLeft: 5,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});
