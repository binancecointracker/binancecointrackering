class TransactionHistory extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- TRANSACTION HISTORY -->
            <div class="transaction-histoy-page-display">
                <!-- -------------------- -------------------- RECEIVE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="receive-parent-wrap">
                    
                        <!-- -------------------- Header container -------------------- -->
                        <div class="help-header-wrap dark-color">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container" id="transact-main-left-container">
                                            <div class="help-header-img btn-display">
                                                <img src="img/arrow-left.png" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Transaction History</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-img"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <div class="trans-display-background">
                            <!-- Images -->
                            <div class="hmepg-display-img">
                                <img src="img/binance.png" class="img-fluid">
                            </div>
                            <div class="hmepg-token-img-txt one-line">No Transactions has been made yet</div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("transaction-history-page", TransactionHistory);