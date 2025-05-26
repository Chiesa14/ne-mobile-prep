import React from 'react';
import { View, Text } from 'react-native';

const ProgressOverview = () => {
  return (
    <View className="rounded-xl bg-white p-6 shadow-sm">
      <Text className="mb-2 text-lg font-bold text-[#1E1E1E]">Quizzes Completed: 12</Text>
      <Text className="text-sm text-gray-500">Accuracy: 78%</Text>
    </View>
  );
};

export default ProgressOverview;
