const headers = {
  origin: "https://subgraph.satsuma-prod.com",
  referer: "https://subgraph.satsuma-prod.com",
};

const subgraphUrl = "https://subgraph.satsuma-prod.com/28e9d214a5ae/stephanes-team/prod-spro-ethereum-subgraph/api";

const getTokenMetrics = async () => {
  const tokenMetricsQuery = `{
    tokenMetrics_collection {
      id
      totalCollateralAmount
      totalBorrowedAmount
    }
  }`;

  const result = await fetch(subgraphUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: tokenMetricsQuery,
    }),
  }).then((res) => res.json());
  return result?.data?.tokenMetrics_collection || [];
};

async function getData(isBorrowed = false) {
  const tokenMetrics = await getTokenMetrics();

  return tokenMetrics.reduce((acc, token) => {
    const totalBorrowedAmount = parseFloat(token.totalBorrowedAmount);

    return {
      ...acc,
      [token.id]:
        // We only need to add the total collateral amount if it's not borrowed
        totalBorrowedAmount + parseFloat(isBorrowed ? 0 : token.totalCollateralAmount),
    };
  }, {});
}

module.exports = {
  ethereum: {
    tvl: () => getData(),
    borrowed: () => getData(true),
  },
};
// node test.js projects/spro/index.js
