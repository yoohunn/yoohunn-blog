export function ContactMe() {
  return (
    <section className={'pr-4'}>
      <h1 className='h1 mt-12 md:mt-[180px] mb-4 md:mb-10'>Contact Me </h1>
      <ul className='grid grid-cols-3 gap-2 md:gap-4'>
        {[
          { type: 'github', href: '' },
          { type: 'email', href: '' },
          { type: 'phone', href: '' },
        ].map((i) => (
          <li
            key={i.type}
            className={'p-4 pt-6 border aspect-square rounded-3xl'}
          >
            {i.type}
          </li>
        ))}
      </ul>
    </section>
  );
}
