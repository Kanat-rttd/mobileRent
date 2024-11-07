import { StyleSheet, ScrollView, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";
import Item from "../../components/Item";
import mockData from "../../mockData";
import FilterDropDown from "../../components/FilterDropDown";
import { Ionicons } from '@expo/vector-icons';

function MainPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(mockData);

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

  return (
    <View style={styles.container}>

      {/* поисковик + нотификации */}

      {/* Фильтр */}
      <View className="flex-row justify-between items-stretch">
        <FilterDropDown filterOptions={filterOptions} handleFilterChange={handleFilterChange} selectedFilter={selectedFilter}/>

        <Ionicons name="cart" size={32} color='black'/>
      </View>
      
      <ScrollView contentContainerStyle={{ padding: 3 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {filteredData.map((item) => (
            <View key={item.id} style={{ width: '50%', padding: 3 }}>
              <Item item={item} />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* bottom navigation bar */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});


export default MainPage;