class ReceiveSelect extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SELECT STRUCTURE -->
            <div class="select-page-display">
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
                                    <span class="add-token-txt one-line">Receive Token</span>
                                </div>
                                <!-- Right container-->
                                <div class="add-token-right-wrap">
                                    <input class="add-token-input" type="text" id="receiveselecttoken" onkeyup="SearchReceive()" placeholder="Search tokens here..." >
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- -------------------- -------------------- -->
                    <receivetokenloopscript></receivetokenloopscript>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->

                    <div class="add-token-display-background" id="receive-select-token-display-background">
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

customElements.define("select-receive-page", ReceiveSelect);





// -------------------- ADD TOKEN  - PAGE --------------------         
    // Loop event
    function ReceiveTokenLoop(arg) {
        let ReceiveTokenString = ``;
        for (let i = 0; i < arg.length; i++) {
            ReceiveTokenString += `
                <!-- Token container -->
                <div class="receive-select-token-main-wrap" data-toggle-id="${ CryptoLocalData[i].name }">
                    <div class="add-token-absolute" onclick="ReceiveToken(this)" data-receive-id="${ i }" style="z-index: 2;"></div>
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
                                        <span class="hmepg-token-name receive-select-token-toggle line-height one-line">${ CryptoLocalData[i].name }</span>
                                    </div>
                                    <!-- Right container-->
                                    <div class="hmepg-sub-token-right-con convertselect-sub-token-right-con">
                                        (Bal: ${ CryptoLocalData[i].balance } ${ CryptoLocalData[i].symbol })
                                    </div>
                                </div>		
                                <!-- Token line -->
                                <div class="hmepg-sub-token-line"></div>				
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        return ReceiveTokenString;
    }
    
    document.querySelector("receivetokenloopscript").innerHTML = `
        ${ReceiveTokenLoop(CryptoLocalData)}
    `;
    // -------------------- 
//  -------------------- -------------------- -------------------- 





// --------------------  - PAGE --------------------         
    //  
    function SearchReceive() {
        let searchList = document.getElementsByClassName("receive-select-token-main-wrap");
        var filter = document.getElementById("receiveselecttoken").value.toUpperCase();
        for(let i = 0; i < searchList.length; i++) {
            a = searchList[i].getElementsByClassName("receive-select-token-toggle")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                searchList[i].style.display = "flex";
            } else {
                searchList[i].style.display = "none";
            };
        };

        // 
        var display = document.getElementById("receive-select-token-display-background")
        if (document.querySelectorAll(".receive-select-token-main-wrap").length !== document.querySelectorAll(".receive-select-token-main-wrap[style='display: none;']").length) {
            display.style.display = "none";
        } else {
            display.style.display = "flex";
        }
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  
