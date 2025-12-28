import { Platform } from 'react-native';

export const Typography = {
    display: {
        large: {
            fontSize: 34,
            lineHeight: 41,
            fontWeight: '700' as const,
            fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }),
        },
        medium: {
            fontSize: 28,
            lineHeight: 34,
            fontWeight: '700' as const,
            fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }),
        },
        small: {
            fontSize: 22,
            lineHeight: 28,
            fontWeight: '600' as const,
            fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }),
        },
    },
    body: {
        headline: {
            fontSize: 17,
            lineHeight: 22,
            fontWeight: '600' as const,
        },
        regular: {
            fontSize: 17,
            lineHeight: 22,
            fontWeight: '400' as const,
        },
        callout: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: '400' as const,
        },
        subheadline: {
            fontSize: 15,
            lineHeight: 20,
            fontWeight: '400' as const,
        },
        footnote: {
            fontSize: 13,
            lineHeight: 18,
            fontWeight: '400' as const,
        },
        caption: {
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '400' as const,
        },
    },
};
