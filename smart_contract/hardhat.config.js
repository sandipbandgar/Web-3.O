require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/wnlSj9SD0QOIsJKawTGQNxexUrw4Xv4v',
            accounts: ['4da3374852854611494b30fc2dcceb37cdec5b059b9f25a09e59b4e2e444b094'],
        },
    },
};