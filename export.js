async function loadScript(url) {
    let load = new Promise((resolve, reject) => {
        let s = document.createElement('script');
        s.src = url;
        s.onload = resolve;
        document.head.appendChild(s);
    });
    return load
};

function hello(){
    return `Hello GDC at ${Date()}`
};

export{
    loadScript,
    hello
}