express = require("express");
app = express();

hotel = require("./hotel.json");

// Get Details of Hotels
app.get("/alldetails", function(req, res)
{
    names = [];
    hotel.forEach(element =>
    {
        names.push(element) // this will only send name of the hotel, for full detail use push(element) 
    });
    res.send(names);
})

// Search Hotel by City (Mysore, Banglore and Hyderabad)
app.get("/searchCity", function(req, res)
{
    keyword = req.query.city;
    search = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            search.push(element.name); // this will only send name of the hotel, for full detail use push(element)
        }
    });
    res.send(search);
})

// Search Hotel by Type (Veg/Non-Veg)
app.get("/searchType", function(req, res)
{
    keyword = req.query.types;
    Type = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            Type.push(element.name); // this will only send name of the hotel, for full detail use push(element)
        }
    });
    res.send(Type);
})

// Search by Cuisine (Indian, Arabian and Italian)
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


// Server Listening...
app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})