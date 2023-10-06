import { View, Text, FlatList } from 'react-native'
import Reactimportimport CardProductimportimport { ActivityIndicator } from 'react-native-paper'
 { Button } from 'react-native-paper'
 from './component/CardProduct'
 { ActivityIndicator } from 'react-native-paper'
 { useState, useEffect} from 'react'

const ProductApi = () => {

    //initialisation  

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [loadingMore, setLoadingMore] = useState(true);

    const [skip, setSkip] = useState(0);
    

    
    const init = async () => {
        
        console.log('init');
        //await getMoviesFormApiAsync();
        const res = await fetch('https://dummyjson.com/products?limit=2&skip=0')
        console.log("res : ", res.json());

        // wait format json
        const productsData = await res.json();

        console.log(productsData);

        setProducts(productsData.products);
        setLoading(false);


    }
    

    const more = () => { 

        console.log('more');
        // début chargement
        //pagination
        setLoadingMore(true);
        const nextSkip = products.length + 1;

                const res = await fetch("https://dummyjson.com/products?limit=2&skip=" +nextSkip)
        console.log("res : ", res.json());


        const moreProducts = productsData.products;

        const newProducts = [...products, ...moreProducts];

        setProducts(newProducts);


        console.log(productsData);

        // arrêt chargement
        setLoadingMore(false);

     }

    useEffect(() => {
        init();

    } , [] )

  return (
    <View>
          <Text>ProductApi</Text>
          {loading ? <ActivityIndicator size={20} animating={true} />
              :
              <FlatList
                  numColumns={"2"}
                  data={products}
                  renderItem={({ item }) => <CardProduct product={item} />}
                  keyExtractor={item => item.id}
                  ListFooterComponent={
                      
                      loadingMore ? <ActivityIndicator animating={true} /> :
                          <Button onPress={more} >More</Button>}
                //   infini scroll : ajoute des éléments au fur à mesure pour éviter trop élément
                  onEndReached={more}
                  onEndReachedThreshold={0.3}
              />
          }

      </View>
      
  )
}

export default ProductApi