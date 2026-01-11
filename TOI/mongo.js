db.createCollection("validatedUser", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["Name", "Place"],
            properties: {
                Name: {
                    bsonType: "string",
                    description: "Name must be a string"
                },
                Place: {
                    bsonType: "string",
                    description: "Place must be a string"
                }
            },
            additionalProperties: false
        }
    },
    validationLevel: "strict",
    validationAction: "error"
})





// db.runCommand({
//     collMod: "validatedUser",
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["Name", "Place"],
//             properties: {
//                 _id: {},
//                 Name: {
//                     bsonType: "string",
//                     description: "Name must be a string"
//                 },
//                 Place: {
//                     bsonType: "string",
//                     description: "Place must be a string"
//                 }
//             },
//             additionalProperties: false
//         }
//     },
//     validationLevel: "strict",
//     validationAction: "error"
// })