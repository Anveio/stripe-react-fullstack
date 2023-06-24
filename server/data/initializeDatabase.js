const { loadData, deleteData } = require('../data/load-sample-data')

exports.initializeDatabase = async (db) => {
    if(db) {
        loadData()
    }
}