import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Color, FontFamily } from '../GlobalStyles'
import TopNavigation from '../components/TopNavigation';
import DebitCard from '../components/DebitCard';
import PayBillComponent from '../components/PayBillComponent';
import { StatusBar } from "expo-status-bar";
const MyCardScreen = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <TopNavigation title="My Cards" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollView}
      >
        <DebitCard
          cardColor={["#7DD0FF", "#2D4EF5"]}
          cardLogo={require("../assets/mastercard.png")}
        />
        <DebitCard
          cardColor={["#81EEAA", "#1D976C"]}
          cardLogo={require("../assets/visa.png")}
        />
        <DebitCard
          cardColor={["#FFAD7E", "#F5752D"]}
          cardLogo={require("../assets/applepay.png")}
        />
        <DebitCard
          cardColor={["#7DD0FF", "#2D4EF5"]}
          cardLogo={require("../assets/mastercard.png")}
        />
      </ScrollView>
    </View>
  );
}

export default MyCardScreen

const styles = StyleSheet.create({
  mainScrollView: {
    paddingBottom: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: Color.white,
  },
});