import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'validations/loginSchema';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log('Login data:', data);
    router.replace('/home');
  };

  return (
    <View className="flex-1 justify-center bg-[#F9F9FF] px-6">
      <Text className="mb-6 text-center text-2xl font-bold text-[#1E1E1E]">Login</Text>

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
        title="Log In"
        onPress={handleSubmit(onSubmit)}
        className="rounded-lg bg-primary py-4"
      />

      <Text className="mt-6 text-center text-sm text-[#1E1E1E]">
        New to Quiz App?{' '}
        <Text className="text-[#AB3CFC]" onPress={() => router.replace('/auth/signup')}>
          Signup
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
    </View>
  );
};

export default LoginScreen;
