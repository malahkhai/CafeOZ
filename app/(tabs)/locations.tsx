import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const PARIS_LOCATIONS = [
  { id: '1', name: "Châtelet", addr: "18 Rue Saint-Denis, 75001", badge: "Open until 5am", img: "https://picsum.photos/seed/loc1/500/300" },
  { id: '2', name: "Denfert-Rochereau", addr: "3 Place Denfert-Rochereau, 75014", badge: "Rooftop Open", img: "https://picsum.photos/seed/loc2/500/300", isAltBadge: true },
  { id: '3', name: "Grands Boulevards", addr: "8 Boulevard Montmartre, 75009", img: "https://picsum.photos/seed/loc3/500/300" }
];

const LILLE_LOCATIONS = [
  { id: '4', name: "The Australian Bar", addr: "33 Place Louise de Bettignies", badge: "Live Sport", img: "https://picsum.photos/seed/loc4/500/300" }
];

export default function LocationsScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="px-5 pt-4">
          <Text className="text-white text-[34px] font-bold leading-tight">Where are we{"\n"}meeting?</Text>
        </View>

        {/* Search */}
        <View className="px-5 mt-6">
          <View className="flex-row items-center h-12 bg-card-dark rounded-xl px-4 border border-white/5">
            <SymbolView name="magnifyingglass" size={18} tintColor="#8E8E93" />
            <TextInput
              placeholder="Search city or bar name..."
              placeholderTextColor="#8E8E93"
              className="flex-1 ml-3 text-white text-[16px]"
            />
          </View>
        </View>

        {/* Near Me */}
        <View className="px-5 mt-6">
          <View className="bg-card-dark rounded-2xl p-4 border border-white/5 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4 flex-1">
              <View className="w-10 h-10 rounded-full bg-primary/20 items-center justify-center">
                <SymbolView name="location.fill" size={20} tintColor={theme.primary} />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-[15px]">Find nearest Oz</Text>
                <Text className="text-gray-400 text-[12px]">Enable location for wait times</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg">
              <Text className="text-deep-night font-bold text-[13px]">Allow</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sections */}
        <View className="px-5 mt-8 pb-10">
          <CitySection title="Paris" locations={PARIS_LOCATIONS} theme={theme} />
          <View className="mt-8" />
          <CitySection title="Lille" locations={LILLE_LOCATIONS} theme={theme} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CitySection = ({ title, locations, theme }: { title: string, locations: any[], theme: any }) => (
  <View>
    <Text className="text-white text-[20px] font-bold mb-4">{title}</Text>
    {locations.map((loc, index) => (
      <Animated.View
        key={loc.id}
        entering={FadeInUp.delay(index * 100)}
        className="mb-5"
      >
        <TouchableOpacity activeOpacity={0.95}>
          <View className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/10">
            <Image source={{ uri: loc.img }} className="w-full h-full" resizeMode="cover" />
            <View className="absolute inset-0 bg-black/40" />
            <View className="absolute inset-0 justify-end p-5">
              <Text className="text-white text-[24px] font-bold mb-1">{loc.name}</Text>
              <View className="flex-row items-center gap-1">
                <SymbolView name="mappin.circle" size={14} tintColor={theme.primary} />
                <Text className="text-gray-300 text-[14px]">{loc.addr}</Text>
              </View>
            </View>
            {loc.badge && (
              <View className={`absolute top-4 right-4 px-3 py-1 rounded-full ${loc.isAltBadge ? 'bg-white/20 border border-white/10' : 'bg-primary'}`}>
                <Text className={`text-[10px] font-bold uppercase ${loc.isAltBadge ? 'text-white' : 'text-deep-night'}`}>
                  {loc.badge}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    ))}
  </View>
)
