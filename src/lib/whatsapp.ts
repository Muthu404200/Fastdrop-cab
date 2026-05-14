// lib/whatsapp.ts

// import twilio from "twilio";

// // ================================
// // TWILIO CONFIG
// // ================================

// const accountSid = process.env.TWILIO_ACCOUNT_SID!;
// const authToken = process.env.TWILIO_AUTH_TOKEN!;

// const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER!;
// const smsNumber = process.env.TWILIO_SMS_NUMBER!;

// const client = twilio(accountSid, authToken);

// // ================================
// // ADMIN WHATSAPP NUMBER
// // ================================

// const ADMIN_NUMBER = "whatsapp:+916380831605";

// // ================================
// // FORMAT PHONE NUMBER
// // ================================

// function formatIndianPhone(phone: string) {
//   let cleaned = phone.replace(/\D/g, "");

//   // Add India country code if missing
//   if (cleaned.length === 10) {
//     cleaned = "91" + cleaned;
//   }

//   return `+${cleaned}`;
// }

// // ================================
// // SEND ADMIN WHATSAPP ALERT
// // ================================

// export async function sendAdminMessage(data: any) {
//   try {
//     console.log("📤 Sending admin WhatsApp...");

//     const response = await client.messages.create({
//       from: whatsappNumber,
//       to: ADMIN_NUMBER,
//       body: `
// 🚖 New Taxi Booking

// 👤 Customer: ${data.name}
// 📞 Phone: ${data.phone}

// 📍 Pickup:
// ${data.pickup}

// 🏁 Drop:
// ${data.drop}
//       `,
//     });

//     console.log("✅ Admin WhatsApp Sent:", response.sid);

//     return response;

//   } catch (error: any) {
//     console.error("❌ Admin WhatsApp Error:");
//     console.error(error.message);
//   }
// }

// // ================================
// // SEND CUSTOMER SMS
// // ================================

// export async function sendCustomerSMS(data: any) {
//   try {
//     const customerNumber = formatIndianPhone(data.phone);

//     console.log("📤 Sending customer SMS...");
//     console.log("📱 Customer Number:", customerNumber);

//     const response = await client.messages.create({
//       from: smsNumber,
//       to: customerNumber,
//       body: `
// ✅ Booking Confirmed

// Hi ${data.name},

// Your cab booking is confirmed successfully.

// 📍 Pickup: ${data.pickup}
// 🏁 Drop: ${data.drop}

// Driver will contact you shortly.

// Thank you for choosing FastDrop Cab.
//       `,
//     });

//     console.log("✅ Customer SMS Sent:", response.sid);

//     return response;

//   } catch (error: any) {
//     console.error("❌ Customer SMS Error:");
//     console.error(error.message);
//   }
// }

// src/lib/whatsapp.ts

const token =
  process.env.WHATSAPP_TOKEN!;

const phoneNumberId =
  process.env.WHATSAPP_PHONE_NUMBER_ID!;

// ==============================
// FORMAT PHONE NUMBER
// ==============================

function formatIndianPhone(
  phone: string
) {
  let cleaned =
    phone.replace(/\D/g, "");

  // Add India code
  if (cleaned.length === 10) {
    cleaned = "91" + cleaned;
  }

  return cleaned;
}

// ==============================
// SEND ADMIN MESSAGE
// ==============================

export async function sendAdminMessage(
  data: any
) {
  try {

    const adminPhone =
      "916380831605";

    console.log(
      "📤 Sending Admin WhatsApp..."
    );

    const response = await fetch(
      `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          messaging_product:
            "whatsapp",

          to: adminPhone,

          type: "text",

          text: {
            body:
`🚖 NEW CAB BOOKING

👤 Customer: ${data.name}

📞 Phone: ${data.phone}

📍 Pickup:
${data.pickup}

🏁 Drop:
${data.drop}

🚘 Cab:
${data.cabType}

🕒 Time:
${data.datetime}`,
          },
        }),
      }
    );

    const result =
      await response.json();

    console.log(
      "✅ Admin WhatsApp:",
      result
    );

    return result;

  } catch (error) {

    console.error(
      "❌ Admin WhatsApp Error:"
    );

    console.error(error);
  }
}

// ==============================
// SEND CUSTOMER MESSAGE
// ==============================

export async function sendCustomerWhatsApp(
  data: any
) {
  try {

    const customerPhone =
      formatIndianPhone(
        data.phone
      );

    console.log(
      "📤 Sending Customer WhatsApp..."
    );

    console.log(
      "📱 Customer:",
      customerPhone
    );

    const response = await fetch(
      `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          messaging_product:
            "whatsapp",

          to: customerPhone,

          type: "text",

          text: {
            body:
`✅ BOOKING CONFIRMED

Hi ${data.name},

Your cab booking is confirmed successfully.

📍 Pickup:
${data.pickup}

🏁 Drop:
${data.drop}

🚘 Cab:
${data.cabType}

Driver will contact you shortly.

Thank you for choosing FastDrop Cabs.`,
          },
        }),
      }
    );

    const result =
      await response.json();

    console.log(
      "✅ Customer WhatsApp:",
      result
    );

    return result;

  } catch (error) {

    console.error(
      "❌ Customer WhatsApp Error:"
    );

    console.error(error);
  }
}