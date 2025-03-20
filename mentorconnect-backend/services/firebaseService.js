import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const sendNotification = async (token, title, body) => {
  try {
    const message = {
      token,
      notification: { title, body },
      android: { priority: "high" },
      apns: { payload: { aps: { sound: "default" } } },
    };

    await admin.messaging().send(message);
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Firebase Notification Error:", error);
    throw new Error("Failed to send notification.");
  }
};
