/**
 * Used for list of items.
 * - using map
 *
 *
 * FlatList
 * - FlastList component renders only the items currently in view, making it highly performant for long lists
 * - props
 *      * data is Array which we want to show in UI
 *      * renderItem callback which will return ITEM JSX.
 *      * horizontally to render items horizontally.
 *      * keyExtractor to get uniqe id for each item.
 *      * ItemSeperatorComponent used to render between items execpt top and bottom of this list
 *      * ListEmptyComponent takes React Component and renders when list is empty (Array with 0 size)
 *      * ListHeaderComponent take React Component and renders on top of the list
 *      * ListFooterComponent take React Component and renders on top of the list
 * - It will render next coming items as height for smoot scrolling.
 *
 *
 *
 * SectionList
 * - It is used to render data in Sections wise and very performative
 * - Mandatory props: sections and renderItem
 * - props:
 *      * renderSectionHeader callback which return react component. and gives object
 * 
 *
 */

import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import groupedData from "../constants/gouped-data.json";

const data = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    name: `Name11 ${i}`,
    age: i,
    id: i,
    mobile: `9898988${i}${i + 4}`,
  });
}

export default function List() {
  console.log(groupedData);
  return (
    

    // <ScrollView style={styles.container}>
    //     <Text>Contacts</Text>
    //     {
    //         data.map(each => (
    //             <View key={each.id} style={styles.contactCard} >
    //                 {console.log("### ", each.name)}
    //                 <View style={styles.contentContainer}>
    //                     <Text>{each.name} </Text>
    //                     <Text>{each.mobile} </Text>
    //                 </View>
    //                 <View style={styles.iconsContainer}>
    //                     <Button title={`a`} />
    //                     <Button title={`b`} />
    //                 </View>
    //             </View>
    //         ))
    //     }
    // </ScrollView>
    // <FlatList
    //   data={data}
    //     style={styles.container}
    //   data={[]}
    //   renderItem={({item}) => (
    //     <View key={item.id} style={styles.contactCard}>
    //       {/* {console.log("### ", item)} */}
    //       <View style={styles.contentContainer}>
    //         <Text>{item.name} </Text>
    //         <Text>{item.mobile} </Text>
    //       </View>
    //       <View style={styles.iconsContainer}>
    //         <Button title={`a`} />
    //         <Button title={`b`} />
    //       </View>
    //     </View>
    //   )}
    //   keyExtractor={(item) => item.id.toString()}
    //   ItemSeparatorComponent={<View style={{height: 7}}></View>}
    //   ListEmptyComponent={<Text>No Items Found</Text>}
    //   ListHeaderComponent={<Text style={styles.headerText}>Contacts</Text>}
    //   ListFooterComponent={<Text style={styles.footerText} >End of the list</Text>}
    // />
    <SectionList
      style={styles.container}
      sections={groupedData}
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={styles.contactCard}>
            {console.log("### ", item)}
            <View style={styles.contentContainer}>
              <Text>{item} </Text>
            </View>
          </View>
        );
      }}
      renderSectionHeader={({section}) => {
        return(
            <Text style={styles.sectionHeader} >{section.type}</Text>
        )
      }}
      ItemSeparatorComponent={() => <View style={{height: 6}}></View>}
        SectionSeparatorComponent={() => <View style={{height: 12}}></View>}
      
    /> 
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 5,
    borderColor: "red",
    height: 400,
    padding: 3,
  },
  contactCard: {
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 7,
    elevation: 1,
    height: 100,
  },
  iconsContainer: {
    backgroundColor: "plum",
    // flex: 1,
    flexDirection: "row",
    width: "20%",
    justifyContent: "flex-end",
  },
  contentContainer: {
    width: "80%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: "red"
  }
});
