var request = require('request'),
    consumer_key = "AeVqEGQdQBx0GCLCrprvmJc2j80mrtZj",
    consumer_secret = "udatrt3CR9jpT4K2",
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");

request(
    {
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract OAuth access token
        // console.log()
        oauth_token = JSON.parse(body).access_token,
            url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        auth = "Bearer " + oauth_token;

        request(
            {
                method: 'POST',
                url: url,
                headers: {
                    "Authorization": auth
                },
                json: {
                    "BusinessShortCode": "174379",
                    "Password": new Buffer("174379bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c91920170930041152").toString("base64"),
                    "Timestamp": "20170930041152",
                    "TransactionType": "CustomerPayBillOnline",
                    "Amount": "1",
                    "PartyA": "254708374149",
                    "PartyB": "174379",
                    "PhoneNumber": "254796374030",
                    "CallBackURL":"https://ecom-da929.firebaseio.com/",
                    "AccountReference": "fP6K2KuL",
                    "TransactionDesc": "Payment of fess"
                }
            },
            function (error, response, body) {
                // TODO: Use the body object to extract the response
                if(error) throw error
                console.log(body)
            }
        )

    }
)
