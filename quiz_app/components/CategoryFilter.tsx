import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-4">
      <TouchableOpacity
        onPress={() => onSelectCategory('all')}
        className={`mr-2 rounded-full px-4 py-2 ${
          selectedCategory === 'all' ? 'bg-primary' : 'bg-background'
        }`}>
        <Text
          className={`font-medium ${
            selectedCategory === 'all' ? 'text-white' : 'text-text'
          }`}>
          All
        </Text>
      </TouchableOpacity>

      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => onSelectCategory(category.id)}
          className={`mr-2 rounded-full px-4 py-2 ${
            selectedCategory === category.id ? 'bg-primary' : 'bg-background'
          }`}>
          <Text
            className={`font-medium ${
              selectedCategory === category.id ? 'text-white' : 'text-text'
            }`}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;
