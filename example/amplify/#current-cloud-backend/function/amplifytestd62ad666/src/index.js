/* Amplify Params - DO NOT EDIT
	AUTH_COGNITO71CB83E3_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify("Hello from Lambda NodeJS!"),
  };
  return response;
};
