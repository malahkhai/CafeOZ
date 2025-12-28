import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const FOOD_ITEMS = [
    { id: '1', name: "Frites", desc: "Avec sauces au choix", price: "€6.00", img: "https://picsum.photos/seed/fries/200/200" },
    { id: '2', name: "Mini Burgers x3", desc: "Bacon, cheddar, sauce BBQ", price: "€15.00", img: "https://picsum.photos/seed/burgers/200/200" },
    { id: '3', name: "Chicken Wings x6", desc: "Sauce BBQ", price: "€11.00", img: "https://picsum.photos/seed/wings/200/200" },
];

const DRINK_ITEMS = [
    { id: '4', name: "Pinte de Kro", desc: "Kronenbourg 1664", price: "€8.00", img: "https://picsum.photos/seed/pint/200/200" },
    { id: '5', name: "Pinte Brooklyn Lager", desc: "Amber Lager", price: "€10.00", img: "https://picsum.photos/seed/brooklyn/200/200" },
    { id: '6', name: "Cocktail du moment", desc: "Ask our bartender", price: "€12.00", img: "https://picsum.photos/seed/cocktail/200/200" },
];

export default function MenuScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                {/* Header */}
                <View className="px-5 pt-4 pb-2">
                    <View className="flex-row items-center justify-between mb-4">
                        <View>
                            <Text className="text-primary text-[11px] font-bold uppercase tracking-widest">Order & Pickup</Text>
                            <TouchableOpacity className="flex-row items-center gap-1">
                                <Text className="text-white text-[20px] font-extrabold">Café Oz Denfert</Text>
                                <SymbolView name="chevron.down" size={14} tintColor={theme.primary} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className="w-10 h-10 rounded-full bg-card-dark items-center justify-center">
                            <SymbolView name="person.circle" size={24} tintColor="white" />
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1 flex-row items-center h-12 bg-card-dark rounded-xl px-4">
                            <SymbolView name="magnifyingglass" size={18} tintColor="#8E8E93" />
                            <TextInput
                                placeholder="Search menu..."
                                placeholderTextColor="#8E8E93"
                                className="flex-1 ml-3 text-white text-[15px]"
                            />
                        </View>
                        <TouchableOpacity className="w-12 h-12 bg-card-dark rounded-xl items-center justify-center">
                            <SymbolView name="slider.horizontal.3" size={20} tintColor="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Categories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mt-4 px-5"
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {['All', 'FOOD', 'DRINKS', 'HAPPY HOUR'].map((cat, i) => (
                        <TouchableOpacity
                            key={cat}
                            className={`h-9 px-6 rounded-full items-center justify-center mr-2.5 ${i === 0 ? 'bg-primary' : 'bg-card-dark border border-white/5'}`}
                        >
                            <Text className={`text-[13px] font-bold ${i === 0 ? 'text-deep-night' : 'text-white'}`}>
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Happy Hour Hero */}
                <View className="px-5 mt-4">
                    <TouchableOpacity activeOpacity={0.9}>
                        <View className="relative h-44 w-full rounded-2xl overflow-hidden">
                            <Image source={{ uri: 'https://picsum.photos/seed/beer/800/400' }} className="w-full h-full" resizeMode="cover" />
                            <View className="absolute inset-0 bg-black/40" />
                            <View className="absolute inset-0 p-5 justify-end">
                                <View className="flex-row items-center gap-2 mb-2">
                                    <View className="bg-primary px-2 py-0.5 rounded">
                                        <Text className="text-[10px] font-bold text-deep-night">HAPPY HOUR</Text>
                                    </View>
                                    <Text className="text-white/80 text-[11px] font-medium">Until 8PM</Text>
                                </View>
                                <Text className="text-white text-[24px] font-bold mb-1">Aussie Hour! 🍻</Text>
                                <Text className="text-gray-300 text-[14px]">2-for-1 Foster's Pints on tap.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Menu Sections */}
                <View className="px-5 mt-8">
                    <Text className="text-white text-[18px] font-bold uppercase tracking-wider mb-5">FOOD</Text>
                    {FOOD_ITEMS.map((item, index) => (
                        <MenuItemCard key={item.id} item={item} theme={theme} index={index} />
                    ))}

                    <Text className="text-white text-[18px] font-bold uppercase tracking-wider mt-8 mb-5">DRINKS</Text>
                    {DRINK_ITEMS.map((item, index) => (
                        <MenuItemCard key={item.id} item={item} theme={theme} index={index} />
                    ))}
                </View>

                <View className="h-40" />
            </ScrollView>

            {/* Floating Checkout Button */}
            <View className="absolute bottom-10 left-5 right-5">
                <TouchableOpacity
                    activeOpacity={0.9}
                    className="bg-primary h-16 rounded-2xl flex-row items-center justify-between px-5 shadow-xl shadow-black/50"
                >
                    <View className="flex-row items-center gap-3">
                        <View className="w-8 h-8 rounded-full bg-black/20 items-center justify-center">
                            <Text className="text-deep-night font-bold text-[14px]">3</Text>
                        </View>
                        <View>
                            <Text className="text-deep-night font-bold text-[16px]">€29.50</Text>
                            <Text className="text-deep-night/60 text-[11px] font-medium">3 items in cart</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-deep-night font-bold text-[15px]">Schedule Pickup</Text>
                        <SymbolView name="arrow.right" size={14} tintColor="#1A1A1D" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const MenuItemCard = ({ item, theme, index }: any) => (
    <Animated.View
        entering={FadeInUp.delay(index * 100)}
        className="mb-4 bg-card-dark rounded-2xl p-3 flex-row gap-4 border border-white/5"
    >
        <Image source={{ uri: item.img }} className="w-24 h-24 rounded-xl" />
        <View className="flex-1 justify-between py-1">
            <View>
                <Text className="text-white text-[17px] font-bold mb-1">{item.name}</Text>
                <Text className="text-gray-400 text-[13px]" numberOfLines={2}>{item.desc}</Text>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <Text className="text-white font-bold text-[16px]">{item.price}</Text>
                <TouchableOpacity className="w-8 h-8 rounded-full bg-primary/20 items-center justify-center">
                    <SymbolView name="plus" size={14} tintColor={theme.primary} />
                </TouchableOpacity>
            </View>
        </View>
    </Animated.View>
);
