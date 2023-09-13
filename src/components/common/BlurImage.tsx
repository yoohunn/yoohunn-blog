import Image from 'next/image';

interface Props extends WithChildren, WithClassName {
  src: string;
  alt: string;
  sizes?: string;
  sizeClass: string;
  roundedClass: string;
  align?: 'center' | 'start';
}

export function BlurImage({
  src,
  alt,
  sizes,
  roundedClass,
  sizeClass,
  children,
  className,
}: Props) {
  return (
    <section
      className={`relative group overflow-hidden aspect-square ${roundedClass} ${sizeClass} ${className}`}
    >
      <Image
        src={src || ''}
        alt={alt}
        sizes={sizes}
        fill
        className={`object-cover ${roundedClass}`}
      />
      <div className={`absolute inset-0 backdrop-blur-sm ${roundedClass}`}>
        {children}
      </div>
    </section>
  );
}
