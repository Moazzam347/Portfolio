import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import ButtonMain from "../components/ButtonMain";
import DebitCard from "../components/DebitCard";
import SuccessfullModel from "../components/SuccessfullModel";
import CardViewStyleCompnent from "../components/CardViewStyleComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AddCardScreen = () => {
  const navigation = useNavigation();
  const [modelVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("YOUR NAME");
  const [number, setNumber] = useState("**** **** **** ****");
  const [expiry, setExpiry] = useState("MM/YY");
  const [cvv, setCvv] = useState("***");

  const formatCreditCardNumber = (input) => {
    // Remove any existing spaces and non-numeric characters
    const cleanInput = input.replace(/\D/g, "");

    // Add a space after every 4 characters
    const formattedInput = cleanInput.replace(/(.{4})/g, "$1 ");

    return formattedInput.trim(); // Trim any leading or trailing spaces
  };

  const handleName = (text) => {
    setName(text);
    console.log("Name: ", text);
  };
  const handleNumber = (input) => {
    const formattedInput = formatCreditCardNumber(input);
    setNumber(formattedInput);
    console.log("Number: ", formattedInput);
  };
  const handleExpiry = (text) => {
    setExpiry(text);
    console.log("Expiry: ", text);
  };
  const handleCvv = (text) => {
    setCvv(text);
    console.log("CVV: ", text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Add Card"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainContainer}
      >
        {/* upper container */}
        <View style={{ alignItems: "center" }}>
          <DebitCard
            cardholderName={name}
            expiryDate={expiry}
            cardNumber={number}
            cvv={cvv}
            cardNavigation={() => navigation.navigate("AddCard")}
          />
        </View>

        <CardViewStyleCompnent>
          {/* lower container */}
          <View>
            {/* Bill Payment Form */}
            <View style={styles.topBoxContaine}>
              {/* Cardholder Name */}
              <View style={styles.fieldContainer}>
                <Text style={[styles.textReason]}>Cardholder Name</Text>
                <InputFieldPhone
                  iconName="person-outline"
                  placeholder="Name"
                  getPhoneNumber={handleName}
                />
              </View>

              {/* Card Number */}
              <View style={styles.fieldContainer}>
                <Text style={[styles.textReason]}>Card Number</Text>
                <InputFieldPhone
                  iconName="credit-card"
                  placeholder="Digits"
                  keyboardType={"numeric"}
                  getPhoneNumber={handleNumber}
                  maxLength={16}
                />
              </View>

              {/* Expires and CVV */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/*  Expires */}
                <View style={styles.fieldContainer}>
                  <Text style={[styles.textReason]}>Expires</Text>
                  <InputFieldPhone
                    iconName="calendar-today"
                    placeholder="Date"
                    textInputWidth={wp("15%")}
                    keyboardType={"name-phone-pad"}
                    getPhoneNumber={handleExpiry}
                    maxLength={5}
                  />
                </View>
                {/* CVV */}
                <View style={styles.fieldContainer}>
                  <Text style={[styles.textReason]}>CVV</Text>
                  <InputFieldPhone
                    iconName="lock-outline"
                    placeholder="Code"
                    keyboardType={"numeric"}
                    textInputWidth={wp("15%")}
                    getPhoneNumber={handleCvv}
                    maxLength={3}
                  />
                </View>
              </View>

              {/* Pay Now Button */}
              <View style={{ alignItems: "center" }}>
                {/* Button */}
                <Pressable
                  onPress={() => setModalVisible(true)}
                  style={[styles.buttonContainer]}
                >
                  <Text style={[styles.buttonText]}>Proceed</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </CardViewStyleCompnent>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modelVisible}
        onRequestClose={() => {
          setModalVisible(!modelVisible);
        }}
      >
        <SuccessfullModel
          detail="Your Card has been added successfully!"
          transaction=""
          //   buttonNavigation={()=>navigation.navigate("")}
        />
      </Modal>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainContainer: {
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
  },
  textReason: {
    fontSize: wp("5%"),
    fontFamily: FontFamily.gilroyRegular,
  },

  //   Button
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: Color.primary,
    borderRadius: 10,
    width: wp("80%"),
  },
  buttonText: {
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    fontSize: hp("2.2%"),
    color: Color.white,
  },
});
