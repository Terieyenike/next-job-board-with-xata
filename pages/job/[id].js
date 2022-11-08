import { getXataClient } from '../../src/xata';
import Layout from '../../components/Layout';

const Job = ({ data }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <Layout>
      <div className='max-w-7xl mx-auto w-4/5'>
        <div className='flex items-center flex-col justify-center mb-10'>
          <h2>{data.company}</h2>
          <p className='text-2xl'>{data.title}</p>
        </div>

        <p className='mb-3'>
          <span className='font-bold'>Posted: </span>
          {reformatDate(data.date)}
        </p>
        <p className='mb-3'>
          <span className='font-bold'>Job Location: </span>
          {data.location}
        </p>
        <ul className='mb-8'>
          <li className='text-stone-900 mr-2 text-xs sm:text-base'>
            <span className='font-bold'>Skills:</span> {data.technologies}
          </li>
        </ul>

        <h2 className='font-bold text-base mb-5'>Job Description</h2>

        <div>
          <p>{data.description}</p>
        </div>

        <section className='bg-gray-50 py-16 px-12 mt-10'>
          <div className='flex items-center flex-col justify-center'>
            <a
              href={data.website}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 text-white px-3.5 py-2 mb-2 flex-shrink-0'>
              Apply for this position
            </a>
            <p className='text-center'>
              Mention All Dev Jobs when applying for this job.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Job;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const xata = await getXataClient();

  const job = await xata.db.Jobs.read(id);

  return {
    props: {
      data: job,
    },
  };
}
