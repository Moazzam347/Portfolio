import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import SuccessfullModel from "../components/SuccessfullModel";

const PayProceedScreen = () => {
    const navigation = useNavigation();
    const [modelVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Pay"} />

      <View style={styles.mainContainer}>
        {/* upper container */}
        <View style={styles.imageContainer}>
          <Image source={require("../assets/wallmart.png")} />
        </View>

        {/* lower container */}
        <View>
          {/* Bill Payment Form */}
          <View style={styles.topBoxContainer}>
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
              />
            </View>

            {/* Coupon */}
            <View style={styles.fieldContainer}>
              <Text
                style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
              >
                Coupon
              </Text>
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
      </View>

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
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 60,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  topBoxContainer: {
    backgroundColor: Color.white,
    borderRadius: 25,
    shadow: Color.primary,
    elevation: 4,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    marginTop: 35,
  },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
  },
  textReason: {
    fontSize: 16,
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
    width: 300,
  },
  buttonText: {
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    fontSize: 18,
    color: Color.white,
  },
});
