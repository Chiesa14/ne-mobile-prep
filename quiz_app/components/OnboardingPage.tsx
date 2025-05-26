import React from 'react';
import { View, Text } from 'react-native';

interface OnboardingPageProps {
  title: string;
  subtitle: string;
  iconText: string;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ title, subtitle, iconText }) => {
  return {
    backgroundColor: '#F9F9FF',
    image: (
      <View
        style={{
          width: 220,
          height: 220,
          backgroundColor: '#AB3CFC', // secondary
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>{iconText}</Text>
      </View>
    ),
    title,
    subtitle,
    titleStyles: { color: '#1E1E1E' },
    subTitleStyles: { color: '#1E1E1E' },
  };
};

export default OnboardingPage;
