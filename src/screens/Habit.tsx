import {View, Text, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import dayjs from 'dayjs';
import { Checkbox } from '../components/Checkbox';


interface HabitProps{
    date: String
}

export function Habit(){
    const route = useRoute()
    const { date } = route.params as HabitProps;

    const parsedDate = dayjs(date.toString());
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth = parsedDate.format('DD/MM');

    return(
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            >
                <BackButton />

                <Text className='text-zinc-400 mt-6 font-semibold text-base lowercase'>
                    {dayOfWeek}
                </Text>

                <Text className='text-white font-extrabold text-3xl'>
                    {dayAndMonth}
                </Text>

                <ProgressBar progress={30}/>

                <View className='mt-6'>
                    <Checkbox title='Caminhar' checked={false} />
                    <Checkbox title='Academia' checked={true} />
                </View>
            </ScrollView>
        </View>
    );
}