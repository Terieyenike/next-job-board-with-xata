import Link from 'next/link';

const JobList = ({ jobs }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().split(' ').splice(1, 2).join(' ');
  }

  function getFirstLetter(character) {
    return character.charAt(0).toUpperCase();
  }

  // function truncate(string, limit) {
  //   if (string.length <= limit) {
  //     return string;
  //   }
  //   return string.slice(0, limit) + '...';
  // }

  return (
    <div>
      {jobs.length > 0 ? (
        <div>
          {jobs.map(
            ({ title, company, id, skills, date, location, technologies }) => (
              <div key={id}>
                <Link href={{ pathname: `job/${id}` }}>
                  <div className='flex justify-between text-sm sm:text-lg mb-4 bg-gray-100 p-5 border-2'>
                    <div className='flex'>
                      <p className='self-center bg-white py-2 px-4 mr-2'>
                        {getFirstLetter(company)}
                      </p>
                      <div>
                        <h2 className='font-bold mb-1'>{title}</h2>
                        <p className='mb-1'>{company}</p>

                        <span>{location}</span>
                        <ul className='mt-3'>
                          <li className='text-stone-900 text-xs sm:text-base'>
                            {technologies}
                          </li>
                        </ul>


                      </div>
                    </div>
                    <span className='text-gray-600'>{reformatDate(date)}</span>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      ) : (
        <div className='flex items-center justify-center font-bold text-2xl'>
          <p>No data in the database</p>
        </div>
      )}
    </div>
  );
};

export default JobList;
