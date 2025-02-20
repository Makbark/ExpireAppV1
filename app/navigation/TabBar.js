import { View, Platform, StyleSheet, Image } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable, Feather } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/Ionicons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

export function TabBar({ state, descriptors, navigation }) {
  const [pressedTab, setPressedTab] = useState(null);
  const { buildHref } = useLinkBuilder();

  // Define a mapping of custom icons for each tab
  const icons = {
    Home: {
      focused: require("../assets/icons/Home_fill_green.png"),
      default: require("../assets/Home.png"),
    },
    Profile: {
      focused: require("../assets/icons/User_box_fill_green.png"),
      default: require("../assets/User_box.png"),
    },
    Create: {
      focused: require("../assets/icons/Add_square_fill_green.png"),
      default: require("../assets/Add_square.png"),
    },
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
          setPressedTab(route.name); // Update the pressed tab
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconSource = isFocused
          ? icons[route.name]?.focused || icons[route.name]?.default
          : icons[route.name]?.default;

        // Determine the text style based on whether this tab is the pressed one
        const textStyle =
          pressedTab === route.name ? styles.textPressed : styles.text;

        return (
          <PlatformPressable
            key={route.key} // Always provide a key for lists
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <Image
              source={iconSource}
              style={{ width: 40, height: 40, marginBottom: 15 }}
            />

            <Text style={textStyle}>{label}</Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    //bottom: 50,
    //width: 250,
    height: 120,
    //borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 95,
    backgroundColor: "rgba(31, 31, 31, 0.8)",
    //paddingHorizontal: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  container: {
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  text: {
    color: "#AFAFAF",
    bottom: 10,
  },
  textPressed: {
    color: "#56a34d",
    bottom: 10,
  },
});
