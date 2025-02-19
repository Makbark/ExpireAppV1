import React from "react";

import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="HomeScreen" />
    </Tabs>
  );
};

export default TabLayout;
