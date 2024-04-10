// import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeScreen } from "@/components/template";
import { useTheme } from "@/theme";

import { isImageSourcePropType } from "@/types/guards/image";

import SendImage from "@/theme/assets/images/send.png";
import ColorsWatchImage from "@/theme/assets/images/colorswatch.png";
import TranslateImage from "@/theme/assets/images/translate.png";
import { usePaymentInitiate } from "@/queryHooks/paymentHooks";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

function Example() {
  const [amount, setAmount] = useState<number>(0);
  const { gutters } = useTheme();
  const { mutate } = usePaymentInitiate();
  //   const onChangeTheme = () => {
  //     changeTheme(variant === "default" ? "dark" : "default");
  //   };

  //   const onChangeLanguage = (lang: "fr" | "en") => {
  //     void i18next.changeLanguage(lang);
  //   };

  if (
    !isImageSourcePropType(SendImage) ||
    !isImageSourcePropType(ColorsWatchImage) ||
    !isImageSourcePropType(TranslateImage)
  ) {
    throw new Error("Image source is not valid");
  }

  const RazorPayInitiate = () => {
    const options = {
      description: "Credits towards consultation",
      image:
        "https://static.startuptalky.com/2021/09/Buy-Medical-Supplies-Online-With-Top-Medical-Equipment-Store-In-India-startuptalky--13--2.jpg",
      currency: "INR",
      key: "rzp_test_rGYYYI5HkVBBNl",
      amount,
      name: "Razor Pay Demo",
      order_id: "order_NwsInWeQFZKntd", // Replace this with an order_id created using Orders API.
      prefill: {
        email: "bhrugu@example.com",
        contact: "9999999999",
        name: "Bhrugu",
      },
      theme: { color: "#129999" },
    };
    mutate(options);
  };

  return (
    <SafeScreen>
      <ScrollView>
        <View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
          <View>
            <Text>Welcome to Razor Pay Demo</Text>
            {/* <Text style={{ marginTop: 10, fontSize: 15 }}>
              Enter Order Amount to Generate
            </Text>
            <TextInput
              placeholder="Enter Order Amount to Generate"
              value={amount.toString()}
              style={{
                padding: 5,
                fontSize: 20,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 5,
              }}
              keyboardType="number-pad"
              onChangeText={(value) => {
                setAmount(Number(value));
              }}
            /> */}
          </View>
          <TouchableOpacity
            style={{
              padding: 5,
              paddingVertical: 10,
              backgroundColor: "blue",
              alignItems: "center",
              borderRadius: 5,
            }}
            onPress={() => RazorPayInitiate()}
          >
            <Text style={{ color: "white" }}>Process Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Example;
