import * as admin from 'firebase-admin';
// generate this file from your firebase project and put it in this folder
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FB_PROJECT_ID,
    clientEmail: process.env.FB_CLIENT_EMAIL,
    privateKey: process.env.FB_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FB_DATABASE_URL, 
  storageBucket: process.env.FB_STORAGE_BUCKET,

});

export const db = admin.firestore();
export const storage = admin.storage().bucket();

db.settings({ ignoreUndefinedProperties: true });
