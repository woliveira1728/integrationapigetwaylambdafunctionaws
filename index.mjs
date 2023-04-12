//var AWS = require("aws-sdk");
import AWS from "aws-sdk";
//const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    
    let responseBody = ""
    let statusCode = 0
    
    let {id, price} = JSON.parse(event.body);
    
    const params = {
        TableName : 'Items',
        Item : {
            id: id,
            price: price
        }
    }
    
    try {
        
        await dynamodb.put(params).promisse();
        statusCode = 200;
        responseBody = JSON.stringfy('Item inserido com sucesso!!!');
        
    } catch (err) {
        
        statusCode = 200;
        responseBody = JSON.stringfy(err);
        
    }
    
    const response = {
        statusCode: statusCode,
        body: responseBody,
    };
    
    return response;
};
