import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const peeps =
  'https://res.cloudinary.com/terieyenike/image/upload/v1667579350/peeps_ed6eci.png';

const defaultFormFields = {
  title: '',
  company: '',
  location: '',
  technologies: '',
  website: '',
  description: '',
  date: '',
};

const PostJob = () => {
  const year = new Date().getFullYear();
  const router = useRouter();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { title, company, location, technologies, website, description, date } =
    formFields;

  const submit = () => {
    fetch('/api/add-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        company,
        location,
        technologies,
        website,
        description,
        date,
      }),
    }).then(() => router.push('/'));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <header className='border-b border-gray-100'>
        <div className='max-w-7xl mx-auto w-4/5 my-5'>
          <div className='flex items-center justify-between'>
            <Link href={'/'}>
              <span className='font-bold whitespace-nowrap tracking-wide'>
                All Dev Jobs
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className='min-h-screen flex flex-col max-w-7xl mx-auto w-4/5 pt-10'>
        <section className='mb-10'>
          <div className='md:flex md:items-center md:justify-center'>
            <h2 className='font-bold text-3xl xl:text-5xl'>
              Discover and hire developers that match your job criteria
            </h2>
            <Image
              src={peeps}
              alt='remote workers'
              width={500}
              height={500}
              className='md:w-3/5'
              priority
            />
          </div>
        </section>

        <section>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='title' className='block'>
                Job Title
              </label>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={handleChange}
                placeholder='job title'
                className='border-2 p-1 w-full mt-1'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='company' className='block'>
                Company
              </label>
              <input
                type='text'
                name='company'
                id='company'
                value={company}
                onChange={handleChange}
                placeholder='Company'
                className='border-2 p-1 w-full mt-1'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='location' className='block'>
                Location
              </label>
              <input
                type='text'
                name='location'
                id='location'
                value={location}
                onChange={handleChange}
                placeholder='location'
                className='border-2 p-1 w-full mt-1'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='technologies' className='block'>
                Tags/Stack
              </label>

              <input
                type='text'
                name='technologies'
                id='technologies'
                value={technologies}
                placeholder='JavaScript, Java, PHP'
                onChange={handleChange}
                className='border-2 p-1 w-full mt-1'
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='website' className='block'>
                Website
              </label>
              <input
                type='url'
                name='website'
                id='website'
                value={website}
                onChange={handleChange}
                placeholder='https://www.example.com'
                className='border-2 p-1 w-full mt-1'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='description' className='block'>
                Job Description
              </label>
              <textarea
                value={description}
                rows={10}
                name='description'
                onChange={handleChange}
                id='description'
                className='border-2 p-1 w-full mt-1'
              />
            </div>

            <div className='mb-8'>
              <label htmlFor='date' className='block'>
                Job Posting
              </label>
              <input
                type='date'
                name='date'
                id='date'
                value={date}
                onChange={handleChange}
                pattern='\d{4}-\d{2}-\d{2}'
                className='border-2 p-1 w-full mt-1'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-600 text-gray-50 py-2 px-6 tracking-wide whitespace-nowrap flex-shrink-0 float-right mb-10'>
              Submit
            </button>
          </form>
        </section>
      </main>
      <div className='max-w-7xl mx-auto w-4/5 my-5'>
        <footer className='border-t border-gray-100 my-5'>
          <div className='flex items-center justify-center flex-col'>
            <Link href={'/'} className='mb-2'>
              <span className='font-bold whitespace-nowrap tracking-wide'>
                All Dev Jobs
              </span>
            </Link>
            <p className='text-xs text-center'>
              Built by Teri. Reach out on Twitter:
              <a
                href='http://twitter.com/terieyenike'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-500'>
                {' '}
                @terieyenike
              </a>
            </p>
            <address className='text-xs mt-3'>
              <p>Copyright &copy; {year}</p>
            </address>
          </div>
        </footer>
      </div>
    </>
  );
};
export default PostJob;
