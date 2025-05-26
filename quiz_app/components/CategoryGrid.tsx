import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

const CategoryGrid = ({ data }: { data: any[] }) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <TouchableOpacity className="mb-4 w-[48%] rounded-xl bg-white p-4 shadow-sm">
          <Text className="text-lg font-semibold text-[#1E1E1E]">{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryGrid;
