import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = 200;

interface Banner {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
}

const BannerCarousel = ({ data }: { data: Banner[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View className="m-auto">
      <Carousel
        ref={ref}
        loop
        width={ITEM_WIDTH}
        height={ITEM_HEIGHT}
        autoPlayInterval={3000}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View className="mx-3 overflow-hidden rounded-3xl bg-background shadow-lg">
            <Image
              source={{ uri: item.image }}
              className="h-full w-full rounded-3xl"
              resizeMode="cover"
              onError={(e) => console.log('Image error:', e.nativeEvent.error)}
            />
            {(item.title || item.subtitle) && (
              <View className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-black/50 p-4">
                {item.title && (
                  <Text className="mb-1 text-xl font-bold text-white">{item.title}</Text>
                )}
                {item.subtitle && <Text className="text-sm text-white">{item.subtitle}</Text>}
              </View>
            )}
          </View>
        )}
      />

      {/* Pagination */}
      <View className="mt-4 flex-row items-center justify-center space-x-2">
        {data.map((_, index) => (
          <View
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerCarousel;
