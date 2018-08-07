const restful = require('node-restful')
const mongoose = restful.mongoose

const circleSchema = new mongoose.Schema({
    name:           { type: String, required: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})
const nameSchema = new mongoose.Schema({
    name:           { type: String, required: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})
const emailSchema = new mongoose.Schema({
    address:        { type: String, required: true, lowercase: true },
    alias:          { type: String, required: true, lowercase: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})
const phoneSchema = new mongoose.Schema({
    phoneNumber:    { type: String, required: true, lowercase: true, min: 13, max: 14 }, 
    alias:          { type: String, required: true, lowercase: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})
const addressSchema = new mongoose.Schema({
    postalCode:     { type: String, required: true, lowercase: true, max: 8 }, 
    number:         { type: String, required: true, lowercase: true, max: 5 }, 
    details:         { type: String, required: true, lowercase: true }, 
    alias:          { type: String, required: true, lowercase: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})
const socialMediaSchema = new mongoose.Schema({
    media:          { type: String, required: true, lowercase: true },
    url:            { type: String, required: true, lowercase: true },
    id:             { type: String, required: true, lowercase: true },
    alias:          { type: String, required: true, lowercase: true },
    registerDate:   { type: Number, required: true, default: new Date().getTime() },
    removedDate:    { type: Number, required: false }
})

const userSchema = new mongoose.Schema({
    names:      [nameSchema],
    born:       { type: Date, required: false },
    emails:     [emailSchema],
    phones:     [phoneSchema],
    socials:    [socialMediaSchema],
    addresses:  [addressSchema],
    circles:    [circleSchema]
})

module.exports = restful.model('Contacts', userSchema)