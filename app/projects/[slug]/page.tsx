import { reactProjectDatas, wordpressProjectDatas, htmlProjectDatas } from "@/datas/portfolioDatas";

type ParamsType = {
  params: {
    slug: string;
  };
};

export default function ProjectDetail({ params }: ParamsType) {
  return <div>Project Details of: {params.slug}</div>;
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'asd' } },
    { params: { slug: 'qwe' } },
    { params: { slug: 'zxc' } },
  ];

  const paths2 = []
  

  return {
    paths,
    fallback: false,
  };
}
