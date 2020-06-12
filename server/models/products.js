var mongoose = require('mongoose');

var Products = mongoose.model('Products', {
    category: {
        type: String,
        required: true,
        enum: [
            'Water & Beverages',
            'Dairy & Eggs',
            'Bakery & Cooking',
            'Cereals & Nuts',
            'Beauty & Hygiene',
            'Cleaners & Tools',
            'Fruits & Vegetables',
            'Poultry & Meats',
            'Cheese & Cold Cuts'
        ]
    },
    barCode: {
        type: Number,
        trim: true
    },
    productCategory: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    size: {
        type: Number,
        trim: true
    },
    count: {
        type: Number,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 250,
    },
    picture: {
        type: String,
        required: true,
        trim: true
    },
    refrigerator: {
        type: Boolean,
        required: true,
        // default: false
    },
    manufacturer: {
        type: String,
        trim: true
    },
    carton: {
        unitsCount: {
            type: Number,
            trim: true
        },
        height: {
            type: Number,
            trim: true
        },
        width: {
            type: Number,
            trim: true
        },
        length: {
            type: Number,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        picture: {
            type: String,
            trim: true,
        }
    },
    box: {
        unitsCount: {
            type: Number,
            trim: true
        },
        height: {
            type: Number,
            trim: true
        },
        width: {
            type: Number,
            trim: true
        },
        length: {
            type: Number,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        picture: {
            type: String,
            trim: true
        }
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {Products};