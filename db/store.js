const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const KeyArrayStore = require("orbit-db-kastore")

const store = class Store {
    constructor () {
        this.ipfs = null,
        this.odb = null,
        this.keywordTable = null
    }
  
    async provide(address = null) {
        this.ipfs = await IPFS.create({ repo: "./ipfs-browser" });
        OrbitDB.addDatabaseType("keyarray", KeyArrayStore);
        this.odb = await OrbitDB.createInstance(this.ipfs);
        const options = { create: true, type: "keyarray", accessController: { write: ["*"] }, disableDelete: true };
        this.keywordTable = await this.odb.open(address !== null ? address : "ipfs-browser.keyword-table", options);
        return this.keywordTable.address.toString();
    }
}

module.exports = store;