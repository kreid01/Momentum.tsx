import { Bold, Italic, Underline, Plus, Undo, Link } from 'lucide-react-native';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '@/components/ui/toggle-group';
import * as React from 'react';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';

interface KeyboardButtonGroupProps {
    setTypingStyle?: (style: string[]) => void;
    typingStyle?: string[];

}

export const KeyboardButtonGroup: React.FC<KeyboardButtonGroupProps> = ({ setTypingStyle, typingStyle }) => {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <Animated.View className={"px-2"} entering={SlideInDown.duration(50)}>
            <ToggleGroup value={value} onValueChange={setValue} variant='outline' type='multiple'>
                <ToggleGroupItem isFirst value='bold' aria-label='Toggle bold'>
                    <ToggleGroupIcon as={Bold} />
                </ToggleGroupItem>
                <ToggleGroupItem value='italic' aria-label='Toggle italic'>
                    <ToggleGroupIcon as={Italic} />
                </ToggleGroupItem>
                <ToggleGroupItem value='strikethrough' aria-label='Toggle strikethrough'>
                    <ToggleGroupIcon as={Underline} />
                </ToggleGroupItem>
                <TouchableOpacity onPress={() => console.log("Undo pressed")}>
                    <ToggleGroupItem value="undo">
                        <ToggleGroupIcon as={Undo} aria-label='Undo' />
                    </ToggleGroupItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Add pressed")}>
                    <ToggleGroupItem value='add' aria-label='Toggle add'>
                        <ToggleGroupIcon as={Plus} />
                    </ToggleGroupItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Add pressed")}>
                    <ToggleGroupItem value='link' aria-label='Toggle link'>
                        <ToggleGroupIcon as={Link} />
                    </ToggleGroupItem>
                </TouchableOpacity>
            </ToggleGroup>
        </Animated.View >
    );
}
