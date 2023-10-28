import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import SuccessfullModel from "../components/SuccessfullModel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CardViewStyleComponent from "../components/CardViewStyleComponent";

const PayProceedScreen = () => {
  const navigation = useNavigation();
  const [modelVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Pay"} />

      <ScrollView
        contentContainerStyle={[styles.formContainer]}
        showsVerticalScrollIndicator={false}
      >
        <CardViewStyleComponent>
          {/* upper container */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageLogo}
              source={require("../assets/wallmart.png")}
            />
          </View>

          {/* lower container */}
          <View>
            {/* Bill Payment Form */}
            <View style={styles.topBoxContainer}>
              {/* Amount */}
              <View style={styles.fieldContainer}>
                <Text style={[styles.textReason]}>Amount</Text>
                <InputFieldPhone
                  iconName="attach-money"
                  placeholder="Enter Your Amount"
                />
              </View>

              {/* Coupon */}
              <View style={styles.fieldContainer}>
                <Text style={[styles.textReason]}>Coupon</Text>
                <InputFieldPhone
                  iconName="assignment"
                  placeholder="Your Coupon"
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
                    <Text style={[styles.buttonText]}>Proceed</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </CardViewStyleComponent>
      </ScrollView>

      {/* <View style={styles.mainContainer}></View> */}

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
          detail="You have successfully completed your Payment"
          transaction=""
        />
      </Modal>
    </View>
  );
};

export default PayProceedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  formContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 50,
    // backgroundColor: Color.white,
    // marginHorizontal: wp("2%"),
  },
  // mainContainer: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  //   marginTop: 60,
  // },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp("10%"),
  },
  imageLogo: {
    width: wp("40%"),
    height: wp("20%"),
    resizeMode: "contain",
  },
  topBoxContainer: {
    paddingBottom: 40,
    marginTop: 35,
  },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
  },
  textReason: {
    fontSize: wp("4.5%"),
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "700",
    letterSpacing: 1,
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
