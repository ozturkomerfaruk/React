function ChangeLightState(newState){
    console.log('Inside ChangeLightState');
    
    /* Select the HTML element to modify */
    const element = document.getElementById('myImage');

    /* Change the 'src' attribute of the image element */        
    if (newState == 1) element.src='pic_bulbon.gif';
    else               element.src='pic_bulboff.gif';
} //end-ChangeLightState