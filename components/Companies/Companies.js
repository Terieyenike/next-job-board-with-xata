import Image from 'next/image';

const LeadingCompanies = () => {
  const images = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/terieyenike/image/upload/v1667490303/logos/cloudinary_cloud_glyph_blue_png.png',
      alt: 'cloudinary',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/terieyenike/image/upload/v1667490306/logos/xatafly.png',
      alt: 'xata',
    },
  ];
  return (
    <div>
      <section className='py-3 flex items-center justify-center flex-col'>
        <p>Trusted by the world&apos;s leading companies</p>

        <div className='my-5 flex items-center'>
          {images.map(({ img, id, alt }) => (
            <Image
              key={id}
              src={img}
              alt={alt}
              width={50}
              height={50}
              className='flex-shrink-0'
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadingCompanies;
