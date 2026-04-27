/**
 * Design Tokens - Gaetano Pesce
 * Generated from Figma Design System
 */

export const colors = {
	content: {
		primary: '#202426',
		secondary: '#7d8e93'
	},
	background: {
		primary: '#fafafa',
		secondary: '#ebeeef'
	},
	link: {
		default: '#202426'
	},
	filter: {
		backgroundSelected: '#f6392b',
		textSelected: '#fafafa',
		textDefault: '#202426'
	},
	accent: {
		primary: '#f6392b',
		sunset: 'transparent'
	}
} as const;

export const spacing = {
	0: '0px',
	4: '16px',
	5: '24px',
	7: '40px',
	8: '56px',
	9: '72px',
	11: '160px',
	12: '80px'
} as const;

export const radius = {
	none: '0px',
	m: '16px',
	full: '999px'
} as const;

export const units = {
	48: '48px'
} as const;

export const typography = {
	fontFamily: {
		primary: "'Degular Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
		font1: "'Degular Display', sans-serif"
	},
	fontSize: {
		h2: '48px',
		h3: '24px',
		h4: '20px',
		h4h5: '16px',
		citazioneDesktop: '220px'
	},
	fontWeight: {
		regular: 400,
		medium: 500,
		semibold: 600
	},
	lineHeight: {
		normal: 1,
		tight: 1,
		h4h5: '20px',
		h2: '52px',
		citazioneDesktop: '200px'
	},
	letterSpacing: {
		default: 0,
		tight: '0.2px'
	}
} as const;

export const breakpoints = {
	tablet: '1024px',
	mobile: '640px'
} as const;

// Semantic typography styles
export const typographyStyles = {
	h2: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h2,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.h2,
		letterSpacing: typography.letterSpacing.default
	},
	h3Semibold: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h3,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: '100%',
		letterSpacing: typography.letterSpacing.default
	},
	h3Regular: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h3,
		fontWeight: typography.fontWeight.regular,
		lineHeight: '100%',
		letterSpacing: typography.letterSpacing.default
	},
	h4: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h4,
		fontWeight: typography.fontWeight.regular,
		lineHeight: typography.lineHeight.h4h5,
		letterSpacing: typography.letterSpacing.default
	},
	h4h5Semibold: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h4h5,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: '100%',
		letterSpacing: typography.letterSpacing.default
	},
	h4h5Regular: {
		fontFamily: typography.fontFamily.primary,
		fontSize: typography.fontSize.h4h5,
		fontWeight: typography.fontWeight.regular,
		lineHeight: spacing[4],
		letterSpacing: typography.letterSpacing.default
	},
	citazioneDesktop: {
		fontFamily: typography.fontFamily.font1,
		fontSize: typography.fontSize.citazioneDesktop,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.citazioneDesktop,
		letterSpacing: typography.letterSpacing.default
	}
} as const;
