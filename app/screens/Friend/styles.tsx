import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 2,
    alignItems: "center",
    paddingTop: 10,
  },
  friendImage: {
    height: 100,
    width: 100,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  userNameText: {
    fontSize: 20,
    marginVertical: 10,
    color: "#fff",
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
  buttonContainer: {
    flex: 5,
    justifyContent: "flex-end",
    marginVertical: 20,
  },
  addButton: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#1AD927",
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#1AD927",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  plus: {
    marginRight: 10,
    fontSize: 30,
    color: "#1AD927",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  removeButton: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  removeButtonText: {
    fontSize: 16,
    color: "red",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  minus: {
    marginRight: 10,
    fontSize: 30,
    color: "red",
    alignSelf: "flex-end",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  textContainer: {
    padding: 15,
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  textInfo: {
    fontSize: 14,
    padding: 2,
    color: "#053751",
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
  },
});
