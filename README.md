# Convector Boilerplate

## Getting Started

Make sure to have [Docker](https://www.docker.com/get-started) and [Nodejs](https://nodejs.org/en/) v8 installed in your machine.

Run `npm i` to install the neccesary modules, then do `npm run restart` to start (or restart) a fresh build. This will create a blockchain environment using Hyperledger Fabric 1.1.

A blockchain project is not only made of smart contracts, thus the project is built using [lerna](https://github.com/lerna/lerna) to organize the different modules. This is totally optional and you can remove it if you want. If you're not familiar with the lerna commands, refer to our `package.json`, we have some scripts already prepared for you.

## Chaincode

The chaincode is written in different pieces called controllers and models. You can find examples in [our repository](https://github.com/worldsibu/convector-boilerplate), but we have include one in this boilerplate for your convinience. Checkout the `pakcages/test-cc` module for more information.

Once you run the project at least once, you'll see a `./chaincode` folder in the root's project. This is the chaincode package generated for you, it's installed automatically in the development environment, but you might want to use that to deploy your application in a real blockchain environment.
