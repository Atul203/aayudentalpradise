import * as admin from 'firebase-admin';

// Check if a Firebase app is already initialized to prevent re-initialization errors
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Handle newline characters
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

const db = admin.firestore();

export { db };
