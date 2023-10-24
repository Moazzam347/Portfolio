import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import { FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import CardCategory from "../components/CardCategory";
import DebitCard from "../components/DebitCard";
import TransactionCard from "../components/TransactionCard";
import HomeTopNavigation from "../components/HomeTopNavigation";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeTopNavigation title={"My Wallet"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollView}
      >
        {/* Debit Cards */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardScrollContainer}
        >
          <DebitCard
            cardColor={["#7DD0FF", "#2D4EF5"]}
            cardLogo={require("../assets/mastercard.png")}
            cardNavigation={() => navigation.navigate("AddBankAccount")}
          />
          <DebitCard
            cardColor={["#81EEAA", "#1D976C"]}
            cardLogo={require("../assets/visa.png")}
            cardNavigation={() => navigation.navigate("SendMoney")}
          />
          <DebitCard
            cardColor={["#FFAD7E", "#F5752D"]}
            cardLogo={require("../assets/applepay.png")}
            cardNavigation={() => navigation.navigate("CardDetail")}
          />
        </ScrollView>

        {/* Card Categories */}
        <ScrollView
          contentContainerStyle={styles.cardScrollContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <CardCategory
            title="Cards"
            cardBackgroundColor="#E4E7F7"
            cardImage={require("../assets/card.png")}
            cardNavigation={() => navigation.navigate("MyCard")}
          />
          <CardCategory
            title="Services"
            cardBackgroundColor="#F7EADE"
            cardImage={require("../assets/transfer.png")}
            cardNavigation={() => navigation.navigate("Services")}
          />
          <CardCategory
            title="Voucher"
            cardBackgroundColor="#DFF8ED"
            cardImage={require("../assets/voucher.png")}
            cardNavigation={() => navigation.navigate("Voucher")}
          />
          <CardCategory
            title="Pay Bill"
            cardBackgroundColor="#F3E7E7"
            cardImage={require("../assets/paybill.png")}
            cardNavigation={() => navigation.navigate("AllPayBillsList")}
          />
          <CardCategory
            title="Transaction"
            cardBackgroundColor="#fff"
            cardImage={require("../assets/transactions.png")}
            cardNavigation={() => navigation.navigate("Transactions")}
          />
        </ScrollView>

        {/* Transaction Heading */}
        <View style={styles.transactionHeadingContainer}>
          <Text style={styles.transactionText}>Transactions</Text>
          <Pressable onPress={() => navigation.navigate("Transactions")}>
            <Text style={styles.seeAllText}>See All</Text>
          </Pressable>
        </View>

        {/* Transaction List */}
        <View style={styles.transactionContainer}>
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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 24,
    backgroundColor: Color.white,
  },
  mainScrollView: {
    paddingBottom: 120,
  },
  cardScrollContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 30,
  },
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
  transactionContainer: {
    paddingHorizontal: 10,
  },
});
