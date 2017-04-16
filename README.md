Problem
-------

Application to calculate the minimum number of Sterling coins needed to make a given amount.
Eg. 123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p


System Requirements
-------------------

Working Internet Connection for downloading fonts.
Modern browser supporting HTML5. (Eg. Chrome, Firefox, IE11)


How to run the project
----------------------

1. Download the zip file and extract contents. 

2. Open the "BBC-Assignment-Dhruv-Narula-master" folder and double click on the "index.html" file.

3. Select the textbox to enter the 'amount' for conversion (eg. 123p) and press "Enter" key. The result will be displayed below. 

Test Data
---------

In the first column is a string of user input, and in the second the desired integer expressed as pence.
|-------------------------------------------------------------------------------|
| Input 		| Pence (canonical) | Description 								|
|-------------------------------------------------------------------------------|
| 4 			| 4 				| single digit 								|
| 85 			| 85 				| double digit 								|
| 197p 			| 197 				| pence symbol 								|
| 2p 			| 2 				| pence symbol single digit 				|
| 1.87 			| 187 				| pounds decimal 							|
| £1.23 		| 123 				| pound symbol 								|
| £2 			| 200 				| single digit pound symbol 				|
| £10 			| 1000 				| double digit pound symbol 				|
| £1.87p		| 187 				| pound and pence symbol 					|
| £1p 			| 100 				| missing pence 							|
| £1.p 			| 100 				| missing pence but present decimal point 	|
| 001.41p 		| 141 				| buffered zeros 							|
| 4.235p 		| 424 				| rounding three decimal places to two 		|
| £1.257422457p | 126 				| rounding with symbols 					|
|-------------------------------------------------------------------------------|

Likewise, the application should not accept the following inputs,
|-------------------------------------------------------------------------------|
| Input 		| Pence (canonical) | Description 								|
|-------------------------------------------------------------------------------|
| 				| 0 				| empty string 								|
| 1x 			| 0 				| non-numeric character 					|
| £1x.0p 		| 0 				| non-numeric character 					|
| £p 			| 0 				| missing digits 							|
|-------------------------------------------------------------------------------|

Assigment Submitted By
----------------------

If you have any issues with this assessment or require some clarification then please email me:
Dhruv Narula
Ph.- 9811123965
Email- dhruv093@gmail.com
