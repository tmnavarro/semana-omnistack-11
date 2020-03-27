import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  incident: {
    padding: 24,
    paddingBottom: 0,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 16
  },
  titleProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  titleValue: {
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
    fontSize: 15
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 16
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#12121a',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
