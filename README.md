# Rooms To Go Engineering: Take Home Assignment

## Run this program
1. Clone this repository
2. npm install
3. npm start
4. [ctl + c] to quit the REPL

## Run Test cases
1. npm install -g jest
2. npm test

## Problem Statement
Create a command line REPL to manage product inventory.

Managing product inventory requires adding products to a product catalog and adding warehouses to store the products.

Supports 7 commands
## Details
- Our application will take in user input one line at a time.

Bold text denotes text that will be entered as-is, italics denote arguments that will be replaced by a value. Optional arguments are surrounded by square brackets ([]).

1. **ADD PRODUCT** *"PRODUCT NAME"* *SKU*

2. **ADD WAREHOUSE** *WAREHOUSE#*  *[STOCK_LIMIT]*

3. **STOCK** *SKU* *WAREHOUSE#* *QTY*

4. **UNSTOCK** *SKU* *WAREHOUSE#* *QTY*

5. **LIST PRODUCTS**

6. **LIST WAREHOUSES**

7. **LIST WAREHOUSE** *WAREHOUSE#**


## COMMAND HISTORY
Recorded in current working directory in ``./history.log``


## EXAMPLE SESSION
Here is an example session to show you what a run of your program should look like.
- Example Input is prepended with >
- Example output is not prepended with >.

```
> ADD WAREHOUSE 970
> ADD WAREHOUSE 45
> ADD WAREHOUSE 2

> LIST WAREHOUSES
WAREHOUSES
970
45
2

> ADD PRODUCT "Sofia Vegara 5 Piece Living Room Set" 38538505-0767-453f-89af-d11c809ebb3b
> ADD PRODUCT "BED" 5ce956fa-a71e-4bfb-b6ae-5eeaa5eb0a70
> ADD PRODUCT "TRUNK" 5ce956fa-a71e-4bfb-b6ae-5eeaa5eb0a70
ERROR ADDING PRODUCT PRODUCT with SKU 5ce956fa-a71e-4bfb-b6ae-5eeaa5eb0a70 ALREADY EXISTS

> LIST PRODUCTS
Sofia Vegara 5 Piece Living Room Set 38538505-0767-453f-89af-d11c809ebb3b
BED 5ce956fa-a71e-4bfb-b6ae-5eeaa5eb0a70

> STOCK 38538505-0767-453f-89af-d11c809ebb3b 970 1000
> LIST WAREHOUSE 970
ITEM NAME                               ITEM_SKU                              QTY
Sofia Vegara 5 Piece Living Room Set    38538505-0767-453f-89af-d11c809ebb3b  1000

```

