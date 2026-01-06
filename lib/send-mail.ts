"use server";

import Mailjet from "node-mailjet";

const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

const mailjet = Mailjet.apiConnect(
  MAILJET_API_KEY || "",
  MAILJET_SECRET_KEY || ""
);

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: SITE_MAIL_SENDER,
            Name: "DMM Ivanovic Contact Form",
          },
          To: [
            {
              Email: sendTo || SITE_MAIL_RECEIVER,
            },
          ],
          Subject: subject,
          TextPart: text,
          HTMLPart: html || text,
          ReplyTo: {
            Email: email,
          },
        },
      ],
    });

    // Mailjet vraća Messages array sa Status property
    const isSuccess = result.body?.Messages?.[0]?.Status === "success";
    const messageId = result.body?.Messages?.[0]?.To?.[0]?.MessageID ||
                     result.body?.Messages?.[0]?.To?.[0]?.MessageUUID ||
                     (isSuccess ? "success" : null);

    return {
      messageId: messageId,
      success: isSuccess,
      status: result.body?.Messages?.[0]?.Status,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      messageId: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
