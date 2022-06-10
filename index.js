//var dbConnect = require('./Database_Connector/dbConnect')

var Connection = require('tedious').Connection; 
var Request = require('tedious').Request;

    var config = {  
        server: '', 
        authentication: {
            type: 'default',
            options: {
                userName: '', 
                password: ''  
            }
        },
        options: {
            database: 'kochapp',
            trustServerCertificate: false,
            encrypt: false
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        if (err) { console.log(err)}
        // If no error, then good to proceed.
        console.log("Connected");  
        //executeStatement();
    });

    function executeStatement() {
        request = new Request("select 42, 'hello world'", function(err, rowCount) {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount + ' rows');
            }
            });
        
            request.on('row', function(columns) {
            columns.forEach(function(column) {
                console.log(column.value);
            });
            });
        
            connection.execSql(request);
        }
        
    
    connection.connect();