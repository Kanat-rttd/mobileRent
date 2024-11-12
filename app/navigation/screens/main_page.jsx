import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useContext } from "react";
import Item from "../../components/Item";
import mockData from "../../mockData";
import FilterDropDown from "../../components/FilterDropDown";
import Line from "../../components/Line";
import { SearchContext } from "../../context/SearchContext";

function MainPage({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(mockData);
  const {searchText} = useContext(SearchContext);

  const filterOptions = [
    {
      label:"Все",
      value:"all"
    },
    {
      label:"Телефоны",
      value:"Телефон"
    },
    {
      label:"Камеры",
      value:"Камера"
    },
    {
      label: "Приставки",
      value: "Игровая приставка"
    }
  ];

  const handleFilterChange = (itemValue) => {
    setSelectedFilter(itemValue);
    
    const newData = itemValue === 'all' ? mockData :
    mockData.filter((item) => item.category === itemValue);

    setFilteredData(newData);
  };

  const filteredSearch = filteredData.filter((search) => {
    return search.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <View style={styles.container}>
      {/* Фильтр */}
      <View className="flex-row justify-between items-stretch">
        <FilterDropDown filterOptions={filterOptions} handleFilterChange={handleFilterChange} selectedFilter={selectedFilter}/>
      </View>
      
      <ScrollView contentContainerStyle={{ padding: 3 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "white" }}>
          {filteredSearch.map((item) => (
            <View key={item.id} style={{ width: '50%', padding: 3 }}>
              <Item item={item} navigation={navigation}/>
              <Line />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
});


export default MainPage;