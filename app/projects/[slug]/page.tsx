import Content from '@/components/projects/slug/Content';
import Hero from '@/components/projects/slug/Hero';
import { allPortfolioDatas } from '@/datas/portfolioDatas';

type ParamsType = {
  params: {
    slug: string;
  };
};

async function getProjectDetail(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);
  const projectDetail = await res.json();

  return projectDetail;
}

export async function generateStaticParams() {
  const paths: any[] = [];

  allPortfolioDatas.forEach((item) => {
    paths.push({ slug: item.slug });
  });

  return paths;
}

export async function generateMetadata({ params }: ParamsType) {
  const data = await getProjectDetail(params.slug);
  const { title, description } = data[0];

  return JSON.stringify({
    title: title,
    description: description,
  });
}

export default async function ProjectDetail({ params }: ParamsType) {
  const data = await getProjectDetail(params.slug);
  
  const projectData = data[0];

  return (
    <>
      <Hero data={projectData} />
      <Content data={projectData} />
    </>
  );
}
