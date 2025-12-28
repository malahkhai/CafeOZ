import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
    label: string;
    variant?: 'live' | 'free' | 'premium' | 'full' | 'neutral';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    label,
    variant = 'neutral',
    className = ""
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'live':
                return "bg-sunset-orange";
            case 'free':
                return "bg-green-500"; // iOS Green fallback
            case 'premium':
                return "bg-primary";
            case 'full':
                return "bg-gray-400";
            default:
                return "bg-gray-100 dark:bg-gray-800";
        }
    };

    const getTextStyles = () => {
        switch (variant) {
            case 'premium':
                return "text-deep-night";
            default:
                return "text-white";
        }
    };

    return (
        <View className={`${getVariantStyles()} px-2.5 py-1 rounded-lg ${className}`}>
            <Text className={`${getTextStyles()} text-[11px] font-bold uppercase`}>
                {label}
            </Text>
        </View>
    );
};
