class ConvertSelect extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- CONVERT SELECT STRUCTURE -->
            <div class="convert-select-page-display">
                <!-- Add token to remove parent container-->
                <div class="add-token-removebtn" onclick="HomeToConvert()"></div>
            
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
                    <div class="add-token-parent">

                        <!-- -------------------- Toggle button container -------------------- -->
                            <div class="add-token-sepline">
                                <div class="container">
                                <div class="convertselect-toggle-wrap" id="convertselect-toggle-wrap">
                                    <div class="swap-absolute" id="swap-absolute" style="transition: all linear 1s;"></div>
                                    <!-- From container -->
                                    <div class="convertselect-toggle-btn" onclick="From()">
                                        <span class="convertselect-direction">From</span>
                                        <div id="convert-from-token-txt" class="convertselect-token">
                                            <div class="convertselect-token-img">
                                                <img src="img/token/${ CryptoLocalData[0].img }.png" class="img-fluid page-refresh">
                                            </div>
                                            <span  class="convertselect-token-txt">${ CryptoLocalData[0].symbol }</span>
                                        </div>
                                    </div>
                                    
                                    <!-- To container -->
                                    <div class="convertselect-toggle-btn" onclick="To()">
                                        <span class="convertselect-direction">To</span>
                                        <div id="convert-to-token-txt" class="convertselect-token">
                                            <div class="convertselect-token-img">
                                                <img src="img/token/${ CryptoLocalData[3].img }.png" class="img-fluid page-refresh">
                                            </div>
                                            <span class="convertselect-token-txt">${ CryptoLocalData[3].symbol }</span>
                                        </div>
                                    </div>
                                </div>
                        
                                    <div class="add-token-header" style="margin: 0px;" >
                                        <!-- Left container -->
                                        <div class="add-token-left-wrap">
                                            <div class="add-token-txt-img">
                                                <img src="img/addToken.png" class="img-fluid">
                                            </div>
                                            <span class="add-token-txt">Convert Select</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="add-token-right-wrap">
                                            <input class="add-token-input" type="text" id="convertselecttoken" onkeyup="SearchConvert()" placeholder="Search tokens here..." >
                                        </div>
                                    </div>
                                </div>
                            </div>
			
                            <div class="add-token-seperation"></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                        

                        <!-- --------------------  -------------------- -->
                            <converttokenloopscript></converttokenloopscript>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                        <div class="add-token-display-background" id="convert-select-token-display-background">
                            <!-- Images -->
                            <div class="hmepg-display-img">
                                <img src="img/binance.png" class="img-fluid">
                            </div>
                            <div class="hmepg-token-img-txt one-line">No assets found</div>
                        </div>

                    </div>

                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("convert-select-page", ConvertSelect);





// -------------------- ADD TOKEN  - PAGE --------------------         
    // Loop event
    function ConvertTokenLoop(arg) {
        let ConvertTokenString = ``;
        for (let i = 0; i < arg.length; i++) {
            ConvertTokenString += `
                <!-- Token container -->
                <div class="convert-select-token-main-wrap" data-toggle-id="${ CryptoLocalData[i].name }">
                    <div class="add-token-absolute" onclick="convertSwapToken(this)" data-swap-id="${ i }" style="z-index: 3;"></div>
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
                                        <span class="hmepg-token-name convert-select-token-toggle line-height one-line">${ CryptoLocalData[i].name }</span>
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
        return ConvertTokenString;
    }
    
    document.querySelector("converttokenloopscript").innerHTML = `
        <div>${ConvertTokenLoop(CryptoLocalData)}</div>
    `;
    // -------------------- 
//  -------------------- -------------------- -------------------- `.







// --------------------  - PAGE --------------------         
    //  
    function SearchConvert() {
        let searchList = document.getElementsByClassName("convert-select-token-main-wrap");
        var filter = document.getElementById("convertselecttoken").value.toUpperCase();
        for(let i = 0; i < searchList.length; i++) {
            a = searchList[i].getElementsByClassName("convert-select-token-toggle")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                searchList[i].style.display = "flex";
            } else {
                searchList[i].style.display = "none";
            };
        };

        // 
        var display = document.getElementById("convert-select-token-display-background")
        if (document.querySelectorAll(".convert-select-token-main-wrap").length !== document.querySelectorAll(".convert-select-token-main-wrap[style='display: none;']").length) {
            display.style.display = "none";
        } else {
            display.style.display = "flex";
        }
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  