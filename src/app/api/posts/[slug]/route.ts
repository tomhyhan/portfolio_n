import { getPostView } from '@/lib/postData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  const data = await getPostView(slug);
  // try {
  //     await
  // }
  console.log('slug', slug);
  console.log('data', data);

  return NextResponse.json({ test: '123' });
}

async function POST(Request: NextRequest) {}
