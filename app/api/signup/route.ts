import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the signup data
    console.log('=== NEW USER SIGNUP ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Timestamp:', new Date().toISOString());
    console.log('=======================');

    // Return success response
    return NextResponse.json(
      { 
        message: 'User created successfully!',
        user: {
          name,
          email,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
