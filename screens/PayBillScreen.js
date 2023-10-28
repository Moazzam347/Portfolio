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
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import ButtonMain from "../components/ButtonMain";
import CardViewStyleComponent from "../components/CardViewStyleComponent";
import SuccessfullModel from "../components/SuccessfullModel";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PayBillScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modelVisible, setModalVisible] = useState(false);
  const { billTitle, billLogo, billLogoBackgroundColor, billReason } =
    route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={billTitle} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 20 }}
      >
        {/* Top Box Container */}
        <CardViewStyleComponent>
          <View style={[{ alignItems: "center" }]}>
            {/* Image */}
            <View
              style={[
                styles.logoContainer,
                { backgroundColor: billLogoBackgroundColor },
              ]}
            >
              <Image style={styles.logo} source={billLogo} />
            </View>

            {/* Detail */}
            <View style={styles.billDetailContainer}>
              <Text style={styles.textPrice}>$116.49</Text>
              <Text style={styles.textReason}>{billReason} </Text>
              <Text style={styles.textDate}>
                Last Payment Date: 24, May 2024
              </Text>
            </View>
          </View>
        </CardViewStyleComponent>

        {/* Bill Payment Form */}
        <CardViewStyleComponent>
          <View style={{}}>
            {/* Subscriber ID */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason, { fontSize: wp("5%") }]}>
                Subscriber ID
              </Text>
              <InputFieldPhone
                iconName="person-outline"
                placeholder="Your Subscriber ID"
              />
            </View>

            {/* Bill Number */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason, { fontSize: wp("5%") }]}>
                Bill Number
              </Text>
              <InputFieldPhone
                iconName="assignment"
                placeholder="Your Bill Number"
              />
            </View>

            {/* Amount */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason, { fontSize: wp("5%") }]}>
                Amount
              </Text>
              <InputFieldPhone
                iconName="attach-money"
                placeholder="Enter Your Amount"
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
        </CardViewStyleComponent>
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
        <SuccessfullModel />
      </Modal>
    </View>
  );
};

export default PayBillScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  logoContainer: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  logo: {
    width: wp("10%"),
    height: wp("10%"),
    resizeMode: "contain",
  },
  billDetailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    gap: 8,
  },
  textPrice: {
    fontSize: wp("6%"),
    fontFamily: FontFamily.gilroyBold,
  },
  textReason: {
    fontSize: wp("4.4%"),
    fontFamily: FontFamily.gilroyRegular,
  },
  textDate: {
    fontSize: wp("4%"),
    fontFamily: FontFamily.gilroyRegular,
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
