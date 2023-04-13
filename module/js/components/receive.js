class Receive extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- RECEIVE STRUCTURE -->
            <div class="receive-page-display">

                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="receive-parent-wrap">
                        
                        <div>
                            <!-- -------------------- Header container -------------------- -->
                            <div class="help-header-wrap dark-color">
                                    <div class="container">
                                        <div class="help-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img btn-display" onclick="HomeToToken()">
                                                    <img src="img/arrow-left.png" class="img-fluid">
                                                </div>
                                                <span class="help-header-txt" id="receive-header-txt">Receive ${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="help-header-img" id="receive-header-img">
                                                <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                            
                        
                            <!-- --------------------  -------------------- -->
                            <div class="container">
                                <!-- Qr code -->
                                <div class="receive-qr-code" id="receive-qr-code-un">
                                    <img src="img/qrCode.png" class="img-fluid">
                                </div>
                                <!-- wallet address -->
                                <div id="receive-wallet-address-un" class="receive-wallet-address one-line">${ CryptoLocalData[TokenPage].name }</div>
                                
                                <!-- Qr code -->
                                <div class="receive-qr-code" id="receive-qr-code-v">
                                    <img src="img/qrimg/${ CryptoLocalData[TokenPage].qr }.png" class="img-fluid">
                                </div>
                                <!-- wallet address -->
                                <div id="receive-wallet-address" class="receive-wallet-address one-line">${ CryptoLocalData[TokenPage].wallet }</div>

                                <!-- wallet address -->
                                <div id="receive-network" class="receive-network one-line">NETWORK: ${ CryptoLocalData[TokenPage].network }</div>
                            </div>
                        </div>



                        <div class="container">
                            <!-- receive note  -->
                            <div class="receive-note" id="receive-note-1">
                                You must have a verified account with Binance CoinTracker before depositing in Binance CoinTracker <br>
                                <div class="receive-get-verify" onclick="AssetsToVerification()"> Get verified now! </div>
                            </div>
                            <!-- receive note  -->
                            <div class="receive-note" id="receive-note-2">
                                Send only ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to the Network "${ CryptoLocalData[TokenPage].network }".<br>
                                Failure to do so, may result in permanent loss!
                            </div>
                        </div>


                        <div class="container">
                            <!-- Button container -->
                            <div class="receive-btn-wrap">
                                <div class="receive-btn" id="receive-copy-btn">
                                    <div class="receive-btn-img-wrap">
                                        <div class="receive-btn-img">
                                            <img src="img/copy.png" class="img-fluid">
                                        </div>
                                    </div>
                                    <span class="receive-btn-txt" id="receive-share">Copy</span>	
                                </div>
                            </div>
                            
                            <!-- Link to send token -->
                            <div class="receive-send-link-btn-wrap" onclick="TokenToSend()">
                                <div class="container">
                                    <div class="receive-send-link-btn">
                                        <div class="receive-send-left-wrap">
                                            <div class="receive-send-left-img">
                                                <img src="img/backArrowB.png" class="img-fluid">
                                            </div>
                                            <span class="receive-send-txt" id="receive-send-txt">Go to Send ${ CryptoLocalData[TokenPage].symbol }</span>
                                        </div>
                                        <div class="receive-send-right-wrap">
                                            <div class="receive-send-right-img">
                                                <img src="img/expanding-two-opposite-arrows-diagonal-symbol-of-interface.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("receive-page", Receive);
 




// --------------------  - PAGE --------------------         
    //  
    function copyText() {
        var $copyText = document.getElementById("receive-wallet-address").innerText;
        var button = document.getElementById("receive-share");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="img/check-mark.png" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 


// --------------------  - PAGE --------------------         
    //  
    function copyTextUn() {
        var $copyText = document.getElementById("receive-wallet-address-un").innerText;
        var button = document.getElementById("receive-share");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="img/check-mark.png" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 