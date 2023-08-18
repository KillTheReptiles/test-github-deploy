import * as admin from 'firebase-admin';
// generate this file from your firebase project and put it in this folder
require('dotenv').config();
import * as serviceAccount from './permissions.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: process.env.FB_DATABASE_URL,
  storageBucket: process.env.FB_STORAGE_BUCKET,
});

export const db = admin.firestore();
export const storage = admin.storage().bucket();

db.settings({ ignoreUndefinedProperties: true });
