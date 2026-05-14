// app/api/book-ride/route.ts

// import { NextResponse } from "next/server";

// import {
//   sendAdminMessage,
//   sendCustomerSMS,
// } from "@/lib/whatsapp";

// // ================================
// // GOOGLE SHEET URL
// // ================================

// const GOOGLE_SCRIPT_URL =
//   process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

// // ================================
// // API ROUTE
// // ================================

// export async function POST(request: Request) {
//   try {

//     // ================================
//     // VALIDATE GOOGLE SCRIPT URL
//     // ================================

//     if (!GOOGLE_SCRIPT_URL) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Google Script URL missing",
//         },
//         { status: 500 }
//       );
//     }

//     // ================================
//     // GET REQUEST BODY
//     // ================================

//     const body = await request.json();

//     console.log("📥 Booking Received:", body);

//     // ================================
//     // SAVE TO GOOGLE SHEETS
//     // ================================

//     const googleResponse = await fetch(
//       GOOGLE_SCRIPT_URL,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type":
//             "text/plain;charset=utf-8",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     // ================================
//     // HANDLE GOOGLE SHEET ERROR
//     // ================================

//     if (!googleResponse.ok) {
//       const errorText =
//         await googleResponse.text();

//       console.error(
//         "❌ Google Sheet Error:",
//         errorText
//       );

//       return NextResponse.json(
//         {
//           success: false,
//           message:
//             "Failed to save booking",
//         },
//         { status: 500 }
//       );
//     }

//     console.log("✅ Booking Saved to Google Sheets");

//     // ================================
//     // SEND NOTIFICATIONS
//     // ================================

//     Promise.allSettled([
//       sendAdminMessage(body),
//       sendCustomerSMS(body),
//     ]).then((results) => {
//       console.log(
//         "📨 Notification Results:",
//         results
//       );
//     });

//     // ================================
//     // SUCCESS RESPONSE
//     // ================================

//     return NextResponse.json({
//       success: true,
//       message:
//         "Booking submitted successfully",
//     });

//   } catch (error: any) {

//     console.error("❌ API ERROR:");
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message:
//           error.message ||
//           "Internal Server Error",
//       },
//       { status: 500 }
//     );
//   }
// }

// src/app/api/book-ride/route.ts

import { NextResponse } from "next/server";

import {
  sendAdminMessage,
  sendCustomerWhatsApp,
} from "@/lib/whatsapp";

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

export async function POST(request: Request) {
  try {
    // ==============================
    // GET BODY
    // ==============================

    const body = await request.json();

    console.log("📥 Booking Data:", body);

    // ==============================
    // SAVE TO GOOGLE SHEETS
    // ==============================

    const googleResponse = await fetch(
      GOOGLE_SCRIPT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify(body),
      }
    );

    // ==============================
    // GOOGLE SHEET ERROR
    // ==============================

    if (!googleResponse.ok) {
      const errorText =
        await googleResponse.text();

      console.error(
        "❌ Google Sheet Error:",
        errorText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to save booking",
        },
        { status: 500 }
      );
    }

    console.log(
      "✅ Booking Saved To Google Sheets"
    );

    // ==============================
    // SEND WHATSAPP MESSAGES
    // ==============================

    await Promise.allSettled([
      sendAdminMessage(body),
      sendCustomerWhatsApp(body),
    ]);

    // ==============================
    // SUCCESS RESPONSE
    // ==============================

    return NextResponse.json({
      success: true,
      message:
        "Booking completed successfully",
    });

  } catch (error: any) {

    console.error("❌ API ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}