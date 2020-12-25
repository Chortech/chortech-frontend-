import { transform } from "@babel/core";
import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 2,
    paddingTop: 10,
  },
  profileImage: {
    height: 80,
    width: 80,
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  logoutIcon: {
    margin: 20,
    borderWidth: 2,
    borderColor: "#ff0000",
    borderRadius: 10,
    padding: 5,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    transform: [{ rotate: "180deg" }],
  },
  userNameText: {
    fontSize: 20,
    marginTop: 5,
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
  infoContainer: {
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textWrapper: {
    flexDirection: "row",
  },
  textContainerRight: {
    padding: 15,
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
    justifyContent: "flex-start",
  },
  textContainerLeft: {
    flex: 5,
    padding: 15,
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
  },
  textInfo: {
    fontSize: 12,
    padding: 2,
    color: "#053751",
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
  },
  buttonContainer: {
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 70,
  },
  button: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1AD927",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#1AD927",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
