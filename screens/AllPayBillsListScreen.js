import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import TopNavigation from "../components/TopNavigation";
import SearchBarComponent from "../components/SearchBarComponent";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import PayBillComponent from "../components/PayBillComponent";
import { StatusBar } from "expo-status-bar";

const AllPayBillsListScreen = () => {
  const navigation = useNavigation();

  const handleBillPress = (title, logo, logoBackgroundColor, reason) => {
    navigation.navigate("PayBill", {
      billTitle: title,
      billLogo: logo,
      billLogoBackgroundColor: logoBackgroundColor,
      billReason: reason,
    });
  };
  return (
    <View>
      <StatusBar style="auto" />
      <TopNavigation title={"Pay Bill"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        {/* Search Bar */}
        <View style={{ paddingHorizontal: 20 }}>
          <SearchBarComponent />
        </View>

        {/* PayBill List */}
        <View>
          {/* Heading */}
          <View style={styles.transactionHeadingContainer}>
            <Text style={styles.transactionText}>Most Recent</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              onPress={() => console.log("Add Bill Pressed")}
            >
              <Ionicons
                name="md-add-circle-outline"
                size={24}
                color={Color.primary}
              />
              <Text style={styles.seeAllText}>Add Bill</Text>
            </Pressable>
          </View>

          {/* List */}
          <View style={{ paddingHorizontal: 20 }}>
            <PayBillComponent
              title="Electricity Bill"
              reason="LESCO"
              logo={require("../assets/electricitybill.png")}
              logoBackgroundColor="#BBD3FC"
              onBillPress={handleBillPress}
            />
            <PayBillComponent
              title="Appartment Rent"
              reason="Tariq Hameed"
              logo={require("../assets/appartmentRent.png")}
              logoBackgroundColor="#C8FAF2"
              onBillPress={handleBillPress}
            />
            <PayBillComponent
              title="Transport Bill"
              reason="City Transport"
              logo={require("../assets/transportbill.png")}
              logoBackgroundColor="#EDCAFC"
              onBillPress={handleBillPress}
            />
            <PayBillComponent
              title="ISP Internet Bill"
              reason="PTCL"
              logo={require("../assets/internetbill.png")}
              logoBackgroundColor="#FCF3CA"
              onBillPress={handleBillPress}
            />
            <PayBillComponent
              title="Water Bill"
              reason="City Corporation"
              logo={require("../assets/waterbill.png")}
              logoBackgroundColor="#CAE7FC"
              onBillPress={handleBillPress}
            />
            <PayBillComponent
              title="Tution Fee"
              reason="Lahore Garrison University"
              logo={require("../assets/tutionfee.png")}
              logoBackgroundColor="#CAFDCF"
              onBillPress={handleBillPress}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllPayBillsListScreen;

const styles = StyleSheet.create({
  transactionHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  transactionText: {
    fontSize: 24,
    color: Color.dark,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
  },
  seeAllText: {
    fontSize: 16,
    color: Color.primary,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyRegular,
  },
});
