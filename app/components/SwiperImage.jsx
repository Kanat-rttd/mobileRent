import { Image, View, Dimensions } from "react-native";
import Swiper from 'react-native-swiper';

function SwiperImage({image}) {
    const {width} = Dimensions.get("window");
    const height = width * 0.75;

    const images = [
        image, image, image, image
      ];

    return(
        <Swiper
            style={{ height: height }}
            showsPagination={true}
            loop={false}
            dot={
            <View style={{ backgroundColor: 'gray', width: 8, height: 8, borderRadius: 4, margin: 3 }} />
            }
            activeDot={
            <View style={{ backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, margin: 3 }} />
            }
            paginationStyle={{ bottom: 10 }}
        >
            {images.map((img, index) => (
            <View key={index} style={{ width: width, height: height }}>
                <Image
                style={{ width: "100%", height: "100%" }}
                source={img}
                resizeMode="contain"
                />
            </View>
            ))}
        </Swiper>
    )
}

export default SwiperImage;