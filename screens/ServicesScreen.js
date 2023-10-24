import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopNavigation from "../components/TopNavigation";
import CardCategory from "../components/CardCategory";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";

const ServicesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Services"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollView}
      >
        <View style={styles.mostUsedServiceContainer}>
          <Text style={styles.servicesText}>Most Used</Text>
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
              title="Voucher"
              cardBackgroundColor="#DFF8ED"
              cardImage={require("../assets/voucher.png")}
              cardNavigation={() => navigation.navigate("Voucher")}
            />
            <CardCategory
              title="Payments"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/payment.png")}
              cardNavigation={() => navigation.navigate("SendMoney")}
            />
            <CardCategory
              title="Pay Bill"
              cardBackgroundColor="#F3E7E7"
              cardImage={require("../assets/paybill.png")}
              cardNavigation={() => navigation.navigate("AllPayBillsList")}
            />
          </ScrollView>
        </View>
        <View>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.servicesText}>All Services</Text>
          </View>
          <View style={styles.allServicesContainer}>
            <CardCategory
              title="Cards"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/card.png")}
              cardNavigation={() => navigation.navigate("MyCard")}
            />
            <CardCategory
              title="Voucher"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/voucher.png")}
              cardNavigation={() => navigation.navigate("Voucher")}
            />
            <CardCategory
              title="Payments"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/payment.png")}
              cardNavigation={() => navigation.navigate("SendMoney")}
            />
            <CardCategory
              title="Pay Bill"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/paybill.png")}
              cardNavigation={() => navigation.navigate("AllPayBillsList")}
            />
            <CardCategory
              title="Transaction"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/transactions.png")}
              cardNavigation={() => navigation.navigate("Transactions")}
            />
            <CardCategory
              title="Bank AC"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/bank.png")}
              cardNavigation={() => navigation.navigate("AddBankAccount")}
            />
            <CardCategory
              title="Receive"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/card.png")}
              cardNavigation={() => navigation.navigate("Transactions")}
            />
            <CardCategory
              title="Top Up"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/topup.png")}
              cardNavigation={() => navigation.navigate("Transactions")}
            />
            <CardCategory
              title="Find ATM"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/atm.png")}
              cardNavigation={() => navigation.navigate("MyCard")}
            />
            <CardCategory
              title="Stats"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/stats.png")}
              cardNavigation={() => navigation.navigate("MyCard")}
            />
            <CardCategory
              title="Transfer"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/transfer.png")}
              cardNavigation={() => navigation.navigate("SendMoney")}
            />
            <CardCategory
              title="Withdraw"
              cardBackgroundColor="#fff"
              cardImage={require("../assets/withdraw.png")}
              cardNavigation={() => navigation.navigate("SendMoney")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: { paddingBottom: 40, backgroundColor: Color.white },
  mainScrollView: {},
  allServicesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 30,
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  mostUsedServiceContainer: {
    paddingHorizontal: 20,
  },
  servicesText: {
    fontSize: 20,
    color: Color.dark,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    marginVertical: 20,
  },
});
