import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import SuccessfullModel from "../components/SuccessfullModel";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CardViewStyleCompnent from "../components/CardViewStyleComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SendMoneyScreen = () => {
    const [modelVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState("Amount");
    const [accountName, setAccountName] = useState("Account Name");
    const [accountNumber, setAccountNumber] = useState("Account Number");
    const modelMessage = `You have successfully sent ${amount} to ${accountName} `;

    const handleAmount = (text) => {
        const showAmount = text + " Rs"
        setAmount(showAmount);
        console.log("Amount: ", text);
    }
    const handleAccount = (text) => {
        setAccountName( text);
        console.log("Account Name: ", text);
    }
    const handleNumber = (text) => {
        setAccountNumber(text);
        console.log("Account Number: ", text);
    }

  return (
    <View style={{ backgroundColor: Color.white }}>
      <StatusBar style="auto" />
      <TopNavigation title={"Send Money"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
      >
        {/* Top Box Container */}
        <LinearGradient
          colors={["#79ACFF", "#3D87FF"]}
          style={[
            styles.topBoxContainer,
            { alignItems: "center", backgroundColor: Color.primary },
          ]}
        >
          {/* Image */}
          <View style={[styles.logoContainer]}>
            <Image
              style={styles.logo}
              source={require("../assets/roundAvatar.png")}
            />
          </View>

          {/* Detail */}
          <View style={styles.billDetailContainer}>
            <Text style={styles.textPrice}>{amount} </Text>
            <Text style={[styles.textReason, { color: Color.white }]}>
              {accountName}
            </Text>
            <Text style={styles.textDate}>{accountNumber} </Text>
          </View>
        </LinearGradient>

        <CardViewStyleCompnent>

        {/* Bill Payment Form */}
        <View>
          {/* Account Name */}
          <View style={styles.fieldContainer}>
            <Text
              style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
            >
              Account Name
            </Text>
            <InputFieldPhone
              iconName="person-outline"
              placeholder="Account Name"
              getPhoneNumber={handleAccount}
            />
          </View>

          {/* Bill Number */}
          <View style={styles.fieldContainer}>
            <Text
              style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
            >
              Account Number
            </Text>
            <InputFieldPhone
              iconName="assignment"
              placeholder="Account Number"
              getPhoneNumber={handleNumber}
              keyboardType={"numeric"}
            />
          </View>

          {/* Amount */}
          <View style={styles.fieldContainer}>
            <Text
              style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
            >
              Amount
            </Text>
            <InputFieldPhone
              iconName="attach-money"
              placeholder="Enter Your Amount"
              getPhoneNumber={handleAmount}
              keyboardType={"numeric"}
            />
          </View>

          {/* Pay Now Button */}

          <View style={{ alignItems: "center" }}>
            {/* Button */}
            <View>
              <Pressable
                onPress={() => setModalVisible(true)}
                style={[styles.buttonContainer]}
              >
                <Text style={[styles.buttonText]}>Pay Now</Text>
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
        <SuccessfullModel detail={modelMessage} />
      </Modal>
    </View>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  topBoxContainer: {
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: 20,
    shadow: Color.primary,
    elevation: 4,
    marginTop: 25,
  },
  logoContainer: {
    width: wp("25%"),
    height: wp("25%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  logo: {
    width: wp("25%"),
    height: wp("25%"),
    resizeMode: "contain",
  },
  billDetailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    gap: 5,
  },
  textPrice: {
    fontSize: wp("8%"),
    fontFamily: FontFamily.gilroyBold,
    color: Color.white,
  },
  textReason: {
    fontSize: wp("5%"),
    fontFamily: FontFamily.gilroyRegular,
    // color: Color.white,
  },
  textDate: {
    fontSize: wp("4%"),
    fontFamily: FontFamily.gilroyRegular,
    color: Color.white,
  },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
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
