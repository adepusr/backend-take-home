
const fs = require('fs');
const readline = require('readline');

const { errorLog } = require('./util');
const { stock, unstock } = require('./commands/inventory');
const { addProduct, getProducts } = require('./commands/product');
const { addWarehouse, getWarehouses, getWarehouseProducts } = require('./commands/warehouse');

/*
    creating readline interface to make application behave like REPL 
    NOTE: useing `readline` as because `repl` npm doesnot support capital letter commands
*/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  historySize: 10,
  prompt: '> '
});

/*
    Creating a writestream for logging history of commands entered along with EST tim.
    Saved in current directory history.log file
*/
var stream = fs.createWriteStream("history.log", {flags:'a'});

rl.prompt();
/* Listnes for ENTER event */
rl.on('line', (line) => {
    if(line !== null && line.length > 0){
        const aStr = line.trim();
        stream.write(new Date() +': '+ line+'\n');
        /*  Regx breaks given command at either space  | quotes followed by quotes 
            ** Example Command: ADD PRODUCT "product Name" 12ad-23rf-e34g-p4oi
            ** cmd value will be: ['ADD', 'PRODUCT', '"product Name"', '12ad-23rf-e34g-p4oi']
        */
        let cmd = aStr.match(/[\w'-]+|"[^"]+"/g);
        let i = cmd.length;
        while(i--){
            cmd[i] = cmd[i].replace(/"/g,'');
        }
        try {
            /*  If condition for all commands followed by ADD in the begining */
            if(cmd[0] === 'ADD'){
                switch(cmd[1]) {
                    case 'PRODUCT' :
                        addProduct(cmd[2], cmd[3]);
                        break;
                    case 'WAREHOUSE':
                        addWarehouse(Number(cmd[2]), cmd[3]);
                        break;
                    default: 
                        errorLog('Command Not Found !! ');
                        break;
                }
            } 
            /*  If condition for all commands followed by LIST in the begining */
            else if(cmd[0] === 'LIST'){
                switch(cmd[1]) {
                    case 'PRODUCTS' :
                        console.log('\nNAME \t SKU#');
                        getProducts().map(val => {
                            console.log(val.name +' \t '+ val.sku)
                        });
                        break;
                    case 'WAREHOUSES':
                        console.log('\nWAREHOUSE# \tFILLED');
                        getWarehouses().map(val => {
                            console.log(val.warehouseNumber +"\t"+ val.filled);
                        });
                        break;
                    case 'WAREHOUSE':
                        console.log('\nITEM NAME \t SKU# \t QUANTITY');
                        getWarehouseProducts(Number(cmd[2])).map(val => {
                            console.log(val.name +" \t"+ val.sku+ " \t"+val.quantity);
                        });
                        break;
                    default: 
                        errorLog('Command Not Found !! ');
                        break;
                }
            } 
            /*  If condition for all commands having STOCK in the first part */
            else if(cmd[0].includes('STOCK')){
                switch(cmd[0]){
                    case 'STOCK':
                        stock(cmd[1], Number(cmd[2]), Number(cmd[3]));
                        break;
                    case 'UNSTOCK':
                        unstock(cmd[1], Number(cmd[2]), Number(cmd[3]));
                        break;
                    default: 
                        errorLog('Command Not Found !! ');
                        break;
                }
            } else {
                errorLog('Command Not Found !! ');
            }
        }
        catch(e){
            errorLog(e);
        }
    }
    rl.prompt();
})
/*  Listens on close event [ctl + c] to end the process */
.on('close', () => {
    stream.end();
    console.log('Have a great day!');
    process.exit(0);
});


