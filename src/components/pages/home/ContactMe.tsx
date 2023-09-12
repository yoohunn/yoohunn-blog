export function ContactMe() {
  return (
    <section className={'pr-4'}>
      <h1 className='h1 mt-12 mb-4'>Contact Me </h1>
      <ul className='grid grid-cols-3 gap-0.5'>
        {[
          { type: 'github', href: '' },
          { type: 'email', href: '' },
          { type: 'phone', href: '' },
        ].map((i) => (
          <li
            key={i.type}
            className={'p-4 pt-6 bg-gray-100 aspect-square rounded-3xl'}
          >
            {i.type}
          </li>
        ))}
      </ul>
    </section>
  );
}
