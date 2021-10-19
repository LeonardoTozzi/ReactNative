import React from 'react';
import { ScrollView } from 'react-native';

import { 
    Container, 
    SearchContainer,
    Input,
    SearchButton,
    Title,
    BannerButton,
    Banner,
    SliderMovie 
} from './styles';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

function Home(){
    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer>
                <Input
                placeholder="Ex Vingadores"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF"/>

                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.9} onPress={ () => alert('TESTE')}>
                    <Banner
                    resizeMethod="resize"
                    source={{ uri:'https://images.unsplash.com/photo-1512070750041-b9479c107194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80'}}
                    />

                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem />}
                />

                <Title>Populares</Title>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem />}
                />

                <Title>Mais Votados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({ item }) => <SliderItem />}
                />

            </ScrollView>

        </Container>
    )
}
export default Home; //exportação para outros arquivos terem acesso.