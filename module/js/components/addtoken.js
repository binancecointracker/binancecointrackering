class AddToken extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ADD TOKEN STRUCTURE -->
            <div class="add-token-page-display">
                <!-- Add token to remove parent container-->
                <div class="add-token-removebtn" onclick="MenuToHome()"></div>



                <!-- Add token parent container-->
                <div class="add-token-parent">
                    
                    <!-- Header of the add token menu-->
                    <div class="add-token-sepline">
                        <div class="container">
                            <div class="add-token-header">
                                <!-- Left container -->
                                <div class="add-token-left-wrap cursor">
                                    <div class="add-token-txt-img">
                                        <img src="img/addToken.png" class="img-fluid">
                                    </div>
                                    <span class="add-token-txt one-line">Add Token</span>
                                </div>
                                <!-- Right container-->
                                <div class="add-token-right-wrap">
                                    <input class="add-token-input" type="text" id="searchtoken" onkeyup="SearchToken()" placeholder="Search tokens here..." >
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- -------------------- -------------------- -->
                    <addtokenloopscript></addtokenloopscript>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                    
                    <div class="add-token-display-background" id="add-token-display-background">
                        <!-- Images -->
                        <div class="hmepg-display-img">
                            <img src="img/binance.png" class="img-fluid">
                        </div>
                        <div class="hmepg-token-img-txt one-line">No assets found</div>
                    </div>
                    
                </div>

            </div>
            <!--  -------------------- --> 
        `;
    }
}

customElements.define("add-token-page", AddToken);





// -------------------- ADD TOKEN  - PAGE --------------------         
    // Loop event
    function AddTokenLoop(arg) {
        let AddTokenString = ``;
        for (let i = 0; i < arg.length; i++) {
            AddTokenString += `
                <!-- Token container -->
                <div class="add-token-main-wrap" data-toggle-id="${ CryptoLocalData[i].name }">
                    <div class="container">
                        <div class="add-token-sub-wrap">
                            <!-- Token image container -->
                            <div class="hmepg-token-img-wrap">
                                <img src="img/token/${ CryptoLocalData[i].img }.png" class="img-fluid page-refresh">
                            </div>		
                            <!-- Token container -->
                            <div class="hmepg-sub-token-left-wrap">
                                <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                    <!-- Left container -->
                                    <div class="hmepg-sub-token-left-con">
                                        <span class="hmepg-token-name add-token-toggle line-height one-line">${ CryptoLocalData[i].name }</span>
                                    </div>
                                    <!-- Right container-->
                                    <div class="hmepg-sub-token-right-con">
                                        <div class="toggle" onclick="ToggleDisplay(this)" data-employee-id="${ i }">
                                            <input type="checkbox">
                                            <label></label>
                                        </div>
                                    </div>
                                </div>		
                                <!-- Token line -->
                                <div class="hmepg-sub-token-line"></div>				
                            </div>
                        </div>
                    </div>
                    <div class="add-token-absolute" onclick="SendPage(this)" data-change-id="${ i }"></div>
                </div>
            `;
        }
        return AddTokenString;
    }
    
    document.querySelector("addtokenloopscript").innerHTML = `
        ${AddTokenLoop(CryptoLocalData)}
    `;
    // -------------------- 
//  -------------------- -------------------- -------------------- 





// --------------------  - PAGE --------------------         
    //  
    function SearchToken() {
        let searchList = document.getElementsByClassName("add-token-main-wrap");
        var filter = document.getElementById("searchtoken").value.toUpperCase();
        for(let i = 0; i < searchList.length; i++) {
            a = searchList[i].getElementsByClassName("add-token-toggle")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                searchList[i].style.display = "flex";
            } else {
                searchList[i].style.display = "none";
            };
        };

        // 
        var display = document.getElementById("add-token-display-background")
        if (document.querySelectorAll(".add-token-main-wrap").length !== document.querySelectorAll(".add-token-main-wrap[style='display: none;']").length) {
            display.style.display = "none";
        } else {
            display.style.display = "flex";
        }
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  
