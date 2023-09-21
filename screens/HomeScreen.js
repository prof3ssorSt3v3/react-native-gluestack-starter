import { Box, HStack, VStack, Image, Pressable, ButtonText, Text, Spinner, Toast, ToastTitle, ToastDescription, useToast } from '@gluestack-ui/themed';

//components https://ui.gluestack.io/docs/styling/utility-and-sx-props

//

export default function HomeScreen({ route, navigation }) {
  const toast = useToast();

  return (
    <Box style={{ flex: 1 }} justifyContent="center" alignItems="center" backgroundColor="orange">
      <Box bg="#0891b2" py="$4" px="$3" rounded="$md" height={132} width={375} maxWidth="100%">
        <HStack justifyContent="space-between" height="100%">
          <Box justifyContent="space-between">
            <VStack space="xs">
              <Text fontSize="$sm" color="$white">
                This is a Box in a VStack
              </Text>
              <Text color="$white" fontSize="$xl">
                Let's talk React Native!
              </Text>
            </VStack>
            <Pressable
              rounded="$xs"
              bg="#22d3ee"
              alignSelf="flex-start"
              py="$1"
              px="$3"
              onPress={() => {
                toast.show({
                  placement: 'bottom',
                  actionType: 'attention',
                  duration: 2000,
                  avoidKeyboard: true,
                  render: ({ id }) => {
                    return <MyToast id={id} />;
                  },
                });
              }}
            >
              <ButtonText textTransform="uppercase" fontSize="$sm" fontWeight="$bold" color="$white">
                Remind me
              </ButtonText>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: 'https://picsum.photos/200/200',
            }}
            alt="Aang flying and surrounded by clouds"
            height={100}
            rounded="$full"
            width={100}
          />
        </HStack>
      </Box>
      <Spinner size="large" />
    </Box>
  );
}

function MyToast({ id }) {
  return (
    <Toast nativeId={id} variant="solid">
      <VStack space="xs">
        <ToastTitle>New Message</ToastTitle>
        <ToastDescription>This is a Toast Message!</ToastDescription>
      </VStack>
    </Toast>
  );
}
