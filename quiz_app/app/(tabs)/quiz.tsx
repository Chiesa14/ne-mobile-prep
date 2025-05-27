import React, { useState, useMemo } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import QuizCard from '../../components/QuizCard';
import CategoryFilter from '../../components/CategoryFilter';

const QuizScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  const categories = [
    { id: '1', name: 'Science' },
    { id: '2', name: 'History' },
    { id: '3', name: 'Geography' },
    { id: '4', name: 'Math' },
    { id: '5', name: 'Literature' },
    { id: '6', name: 'Art' },
  ];

  const quizzes = [
    {
      id: '1',
      title: 'Basic Science Quiz',
      description: 'Test your knowledge of fundamental scientific concepts',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      questionCount: 15,
      categoryId: '1',
    },
    {
      id: '2',
      title: 'World History Challenge',
      description: 'Explore major historical events and figures',
      imageUrl: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Medium' as const,
      timeLimit: 15,
      questionCount: 20,
      categoryId: '2',
    },
    {
      id: '3',
      title: 'Advanced Mathematics',
      description: 'Complex mathematical problems and theories',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Hard' as const,
      timeLimit: 20,
      questionCount: 25,
      categoryId: '4',
    },
    {
      id: '4',
      title: 'Geography Explorer',
      description: 'Test your knowledge of countries, capitals, and landmarks',
      imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Medium' as const,
      timeLimit: 15,
      questionCount: 20,
      categoryId: '3',
    },
    {
      id: '5',
      title: 'Classic Literature',
      description: 'Questions about famous books, authors, and literary works',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Medium' as const,
      timeLimit: 15,
      questionCount: 20,
      categoryId: '5',
    },
    {
      id: '6',
      title: 'Physics Fundamentals',
      description: 'Basic principles of physics and mechanics',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      difficulty: 'Hard' as const,
      timeLimit: 20,
      questionCount: 25,
      categoryId: '1',
    },
  ];

  const filteredQuizzes = useMemo(() => {
    if (selectedCategory === 'all') {
      return quizzes;
    }
    return quizzes.filter((quiz) => quiz.categoryId === selectedCategory);
  }, [selectedCategory]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleQuizPress = (quizId: string) => {
    router.push(`/quiz/${quizId}`);
  };

  const selectedCategoryName = useMemo(() => {
    if (selectedCategory === 'all') return 'All';
    return categories.find(cat => cat.id === selectedCategory)?.name || 'All';
  }, [selectedCategory, categories]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1 px-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View className="py-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {filteredQuizzes.length === 0 ? (
            <View className="flex-1 items-center justify-center py-8">
              <Text className="text-lg font-semibold text-text">
                No quizzes found in {selectedCategoryName}
              </Text>
              <Text className="mt-2 text-center text-gray-500">
                Check back later for new quizzes in this category
              </Text>
            </View>
          ) : (
            filteredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                description={quiz.description}
                imageUrl={quiz.imageUrl}
                difficulty={quiz.difficulty}
                timeLimit={quiz.timeLimit}
                questionCount={quiz.questionCount}
                onPress={() => handleQuizPress(quiz.id)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
