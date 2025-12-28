import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
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
    image: 'https://picsum.photos/seed/halloween/600/400',
    action: 'Get Tickets',
  },
  {
    id: '4',
    title: 'Ladies Night',
    desc: 'Free entry and welcome drink for ladies every Wednesday night.',
    location: 'Rooftop Bar',
    date: 'WED WKLY',
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
        <View className="px-5 pt-4 pb-2">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-secondary-text text-[11px] font-bold uppercase tracking-widest text-gray-500">Café Oz App</Text>
              <Text className="text-white text-[15px] font-medium">Sat, Oct 28</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-card-dark items-center justify-center">
              <SymbolView name="magnifyingglass" size={20} tintColor={theme.primary} />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-[34px] font-bold leading-tight">Browse Events</Text>
        </View>

        {/* Location Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 px-5"
          contentContainerStyle={{ paddingRight: 40 }}
        >
          {LOCATIONS.map((loc, i) => (
            <TouchableOpacity
              key={loc}
              className={`h-9 px-5 rounded-full items-center justify-center mr-2.5 ${i === 0 ? 'bg-primary' : 'bg-card-dark border border-white/10'}`}
            >
              <Text className={`text-[14px] font-bold ${i === 0 ? 'text-deep-night' : 'text-gray-300'}`}>
                {loc}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Section */}
        <View className="mt-8">
          <View className="px-5 flex-row items-baseline justify-between mb-4">
            <Text className="text-white text-[22px] font-bold">Featured</Text>
            <TouchableOpacity>
              <Text className="text-primary font-bold text-[14px]">See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            snapToInterval={280 + 20}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {FEATURED_EVENTS.map((event, index) => (
              <Animated.View
                key={event.id}
                entering={FadeInRight.delay(index * 100)}
                className="mr-5 w-[280px]"
              >
                <Card className="h-[360px]">
                  <View className="relative h-48 w-full">
                    <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
                    <View className="absolute inset-0 bg-black/30" />
                    <View className="absolute top-3 left-3">
                      <Badge label={event.tag} variant={event.tagVariant as any || 'premium'} />
                    </View>
                    <TouchableOpacity className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 items-center justify-center backdrop-blur-sm">
                      <SymbolView name="heart" size={16} tintColor="white" />
                    </TouchableOpacity>
                  </View>
                  <View className="p-4 flex-1 justify-between">
                    <View>
                      <Text className="text-white text-[18px] font-bold mb-1">{event.title}</Text>
                      <View className="flex-row items-center gap-1">
                        <SymbolView name="mappin.circle" size={14} tintColor={theme.primary} />
                        <Text className="text-gray-400 text-[14px]">{event.location}</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center justify-between">
                      {event.attendees ? (
                        <View className="flex-row items-center">
                          <View className="flex-row -space-x-3">
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
                        </View>
                      ) : (
                        <Text className="text-primary font-bold text-[14px]">{event.date}</Text>
                      )}
                      <Button
                        title={event.attendees ? "Join Party" : "Book Table"}
                        onPress={() => { }}
                        className="h-10 px-4 min-w-[100px]"
                        titleStyle={{ fontSize: 13 }} // This would need support in Button component
                      />
                    </View>
                  </View>
                </Card>
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        {/* Upcoming Events */}
        <View className="mt-8 px-5 pb-10">
          <Text className="text-white text-[22px] font-bold mb-5">Upcoming Events</Text>
          {UPCOMING_EVENTS.map((event, index) => (
            <Animated.View
              key={event.id}
              entering={FadeInUp.delay(index * 100 + 400)}
              className="mb-5"
            >
              <Card>
                <View className="relative h-40 w-full">
                  <Image source={{ uri: event.image }} className="w-full h-full" resizeMode="cover" />
                  <View className="absolute top-3 left-3 bg-black/60 rounded-lg p-2 items-center justify-center border border-white/10 backdrop-blur-md">
                    <Text className="text-primary text-[10px] font-bold uppercase">{event.date.split(' ')[0]}</Text>
                    <Text className="text-white text-[16px] font-bold">{event.date.split(' ')[1] || ''}</Text>
                  </View>
                  {event.isLive && (
                    <View className="absolute top-3 right-3">
                      <Badge label="LIVE" variant="live" />
                    </View>
                  )}
                </View>
                <View className="p-4">
                  <Text className="text-white text-[18px] font-bold mb-1">{event.title}</Text>
                  <Text className="text-gray-400 text-[14px] leading-snug">{event.desc}</Text>
                  <View className="mt-4 pt-4 border-t border-white/5 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-2">
                      <SymbolView name="mappin.circle" size={16} tintColor={theme.primary} />
                      <Text className="text-gray-300 text-[14px]">{event.location}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center gap-1">
                      <Text className="text-primary font-bold text-[14px]">{event.action}</Text>
                      <SymbolView name="chevron.right" size={12} tintColor={theme.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
