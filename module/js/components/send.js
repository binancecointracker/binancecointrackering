class Send extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SEND STRUCTURE -->
            <div class="send-page-display">
                
                <!-- -------------------- -------------------- SEND PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="send-parent-wrap">
                        <div class="send-child-wrap">
                            <!-- -------------------- Header container -------------------- -->
                            <div class="help-header-wrap dark-color">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container">
                                            <div class="help-header-img btn-display" onclick="HomeToToken()">
                                                <img src="img/arrow-left.png" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt" id="send-sss-header-txt">Send ${ CryptoLocalData[TokenPage].symbol }</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-img" id="send-sss-header-img">
                                            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
    
    
    
                            <!-- -------------------- Main container body -------------------- -->
                            <div class="container">
                                <!-- Token balance-->
                                <div class="send-token-balance"><div class="container" id="send-zzz-xxx-ccc"><span style="padding-right: 0.5em;">${ CryptoLocalData[TokenPage].symbol } Balance: </span> ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol }</div></div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Token address to send to -->
                                <div class="send-address-input-wrap">
                                    <input placeholder="..." class="send-input" required>
                                    <div class="send-input-absolute" id="send-vvv-input-absolute">${ CryptoLocalData[TokenPage].name } Address</div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Scan Qr-code container -->
                                <div class="send-qrcode-btn" onclick="scanin()">
                                    <span>Scan QR</span>
                                    <div class="send-qrcode-img">
                                        <img src="img/qrCode.png" class="img-fluid">
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Amount container-->
                                <div class="send-amount-wrap">
                                    <div class="send-amount-div-wrap">
                                        <div class="send-amount-div" id="send-sss-amount-div">${ CryptoLocalData[TokenPage].symbol }</div>
                                        <div class="send-input-absolute">Current Token</div>
                                    </div>
                                    <div class="send-amount-input-wrap">
                                        <input type="number" placeholder="..." class="send-input" id="send-input" onkeyup="sendAmount()" required>
                                        <div class="send-input-absolute" id="send-zzz-input-absolute">Send Amount (${ CryptoLocalData[TokenPage].symbol })</div>
                                        <div class="send-input-exchange" id="send-parent-exchange"> <div id="send-input-exchange" class="one-line">≈ $0</div> <div id="send-bottom-txt" style="visibility: hidden;">Amount exceeds balance</div></div>

                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                            </div>
                        </div>





                        <div class="send-child-wrap">
                            <div class="container">    
                                <!-- Conversion rate -->
                                <div class="send-convert-wrap">
                                    <div class="send-convert-sm-txt one-line">Fee≈ <div id="tip-token" class="one-line"> 0.0</div>/<div id="tip-curr" class="one-line">0.00</div> USD</div>
                                    <div class="send-convert-lg-txt one-line" id="send-zzz-convert-lg-txt">Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD</div>
                                </div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Send Button -->
                                <div class="userinfoslide-btn" id="send-info-btn">Send</div>
                                <!-- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -->
                                
                                <!-- Link to send token -->
                                <div class="receive-send-link-btn-wrap" onclick="TokenToReceive()">
                                    <div class="container">
                                        <div class="receive-send-link-btn">
                                            <div class="receive-send-left-wrap">
                                                <div class="receive-send-right-wrap">
                                                    <div class="receive-send-right-img">
                                                        <img src="img/expanding-two-opposite-arrows-diagonal-symbol-of-interface.png" class="img-fluid">
                                                    </div>
                                                </div>
                                                <span class="receive-send-txt" id="receive-send-zzz-txt">Go to Receive ${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <div class="receive-send-left-img">
                                                <img src="img/backArrowB.png" class="img-fluid" style="rotate: 180deg;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>

                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->


            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("send-page", Send);





// --------------------  - PAGE --------------------         
    //  
    function sendAmount() {
        var txt = Number(CryptoLocalData[TokenPage].price) * Number(document.getElementById("send-input").value);
        var tipCurr = txt * Number(CryptoLocalData[TokenPage].tip);
        var tipToken = tipCurr / Number(CryptoLocalData[TokenPage].price);
        var totalToken = tipToken + Number(document.getElementById("send-input").value);
        var totalCurr = txt + tipCurr;
        // 
        var span = document.getElementById("send-input-exchange");
        var tipCurrLabel = document.getElementById("tip-curr");
        var tipTokenLabel = document.getElementById("tip-token");
        var totalTokenLabel = document.getElementById("total-token");
        var totalCurrLabel = document.getElementById("total-curr");
        //
        var warningtxt = document.getElementById("send-bottom-txt")
        var warning = document.getElementById("send-parent-exchange")
        // 
        span.innerHTML = span.textContent = "≈ $" + txt.toFixed(2);
        tipCurrLabel.innerHTML = tipCurrLabel.textContent = tipCurr.toFixed(2);
        tipTokenLabel.innerHTML = tipTokenLabel.textContent = tipToken.toFixed(5);
        totalTokenLabel.innerHTML = totalTokenLabel.textContent = totalToken.toFixed(5);
        totalCurrLabel.innerHTML = totalCurrLabel.textContent = totalCurr.toFixed(2);
        // 
        if(Number(txt) > Number(CryptoLocalData[TokenPage].balance)){
            warning.style.color = "#790303";
            warningtxt.style.visibility ="visible";
        } else{
            warning.style.color = "#0C0E12";
            warningtxt.style.visibility ="hidden";
        }
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 