import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

import { GithubIcon } from '@/components/icon/GithubIcon';
import { ExternalAnchorOrLink } from '.';

export function Footer() {
  return (
    <footer className='border-t py-20 md:pb-40'>
      <div className='mx-auto w-full max-w-[1448px] px-4 md:px-6 flex-row-center gap-10'>
        <ExternalAnchorOrLink href='https://github.com/yoohunn'>
          <GithubIcon className='w-6 h-6' />
        </ExternalAnchorOrLink>
        <ExternalAnchorOrLink href='mailto:yoohunn@gmail.com'>
          <EnvelopeIcon className='w-6 h-6' />
        </ExternalAnchorOrLink>
        <ExternalAnchorOrLink href='tel:01056977517'>
          <PhoneIcon className='w-6 h-6' />
        </ExternalAnchorOrLink>
      </div>
    </footer>
  );
}
