const webpush = require("web-push");
require("dotenv").config();

webpush.setGCMAPIKey("AIzaSyD2D4y4pmMbPvdmwb3D5BepChwNHikRO8M");
webpush.setVapidDetails(
  "https://www.foodexp.com",
  process.env.VAPID_PUBLIC,
  process.env.VAPID_PRIVATE
);

const sendNotification = (subscription, payload) => {
  return webpush
    .sendNotification(subscription, payload)
    .then((res) => console.log("Notification sent", res))
    .catch((error) => {
      console.error("Error sending notification", error);
      throw error;
    });
};

module.exports = { sendNotification };
