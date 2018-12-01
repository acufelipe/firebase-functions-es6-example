import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest(async (req, res) => {
  res.status(200).send(`Hello world`);
})