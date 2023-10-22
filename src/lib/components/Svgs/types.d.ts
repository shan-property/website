export type BaseSvgProps = Omit<svelteHTML.IntrinsicElements['svg'], 'viewBox'> & {
	box: number;
};
export type SvgProps = Omit<BaseSvgProps, 'box'>;
