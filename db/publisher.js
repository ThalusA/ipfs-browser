const Store = require("./store.js");

(async function() {
    const store = new Store();
    console.log("Creating database...");
    const address = await store.provide(process.argv.length >= 3 ? process.argv[2] : null);
    console.log("The OrbitDB address is actually: " + address);
    console.log("Finished creating database!");
})();