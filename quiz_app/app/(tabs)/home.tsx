import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import BannerCarousel from 'components/BannerCarousel';
import bannersData from 'assets/data/banners.json';
import CategoryGrid from 'components/CategoryGrid';
import categoriesData from 'assets/data/categories.json';
import QuizListHorizontal from 'components/QuizListHorizontal';
import recommendedData from 'assets/data/recommended.json';
import DailyChallengeCard from 'components/DailyChallengeCard';
import dailyData from 'assets/data/daily.json';
import ProgressOverview from 'components/ProgressOverview';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={[]} // No real data, using FlatList for vertical scroll only
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={
          <View className="px-4 pt-8">
            <Text className="mb-6 text-3xl font-bold text-text">Welcome to QuizApp</Text>

            <BannerCarousel data={bannersData} />

            <Text className="mb-3 mt-8 text-xl font-semibold text-text">Categories</Text>
            <CategoryGrid data={categoriesData} />

            <Text className="mb-3 mt-8 text-xl font-semibold text-text">Recommended</Text>
            <QuizListHorizontal data={recommendedData} />

            <Text className="mb-3 mt-8 text-xl font-semibold text-text">Daily Challenge</Text>
            <DailyChallengeCard data={dailyData} />

            <Text className="mb-3 mt-8 text-xl font-semibold text-text">Your Progress</Text>
            <ProgressOverview />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
