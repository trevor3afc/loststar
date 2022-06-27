const emptyArray = () => {
  const images = [...Array<unknown>(3)];
  console.log({
    images,
  });
};

export const debug = () => {
  const payload = {
    messageType: 'OUTGOING_TOKEN_TRANSACTION_FAIL',
    body: {
      blockchain: 'bsc',
      network: 'testnet',
      txId: '0x0eeb85b81b1fb7b2ec9ef45ff604a44af2fc4b00df30f1a379efad0ab1dd2496',
      label: 'testfn006',
      fromAddress: '0xd1d9B90a316A2C211afF6421BdF4583C569b90aC',
      toAddress: '0xa78dd8597af9eedadd57f2b8df27bb0f7bee8f76',
      contractAddress: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
      amount: '0.2',
      gasPrice: '0.000000011',
      gasLimit: 43324,
      gasUsed: '21103',
      unit: 'USDT',
    },
  };

  Object.keys(payload).forEach((field) => {
    console.log(`${field}: string`);
  });
};
