import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { UserMenu } from '@/components/ui/user-menu';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/clerk-expo';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, XIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, Pressable, ScrollView, View } from 'react-native';
import { useQuery } from "convex/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SCREEN_OPTIONS = {
  header: () => (
    <View className="top-safe absolute left-0 right-0 flex-row justify-between px-4 py-2 web:mx-2">
      <ThemeToggle />
      <UserMenu />
    </View>
  ),
};

export default function Screen() {
  const { colorScheme } = useColorScheme();
  const { user } = useUser();

  const nodes = useQuery(api.nodes.get);

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <View className="max-w-sm gap-2 px-4">
          <Text className="ios:text-foreground text-center font-mono text-sm text-muted-foreground">
            Get Momentum
          </Text>
          <Accordion type='single' className='w-[80vw] max-w-lg' collapsible>
            {nodes?.map(node => {
              return (
                <AccordionItem key={node.id} value={node._id}>
                  <AccordionTrigger>
                    <Link href={`/node/${node.id}`} asChild>
                      <Pressable>
                        <Text>{node.title}</Text>
                      </Pressable>
                    </Link>
                  </AccordionTrigger>
                  {node.nodes.map(subNode => (
                    <AccordionContent key={subNode.nodeId}>
                      <Text>{subNode.content}</Text>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              );
            })}
          </Accordion>
        </View>
      </View >
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button onPress={toggleColorScheme} size="icon" variant="ghost" className="rounded-full">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-6" />
    </Button>
  );
}
