const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});
   const schema = {
    type: "object",
    properties: {
        text: { type: "string" },
        address: { type: "string" },
        street: { type: "string" },
    },
    additionalProperties: false,
    required: ['text','address','street'],
}
const validate = ajv.compile(schema)
module.exports = validate
