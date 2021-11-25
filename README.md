 Step 1: Upload a csv file to load data.
 
 #Filter
 Drag along the axis to filter data

 #Country Axis
 Country Axis represent initial of country name. Click on any alphabet to see the cases according to the country.

 #Month
 Click on any month axis value to see the date axis

 #reorder
 Click on the Axis name and drag the axis wherever you want

 #Flip
 Double click on the axis name to flip the axis

 #Rescale
 Drag any length on the axis and click Rescale button to rescale

 #Scatterplot
  Select any range on any two axis and click Scatterplot button

 #Compare Plot
 Select any range on any two axis and select compare plot button.

 #ShowGrid
 Click ShowGrid button to list the data in grid form

 #HideAxis
 Select the axis you want to hide from the dropdown then click hide axis.

 #Removetick
 Same as hideaxis ,but click remove tick button.

 ##
 Color Scale According to alpbhabet and After clicking alpbhabet color scale according to location(Country Name).

 For Average Excel Data 
<!-- =IF(MOD(ROW(),5)=0,AVERAGEIF(B14:B18,"*" & B14 & "*",D14:D18),"") -->

For finding the activate axis

```parallelCoordinates([], false)
      data = d3.csv.parse(contents);
      dataToFilter = data;
      selected_axis = actives; --Actives shows the active axis
```
For finding the min and max of axis
     ```lower_range = exte[0][0]; -- exte is passed from d3.paracords.js
        upper_range = exte[0][1];
```
For click function

## API

<a name="d3_parcoords" href="#d3_parcoords">#</a> d3.<b>parcoords</b>(<i>config</i>)

Setup a new parallel coordinates chart.

<a name="parcoords" href="#parcoords">#</a> <b>parcoords</b>(<i>selector</i>)

<a name="parcoords_animationTime" href="#parcoords_animationTime">#</a> parcoords.<b>animationTime</b>(<i>milliseconds = 110</i>)

Allows you to set the time it takes for flipping an axis on double click.

```javascript
// Flipping an axis will take half a second
parcoords.animationTime(100);


## Credits

This library created with examples, suggestions and contributions from Mike Bostock, Jason Davies, Mary Becica, Stephen Boak, Ziggy Jonsson, Ger Hobbelt, Johan Sundström, Raffael Marty, Hugo Lopez, Bob Monteverde, Vadim Ogievetsky, Chris Rich, Patrick Martin, Sean Parmelee, Alfred Inselberg, Scott Markwell, Julian Heinrich, and Bertjan Broeksema.


=IF((OR(C813 = "Japan",C813 ="Nepal",C813 ="India",C813 ="China",C813 ="Korea",C813 ="Iran",C813 ="Hong Kong",C813 ="Kuwait",C813 ="Oman",C813 ="Lebanon",C813 ="Indonesia",C813 ="Iraq",C813 ="Malyasia",C813 ="Maldives",C813 ="Mongolia",C813 ="Oman")),"Asia","")

=IF((OR(C2628 = "Japan",C2628 ="Nepal",C2628 ="India",C2628 ="China",C2628 ="Korea",C2628 ="Iran",C2628 ="Hong Kong",C2628 ="Kuwait",C2628 ="Oman",C2628 ="Lebanon",C2628 ="Indonesia",C2628 ="Iraq",C2628 ="Malaysia",C2628 ="Maldives",C2628 ="Mongolia",C2628 ="Oman")),"Asia","")

=IF((OR(C2998 = "Ecuador",C2998 ="Argentina",C2998 ="Bolivia",C2998 ="Brazil",C2998 ="Colombia",C2998 ="Chile",C2998 ="Peru",C2998 ="Paraguay",C2998 ="Guyana",C2998 ="Venezuela",C2998 ="Uruguay",C2998 ="Egypt")),"Africa","")