import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.logo}>
            <AntDesign name="smileo" style={styles.logo} />
            4LEAF-EDU
          </Text>
          <View style={styles.id}>
            <TextInput
              style={styles.idin}
              placeholder="사용할 아이디 입력"
            ></TextInput>
            <TouchableOpacity>
              <Text style={styles.idbutt}>중복확인</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.email} placeholder="이메일 입력"></TextInput>
          <TextInput
            style={styles.email}
            placeholder="비밀번호 입력"
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            style={styles.email}
            placeholder="비밀번호 확인"
            secureTextEntry={true}
          ></TextInput>
          <Text style={styles.button}>Join</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: { fontSize: 50, fontWeight: "bold", marginBottom: 30 },
  id: {
    width: width / 1.5,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  idin: { width: width / 1.8, borderBottomWidth: 1, borderBottomColor: "#333" },
  idbutt: {
    height: 30,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4e787",
    textAlign: "center",
    color: "#777",
    borderRadius: 15
  },
  email: {
    width: width / 1.5,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: 8
  },
  button: {
    width: width / 3,
    height: 30,
    padding: 8,
    marginTop: 10,
    textAlign: "center",
    color: "#777",
    backgroundColor: "#f4e787",
    borderRadius: 15
  }
});

export default App;
