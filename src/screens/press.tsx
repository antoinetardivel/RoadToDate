//============================================================
// CREATION DYNAMIQUE D’OBJETS
// App.js

import React from 'react'
import { View, Button } from 'react-native'

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor");
    // sauvegarde des variables d'état
    this.state = {data: [] //,
                          //...,
                          //...
                        };
  }

  // une fonction qui ajoute les caractéristique d'un bouton à créer
  createButton(){
    let newly_added_data = { title: "new title", color: "green" };
    // une fois la mise à jour de l'état, la fonction de rendu sera appelée
    this.setState({ data: [...this.state.data, newly_added_data] });
    console.log(newly_added_data )
  }
  // fonction qui créait le rendu de l'interface graphique
  render() {

    // création dynamique d'un bouton intitulé Hey
    // associé à la fonction this.createButton()
    // sur l'événement onPress
    let myObject =(() => {
       return (<Button title="Hey" onPress={(e) => { this.createButton() } } />)
     })()

    // création dynamique d'une liste de boutons paramétrés avec le tableau data d'état contenant des objets {title:?, color:?}
    // on associe aussi la fonction this.createButton() à chacun d’eux sur l'événement onPress
    let myNewButtons = this.state.data.map( (data, index) => {
       return (
         <Button key={index} title={data.title} color={data.color} onPress={(e) => { this.createButton() }} />
       )
     });

    // marginTop: 20 pour éviter la barre d'état
    return (
      <View style={{ marginTop: 20 }}>
        <Button
          onPress={(e) => { this.createButton() } }
          color="brown"
          title="Créer un nouveau bouton"
        />
        {myNewButtons}
        {myObject}
      </View>
    );
  }
}
