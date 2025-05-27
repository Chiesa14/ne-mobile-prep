import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
  showViewAll?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onViewAll,
  showViewAll = true,
}) => {
  return (
    <View className="mb-3 mt-8 flex-row items-center justify-between">
      <Text className="text-xl font-semibold text-text">{title}</Text>
      {showViewAll && (
        <TouchableOpacity
          onPress={onViewAll}
          className="flex-row items-center">
          <Text className="mr-1 text-sm text-primary">View All</Text>
          <FontAwesome name="chevron-right" size={12} color="#6366F1" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader; 