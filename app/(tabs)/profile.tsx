import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                {/* Header */}
                <View className="px-5 pt-4 flex-row items-center justify-between">
                    <Text className="text-white text-[34px] font-bold">Profile</Text>
                    <TouchableOpacity>
                        <Text className="text-primary text-[15px] font-bold">Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* User Info */}
                <View className="px-5 mt-6 flex-row items-center gap-4">
                    <View className="relative">
                        <View className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden">
                            <Image source={{ uri: 'https://picsum.photos/seed/alex/200/200' }} className="w-full h-full" />
                        </View>
                        <View className="absolute bottom-0 right-0 bg-primary w-7 h-7 rounded-full items-center justify-center border-2 border-deep-night">
                            <SymbolView name="camera.fill" size={12} tintColor="black" />
                        </View>
                    </View>
                    <View>
                        <Text className="text-white text-[24px] font-bold leading-tight">G'day, Alex!</Text>
                        <Text className="text-gray-400 text-[14px]">Member since 2021</Text>
                    </View>
                </View>

                {/* Loyalty Card */}
                <View className="px-5 mt-8">
                    <TouchableOpacity activeOpacity={0.9}>
                        <View className="h-48 w-full rounded-2xl bg-[#FDB91A] p-5 justify-between">
                            <View className="flex-row justify-between items-start">
                                <View>
                                    <Text className="text-[#5c4208] text-[10px] font-bold uppercase tracking-wider mb-1">Status</Text>
                                    <Text className="text-[#231d0f] text-[24px] font-black">Oz Legend</Text>
                                </View>
                                <View className="bg-white/20 p-2 rounded-xl border border-white/20">
                                    <SymbolView name="qrcode" size={28} tintColor="#231d0f" />
                                </View>
                            </View>

                            <View>
                                <View className="flex-row justify-between items-end mb-2">
                                    <Text className="text-[#5c4208] font-bold text-[14px]">Points Balance</Text>
                                    <Text className="text-[#231d0f] font-black text-[32px]">1,250</Text>
                                </View>
                                <View className="w-full h-1.5 bg-[#bd8a13]/30 rounded-full overflow-hidden">
                                    <View className="h-full bg-[#231d0f] rounded-full" style={{ width: '75%' }} />
                                </View>
                                <View className="flex-row justify-between mt-2">
                                    <Text className="text-[#5c4208] text-[10px] font-medium">750 to next tier</Text>
                                    <Text className="text-[#231d0f] text-[12px] font-bold underline">View Rewards</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Menu Sections */}
                <View className="mt-8 px-5 gap-8">
                    <MenuSection title="My Activity" items={[
                        { icon: 'calendar', label: 'My Bookings', theme },
                        { icon: 'ticket.fill', label: 'Upcoming Events', badge: '2', theme },
                        { icon: 'heart.fill', label: 'Saved Drinks', theme }
                    ]} />

                    <MenuSection title="Account" items={[
                        { icon: 'person.fill', label: 'Personal Details', theme },
                        { icon: 'creditcard.fill', label: 'Payment Methods', theme },
                        { icon: 'bell.fill', label: 'Notifications', theme }
                    ]} />

                    <MenuSection title="Support" items={[
                        { icon: 'questionmark.circle.fill', label: 'Help & Support', theme },
                        { icon: 'rectangle.portrait.and.arrow.right', label: 'Log Out', isDanger: true, theme }
                    ]} />
                </View>

                <View className="mt-8 mb-10 items-center">
                    <Text className="text-gray-500 text-[12px] font-medium">Café Oz App v2.4.1</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const MenuSection = ({ title, items }: { title: string, items: any[] }) => (
    <View>
        <Text className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-3 ml-1">{title}</Text>
        <View className="bg-card-dark rounded-2xl overflow-hidden border border-white/5">
            {items.map((item, i) => (
                <TouchableOpacity
                    key={i}
                    className={`flex-row items-center justify-between p-4 border-b border-white/5 ${i === items.length - 1 ? 'border-b-0' : ''}`}
                >
                    <View className="flex-row items-center gap-4">
                        <View className={`w-9 h-9 rounded-lg items-center justify-center ${item.isDanger ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                            <SymbolView name={item.icon} size={18} tintColor={item.isDanger ? '#FF3B30' : Colors.dark.primary} />
                        </View>
                        <Text className={`text-[16px] font-medium ${item.isDanger ? 'text-red-500' : 'text-white'}`}>{item.label}</Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                        {item.badge && (
                            <View className="bg-red-500 rounded-full px-2 py-0.5">
                                <Text className="text-white text-[10px] font-bold">{item.badge}</Text>
                            </View>
                        )}
                        <SymbolView name="chevron.right" size={14} tintColor="#8E8E93" />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);
