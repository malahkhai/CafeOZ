import React from 'react';
import { Platform, View } from 'react-native';

interface CardProps {
    children: React.ReactNode;
    elevation?: 2 | 4;
    className?: string;
    backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    elevation = 2,
    className = "",
    backgroundColor = "bg-white dark:bg-card-dark"
}) => {
    const getShadowStyle = () => {
        if (Platform.OS === 'ios') {
            return elevation === 2
                ? { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8 }
                : { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 16 };
        }
        return { elevation: elevation * 2 };
    };

    return (
        <View
            style={getShadowStyle()}
            className={`${backgroundColor} rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 ${className}`}
        >
            {children}
        </View>
    );
};
