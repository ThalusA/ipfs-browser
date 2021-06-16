let keywordTable = null;

const ipfs_browser = async (ipfsGetter, OrbitDB) => {
    // TODO: Add loading screen on browser div.

    const Ipfs = await ipfsGetter;
    const ipfs = await Ipfs.create();
    // TODO: IPFS Finished loading.
    const KeyArrayStore = OrbitDBKAStore;
    OrbitDB.addDatabaseType("keyarray", KeyArrayStore);
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const options = { create: true, type: "keyarray", accessController: { write: ["*"] }, disableDelete: true };
    const address = "/orbitdb/zdpuAn4QoxxAiGqJdf2Umd8ipFxqfweGjhTWWxpHMEgTxMtXf/ipfs-browser.keyword-table";
    keywordTable = await orbitdb.open(address, options);
    // TODO: OrbitDB finished loading.
}

const submit_file = async (filedata) => {

}

const search_keyword = async (keyword) => {

}

const search_keywords = async (keywords) => {
    
}