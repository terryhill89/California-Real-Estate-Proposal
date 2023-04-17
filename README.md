# California Real Estate Proposal

## Overview:

Real estate is a significant asset class, with investments ranging from residential properties to commercial buildings, industrial facilities, and undeveloped land. The real estate market is dynamic and impacted by factors such as economic conditions, demographics, and government policies. With the increase in interest rate and house prices, an analysis of real estate market will highlight school and neighborhood characteristics across the state of California.

## Dashboard design
A prototype design of the dashboard is created using the moqups app to design the wireframe of our project's final product. Here is the image of the wireframe.

![](https://github.com/terryhill89/California-Real-Estate-Proposal/blob/main/Dashboard%20wireframe.png)

## SQLite database
An SQLite database was constructed for this project (Creating_SQLite_Database.ipynb)
  * the SQLite database contains four tables each representing the topics covered by the members:
  
          * education (Kyra)
          
          * crime (Terry)
          
          * demographics (Katejoe)
          
          * median_prices (Armann)
          
          
# Breakdown of task:
Each team member will go through this tasks as we perform analysis to address the real estate market characteristics mentioned above.
Data Retrieval
Data cleaning
Storing data
Analysis

 
# (Armann Median_Prices)
## Data sources for median prices portion of the project

![Screenshot 2023-04-12 at 9 22 09 AM](https://user-images.githubusercontent.com/115322974/231520736-1dea4ca5-7d30-4d2f-b435-d268fb21705d.png)

### Resources
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

# (Terry Crimes)
## Set Overview:
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

# (KateJoe Demographics)
Demographic data can play a significant role in understanding real estate trends and patterns. Here are some key demographic factors that can impact the real estate market:

- Age: 
The age of the population can influence the type of housing that is in demand. For example, as baby boomers retire, they may be more interested in downsizing to smaller homes or moving to retirement communities.

- Income per capita: Income levels can affect the affordability of housing in a particular area. Higher-income neighborhoods may have more expensive homes, while lower-income areas may have more affordable housing options.
 
- Household income: 
Household income levels can impact the affordability of housing in a particular area. Areas with higher median household incomes may have more expensive homes, while lower-income areas may have more affordable housing options. Additionally, areas with higher median household incomes may attract higher-end retail and entertainment options, as well as amenities such as parks, schools, and community centers, which can contribute to the desirability of the neighborhood.

- Home value: 
Home values are a critical factor in the real estate market. Higher home values can indicate a strong demand for housing in a particular area, while lower home values may suggest a lack of demand or oversupply of housing. Factors that can influence home values include location, neighborhood amenities, school quality, crime rates, and overall economic conditions.

- Transit public transport: 
Access to public transportation can be an essential factor for many homebuyers and renters, particularly in urban areas. Proximity to transit stations or major transportation hubs can increase the desirability of a property and may be associated with higher property values. Properties located near public transit may also appeal to renters who prioritize walkability and access to amenities.

- Poverty: 
Poverty can impact the real estate market in significant ways. By understanding the impact of poverty on the demand for housing, as well as the quality and affordability of housing options in different neighborhoods, real estate professionals can make more informed investment and development decisions. Additionally, policymakers and community organizations may take steps to address poverty-related housing challenges through targeted affordable housing programs, economic development initiatives, and other strategies.

- Race and ethnicity: 
Racial and ethnic diversity can influence the types of housing that are in demand, as well as the areas where people choose to live.

By analyzing demographic data, real estate professionals can gain insights into the needs and preferences of different segments of the population, which can help inform their decision-making and investment strategies.

![Screenshot 2023-04-13 205336](https://user-images.githubusercontent.com/112741203/231937698-51c5c2f4-e5a0-45e8-a0e5-76cb6226e7cf.png)

### Resources
-  Review the following page to review the Python library documentation -  https://github.com/CommerceDataService/census-wrapper
-  Review the following page to learn more about the data labels: <https://gist.github.com/afhaque/60558290d6efd892351c4b64e5c01e9b>

# (Kyra Education)

Quality of schools can be a major deciding factor in making a decision on where to move for a family. Much as we would like to believe that hard work on a student's part is all that matters, unfortunately the dedication of the student's classmates and the funding available to the school can both have a major impact on the outcomes for a student. 

With that in mind, I decided to do a comparison of school quality against median house prices. The median home prices for each zip code in California were already aggregated into json and csv files, so I didn't need to get that data, but the school data was somewhat challenging. I initially wanted to get my school data from an API, however every API that I could access for free had a very limited number of calls that could be made and no way to condense the calls to stay under the free call limit. I eventually settled on the free download from the California Assessment of Student Performance and Progress. The data was given in caret delimited format in a text file, so that needed to be processed into a more usable format first. I initially tried using Excel, but ran into the problem that Excel has a ~1 million row limit and two of my datasets were over 3 million rows of data. However I rapidly realized that pandas has no such limit, so imported my data to a pandas dataframe and transformed my data from there.

There were many more rows of data than were useful, so I first needed to filter out all of the unecessary rows, including rows for the state overall, the aggregate data for the school districts, the data for each individual grade, and the data for students in different demographic categories. I only wanted the data for all students in all grades at the individual school level. The data provided was number of students with scores and percentages of students exceeding standards, meeting standards, nearly meeting standards, and not meeting standards, as well as a column adding the exceeding and meeting standards. The actual numbers of students at each of those levels was not provided and I needed that in order to combine all of the students in the same zip code. I back calculated the numbers of students in each category using the percentages and the number of students with scores and then once a column was created for each category I grouped the data by zip code and summed the numbers of students and the students tested for each zip code. I then calculated the percentages of each category with the summed numbers. Once that was complete I merged that dataframe with the median housing data previously mentioned. The data was then exported to CSV for database purposes and json for visualizations.

This data was then imported to a javascript file using d3. The data was looped through to get it into usable arrays and those arrays were placed into a scatter chart of median home prices on the x-axis and percentage of students meeting or exceeding standards on the y-axis. As I suspected, for both the math and english tests, in both 2021 and 2022, there was a moderately strong positive correlation between median home price and percentage of students passing, with a vanishingly small chance of that correlation being due to random chance. Once I got past a typo hurdle that was stopping me from being able to check my data, creating the scatter chart was fairly straightforward.

I was also responsible for aggregating everybody's code into one workable dashboard. The code for the bar chart was based on how my code was constructed, so several of the variables were named the same as well as the functions. It took quite a bit of trouble shooting to find all of the problem function names, but once those were altered to be different all of the codes functioned properly. Another sticking point was with version control on github. The code that I had been altering to play nicely with the other code in our HTML file was apparently an older version of another person's code, so when the modified code was pushed, it wiped out all of the modifications that I had made that made the code run correctly. Those issues were sorted out and the final product in github is the most recent version of everybody's code.

![image](https://user-images.githubusercontent.com/112741203/231937747-7c0942ce-9aac-42e7-aeb5-6c53738f6710.png)

### Resources
- California Assessment of Student Performance and Progress - https://caaspp-elpac.ets.org/caaspp/ResearchFileListSB?ps=true&lstTestYear=2022&lstTestType=B&lstCounty=00&lstDistrict=00000#dl




