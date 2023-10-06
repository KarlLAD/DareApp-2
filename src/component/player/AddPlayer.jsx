import { View, Text, TextInput } from 'react-native'
import React , {useState}  from 'react'
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../redux/player';




const AddPlayer = () => {

    
    const [name, setName] = useState() ;


    const dispatch = useDispatch();



    // enregistrement dans le store
    const send = (value) => { 

        console.log("value", value);

  
                    //formatage de la donnée à ajouter dans le store
                    const newPlayer = {

                        id : Date.now() ,
                        name: value,
                        tod : [],
                    }

                    dispatch(addPlayer(newPlayer))

                 //vide Mon text input
                     setName('')
                     
       

     }



  return (
   <>
        <TextInput
            label="Nom du joueur"
            value={name}
            onChangeText={text=>setName(text)}
            onSubmitEditing={(value) => send(value.nativeEvent.text)}

        />

   </>
  )
}

export default AddPlayer