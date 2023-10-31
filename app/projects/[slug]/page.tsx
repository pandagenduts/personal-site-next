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

  return {
    paths,
    fallback: false,
  };
}
