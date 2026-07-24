import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Flow Force API',
    timestamp: new Date().toISOString(),
  });
}
