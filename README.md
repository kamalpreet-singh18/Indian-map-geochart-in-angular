# Indian Map Geochart in angular
This repo contains a small project which contains indian map along with the data about the states. In this project, the data considered is number of covid-19 positive cases in Indian states. 

## Installation
Download or clone this repo and install all the dependencies required for this project by running command:
`npm install`

Remember for geochart, the library used is: **ng2-google-charts**
This will be automatically installed by running above command.
To learn more about ng2-google-charts library, refer:  https://github.com/gmazzamuto/ng2-google-charts 

### Files of importance
If you are looking the files where modification needs to be done in order to use Map, kindly go to the following files:
* 'src/app/app.module.ts'
* 'src/app/geochart/geochart.component.html'
* 'src/app/geochart/geochart.component.ts'

------------

Kindly ignore the piechart directory as I am currently working on it and it is not required for map purpose. Also ignore the service and model files as they are used only to get data from api.
