(function() {
    var st = document.createElement('style');
    st.innerHTML = '* { opacity: 0 }';
    st.setAttribute('id', 'hide-all');
    document.head.appendChild(st);

    if (!window.dw || !window.dw.scriptLoaded) {
        const chart = document.querySelector('#chart');
        chart.innerHTML = "<img style='max-width: 100%' src='../plain.png' aria-hidden='true' alt='fallback image'>" +
            "<p style='opacity:0.6;padding:1ex; text-align:center'>(Please use a modern browser to see the interactive version of this visualization)</p>";
    }

    window.parent.postMessage('datawrapper:vis:reload', '*');
})();
