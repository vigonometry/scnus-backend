import { createApplication } from "graphql-modules";
import AdminModule from './types/Admin.js'
import CustomerModule from "./types/Customer.js";
import HTTPResponseModule from "./types/HTTPResponse.js";
import MerchantModule from "./types/Merchant.js";
import NFTModule from "./types/NFT.js";
import RedemptionModule from "./types/Redemption.js";
import UserModule from "./types/User.js";

export const apolloApplication = createApplication({
	modules: [
		HTTPResponseModule,
		UserModule,
		AdminModule,
		CustomerModule,
		MerchantModule,
		NFTModule,
		RedemptionModule
	]
})