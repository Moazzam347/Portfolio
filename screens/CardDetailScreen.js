import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../components/TopNavigation";
import DebitCard from "../components/DebitCard";
import CardViewStyleComponent from "../components/CardViewStyleComponent";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import { MaterialIcons } from "@expo/vector-icons";
import TransactionCard from "../components/TransactionCard";
import { useNavigation } from "@react-navigation/native";

const CardDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title="Card Detail" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingBottom: 150, paddingHorizontal: 20 },
        ]}
      >
        {/* First Contianer */}
        <View style={styles.firstContainer}>
          <DebitCard
            cardColor={["#7DD0FF", "#2D4EF5"]}
            cardLogo={require("../assets/mastercard.png")}
            cardNavigation={() => navigation.navigate("CardDetail")}
            cardholderName="MUHAMMAD MOAZZAM"
            expiryDate="10/27"
            cardNumber="5300 5848 9581 5845"
            cvv="530"
          />
        </View>

        {/* Second Contianer */}
        <View style={styles.secondContainer}>
          <CardViewStyleComponent style={styles.cardStyle}>
            {/* First */}
            <View>
              <View style={styles.textFirstContainer}>
                <Text style={[styles.text]}>Recieved</Text>
                <Text style={[styles.text]}>(June)</Text>
              </View>
              <View>
                <Text style={[styles.text, { fontSize: 24 }]}>$9086</Text>
              </View>
            </View>

            {/* Second */}
            <View>
              <View style={styles.textFirstContainer}>
                <Text style={[styles.text]}>Available</Text>
                {/* <Text style={[styles.text]}>(June)</Text> */}
              </View>
              <View>
                <Text
                  style={[styles.text, { fontSize: 34, fontWeight: "bold" }]}
                >
                  $9086
                </Text>
              </View>
            </View>

            {/* Third */}
            <View>
              <View style={styles.textFirstContainer}>
                <Text style={[styles.text]}>Sent</Text>
                <Text style={[styles.text]}>(June)</Text>
              </View>
              <View>
                <Text style={[styles.text, { fontSize: 24 }]}>$4642</Text>
              </View>
            </View>
          </CardViewStyleComponent>
        </View>

        {/* Third Contianer */}
        <View style={styles.thirdContainer}>
          <CardViewStyleComponent>
            {/* Cardholder Name */}
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.textHeading}>Cardholder Name</Text>
              <View style={styles.informationField}>
                <MaterialIcons
                  name="person-outline"
                  size={30}
                  color={Color.dark}
                />
                <Text
                  style={[
                    styles.textHeading,
                    { fontFamily: FontFamily.gilroyBold },
                  ]}
                >
                  Muhammad Moazzam
                </Text>
              </View>
            </View>

            {/* Card Number */}
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.textHeading}>Card Number</Text>
              <View style={styles.informationField}>
                <MaterialIcons
                  name="credit-card"
                  size={30}
                  color={Color.dark}
                />
                <Text
                  style={[
                    styles.textHeading,
                    { fontFamily: FontFamily.gilroyBold },
                  ]}
                >
                  5300 5848 9581 5845
                </Text>
              </View>
            </View>

            {/* Expires and CVV */}
            <View
              style={[
                styles.informationField,
                { justifyContent: "space-between" },
              ]}
            >
              {/* Expires */}
              <View style={{ marginVertical: 10 }}>
                <Text style={styles.textHeading}>Expires</Text>
                <View style={styles.informationField}>
                  <MaterialIcons
                    name="calendar-today"
                    size={30}
                    color={Color.dark}
                  />
                  <Text
                    style={[
                      styles.textHeading,
                      { fontFamily: FontFamily.gilroyBold },
                    ]}
                  >
                    10/27
                  </Text>
                </View>
              </View>
              {/* CVV */}
              <View style={{ marginVertical: 10 }}>
                <Text style={styles.textHeading}>CVV</Text>
                <View style={styles.informationField}>
                  <MaterialIcons
                    name="lock-outline"
                    size={30}
                    color={Color.dark}
                  />
                  <Text
                    style={[
                      styles.textHeading,
                      { fontFamily: FontFamily.gilroyBold },
                    ]}
                  >
                    530
                  </Text>
                </View>
              </View>
            </View>
          </CardViewStyleComponent>
        </View>

        {/* Fourth Contianer */}
        <View style={styles.fourthContainer}>
          {/* Transaction Heading */}
          <View style={styles.transactionHeadingContainer}>
            <Text style={styles.transactionText}>Transactions</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {},

  // First container
  firstContainer: {
    alignItems: "center",
  },

  // Second container
  secondContainer: {},

  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textFirstContainer: {
    marginBottom: 10,
  },

  text: {
    fontFamily: FontFamily.gilroyRegular,
    color: Color.textBlack,
    letterSpacing: 0.2,
    textAlign: "center",
  },

  // Third container
  thirdContainer: {},
  textHeading: {
    fontFamily: FontFamily.gilroyRegular,
    color: Color.textBlack,
    letterSpacing: 0.2,
    fontSize: 18,
    marginVertical: 5,
  },
  informationField: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginTop: 4,
  },

  // Fourth container
  fourthContainer: {},

  transactionHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  transactionText: {
    fontSize: 24,
    color: Color.dark,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
  },
  transactionContainer: {
    paddingVertical: 10,
  },
});
