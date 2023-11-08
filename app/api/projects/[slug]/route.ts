import { type NextRequest } from 'next/server';
import { allPortfolioDatas } from '@/datas/portfolioDatas';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  const theSlug = params.slug;
  const data = allPortfolioDatas.filter(item => item.slug === theSlug)

  return new Response(JSON.stringify(data));
}
