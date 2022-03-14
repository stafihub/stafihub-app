import { CosmosNetwork } from "@stafihub/apps-config";
import { CosmosNetworkParams } from "..";

export type NetworkConfig = { [key in CosmosNetwork]: CosmosNetworkParams };
