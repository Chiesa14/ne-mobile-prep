import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from 'validations/signupSchema';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const SignupScreen = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Signup data:', data);
  };

  return (
    <ScrollView
      className="flex-1 bg-[#F9F9FF] px-6"
      contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
      <Text className="mb-6 text-center text-2xl font-bold text-[#1E1E1E]">Sign Up</Text>

      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="First Name"
            placeholder="Enter your first name"
            value={value}
            onChangeText={onChange}
            iconName="user"
            error={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Last Name"
            placeholder="Enter your last name"
            value={value}
            onChangeText={onChange}
            iconName="user"
            error={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={value}
            onChangeText={onChange}
            iconName="mail"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={value}
            onChangeText={onChange}
            iconName="lock"
            isPassword
            error={errors.password?.message}
          />
        )}
      />

      <Button
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        className="rounded-lg bg-primary py-4"
      />

      <Text className="mt-6 text-center text-sm text-[#1E1E1E]">
        Already have an account?{' '}
        <Text className="text-[#AB3CFC]" onPress={() => router.replace('/auth/login')}>
          Login
        </Text>
      </Text>

      <View className="mt-4 flex-row justify-center gap-4 space-x-6">
        <TouchableOpacity className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-gray-400 p-3">
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-gray-400 p-3">
          <FontAwesome name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
