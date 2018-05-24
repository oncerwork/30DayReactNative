//公共类
import Dimensions from 'Dimensions';

module.exports={
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    get:function(url,sucessCallback, failCallback){
        fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
            sucessCallback(JSON.parse(responseText));
        })
        .catch((err)=>{
            failCallback(err);
        });
    },
};
