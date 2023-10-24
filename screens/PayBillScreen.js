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

const PayBillScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modelVisible, setModalVisible] = useState(false);
  const { billTitle, billLogo, billLogoBackgroundColor, billReason } =
    route.params;

  return (
    <View style={{ backgroundColor: Color.white }}>
      <StatusBar style="auto" />
      <TopNavigation title={billTitle} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150, paddingHorizontal: 20 }}
      >
        {/* Top Box Container */}
        <View style={[styles.topBoxContainer, { alignItems: "center" }]}>
          {/* Image */}
          <View
            style={[
              styles.logoContainer,
              { backgroundColor: billLogoBackgroundColor },
            ]}
          >
            <Image source={billLogo} />
          </View>

          {/* Detail */}
          <View style={styles.billDetailContainer}>
            <Text style={styles.textPrice}>$116.49</Text>
            <Text style={styles.textReason}>{billReason} </Text>
            <Text style={styles.textDate}>Last Payment Date: 24, May 2024</Text>
          </View>
        </View>

        {/* Bill Payment Form */}
        <View style={styles.topBoxContainer}>
          {/* Subscriber ID */}
          <View style={styles.fieldContainer}>
            <Text
              style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
            >
              Subscriber ID
            </Text>
            <InputFieldPhone
              iconName="person-outline"
              placeholder="Your Subscriber ID"
            />
          </View>

          {/* Bill Number */}
          <View style={styles.fieldContainer}>
            <Text
              style={[styles.textReason, { fontSize: 18, fontWeight: "600" }]}
            >
              Bill Number
            </Text>
            <InputFieldPhone
              iconName="assignment"
              placeholder="Your Bill Number"
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
  topBoxContainer: {
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: 25,
    shadow: Color.primary,
    elevation: 4,
    marginTop: 25,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  billDetailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    gap: 5,
  },
  textPrice: { fontSize: 20, fontFamily: FontFamily.gilroyBold },
  textReason: { fontSize: 16, fontFamily: FontFamily.gilroyRegular },
  textDate: { fontSize: 14, fontFamily: FontFamily.gilroyRegular },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
  },

  // Button

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
