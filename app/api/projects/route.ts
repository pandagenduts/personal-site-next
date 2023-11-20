import { allPortfolioDatas } from '@/datas/portfolioDatas';

export async function GET() {
  const data = allPortfolioDatas.map((item) => ({
    slug: item.slug,
  }))

  return new Response(JSON.stringify(data));
}
