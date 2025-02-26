module.exports = {
  usdnProtocolAbi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
    {
      inputs: [{ internalType: "uint48", name: "schedule", type: "uint48" }],
      name: "AccessControlEnforcedDefaultAdminDelay",
      type: "error",
    },
    {
      inputs: [],
      name: "AccessControlEnforcedDefaultAdminRules",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "defaultAdmin", type: "address" }],
      name: "AccessControlInvalidDefaultAdmin",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "bytes32", name: "neededRole", type: "bytes32" },
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error",
    },
    { inputs: [], name: "EnforcedPause", type: "error" },
    { inputs: [], name: "ExpectedPause", type: "error" },
    {
      inputs: [],
      name: "InitializableReentrancyGuardInvalidInitialization",
      type: "error",
    },
    {
      inputs: [],
      name: "InitializableReentrancyGuardReentrantCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InitializableReentrancyGuardUninitialized",
      type: "error",
    },
    { inputs: [], name: "InvalidInitialization", type: "error" },
    { inputs: [], name: "NotInitializing", type: "error" },
    {
      inputs: [
        { internalType: "uint8", name: "bits", type: "uint8" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "SafeCastOverflowedUintDowncast",
      type: "error",
    },
    { inputs: [], name: "UnauthorizedCallContext", type: "error" },
    { inputs: [], name: "UpgradeFailed", type: "error" },
    { inputs: [], name: "UsdnProtocolAmountReceivedTooSmall", type: "error" },
    {
      inputs: [
        { internalType: "uint128", name: "amountToClose", type: "uint128" },
        { internalType: "uint128", name: "positionAmount", type: "uint128" },
      ],
      name: "UsdnProtocolAmountToCloseHigherThanPositionAmount",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolDeadlineExceeded", type: "error" },
    { inputs: [], name: "UsdnProtocolDepositTooSmall", type: "error" },
    { inputs: [], name: "UsdnProtocolEmptyVault", type: "error" },
    { inputs: [], name: "UsdnProtocolEtherRefundFailed", type: "error" },
    {
      inputs: [{ internalType: "int256", name: "imbalanceBps", type: "int256" }],
      name: "UsdnProtocolImbalanceLimitReached",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInsufficientOracleFee", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidAddressTo", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidAddressValidator", type: "error" },
    {
      inputs: [{ internalType: "uint8", name: "assetDecimals", type: "uint8" }],
      name: "UsdnProtocolInvalidAssetDecimals",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidBurnSdexOnDepositRatio",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidDelegationSignature",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidEMAPeriod", type: "error" },
    {
      inputs: [],
      name: "UsdnProtocolInvalidExpoImbalanceLimit",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidFeeCollector", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidFundingSF", type: "error" },
    {
      inputs: [],
      name: "UsdnProtocolInvalidLiquidationIteration",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidLiquidationPenalty",
      type: "error",
    },
    {
      inputs: [
        { internalType: "uint128", name: "liquidationPrice", type: "uint128" },
        { internalType: "uint128", name: "startPrice", type: "uint128" },
      ],
      name: "UsdnProtocolInvalidLiquidationPrice",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidLiquidationRewardsManagerAddress",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidLongExpo", type: "error" },
    {
      inputs: [],
      name: "UsdnProtocolInvalidLongImbalanceTarget",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidMaxLeverage", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidMiddlewareAddress", type: "error" },
    {
      inputs: [],
      name: "UsdnProtocolInvalidMiddlewareLowLatencyDelay",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidMinLeverage", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidMinLongPosition", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidPendingAction", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidPendingActionData", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidPositionFee", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidProtocolFeeBps", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidRebalancerBonus", type: "error" },
    {
      inputs: [],
      name: "UsdnProtocolInvalidRebalancerMinAssetDeposit",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidRebalancerMinLeverage",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidRebalancerTick", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidSafetyMarginBps", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidSdexRewardsRatio", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidSecurityDeposit", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidTargetUsdnPrice", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidTokenDecimals", type: "error" },
    {
      inputs: [{ internalType: "address", name: "usdnAddress", type: "address" }],
      name: "UsdnProtocolInvalidUsdn",
      type: "error",
    },
    {
      inputs: [],
      name: "UsdnProtocolInvalidUsdnRebaseThreshold",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolInvalidValidatorDeadline", type: "error" },
    { inputs: [], name: "UsdnProtocolInvalidVaultFee", type: "error" },
    { inputs: [], name: "UsdnProtocolLeverageTooHigh", type: "error" },
    { inputs: [], name: "UsdnProtocolLeverageTooLow", type: "error" },
    {
      inputs: [
        { internalType: "uint128", name: "liquidationPrice", type: "uint128" },
        {
          internalType: "uint128",
          name: "maxLiquidationPrice",
          type: "uint128",
        },
      ],
      name: "UsdnProtocolLiquidationPriceSafetyMargin",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolLongPositionTooSmall", type: "error" },
    { inputs: [], name: "UsdnProtocolMinInitAmount", type: "error" },
    { inputs: [], name: "UsdnProtocolNoPendingAction", type: "error" },
    {
      inputs: [{ internalType: "address", name: "validator", type: "address" }],
      name: "UsdnProtocolNotEligibleForRefund",
      type: "error",
    },
    {
      inputs: [
        { internalType: "uint256", name: "currentVersion", type: "uint256" },
        { internalType: "uint256", name: "providedVersion", type: "uint256" },
      ],
      name: "UsdnProtocolOutdatedTick",
      type: "error",
    },
    { inputs: [], name: "UsdnProtocolPaymentCallbackFailed", type: "error" },
    { inputs: [], name: "UsdnProtocolPendingAction", type: "error" },
    { inputs: [], name: "UsdnProtocolPositionNotValidated", type: "error" },
    { inputs: [], name: "UsdnProtocolSecurityDepositTooLow", type: "error" },
    { inputs: [], name: "UsdnProtocolSlippageMaxPriceExceeded", type: "error" },
    { inputs: [], name: "UsdnProtocolSlippageMinPriceExceeded", type: "error" },
    { inputs: [], name: "UsdnProtocolTimestampTooOld", type: "error" },
    { inputs: [], name: "UsdnProtocolUnauthorized", type: "error" },
    { inputs: [], name: "UsdnProtocolUnexpectedBalance", type: "error" },
    { inputs: [], name: "UsdnProtocolZeroAmount", type: "error" },
    { inputs: [], name: "UsdnProtocolZeroLongTradingExpo", type: "error" },
    { inputs: [], name: "UsdnProtocolZeroTotalExpo", type: "error" },
    {
      anonymous: false,
      inputs: [],
      name: "DefaultAdminDelayChangeCanceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint48",
          name: "newDelay",
          type: "uint48",
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "effectSchedule",
          type: "uint48",
        },
      ],
      name: "DefaultAdminDelayChangeScheduled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "DefaultAdminTransferCanceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "acceptSchedule",
          type: "uint48",
        },
      ],
      name: "DefaultAdminTransferScheduled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint64",
          name: "version",
          type: "uint64",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    { stateMutability: "nonpayable", type: "fallback" },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "acceptDefaultAdminTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newAdmin", type: "address" }],
      name: "beginDefaultAdminTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "cancelDefaultAdminTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint48", name: "newDelay", type: "uint48" }],
      name: "changeDefaultAdminDelay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultAdmin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultAdminDelay",
      outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultAdminDelayIncreaseWait",
      outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "domainSeparatorV4",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        { internalType: "bytes1", name: "fields", type: "bytes1" },
        { internalType: "string", name: "name", type: "string" },
        { internalType: "string", name: "version", type: "string" },
        { internalType: "uint256", name: "chainId", type: "uint256" },
        { internalType: "address", name: "verifyingContract", type: "address" },
        { internalType: "bytes32", name: "salt", type: "bytes32" },
        { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint128", name: "timestamp", type: "uint128" }],
      name: "funding",
      outputs: [
        { internalType: "int256", name: "funding_", type: "int256" },
        { internalType: "int256", name: "fundingPerDay_", type: "int256" },
        { internalType: "int256", name: "oldLongExpo_", type: "int256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint128", name: "price", type: "uint128" }],
      name: "getEffectiveTickForPrice",
      outputs: [{ internalType: "int24", name: "tick_", type: "int24" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "price", type: "uint128" },
        { internalType: "uint256", name: "assetPrice", type: "uint256" },
        { internalType: "uint256", name: "longTradingExpo", type: "uint256" },
        {
          components: [
            { internalType: "uint256", name: "hi", type: "uint256" },
            { internalType: "uint256", name: "lo", type: "uint256" },
          ],
          internalType: "struct HugeUint.Uint512",
          name: "accumulator",
          type: "tuple",
        },
        { internalType: "int24", name: "tickSpacing", type: "int24" },
      ],
      name: "getEffectiveTickForPrice",
      outputs: [{ internalType: "int24", name: "tick_", type: "int24" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint128",
          name: "desiredLiqPriceWithoutPenalty",
          type: "uint128",
        },
        { internalType: "uint256", name: "assetPrice", type: "uint256" },
        { internalType: "uint256", name: "longTradingExpo", type: "uint256" },
        {
          components: [
            { internalType: "uint256", name: "hi", type: "uint256" },
            { internalType: "uint256", name: "lo", type: "uint256" },
          ],
          internalType: "struct HugeUint.Uint512",
          name: "accumulator",
          type: "tuple",
        },
        { internalType: "int24", name: "tickSpacing", type: "int24" },
        { internalType: "uint24", name: "liquidationPenalty", type: "uint24" },
      ],
      name: "getLiqPriceFromDesiredLiqPrice",
      outputs: [{ internalType: "uint128", name: "liqPrice_", type: "uint128" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId",
          type: "tuple",
        },
      ],
      name: "getLongPosition",
      outputs: [
        {
          components: [
            { internalType: "bool", name: "validated", type: "bool" },
            { internalType: "uint40", name: "timestamp", type: "uint40" },
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint128", name: "totalExpo", type: "uint128" },
            { internalType: "uint128", name: "amount", type: "uint128" },
          ],
          internalType: "struct IUsdnProtocolTypes.Position",
          name: "pos_",
          type: "tuple",
        },
        { internalType: "uint24", name: "liquidationPenalty_", type: "uint24" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId",
          type: "tuple",
        },
        { internalType: "uint128", name: "price", type: "uint128" },
        { internalType: "uint128", name: "timestamp", type: "uint128" },
      ],
      name: "getPositionValue",
      outputs: [{ internalType: "int256", name: "value_", type: "int256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
      name: "getRoleAdmin",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "int24", name: "tick", type: "int24" }],
      name: "getTickLiquidationPenalty",
      outputs: [{ internalType: "uint24", name: "liquidationPenalty_", type: "uint24" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "hasRole",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "depositAmount", type: "uint128" },
        { internalType: "uint128", name: "longAmount", type: "uint128" },
        { internalType: "uint128", name: "desiredLiqPrice", type: "uint128" },
        { internalType: "bytes", name: "currentPriceData", type: "bytes" },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "contract IUsdn", name: "usdn", type: "address" },
        {
          internalType: "contract IERC20Metadata",
          name: "sdex",
          type: "address",
        },
        {
          internalType: "contract IERC20Metadata",
          name: "asset",
          type: "address",
        },
        {
          internalType: "contract IBaseOracleMiddleware",
          name: "oracleMiddleware",
          type: "address",
        },
        {
          internalType: "contract IBaseLiquidationRewardsManager",
          name: "liquidationRewardsManager",
          type: "address",
        },
        { internalType: "int24", name: "tickSpacing", type: "int24" },
        { internalType: "address", name: "feeCollector", type: "address" },
        {
          internalType: "contract IUsdnProtocolFallback",
          name: "protocolFallback",
          type: "address",
        },
      ],
      name: "initializeStorage",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId",
          type: "tuple",
        },
        { internalType: "uint128", name: "amountToClose", type: "uint128" },
        { internalType: "uint256", name: "userMinPrice", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "bytes", name: "currentPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
        { internalType: "bytes", name: "delegationSignature", type: "bytes" },
      ],
      name: "initiateClosePosition",
      outputs: [
        {
          internalType: "enum IUsdnProtocolTypes.LongActionOutcome",
          name: "outcome_",
          type: "uint8",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "amount", type: "uint128" },
        { internalType: "uint256", name: "sharesOutMin", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "bytes", name: "currentPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "initiateDeposit",
      outputs: [{ internalType: "bool", name: "success_", type: "bool" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "amount", type: "uint128" },
        { internalType: "uint128", name: "desiredLiqPrice", type: "uint128" },
        { internalType: "uint128", name: "userMaxPrice", type: "uint128" },
        { internalType: "uint256", name: "userMaxLeverage", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "bytes", name: "currentPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "initiateOpenPosition",
      outputs: [
        { internalType: "bool", name: "isInitiated_", type: "bool" },
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId_",
          type: "tuple",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint152", name: "usdnShares", type: "uint152" },
        { internalType: "uint256", name: "amountOutMin", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "bytes", name: "currentPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "initiateWithdrawal",
      outputs: [{ internalType: "bool", name: "success_", type: "bool" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes", name: "currentPriceData", type: "bytes" }],
      name: "liquidate",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "totalPositions",
              type: "uint256",
            },
            { internalType: "uint256", name: "totalExpo", type: "uint256" },
            {
              internalType: "int256",
              name: "remainingCollateral",
              type: "int256",
            },
            { internalType: "uint128", name: "tickPrice", type: "uint128" },
            {
              internalType: "uint128",
              name: "priceWithoutPenalty",
              type: "uint128",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.LiqTickInfo[]",
          name: "liquidatedTicks_",
          type: "tuple[]",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "currentPrice", type: "uint128" },
        { internalType: "uint128", name: "timestamp", type: "uint128" },
      ],
      name: "longAssetAvailableWithFunding",
      outputs: [{ internalType: "uint256", name: "available_", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "currentPrice", type: "uint128" },
        { internalType: "uint128", name: "timestamp", type: "uint128" },
      ],
      name: "longTradingExpoWithFunding",
      outputs: [{ internalType: "uint256", name: "expo_", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minTick",
      outputs: [{ internalType: "int24", name: "tick_", type: "int24" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingDefaultAdmin",
      outputs: [
        { internalType: "address", name: "newAdmin", type: "address" },
        { internalType: "uint48", name: "schedule", type: "uint48" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingDefaultAdminDelay",
      outputs: [
        { internalType: "uint48", name: "newDelay", type: "uint48" },
        { internalType: "uint48", name: "schedule", type: "uint48" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "proxiableUUID",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "bytes32", name: "role", type: "bytes32" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "rollbackDefaultAdminDelay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId",
          type: "tuple",
        },
        { internalType: "address", name: "newOwner", type: "address" },
        { internalType: "bytes", name: "delegationSignature", type: "bytes" },
      ],
      name: "transferPositionOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "newImplementation", type: "address" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "upgradeToAndCall",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint128", name: "currentPrice", type: "uint128" }],
      name: "usdnPrice",
      outputs: [{ internalType: "uint256", name: "price_", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "currentPrice", type: "uint128" },
        { internalType: "uint128", name: "timestamp", type: "uint128" },
      ],
      name: "usdnPrice",
      outputs: [{ internalType: "uint256", name: "price_", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
        { internalType: "uint256", name: "maxValidations", type: "uint256" },
      ],
      name: "validateActionablePendingActions",
      outputs: [{ internalType: "uint256", name: "validatedActions_", type: "uint256" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "bytes", name: "closePriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "validateClosePosition",
      outputs: [
        {
          internalType: "enum IUsdnProtocolTypes.LongActionOutcome",
          name: "outcome_",
          type: "uint8",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "bytes", name: "depositPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "validateDeposit",
      outputs: [{ internalType: "bool", name: "success_", type: "bool" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "bytes", name: "openPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "validateOpenPosition",
      outputs: [
        {
          internalType: "enum IUsdnProtocolTypes.LongActionOutcome",
          name: "outcome_",
          type: "uint8",
        },
        {
          components: [
            { internalType: "int24", name: "tick", type: "int24" },
            { internalType: "uint256", name: "tickVersion", type: "uint256" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          internalType: "struct IUsdnProtocolTypes.PositionId",
          name: "posId_",
          type: "tuple",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "validator", type: "address" },
        { internalType: "bytes", name: "withdrawalPriceData", type: "bytes" },
        {
          components: [
            { internalType: "bytes[]", name: "priceData", type: "bytes[]" },
            {
              internalType: "uint128[]",
              name: "rawIndices",
              type: "uint128[]",
            },
          ],
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          name: "previousActionsData",
          type: "tuple",
        },
      ],
      name: "validateWithdrawal",
      outputs: [{ internalType: "bool", name: "success_", type: "bool" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint128", name: "currentPrice", type: "uint128" },
        { internalType: "uint128", name: "timestamp", type: "uint128" },
      ],
      name: "vaultAssetAvailableWithFunding",
      outputs: [{ internalType: "uint256", name: "available_", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
  rebalancerAbi: [
    {
      type: "function",
      name: "INITIATE_CLOSE_TYPEHASH",
      inputs: [],
      outputs: [
        {
          name: "typehash_",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "MAX_ACTION_COOLDOWN",
      inputs: [],
      outputs: [
        {
          name: "cooldown_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "MAX_CLOSE_DELAY",
      inputs: [],
      outputs: [
        {
          name: "closeDelay_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "MULTIPLIER_FACTOR",
      inputs: [],
      outputs: [
        {
          name: "factor_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "domainSeparatorV4",
      inputs: [],
      outputs: [
        {
          name: "domainSeparator_",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getAsset",
      inputs: [],
      outputs: [
        {
          name: "asset_",
          type: "address",
          internalType: "contract IERC20Metadata",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCloseLockedUntil",
      inputs: [],
      outputs: [
        {
          name: "timestamp_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getCurrentStateData",
      inputs: [],
      outputs: [
        {
          name: "pendingAssets_",
          type: "uint128",
          internalType: "uint128",
        },
        {
          name: "maxLeverage_",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "currentPosId_",
          type: "tuple",
          internalType: "struct IUsdnProtocolTypes.PositionId",
          components: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickVersion",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getLastLiquidatedVersion",
      inputs: [],
      outputs: [
        {
          name: "version_",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMinAssetDeposit",
      inputs: [],
      outputs: [
        {
          name: "minAssetDeposit_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getNonce",
      inputs: [
        {
          name: "user",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "nonce_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPendingAssetsAmount",
      inputs: [],
      outputs: [
        {
          name: "pendingAssetsAmount_",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPositionData",
      inputs: [
        {
          name: "version",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      outputs: [
        {
          name: "positionData_",
          type: "tuple",
          internalType: "struct IRebalancerTypes.PositionData",
          components: [
            {
              name: "amount",
              type: "uint128",
              internalType: "uint128",
            },
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickVersion",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "entryAccMultiplier",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPositionMaxLeverage",
      inputs: [],
      outputs: [
        {
          name: "maxLeverage_",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPositionVersion",
      inputs: [],
      outputs: [
        {
          name: "version_",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTimeLimits",
      inputs: [],
      outputs: [
        {
          name: "timeLimits_",
          type: "tuple",
          internalType: "struct IRebalancerTypes.TimeLimits",
          components: [
            {
              name: "validationDelay",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "validationDeadline",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "actionCooldown",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "closeDelay",
              type: "uint64",
              internalType: "uint64",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUsdnProtocol",
      inputs: [],
      outputs: [
        {
          name: "protocol_",
          type: "address",
          internalType: "contract IUsdnProtocol",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUserDepositData",
      inputs: [
        {
          name: "user",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "data_",
          type: "tuple",
          internalType: "struct IRebalancerTypes.UserDeposit",
          components: [
            {
              name: "initiateTimestamp",
              type: "uint40",
              internalType: "uint40",
            },
            {
              name: "amount",
              type: "uint88",
              internalType: "uint88",
            },
            {
              name: "entryPositionVersion",
              type: "uint128",
              internalType: "uint128",
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "increaseAssetAllowance",
      inputs: [
        {
          name: "addAllowance",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "initiateClosePosition",
      inputs: [
        {
          name: "amount",
          type: "uint88",
          internalType: "uint88",
        },
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
        {
          name: "validator",
          type: "address",
          internalType: "address payable",
        },
        {
          name: "userMinPrice",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "currentPriceData",
          type: "bytes",
          internalType: "bytes",
        },
        {
          name: "previousActionsData",
          type: "tuple",
          internalType: "struct IUsdnProtocolTypes.PreviousActionsData",
          components: [
            {
              name: "priceData",
              type: "bytes[]",
              internalType: "bytes[]",
            },
            {
              name: "rawIndices",
              type: "uint128[]",
              internalType: "uint128[]",
            },
          ],
        },
        {
          name: "delegationData",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "outcome_",
          type: "uint8",
          internalType: "enum IUsdnProtocolTypes.LongActionOutcome",
        },
      ],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "initiateDepositAssets",
      inputs: [
        {
          name: "amount",
          type: "uint88",
          internalType: "uint88",
        },
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "initiateWithdrawAssets",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "resetDepositAssets",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setMinAssetDeposit",
      inputs: [
        {
          name: "minAssetDeposit",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setPositionMaxLeverage",
      inputs: [
        {
          name: "newMaxLeverage",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setTimeLimits",
      inputs: [
        {
          name: "validationDelay",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "validationDeadline",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "actionCooldown",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "closeDelay",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updatePosition",
      inputs: [
        {
          name: "newPosId",
          type: "tuple",
          internalType: "struct IUsdnProtocolTypes.PositionId",
          components: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickVersion",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          name: "previousPosValue",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "validateDepositAssets",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "validateWithdrawAssets",
      inputs: [
        {
          name: "amount",
          type: "uint88",
          internalType: "uint88",
        },
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "AssetsDeposited",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "positionVersion",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "AssetsWithdrawn",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ClosePositionInitiated",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "rebalancerAmountToClose",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amountToClose",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "rebalancerAmountRemaining",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "DepositRefunded",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "InitiatedAssetsDeposit",
      inputs: [
        {
          name: "payer",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "InitiatedAssetsWithdrawal",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "MinAssetDepositUpdated",
      inputs: [
        {
          name: "minAssetDeposit",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "PositionMaxLeverageUpdated",
      inputs: [
        {
          name: "newMaxLeverage",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "PositionVersionUpdated",
      inputs: [
        {
          name: "newPositionVersion",
          type: "uint128",
          indexed: false,
          internalType: "uint128",
        },
        {
          name: "entryAccMultiplier",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount",
          type: "uint128",
          indexed: false,
          internalType: "uint128",
        },
        {
          name: "positionId",
          type: "tuple",
          indexed: false,
          internalType: "struct IUsdnProtocolTypes.PositionId",
          components: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickVersion",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TimeLimitsUpdated",
      inputs: [
        {
          name: "validationDelay",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "validationDeadline",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "actionCooldown",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "closeDelay",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "RebalancerActionCooldown",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerActionNotValidated",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerCloseLockedUntil",
      inputs: [
        {
          name: "closeLockedUntil",
          type: "uint256",
          internalType: "uint256",
        },
      ],
    },
    {
      type: "error",
      name: "RebalancerDepositUnauthorized",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerEtherRefundFailed",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInsufficientAmount",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidAddressTo",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidAmount",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidDelegationSignature",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidMaxLeverage",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidMinAssetDeposit",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerInvalidTimeLimits",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerNoPendingAction",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerUnauthorized",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerUserLiquidated",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerUserPending",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerValidateTooEarly",
      inputs: [],
    },
    {
      type: "error",
      name: "RebalancerWithdrawalUnauthorized",
      inputs: [],
    },
  ],
};
