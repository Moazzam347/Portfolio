import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Color, FontFamily } from "../GlobalStyles";
import TopNavigation from "../components/TopNavigation";
import ButtonMain from "../components/ButtonMain";
import { useNavigation } from "@react-navigation/native";

const VoucherDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Nike"} iconColor={Color.white} />

      {/* upper Container */}
      <View style={styles.upperContainer}>
        <Text style={styles.textNumber}>40%</Text>
        <Text style={styles.textCashback}>Cashback</Text>
        <Text style={styles.textDate}>Aug 16-24</Text>
      </View>

      {/* lower Container */}
      <View style={styles.lowerContainer}>
        {/* Instructions */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ScrollViewStyle}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textInstructionsHeading}>What’s inside</Text>
            <Text style={styles.textInstructions}>
              A limited time 40% cashback on every product you buy on Nike’s
              website.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textInstructionsHeading}>How to redeem</Text>
            <Text style={styles.textInstructions}>
              - Once you claim the voucher,you’ll be directed to the Nike’s
              website. - You have 72 hours to use this code after activation
              before the code expires. - You will get 40% cash back within 24
              hours after the order.
            </Text>
          </View>
        </ScrollView>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <ButtonMain
            title={"Claim"}
            buttonNavigation={() => navigation.navigate("PayProceed")}
          />
        </View>
      </View>
    </View>
  );
};

export default VoucherDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CD051F",
  },

  // upper container
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },
  textNumber: {
    color: Color.white,
    fontFamily: FontFamily.gilroyBold,
    fontSize: 84,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  textCashback: {
    color: Color.white,
    fontFamily: FontFamily.gilroyBold,
    fontSize: 44,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  textDate: {
    color: Color.white,
    fontFamily: FontFamily.gilroyRegular,
    fontSize: 24,
    letterSpacing: 1,
    marginTop: 10,
  },

  // lower Container
  lowerContainer: {
    backgroundColor: Color.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  ScrollViewStyle: {},
  textContainer: {
    marginBottom: 20,
  },
  textInstructionsHeading: {
    fontSize: 20,
    fontFamily: FontFamily.gilroyBold,
    paddingTop: 10,
  },
  textInstructions: {
    fontSize: 16,
    fontFamily: FontFamily.gilroyRegular,
    marginTop: 10,
    lineHeight: 28,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
