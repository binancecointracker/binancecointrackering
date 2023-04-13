// --------------------  -------------------- 
    //  Add bootstrap container to general page
    function addBootstrapContainer(bootstrapContainer) {
        var container = document.getElementById('pageParent');
        if (bootstrapContainer.matches) {
            container.classList.add("container");
        } else {
            container.classList.remove("container");
        };
    };
    
    var bootstrapContainer = window.matchMedia("(min-width: 1525px)");
    addBootstrapContainer(bootstrapContainer) ;
    bootstrapContainer.addListener(addBootstrapContainer) ;
    // -------------------- 
//  -------------------- -------------------- -------------------- 