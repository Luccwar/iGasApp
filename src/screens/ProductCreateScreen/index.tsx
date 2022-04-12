import { Button, Layout, Text } from "@ui-kitten/components"
import { ScrollView, StyleSheet, View } from 'react-native'
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import ImagePicker from "../../components/ImagePicker"
import{ useForm } from 'react-hook-form'

export function ProductCreate({ navigation }) {
    const {control, handleSubmit, formState: {errors}, watch} = useForm()

    const onCreateProductPressed = (data) => {
        console.log(data);
        // 
        navigation.navigate('Listagem de Produtos');
    }

    return (
        <ScrollView>
            <View style={[styles.root]}>
            <Text category='h1'>Criação de Produtos</Text>
            <Text style={[styles.text]}>Nome do Produto:</Text>
            <CustomInput name={'Name'} placeholder='Nome do Produto' control={control} rules={{required: 'Por favor, digite o nome do produto!'}} secureTextEntry={false} />
            <Text style={[styles.text]}>Descrição do Produto:</Text>
            <CustomInput name={'Description'} placeholder='Descrição do Produto' control={control} rules={{required: 'Por favor, digite uma descrição para o produto!'}} secureTextEntry={false} height={100} textAlignVertical={'top'} multiline={true} />
            <Text style={[styles.text]}>Preço do Produto:</Text>
            <CustomInput name={'Price'} placeholder='00,00' prefix={'R$'} control={control} rules={{required: 'Por favor, digite o preço do produto!'}} secureTextEntry={false} keyboardType={"decimal-pad"} />       
            <Text style={[styles.text]}>Quantidade Unitária disponível do Produto:</Text>
            <CustomInput name={'Quantity'} placeholder='00' control={control} rules={{required: 'Por favor, digite a quantidade disponível!'}} secureTextEntry={false} keyboardType={"number-pad"} />
            <Text style={[styles.text]}>Foto do Produto:</Text>
            <ImagePicker text={"Upload Imagem"} type={'secondary'} backgroundColor={'white'} textColor={''} />
            <CustomButton text={'Criar Produto'} onPress={handleSubmit(onCreateProductPressed)} backgroundColor={''} textColor={''} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 5,
        marginHorizontal: 10,
    },
    text: {
        textAlign: 'left',
        width: '100%',
    },
    input: {
        margin: 5
    }
});