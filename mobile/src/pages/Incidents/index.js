import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import api from '../../service/api';

function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`/incidents?page=${page}`);
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDatail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}> {total} casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>Escolha um casos e ajude uma ONG</Text>

      <FlatList
        style={styles.incidentsList}
        // showsVerticalScrollIndicator={false}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => (
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
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDatail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#E02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;
