import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";

import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import { AntDesign } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";

export default function Main({ navigation }: any) {
  const isLoaded = useCachedResources();

  const categories = [
    {
      title: "송사리과",
      image: images.category1,
    },
    {
      title: "카라신과",
      image: images.category2,
    },
    {
      title: "잉어과",
      image: images.category3,
    },
    {
      title: "기수어과",
      image: images.category4,
    },
    {
      title: "대형어",
      image: images.category5,
    },
    {
      title: "아나바스과",
      image: images.category6,
    },
    {
      title: "메기과",
      image: images.category7,
    },
  ];

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image
            source={images.petqua_logo}
            style={{ width: 86, height: 22 }}
          />
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Image
              source={images.topSearchIcon}
              style={{ width: 24, height: 24 }}
            />
            <Image
              source={images.topShoppingBasketIcon}
              style={{ width: 24, height: 24 }}
            />
          </View>
        </View>

        <ScrollView>
          <Image
            source={images.banner}
            style={{ width: "100%", aspectRatio: 1.323 }}
          />
          <View style={styles.notice}>
            <Text style={styles.noticeTxt}>
              [공지] 펫쿠아 안전배송이 이벤트가 생성되었습니다.
            </Text>
          </View>
          <View style={styles.categoryContainer}>
            {categories.map((el, idx) => (
              <View key={idx} style={styles.category}>
                <View style={styles.categoryImgContainer}>
                  <Image source={el.image} style={{ width: 44, height: 44 }} />
                </View>
                <Text style={styles.noticeTxt}>{el.title}</Text>
              </View>
            ))}
            <View style={styles.category}>
              <View style={{ ...styles.categoryImgContainer, padding: 14 }}>
                <AntDesign name="plus" size={36} color={palette.mainDark} />
              </View>
              <Text style={styles.noticeTxt}>더보기</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  notice: {
    backgroundColor: palette.grayBg,
    padding: 12,
  },
  noticeTxt: {
    color: palette.mainDark,
    fontSize: 12,
  },
  categoryContainer: {
    flexDirection: "row",
    padding: 24,
    gap: 12,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  category: {
    gap: 8,
    alignItems: "center",
  },
  categoryImgContainer: {
    backgroundColor: palette.skyBlueBg,
    padding: 12,
    borderRadius: 12,
  },
});
