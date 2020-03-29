import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { Linking } from "react-native";

import logoImage from "../../assets/logo.png";

import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.description
  }" com o valor de ${Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Heroi do caso: Cadelinha Perdida",
      recipients: ["thiagodevtavares@gmail.com"],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`https://wa.me/${incident.whastapp}?text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={([styles.incidentProperty], { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}{" "}
        </Text>

        <Text style={styles.incidentProperty}>CASO</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja herói deste caso</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
