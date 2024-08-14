/**
 * - JSON placeholder website for practice
 *
 *
 *
 */

import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const API_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  INIT: "INIT",
};

export default function APIHandling() {
  const [data, setData] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const [apiStatus, setApiStatus] = useState(API_STATUS.INIT);

  useEffect(() => {
    fetchData(10);
  }, []);

  const fetchData = async (limit) => {
    try {
      setApiStatus(API_STATUS.LOADING);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await res.json();
      setData(data);
      setApiStatus(API_STATUS.SUCCESS);
    } catch (e) {
      setApiStatus(API_STATUS.ERROR);
      console.error("Error while fetching", e);
    } 
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  switch (apiStatus) {
    case API_STATUS.LOADING:
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="0000ff" />
          <Text>Loading....</Text>
        </SafeAreaView>
      );
    case API_STATUS.ERROR:
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <Text> Oopss, Somthing went wrong!!!</Text>
        </SafeAreaView>
      );
    case API_STATUS.SUCCESS:
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={<View style={{ height: 19 }}></View>}
              ListEmptyComponent={<Text>No Posts List</Text>}
              ListHeaderComponent={
                <Text style={styles.header}>Post's List</Text>
              }
              ListFooterComponent={<Text>End of List</Text>}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </SafeAreaView>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: StatusBar.currentHeight,
    borderColor: "red",
    borderWidth: 4,
  },
  listContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  card: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
