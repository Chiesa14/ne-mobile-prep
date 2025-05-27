import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface QuizCardProps {
  title: string;
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  questionCount: number;
  onPress: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  imageUrl,
  difficulty,
  timeLimit,
  questionCount,
  onPress,
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-500';
      case 'Medium':
        return 'text-yellow-500';
      case 'Hard':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-4 overflow-hidden rounded-xl bg-background shadow-sm">
      <Image
        source={{ uri: imageUrl }}
        className="h-40 w-full"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-xl font-bold text-text">{title}</Text>
        <Text className="mt-1 text-sm text-gray-500">{description}</Text>
        
        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <FontAwesome name="clock-o" size={16} color="#6366F1" />
            <Text className="ml-2 text-sm text-text">{timeLimit} min</Text>
          </View>
          
          <View className="flex-row items-center">
            <FontAwesome name="question-circle" size={16} color="#6366F1" />
            <Text className="ml-2 text-sm text-text">{questionCount} questions</Text>
          </View>
          
          <View className="flex-row items-center">
            <FontAwesome name="signal" size={16} color="#6366F1" />
            <Text className={`ml-2 text-sm ${getDifficultyColor()}`}>{difficulty}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuizCard; 