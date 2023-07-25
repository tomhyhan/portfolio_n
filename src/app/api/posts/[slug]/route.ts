import { getPostView, updateView } from '@/lib/postData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const view = await getPostView(slug);
    return NextResponse.json({ view: parseInt(view!) });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }
}

export async function POST(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const views = await updateView(slug);
    return NextResponse.json({ views });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }
}
