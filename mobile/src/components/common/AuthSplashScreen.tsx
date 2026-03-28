import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const AnimatedView = Animated.View;

export function AuthSplashScreen() {
  const { width } = useWindowDimensions();
  const iconOpacity = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(0.75)).current;
  const wordOpacity = useRef(new Animated.Value(0)).current;
  const revealWidth = useRef(new Animated.Value(0)).current;

  const logoWidth = Math.min(width - 40, 320);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: 350,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(iconScale, {
          toValue: 1,
          tension: 60,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 1,
          duration: 220,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(revealWidth, {
          toValue: logoWidth,
          duration: 1100,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, [iconOpacity, iconScale, logoWidth, revealWidth, wordOpacity]);

  return (
    <View style={styles.container}>
      <View style={styles.bgOrbTop} />
      <View style={styles.bgOrbBottom} />

      <AnimatedView
        style={[
          styles.iconWrap,
          {
            opacity: iconOpacity,
            transform: [{ scale: iconScale }],
          },
        ]}
      >
        <Svg width={82} height={82} viewBox="0 0 82 82" fill="none">
          <Defs>
            <LinearGradient id="iconGradient" x1="13" y1="13" x2="68" y2="68">
              <Stop offset="0" stopColor="#2BFF80" />
              <Stop offset="1" stopColor="#00D64F" />
            </LinearGradient>
          </Defs>

          <Circle cx="41" cy="41" r="38" fill="#1E1E1E" />
          <Circle cx="41" cy="41" r="37" stroke="#2B2B2B" strokeWidth="2" />

          <Rect x="18" y="28" width="46" height="28" rx="8" fill="url(#iconGradient)" />
          <Path
            d="M18 36H64"
            stroke="#D4FFE3"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <Circle cx="55" cy="42" r="6" fill="#DDFCE9" />
          <Circle cx="55" cy="42" r="2" fill="#00AD40" />
        </Svg>
      </AnimatedView>

      <AnimatedView style={{ opacity: wordOpacity }}>
        <AnimatedView style={[styles.wordReveal, { width: revealWidth }]}> 
          <Svg width={logoWidth} height={96} viewBox="0 0 360 96" fill="none">
            <SvgText
              x="180"
              y="64"
              textAnchor="middle"
              fontSize="52"
              fontStyle="italic"
              fontWeight="700"
              letterSpacing="0.6"
              fill="#00D64F"
              stroke="#00AD40"
              strokeWidth="1.5"
            >
              kwikbudget
            </SvgText>
          </Svg>
        </AnimatedView>
      </AnimatedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bgOrbTop: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(0, 214, 79, 0.16)',
    top: -50,
    right: -60,
  },
  bgOrbBottom: {
    position: 'absolute',
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: 'rgba(0, 214, 79, 0.15)',
    bottom: -90,
    left: -100,
  },
  iconWrap: {
    marginBottom: 22,
  },
  wordReveal: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
