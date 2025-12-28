import * as Haptics from 'expo-haptics';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

interface ButtonProps {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'text';
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    titleStyle?: any;
}

export const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    variant = 'primary',
    loading = false,
    disabled = false,
    className = "",
    titleStyle
}) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const handlePressIn = () => {
        scale.value = withSpring(0.98);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return "bg-primary rounded-xl h-[50px] items-center justify-center px-6 shadow-sm";
            case 'secondary':
                return "bg-transparent border-2 border-primary rounded-xl h-[50px] items-center justify-center px-6";
            case 'text':
                return "bg-transparent h-[50px] items-center justify-center px-4";
            default:
                return "bg-primary rounded-xl h-[50px] items-center justify-center px-6";
        }
    };

    const getTextStyles = () => {
        switch (variant) {
            case 'primary':
                return "text-deep-night font-bold text-[17px]";
            case 'secondary':
                return "text-primary font-bold text-[17px]";
            case 'text':
                return "text-primary font-bold text-[17px]";
            default:
                return "text-deep-night font-bold text-[17px]";
        }
    };

    return (
        <AnimatedTouchableOpacity
            activeOpacity={0.9}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
            disabled={disabled || loading}
            style={[animatedStyle]}
            className={`${getVariantStyles()} ${disabled ? 'opacity-40' : ''} ${className}`}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? '#1A1A1D' : '#FDB91A'} />
            ) : (
                <Text className={getTextStyles()} style={titleStyle}>{title}</Text>
            )}
        </AnimatedTouchableOpacity>
    );
};
