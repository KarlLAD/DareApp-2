import firestore from '@react-native-firebase/firestore';

// Génération d'un nombre aléatoire entre min & max
export const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// charge les données d'une collection à partir de son Name
export const loadData = async collectionName => {
  const snapShot = await firestore('DareOrTruth').collection(collectionName).get();

  console.log('collectionName : ', snapShot.empty);

  // vérification des données

  if (!snapShot.empty) {
    const datas = snapShot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    console.log('datas', datas);
    return datas;

    //enregistrement des categories dans le store ;
    // dispatch(add(dataCategories))
  } else {
    return [];
  }
}; // end load
