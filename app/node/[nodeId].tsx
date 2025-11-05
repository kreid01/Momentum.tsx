import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useKeyboardStatus } from "@/hooks/useWatchKeyboard";
import { KeyboardButtonGroup } from "@/components/personal/KeyboardButtonGroup";

export default function Route() {
    const { nodeId } = useLocalSearchParams();
    const [content, setContent] = useState<string>("");

    const keyboardStatus = useKeyboardStatus();


    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Stack.Screen options={{ title: `Node ${nodeId}` }} />
            <View className="flex-1 justify-between">
                <ScrollView contentContainerClassName="flex-grow" automaticallyAdjustKeyboardInsets>
                    <Textarea
                        style={{ backgroundColor: 'transparent', outline: 'none', borderColor: 'transparent' }}
                        value={content}
                        onChangeText={setContent}
                    />
                </ScrollView >
                {keyboardStatus && <KeyboardButtonGroup />}
            </View>
        </KeyboardAvoidingView >
    )
}