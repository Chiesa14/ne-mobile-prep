import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Stat {
  icon: string;
  label: string;
  value: string;
}

interface QuickStatsProps {
  stats: Stat[];
}

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <View className="flex-row justify-between rounded-xl bg-background p-4 shadow-sm">
      {stats.map((stat, index) => (
        <View key={index} className="items-center">
          <View className="mb-2 rounded-full bg-primary/10 p-3">
            <FontAwesome name={stat.icon as any} size={20} color="#6366F1" />
          </View>
          <Text className="text-lg font-bold text-text">{stat.value}</Text>
          <Text className="text-sm text-gray-500">{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default QuickStats; 