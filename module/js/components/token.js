class Token extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `  
            <!-- TOKEN STRUCTURE -->
            <div class="token-page-display">
                
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
                    <div class="token-parent-wrap">

                        <!-- -------------------- Token Header wrap -------------------- -->
                            <div class="token-header-wrap">

                                <!-- -------------------- Token Header Container -------------------- -->
                                <div class="help-header-wrap">
                                    <div class="container">
                                        <div class="help-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img" onclick="MenuToHome()">
                                                    <img src="img/arrow-left.png" class="img-fluid">
                                                </div>
                                                <span id="token-ccc-header-txt" class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol })</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="help-header-img onclick=" onclick="TokenToMarketInfo()">
                                                <img src="img/tokenAnalytics.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->

                                <div class="container">
                                    <!-- Logo section-->
                                    <div class="token-weblogo-wrap">
                                        <div class="token-web-logo">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                        <!-- price and rate container -->
                                        <div class="token-price-rate-wrap">
                                            <div id="token-ccc-price-txt" class="token-price-txt page-refresh">$${ CryptoLocalData[TokenPage].price_comma }</div>
                                            <div id="token-ccc-rate-txt" class="token-rate-txt page-refresh">${ CryptoLocalData[TokenPage].query }%</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Token logo container-->
                                    <div class="token-logo-wrap">
                                        <!-- Token logo image -->
                                        <div id="token-ccc-logo-img" class="token-logo-img">
                                            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid page-refresh">
                                        </div>
                                        <div id="token-ccc-exchange-rate" class="token-exchange-rate page-refresh">${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $ <label>0.00</label></div>
                                    </div>
                                    
                                    <!-- Header buttons section -->
                                    <div class="row token-btn-section">
                                        <!-- Send Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="TokenToSend()">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="img/cardSend.png" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt">Send</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Receive Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="TokenToReceive()">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="img/qrCode.png" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt">Receive</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Copy Button -->
                                        <div class="col-4 p-2">
                                            <div class="token-header-btn" onclick="copyTokenOption()">
                                                <!-- link image container -->
                                                <div class="token-header-btn-img-wrap">
                                                    <div class="token-header-btn-img">
                                                        <img src="img/copy.png" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="token-header-btn-txt" id="token-page-copy">Copy</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                        <!-- -------------------- Menu Header Container -------------------- -->
                            <div class="container">
                                <!-- In and Out section -->
                                <div class="token-transfer-wrap">
                                    <div class="token-transfer-con" id="token-ccc-transfer-con"><span class="token-transfer">In: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }</div>
                                    <div class="token-transfer-con" id="token-vvv-transfer-con"><span class="token-transfer">Out: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }</div>
                                </div>
                                <!-- Transaction History -->
                                <div class="token-history-txt">Transaction History</div>

                                <!-- Bottom image -->
                                
                                <div class="hmepg-display-background">
                                    <!-- Images -->
                                    <div class="hmepg-display-img">
                                        <img src="img/binance.png" class="img-fluid">
                                    </div>
                                    <div class="hmepg-token-img-txt one-line">No Transaction History</div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                    </div>
                
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    };
}

customElements.define("token-page", Token);