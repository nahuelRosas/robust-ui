type EnumerateRangeStrings<
  End extends number,
  Acc extends string[] = [],
> = Acc["length"] extends End
  ? Acc[number]
  : EnumerateRangeStrings<End, [...Acc, `${Acc["length"]}`]>;

// type EnumerateRange<
//   End extends number,
//   Acc extends number[] = [],
// > = Acc["length"] extends End
//   ? Acc[number]
//   : EnumerateRange<End, [...Acc, Acc["length"]]>;

// type Range = EnumerateRange<300>;
export type RangeStrings = EnumerateRangeStrings<300>;
