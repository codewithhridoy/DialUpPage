import React, { useState } from "react";
import {
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Picker,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View>
      <StatusBar
        backgroundColor={"#FF573300"}
        translucent
        barStyle="light-content"
      />
      <View style={styles.header}>
        <ImageBackground source={require("./header.png")} style={styles.image}>
          <TouchableOpacity>
            <IonIcon
              style={styles.BackIcon}
              name="arrow-back"
              size={30}
              color="#900"
            />
          </TouchableOpacity>
          <Text style={styles.text}>+1 (210) 960-9517</Text>
          <TouchableOpacity>
            <AntDesignIcon
              style={styles.DownIcon}
              name="caretdown"
              size={20}
              color="#900"
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.main}>
          <View style={styles.textField}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              autoCapitalize="none"
              placeholder="Phone Number"
            />
          </View>
        </View>
        <View style={styles.keyboardPanel}>
          <View style={styles.keyboard}>
            <View style={styles.Col}>
              <TouchableOpacity>
                <Text style={styles.firstRow}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.secondRow}>2</Text>
                <Text style={styles.abc}>ABC</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.thirdRow}>3</Text>
                <Text style={styles.def}>DEF</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.keyboard}>
            <View style={styles.Col}>
              <TouchableOpacity>
                <Text style={styles.firstRow}>4</Text>
                <Text style={styles.dhi}>DHI</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.secondRow}>5</Text>
                <Text style={styles.jkl}>JKL</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.thirdRow}>6</Text>
                <Text style={styles.mno}>MNO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.keyboard}>
            <View style={styles.Col}>
              <TouchableOpacity>
                <Text style={styles.firstRow}>7</Text>
                <Text style={styles.pqrs}>PQRS</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.secondRow}>8</Text>
                <Text style={styles.tuv}>TUV</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.thirdRow}>9</Text>
                <Text style={styles.wxyz}>WXYZ</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.keyboard}>
            <View style={styles.Col}>
              <TouchableOpacity>
                <Text style={styles.firstRow}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.secondRow}>0</Text>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.thirdRow}>#</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.keyboard}>
            <View style={styles.Col}>
              <TouchableOpacity>
                <MaterialIcon
                  style={styles.firstButton}
                  name="cog-counterclockwise"
                  size={30}
                  color="#900"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon
                  style={styles.secondButton}
                  name="phone-square"
                  size={30}
                  color="#900"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesignIcon
                  style={styles.thirdButton}
                  name="closesquare"
                  size={30}
                  color="#900"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    height: 150,
    width: "100%",
    backgroundColor: "blue",
  },
  image: {
    flex: 1,
    flexDirection: "row",
    resizeMode: "cover",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    marginRight: 110,
  },
  BackIcon: {
    color: "white",
    marginTop: 75,
    marginLeft: 30,
    marginRight: 30,
  },
  DownIcon: {
    color: "white",
    marginTop: 75,
  },
  main: {
    height: 250,
    width: "100%",
    backgroundColor: "#ced6e0",
  },
  keyboard: {
    width: "100%",
    backgroundColor: "white",
  },
  keyboardPanel: {
    width: "100%",
    height: 500,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderColor: "grey",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontSize: 30,
  },
  textField: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 70,
    maxWidth: 360,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },

  Col: {
    flexDirection: "row",
  },
  firstRow: {
    fontSize: 40,
    color: "black",
    marginLeft: 60,
    marginRight: 100,
    marginTop: 20,
    fontWeight: "bold",
  },
  firstButton: {
    fontSize: 30,
    color: "grey",
    marginLeft: 60,
    marginRight: 100,
    marginTop: 30,
  },
  secondRow: {
    fontSize: 40,
    color: "black",
    marginRight: 100,
    marginTop: 20,
    fontWeight: "bold",
  },
  secondButton: {
    fontSize: 80,
    color: "#2ed573",
    marginLeft: -30,
    marginRight: 80,
    marginTop: 10,
  },
  thirdRow: {
    fontSize: 40,
    color: "black",
    marginTop: 20,
    fontWeight: "bold",
  },
  thirdButton: {
    fontSize: 30,
    color: "grey",
    marginTop: 30,
    marginLeft: -10,
  },
  abc: {
    marginLeft: -5,
  },
  def: {
    marginLeft: -2,
  },
  dhi: {
    marginLeft: 60,
  },
  pqrs: {
    marginLeft: 56,
  },
  jkl: {
    marginLeft: -2,
  },
  mno: {
    marginLeft: -4,
  },
  tuv: {
    marginLeft: -2,
  },
  wxyz: {
    marginLeft: -4,
  },
  plus: {
    marginLeft: 4,
  },
});

export default App;
