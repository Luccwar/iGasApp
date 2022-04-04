import { Button, Layout, Text } from "@ui-kitten/components"

export function ProductList({ navigation }) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Listagem de Produtos</Text>
            <Button onPress={() => navigation.navigate("Criação de Produtos")}>Criar Produto</Button>
        </Layout>
    )
}