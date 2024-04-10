// import { instance } from "@/services/instance";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";

export const checkoutOrder = async (options: CheckoutOptions) => {
  const response = await RazorpayCheckout.open(options);
  return response;
};
