function sRuangKeluarga(){

    let saklarRK = document.getElementById('saklarRK'); 
    // console.log(saklarRK.checked);
    let saklarLampu1RK = document.getElementById('saklarLampu1RK');
    let saklarLampu2RK = document.getElementById('saklarLampu2RK');
    let saklarLampu3RK = document.getElementById('saklarLampu3RK');
    
    let lampu1RK = document.getElementById('lampu1RK');
    let lampu2RK = document.getElementById('lampu2RK');
    let lampu3RK = document.getElementById('lampu3RK');

    if (saklarRK.checked){
        lampu1RK.src = 'assets/images/on.gif';
        lampu2RK.src = 'assets/images/on.gif';
        lampu3RK.src = 'assets/images/on.gif';
    } else {
        if (saklarLampu1RK.checked){
            lampu1RK.src = 'assets/images/on.gif';
        } else {
            lampu1RK.src = 'assets/images/off.gif';
        }

        if (saklarLampu2RK.checked){
            lampu2RK.src = 'assets/images/on.gif';
        } else {
            lampu2RK.src = 'assets/images/off.gif';
        }

        if (saklarLampu3RK.checked){
            lampu3RK.src = 'assets/images/on.gif';
        } else {
            lampu3RK.src = 'assets/images/off.gif';
        }
    }
}

// ----------------------------------------------------
function sRuangMakan(){

    let saklarRM = document.getElementById('saklarRM'); 
    // console.log(saklarRM.checked);
    
    let lampu1RM = document.getElementById('lampu1RM');


    if (saklarRM.checked){
        lampu1RM.src = 'assets/images/on.gif';
    } else {
        lampu1RM.src = 'assets/images/off.gif';
    }
}


// -----------------------------

function sRuangTidur(){

    let saklarRT = document.getElementById('saklarRT'); 
    // console.log(saklarRT.checked);
    let saklarLampu1RT = document.getElementById('saklarLampu1RT');
    let saklarLampu2RT = document.getElementById('saklarLampu2RT');
    
    let lampu1RT = document.getElementById('lampu1RT');
    let lampu2RT = document.getElementById('lampu2RT');
    

    if (saklarRT.checked){
        lampu1RT.src = 'assets/images/on.gif';
        lampu2RT.src = 'assets/images/on.gif';
        
    } else {
        if (saklarLampu1RT.checked){
            lampu1RT.src = 'assets/images/on.gif';
        } else {
            lampu1RT.src = 'assets/images/off.gif';
        }
    
        if (saklarLampu2RT.checked){
            lampu2RT.src = 'assets/images/on.gif';
        } else {
            lampu2RT.src = 'assets/images/off.gif';
        }
        
    }
}


// ------------------------

function sRuangTamu(){

    let saklarRTM = document.getElementById('saklarRTM'); 
    // console.log(saklarRTM.checked);
    
    let lampu1RTM = document.getElementById('lampu1RTM');
    let lampu2RTM = document.getElementById('lampu2RTM');
    let lampu3RTM = document.getElementById('lampu3RTM');
    let lampu4RTM = document.getElementById('lampu4RTM');

    if (saklarRTM.checked){
        lampu1RTM.src = 'assets/images/on.gif';
        lampu2RTM.src = 'assets/images/on.gif';
        lampu3RTM.src = 'assets/images/on.gif';
        lampu4RTM.src = 'assets/images/on.gif';
    } else {
        sLampuRuangTamu();
    }
}


function sLampuRuangTamu(){
    let saklarLampu1RTM = document.getElementById('saklarLampu1RTM');
    let saklarLampu2RTM = document.getElementById('saklarLampu2RTM');
    let saklarLampu3RTM = document.getElementById('saklarLampu3RTM');
    let saklarLampu4RTM = document.getElementById('saklarLampu4RTM');

    let lampu1RTM = document.getElementById('lampu1RTM');
    let lampu2RTM = document.getElementById('lampu2RTM');
    let lampu3RTM = document.getElementById('lampu3RTM');
    let lampu4RTM = document.getElementById('lampu4RTM');
    

    if (saklarLampu1RTM.checked){
        lampu1RTM.src = 'assets/images/on.gif';
    } else {
        lampu1RTM.src = 'assets/images/off.gif';
    }

    if (saklarLampu2RTM.checked){
        lampu2RTM.src = 'assets/images/on.gif';
    } else {
        lampu2RTM.src = 'assets/images/off.gif';
    }

    if (saklarLampu3RTM.checked){
        lampu3RTM.src = 'assets/images/on.gif';
    } else {
        lampu3RTM.src = 'assets/images/off.gif';
    }

    if (saklarLampu4RTM.checked){
        lampu4RTM.src = 'assets/images/on.gif';
    } else {
        lampu4RTM.src = 'assets/images/off.gif';
    }
}