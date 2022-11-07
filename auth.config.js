import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { domainName } from "./const/yourDetails";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || "",
  domain: "https://first-class-eta.vercel.app/",
});
