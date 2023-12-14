require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3dIo1VrF69IULYYpmj8-Y46ngTCBwWlA',
      accounts: ['b7a74c2dc619f461826c61ef3d719c9f5625586813165f6de69df0b75d044d0d'],
    },
  },
};