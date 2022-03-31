import { Button, Layout, Text } from "@ui-kitten/components"

export function SettingsScreen({ navigation }) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Settings</Text>
            <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
            <Button onPress={() => navigation.goBack()} status="basic">Go back</Button>
        </Layout>
    )
}