import { Button, Layout, Text } from "@ui-kitten/components"

export function ProductCreate({ navigation }) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Criação de Produtos</Text>
            <Button onPress={() => navigation.navigate("Listagem de Produtos")}>Listar Produtos</Button>
        </Layout>
    )
}