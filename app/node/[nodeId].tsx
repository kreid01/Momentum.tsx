
import { View } from "lucide-react-native";
import { ScrollView, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Route() {
    const { nodeId } = useLocalSearchParams();

    return (
        <ScrollView className="bg-green-300">
            <Text>
                {`Node ID: ${nodeId}`}
            </Text>
        </ScrollView>
    )
}