import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const LOCATIONS = ['All Locations', 'Châtelet', 'Denfert', 'Grands Boulevards', 'Lille'];

const FEATURED_EVENTS = [
  {
    id: '1',
    title: 'Friday Night Live DJ Set',
    location: 'Café Oz Châtelet',
    tag: 'TONIGHT',
    image: 'https://picsum.photos/seed/nightclub/600/400',
    attendees: 122,
  },
  {
    id: '2',
    title: 'Rugby World Cup Final',
    location: 'Grands Boulevards',
    tag: 'SELLING FAST',
    tagVariant: 'live',
    image: 'https://picsum.photos/seed/rugby/600/400',
    date: 'Oct 28 • 8:00 PM',
  },
];

const UPCOMING_EVENTS = [
  {
    id: '3',
    title: 'Halloween Costume Party',
    desc: 'Prepare for the spookiest night of the year with our special cocktail menu.',
    location: 'All Locations',
    date: 'OCT 31',
    month: 'Oct',
    day: '31',
    image: 'https://picsum.photos/seed/halloween/600/400',
    action: 'Get Tickets',
  },
  {
    id: '4',
    title: 'Ladies Night',
    desc: 'Free entry and welcome drink for ladies every Wednesday night.',
    location: 'Rooftop Bar',
    date: 'WED WKLY',
    month: 'Wed',
    day: 'WKLY',
    image: 'https://picsum.photos/seed/ladies/600/400',
    action: 'More Info',
  },
  {
    id: '5',
    title: 'Premier League: MCI vs LIV',
    desc: 'Watch the match live on our giant screens with surround sound.',
    location: 'Denfert-Rochereau',
    date: 'LIVE NOW',
    isLive: true,
    month: 'LIVE',
    day: 'NOW',
    image: 'https://picsum.photos/seed/football/600/400',
    action: 'Book Table',
  },
];

export default function EventsScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="px-4 pt-2 pb-2">
          <View className="flex-row items-center justify-between h-12">
            <View>
              <Text className="text-cool-sand/60 text-[12px] font-semibold uppercase tracking-wider">Café Oz App</Text>
              <Text className="text-white text-[14px] font-medium">Sat, Oct 28</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-card-dark items-center justify-center active:scale-95">
              <SymbolView name="magnifyingglass" size={24} tintColor={theme.primary} />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-[40px] font-bold tracking-tight mt-4">Browse Events</Text>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-4"
          contentContainerStyle={{ paddingRight: 40, paddingBottom: 16 }}
        >
          {LOCATIONS.map((loc, i) => (
            <TouchableOpacity
              key={loc}
              className={`h-9 px-5 rounded-full items-center justify-center mr-2.5 ${i === 0 ? 'bg-primary shadow-glow' : 'bg-card-dark border border-white/10'}`}
            >
              <Text className={`text-[14px] font-bold ${i === 0 ? 'text-deep-night' : 'text-cool-sand font-medium'}`}>
                {loc}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Section */}
        <View className="mt-2">
          <View className="px-4 flex-row items-baseline justify-between mb-3">
            <Text className="text-white text-[24px] font-bold">Featured</Text>
            <TouchableOpacity>
              <Text className="text-primary font-semibold text-[14px]">See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            className="pb-4"
          >
            {FEATURED_EVENTS.map((event, index) => (
              <Animated.View
                key={event.id}
                entering={FadeInRight.delay(index * 100)}
                className="mr-4 w-[280px]"
              >
                <View className="flex flex-col rounded-2xl overflow-hidden bg-card-dark shadow-lg border border-white/5">
                  <View className="relative h-48 w-full">
                    <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-90" />
                    <View className="absolute top-3 left-3">
                      <View className={`${event.tagVariant === 'live' ? 'bg-sunset-orange' : 'bg-primary'} rounded-md px-2.5 py-1 flex-row items-center gap-1`}>
                        {event.tagVariant === 'live' && <SymbolView name="flame.fill" size={12} tintColor="white" />}
                        <Text className={`text-[12px] font-bold ${event.tagVariant === 'live' ? 'text-white' : 'text-deep-night'}`}>
                          {event.tag}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 items-center justify-center backdrop-blur-sm">
                      <SymbolView name="heart" size={18} tintColor="white" />
                    </TouchableOpacity>
                  </View>
                  <View className="p-4 flex flex-col gap-3 -mt-4 relative">
                    <View>
                      <Text className="text-white text-[18px] font-bold leading-tight">{event.title}</Text>
                      <View className="flex-row items-center gap-1 mt-1">
                        <SymbolView name="location.fill" size={16} tintColor="#EAE4D6" />
                        <Text className="text-cool-sand/70 text-[14px]">{event.location}</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center justify-between mt-1">
                      {event.attendees ? (
                        <View className="flex-row -space-x-2">
                          {[1, 2].map((i) => (
                            <Image
                              key={i}
                              source={{ uri: `https://picsum.photos/seed/u${i}/40/40` }}
                              className="w-7 h-7 rounded-full border-2 border-card-dark"
                            />
                          ))}
                          <View className="w-7 h-7 rounded-full border-2 border-card-dark bg-gray-700 items-center justify-center">
                            <Text className="text-[10px] font-bold text-white">+{event.attendees - 2}</Text>
                          </View>
                        </View>
                      ) : (
                        <Text className="text-primary font-medium text-[14px]">{event.date}</Text>
                      )}
                      <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg active:scale-95 transition-all">
                        <Text className="text-deep-night text-[14px] font-bold">
                          {event.attendees ? "Join Party" : "Book Table"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        {/* Upcoming List Section */}
        <View className="mt-8 px-4 pb-8">
          <Text className="text-white text-[24px] font-bold mb-4">Upcoming Events</Text>
          <View className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((event, index) => (
              <Animated.View
                key={event.id}
                entering={FadeInUp.delay(index * 100 + 400)}
                className="flex flex-col bg-card-dark rounded-2xl overflow-hidden border border-white/5 shadow-md active:scale-[0.99]"
              >
                <View className="relative h-40 w-full">
                  <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
                  <View className={`absolute top-3 left-3 ${event.isLive ? 'bg-sunset-orange' : 'bg-black/60'} backdrop-blur-md px-3 py-1 rounded-lg items-center justify-center border border-white/10`}>
                    <Text className={`text-[12px] font-bold uppercase ${event.isLive ? 'text-white' : 'text-primary'}`}>{event.month}</Text>
                    <Text className="text-white text-[18px] font-bold leading-none">{event.day}</Text>
                  </View>
                </View>
                <View className="p-4 flex flex-col gap-2">
                  <View>
                    <Text className="text-[18px] font-bold text-white">{event.title}</Text>
                    <Text className="text-[14px] text-cool-sand/60 mt-1">{event.desc}</Text>
                  </View>
                  <View className="mt-2 pt-3 border-t border-white/5 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-2">
                      <SymbolView name="location.fill" size={18} tintColor={theme.primary} />
                      <Text className="text-cool-sand/80 text-[14px]">{event.location}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center gap-1">
                      <Text className="text-primary text-[14px] font-bold">{event.action}</Text>
                      <SymbolView name="arrow.right" size={16} tintColor={theme.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
