import { ethers } from "ethers";
import { Liq } from "../utils/types";
import axios from "axios";

const WSTETH_KEY = "ethereum:0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0";
const API_URL = "https://usdn-public.api.smardex.io/usdn/positions/open";
const API_KEY = "";
const EXPLORER_BASE_URL = "https://smardex.io/usdn/explorer?search=";

const fetchOpenPositions = async () => {
  try {
    const { data } = await axios.get(API_URL, {
      headers: { "x-api-key": API_KEY },
    });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch USDN positions: ${error}`);
  }
};

const calculateLiquidationPrice = (position) => {
  if (!position.startPrice || !position.liquidationPenalty) {
    return 0;
  }

  const startPrice = parseFloat(position.startPrice);
  const liquidationPenalty = parseFloat(position.liquidationPenalty);

  return startPrice * (1 - liquidationPenalty * 0.1);
};

const formatPosition = (position) => {
  const owner =
    position.mainPosition?.lastOwner?.address || ethers.constants.AddressZero;
  const searchParam = position.txHash;
  const liquidationPrice = calculateLiquidationPrice(position);

  return {
    owner,
    liqPrice: liquidationPrice,
    collateral: WSTETH_KEY,
    collateralAmount: ethers.utils
      .parseEther(position.amountRemaining)
      .toString(),
    extra: {
      url: `${EXPLORER_BASE_URL}${searchParam}`,
    },
  };
};

const positions = async (): Promise<Liq[]> => {
  try {
    const positionsData = await fetchOpenPositions();
    return positionsData.map(formatPosition);
  } catch (error) {
    console.error(`Error retrieving USDN positions: ${error}`);
    return [];
  }
};

module.exports = {
  ethereum: {
    liquidations: positions,
  },
};
