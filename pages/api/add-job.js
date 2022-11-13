import { getXataClient } from '../../src/xata';

const handler = async (req, res) => {
  const xata = await getXataClient();

  const { title, company, location, technologies, website, description, date } =
    req.body;

  await xata.db.Jobs.create({
    title,
    company,
    location,
    website,
    description,
    technologies,
    date: new Date(),
  });

  res.end();
};

export default handler;
