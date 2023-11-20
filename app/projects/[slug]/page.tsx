import Content from '@/components/projects/slug/Content';
import Hero from '@/components/projects/slug/Hero';
import { allPortfolioDatas } from '@/datas/portfolioDatas';

type ParamsType = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

async function getProjectDetail(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);

  return res.json();
}

// export async function generateStaticParams() {
//   return allPortfolioDatas.map((item) => ({
//     slug: item.slug,
//   }))
// }

export async function generateMetadata({ params }: ParamsType) {
  const data = await getProjectDetail(params.slug);
  const { title, description } = data[0];

  return { title, description };
}

export default async function ProjectDetail({ params }: ParamsType) {
  const data = await getProjectDetail(params.slug);
  const projectData = data[0];

  // const theSlugs = await fetch(`${process.env.BASE_URL}/api/projects`);
  // const theSlugsData = await theSlugs.json();
  // console.log(theSlugsData);

  return (
    <>
      <Hero data={projectData} />
      <Content data={projectData} />
    </>
  );
}
