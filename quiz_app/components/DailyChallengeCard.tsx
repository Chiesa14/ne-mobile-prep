import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const DailyChallengeCard = ({ data }: { data: any }) => {
  return (
    <TouchableOpacity className="rounded-xl bg-purple-100 p-6">
      <Text className="text-lg font-bold text-purple-700">{data.title}</Text>
      <Text className="mt-2 text-sm text-purple-800">{data.description}</Text>
    </TouchableOpacity>
  );
};

export default DailyChallengeCard;
