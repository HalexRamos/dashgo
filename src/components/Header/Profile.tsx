import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData=true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {
                showProfileData && (
                    <Box
                        mr="4"
                        textAlign="right"
                    >
                        <Text>Halex Penha Ramos</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >halexramos96@gmail.com</Text>
                    </Box>
                )
            }
            <Avatar
                size="md"
                name="Halex Penha Ramos"
                src="https://github.com/halexramos.png"
            />
        </Flex>
    );
}