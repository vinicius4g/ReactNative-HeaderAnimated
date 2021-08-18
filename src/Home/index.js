import React, { useState } from 'react';
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components';

const Home = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <StyledContainer>
      <StyledHeader
        style={{
          height: scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [80, 20, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
          })
        }}
      >
        <StyledImage
          source={require('../assets/cam.png')}
        />

        <StyledImageLogo
          source={require('../assets/logo.png')}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [120, 100],
              extrapolate: 'clamp'
            }),
            height: 90
          }}
        />

        <StyledImage
          source={require('../assets/send.png')}
        />
      </StyledHeader>

      <StyledBody
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false }
        )}
      >

        <StyledItem />
        <StyledItem />
        <StyledItem />
        <StyledItem />
        <StyledItem />
        <StyledItem />
        <StyledItem />

      </StyledBody>
    </StyledContainer>
  );
};

const StyledContainer = styled.SafeAreaView`
`;

const StyledHeader = styled(Animated.View)`  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding-top: ${getStatusBarHeight() + 10}px;
  padding-right: 10px;
  padding-left: 10px;
  
  border-bottom-width: 2px;
  border-bottom-color: #FFF;
  
  background-color: #101010;
  `;

const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
  
  resize-mode: contain;
`;

const StyledImageLogo = styled(Animated.Image)`
  width: 120px;
  height: 40px;
  
  resize-mode: contain;
`;

const StyledBody = styled.ScrollView`

`;

const StyledItem = styled.View`
  height: 300px;
  margin: 8px;
  border-radius: 5px;
  
  background-color: #DDD;
`;


export default Home;
