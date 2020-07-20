// Navigation/Navigation.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import FilmDetail from '../Components/FilmDetail'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
  screen: FilmDetail
}
})

export default createAppContainer(SearchStackNavigator)
