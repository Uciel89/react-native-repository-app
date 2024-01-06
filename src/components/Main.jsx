import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

/**
 * View -> Componente principal para crear la interfaz del usuario. Es lo mas
 * parecido como al div. Este componente de forma predeterminada se comporta
 * como un flex box
 * Text -> Componente para mostrar texto en una aplicación. Es la única manera
 * de mostrarlo.
 * Touchable -> Todos los componentes que empiezan con esta palabra que para convertir
 * al componente que lo envuelve, que el usuario lo pueda presionar.
 */

function Main() {
  return (
    <View style={{
        flex: 1
    }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
}

export default Main;
