import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComponser from 'expo-mail-composer';
import { Linking } from 'react-native';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, gostaria de ajudar no casos ${incident.title}`;

  function navigateToIncidents() {
    navigation.navigate('Incidents');
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${intance.whatsapp}&text=${message}`
    );
  }

  function sendEmail() {
    MailComponser.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name='arrow-left' size={28} color='#E82041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.titleProperty}>ONG:</Text>
        <Text style={styles.titleValue}>
          {incident.name} de {incident.city}-{incident.uf}
        </Text>

        <Text style={styles.titleProperty}>CASO:</Text>
        <Text style={styles.titleValue}>{incident.description}</Text>

        <Text style={styles.titleProperty}>VALOR:</Text>
        <Text style={styles.titleValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
        <Text style={styles.heroDescription}>Entre e contato</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;
