import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

export const scheduleGoogleMeet = async (summary, startTime, endTime, attendees) => {
  try {
    const event = {
      summary,
      start: { dateTime: startTime, timeZone: "UTC" },
      end: { dateTime: endTime, timeZone: "UTC" },
      attendees: attendees.map(email => ({ email })),
      conferenceData: {
        createRequest: { requestId: new Date().toISOString() },
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    return response.data;
  } catch (error) {
    console.error("Google Meet Service Error:", error);
    throw new Error("Failed to schedule Google Meet.");
  }
};
