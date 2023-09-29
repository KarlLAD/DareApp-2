
import firestore from '@react-native-firebase/firestore'

// charge les données a partir de son name
export const loadData = async (collectionName) => { 

    const snapShot = await firestore().collection(collectionName).get()

    //vérifier l'exsistence de la donné
    if (!snapShot.empty) {

        const datas = snapShot.docs.map(doc => {
            return {id:doc.id, ...doc.data() }
        })
        return datas
    } else {
        return []
    }
 }

 // récupération de la liste des action vérité en fontion de l'id de la categories 
export const loadDataDareOrTruth = async (id) => {


    console.log("dataTruthOrDare", id);

    const snapShot = await firestore('DareOrTruth')
                            .collection(collectionName)
                            .where("category", "==", id)
                            .get()

    //vérifier l'exsistence de la donné
    if (!snapShot.empty) {

        const datas = snapShot.docs.map(doc => {
            return {id:doc.id, ...doc.data() }
        })
        return datas
    } else {
        return []
    }
}


 // end loadData


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