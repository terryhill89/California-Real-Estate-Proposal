## Data sources for median prices portion of the project (Armann section)

  1) county_facts.csv 
        derived from web scraping of  https://en.wikipedia.org/wiki/List_of_counties_in_California
        (pandas was used for web scraping and code is included (webscraping_county_facts.ipynb)
        
  2) GDP_Cali_2021.csv
        derived from download from https://www.bea.gov/data/gdp/gdp-county-metro-and-other-areas
  
  3) median_mortgage.csv 
        derived from download from https://data.census.gov/
        
  4) zipdemos 
        derived from https://simplemaps.com/data/us-zips

________________________________________________________________
## SQLite database
An SQLite database was constructed for this project (Creating_SQLite_Database.ipynb)
  * the SQLite database contains four tables each representing the topics covered by the members:
  
          * education (Kyra)
          
          * crime (Terry)
          
          * demographics (Katejoe)
          
          * median_prices (Armann)
                       
 ________________________________________________________________
 
 ## Example of Leaflet map output
 
 JSON data for the outline of the State of California was downloaded from: https://eric.clst.org/assets/wiki/uploads/Stuff/
 
![Screenshot 2023-04-12 at 9 22 09 AM](https://user-images.githubusercontent.com/115322974/231520736-1dea4ca5-7d30-4d2f-b435-d268fb21705d.png)



