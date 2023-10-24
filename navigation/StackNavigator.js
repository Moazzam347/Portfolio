import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen1 from "../screens/OnboardingScreen1";
import OnboardingScreen2 from "../screens/OnboardingScreen2";
import OnboardingScreen3 from "../screens/OnboardingScreen3";
import OnboardingScreen4 from "../screens/OnboardingScreen4";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MyCardScreen from "../screens/MyCardScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import ServicesScreen from "../screens/ServicesScreen";
import AllPayBillsListScreen from "../screens/AllPayBillsListScreen";
import PayBillScreen from "../screens/PayBillScreen";
import VoucherScreen from "../screens/VoucherScreen";
import VerificationScreen from "../screens/VerificationScreen";
import VoucherDetailScreen from "../screens/VoucherDetailScreen";
import PayProceedScreen from "../screens/PayProceedScreen";
import AddBankAccountScreen from "../screens/AddBankAccountScreen";
import AddCardScreen from "../screens/AddCardScreen";
import SendMoneyScreen from "../screens/SendMoneyScreen";
import CardDetailScreen from "../screens/CardDetailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
        <Stack.Screen name="Onboarding4" component={OnboardingScreen4} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MyCard" component={MyCardScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="AllPayBillsList" component={AllPayBillsListScreen} />
        <Stack.Screen name="PayBill" component={PayBillScreen} />
        <Stack.Screen name="Voucher" component={VoucherScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="VoucherDetail" component={VoucherDetailScreen} />
        <Stack.Screen name="PayProceed" component={PayProceedScreen} />
        <Stack.Screen name="AddBankAccount" component={AddBankAccountScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
        <Stack.Screen name="CardDetail" component={CardDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
