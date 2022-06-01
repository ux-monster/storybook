import React from "react";
import { ScrollView, View, ViewProps } from "react-native";

type Props = ViewProps;

export default function MobileContainer({ children }: Props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          width: 360 + 20,
          height: 640 + 100,
          backgroundColor: "#333",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 40,
          marginRight: 40
        }}
      >
        <View
          style={{
            width: 360,
            height: 640,
            backgroundColor: "#fff",
            transform: [{ scale: 1 }]
          }}
        >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
