import firestore from '@react-native-firebase/firestore';

// charge les données a partir de son name
export const loadData = async ({collectionName}) => {
 
  console.log('début cat');

  const snapShot = await firestore().collection('TruthOrDare').get();
  
  // const fstore = await firestore().collection('category').get();

  // console.log('firestore :  ', fstore);

  // console.log('snapShot : ', snapShot);

  //vérifier l'existence de la donnée

  console.log('snapShot.empty : ', snapShot.empty);
  if (!snapShot.empty) {
    const datas = snapShot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    console.log('Ok il y a data dans db :  ');

    return datas;
  } else {
    console.log('Vide dans db');
    return [];
  }
}; // end loadData

// récupération de la liste des action vérité en fontion de l'id de la categories
export const loadDataDareOrTruth = async (id, type) => {
  console.log('dataTruthOrDare', id);

  const snapShot = await firestore()
    .collection('DareOrTruth')
    .where('category', '==', id)
    .where('type', '==', type)
    .get();
  
  console.log("snapShot de loadDataDareOrTruth : ", snapShot);

  //vérifier l'existence de la donnée
  if (!snapShot.empty) {
    const datas = snapShot.docs.map(doc => {
      return { id:doc.id ,  ...doc.data() };
    })
    return datas
  } else {
    return []
  }
console.log('loadDataDareOrTruth : ', loadDataDareOrTruth);

};  // end loadDataDareOrTruth



/********************************************
 *
 *  Récupère la liste des actions ou questions en
 ****fonction de l'id de la category dans la base de donnée
 **
 ** params { id<string : id categoty }
 **
 *********/
// export const  loadDareOrTruth = async () => {

//     console.log("loadDareOrTruth", id);

// }
