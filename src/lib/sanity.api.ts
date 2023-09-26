export const useCdn = false;

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-26';

export const token = assertValue(
  process.env.SANITY_SECRET_TOKEN,
  'Missing environment variable: SANITY_SECRET_TOKEN',
);

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
}
