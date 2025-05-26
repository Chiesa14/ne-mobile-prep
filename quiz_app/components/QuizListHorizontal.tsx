import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const QuizListHorizontal = ({ data }: { data: any[] }) => {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="mr-4 w-52 rounded-xl bg-white p-4 shadow-sm">
          <Image source={{ uri: item.image }} className="h-24 w-full rounded-md" />
          <Text className="mt-2 text-base font-semibold text-text">{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default QuizListHorizontal;
