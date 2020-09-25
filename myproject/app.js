var express = require("express");
var app = express();

hotel = require("./hotel.json");

// Get Details of Hotels
app.get("/alldetails", function(req, res)
{
    names = [];
    hotel.forEach(element =>
    {
        names.push(element);
    });
    res.send(names);
})


app.get("/searchCity", function(req, res)
{
    keyword = req.query.city;
    search = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            search.push(element.name); 
        }
    });
    res.send(search);
})


app.get("/searchType", function(req, res)
{
    keyword = req.query.types;
    Type = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            Type.push(element.name); 
        }
    });
    res.send(Type);
})


app.get("/searchCuisine", function(req, res)
{
    keyword = req.query.cuisine;
    Cuisine = [];
    hotel.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(keyword == element.cuisine[key])
            {
                Cuisine.push(element.name);
            }
        }
    });
    res.send(Cuisine);
})



app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})
