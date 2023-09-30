export const bookShapeId = 'book-shapes';

export function BookShape() {
  return (
    <svg
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
      clipPathUnits='objectBoundingBox'
      transform='scale()'
    >
      <clipPath id={bookShapeId}>
        <rect width='50%' height='100%' rx='20' fill='#D9D9D9' />
        <rect x='49.9%' width='50%' height='100%' rx='20' fill='#D9D9D9' />
      </clipPath>
    </svg>
  );
}
