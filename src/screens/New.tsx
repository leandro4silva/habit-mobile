import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { useState } from 'react';
import {Feather} from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { api } from '../lib/axios';

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

export function New(){
    const [ weekDays, setWeekDays] = useState<number[]>([]);

    const [title, setTitle] = useState('');

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }else{
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    async function handleCreateNewHabit() {
        try{
            if(!title.trim() || weekDays.length === 0){
                return Alert.alert('Novo Hábito', 'Informe o nome do hábito e escolha a periodicidade.');
            }

            await api.post('/habits', {
                title,
                weekDays
            });

            setTitle('');
            setWeekDays([]);

            Alert.alert('Novo Hábito', 'Hábito criado com sucesso!');
        }catch(error){
            console.log(error);
            Alert.alert('Ops', 'Nâo foi possivel criar o novo hábito.');
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

                <TextInput className='h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white border-2 border-zinc-400 focus:border-2 focus:border-green-600'
                    placeholder='Exercícios, dormir bem, etc...'
                    placeholderTextColor={colors.zinc[400]}
                    onChangeText={setTitle}
                    value={title}
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
                    onPress={handleCreateNewHabit}
                    className='flex-row mt-6 w-full rounded-lg items-center justify-center pb-4 pt-4 mb-24 bg-green-600'
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