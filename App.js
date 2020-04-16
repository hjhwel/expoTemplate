import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.hText}>header</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.btnBox}>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem}>
              <Text>😈</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 300,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  hText: {
    fontSize: 30,
  },
  center: {
    flex: 3,
  },
  btnBox: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'center',
    alignContent:'center',
  },
  btnItem: {
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f00",
    margin:(Dimensions.get('window').width-(4*48))/(5*2)
  },
  footer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
});
