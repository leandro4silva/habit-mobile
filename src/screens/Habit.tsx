import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import {View, Text, ScrollView, Alert} from 'react-native';
import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';
import { Loading } from '../components/Loading';
import { api } from '../lib/axios';


interface HabitProps{
    date: String
}

interface DayInfoProps{
    completedHabits: string[];
    possibleHabits: Array<{
        id: string,
        title: string
    }>
}

export function Habit(){
    const [loading, setLoading] = useState(true);
    const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
    const route = useRoute()
    const { date } = route.params as HabitProps;

    const parsedDate = dayjs(date.toString());
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth = parsedDate.format('DD/MM');

    async function fetchHabits(){
        try{
            setLoading(true);
            const response = await api.get('days', {
                params: {
                    date
                }
            })
            setDayInfo(response.data);
        }catch(error){ 
            console.log(error);
            Alert.alert('Ops', 'Não foi possivel carregar as informações dos habitos.');
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchHabits();
    }, [])

    if(loading){
        return(
            <Loading />
        );
    }

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
                    {
                        dayInfo?.possibleHabits && 
                        dayInfo.possibleHabits.map((habit) => {
                            return(
                                <Checkbox 
                                    key={habit.id} 
                                    title={habit.title} 
                                    checked={true} 
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}