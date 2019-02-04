const protobuf = require('protobufjs')

const contents = `
    syntax = "proto3";

    message CustomDefinition {
        int32 a = 1;
        float b = 2;
        string c = 3;
        int32 d = 4;
        
        message InnerMessage {
            float a = 1;
            string b = 2;
        }
    }
`
/**
 * @param   {Object} payload    The payload object
 * @returns {Object} Serialized protobuf message buffer
 */
const stringifyWithFloats = (payload) => {
    const root = protobuf.parse(contents).root
    const CustomDefinition = root.lookupType('CustomDefinition')
    const error = CustomDefinition.verify(payload)

    if (error) {
        throw Error(error)
    }

    const message = CustomDefinition.create(payload)
    const buffer = CustomDefinition.encode(message).finish()

    return buffer
}
module.exports = { stringifyWithFloats }
