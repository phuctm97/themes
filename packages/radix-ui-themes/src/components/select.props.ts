import type { Color, Radius } from '../helpers';

const selectSizes = ['1', '2'] as const;
type SelectSize = (typeof selectSizes)[number];
const defaultSelectSize: SelectSize = '2';

const selectTriggerVariants = ['solid', 'soft', 'ghost', 'outline', 'surface'] as const;
type SelectTriggerVariant = (typeof selectTriggerVariants)[number];
const defaultSelectTriggerVariant: SelectTriggerVariant = 'surface';

const selectMenuVariants = ['solid', 'soft'] as const;
type SelectMenuVariant = (typeof selectMenuVariants)[number];
const defaultSelectMenuVariant: SelectMenuVariant = 'solid';

const defaultSelectColor: Color | undefined = undefined;
const defaultSelectRadius: Radius | undefined = undefined;

export {
  selectSizes,
  defaultSelectSize,
  selectTriggerVariants,
  defaultSelectTriggerVariant,
  selectMenuVariants,
  defaultSelectMenuVariant,
  defaultSelectColor,
  defaultSelectRadius,
};
export type { SelectSize, SelectTriggerVariant, SelectMenuVariant };
