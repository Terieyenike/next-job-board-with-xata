import Link from 'next/link';

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto w-4/5 my-5'>
      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <span className='font-bold whitespace-nowrap tracking-wide'>
            All Dev Jobs
          </span>
        </Link>
        <Link href='/post-a-job'>
          <ul>
            <li className='bg-blue-600 text-gray-50 py-0.5 px-1 tracking-wide whitespace-nowrap'>
              Post a Job
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Header;
