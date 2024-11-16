import MainNavContainer from "./navigation/MainNavContainer";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from './context/SearchContext';
import Toast from 'react-native-toast-message';

export default function Index() {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <MainNavContainer />
        {/* <Toast /> */}
      </FavoritesProvider>
    </SearchProvider>
  );
}
