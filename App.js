import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <View style={styles.fotoContainer}>
            <View style={styles.foto}>
              <Image 
                source={require('./assets/foto-placeholder.jpg')} 
                style={styles.fotoImage}
                resizeMode="cover"
              />
            </View>
          </View>
          <Text style={styles.nome}>Guilherme Borges Silva</Text>
          <Text style={styles.cargo}>Estudante de ADS | Técnico em Informática</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.resumo}>
            Sou Técnico em Informática formado pelo IFMG, com foco em
            desenvolvimento de software e sites. Atualmente curso Bacharelado em
            Análise e Desenvolvimento de Sistemas no INFNET, buscando expandir meu
            conhecimento e criar soluções inovadoras.
          </Text>
        </View>

        <View style={styles.contatoSection}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <View style={styles.contatoItem}>
            <Text style={styles.contatoLabel}>📧 E-mail:</Text>
            <Text style={styles.contatoValue}>guilhermeborgessilva04@gmail.com</Text>
          </View>
          <View style={styles.contatoItem}>
            <Text style={styles.contatoLabel}>💼 LinkedIn:</Text>
            <Text style={styles.contatoValue}>/in/guilherme-borges-silva</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#0D1117",
  },
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
    minHeight: "100%",
  },

  headerSection: {
    alignItems: "center",
    marginBottom: 32,
  },

  fotoContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  foto: {
    width: 140,
    height: 140,
    backgroundColor: "#21262D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#30363D",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  fotoImage: {
    width: "100%",
    height: "100%",
  },

  nome: {
    fontSize: 28,
    color: "#F0F6FC",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  cargo: {
    fontSize: 18,
    color: "#7D8590",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.3,
  },

  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#30363D",
    marginVertical: 24,
  },

  aboutSection: {
    width: "100%",
    marginBottom: 28,
    paddingHorizontal: 8,
  },

  contatoSection: {
    width: "100%",
    paddingHorizontal: 8,
  },

  sectionTitle: {
    fontSize: 20,
    color: "#58A6FF",
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  resumo: {
    fontSize: 16,
    color: "#C9D1D9",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 12,
    fontWeight: "400",
  },

  contatoItem: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#161B22",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#21262D",
  },

  contatoLabel: {
    fontSize: 14,
    color: "#7D8590",
    fontWeight: "600",
    marginBottom: 4,
    letterSpacing: 0.3,
  },

  contatoValue: {
    fontSize: 15,
    color: "#F0F6FC",
    fontWeight: "500",
    textAlign: "center",
  },
});
