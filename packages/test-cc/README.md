## Test Chaincode

Every chaincode in convector is made using controllers, which are javascript classes capable of store data in a blockchain. Controllers use models to shape the data they work with.

In the `./src` folder you can find a prety basic example of a controller and model.

One of the best features of Convector is to not have to test your code in a blockchain, because this is time consuming and doesn't fit the regular development workflow. You can find how to write unit-tests for the controllers in our documentation page, but there's an example in the `./tests` folder.

After you run the project at least once, you'll see a couple of generated folders. `./dist` is the compiled javascript folder, but `./client` is a generated version of your controller, ready to be used in your nodejs application.
