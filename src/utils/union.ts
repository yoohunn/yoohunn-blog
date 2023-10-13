import { seriesSorter } from '@/model/series';

export const isUnionMemberOfSeriesSorter = generateUnionTypeChecker(
  ...seriesSorter,
);

/**
 * @returns (meber: string) => UnionType | false
 */
function generateUnionTypeChecker<UnionType extends string>(
  ...unionKeys: UnionType[]
) {
  return function (member: unknown): UnionType | false {
    if (typeof member !== 'string') {
      return false;
    }
    if (!unionKeys.includes(member.toUpperCase() as UnionType)) {
      return false;
    }
    return member.toUpperCase() as UnionType;
  };
}
