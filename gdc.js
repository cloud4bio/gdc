console.log('gdc.js loaded')

gdc=function(){ // ini
    // ...
    return "gdc house keeping done"
}

gdc.hello=function(){
    return `Hello GDC at ${Date()}`
}


if(typeof (define) != 'undefined'){
    define(_=>gdc)
}