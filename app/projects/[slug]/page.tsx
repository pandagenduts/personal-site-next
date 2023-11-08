import Hero from '@/components/projects/slug/Hero';
import { allPortfolioDatas } from '@/datas/portfolioDatas';

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const paths: ParamsType[] = [];

  allPortfolioDatas.forEach((item) => {
    paths.push({ params: { slug: item.slug } });
  });

  return {
    paths,
    fallback: false,
  };
}

async function getProjectDetail(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);
  const projectDetail = await res.json();

  return projectDetail;
}

export default async function ProjectDetail({ params }: ParamsType) {
  const data = await getProjectDetail(params.slug);
  console.log(data);
  const {
    title,
    projectURL,
    figmaEmbedURL,
    description,
    techUsed,
    techExplanation,
  } = data[0];

  return (
    <>
      <section>
        Project Details of: {title}
        <Hero />
      </section>
    </>
  );
}
