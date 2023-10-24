import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopNavigation from "../components/TopNavigation";
import VoucherCard from "../components/VoucherCard";
import { Color, FontFamily } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";

const VoucherScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title="Voucher" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        <View style={styles.voucherContainer}>
          <VoucherCard
            logo={require("../assets/amazonRound.png")}
            discount="20% Cashback"
            company="Amazon"
            date="Jun 17-24"
          />
          <VoucherCard
            logo={require("../assets/airbnb.png")}
            discount="55% Off"
            company="Airbnb"
            date="Aug 18-24"
          />
          <VoucherCard
            logo={require("../assets/mcdonalds.png")}
            discount="15% Off"
            company="McDonalds"
            date="May 23-24"
          />
          <VoucherCard
            logo={require("../assets/starbucks.png")}
            discount="30% Cashback"
            company="Starbuks"
            date="Apr 23-24"
          />
          <VoucherCard
            logo={require("../assets/kfc.png")}
            discount="25% Off"
            company="KFC"
            date="Sep 07-24"
          />
          <VoucherCard
            logo={require("../assets/nike.png")}
            discount="40% Cashback"
            company="Nike"
            date="Dec 11-24"
          />
          <VoucherCard
            logo={require("../assets/hm.png")}
            discount="45% Off"
            company="H&M"
            date="Jul 19-24"
          />
          <VoucherCard
            logo={require("../assets/spotify.png")}
            discount="45% Off"
            company="Spotify"
            date="Mar 17-24"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
  container: {
   backgroundColor: Color.white, 
  },
    scrollStyle: {
        paddingHorizontal: 20,
        paddingBottom: 120,
    },
  voucherContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
    // gap: 20,
  },
});
