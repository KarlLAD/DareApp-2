import { StyleSheet , Dimensions} from "react-native";

const Width = Dimensions.get("window").width ;



export const stylesProduct = StyleSheet.create({

    container : {
        paddingHorizontal : 10,
        
    },
    cardProduct : {

        margin : 5 , 

    },

    cartContent : {

        backgroundColor : "#fff", s
        width : (width - (10 * 2) - (5 * 4) )/2 , 


    },

    cardTitle : {

        fontSize : 15,
        color : 'orange' ,
        fontWeight "600",


    } ,
    cardPrice : {

        fontSize : 14,
        color : 'orange' ,
        fontWeight "500",

    } ,

})