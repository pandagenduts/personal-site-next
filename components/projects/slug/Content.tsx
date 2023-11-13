import Pill from '@/components/layout/Pill';

type Props = {
  data: {
    title: string | undefined;
    description: string[] | undefined;
    techUsed: string[] | undefined;
    techExplanation: string[] | undefined;
  };
};

export default function Content(props: Props) {
  const { title, description, techUsed, techExplanation } = props.data;

  return (
    <section className='container mt-8'>
      {title && <h1>{title}</h1>}
      {techUsed && (
        <div className='mb-4 flex flex-wrap gap-1'>
          {techUsed?.map((item, index) => <Pill key={index}>{item}</Pill>)}
        </div>
      )}
      {description && (
        <>
          <h4>Description</h4>
          <ul>
            {description.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {techExplanation && (
        <>
          <h4>Tech Explanation</h4>
          <ul>
            {techExplanation.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
