var {Products} = require('./../models/products');

function descriptionCreator(body) {
    let description = `${body.productCategory} ${body.brand} ${body.type}`;
    if (body.weight) {
        return `${description} ${body.weight} جم`;
    } else if (body.size && !body.weight) {
        return `${description} ${body.size} ملم`;
    } else if (body.count && !body.weight && !body.size) {
        return `${description} عدد ${body.count}`;
    } else if (!body.weight && !body.size && !body.count) {
        return { error: 'weight or size or count is mandatory' };
    }
}

function postProduction(req, res) {
    let body = req.body;
    let description = descriptionCreator(body);
    if (description.error) {
        res.status(400).send({ error: 'weight or size or count is mandatory' });
        return;
    }
    var product = new Products({
        category: body.category,
        barCode: body.barCode,
        productCategory: body.productCategory,
        brand: body.brand,
        type: body.type,
        weight: body.weight,
        count: body.count,
        description: description,
        picture: body.picture,
        refrigerator: body.refrigerator,
        manufacturer: body.manufacturer,
        carton: {
            unitsCount: body.carton.unitsCount,
            height: body.carton.height,
            width: body.carton.width,
            length: body.carton.length,
            weight: body.carton.weight,
            picture: body.carton.picture
        },
        box: {
            unitsCount: body.box.unitsCount,
            height: body.box.height,
            width: body.box.width,
            length: body.box.length,
            weight: body.box.weight,
            picture: body.box.picture
        },
        updatedAt: Date.now()
    });

    product.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
};

module.exports = {postProduction};
