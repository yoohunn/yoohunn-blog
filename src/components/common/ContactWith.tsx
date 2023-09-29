import { ExternalAnchorOrLink } from '@/components/common/ExternalAnchorOrLink';
import { GithubIcon } from '@/components/icon/GithubIcon';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

function ContactWithGithub() {
  return (
    <ExternalAnchorOrLink href='https://github.com/yoohunn'>
      <GithubIcon className={className} />
    </ExternalAnchorOrLink>
  );
}

function ContactWithEmail() {
  return (
    <ExternalAnchorOrLink href='mailto:yoohunn@gmail.com'>
      <EnvelopeIcon className={className} />
    </ExternalAnchorOrLink>
  );
}

function ContactWithPhone() {
  return (
    <ExternalAnchorOrLink href='tel:01056977517'>
      <PhoneIcon className={className} />
    </ExternalAnchorOrLink>
  );
}

const className = 'w-5 h-5 md:w-6 md:h-6 hover:text-gray-900';

export const ContactWith = {
  github: ContactWithGithub,
  email: ContactWithEmail,
  phone: ContactWithPhone,
};
