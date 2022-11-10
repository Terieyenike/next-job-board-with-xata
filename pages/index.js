import Head from 'next/head';
import Layout from '../components/Layout';
import { getXataClient } from '../src/xata';
import JobList from '../components/JobList/JobList';
import LeadingCompanies from '../components/Companies/Companies';

export default function Home({ jobs }) {
  return (
    <div>
      <Head>
        <title>Job board</title>
        <meta name='description' content='Job board app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <LeadingCompanies />
        <JobList jobs={jobs} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const xata = await getXataClient();
  const jobs = await xata.db.Jobs.getAll();

  return {
    props: {
      jobs: jobs.map(({ replace, ...job }) => job),
    },
  };
}
