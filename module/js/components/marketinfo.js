class MarketInfo extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MARKET INFORMATION STRUCTURE -->
            <div class="market-info-page-display">
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                    
                    <div class="market-parent-wrap" style="padding-bottom:3em;">

                        <!-- -------------------- Token Header wrap -------------------- -->
                            <div class="token-header-wrap">

                                <!-- -------------------- Token Header Container -------------------- -->
                                <div class="help-header-wrap">
                                    <div class="container">
                                        <div class="help-header-container" id="market-header-container">
                                            <!-- Left container-->
                                            <div class="help-left-container">
                                                <div class="help-header-img btn-display" onclick="HomeToToken()">
                                                    <img src="img/arrow-left.png" class="img-fluid">
                                                </div>
                                                <span class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].symbol }</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-header-img">
                                                <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- --------------------  Container -------------------- -->
                                <div class="container">
                                    <div class="market-head" id="market-info-head">
                                        <p class="market-token-name line-height-zero">${ CryptoLocalData[TokenPage].name }</p>
                                        <div class="market-token-price">$${ CryptoLocalData[TokenPage].price.slice(-1)[0] }</div>
                                        <p class="market-query line-height">$${ CryptoLocalData[TokenPage].query_change.slice(-1)[0] } <span style="padding-left: 1.5em">${ CryptoLocalData[TokenPage].query.slice(-1)[0] }%</span></p>
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- -------------------- Graph absolute container Container -------------------- -->
                                <div class="market-graph-absolute-wrap">
                                    <div class="market-graph-absolute-con" id="market-graph-absolute-con">
                                        <!-- First set of five graphs -->
                                        <!-- Btc graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[0].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[0].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[0].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="btcChart"></canvas>
										</graph>
										<!-- Eth graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[1].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[1].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[1].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="ethChart"></canvas>
										</graph>
										<!-- Usdt graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[2].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[2].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[2].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="usdtChart"></canvas>
										</graph>
										<!-- BNB graph -->
										<graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[3].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[3].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[3].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="bnbChart"></canvas>
										</graph>
										<!-- Usdc graph -->
										<graph style="width: 100%;isplay:none;border:0.15em solid rgba(${CryptoLocalData[4].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[4].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[4].color} 0.08);" class="crypto-token-graph">
											<div style="height: 3.5em;width: 100%;"></div>
											<canvas id="usdcChart"></canvas>
										</graph>

                                        
                                        <!-- Seccond set of five graphs -->
                                        <!-- XPR graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[5].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[5].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[5].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="xprChart"></canvas>
                                        </graph>                                        
                                        <!-- ADA graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[6].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[6].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[6].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="adaChart"></canvas>
                                        </graph>
                                        <!-- MATIC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[7].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[7].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[7].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="maticChart"></canvas>
                                        </graph>
                                        <!-- DOGE graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[8].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[8].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[8].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="dogeChart"></canvas>
                                        </graph>
                                        <!-- SOL graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[9].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[9].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[9].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="solChart"></canvas>
                                        </graph>

                                        
                                        <!-- Third set of five graphs -->
                                        <!-- BUSD graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[10].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[10].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[10].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="busdChart"></canvas>
                                        </graph>
                                        <!-- DOT graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[11].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[11].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[11].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="dotChart"></canvas>
                                        </graph>
                                        <!-- SHIB graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[12].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[12].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[12].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="shibChart"></canvas>
                                        </graph>
                                        <!-- LTC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[13].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[13].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[13].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="ltcChart"></canvas>
                                        </graph>
                                        <!-- TRX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[14].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[14].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[14].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="trxChart"></canvas>
                                        </graph>

                                        
                                        <!-- Fourth set of five graphs -->
                                        <!-- AVAX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[15].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[15].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[15].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="avaxChart"></canvas>
                                        </graph>
                                        <!-- DAI graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[16].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[16].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[16].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="daiChart"></canvas>
                                        </graph>
                                        <!-- UNI graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[17].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[17].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[17].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="uniChart"></canvas>
                                        </graph>
                                        <!-- WBTC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[18].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[18].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[18].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="wbtcChart"></canvas>
                                        </graph>
                                        <!-- LINK graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[19].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[19].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[19].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="linkChart"></canvas>
                                        </graph>

                                        
                                        <!-- Fifth set of five graphs --> 
                                        <!-- ATOM graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[20].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[20].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[20].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="atomChart"></canvas>
                                        </graph>
                                        <!-- LEO graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[21].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[21].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[21].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="leoChart"></canvas>
                                        </graph>
                                        <!-- ETC graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[22].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[22].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[22].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="etcChart"></canvas>
                                        </graph>
                                        <!-- TON graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[23].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[23].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[23].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="tonChart"></canvas>
                                        </graph>
                                        <!-- OKB graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[24].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[24].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[24].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="okbChart"></canvas>
                                        </graph>

                                        
                                        <!-- Sixth set of five graphs --> 
                                        <!-- XMR graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[25].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[25].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[25].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="xmrChart"></canvas>
                                        </graph> 
                                        <!-- BCH graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[26].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[26].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[26].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="bchChart"></canvas>
                                        </graph>
                                        <!-- FIL graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[27].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[27].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[27].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="filChart"></canvas>
                                        </graph>
                                        <!-- APT graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[28].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[28].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[28].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="aptChart"></canvas>
                                        </graph>
                                        <!-- XLM graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[29].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[29].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[29].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="xlmChart"></canvas>
                                        </graph>

                                        
                                        <!-- Seventh set of five graphs --> 
                                        <!-- LDO graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[30].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[30].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[30].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="ldoChart"></canvas>
                                        </graph>
                                        <!-- TUSD graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[31].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[31].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[31].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="tusdChart"></canvas>
                                        </graph>
                                        <!-- NEAR graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[32].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[32].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[32].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="nearChart"></canvas>
                                        </graph>
                                        <!-- CRO graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[33].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[33].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[33].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="croChart"></canvas>
                                        </graph>

                                        
                                        <!-- Eighth set of five graphs -->
                                        <!-- VET graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[34].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[34].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[34].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="vetChart"></canvas>
                                        </graph>
                                        <!-- ICP graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[35].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[35].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[35].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="icpChart"></canvas>
                                        </graph>
                                        <!-- APE graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[36].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[36].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[36].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="apeChart"></canvas>
                                        </graph>
                                        <!-- ALGO graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[37].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[37].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[37].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="algoChart"></canvas>
                                        </graph>
                                        <!-- QNT graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[38].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[38].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[38].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="qntChart"></canvas>
                                        </graph>

                                        
                                        <!-- Ninth set of five graphs -->
                                        <!-- STX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[39].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[39].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[39].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="stxChart"></canvas>
                                        </graph>
                                        <!-- GRT graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[40].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[40].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[40].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="grtChart"></canvas>
                                        </graph>
                                        <!-- FTM graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[41].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[41].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[41].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="ftmChart"></canvas>
                                        </graph>
                                        <!-- IMX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[42].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[42].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[42].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="imxChart"></canvas>
                                        </graph>
                                        <!-- EOS graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[43].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[43].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[43].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="eosChart"></canvas>
                                        </graph>

                                        
                                        <!-- Tenth set of five graphs -->
                                        <!-- MANA graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[44].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[44].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[44].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="manaChart"></canvas>
                                        </graph>
                                        <!-- BIT graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[45].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[45].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[45].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="bitChart"></canvas>
                                        </graph>
                                        <!-- XTZ graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[46].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[46].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[46].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="xtzChart"></canvas>
                                        </graph>
                                        <!-- AAVE graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[47].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[47].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[47].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="aaveChart"></canvas>
                                        </graph>
                                        <!-- FLOW graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[48].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[48].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[48].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="flowChart"></canvas>
                                        </graph>

                                        
                                        <!-- Eleventh set of five graphs -->
                                        <!-- EGLD graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[49].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[49].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[49].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="egldChart"></canvas>
                                        </graph>
                                        <!-- THETA graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[50].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[50].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[50].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="thetaChart"></canvas>
                                        </graph>
                                        <!-- AXS graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[51].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[51].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[51].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="axsChart"></canvas>
                                        </graph>
                                        <!-- CFX graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[52].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[52].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[52].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="cfxChart"></canvas>
                                        </graph>
                                        <!-- SAND graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[53].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[53].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[53].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="sandChart"></canvas>
                                        </graph>

                                        
                                        <!-- Twelveth set of five graphs -->
                                        <!-- KCS graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[54].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[54].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[54].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="kcsChart"></canvas>
                                        </graph>
                                        <!-- NEO graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[55].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[55].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[55].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="neoChart"></canvas>
                                        </graph>
                                        <!-- USDP graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[56].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[56].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[56].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="usdpChart"></canvas>
                                        </graph>
                                        <!-- OP graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[57].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[57].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[57].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="opChart"></canvas>
                                        </graph>
                                        <!-- RPL graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[58].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[58].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[58].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="rplChart"></canvas>
                                        </graph>

                                        
                                        <!-- Thirteenth set of five graphs --><!-- CHZ graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[59].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[59].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[59].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="chzChart"></canvas>
                                        </graph>
                                        <!-- CRV graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[60].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[60].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[60].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="crvChart"></canvas>
                                        </graph>
                                        <!-- MINA graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[61].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[61].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[61].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="minaChart"></canvas>
                                        </graph>
                                        <!-- KLAY graph -->
                                        <graph style="width: 100%;border:0.15em solid rgba(${CryptoLocalData[62].color} 1); box-shadow: 0 3.5px 7px 0 rgba(${CryptoLocalData[62].color}0.15), 0 5px 21px 0 rgba(${CryptoLocalData[62].color} 0.08);" class="crypto-token-graph">
                                            <div style="height: 3.5em;width: 100%;"></div>
                                            <canvas id="klayChart"></canvas>
                                        </graph>
                                        
                                    </div>
                                </div>
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                                
                                

                                <!-- -------------------- Token Header Container -------------------- -->
                                
                                <!-- -------------------- -------------------- -------------------- -->
                                <!-- -------------------- -------------------- -------------------- -->
                            </div>
							<div class="market-bottom-radius"></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

						

                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap market-link-space">
                            <div class="container">
								
							    <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Market Cap</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market">
                                                $${CryptoLocalData[TokenPage].market.slice(-1)[0]} 
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-volume">
                                                ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
							
							
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Total Top-Tier Volume (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-market-change">
                                                ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-total-supply">
                                                ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Circulating Supply</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-token-circle-supply">
												${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">TICK HIGH (24 HRS)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line" id="market-sub-token-cap">
                                                $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">TICK LOW (24 Hrs)</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="market-sub-token-right-con one-line pricy" id="market-sub-market-change-percent">
                                                $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
								
							</div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                    </div>
                
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("market-info-page", MarketInfo);










// --------------------  --------------------
function checkStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}
// -------------------- -------------------- --------------------



// -------------------- Bitcoin - PAGE --------------------
    const btcData = async () => {
        const response = await fetch(CryptoLocalData[0].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBtcChart;
    async function printBtcChart() {
        let { times, prices } = await btcData()
        let btcChart = document.getElementById('btcChart').getContext('2d');
        let gradient = btcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[0].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[0].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBtcChart = new Chart(btcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[0].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBtcChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Ethereum - PAGE --------------------
    const ethData = async () => {
        const response = await fetch(CryptoLocalData[1].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createEthChart;
    async function printEthChart() {
        let { times, prices } = await ethData()
        let ethChart = document.getElementById('ethChart').getContext('2d');
        let gradient = ethChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[1].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[1].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createEthChart = new Chart(ethChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[1].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printEthChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Tether - PAGE --------------------
    const usdtData = async () => {
        const response = await fetch(CryptoLocalData[2].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUsdtChart;
    async function printUsdtChart() {
        let { times, prices } = await usdtData()
        let usdtChart = document.getElementById('usdtChart').getContext('2d');
        let gradient = usdtChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[2].color}.45)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[2].color}.025)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUsdtChart = new Chart(usdtChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[2].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUsdtChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- BNB - PAGE --------------------
    const bnbData = async () => {
        const response = await fetch(CryptoLocalData[3].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBnbChart;
    async function printBnbChart() {
        let { times, prices } = await bnbData()
        let bnbChart = document.getElementById('bnbChart').getContext('2d');
        let gradient = bnbChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[3].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[3].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBnbChart = new Chart(bnbChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[3].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: '#F8F7FA',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBnbChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- USD Coin - PAGE --------------------
    const usdcData = async () => {
        const response = await fetch(CryptoLocalData[4].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUsdcChart;
    async function printUsdcChart() {
        let { times, prices } = await usdcData()
        let usdcChart = document.getElementById('usdcChart').getContext('2d');
        let gradient = usdcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[4].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[4].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUsdcChart = new Chart(usdcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[4].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUsdcChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- XPR - PAGE --------------------
    const xprData = async () => {
        const response = await fetch(CryptoLocalData[5].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
    // 
    let createXPRChart;
    async function printXPRChart() {
        let { times, prices } = await xprData()
        let xprChart = document.getElementById('xprChart').getContext('2d');
        let gradient = xprChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[5].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[5].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createXPRChart = new Chart(xprChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[5].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
                layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printXPRChart()
// -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Cardano - PAGE --------------------
    const adaData = async () => {
        const response = await fetch(CryptoLocalData[6].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createADAChart;
    async function printADAChart() {
        let { times, prices } = await adaData()
        let adaChart = document.getElementById('adaChart').getContext('2d');
        let gradient = adaChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[6].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[6].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createADAChart = new Chart(adaChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[6].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printADAChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Polygon - PAGE --------------------
    const maticData = async () => {
        const response = await fetch(CryptoLocalData[7].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createMATICChart;
    async function printMATICChart() {
        let { times, prices } = await maticData()
        let maticChart = document.getElementById('maticChart').getContext('2d');
        let gradient = maticChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[7].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[7].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createMATICChart = new Chart(maticChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[7].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printMATICChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Dogecoin - PAGE --------------------
    const dogeData = async () => {
        const response = await fetch(CryptoLocalData[8].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDOGEChart;
    async function printDOGEChart() {
        let { times, prices } = await dogeData()
        let dogeChart = document.getElementById('dogeChart').getContext('2d');
        let gradient = dogeChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[8].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[8].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDOGEChart = new Chart(dogeChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[8].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDOGEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Solana - PAGE --------------------
    const solData = async () => {
        const response = await fetch(CryptoLocalData[9].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSOLChart;
    async function printSOLChart() {
        let { times, prices } = await solData()
        let solChart = document.getElementById('solChart').getContext('2d');
        let gradient = solChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[9].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[9].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSOLChart = new Chart(solChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[9].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSOLChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Binance USD - PAGE --------------------
    const busdData = async () => {
        const response = await fetch(CryptoLocalData[10].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBUSDChart;
    async function printBUSDChart() {
        let { times, prices } = await busdData()
        let busdChart = document.getElementById('busdChart').getContext('2d');
        let gradient = busdChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[10].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[10].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBUSDChart = new Chart(busdChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[10].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBUSDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Polkadot - PAGE --------------------
    const dotData = async () => {
        const response = await fetch(CryptoLocalData[11].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDOTChart;
    async function printDOTChart() {
        let { times, prices } = await dotData()
        let dotChart = document.getElementById('dotChart').getContext('2d');
        let gradient = dotChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[11].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[11].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDOTChart = new Chart(dotChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[11].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDOTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Shiba Inu - PAGE --------------------
    const shibData = async () => {
        const response = await fetch(CryptoLocalData[12].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSHIBChart;
    async function printSHIBChart() {
        let { times, prices } = await shibData()
        let shibChart = document.getElementById('shibChart').getContext('2d');
        let gradient = shibChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[12].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[12].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSHIBChart = new Chart(shibChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[12].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSHIBChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const ltcData = async () => {
        const response = await fetch(CryptoLocalData[13].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLTCChart;
    async function printLTCChart() {
        let { times, prices } = await ltcData()
        let ltcChart = document.getElementById('ltcChart').getContext('2d');
        let gradient = ltcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[13].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[13].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLTCChart = new Chart(ltcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[13].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLTCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const trxData = async () => {
        const response = await fetch(CryptoLocalData[14].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTRXChart;
    async function printTRXChart() {
        let { times, prices } = await trxData()
        let trxChart = document.getElementById('trxChart').getContext('2d');
        let gradient = trxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[14].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[14].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTRXChart = new Chart(trxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[14].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTRXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- Avalanche - PAGE --------------------
    const avaxData = async () => {
        const response = await fetch(CryptoLocalData[15].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAVAXChart;
    async function printAVAXChart() {
        let { times, prices } = await avaxData()
        let avaxChart = document.getElementById('avaxChart').getContext('2d');
        let gradient = avaxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[15].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[15].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAVAXChart = new Chart(avaxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[15].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAVAXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const daiData = async () => {
        const response = await fetch(CryptoLocalData[16].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createDAIChart;
    async function printDAIChart() {
        let { times, prices } = await daiData()
        let daiChart = document.getElementById('daiChart').getContext('2d');
        let gradient = daiChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[16].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[16].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createDAIChart = new Chart(daiChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[16].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printDAIChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const uniData = async () => {
        const response = await fetch(CryptoLocalData[17].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUNIChart;
    async function printUNIChart() {
        let { times, prices } = await uniData()
        let uniChart = document.getElementById('uniChart').getContext('2d');
        let gradient = uniChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[17].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[17].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUNIChart = new Chart(uniChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[17].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUNIChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const wbtcData = async () => {
        const response = await fetch(CryptoLocalData[18].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createWBTCChart;
    async function printWBTCChart() {
        let { times, prices } = await wbtcData()
        let wbtcChart = document.getElementById('wbtcChart').getContext('2d');
        let gradient = wbtcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[18].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[18].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createWBTCChart = new Chart(wbtcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[18].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printWBTCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const linkData = async () => {
        const response = await fetch(CryptoLocalData[19].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLINKChart;
    async function printLINKChart() {
        let { times, prices } = await linkData()
        let linkChart = document.getElementById('linkChart').getContext('2d');
        let gradient = linkChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[19].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[19].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLINKChart = new Chart(linkChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[19].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLINKChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const atomData = async () => {
        const response = await fetch(CryptoLocalData[20].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createATOMChart;
    async function printATOMChart() {
        let { times, prices } = await atomData()
        let atomChart = document.getElementById('atomChart').getContext('2d');
        let gradient = atomChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[20].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[20].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createATOMChart = new Chart(atomChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[20].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printATOMChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// -------------------- LEO - PAGE --------------------
    const leoData = async () => {
        const response = await fetch(CryptoLocalData[21].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLEOChart;
    async function printLEOChart() {
        let { times, prices } = await leoData()
        let leoChart = document.getElementById('leoChart').getContext('2d');
        let gradient = leoChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[21].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[21].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLEOChart = new Chart(leoChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[21].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLEOChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const etcData = async () => {
        const response = await fetch(CryptoLocalData[22].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createETCChart;
    async function printETCChart() {
        let { times, prices } = await etcData()
        let etcChart = document.getElementById('etcChart').getContext('2d');
        let gradient = etcChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[22].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[22].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createETCChart = new Chart(etcChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[22].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printETCChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const tonData = async () => {
        const response = await fetch(CryptoLocalData[23].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTONChart;
    async function printTONChart() {
        let { times, prices } = await tonData()
        let tonChart = document.getElementById('tonChart').getContext('2d');
        let gradient = tonChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[23].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[23].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTONChart = new Chart(tonChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[23].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTONChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- --------------------      



// --------------------  - PAGE --------------------
    const okbData = async () => {
        const response = await fetch(CryptoLocalData[24].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createOKBChart;
    async function printOKBChart() {
        let { times, prices } = await okbData()
        let okbChart = document.getElementById('okbChart').getContext('2d');
        let gradient = okbChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[24].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[24].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createOKBChart = new Chart(okbChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[24].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printOKBChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const xmrData = async () => {
        const response = await fetch(CryptoLocalData[25].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createXMRChart;
    async function printXMRChart() {
        let { times, prices } = await xmrData()
        let xmrChart = document.getElementById('xmrChart').getContext('2d');
        let gradient = xmrChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[25].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[25].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createXMRChart = new Chart(xmrChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[25].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printXMRChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const bchData = async () => {
        const response = await fetch(CryptoLocalData[26].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBCHChart;
    async function printBCHChart() {
        let { times, prices } = await bchData()
        let bchChart = document.getElementById('bchChart').getContext('2d');
        let gradient = bchChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[26].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[26].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBCHChart = new Chart(bchChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[26].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBCHChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const filData = async () => {
        const response = await fetch(CryptoLocalData[27].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createFILChart;
    async function printFILChart() {
        let { times, prices } = await filData()
        let filChart = document.getElementById('filChart').getContext('2d');
        let gradient = filChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[27].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[27].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createFILChart = new Chart(filChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[27].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printFILChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const aptData = async () => {
        const response = await fetch(CryptoLocalData[28].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAPTChart;
    async function printAPTChart() {
        let { times, prices } = await aptData()
        let aptChart = document.getElementById('aptChart').getContext('2d');
        let gradient = aptChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[28].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[28].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAPTChart = new Chart(aptChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[28].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAPTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const xlmData = async () => {
        const response = await fetch(CryptoLocalData[29].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createXLMChart;
    async function printXLMChart() {
        let { times, prices } = await xlmData()
        let xlmChart = document.getElementById('xlmChart').getContext('2d');
        let gradient = xlmChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[29].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[29].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createXLMChart = new Chart(xlmChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[29].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printXLMChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const ldoData = async () => {
        const response = await fetch(CryptoLocalData[30].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createLDOChart;
    async function printLDOChart() {
        let { times, prices } = await ldoData()
        let ldoChart = document.getElementById('ldoChart').getContext('2d');
        let gradient = ldoChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[30].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[30].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createLDOChart = new Chart(ldoChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[30].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printLDOChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const tusdData = async () => {
        const response = await fetch(CryptoLocalData[31].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTUSDChart;
    async function printTUSDChart() {
        let { times, prices } = await tusdData()
        let tusdChart = document.getElementById('tusdChart').getContext('2d');
        let gradient = tusdChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[31].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[31].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTUSDChart = new Chart(tusdChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[31].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTUSDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const nearData = async () => {
        const response = await fetch(CryptoLocalData[32].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createNEARChart;
    async function printNEARChart() {
        let { times, prices } = await nearData()
        let nearChart = document.getElementById('nearChart').getContext('2d');
        let gradient = nearChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[32].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[32].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createNEARChart = new Chart(nearChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[32].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printNEARChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const croData = async () => {
        const response = await fetch(CryptoLocalData[33].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createCROChart;
    async function printCROChart() {
        let { times, prices } = await croData()
        let croChart = document.getElementById('croChart').getContext('2d');
        let gradient = croChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[33].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[33].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createCROChart = new Chart(croChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[33].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printCROChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const vetData = async () => {
        const response = await fetch(CryptoLocalData[34].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createVETChart;
    async function printVETChart() {
        let { times, prices } = await vetData()
        let vetChart = document.getElementById('vetChart').getContext('2d');
        let gradient = vetChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[34].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[34].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createVETChart = new Chart(vetChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[34].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printVETChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const icpData = async () => {
        const response = await fetch(CryptoLocalData[35].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createICPChart;
    async function printICPChart() {
        let { times, prices } = await icpData()
        let icpChart = document.getElementById('icpChart').getContext('2d');
        let gradient = icpChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[35].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[35].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createICPChart = new Chart(icpChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[35].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printICPChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const apeData = async () => {
        const response = await fetch(CryptoLocalData[36].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAPEChart;
    async function printAPEChart() {
        let { times, prices } = await apeData()
        let apeChart = document.getElementById('apeChart').getContext('2d');
        let gradient = apeChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[36].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[36].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAPEChart = new Chart(apeChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[36].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAPEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const algoData = async () => {
        const response = await fetch(CryptoLocalData[37].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createALGOChart;
    async function printALGOChart() {
        let { times, prices } = await algoData()
        let algoChart = document.getElementById('algoChart').getContext('2d');
        let gradient = algoChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[37].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[37].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createALGOChart = new Chart(algoChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[37].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printALGOChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const qntData = async () => {
        const response = await fetch(CryptoLocalData[38].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createQNTChart;
    async function printQNTChart() {
        let { times, prices } = await qntData()
        let qntChart = document.getElementById('qntChart').getContext('2d');
        let gradient = qntChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[38].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[38].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createQNTChart = new Chart(qntChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[38].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printQNTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const stxData = async () => {
        const response = await fetch(CryptoLocalData[39].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSTXChart;
    async function printSTXChart() {
        let { times, prices } = await stxData()
        let stxChart = document.getElementById('stxChart').getContext('2d');
        let gradient = stxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[39].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[39].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSTXChart = new Chart(stxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[39].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSTXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const grtData = async () => {
        const response = await fetch(CryptoLocalData[40].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createGRTChart;
    async function printGRTChart() {
        let { times, prices } = await grtData()
        let grtChart = document.getElementById('grtChart').getContext('2d');
        let gradient = grtChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[40].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[40].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createGRTChart = new Chart(grtChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[40].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printGRTChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const ftmData = async () => {
        const response = await fetch(CryptoLocalData[41].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createFTMChart;
    async function printFTMChart() {
        let { times, prices } = await ftmData()
        let ftmChart = document.getElementById('ftmChart').getContext('2d');
        let gradient = ftmChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[41].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[41].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createFTMChart = new Chart(ftmChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[41].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printFTMChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const imxData = async () => {
        const response = await fetch(CryptoLocalData[42].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createIMXChart;
    async function printIMXChart() {
        let { times, prices } = await imxData()
        let imxChart = document.getElementById('imxChart').getContext('2d');
        let gradient = imxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[42].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[42].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createIMXChart = new Chart(imxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[42].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printIMXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const eosData = async () => {
        const response = await fetch(CryptoLocalData[43].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createEOSChart;
    async function printEOSChart() {
        let { times, prices } = await eosData()
        let eosChart = document.getElementById('eosChart').getContext('2d');
        let gradient = eosChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[43].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[43].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createEOSChart = new Chart(eosChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[43].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printEOSChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const manaData = async () => {
        const response = await fetch(CryptoLocalData[44].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createMANAChart;
    async function printMANAChart() {
        let { times, prices } = await manaData()
        let manaChart = document.getElementById('manaChart').getContext('2d');
        let gradient = manaChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[44].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[44].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createMANAChart = new Chart(manaChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[44].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printMANAChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const bitData = async () => {
        const response = await fetch(CryptoLocalData[45].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createBITChart;
    async function printBITChart() {
        let { times, prices } = await bitData()
        let bitChart = document.getElementById('bitChart').getContext('2d');
        let gradient = bitChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[45].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[45].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createBITChart = new Chart(bitChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[45].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printBITChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const xtzData = async () => {
        const response = await fetch(CryptoLocalData[46].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createXTZChart;
    async function printXTZChart() {
        let { times, prices } = await xtzData()
        let xtzChart = document.getElementById('xtzChart').getContext('2d');
        let gradient = xtzChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[46].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[46].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createXTZChart = new Chart(xtzChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[46].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printXTZChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const aaveData = async () => {
        const response = await fetch(CryptoLocalData[47].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAAVEChart;
    async function printAAVEChart() {
        let { times, prices } = await aaveData()
        let aaveChart = document.getElementById('aaveChart').getContext('2d');
        let gradient = aaveChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[47].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[47].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAAVEChart = new Chart(aaveChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[47].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAAVEChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const flowData = async () => {
        const response = await fetch(CryptoLocalData[48].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createFLOWChart;
    async function printFLOWChart() {
        let { times, prices } = await flowData()
        let flowChart = document.getElementById('flowChart').getContext('2d');
        let gradient = flowChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[48].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[48].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createFLOWChart = new Chart(flowChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[48].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printFLOWChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const egldData = async () => {
        const response = await fetch(CryptoLocalData[49].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createEGLDChart;
    async function printEGLDChart() {
        let { times, prices } = await egldData()
        let egldChart = document.getElementById('egldChart').getContext('2d');
        let gradient = egldChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[49].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[49].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createEGLDChart = new Chart(egldChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[49].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printEGLDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const thetaData = async () => {
        const response = await fetch(CryptoLocalData[50].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createTHETAChart;
    async function printTHETAChart() {
        let { times, prices } = await thetaData()
        let thetaChart = document.getElementById('thetaChart').getContext('2d');
        let gradient = thetaChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[50].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[50].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createTHETAChart = new Chart(thetaChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[50].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printTHETAChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const axsData = async () => {
        const response = await fetch(CryptoLocalData[51].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createAXSChart;
    async function printAXSChart() {
        let { times, prices } = await axsData()
        let axsChart = document.getElementById('axsChart').getContext('2d');
        let gradient = axsChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[51].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[51].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createAXSChart = new Chart(axsChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[51].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printAXSChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const cfxData = async () => {
        const response = await fetch(CryptoLocalData[52].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createCFXChart;
    async function printCFXChart() {
        let { times, prices } = await cfxData()
        let cfxChart = document.getElementById('cfxChart').getContext('2d');
        let gradient = cfxChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[52].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[52].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createCFXChart = new Chart(cfxChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[52].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printCFXChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const sandData = async () => {
        const response = await fetch(CryptoLocalData[53].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createSANDChart;
    async function printSANDChart() {
        let { times, prices } = await sandData()
        let sandChart = document.getElementById('sandChart').getContext('2d');
        let gradient = sandChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[53].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[53].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createSANDChart = new Chart(sandChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[53].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printSANDChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const kcsData = async () => {
        const response = await fetch(CryptoLocalData[54].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createKCSChart;
    async function printKCSChart() {
        let { times, prices } = await kcsData()
        let kcsChart = document.getElementById('kcsChart').getContext('2d');
        let gradient = kcsChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[54].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[54].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createKCSChart = new Chart(kcsChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[54].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printKCSChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const neoData = async () => {
        const response = await fetch(CryptoLocalData[55].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createNEOChart;
    async function printNEOChart() {
        let { times, prices } = await neoData()
        let neoChart = document.getElementById('neoChart').getContext('2d');
        let gradient = neoChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[55].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[55].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createNEOChart = new Chart(neoChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[55].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printNEOChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const usdpData = async () => {
        const response = await fetch(CryptoLocalData[56].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createUSDPChart;
    async function printUSDPChart() {
        let { times, prices } = await usdpData()
        let usdpChart = document.getElementById('usdpChart').getContext('2d');
        let gradient = usdpChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[56].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[56].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createUSDPChart = new Chart(usdpChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[56].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printUSDPChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const opData = async () => {
        const response = await fetch(CryptoLocalData[57].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createOPChart;
    async function printOPChart() {
        let { times, prices } = await opData()
        let opChart = document.getElementById('opChart').getContext('2d');
        let gradient = opChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[57].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[57].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createOPChart = new Chart(opChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[57].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printOPChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const rplData = async () => {
        const response = await fetch(CryptoLocalData[58].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createRPLChart;
    async function printRPLChart() {
        let { times, prices } = await rplData()
        let rplChart = document.getElementById('rplChart').getContext('2d');
        let gradient = rplChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[58].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[58].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createRPLChart = new Chart(rplChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[58].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printRPLChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const chzData = async () => {
        const response = await fetch(CryptoLocalData[59].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createCHZChart;
    async function printCHZChart() {
        let { times, prices } = await chzData()
        let chzChart = document.getElementById('chzChart').getContext('2d');
        let gradient = chzChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[59].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[59].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createCHZChart = new Chart(chzChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[59].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printCHZChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const crvData = async () => {
        const response = await fetch(CryptoLocalData[60].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createCRVChart;
    async function printCRVChart() {
        let { times, prices } = await crvData()
        let crvChart = document.getElementById('crvChart').getContext('2d');
        let gradient = crvChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[60].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[60].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createCRVChart = new Chart(crvChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[60].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printCRVChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const minaData = async () => {
        const response = await fetch(CryptoLocalData[61].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createMINAChart;
    async function printMINAChart() {
        let { times, prices } = await minaData()
        let minaChart = document.getElementById('minaChart').getContext('2d');
        let gradient = minaChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[61].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[61].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createMINAChart = new Chart(minaChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[61].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printMINAChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------
    const klayData = async () => {
        const response = await fetch(CryptoLocalData[62].graph);
        const json = await response.json();
        const data = json.Data.Data
        const times = data.map(obj => obj.time)
        const prices = data.map(obj => obj.high)
        return {
            times,
            prices
        }
    }
	// 
	let createKLAYChart;
    async function printKLAYChart() {
        let { times, prices } = await klayData()
        let klayChart = document.getElementById('klayChart').getContext('2d');
        let gradient = klayChart.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${CryptoLocalData[62].color}.55)`);
        gradient.addColorStop(.425, `rgba(${CryptoLocalData[62].color}.1)`);
        Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
        Chart.defaults.global.defaultFontSize = 12;
        createKLAYChart = new Chart(klayChart, {
            type: 'line',
            data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: `rgba(${CryptoLocalData[62].color} 1)`,
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
            },
            options: {
                title: {display: false, text: 'Binance', fontSize: 35},
                legend: {display: false},
				layout: {
                    padding: {left: 0, right: 0, top: 0, bottom: 0}
                },
                scales: {
                    xAxes: [{display: false, gridLines: {}}],
                    yAxes: [{display: false, gridLines: {}}]
                },
                tooltips: {
                    callbacks: {
                    //This removes the tooltip title
                    title: function() {}
                },
                    //this removes legend color
                    displayColors: false,
                    yPadding: 10,
                    xPadding: 10,
                    position: 'nearest',
                    caretSize: 10,
                    backgroundColor: 'rgba(255,255,255,1)',
                    bodyFontSize: 15,
                    bodyFontColor: '#303030' 
                }
            }
        });
    }; printKLAYChart()
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 