import * as uuid from 'uuid'
import handler from './libs/handler-lib'
import dynamoDb from './libs/dynamodb-libs'

export const main = handler(async (event, context) => {
// Request body is passed in as a JSON encoded string
// in 'event.body'
    const data = JSON.parse(event.body)
    const params = {
        TableName: process.env.tableName,
        // 'Item' contains the attributes of the item to be
        // created
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            boardId: uuid.v1(),
            access: data.access,
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    }
    await dynamoDb.put(params)
    return params.Item
})
