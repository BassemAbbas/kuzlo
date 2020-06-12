const { ObjectID } = require('mongodb');
const { Products } = require('./../models/products');
// const mongoosePaginate = require('mongoose-paginate-v2');

// mySchema.plugin(mongoosePaginate);
function getProducts(req, res) {
    let searchQuery = productsQuery(req.query);

    Products.find(searchQuery).then((docs) => {
        res.status(200).send(docs);
    }, (e) => {
        res.status(400).send(e);
    });
}

function getProductById(req, res) {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send({ error: 'not a valid ID' });
    }
    Products.findById(id)
        .then((doc) => {
            if (!doc) {
                return res.status(404).send({ error: 'id not found' });
            }
            return res.status(200).send(doc);
        })
        .catch((e) => {
            return res.status(400).send(e);
        })

}

function productsQuery(query) {
    let searchQuery = {};
    if (query.category) {searchQuery.category =  query.category;}
    if (query.barCode) {searchQuery.barCode = query.barCode;}
    if (query.productCategory) {searchQuery.productCategory = query.productCategory;}
    if (query.brand) {searchQuery.brand = query.brand;}
    if (query.type) {searchQuery.type = query.type;}
    if (query.description) {searchQuery.description = { $regex: '.*' + query.description + '.*' };}
    if (query.refrigerator) {searchQuery.refrigerator = query.refrigerator;}
    if (query.manufacturer) {searchQuery.manufacturer = { $regex: '.*' + query.manufacturer + '.*' };}
    return searchQuery;
}
module.exports = { getProducts , getProductById };