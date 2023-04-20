// --------------------  - PAGE --------------------    
    var cryptoCompare = 'd6383c0ff828ba9beb7c3a84ad0171e917427f3c303c070bdebd524d6d046692';
    //  
    var CryptoLocalData = [
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '247, 147, 26,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "01",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "Bitcoin",
            network: "Bitcoin",
            price: [],
            price_comma: [],
            qr: "Bitcoin",
            query: [],
            query_change: [],
            symbol: "BTC",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "15pVK1vyF8MfV4zg9GSaKTPcZs4NwsvuDS"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD&api_key=${cryptoCompare}`,
            color: '18, 16, 11,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "02",
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "Ethereum",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "ETH",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '38, 161, 123,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "03",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "Tether",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "USDT",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"// Gone5
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "04",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "BNB",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "BNB",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '38, 116, 201,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "05",
            link_block: [],
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "USD Coin",
            network: "USD Coin (ERC20)",
            price: [],
            price_comma: [],
            qr: "USDCoin(ERC20)",
            query: [],
            query_change: [],
            symbol: "USDC",
            tip: 0.0045,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "B9xnx2MtNrXtvqJcMaSozdN5j1onke5VaTEGsWLGHowX"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD&api_key=${cryptoCompare}`,
            color: '20, 20, 20,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XRP&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "06",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",// Gone7
            name: "XRP",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "XRP",
            tip: 0.0005,// Gone0
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 51, 173,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ADA&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "07",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Cardano",
            network: "Cardano",
            price: [],
            price_comma: [],
            qr: "Cardano",
            query: [],
            query_change: [],
            symbol: "ADA",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "addr1v8r2x66vhc94mw02qfan3924nhd3llk5llwjh4gvw6ldd9sss5tkx"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MATIC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '130, 71, 229,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=MATIC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "08",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Polygon",
            network: "Polygon",
            price: [],
            price_comma: [],
            qr: "Polygon",
            query: [],
            query_change: [],
            symbol: "MATIC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '249, 195, 37,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOGE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "09",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Dogecoin",
            network: "dogecoin",
            price: [],
            price_comma: [],
            qr: "dogecoin",
            query: [],
            query_change: [],
            symbol: "DOGE",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "DGNXhZuH6Aaj61yo6hPM8azGBgghjp4TaV"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=USD&api_key=${cryptoCompare}`,
            color: '220, 31, 255,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "10",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Solana",
            network: "Solana",
            price: [],
            price_comma: [],
            qr: "Solana",
            query: [],
            query_change: [],
            symbol: "SOL",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "6VyxiPQLgBgAFescvhiFHhxrXroQHK6bjbgEC7X637fL"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '243, 186, 47,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BUSD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "11",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Binance USD",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "BUSD",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '230, 0, 122,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "12",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Polkadot",
            network: "Polkadot",
            price: [],
            price_comma: [],
            qr: "Polkadot",
            query: [],
            query_change: [],
            symbol: "DOT",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "131mUv893HXPFRXgiJcDFpxGRrpX9CL9yUM1gG4aVeS7mmTP"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SHIB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '200, 24, 20,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=SHIB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "13",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Shiba Inu",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "SHIB",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '52, 93, 157,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "14",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Litecoin",
            network: "Litecoin",
            price: [],
            price_comma: [],
            qr: "Litecoin",
            query: [],
            query_change: [],
            symbol: "LTC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "LVvwpeqnVvfJ6vNYhBWeqbRJzaQo4GkEJs"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TRX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '236, 8, 41,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TRX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "15",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "TRON",
            network: "Tron (TRC20)",
            price: [],
            price_comma: [],
            qr: "Tron(TRC20)",
            query: [],
            query_change: [],
            symbol: "TRX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "TNcYLbHxxaZHqscg48wrsRZnhWii2znJqo"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AVAX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '232, 65, 66,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AVAX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "16",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Avalanche",
            network: "Avalanche",
            price: [],
            price_comma: [],
            qr: "Avalanche",
            query: [],
            query_change: [],
            symbol: "AVAX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "X-avax13vfwcxlmya4wwewc3yc8auf2klzxegvklmuy9u"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DAI&tsyms=USD&api_key=${cryptoCompare}`,
            color: '250, 177, 32,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=DAI&tsym=USD&limit=119&api_key=${cryptoCompare}`,            img: "17",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Dai",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "DAI",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=UNI&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 0, 122,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=UNI&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "18",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Uniswap",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "UNI",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=WBTC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '90, 85, 100,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=WBTC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            volume: [],
            link_home: [],
            market: [],
            market_change: [],
            img: "19",
            market_change_percent: [],
            mini: "0.0",
            name: "Wrapped Bitcoin",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "WBTC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LINK&tsyms=USD&api_key=${cryptoCompare}`,
            color: '55, 91, 210,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LINK&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "20",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Chainlink",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "LINK",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ATOM&tsyms=USD&api_key=${cryptoCompare}`,
            color: '16, 23, 71,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "21",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Cosmos",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "ATOM",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LEO&tsyms=USD&api_key=${cryptoCompare}`,
            color: '16, 23, 71,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LEO&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "22",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "UNUS SED LEO",
            network: "Bitfinex LEO Token (ERC20)",
            price: [],
            price_comma: [],
            qr: "BitfinexLEOToken(ERC20)",
            query: [],
            query_change: [],
            symbol: "LEO",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETC&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 159, 66,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETC&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "23",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Ethereum Classic",
            network: "Ethereum Classic",
            price: [],
            price_comma: [],
            qr: "EthereumClassic",
            query: [],
            query_change: [],
            symbol: "ETC",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TON&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 172, 238,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TON&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "24",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Wrapped Toncoin",
            network: "Wrapped TON Coin (BEP20)",
            price: [],
            price_comma: [],
            qr: "WrappedTONCoin(BEP20)",
            query: [],
            query_change: [],
            symbol: "TON",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=OKB&tsyms=USD&api_key=${cryptoCompare}`,
            color: '32, 95, 236,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=OKB&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "25",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "OKB",
            network: "OKB (ERC20)",
            price: [],
            price_comma: [],
            qr: "OKB(ERC20)",
            query: [],
            query_change: [],
            symbol: "OKB",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XMR&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 102, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XMR&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "26",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Monero",
            network: "Monero",
            price: [],
            price_comma: [],
            qr: "Monero",
            query: [],
            query_change: [],
            symbol: "XMR",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "84mM7qeQ4cF2ctbecagcm59CCyuYGDaZ2UjHCB7Uc78V7jKoPZ5K4Gc12MpBVrfbDQTPbFWbU5rqg26gjGqtpkaj8YNiByx"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BCH&tsyms=USD&api_key=${cryptoCompare}`,
            color: '141, 195, 81,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BCH&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "27",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Bitcoin Cash",
            network: "Bitcoin Cash",
            price: [],
            price_comma: [],
            qr: "BitcoinCash",
            query: [],
            query_change: [],
            symbol: "BCH",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "15pVK1vyF8MfV4zg9GSaKTPcZs4NwsvuDS"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=FIL&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 144, 255,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=FIL&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "28",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Filecoin",
            network: "Filecoin",
            price: [],
            price_comma: [],
            qr: "Filecoin",
            query: [],
            query_change: [],
            symbol: "FIL",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "f12zvybypjdmpe5tloyn4r6eh4wvtwpr3zfdcmm3i"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=APT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=APT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "29",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Aptos",
            network: "APT",
            price: [],
            price_comma: [],
            qr: "APT",
            query: [],
            query_change: [],
            symbol: "APT",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xa6bc0c4ab9050708ce54fc6d536b94acd6eda943ea4495da68a8a4da96b78be3"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XLM&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XLM&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "30",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Stellar",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "XLM",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LDO&tsyms=USD&api_key=${cryptoCompare}`,
            color: '75, 140, 233,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=LDO&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "31",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Lido DAO",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "LDO",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TUSD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '26, 90, 255,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=TUSD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "32",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "TrueUSD",
            network: "TrueUSD (BEP20)",
            price: [],
            price_comma: [],
            qr: "TrueUSD(BEP20)",
            query: [],
            query_change: [],
            symbol: "TUSD",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=NEAR&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=NEAR&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "34",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "NEAR Protocol",
            network: "NEAR Protocol",
            price: [],
            price_comma: [],
            qr: "NEARProtocol",
            query: [],
            query_change: [],
            symbol: "NEAR",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "25b19eab27a907f7e31786add7de818b49bed6377b01f3388b08605534134146"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CRO&tsyms=USD&api_key=${cryptoCompare}`,
            color: '16, 63, 104,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=CRO&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "35",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Cronos",
            network: "Cronos Chain (CRO)",
            price: [],
            price_comma: [],
            qr: "CronosChain(CRO)",
            query: [],
            query_change: [],
            symbol: "CRO",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=VET&tsyms=USD&api_key=${cryptoCompare}`,
            color: '24, 186, 253,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=VET&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "36",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Vechain",
            network: "Vechain",
            price: [],
            price_comma: [],
            qr: "Vechain",
            query: [],
            query_change: [],
            symbol: "VET",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ICP&tsyms=USD&api_key=${cryptoCompare}`,
            color: '127,35,133,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ICP&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "37",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Internet Computer",
            network: "Internet Computer",
            price: [],
            price_comma: [],
            qr: "InternetComputer",
            query: [],
            query_change: [],
            symbol: "ICP",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "2d325da54d44d83b366f89aefc568bb2fab56b4b89cd34254589413dc0fe2ae5"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=APE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '18, 65, 172,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=APE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "38",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Apecoin",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "APE",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ALGO&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=ALGO&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "39",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Algorand",
            network: "Algorand",
            price: [],
            price_comma: [],
            qr: "Algorand",
            query: [],
            query_change: [],
            symbol: "ALGO",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "BYV6LAEVYXEJ357Z6WT4AHRFX4GVW47O27DWOJVNHKKUHV2QG6LY7HMJE4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=QNT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=QNT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "40",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Quant",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "QNT",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=STX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '85, 70, 255,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=STX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "41",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Stacks",
            network: "Stox (ERC20)",
            price: [],
            price_comma: [],
            qr: "Stox(ERC20)",
            query: [],
            query_change: [],
            symbol: "STX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=GRT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '103, 71, 237,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=GRT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "42",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "The Graph",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "GRT",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=FTM&tsyms=USD&api_key=${cryptoCompare}`,
            color: '19, 181, 236,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTM&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "43",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Fantom",
            network: "Fantom",
            price: [],
            price_comma: [],
            qr: "Fantom",
            query: [],
            query_change: [],
            symbol: "FTM",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=IMX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '23, 181, 203,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=IMX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "44",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Immutable",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "IMX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=EOS&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 0, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=EOS&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "45",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "EOS",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "EOS",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },

        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MANA&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 45, 85,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=MANA&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "46",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Decentraland",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "MANA",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BIT&tsyms=USD&api_key=${cryptoCompare}`,
            color: '193, 255, 60,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BIT&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "47",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "BitDAO",
            network: "BitDAO (ERC20)",
            price: [],
            price_comma: [],
            qr: "BitDAO(ERC20)",
            query: [],
            query_change: [],
            symbol: "BIT",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XTZ&tsyms=USD&api_key=${cryptoCompare}`,
            color: '44, 125, 247,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=XTZ&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "48",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Tezos",
            network: "Tezos",
            price: [],
            price_comma: [],
            qr: "Tezos",
            query: [],
            query_change: [],
            symbol: "XTZ",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "tz2LzRSH1ThdQsGrNhPFekPviWE5MMCkFGex"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AAVE&tsyms=USD&api_key=${cryptoCompare}`,
            color: '182, 80, 158,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AAVE&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "49",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Aave",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "AAVE",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=FLOW&tsyms=USD&api_key=${cryptoCompare}`,
            color: '22, 255, 153,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=FLOW&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "50",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Flow",
            network: "FLOW",
            price: [],
            price_comma: [],
            qr: "FLOW",
            query: [],
            query_change: [],
            symbol: "FLOW",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x2bb8e3ac7c2beba7"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=EGLD&tsyms=USD&api_key=${cryptoCompare}`,
            color: '13, 1, 43,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=EGLD&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "51",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "MultiversX",
            network: "MultiverseX eGold",
            price: [],
            price_comma: [],
            qr: "MultiverseXeGold",
            query: [],
            query_change: [],
            symbol: "EGLD",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "erd10mmzrdm8qn5rwm09j34028e3ajpt6k4daa7j7kdpmczth98kfd8q8fkd2t"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=THETA&tsyms=USD&api_key=${cryptoCompare}`,
            color: '43, 184, 230,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=THETA&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "52",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Theta Network",
            network: "Theta Token",
            price: [],
            price_comma: [],
            qr: "ThetaToken",
            query: [],
            query_change: [],
            symbol: "THETA",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AXS&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 86, 214,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=AXS&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "53",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Axie Infinity",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "AXS",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CFX&tsyms=USD&api_key=${cryptoCompare}`,
            color: '56, 161, 219,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=CFX&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "54",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Conflux",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "CFX",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SAND&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 132, 255,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=SAND&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "55",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "The Sandbox",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "SAND",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=KCS&tsyms=USD&api_key=${cryptoCompare}`,
            color: '35, 175, 145,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=KCS&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "56",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "KuCoin Token",
            network: "Kucoin Community Chain (KCS)",
            price: [],
            price_comma: [],
            qr: "KucoinCommunityChain(KCS)",
            query: [],
            query_change: [],
            symbol: "KCS",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0x78fAe986E82D85fc456c6d6B70e714dF79313CF4"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=NEO&tsyms=USD&api_key=${cryptoCompare}`,
            color: '0, 229, 153,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=NEO&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "57",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Neo",
            network: "Neo Legacy",
            price: [],
            price_comma: [],
            qr: "NeoLegacy",
            query: [],
            query_change: [],
            symbol: "NEO",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "AcfAxet1L7wwEvzLh4VekVQzPvynbrVkTB"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDP&tsyms=USD&api_key=${cryptoCompare}`,
            color: '47, 130, 96,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=USDP&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "58",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Pax Dollar",
            network: "BNB Smart Chain (BEP20)",
            price: [],
            price_comma: [],
            qr: "BNBSmartChain(BEP20)",
            query: [],
            query_change: [],
            symbol: "USDP",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=OP&tsyms=USD&api_key=${cryptoCompare}`,
            color: '235, 8, 40,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=OP&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "59",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Optimism",
            network: "Optimism",
            price: [],
            price_comma: [],
            qr: "Optimism",
            query: [],
            query_change: [],
            symbol: "OP",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=RPL&tsyms=USD&api_key=${cryptoCompare}`,
            color: '254, 110, 90,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=RPL&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "60",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Rocket Pool",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "RPL",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CHZ&tsyms=USD&api_key=${cryptoCompare}`,
            color: '205, 1, 36,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=CHZ&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "61",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Chilliz",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "CHZ",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=CRV&tsyms=USD&api_key=${cryptoCompare}`,
            color: '255, 72, 0,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=CRV&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "63",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Curve DAO Token",
            network: "Ethereum (ERC20)",
            price: [],
            price_comma: [],
            qr: "Ethereum(ERC20)",
            query: [],
            query_change: [],
            symbol: "CRV",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MINA&tsyms=USD&api_key=${cryptoCompare}`,
            color: '199, 105, 101,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=MINA&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "64",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Mina",
            network: "Mina",
            price: [],
            price_comma: [],
            qr: "Mina",
            query: [],
            query_change: [],
            symbol: "MINA",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "B62qmseZhXqmWLHTHJgSJVZeXDoHyDtUBpeG2zMqwDqcDLXoq6JW9DS"
        },
        {
            balance: "0.00000",
            cap: [],
            code: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=KLAY&tsyms=USD&api_key=${cryptoCompare}`,
            color: '79, 71, 59,',
            graph: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=KLAY&tsym=USD&limit=119&api_key=${cryptoCompare}`,
            img: "65",
            link_home: [],
            market: [],
            market_change: [],
            market_change_percent: [],
            mini: "0.0",
            name: "Klaytn",
            network: "Klaytn",
            price: [],
            price_comma: [],
            qr: "Klaytn",
            query: [],
            query_change: [],
            symbol: "KLAY",
            tip: 0.0005,
            total_supply: [],
            circle_supply: [],
            volume: [],
            wallet: "0xbabefad9f9d50446556246407a4bb1e668f1df91"
        },
    ];
    // -------------------- 
//  -------------------- -------------------- -------------------- 




// --------------------  - PAGE --------------------         
    //  
    var TokenPage = 0;
    function SendPage(element)  {
        TokenPage = element.dataset.changeId;
        HomeToToken();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 





// --------------------  - PAGE --------------------         
    // 
    var hmepgDisplayToggle = [];
    
    function openToggle(open) {
        hmepgDisplayToggle.push(open);
    }
    function closeToggle(close) {
        var index = hmepgDisplayToggle.indexOf(close);
        hmepgDisplayToggle.splice(index, 1);
    }
    function hmepgImg(){
        var element = document.getElementById("hmepg-display-background");
        if (hmepgDisplayToggle.length != 0){
            element.style.display = "none";
        }
        else{
            element.style.display = "flex";
        }
    }

    function ToggleDisplay(element)  {
        var empId = element.dataset.employeeId;
        //check if the number is even
        if(hmepgDisplayToggle.includes(empId)) {
            closeToggle(empId);
        }
        // if the number is odd
        else {
            openToggle(empId);
        };

        let hmepgDisplay = ``;
        for (let i = 0; i < hmepgDisplayToggle.length; i++) {
            hmepgDisplay += `
                <!-- Token container -->
                <div class="token-main-wrap" onclick="hmepgchangeIndex(this)" data-hmepage-id="${ hmepgDisplayToggle.at(i) }">
                    <!-- Token image container -->
                    <div class="hmepg-token-img-wrap">
                        <img src="img/token/${ CryptoLocalData[hmepgDisplayToggle.at(i)].img }.png" class="img-fluid">
                    </div>
                    
                    <!-- Token container -->
                    <div class="hmepg-sub-token-left-wrap cursor">
                        <div class="hmepg-main-token-con hmepg-main-token-con-pad">
                            <!-- Left container -->
                            <div class="hmepg-sub-token-left-con">
                                <span class="hmepg-token-name line-height one-line">${ CryptoLocalData[hmepgDisplayToggle.at(i)].name }</span>
                                <span class="line-height">
                                    <span class="hmepg-token-price">$${ CryptoLocalData[hmepgDisplayToggle.at(i)].price_comma.slice(-1)[0] }</span>
                                    <span class="hmepg-token-percent">${ CryptoLocalData[hmepgDisplayToggle.at(i)].query.slice(-1)[0] }%</span>
                                </span>
                            </div>
                            <!-- Right container-->
                            <div class="hmepg-sub-token-right-con one-line">
                                0 ${ CryptoLocalData[hmepgDisplayToggle.at(i)].symbol }
                            </div>
                        </div>
                        
                        <!-- Token line -->
                        <div class="hmepg-sub-token-line"></div>
                    </div>
                </div>
            `
            
        }
        document.querySelector("hmepgloopscript").innerHTML = `
            ${hmepgDisplay}
        `;


        hmepgImg()
    };
    // -------------------- 
//  -------------------- -------------------- --------------------  

    
    


// --------------------  - PAGE --------------------         
    //  
    function hmepgchangeIndex(element) {
        TokenPage = Number(element.dataset.hmepageId);
        HomeToToken();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    function SendToken(element)  {
        TokenPage = element.dataset.sendId;
        HomeToSend();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    function ReceiveToken(element)  {
        TokenPage = element.dataset.receiveId;
        HomeToReceive();
        hmepgaddToken();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

    
    


// --------------------  - PAGE --------------------         
    //  
    var convertChoice = 1;
    var swapPage = 0;
    var from = 0;
    var to = 3;
    function From(){
        convertChoice = 1;
        document.getElementById("swap-absolute").style.left = "0.25em";
        document.getElementById("swap-absolute").style.right = "auto";
        ConvertToConvert();
    };
    function To(){
        convertChoice = 2;
        document.getElementById("swap-absolute").style.left = "auto";
        document.getElementById("swap-absolute").style.right = "0.25em";
        ConvertToConvert();
    };
    function convertSwapToken(index)  {
        swapPage = index.dataset.swapId;
        console.log(swapPage);
        if (convertChoice === 1) {
            from = swapPage;
            document.getElementById("convert-from-token-txt").innerHTML = `
                <div class="convertselect-token-img">
                    <img src="img/token/${ CryptoLocalData[from].img }.png" class="img-fluid page-refresh">
                </div>
                <span  class="convertselect-token-txt">${ CryptoLocalData[from].symbol }</span>
            `;
            document.getElementById("red").innerHTML = `
                Minimum Amount: ${ CryptoLocalData[from].mini } ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-from-img").innerHTML = `
                <img src="img/token/${ CryptoLocalData[from].img }.png" class="img-fluid page-refresh">
            `;
            document.getElementById("convert-from-selectbtn").innerHTML = `
                ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-available-txt").innerHTML = `
                Available Balance: ${ CryptoLocalData[from].balance } ${ CryptoLocalData[from].symbol }
            `;
            document.getElementById("convert-form-bottom").innerHTML = `
                1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${(CryptoLocalData[from].price.slice(-1)[0] / CryptoLocalData[to].price.slice(-1)[0]).toFixed(5)}</span> ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-convert-btn-id").innerHTML = `
                Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }
            `;
        } else {
            to = swapPage;
            document.getElementById("convert-to-token-txt").innerHTML = `
                <div class="convertselect-token-img">
                    <img src="img/token/${ CryptoLocalData[to].img }.png" class="img-fluid page-refresh">
                </div>
                <span class="convertselect-token-txt">${ CryptoLocalData[to].symbol }</span>
            `;
            document.getElementById("convert-to-img").innerHTML = `
                <img src="img/token/${ CryptoLocalData[to].img }.png" class="img-fluid page-refresh">
            `;
            document.getElementById("convert-to-selectbtn").innerHTML = `
                ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-form-bottom").innerHTML = `
                1 ${ CryptoLocalData[from].symbol } <span style="padding: 0 0.5em">≈</span> <span id="convertResult" style="padding-right: 0.25em"> ${(CryptoLocalData[from].price.slice(-1)[0] / CryptoLocalData[to].price.slice(-1)[0]).toFixed(5)}</span> ${ CryptoLocalData[to].symbol }
            `;
            document.getElementById("convert-convert-btn-id").innerHTML = `
                Convert ${ CryptoLocalData[from].symbol } to ${ CryptoLocalData[to].symbol }
            `;
        };
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 

   

// --------------------  - PAGE --------------------         
    //  
    function addNum(v) {
        document.getElementById("from-input").value += v;
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
    };
    function clearNum() {
        document.getElementById("from-input").value = document.getElementById("from-input").value.substr(0,document.getElementById("from-input").value.length-1);
        var final = Number(document.getElementById("from-input").value) * (Number(CryptoLocalData[from].price) / Number(CryptoLocalData[to].price));
        document.getElementById("convert-amount").innerHTML = document.getElementById("convert-amount").textContent = final.toFixed(5);
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    class BottomNav extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
                <!-- BOTTOM NAVIGATION MENU STRUCTURE -->
                <div class="bottom-nav-wrap">
                    <div class="container">
                        <div class="row">
                            <!-- Home --> 
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="homeNav()">
                                    <div class="bottom-nav-btn-img" id="bottom-nav-left">
                                        <img src="img/home.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- Setting -->
                            <div class="col-6">
                                <div class="bottom-nav-btn" onclick="setNav()">
                                    <div class="bottom-nav-btn-img" id="bottom-nav-right">
                                        <img src="img/settings.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div
                    </div>
                </div>
                <!--  -------------------- -->
            `;
        }
    }
    
    customElements.define("bottom-nav-page", BottomNav);
     
    //   
    function homeNav() {
        MenuToHome();
        document.getElementById("bottom-nav-left").style.background = "#f3ba2f39";
        document.getElementById("bottom-nav-right").style.background = "transparent";
    }  
    function setNav() {
        HomeToSettings();
        document.getElementById("bottom-nav-left").style.background = "transparent";
        document.getElementById("bottom-nav-right").style.background = "#f3ba2f39";
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    function ReceiveChanger() {
        document.getElementById("receive-header-txt").innerHTML = `
            Receive ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("receive-header-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
        `;
        document.getElementById("receive-wallet-address-un").innerHTML = `
            ${ CryptoLocalData[TokenPage].name }
        `;
        document.getElementById("receive-qr-code-v").innerHTML = `
            <img src="img/qrimg/${ CryptoLocalData[TokenPage].qr }.png" class="img-fluid">
        `;
        document.getElementById("receive-wallet-address").innerHTML = `
            ${ CryptoLocalData[TokenPage].wallet }
        `;
        document.getElementById("receive-network").innerHTML = `
            NETWORK: ${ CryptoLocalData[TokenPage].network }
        `;
        document.getElementById("receive-send-txt").innerHTML = `
            Go to Send ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("receive-note-2").innerHTML = `
            Send only ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to the Network "${ CryptoLocalData[TokenPage].network }".<br>
            Failure to do so, may result in permanent loss!
        `;
    }
    // -------------------- 

    //  
    function tokenmainChanger() {
        document.getElementById("token-ccc-header-txt").innerHTML = `
            ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol })
        `;
        document.getElementById("token-ccc-price-txt").innerHTML = `
            $${ CryptoLocalData[TokenPage].price_comma }
        `;
        document.getElementById("token-ccc-rate-txt").innerHTML = `
            ${ CryptoLocalData[TokenPage].query }%
        `;
        document.getElementById("token-ccc-logo-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid page-refresh">
        `;
        document.getElementById("token-ccc-exchange-rate").innerHTML = `
            ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol } ≈ $ <label>0.00</label>
        `;
        document.getElementById("token-ccc-transfer-con").innerHTML = `
            <span class="token-transfer">In: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("token-vvv-transfer-con").innerHTML = `
            <span class="token-transfer">Out: </span>0.00000 ${ CryptoLocalData[TokenPage].symbol }
        `;
    }
    // -------------------- 

    //  
    function sendmainChanger() {
        document.getElementById("send-sss-header-txt").innerHTML = `
            Send ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-sss-header-img").innerHTML = `
            <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
        `;
        document.getElementById("send-vvv-input-absolute").innerHTML = `
            ${ CryptoLocalData[TokenPage].name } Address
        `;
        document.getElementById("send-sss-amount-div").innerHTML = `
        ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-zzz-input-absolute").innerHTML = `
            Send Amount (${ CryptoLocalData[TokenPage].symbol })
        `;
        document.getElementById("send-zzz-xxx-ccc").innerHTML = `
            <span style="padding-right: 0.5em;">${ CryptoLocalData[TokenPage].symbol } Balance: </span> ${ CryptoLocalData[TokenPage].balance } ${ CryptoLocalData[TokenPage].symbol }
        `;
        document.getElementById("send-zzz-convert-lg-txt").innerHTML = `
            Total≈ <div id="total-token" class="one-line">0.0</div> ${ CryptoLocalData[TokenPage].symbol }/<div id="total-curr" class="one-line">0.0</div> USD
        `;
        document.getElementById("receive-send-zzz-txt").innerHTML = `
            Go to Receive ${ CryptoLocalData[TokenPage].symbol }
        `;
    }
    // -------------------- 

    
    function SendChanger() {
        document.getElementById("receive-network").innerHTML = `
            NETWORK: ${ CryptoLocalData[TokenPage].network }
        `;
        document.getElementById("receive-note-2").innerHTML = `
            Send only ${ CryptoLocalData[TokenPage].name } (${ CryptoLocalData[TokenPage].symbol }) to the Network "${ CryptoLocalData[TokenPage].network }".<br>
            Failure to do so, may result in permanent loss!
        `;
    };
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE --------------------         
    //  
    function copyTextTokenV() {
        var $copyText = document.getElementById("receive-wallet-address").innerText;
        var button = document.getElementById("token-page-copy");
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
    function copyTextTokenUn() {
        var $copyText = document.getElementById("receive-wallet-address-un").innerText;
        var button = document.getElementById("token-page-copy");
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
    function copyTokenOption() {
        if (isVerify === true) {
            copyTextTokenV();
        } else{
            copyTextTokenUn();
        }
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 




// --------------------  - PAGE --------------------         
    //  
    function tabUp(){
        document.getElementById("tab-up").style.background = "#f3ba2f39";
        document.getElementById("tab-down").style.background = "transparent";
        MenuToHome();
    }
    function tabDown() {
        document.getElementById("tab-up").style.background = "transparent";
        document.getElementById("tab-down").style.background = "#f3ba2f39";
        HomeToSettings();
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 



// --------------------  - PAGE -------------------- 
    //  
    function resUp(){
        document.getElementById("res-up").style.background = "#f3ba2f39";
        document.getElementById("res-down").style.background = "transparent";
        MenuToHome();
    }
    function resDown() {
        document.getElementById("res-up").style.background = "transparent";
        document.getElementById("res-down").style.background = "#f3ba2f39";
        HomeToSettings();
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 
//  -------------------- -------------------- -------------------- 










// --------------------  - PAGE -------------------- 
    // Bitcoin
    fetch(CryptoLocalData[0].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[0].price_comma.push(Number(response.RAW.BTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[0].price.push(response.RAW.BTC.USD.PRICE.toFixed(2));
            CryptoLocalData[0].query_change.push(Number(response.RAW.BTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[0].query.push(Number(response.RAW.BTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[0].cap.push(Number(response.RAW.BTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market.push(Number(response.RAW.BTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[0].volume.push(Number(response.RAW.BTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market_change.push(Number(response.RAW.BTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[0].market_change_percent.push(Number(response.RAW.BTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].total_supply.push(Number(response.RAW.BTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[0].circle_supply.push(Number(response.RAW.BTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Ethereum
    fetch(CryptoLocalData[1].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[1].price_comma.push(Number(response.RAW.ETH.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[1].price.push(response.RAW.ETH.USD.PRICE.toFixed(2));
            CryptoLocalData[1].query_change.push(Number(response.RAW.ETH.USD.CHANGE24HOUR.toFixed(2))).toLocaleString();
            CryptoLocalData[1].query.push(Number(response.RAW.ETH.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[1].cap.push(Number(response.RAW.ETH.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market.push(Number(response.RAW.ETH.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[1].volume.push(Number(response.RAW.ETH.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market_change.push(Number(response.RAW.ETH.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[1].market_change_percent.push(Number(response.RAW.ETH.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].total_supply.push(Number(response.RAW.ETH.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[1].circle_supply.push(Number(response.RAW.ETH.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tether
    fetch(CryptoLocalData[2].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[2].price_comma.push(Number(response.RAW.USDT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[2].price.push(response.RAW.USDT.USD.PRICE.toFixed(2));
            CryptoLocalData[2].query_change.push(Number(response.RAW.USDT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].query.push(Number(response.RAW.USDT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[2].cap.push(Number(response.RAW.USDT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market.push(Number(response.RAW.USDT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[2].volume.push(Number(response.RAW.USDT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change.push(Number(response.RAW.USDT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[2].market_change_percent.push(Number(response.RAW.USDT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].total_supply.push(Number(response.RAW.USDT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[2].circle_supply.push(Number(response.RAW.USDT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // BNB
    fetch(CryptoLocalData[3].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[3].price_comma.push(Number(response.RAW.BNB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[3].price.push(response.RAW.BNB.USD.PRICE.toFixed(2));
            CryptoLocalData[3].query_change.push(Number(response.RAW.BNB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].query.push(Number(response.RAW.BNB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[3].cap.push(Number(response.RAW.BNB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market.push(Number(response.RAW.BNB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[3].volume.push(Number(response.RAW.BNB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change.push(Number(response.RAW.BNB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[3].market_change_percent.push(Number(response.RAW.BNB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].total_supply.push(Number(response.RAW.BNB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[3].circle_supply.push(Number(response.RAW.BNB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // USD Coin
    fetch(CryptoLocalData[4].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[4].price_comma.push(Number(response.RAW.USDC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[4].price.push(response.RAW.USDC.USD.PRICE.toFixed(2));
            CryptoLocalData[4].query_change.push(Number(response.RAW.USDC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].query.push(Number(response.RAW.USDC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[4].cap.push(Number(response.RAW.USDC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market.push(Number(response.RAW.USDC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[4].volume.push(Number(response.RAW.USDC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change.push(Number(response.RAW.USDC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[4].market_change_percent.push(Number(response.RAW.USDC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].total_supply.push(Number(response.RAW.USDC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[4].circle_supply.push(Number(response.RAW.USDC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // XPR
    fetch(CryptoLocalData[5].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[5].price_comma.push(Number(response.RAW.XRP.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[5].price.push(response.RAW.XRP.USD.PRICE.toFixed(2));
            CryptoLocalData[5].query_change.push(Number(response.RAW.XRP.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].query.push(Number(response.RAW.XRP.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[5].cap.push(Number(response.RAW.XRP.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market.push(Number(response.RAW.XRP.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[5].volume.push(Number(response.RAW.XRP.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change.push(Number(response.RAW.XRP.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[5].market_change_percent.push(Number(response.RAW.XRP.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].total_supply.push(Number(response.RAW.XRP.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[5].circle_supply.push(Number(response.RAW.XRP.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
	// -------------------- 

    // Cardano
    fetch(CryptoLocalData[6].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[6].price_comma.push(Number(response.RAW.ADA.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[6].price.push(response.RAW.ADA.USD.PRICE.toFixed(2));
            CryptoLocalData[6].query_change.push(Number(response.RAW.ADA.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].query.push(Number(response.RAW.ADA.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[6].cap.push(Number(response.RAW.ADA.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market.push(Number(response.RAW.ADA.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[6].volume.push(Number(response.RAW.ADA.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change.push(Number(response.RAW.ADA.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[6].market_change_percent.push(Number(response.RAW.ADA.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].total_supply.push(Number(response.RAW.ADA.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[6].circle_supply.push(Number(response.RAW.ADA.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------
    
    // Polygon
    fetch(CryptoLocalData[7].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[7].price_comma.push(Number(response.RAW.MATIC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[7].price.push(response.RAW.MATIC.USD.PRICE.toFixed(2));
            CryptoLocalData[7].query_change.push(Number(response.RAW.MATIC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[7].query.push(Number(response.RAW.MATIC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[7].cap.push(Number(response.RAW.MATIC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market.push(Number(response.RAW.MATIC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[7].volume.push(Number(response.RAW.MATIC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market_change.push(Number(response.RAW.MATIC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[7].market_change_percent.push(Number(response.RAW.MATIC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].total_supply.push(Number(response.RAW.MATIC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[7].circle_supply.push(Number(response.RAW.MATIC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 


    // Dogecoin
    fetch(CryptoLocalData[8].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[8].price_comma.push(Number(response.RAW.DOGE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[8].price.push(response.RAW.DOGE.USD.PRICE.toFixed(2));
            CryptoLocalData[8].query_change.push(Number(response.RAW.DOGE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].query.push(Number(response.RAW.DOGE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[8].cap.push(Number(response.RAW.DOGE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market.push(Number(response.RAW.DOGE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[8].volume.push(Number(response.RAW.DOGE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change.push(Number(response.RAW.DOGE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[8].market_change_percent.push(Number(response.RAW.DOGE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].total_supply.push(Number(response.RAW.DOGE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[8].circle_supply.push(Number(response.RAW.DOGE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Solana
    fetch(CryptoLocalData[9].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[9].price_comma.push(Number(response.RAW.SOL.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[9].price.push(response.RAW.SOL.USD.PRICE.toFixed(2));
            CryptoLocalData[9].query_change.push(Number(response.RAW.SOL.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].query.push(Number(response.RAW.SOL.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[9].cap.push(Number(response.RAW.SOL.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market.push(Number(response.RAW.SOL.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[9].volume.push(Number(response.RAW.SOL.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change.push(Number(response.RAW.SOL.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[9].market_change_percent.push(Number(response.RAW.SOL.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].total_supply.push(Number(response.RAW.SOL.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[9].circle_supply.push(Number(response.RAW.SOL.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Binance USD
    fetch(CryptoLocalData[10].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[10].price_comma.push(Number(response.RAW.BUSD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[10].price.push(response.RAW.BUSD.USD.PRICE.toFixed(2));
            CryptoLocalData[10].query_change.push(Number(response.RAW.BUSD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].query.push(Number(response.RAW.BUSD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[10].cap.push(Number(response.RAW.BUSD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market.push(Number(response.RAW.BUSD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[10].volume.push(Number(response.RAW.BUSD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change.push(Number(response.RAW.BUSD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[10].market_change_percent.push(Number(response.RAW.BUSD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].total_supply.push(Number(response.RAW.BUSD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[10].circle_supply.push(Number(response.RAW.BUSD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Polkadot
    fetch(CryptoLocalData[11].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[11].price_comma.push(Number(response.RAW.DOT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[11].price.push(response.RAW.DOT.USD.PRICE.toFixed(2));
            CryptoLocalData[11].query_change.push(Number(response.RAW.DOT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].query.push(Number(response.RAW.DOT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[11].cap.push(Number(response.RAW.DOT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market.push(Number(response.RAW.DOT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[11].volume.push(Number(response.RAW.DOT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change.push(Number(response.RAW.DOT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[11].market_change_percent.push(Number(response.RAW.DOT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].total_supply.push(Number(response.RAW.DOT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[11].circle_supply.push(Number(response.RAW.DOT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Shiba Inu
    fetch(CryptoLocalData[12].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[12].price_comma.push(Number(response.RAW.SHIB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[12].price.push(response.RAW.SHIB.USD.PRICE.toFixed(2));
            CryptoLocalData[12].query_change.push(Number(response.RAW.SHIB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].query.push(Number(response.RAW.SHIB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[12].cap.push(Number(response.RAW.SHIB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market.push(Number(response.RAW.SHIB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[12].volume.push(Number(response.RAW.SHIB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change.push(Number(response.RAW.SHIB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[12].market_change_percent.push(Number(response.RAW.SHIB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].total_supply.push(Number(response.RAW.SHIB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[12].circle_supply.push(Number(response.RAW.SHIB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[13].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[13].price_comma.push(Number(response.RAW.LTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[13].price.push(response.RAW.LTC.USD.PRICE.toFixed(2));
            CryptoLocalData[13].query_change.push(Number(response.RAW.LTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[13].query.push(Number(response.RAW.LTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[13].cap.push(Number(response.RAW.LTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market.push(Number(response.RAW.LTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[13].volume.push(Number(response.RAW.LTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market_change.push(Number(response.RAW.LTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[13].market_change_percent.push(Number(response.RAW.LTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].total_supply.push(Number(response.RAW.LTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[13].circle_supply.push(Number(response.RAW.LTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Tron
    fetch(CryptoLocalData[14].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[14].price_comma.push(Number(response.RAW.TRX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[14].price.push(response.RAW.TRX.USD.PRICE.toFixed(2));
            CryptoLocalData[14].query_change.push(Number(response.RAW.TRX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[14].query.push(Number(response.RAW.TRX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[14].cap.push(Number(response.RAW.TRX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market.push(Number(response.RAW.TRX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[14].volume.push(Number(response.RAW.TRX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market_change.push(Number(response.RAW.TRX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[14].market_change_percent.push(Number(response.RAW.TRX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].total_supply.push(Number(response.RAW.TRX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[14].circle_supply.push(Number(response.RAW.TRX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Avalanche
    fetch(CryptoLocalData[15].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[15].price_comma.push(Number(response.RAW.AVAX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[15].price.push(response.RAW.AVAX.USD.PRICE.toFixed(2));
            CryptoLocalData[15].query_change.push(Number(response.RAW.AVAX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[15].query.push(Number(response.RAW.AVAX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[15].cap.push(Number(response.RAW.AVAX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market.push(Number(response.RAW.AVAX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[15].volume.push(Number(response.RAW.AVAX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market_change.push(Number(response.RAW.AVAX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[15].market_change_percent.push(Number(response.RAW.AVAX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].total_supply.push(Number(response.RAW.AVAX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[15].circle_supply.push(Number(response.RAW.AVAX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Dai
    fetch(CryptoLocalData[16].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[16].price_comma.push(Number(response.RAW.DAI.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[16].price.push(response.RAW.DAI.USD.PRICE.toFixed(2));
            CryptoLocalData[16].query_change.push(Number(response.RAW.DAI.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[16].query.push(Number(response.RAW.DAI.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[16].cap.push(Number(response.RAW.DAI.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market.push(Number(response.RAW.DAI.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[16].volume.push(Number(response.RAW.DAI.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market_change.push(Number(response.RAW.DAI.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[16].market_change_percent.push(Number(response.RAW.DAI.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].total_supply.push(Number(response.RAW.DAI.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[16].circle_supply.push(Number(response.RAW.DAI.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Uniswap
    fetch(CryptoLocalData[17].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[17].price_comma.push(Number(response.RAW.UNI.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[17].price.push(response.RAW.UNI.USD.PRICE.toFixed(2));
            CryptoLocalData[17].query_change.push(Number(response.RAW.UNI.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[17].query.push(Number(response.RAW.UNI.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[17].cap.push(Number(response.RAW.UNI.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market.push(Number(response.RAW.UNI.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[17].volume.push(Number(response.RAW.UNI.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market_change.push(Number(response.RAW.UNI.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[17].market_change_percent.push(Number(response.RAW.UNI.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].total_supply.push(Number(response.RAW.UNI.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[17].circle_supply.push(Number(response.RAW.UNI.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[18].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[18].price_comma.push(Number(response.RAW.WBTC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[18].price.push(response.RAW.WBTC.USD.PRICE.toFixed(2));
            CryptoLocalData[18].query_change.push(Number(response.RAW.WBTC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[18].query.push(Number(response.RAW.WBTC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[18].cap.push(Number(response.RAW.WBTC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market.push(Number(response.RAW.WBTC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[18].volume.push(Number(response.RAW.WBTC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market_change.push(Number(response.RAW.WBTC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[18].market_change_percent.push(Number(response.RAW.WBTC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].total_supply.push(Number(response.RAW.WBTC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[18].circle_supply.push(Number(response.RAW.WBTC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // Chainlink
    fetch(CryptoLocalData[19].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[19].price_comma.push(Number(response.RAW.LINK.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[19].price.push(response.RAW.LINK.USD.PRICE.toFixed(2));
            CryptoLocalData[19].query_change.push(Number(response.RAW.LINK.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[19].query.push(Number(response.RAW.LINK.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[19].cap.push(Number(response.RAW.LINK.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market.push(Number(response.RAW.LINK.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[19].volume.push(Number(response.RAW.LINK.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market_change.push(Number(response.RAW.LINK.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[19].market_change_percent.push(Number(response.RAW.LINK.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].total_supply.push(Number(response.RAW.LINK.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[19].circle_supply.push(Number(response.RAW.LINK.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[20].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[20].price_comma.push(Number(response.RAW.ATOM.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[20].price.push(response.RAW.ATOM.USD.PRICE.toFixed(2));
            CryptoLocalData[20].query_change.push(Number(response.RAW.ATOM.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[20].query.push(Number(response.RAW.ATOM.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[20].cap.push(Number(response.RAW.ATOM.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market.push(Number(response.RAW.ATOM.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[20].volume.push(Number(response.RAW.ATOM.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market_change.push(Number(response.RAW.ATOM.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[20].market_change_percent.push(Number(response.RAW.ATOM.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].total_supply.push(Number(response.RAW.ATOM.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[20].circle_supply.push(Number(response.RAW.ATOM.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // LEO
    fetch(CryptoLocalData[21].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[21].price_comma.push(Number(response.RAW.LEO.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[21].price.push(response.RAW.LEO.USD.PRICE.toFixed(2));
            CryptoLocalData[21].query_change.push(Number(response.RAW.LEO.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[21].query.push(Number(response.RAW.LEO.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[21].cap.push(Number(response.RAW.LEO.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market.push(Number(response.RAW.LEO.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[21].volume.push(Number(response.RAW.LEO.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market_change.push(Number(response.RAW.LEO.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[21].market_change_percent.push(Number(response.RAW.LEO.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].total_supply.push(Number(response.RAW.LEO.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[21].circle_supply.push(Number(response.RAW.LEO.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[22].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[22].price_comma.push(Number(response.RAW.ETC.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[22].price.push(response.RAW.ETC.USD.PRICE.toFixed(2));
            CryptoLocalData[22].query_change.push(Number(response.RAW.ETC.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[22].query.push(Number(response.RAW.ETC.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[22].cap.push(Number(response.RAW.ETC.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market.push(Number(response.RAW.ETC.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[22].volume.push(Number(response.RAW.ETC.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market_change.push(Number(response.RAW.ETC.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[22].market_change_percent.push(Number(response.RAW.ETC.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].total_supply.push(Number(response.RAW.ETC.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[22].circle_supply.push(Number(response.RAW.ETC.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[23].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[23].price_comma.push(Number(response.RAW.TON.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[23].price.push(response.RAW.TON.USD.PRICE.toFixed(2));
            CryptoLocalData[23].query_change.push(Number(response.RAW.TON.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[23].query.push(Number(response.RAW.TON.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[23].cap.push(Number(response.RAW.TON.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market.push(Number(response.RAW.TON.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[23].volume.push(Number(response.RAW.TON.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market_change.push(Number(response.RAW.TON.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[23].market_change_percent.push(Number(response.RAW.TON.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].total_supply.push(Number(response.RAW.TON.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[23].circle_supply.push(Number(response.RAW.TON.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[24].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[24].price_comma.push(Number(response.RAW.OKB.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[24].price.push(response.RAW.OKB.USD.PRICE.toFixed(2));
            CryptoLocalData[24].query_change.push(Number(response.RAW.OKB.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[24].query.push(Number(response.RAW.OKB.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[24].cap.push(Number(response.RAW.OKB.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market.push(Number(response.RAW.OKB.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[24].volume.push(Number(response.RAW.OKB.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market_change.push(Number(response.RAW.OKB.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[24].market_change_percent.push(Number(response.RAW.OKB.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].total_supply.push(Number(response.RAW.OKB.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[24].circle_supply.push(Number(response.RAW.OKB.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[25].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[25].price_comma.push(Number(response.RAW.XMR.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[25].price.push(response.RAW.XMR.USD.PRICE.toFixed(2));
            CryptoLocalData[25].query_change.push(Number(response.RAW.XMR.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[25].query.push(Number(response.RAW.XMR.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[25].cap.push(Number(response.RAW.XMR.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market.push(Number(response.RAW.XMR.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[25].volume.push(Number(response.RAW.XMR.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market_change.push(Number(response.RAW.XMR.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[25].market_change_percent.push(Number(response.RAW.XMR.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].total_supply.push(Number(response.RAW.XMR.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[25].circle_supply.push(Number(response.RAW.XMR.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[26].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[26].price_comma.push(Number(response.RAW.BCH.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[26].price.push(response.RAW.BCH.USD.PRICE.toFixed(2));
            CryptoLocalData[26].query_change.push(Number(response.RAW.BCH.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[26].query.push(Number(response.RAW.BCH.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[26].cap.push(Number(response.RAW.BCH.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[26].market.push(Number(response.RAW.BCH.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[26].volume.push(Number(response.RAW.BCH.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[26].market_change.push(Number(response.RAW.BCH.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[26].market_change_percent.push(Number(response.RAW.BCH.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[26].total_supply.push(Number(response.RAW.BCH.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[26].circle_supply.push(Number(response.RAW.BCH.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[27].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[27].price_comma.push(Number(response.RAW.FIL.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[27].price.push(response.RAW.FIL.USD.PRICE.toFixed(2));
            CryptoLocalData[27].query_change.push(Number(response.RAW.FIL.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[27].query.push(Number(response.RAW.FIL.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[27].cap.push(Number(response.RAW.FIL.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[27].market.push(Number(response.RAW.FIL.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[27].volume.push(Number(response.RAW.FIL.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[27].market_change.push(Number(response.RAW.FIL.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[27].market_change_percent.push(Number(response.RAW.FIL.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[27].total_supply.push(Number(response.RAW.FIL.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[27].circle_supply.push(Number(response.RAW.FIL.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[28].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[28].price_comma.push(Number(response.RAW.APT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[28].price.push(response.RAW.APT.USD.PRICE.toFixed(2));
            CryptoLocalData[28].query_change.push(Number(response.RAW.APT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[28].query.push(Number(response.RAW.APT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[28].cap.push(Number(response.RAW.APT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[28].market.push(Number(response.RAW.APT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[28].volume.push(Number(response.RAW.APT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[28].market_change.push(Number(response.RAW.APT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[28].market_change_percent.push(Number(response.RAW.APT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[28].total_supply.push(Number(response.RAW.APT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[28].circle_supply.push(Number(response.RAW.APT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[29].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[29].price_comma.push(Number(response.RAW.XLM.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[29].price.push(response.RAW.XLM.USD.PRICE.toFixed(2));
            CryptoLocalData[29].query_change.push(Number(response.RAW.XLM.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[29].query.push(Number(response.RAW.XLM.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[29].cap.push(Number(response.RAW.XLM.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[29].market.push(Number(response.RAW.XLM.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[29].volume.push(Number(response.RAW.XLM.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[29].market_change.push(Number(response.RAW.XLM.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[29].market_change_percent.push(Number(response.RAW.XLM.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[29].total_supply.push(Number(response.RAW.XLM.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[29].circle_supply.push(Number(response.RAW.XLM.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[30].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[30].price_comma.push(Number(response.RAW.LDO.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[30].price.push(response.RAW.LDO.USD.PRICE.toFixed(2));
            CryptoLocalData[30].query_change.push(Number(response.RAW.LDO.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[30].query.push(Number(response.RAW.LDO.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[30].cap.push(Number(response.RAW.LDO.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[30].market.push(Number(response.RAW.LDO.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[30].volume.push(Number(response.RAW.LDO.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[30].market_change.push(Number(response.RAW.LDO.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[30].market_change_percent.push(Number(response.RAW.LDO.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[30].total_supply.push(Number(response.RAW.LDO.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[30].circle_supply.push(Number(response.RAW.LDO.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[31].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[31].price_comma.push(Number(response.RAW.TUSD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[31].price.push(response.RAW.TUSD.USD.PRICE.toFixed(2));
            CryptoLocalData[31].query_change.push(Number(response.RAW.TUSD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[31].query.push(Number(response.RAW.TUSD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[31].cap.push(Number(response.RAW.TUSD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[31].market.push(Number(response.RAW.TUSD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[31].volume.push(Number(response.RAW.TUSD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[31].market_change.push(Number(response.RAW.TUSD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[31].market_change_percent.push(Number(response.RAW.TUSD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[31].total_supply.push(Number(response.RAW.TUSD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[31].circle_supply.push(Number(response.RAW.TUSD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[32].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[32].price_comma.push(Number(response.RAW.NEAR.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[32].price.push(response.RAW.NEAR.USD.PRICE.toFixed(2));
            CryptoLocalData[32].query_change.push(Number(response.RAW.NEAR.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[32].query.push(Number(response.RAW.NEAR.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[32].cap.push(Number(response.RAW.NEAR.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[32].market.push(Number(response.RAW.NEAR.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[32].volume.push(Number(response.RAW.NEAR.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[32].market_change.push(Number(response.RAW.NEAR.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[32].market_change_percent.push(Number(response.RAW.NEAR.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[32].total_supply.push(Number(response.RAW.NEAR.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[32].circle_supply.push(Number(response.RAW.NEAR.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[33].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[33].price_comma.push(Number(response.RAW.CRO.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[33].price.push(response.RAW.CRO.USD.PRICE.toFixed(2));
            CryptoLocalData[33].query_change.push(Number(response.RAW.CRO.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[33].query.push(Number(response.RAW.CRO.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[33].cap.push(Number(response.RAW.CRO.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[33].market.push(Number(response.RAW.CRO.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[33].volume.push(Number(response.RAW.CRO.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[33].market_change.push(Number(response.RAW.CRO.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[33].market_change_percent.push(Number(response.RAW.CRO.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[33].total_supply.push(Number(response.RAW.CRO.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[33].circle_supply.push(Number(response.RAW.CRO.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[34].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[34].price_comma.push(Number(response.RAW.VET.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[34].price.push(response.RAW.VET.USD.PRICE.toFixed(2));
            CryptoLocalData[34].query_change.push(Number(response.RAW.VET.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[34].query.push(Number(response.RAW.VET.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[34].cap.push(Number(response.RAW.VET.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[34].market.push(Number(response.RAW.VET.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[34].volume.push(Number(response.RAW.VET.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[34].market_change.push(Number(response.RAW.VET.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[34].market_change_percent.push(Number(response.RAW.VET.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[34].total_supply.push(Number(response.RAW.VET.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[34].circle_supply.push(Number(response.RAW.VET.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[35].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[35].price_comma.push(Number(response.RAW.ICP.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[35].price.push(response.RAW.ICP.USD.PRICE.toFixed(2));
            CryptoLocalData[35].query_change.push(Number(response.RAW.ICP.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[35].query.push(Number(response.RAW.ICP.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[35].cap.push(Number(response.RAW.ICP.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[35].market.push(Number(response.RAW.ICP.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[35].volume.push(Number(response.RAW.ICP.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[35].market_change.push(Number(response.RAW.ICP.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[35].market_change_percent.push(Number(response.RAW.ICP.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[35].total_supply.push(Number(response.RAW.ICP.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[35].circle_supply.push(Number(response.RAW.ICP.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[36].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[36].price_comma.push(Number(response.RAW.APE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[36].price.push(response.RAW.APE.USD.PRICE.toFixed(2));
            CryptoLocalData[36].query_change.push(Number(response.RAW.APE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[36].query.push(Number(response.RAW.APE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[36].cap.push(Number(response.RAW.APE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[36].market.push(Number(response.RAW.APE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[36].volume.push(Number(response.RAW.APE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[36].market_change.push(Number(response.RAW.APE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[36].market_change_percent.push(Number(response.RAW.APE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[36].total_supply.push(Number(response.RAW.APE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[36].circle_supply.push(Number(response.RAW.APE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[37].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[37].price_comma.push(Number(response.RAW.ALGO.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[37].price.push(response.RAW.ALGO.USD.PRICE.toFixed(2));
            CryptoLocalData[37].query_change.push(Number(response.RAW.ALGO.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[37].query.push(Number(response.RAW.ALGO.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[37].cap.push(Number(response.RAW.ALGO.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[37].market.push(Number(response.RAW.ALGO.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[37].volume.push(Number(response.RAW.ALGO.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[37].market_change.push(Number(response.RAW.ALGO.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[37].market_change_percent.push(Number(response.RAW.ALGO.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[37].total_supply.push(Number(response.RAW.ALGO.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[37].circle_supply.push(Number(response.RAW.ALGO.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[38].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[38].price_comma.push(Number(response.RAW.QNT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[38].price.push(response.RAW.QNT.USD.PRICE.toFixed(2));
            CryptoLocalData[38].query_change.push(Number(response.RAW.QNT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[38].query.push(Number(response.RAW.QNT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[38].cap.push(Number(response.RAW.QNT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[38].market.push(Number(response.RAW.QNT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[38].volume.push(Number(response.RAW.QNT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[38].market_change.push(Number(response.RAW.QNT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[38].market_change_percent.push(Number(response.RAW.QNT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[38].total_supply.push(Number(response.RAW.QNT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[38].circle_supply.push(Number(response.RAW.QNT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[39].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[39].price_comma.push(Number(response.RAW.STX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[39].price.push(response.RAW.STX.USD.PRICE.toFixed(2));
            CryptoLocalData[39].query_change.push(Number(response.RAW.STX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[39].query.push(Number(response.RAW.STX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[39].cap.push(Number(response.RAW.STX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[39].market.push(Number(response.RAW.STX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[39].volume.push(Number(response.RAW.STX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[39].market_change.push(Number(response.RAW.STX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[39].market_change_percent.push(Number(response.RAW.STX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[39].total_supply.push(Number(response.RAW.STX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[39].circle_supply.push(Number(response.RAW.STX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------

    // 
    fetch(CryptoLocalData[40].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[40].price_comma.push(Number(response.RAW.GRT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[40].price.push(response.RAW.GRT.USD.PRICE.toFixed(2));
            CryptoLocalData[40].query_change.push(Number(response.RAW.GRT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[40].query.push(Number(response.RAW.GRT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[40].cap.push(Number(response.RAW.GRT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[40].market.push(Number(response.RAW.GRT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[40].volume.push(Number(response.RAW.GRT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[40].market_change.push(Number(response.RAW.GRT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[40].market_change_percent.push(Number(response.RAW.GRT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[40].total_supply.push(Number(response.RAW.GRT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[40].circle_supply.push(Number(response.RAW.GRT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // --------------------  

    // 
    fetch(CryptoLocalData[41].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[41].price_comma.push(Number(response.RAW.FTM.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[41].price.push(response.RAW.FTM.USD.PRICE.toFixed(2));
            CryptoLocalData[41].query_change.push(Number(response.RAW.FTM.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[41].query.push(Number(response.RAW.FTM.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[41].cap.push(Number(response.RAW.FTM.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[41].market.push(Number(response.RAW.FTM.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[41].volume.push(Number(response.RAW.FTM.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[41].market_change.push(Number(response.RAW.FTM.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[41].market_change_percent.push(Number(response.RAW.FTM.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[41].total_supply.push(Number(response.RAW.FTM.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[41].circle_supply.push(Number(response.RAW.FTM.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[42].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[42].price_comma.push(Number(response.RAW.IMX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[42].price.push(response.RAW.IMX.USD.PRICE.toFixed(2));
            CryptoLocalData[42].query_change.push(Number(response.RAW.IMX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[42].query.push(Number(response.RAW.IMX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[42].cap.push(Number(response.RAW.IMX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[42].market.push(Number(response.RAW.IMX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[42].volume.push(Number(response.RAW.IMX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[42].market_change.push(Number(response.RAW.IMX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[42].market_change_percent.push(Number(response.RAW.IMX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[42].total_supply.push(Number(response.RAW.IMX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[42].circle_supply.push(Number(response.RAW.IMX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[43].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[43].price_comma.push(Number(response.RAW.EOS.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[43].price.push(response.RAW.EOS.USD.PRICE.toFixed(2));
            CryptoLocalData[43].query_change.push(Number(response.RAW.EOS.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[43].query.push(Number(response.RAW.EOS.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[43].cap.push(Number(response.RAW.EOS.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[43].market.push(Number(response.RAW.EOS.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[43].volume.push(Number(response.RAW.EOS.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[43].market_change.push(Number(response.RAW.EOS.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[43].market_change_percent.push(Number(response.RAW.EOS.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[43].total_supply.push(Number(response.RAW.EOS.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[43].circle_supply.push(Number(response.RAW.EOS.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 
    // 
    fetch(CryptoLocalData[44].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[44].price_comma.push(Number(response.RAW.MANA.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[44].price.push(response.RAW.MANA.USD.PRICE.toFixed(2));
            CryptoLocalData[44].query_change.push(Number(response.RAW.MANA.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[44].query.push(Number(response.RAW.MANA.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[44].cap.push(Number(response.RAW.MANA.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[44].market.push(Number(response.RAW.MANA.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[44].volume.push(Number(response.RAW.MANA.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[44].market_change.push(Number(response.RAW.MANA.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[44].market_change_percent.push(Number(response.RAW.MANA.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[44].total_supply.push(Number(response.RAW.MANA.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[44].circle_supply.push(Number(response.RAW.MANA.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[45].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[45].price_comma.push(Number(response.RAW.BIT.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[45].price.push(response.RAW.BIT.USD.PRICE.toFixed(2));
            CryptoLocalData[45].query_change.push(Number(response.RAW.BIT.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[45].query.push(Number(response.RAW.BIT.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[45].cap.push(Number(response.RAW.BIT.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[45].market.push(Number(response.RAW.BIT.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[45].volume.push(Number(response.RAW.BIT.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[45].market_change.push(Number(response.RAW.BIT.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[45].market_change_percent.push(Number(response.RAW.BIT.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[45].total_supply.push(Number(response.RAW.BIT.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[45].circle_supply.push(Number(response.RAW.BIT.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[46].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[46].price_comma.push(Number(response.RAW.XTZ.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[46].price.push(response.RAW.XTZ.USD.PRICE.toFixed(2));
            CryptoLocalData[46].query_change.push(Number(response.RAW.XTZ.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[46].query.push(Number(response.RAW.XTZ.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[46].cap.push(Number(response.RAW.XTZ.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[46].market.push(Number(response.RAW.XTZ.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[46].volume.push(Number(response.RAW.XTZ.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[46].market_change.push(Number(response.RAW.XTZ.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[46].market_change_percent.push(Number(response.RAW.XTZ.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[46].total_supply.push(Number(response.RAW.XTZ.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[46].circle_supply.push(Number(response.RAW.XTZ.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[47].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[47].price_comma.push(Number(response.RAW.AAVE.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[47].price.push(response.RAW.AAVE.USD.PRICE.toFixed(2));
            CryptoLocalData[47].query_change.push(Number(response.RAW.AAVE.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[47].query.push(Number(response.RAW.AAVE.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[47].cap.push(Number(response.RAW.AAVE.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[47].market.push(Number(response.RAW.AAVE.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[47].volume.push(Number(response.RAW.AAVE.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[47].market_change.push(Number(response.RAW.AAVE.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[47].market_change_percent.push(Number(response.RAW.AAVE.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[47].total_supply.push(Number(response.RAW.AAVE.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[47].circle_supply.push(Number(response.RAW.AAVE.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[48].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[48].price_comma.push(Number(response.RAW.FLOW.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[48].price.push(response.RAW.FLOW.USD.PRICE.toFixed(2));
            CryptoLocalData[48].query_change.push(Number(response.RAW.FLOW.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[48].query.push(Number(response.RAW.FLOW.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[48].cap.push(Number(response.RAW.FLOW.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[48].market.push(Number(response.RAW.FLOW.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[48].volume.push(Number(response.RAW.FLOW.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[48].market_change.push(Number(response.RAW.FLOW.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[48].market_change_percent.push(Number(response.RAW.FLOW.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[48].total_supply.push(Number(response.RAW.FLOW.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[48].circle_supply.push(Number(response.RAW.FLOW.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[49].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[49].price_comma.push(Number(response.RAW.EGLD.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[49].price.push(response.RAW.EGLD.USD.PRICE.toFixed(2));
            CryptoLocalData[49].query_change.push(Number(response.RAW.EGLD.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[49].query.push(Number(response.RAW.EGLD.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[49].cap.push(Number(response.RAW.EGLD.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[49].market.push(Number(response.RAW.EGLD.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[49].volume.push(Number(response.RAW.EGLD.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[49].market_change.push(Number(response.RAW.EGLD.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[49].market_change_percent.push(Number(response.RAW.EGLD.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[49].total_supply.push(Number(response.RAW.EGLD.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[49].circle_supply.push(Number(response.RAW.EGLD.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[50].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[50].price_comma.push(Number(response.RAW.THETA.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[50].price.push(response.RAW.THETA.USD.PRICE.toFixed(2));
            CryptoLocalData[50].query_change.push(Number(response.RAW.THETA.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[50].query.push(Number(response.RAW.THETA.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[50].cap.push(Number(response.RAW.THETA.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[50].market.push(Number(response.RAW.THETA.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[50].volume.push(Number(response.RAW.THETA.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[50].market_change.push(Number(response.RAW.THETA.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[50].market_change_percent.push(Number(response.RAW.THETA.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[50].total_supply.push(Number(response.RAW.THETA.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[50].circle_supply.push(Number(response.RAW.THETA.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[51].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[51].price_comma.push(Number(response.RAW.AXS.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[51].price.push(response.RAW.AXS.USD.PRICE.toFixed(2));
            CryptoLocalData[51].query_change.push(Number(response.RAW.AXS.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[51].query.push(Number(response.RAW.AXS.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[51].cap.push(Number(response.RAW.AXS.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[51].market.push(Number(response.RAW.AXS.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[51].volume.push(Number(response.RAW.AXS.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[51].market_change.push(Number(response.RAW.AXS.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[51].market_change_percent.push(Number(response.RAW.AXS.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[51].total_supply.push(Number(response.RAW.AXS.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[51].circle_supply.push(Number(response.RAW.AXS.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[52].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[52].price_comma.push(Number(response.RAW.CFX.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[52].price.push(response.RAW.CFX.USD.PRICE.toFixed(2));
            CryptoLocalData[52].query_change.push(Number(response.RAW.CFX.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[52].query.push(Number(response.RAW.CFX.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[52].cap.push(Number(response.RAW.CFX.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[52].market.push(Number(response.RAW.CFX.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[52].volume.push(Number(response.RAW.CFX.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[52].market_change.push(Number(response.RAW.CFX.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[52].market_change_percent.push(Number(response.RAW.CFX.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[52].total_supply.push(Number(response.RAW.CFX.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[52].circle_supply.push(Number(response.RAW.CFX.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[53].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[53].price_comma.push(Number(response.RAW.SAND.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[53].price.push(response.RAW.SAND.USD.PRICE.toFixed(2));
            CryptoLocalData[53].query_change.push(Number(response.RAW.SAND.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[53].query.push(Number(response.RAW.SAND.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[53].cap.push(Number(response.RAW.SAND.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[53].market.push(Number(response.RAW.SAND.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[53].volume.push(Number(response.RAW.SAND.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[53].market_change.push(Number(response.RAW.SAND.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[53].market_change_percent.push(Number(response.RAW.SAND.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[53].total_supply.push(Number(response.RAW.SAND.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[53].circle_supply.push(Number(response.RAW.SAND.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[54].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[54].price_comma.push(Number(response.RAW.KCS.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[54].price.push(response.RAW.KCS.USD.PRICE.toFixed(2));
            CryptoLocalData[54].query_change.push(Number(response.RAW.KCS.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[54].query.push(Number(response.RAW.KCS.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[54].cap.push(Number(response.RAW.KCS.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[54].market.push(Number(response.RAW.KCS.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[54].volume.push(Number(response.RAW.KCS.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[54].market_change.push(Number(response.RAW.KCS.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[54].market_change_percent.push(Number(response.RAW.KCS.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[54].total_supply.push(Number(response.RAW.KCS.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[54].circle_supply.push(Number(response.RAW.KCS.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[55].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[55].price_comma.push(Number(response.RAW.NEO.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[55].price.push(response.RAW.NEO.USD.PRICE.toFixed(2));
            CryptoLocalData[55].query_change.push(Number(response.RAW.NEO.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[55].query.push(Number(response.RAW.NEO.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[55].cap.push(Number(response.RAW.NEO.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[55].market.push(Number(response.RAW.NEO.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[55].volume.push(Number(response.RAW.NEO.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[55].market_change.push(Number(response.RAW.NEO.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[55].market_change_percent.push(Number(response.RAW.NEO.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[55].total_supply.push(Number(response.RAW.NEO.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[55].circle_supply.push(Number(response.RAW.NEO.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[56].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[56].price_comma.push(Number(response.RAW.USDP.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[56].price.push(response.RAW.USDP.USD.PRICE.toFixed(2));
            CryptoLocalData[56].query_change.push(Number(response.RAW.USDP.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[56].query.push(Number(response.RAW.USDP.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[56].cap.push(Number(response.RAW.USDP.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[56].market.push(Number(response.RAW.USDP.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[56].volume.push(Number(response.RAW.USDP.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[56].market_change.push(Number(response.RAW.USDP.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[56].market_change_percent.push(Number(response.RAW.USDP.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[56].total_supply.push(Number(response.RAW.USDP.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[56].circle_supply.push(Number(response.RAW.USDP.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[57].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[57].price_comma.push(Number(response.RAW.OP.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[57].price.push(response.RAW.OP.USD.PRICE.toFixed(2));
            CryptoLocalData[57].query_change.push(Number(response.RAW.OP.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[57].query.push(Number(response.RAW.OP.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[57].cap.push(Number(response.RAW.OP.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[57].market.push(Number(response.RAW.OP.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[57].volume.push(Number(response.RAW.OP.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[57].market_change.push(Number(response.RAW.OP.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[57].market_change_percent.push(Number(response.RAW.OP.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[57].total_supply.push(Number(response.RAW.OP.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[57].circle_supply.push(Number(response.RAW.OP.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[58].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[58].price_comma.push(Number(response.RAW.RPL.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[58].price.push(response.RAW.RPL.USD.PRICE.toFixed(2));
            CryptoLocalData[58].query_change.push(Number(response.RAW.RPL.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[58].query.push(Number(response.RAW.RPL.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[58].cap.push(Number(response.RAW.RPL.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[58].market.push(Number(response.RAW.RPL.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[58].volume.push(Number(response.RAW.RPL.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[58].market_change.push(Number(response.RAW.RPL.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[58].market_change_percent.push(Number(response.RAW.RPL.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[58].total_supply.push(Number(response.RAW.RPL.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[58].circle_supply.push(Number(response.RAW.RPL.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[59].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[59].price_comma.push(Number(response.RAW.CHZ.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[59].price.push(response.RAW.CHZ.USD.PRICE.toFixed(2));
            CryptoLocalData[59].query_change.push(Number(response.RAW.CHZ.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[59].query.push(Number(response.RAW.CHZ.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[59].cap.push(Number(response.RAW.CHZ.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[59].market.push(Number(response.RAW.CHZ.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[59].volume.push(Number(response.RAW.CHZ.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[59].market_change.push(Number(response.RAW.CHZ.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[59].market_change_percent.push(Number(response.RAW.CHZ.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[59].total_supply.push(Number(response.RAW.CHZ.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[59].circle_supply.push(Number(response.RAW.CHZ.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[60].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[60].price_comma.push(Number(response.RAW.CRV.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[60].price.push(response.RAW.CRV.USD.PRICE.toFixed(2));
            CryptoLocalData[60].query_change.push(Number(response.RAW.CRV.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[60].query.push(Number(response.RAW.CRV.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[60].cap.push(Number(response.RAW.CRV.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[60].market.push(Number(response.RAW.CRV.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[60].volume.push(Number(response.RAW.CRV.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[60].market_change.push(Number(response.RAW.CRV.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[60].market_change_percent.push(Number(response.RAW.CRV.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[60].total_supply.push(Number(response.RAW.CRV.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[60].circle_supply.push(Number(response.RAW.CRV.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[61].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[61].price_comma.push(Number(response.RAW.MINA.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[61].price.push(response.RAW.MINA.USD.PRICE.toFixed(2));
            CryptoLocalData[61].query_change.push(Number(response.RAW.MINA.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[61].query.push(Number(response.RAW.MINA.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[61].cap.push(Number(response.RAW.MINA.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[61].market.push(Number(response.RAW.MINA.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[61].volume.push(Number(response.RAW.MINA.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[61].market_change.push(Number(response.RAW.MINA.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[61].market_change_percent.push(Number(response.RAW.MINA.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[61].total_supply.push(Number(response.RAW.MINA.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[61].circle_supply.push(Number(response.RAW.MINA.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 

    // 
    fetch(CryptoLocalData[62].code)
        .then(response => response.json())
        .then(response => {
            CryptoLocalData[62].price_comma.push(Number(response.RAW.KLAY.USD.PRICE.toFixed(2)).toLocaleString());
            CryptoLocalData[62].price.push(response.RAW.KLAY.USD.PRICE.toFixed(2));
            CryptoLocalData[62].query_change.push(Number(response.RAW.KLAY.USD.CHANGE24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[62].query.push(Number(response.RAW.KLAY.USD.CHANGEPCT24HOUR.toFixed(2)).toLocaleString());
            CryptoLocalData[62].cap.push(Number(response.RAW.KLAY.USD.HIGHDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[62].market.push(Number(response.RAW.KLAY.USD.MKTCAP.toFixed(2)).toLocaleString());
            CryptoLocalData[62].volume.push(Number(response.RAW.KLAY.USD.TOTALVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[62].market_change.push(Number(response.RAW.KLAY.USD.TOTALTOPTIERVOLUME24H.toFixed(2)).toLocaleString());
            CryptoLocalData[62].market_change_percent.push(Number(response.RAW.KLAY.USD.LOWDAY.toFixed(2)).toLocaleString());
            CryptoLocalData[62].total_supply.push(Number(response.RAW.KLAY.USD.SUPPLY.toFixed(2)).toLocaleString());
            CryptoLocalData[62].circle_supply.push(Number(response.RAW.KLAY.USD.CIRCULATINGSUPPLY.toFixed(2)).toLocaleString());
        })
        .catch(err => console.error(err));
    // -------------------- 
//  -------------------- -------------------- --------------------
//  -------------------- -------------------- --------------------



// --------------------  - PAGE --------------------         
    //  
    function displayGraphIndex() {
        var dynamicStyles = document.getElementById("dynamicStyles");
        var real = Number(Number(TokenPage) + 1);
        dynamicStyles.textContent = `
            #market-graph-absolute-con .crypto-token-graph:not(:nth-child(${real})){
                display: none;
            }
        `
        // 
        document.getElementById("market-header-container").innerHTML = `
            <!-- Left container-->
            <div class="help-left-container">
                <div class="help-header-img btn-display" onclick="HomeToToken()">
                    <img src="img/arrow-left.png" class="img-fluid">
                </div>
                <span class="help-header-txt page-refresh">${ CryptoLocalData[TokenPage].symbol }</span>
            </div>
            <!-- Right container-->
            <div class="help-header-img onclick=" onclick="TokenToMarketInfo()">
                <img src="img/token/${ CryptoLocalData[TokenPage].img }.png" class="img-fluid">
            </div>
        `;
        // 
        document.getElementById("market-info-head").innerHTML = `
            <p class="market-token-name line-height-zero">${ CryptoLocalData[TokenPage].name }</p>
            <div class="market-token-price">$${ CryptoLocalData[TokenPage].price_comma.slice(-1)[0] }</div>
            <p class="market-query line-height">$${ CryptoLocalData[TokenPage].query_change.slice(-1)[0] } <span style="padding-left: 1.5em">${ CryptoLocalData[TokenPage].query.slice(-1)[0] }%</span></p>
        `;
        // 
        document.getElementById("market-sub-token-cap").innerHTML = `
            $${CryptoLocalData[TokenPage].cap.slice(-1)[0]}
        `;
        //  
        document.getElementById("market-sub-token-market").innerHTML = `
            $${CryptoLocalData[TokenPage].market.slice(-1)[0]}
        `;
        // 
        document.getElementById("market-sub-token-volume").innerHTML = `
            ${CryptoLocalData[TokenPage].volume.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        // 
        document.getElementById("market-sub-token-market-change").innerHTML = `
            ${CryptoLocalData[TokenPage].market_change.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        // 
        document.getElementById("market-sub-market-change-percent").innerHTML = `
            $${CryptoLocalData[TokenPage].market_change_percent.slice(-1)[0]}
        `;
        // 
        document.getElementById("market-sub-token-total-supply").innerHTML = `
            ${CryptoLocalData[TokenPage].total_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;
        document.getElementById("market-sub-token-circle-supply").innerHTML = `
            ${CryptoLocalData[TokenPage].circle_supply.slice(-1)[0]} ${CryptoLocalData[TokenPage].symbol}
        `;sendmainChanger();
    }
    // --------------------  
//  -------------------- -------------------- -------------------- 