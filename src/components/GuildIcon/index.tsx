import React from "react";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";


export function GuildIcon() {

  const uri = 'https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png'

  return(
    <Image 
      source= {{ uri }}
      style={styles.image}
      resizeMode="cover"
    
    />

  )
}