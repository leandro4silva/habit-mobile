import { View } from "react-native";
import colors from "tailwindcss/colors";

interface ProgressBarProps{
    progress ?: number;
}

export function ProgressBar({ progress } : ProgressBarProps){
    return(
        <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
            <View className="h-3 rounded-xl" style={{ backgroundColor: colors.violet[600], width: `${progress}%`}} />
        </View>
    );
}