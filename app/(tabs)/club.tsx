import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ClubScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                {/* Header */}
                <View className="px-5 pt-4 flex-row items-end justify-between">
                    <Text className="text-white text-[34px] font-bold">Oz Club</Text>
                    <TouchableOpacity>
                        <Text className="text-primary text-[15px] font-medium">Restore</Text>
                    </TouchableOpacity>
                </View>

                <View className="px-5 mt-6">
                    <Text className="text-white text-[24px] font-bold leading-tight">Unlock the Full{"\n"}
                        <Text className="text-primary">Oz Experience</Text>
                    </Text>
                    <Text className="text-gray-400 text-[14px] mt-2">Join the tribe and enjoy exclusive perks at all locations.</Text>
                </View>

                {/* Plan Toggle */}
                <View className="px-5 mt-6">
                    <View className="bg-card-dark p-1 rounded-xl flex-row">
                        <TouchableOpacity className="flex-1 h-10 items-center justify-center rounded-lg">
                            <Text className="text-gray-400 font-medium text-[14px]">Monthly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 h-10 bg-primary items-center justify-center rounded-lg">
                            <Text className="text-deep-night font-bold text-[14px]">Yearly <Text className="text-[10px] font-normal opacity-70">-15%</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Membership Card */}
                <View className="px-5 mt-6">
                    <View className="bg-card-dark rounded-3xl overflow-hidden border border-white/5">
                        <View className="h-40 w-full relative">
                            <Image source={{ uri: 'https://picsum.photos/seed/club/600/300' }} className="w-full h-full" resizeMode="cover" />
                            <View className="absolute inset-0 bg-black/40" />
                            <View className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent" />
                        </View>

                        <View className="p-5 -mt-10">
                            <View className="flex-row justify-between items-start mb-6">
                                <View>
                                    <View className="bg-primary/20 self-start px-2 py-0.5 rounded-full mb-1">
                                        <Text className="text-primary text-[10px] font-bold uppercase">Best Value</Text>
                                    </View>
                                    <Text className="text-white text-[22px] font-bold">Oz Gold Member</Text>
                                </View>
                                <View className="items-end">
                                    <Text className="text-white text-[24px] font-bold">€59.99</Text>
                                    <Text className="text-gray-400 text-[11px]">per year</Text>
                                </View>
                            </View>

                            <View className="h-[1px] bg-white/10 mb-6" />

                            <View className="gap-5 mb-8">
                                <BenefitItem icon="bolt.fill" title="Skip the Line" sub="Express entry at all locations" theme={theme} />
                                <BenefitItem icon="sparkles" title="Happy Hour Extension" sub="Happy hour prices all night Thursdays" theme={theme} />
                                <BenefitItem icon="gift.fill" title="Birthday Treat" sub="Free bottle of bubbly on your week" theme={theme} />
                                <BenefitItem icon="ticket.fill" title="Priority Access" sub="Early bird tickets for special events" theme={theme} />
                            </View>

                            <TouchableOpacity className="bg-primary h-14 rounded-2xl items-center justify-center shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                                <Text className="text-deep-night font-bold text-[17px]">Become a Member</Text>
                            </TouchableOpacity>
                            <Text className="text-center text-[10px] text-gray-500 mt-4">Recurring billing. Cancel anytime via Apple ID.</Text>
                        </View>
                    </View>
                </View>

                {/* Links */}
                <View className="px-5 mt-8 pb-10 gap-3">
                    <ManageLink label="Manage Payment Methods" />
                    <ManageLink label="Terms of Service" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const BenefitItem = ({ icon, title, sub, theme }: any) => (
    <View className="flex-row items-center gap-4">
        <View className="w-9 h-9 rounded-full bg-white/5 items-center justify-center">
            <SymbolView name={icon} size={18} tintColor={theme.primary} />
        </View>
        <View>
            <Text className="text-white font-bold text-[15px]">{title}</Text>
            <Text className="text-gray-400 text-[12px]">{sub}</Text>
        </View>
    </View>
);

const ManageLink = ({ label }: { label: string }) => (
    <TouchableOpacity className="flex-row items-center justify-between bg-card-dark h-14 px-4 rounded-xl border border-white/5 active:bg-white/5">
        <Text className="text-white font-medium text-[15px]">{label}</Text>
        <SymbolView name="chevron.right" size={14} tintColor="#8E8E93" />
    </TouchableOpacity>
);
