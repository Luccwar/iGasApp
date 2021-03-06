import { Button, Layout, Text } from "@ui-kitten/components"

export function HomeScreen({ navigation }) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Home</Text>
            <Button onPress={() => navigation.navigate("Settings")}>Go to settings</Button>
            <Button onPress={() => navigation.goBack()} status="basic">Go back</Button>
        </Layout>
    )
}