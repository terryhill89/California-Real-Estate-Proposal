# California Real Estate Proposal

## Overview:

Real estate is a significant asset class, with investments ranging from residential properties to commercial buildings, industrial facilities, and undeveloped land. The real estate market is dynamic and impacted by factors such as economic conditions, demographics, and government policies. With the increase in interest rate and house prices, an analysis of real estate market will highlight school and neighborhood characteristics across the state of California.

## SQLite database
An SQLite database was constructed for this project (Creating_SQLite_Database.ipynb)
  * the SQLite database contains four tables each representing the topics covered by the members:
  
          * education (Kyra)
          
          * crime (Terry)
          
          * demographics (Katejoe)
          
          * median_prices (Armann)
          
           ## Example of Leaflet map output

 
# (Armann median_prices)
## Data sources for median prices portion of the project
  1) county_facts.csv 
        derived from web scraping of  https://en.wikipedia.org/wiki/List_of_counties_in_California
        (pandas was used for web scraping and code is included (webscraping_county_facts.ipynb)
        
  2) GDP_Cali_2021.csv
        derived from download from https://www.bea.gov/data/gdp/gdp-county-metro-and-other-areas
  
  3) median_mortgage.csv 
        derived from download from https://data.census.gov/
        this has median prices of homes according to zip code 
        
  4) zipdemos 
        derived from https://simplemaps.com/data/us-zips
 JSON data for the outline of the State of California was downloaded from: https://eric.clst.org/assets/wiki/uploads/Stuff/
 
![Screenshot 2023-04-12 at 9 22 09 AM](https://user-images.githubusercontent.com/115322974/231520736-1dea4ca5-7d30-4d2f-b435-d268fb21705d.png)

# (Terry Crimes)
## Set Overview and History:
- What is the crime rate around here?
- What is the most crime that happens in each county?
- Will my home be safe if I decide to move to this county?

A crime is an act specifically prohibited by law, or failure to perform an act specifically required by law, for which punishment is prescribed (California Penal Code section 15). 

Crimes determines how safe our community is and what is happening around the community before you decide to buy or build a permanet home. My crime pie chart that I collected crime reports and did an analysis that allows you to choose the county where you plan to buy or build, and this service will display a list of the crimes committed in the vicinity, complete with a breakdown of the how many crimes and type of crimes. You can compare potential neighborhoods with these tools to see which ones have the lowest crime rates

The ten crime offenses collected as part of the UCR Program were chosen because of their seriousness, frequency of occurrence, and likelihood of being reported to law enforcement. These offenses include criminal homicide, rape, robbery, aggravated assault, burglary, motor vehicle theft, larceny-theft, and arson.

The Department of Justice (DOJ) and Criminal Justice Statistics Center (CJSC) collects information on Crime as reported by law enforcement agencies (LEA) throughout the state of California. The data is reported as part of the Federal Bureau of Investigation’s (FBI), Uniform Crime Reporting Program (UCR) and includes the number of actual offenses as well as the number of clearances as per the UCR guidelines and goes handed in hand with Census bureau data. Supplemental data are also collected on the nature of some of the crime types and the value of property stolen and recovered. The information is used to provide statistical data on the offenses of: criminal homicide, rape, robbery, aggravated assault, burglary, larceny-theft, motor vehicle theft, and arson when looking for property in California. My Pie chart gives a visual of what the crime rates are, what are the most crimes that happen in each county this will help you make a determination whether your home will be safe and if you will decide to buy in this county.

My struggle was trying to plot a bar chart to show the crime data. The data was to much to provide on a bar chart and the way my CSV and JSON data was set I was unable to do the bar chart I had originally wanted, I had to try other plots and even start over. I decided to use a pie chart with a dropdown list to display each county with my list of crimes located on the side that you can also add a crime and remove a crime so you can look at each crime by it self all all together. Building the pie chart I had to reconstruct my Index.HTML file, my app.js file and add a data.js file I used my CSV data pulled from the website after I cleaned it, 

![Screenshot_20230413_071326](https://user-images.githubusercontent.com/112741203/231925124-5938fe38-205b-42aa-8665-78e637882242.png)

### Resources
- Zipcodes - https://simplemaps.com/data/us-zips
 JSON data for the outline of the State of California was downloaded from:    https://eric.clst.org/assets/wiki/uploads/Stuff/
- Original PDF files - https://data-openjustice.doj.ca.gov/sites/default/files/dataset/2022-08/Arrests%20Context_081122.pdf
- Orignal CSV - https://openjustice.doj.ca.gov/data


