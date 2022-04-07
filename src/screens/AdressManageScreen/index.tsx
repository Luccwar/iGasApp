import { Button, Layout, Text } from "@ui-kitten/components"

export function AdressManage({ navigation }) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Seus Endereços</Text>
            <Button onPress={() => navigation.navigate("Criação de Endereço")}>Cadastar novo endereço</Button>
        </Layout>
    )
}