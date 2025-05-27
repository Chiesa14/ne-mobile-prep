import React from 'react';
import { FlatList, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BannerCarousel from '../../components/BannerCarousel';
import CategoryGrid from '../../components/CategoryGrid';
import QuizListHorizontal from '../../components/QuizListHorizontal';
import DailyChallengeCard from '../../components/DailyChallengeCard';
import ProgressOverview from '../../components/ProgressOverview';
import SectionHeader from '../../components/SectionHeader';
import QuickStats from '../../components/QuickStats';

const Home = () => {
  const router = useRouter();

  const banners = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'New Quizzes Added!',
      subtitle: 'Test your knowledge with our latest quizzes',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Daily Challenge',
      subtitle: 'Complete today\'s challenge to earn bonus points',
    },
  ];

  const categories = [
    { id: '1', name: 'Science', icon: 'flask' },
    { id: '2', name: 'History', icon: 'book' },
    { id: '3', name: 'Geography', icon: 'globe' },
    { id: '4', name: 'Math', icon: 'calculator' },
    { id: '5', name: 'Literature', icon: 'pencil' },
    { id: '6', name: 'Art', icon: 'paint-brush' },
  ];

  const quickStats = [
    { icon: 'trophy', label: 'Points', value: '1,250' },
    { icon: 'check-circle', label: 'Completed', value: '24' },
    { icon: 'star', label: 'Streak', value: '7 days' },
  ];

  const recommendedQuizzes = [
    {
      id: '1',
      title: 'Basic Science Quiz',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Easy',
      timeLimit: 10,
    },
    {
      id: '2',
      title: 'World History Challenge',
      imageUrl: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Medium',
      timeLimit: 15,
    },
    {
      id: '3',
      title: 'Advanced Mathematics',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Hard',
      timeLimit: 20,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={[]}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={
          <View className="px-4 pt-8">
            {/* Header with Welcome and Notification */}
            <View className="mb-6 flex-row items-center justify-between">
              <View>
                <Text className="text-3xl font-bold text-text">Welcome back!</Text>
                <Text className="text-gray-500">Ready to learn something new?</Text>
              </View>
              <TouchableOpacity className="rounded-full bg-primary/10 p-3">
                <FontAwesome name="bell" size={20} color="#6366F1" />
              </TouchableOpacity>
            </View>

            {/* Quick Stats */}
            <QuickStats stats={quickStats} />

            {/* Banner Carousel */}
            <BannerCarousel data={banners} />

            {/* Categories Section */}
            <SectionHeader
              title="Categories"
              onViewAll={() => router.push('/(tabs)/quiz')}
            />
            <CategoryGrid data={categories} />

            {/* Recommended Section */}
            <SectionHeader
              title="Recommended for You"
              onViewAll={() => router.push('/(tabs)/quiz')}
            />
            <QuizListHorizontal data={recommendedQuizzes} />

            {/* Daily Challenge Section */}
            <SectionHeader
              title="Daily Challenge"
              showViewAll={false}
            />
            <DailyChallengeCard
              data={{
                title: 'Science Challenge',
                description: 'Test your knowledge of scientific concepts',
                timeLimit: 15,
                questionCount: 20,
                points: 100,
              }}
            />

            {/* Progress Section */}
            <SectionHeader
              title="Your Progress"
              showViewAll={false}
            />
            <ProgressOverview />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
