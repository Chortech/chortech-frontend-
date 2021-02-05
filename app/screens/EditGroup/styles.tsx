import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: "row-reverse",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginHorizontal: 5,
  },
  saveButtonContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: common.baseBorderRadius,
    borderColor: colors.mainColor,
  },
  saveButtonText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize,
    color: colors.mainColor,
  },
  screenTitleText: {
    flex: 5,
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    paddingVertical: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
  goBackIconContainer: {
    flex: 2,
    justifyContent: "center",
  },
  goBackIcon: {
    alignSelf: "flex-start",
    padding: 10,
    color: colors.textBlack,
  },
  namePictureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },
  groupImageContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  imageUploadContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 6,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.transparentBlack,
  },
  cameraIcon: {
    color: colors.white,
    alignSelf: "center",
  },
  groupImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.mainColor,
    alignSelf: "center",
  },
  textInputContainer: {
    flex: 3,
    padding: 5,
  },
  textInputLabel: {
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 2,
    paddingRight: 5,
    paddingBottom: 5,
  },
  textInput: {
    backgroundColor: colors.textInputBackground,
    borderRadius: common.baseBorderRadius,
    textAlign: "right",
    fontFamily: fonts.IranSans_Light,
    fontSize: common.baseFontSize,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
  infoContainer: {
    flex: 8,
    backgroundColor: colors.white,
  },
  membersTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    alignSelf: "center",
    justifyContent: "center",
  },
  addNewMemberContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.ultraLightGray,
    borderBottomColor: colors.ultraLightGray,
    marginBottom: 15,
    marginTop: 10,
  },
  addNewMemberIcon: {
    color: colors.mainColor,
    alignSelf: "center",
  },
  addNewMemberText: {
    textAlign: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Medium,
  },
  footerButtonsContainer: {
    marginTop: 15,
  },
  leaveGroupButtonContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
    borderTopColor: colors.ultraLightGray,
  },
  leaveGroupText: {
    fontSize: common.baseFontSize - 2,
    color: colors.red,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Medium,
    alignSelf: "center",
  },
  deleteGroupButtonContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },
  deleteGroupText: {
    fontSize: common.baseFontSize - 2,
    color: colors.red,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Medium,
    alignSelf: "center",
  },
});