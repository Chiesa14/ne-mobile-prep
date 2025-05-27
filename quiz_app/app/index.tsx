import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import '../global.css';

const PlaceholderImage = ({ text }: { text: string }) => (
  <View className="w-[220px] h-[220px] bg-primary justify-center items-center rounded-[20px]">
    <Text className="text-white text-base">{text}</Text>
  </View>
);

const Index = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        setIsFirstLaunch(hasLaunched === null);
      } catch (error) {
        console.error('Error checking first launch:', error);
        setIsFirstLaunch(false);
      }
    };
    checkFirstLaunch();
  }, []);

  useEffect(() => {
    if (isFirstLaunch === false) {
      router.replace('/auth/login');
    }
  }, [isFirstLaunch, router]);

  const handleDone = async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true');
      router.replace('/auth/login');
    } catch (error) {
      console.error('Error setting first launch flag:', error);
    }
  };

  if (isFirstLaunch === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  if (isFirstLaunch) {
    return (
      <Onboarding
        onDone={handleDone}
        pages={[
          {
            backgroundColor: '#F9FAFB',
            image: <PlaceholderImage text="👋 Welcome" />,
            title: 'Welcome to QuizApp',
            subtitle: 'Test your knowledge with fun quizzes!',
            titleStyles: { color: '#1E1E1E' },
            subTitleStyles: { color: '#1E1E1E' },
          },
          {
            backgroundColor: '#F9FAFB',
            image: <PlaceholderImage text="📈 Track" />,
            title: 'Track Your Progress',
            subtitle: 'Monitor your improvements over time.',
            titleStyles: { color: '#1E1E1E' },
            subTitleStyles: { color: '#1E1E1E' },
          },
          {
            backgroundColor: '#F9FAFB',
            image: <PlaceholderImage text="🤝 Challenge" />,
            title: 'Challenge Friends',
            subtitle: 'Compete with friends and climb the leaderboard.',
            titleStyles: { color: '#1E1E1E' },
            subTitleStyles: { color: '#1E1E1E' },
          },
        ]}
      />
    );
  }

  return null;
};

export default Index;
