import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Button from 'components/Button';

const ProfileScreen = () => {
  const router = useRouter();

  const stats = [
    { label: 'Quizzes Taken', value: '24' },
    { label: 'Average Score', value: '85%' },
    { label: 'Total Points', value: '1,250' },
  ];

  const menuItems = [
    { icon: 'user', label: 'Edit Profile', onPress: () => {} },
    { icon: 'trophy', label: 'Achievements', onPress: () => {} },
    { icon: 'history', label: 'Quiz History', onPress: () => {} },
    { icon: 'bell', label: 'Notifications', onPress: () => {} },
    { icon: 'cog', label: 'Settings', onPress: () => {} },
    { icon: 'question-circle', label: 'Help & Support', onPress: () => {} },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="items-center px-4 py-6">
          <View className="relative">
            <Image
              source={{ uri: require('assets/images/doe.jpg') }}
              className="h-24 w-24 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 rounded-full bg-primary p-2">
              <FontAwesome name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="mt-4 text-2xl font-bold text-text">John Doe</Text>
          <Text className="text-gray-500">john.doe@example.com</Text>
        </View>

        {/* Stats */}
        <View className="mx-4 mb-6 flex-row justify-between rounded-xl bg-background p-4 shadow-sm">
          {stats.map((stat, index) => (
            <View key={index} className="items-center">
              <Text className="text-2xl font-bold text-primary">{stat.value}</Text>
              <Text className="text-sm text-gray-500">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu Items */}
        <View className="mx-4 rounded-xl bg-background p-2 shadow-sm">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              className={`flex-row items-center p-4 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}>
              <FontAwesome name={item.icon as any} size={20} color="#6366F1" />
              <Text className="ml-4 flex-1 text-text">{item.label}</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="mx-4 my-6">
          <Button
            title="Logout"
            onPress={() => router.replace('/auth/login')}
            iconName="sign-out"
            className="bg-red-500"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
