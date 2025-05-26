import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { clsx } from 'clsx';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  iconName?: keyof typeof FontAwesome.glyphMap;
  iconColor?: string;
  iconSize?: number;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  iconColor = '#fff',
  iconSize = 20,
  className = 'bg-[#7E6DF3] py-3 rounded-xl mt-4',
  textClassName = 'text-white font-semibold text-center',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx('flex-row items-center justify-center', className)}>
      {iconName && (
        <FontAwesome name={iconName} size={iconSize} color={iconColor} className="mr-2" />
      )}
      <Text className={textClassName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
