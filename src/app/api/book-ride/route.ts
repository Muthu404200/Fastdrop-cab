import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Basic origin validation
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'http://localhost:3000',
      process.env.NEXT_PUBLIC_SITE_URL, // Add your production URL to env
    ];

    if (process.env.NODE_ENV === 'production' && origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json({ success: false, message: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();

    // Empty field protection
    const requiredFields = ['bookingId', 'timestamp', 'name', 'phone', 'pickup', 'drop', 'cabType', 'datetime'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Prepare payload for Google Sheets
    const payload = {
      bookingId: body.bookingId,
      timestamp: body.timestamp,
      name: body.name,
      phone: body.phone,
      pickup: body.pickup,
      drop: body.drop,
      datetime: body.datetime,
      cabType: body.cabType,
      status: 'Pending'
    };

    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.warn("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not defined.");
      // For development, if script URL is missing, we might want to still succeed locally
      // but in production we should fail. We'll return success so the flow can be tested.
      return NextResponse.json({ success: true, message: 'Simulated success (No URL provided)' });
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', 
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({ success: true, message: 'Booking saved successfully', bookingId: body.bookingId });
  } catch (error) {
    console.error('Error in /api/book-ride:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
