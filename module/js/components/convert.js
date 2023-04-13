class Convert extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- CONVERT STRUCTURE -->
            <div class="convert-page-display">
                
                <!-- -------------------- -------------------- CONVERT PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="convert-parent">
                        <div>
                            <!-- -------------------- Header container -------------------- -->
                                <div class="help-header-wrap" style="margin-bottom: 0.5em">
                                    <div class="container">
                                        <div class="help-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img" onclick="MenuToHome()">
                                                    <img src="img/backArrowB.png" class="img-fluid">
                                                </div>
                                                <span class="convert-nav-txt">Convert</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->



                            <!-- --------------------  -------------------- -->
                                <div class="container">
                                    <!-- Header text for convert page -->
                                    <p class="convert-header-txt">Convert</p>
                                    
                                    <!-- Form Container -->
                                    <form class="convert-form">
                                            <!-- From first container -->
                                            <div class="convert-from-wrap">
                                                <span class="convert-from-txt">From</span>
                                                <span class="red" id="red">Minimum Amount: ${ CryptoLocalData[from].mini } ${ CryptoLocalData[from].symbol }</span>
                                            </div>
                                            <!-- From input container -->
                                            <div class="convert-input-con">
                                                <div class="container">
                                                <div class="convert-input-wrap">
                                                    <!-- Right container for convert input -->
                                                    <div class="convert-right-wrap" onclick="From()">
                                                        <div class="convert-img" id="convert-from-img">
                                                            <img src="img/token/${ CryptoLocalData[from].img }.png" class="img-fluid page-refresh">
                                                        </div>
                                                        <span id="convert-from-selectbtn" class="convert-selectbtn">${ CryptoLocalData[from].symbol }</span>
                                                        <div class="convert-selectimg">
                                                            <img src="img/caretDown.png" class="img-fluid">
                                                        </div>
                                                    </div>
                                                    <!-- Middle container for the convert input -->
                                                    <input type="text" id="from-input" class="convert-input" placeholder="3.3 - 19000" readonly>
                                                    
                                                    <!-- Left container for convert input -->
                                                    <span class="convert-max-txt">MAX</span>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        <!-- Available balance container -->
                                        <span id="convert-available-txt" class="convert-available-txt">Available Balance: ${ CryptoLocalData[from].balance } ${ CryptoLocalData[from].symbol }</span>
                                            
                                        <!-- Percentage buttons-->
                                        <div class="row">
                                            <!-- 25% button -->
                                            <div class="col-3 p-2">
                                                <div class="convert-percent-btn">25%</div>
                                            </div>
                                            <!-- 50% button -->
                                            <div class="col-3 p-2">
                                                <div class="convert-percent-btn">50%</div>
                                            </div>
                                            <!-- 75% button -->
                                            <div class="col-3 p-2">
                                                <div class="convert-percent-btn">75%</div>
                                            </div>
                                            <!-- 100% button -->
                                            <div class="col-3 p-2">
                                                <div class="convert-percent-btn">100%</div>
                                            </div>
                                        </div>
                                            
                                        <!-- Switch button -->
                                        <div class="convert-switch-btn" onclick="ConvertToConvert()">
                                            <img src="img/switch.png" class="img-fluid">
                                        </div>
                                            
                                        <!-- From container -->
                                        <div class="convert-from-wrap">
                                            <span class="convert-from-txt">To</span>
                                        </div>
                                        <!-- From input container -->
                                        <div class="convert-input-con">
                                            <div class="container">
                                                <div class="convert-input-wrap" style="justify-content: start;">
                                                    <!-- Right container for convert input -->
                                                    <div class="convert-right-wrap" onclick="To()">
                                                        <div id="convert-to-img" class="convert-img" >
                                                            <img src="img/token/${ CryptoLocalData[to].img }.png" class="img-fluid page-refresh">
                                                        </div>
                                                        <span class="convert-selectbtn" id="convert-to-selectbtn">${ CryptoLocalData[to].symbol }</span>
                                                        <div class="convert-selectimg">
                                                            <img src="img/caretDown.png" class="img-fluid">
                                                        </div>
                                                    </div>
                                                    <!-- Middle container for the convert input -->
                                                    <span id="convert-amount" class="one-line">...</span>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="convert-form-bottom" id="convert-form-bottom" >1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${(CryptoLocalData[from].price.slice(-1)[0] / CryptoLocalData[to].price.slice(-1)[0]).toFixed(5)}</span> ${ CryptoLocalData[to].symbol }</div>
                                    </form>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Buttons container -------------------- -->
                            <div class="convert-num">
                                <div class="container">
                                    <!-- Buttons [1 - 3] -->
                                    <div class="row">
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(1)">1</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(2)">2</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(3)">3</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Buttons [4 - 6] -->
                                    <div class="row">
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(4)">4</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(5)">5</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(6)">6</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Buttons [7 - 9] -->
                                    <div class="row">
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(7)">7</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(8)">8</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn"  onclick="addNum(9)">9</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Buttons [1 - 3] -->
                                    <div class="row">
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum('.')">·</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="addNum(0)">0</div>
                                        </div>
                                        <div class="col-4 p-2">
                                            <div class="convert-num-btn" onclick="clearNum()">
                                                <div class="convert-num-img">
                                                    <img src="img/deleteNumber.png" class="img-fluid">
                                                </div>	
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="convert-convert-btn" id="convert-convert-btn-id">Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }</div>
                                    <div class="convert-margin-bottom"></div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- --------------------  -------------------- -->
                            
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("convert-page", Convert);