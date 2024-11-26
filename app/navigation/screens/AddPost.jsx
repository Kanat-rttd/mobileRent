import { useState } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Alert} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from "expo-image-picker";
import ImageViewing from "react-native-image-viewing";

export default function AddPost({navigation}) {
  const filterOptions = [
    {
      label:"Телефоны",
      value:"Телефон"
    },
    {
      label:"Камеры",
      value:"Камера"
    },
    {
      label: "Консоли",
      value: "Консоль"
    }
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const [isImageViewerVisible, setImageViewerVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Категория
        </Text>
      );
    }
    return null;
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Не удалось получить разрешение");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
        legacy: true,
        selectionLimit: 4,
      });

      if (!result.canceled) {
        if (result.assets && result.assets.length > 0) {
          setFiles((prevFiles) => [...prevFiles, ...result.assets.map(asset => asset.uri)]);
        } else {
          setError("Не удалось загрузить изображение")
        }
        // setError(null);
      }
    }
  };

  const handleOpenImageViewer = (index) => {
    setCurrentImageIndex(index);
    setImageViewerVisible(true);
  };

  return (
    <ScrollView className="bg-white">
      <Text className="text-center text-2xl font-semibold">Добавить объявление</Text>
      <View className="mt-3 px-4">
        
        {/* Добавить фото */}

        <TouchableOpacity 
          className="bg-red-400 h-28 border rounded"
          onPress={pickImage}
        >
          <Text className="text-3xl font-pmedium text-center mt-9">Добавить фото</Text>
        </TouchableOpacity>

        <View style={styles.imageGrid} className="">
          {files.map((fileUri, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.imageContainer}
              onPress={() => handleOpenImageViewer(index)}
            >
              <Image source={{uri: fileUri}} className="border-2" style={styles.image} onPress/>
            </TouchableOpacity>
          ))}
        </View>

        <ImageViewing
          images={files.map((uri) => ({uri}))}
          imageIndex={currentImageIndex}
          visible={isImageViewerVisible}
          onRequestClose={() => setImageViewerVisible(false)}
        >
          
        </ImageViewing>
        
        {/* Название товара */}

        <View className="mb-4">
          <Text className="mb-1">Название <Text className="text-red-600 text-xl">*</Text></Text>
          <TextInput
            className="border p-3 rounded font-semibold text-lg"
            placeholder="Введите название товара"
            keyboardType="default"
          />
        </View>
        
        {/* Цена */}

        <View className="mb-4">
          <Text className="mb-1">Цена ₸ <Text className="text-red-600 text-xl">*</Text></Text>
          <TextInput
            className="border p-3 rounded font-semibold text-lg"
            placeholder="Введите цену за один день аренды"
            keyboardType="default"
          />
        </View>

        {/* Категория */}

        <View style={[styles.container, isFocus && {marginTop: 20} ]}>
          {isFocus ? null : <Text className="mb-1">Категория <Text className="text-red-600 text-xl">*</Text></Text>}
          {renderLabel()}
          <Dropdown
            data={filterOptions}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Выбрать' : '...'}
            search
            maxHeight={300}
            inputSearchStyle={styles.inputSearchStyle}
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            iconStyle={styles.iconStyle}
            placeholderStyle={styles.placeholderStyle}
            searchPlaceholder="Искать..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false)
            }}
          />
        </View>

        <View>
         <Text className="mb-1">Описание<Text className="text-red-600 text-xl">*</Text></Text>
          <TextInput
            style={styles.multilineText}
            className="border p-3 rounded font-semibold text-lg min-h-56"
            placeholder="Добавьте полное описание товара"
            multiline
          />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 4
    // padding: 16,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
  },
  placeholderStyle: {
    color: '#555',
    fontSize: 16,
    fontWeight: "600"
  },
  selectedTextStyle: {
    color: '#333',
    fontSize: 16,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 10,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  multilineText: {
    textAlignVertical: "top"
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  imageContainer: {
    margin: 5,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
});