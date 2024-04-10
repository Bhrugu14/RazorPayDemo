import { checkoutOrder } from "@/services/payment";
import { useMutation } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { Alert } from "react-native";

export const usePaymentInitiate = () => {
  return useMutation({
    mutationKey: ["postPaymentInitiate"],
    mutationFn: checkoutOrder,
    onSuccess: (data) => {
      Alert.alert("Success", JSON.stringify(data));
    },
    onError: (error: HTTPError) => {
      Alert.alert("ERROR", JSON.stringify(error));
    },
  });
};
