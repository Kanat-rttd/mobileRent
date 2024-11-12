import MainNavContainer from "./navigation/MainNavContainer";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from './context/SearchContext';

export default function Index() {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <MainNavContainer />
      </FavoritesProvider>
    </SearchProvider>
  );
}
