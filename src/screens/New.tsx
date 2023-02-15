import { View, ScrollView, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { useState } from 'react';
import {Feather} from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

export function New(){
    const [ weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }else{
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return(
        <View className='flex-1 placeholder:bg-background px-8 pt-16'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />
                <Text className='mt-6 text-white font-extrabold text-3xl'>
                    Criar hábito
                </Text>

                <Text className='mt-6 text-white font-semibold text-base'>
                    Qual seu comprometimento?
                </Text>

                <TextInput className='h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600'
                    placeholder='Exercícios, dormir bem, etc...'
                    placeholderTextColor={colors.zinc[400]}
                />

                <Text className='font-semibold mt-4 mb-3 text-white'>
                    Qual a recorrência?
                </Text>
                
                {
                    availableWeekDays.map((weekDay, index) => {
                        return (
                            <Checkbox
                                key={index}  
                                title={weekDay} 
                                checked={weekDays.includes(index)}
                                onPress={() => handleToggleWeekDay(index)}
                            />
                        );
                    })
                }

                <TouchableOpacity 
                    activeOpacity={0.7}
                    className='flex-row mt-6 w-full rounded-lg items-center justify-center pb-4 pt-4 bg-green-600'
                >
                    <Feather 
                        name='check'
                        size={20}
                        color={colors.white}
                    />
                    <Text className='text-white ml-3 font-semibold text-base'>
                        Confirmar
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}