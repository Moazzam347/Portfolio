import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopNavigation from "../components/TopNavigation";
import TransactionCard from "../components/TransactionCard";
import { Color, FontFamily } from "../GlobalStyles";
import TagButton from "../components/TagButton";
import { StatusBar } from "expo-status-bar";

const TransactionsScreen = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <TopNavigation title="Transactions" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollView}
      >
        <View>
          <View style={{ marginTop: 20 }}>
            <TagButton title="All" />
          </View>
          <View>
            <Text style={styles.headingStyle}>Today</Text>
          </View>
          <View>
            <TransactionCard
              title="Facebook"
              price="+ $7000"
              reason="Salary"
              time="12:45 PM"
              logo={require("../assets/facebook.png")}
              priceColor={Color.textGreen}
            />
            <TransactionCard
              title="Vodafone"
              price="- $58"
              reason="Phone"
              time="10:35 AM"
              logo={require("../assets/vodafone.png")}
              priceColor={Color.textRed}
            />
            <TransactionCard
              title="Uber Premium"
              price="- $8.75"
              reason="Transport"
              time="8:30 AM"
              logo={require("../assets/uber.png")}
              priceColor={Color.textRed}
            />

            <TransactionCard
              title="Foodpanda"
              price="- $15.85"
              reason="Meal"
              time="10:30 PM"
              logo={require("../assets/foodpanda.png")}
              priceColor={Color.textRed}
            />
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.headingStyle}>Yesterday</Text>
          </View>
          <View>
            <TransactionCard
              title="Uber Eats"
              price="2 $25"
              reason="Meal"
              time="1:30 PM"
              logo={require("../assets/ubereats.png")}
              priceColor={Color.textRed}
            />
            <TransactionCard
              title="Citibank"
              price="+ $975.48"
              reason="Wire Transfer"
              time="9:39 AM"
              logo={require("../assets/Citibank.png")}
              priceColor={Color.textGreen}
            />
            <TransactionCard
              title="Uber Premium"
              price="- $8.75"
              reason="Transport"
              time="8:30 AM"
              logo={require("../assets/uber.png")}
              priceColor={Color.textRed}
            />

            <TransactionCard
              title="Foodpanda"
              price="- $15.85"
              reason="Meal"
              time="10:30 PM"
              logo={require("../assets/foodpanda.png")}
              priceColor={Color.textRed}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  mainScrollView: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  headingStyle: {
    fontSize: 20,
    color: Color.dark,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyRegular,
    marginVertical: 20,
  },
});
