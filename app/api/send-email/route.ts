import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Since we're using EmailJS on the client side now, this endpoint is just for validation
    // The actual email sending will be handled by EmailJS in the client component
    return NextResponse.json({ message: "Form data validated successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error validating form data:", error)
    return NextResponse.json({ error: "Failed to validate form data" }, { status: 500 })
  }
}
