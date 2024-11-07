import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet, View } from "react-native";

function FilterDropDown({filterOptions, handleFilterChange, selectedFilter}) {
    return(
        <View className="flex-1 mx-2">
          <Dropdown
            data={filterOptions}
            labelField="label"
            valueField="value"
            placeholder="Выберите категорию"
            value={selectedFilter}
            onChange={item => handleFilterChange(item.value)}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 10,
      backgroundColor: '#f0f0f0',
    },
    placeholderStyle: {
      color: '#888',
      fontSize: 16,
    },
    selectedTextStyle: {
      color: '#333',
      fontSize: 16,
    },
  });

export default FilterDropDown;