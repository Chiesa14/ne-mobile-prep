import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import '../global.css';

const PlaceholderImage = ({ text }: { text: string }) => (
  <View
    style={{
      width: 220,
      height: 220,
      backgroundColor: '#AB3CFC',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    }}>
    <Text style={{ color: '#fff', fontSize: 16 }}>{text}</Text>
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
        setIsFirstLaunch(false); // Default to not first launch if there's an error
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#7E6DF3" />
      </View>
    );
  }

  if (isFirstLaunch) {
    return (
      <Onboarding
        onDone={handleDone}
        pages={[
          {
            backgroundColor: '#F9F9FF',
            image: <PlaceholderImage text="👋 Welcome" />,
            title: 'Welcome to QuizApp',
            subtitle: 'Test your knowledge with fun quizzes!',
            titleStyles: { color: '#1E1E1E' },
            subTitleStyles: { color: '#1E1E1E' },
          },
          {
            backgroundColor: '#F9F9FF',
            image: <PlaceholderImage text="📈 Track" />,
            title: 'Track Your Progress',
            subtitle: 'Monitor your improvements over time.',
            titleStyles: { color: '#1E1E1E' },
            subTitleStyles: { color: '#1E1E1E' },
          },
          {
            backgroundColor: '#F9F9FF',
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
