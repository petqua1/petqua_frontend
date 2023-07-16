import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./DefaultText";
import BoldText from "./BoldText";
import MediumText from "./MediumText";
import palette from "../styles/ColorPalette";
import images from "./Images";

const Comment = ({ userName, textValue, time, onRemove, onPress }) => {
  return (
    <View>
      {/* 구분선 */}
      <View
        style={{
          flex: 1,
          height: 0.5,
          backgroundColor: "#C9C9C9",
          marginLeft: -6,
          marginRight: -6,
        }}
      />
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={images.itemImageExample} style={styles.userProfile} />
          <BoldText style={styles.userName}>{userName}</BoldText>
        </View>
        <MediumText style={styles.textValue}>{textValue}</MediumText>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.responseContainer}>
          <View style={styles.responseIconBox}>
            <Image
              source={images.commentIconLightGrey}
              style={styles.responseIcon}
            />
          </View>
          <View style={styles.responseIconBox}>
            <Image
              source={images.recommendIcon}
              style={[styles.responseIcon, { marginBottom: 1 }]}
            />
          </View>
          <View>
            <Image
              source={images.besidesIcon}
              style={[styles.responseIcon, { paddingHorizontal: 17 }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 22,
    backgroundColor: "#ffffff",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userProfile: {
    width: 37,
    height: 37,
    borderRadius: 50,
    marginRight: 9,
  },
  userName: {
    fontSize: 16,
    color: palette.gray3,
  },
  textValue: {
    fontSize: 16,
    color: palette.gray3,
    marginTop: 8,
    marginLeft: 46,
  },
  time: {
    fontSize: 12,
    color: palette.gray2,
    marginTop: 18,
    marginLeft: 46,
  },
  responseContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    height: 24,
    position: "absolute",
    top: 16,
    right: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  responseIconBox: {
    borderRightWidth: 0.5,
    borderRightColor: "#737373",
  },
  responseIcon: {
    height: 10,
    resizeMode: "contain",
    paddingHorizontal: 12,
  },
});

export default Comment;
