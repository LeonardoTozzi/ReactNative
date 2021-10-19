import React from 'react';

import {
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from './styles';

import { Ionicons } from '@expo/vector-icons';

function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{uri: 'https://images.unsplash.com/photo-1512070750041-b9479c107194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80' }}
            />

            <Title numberOfLine={1}>Vingadores</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e"/>
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;