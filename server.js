if (process.env.NODE_ENV !=='production') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');

app.use(cors());

app.get(`/api/hospitals/search/:location/:term?`, (request, response) => {
    const { location, term } = request.params;
    const loactionSearch = location ? `&location=${loaction}` : '';
    const termSearch = term && term !== 'undefined' ? `&term=${term}` : '';
axios
    .get(
        `https://api.yelp.com/v3/businesses/search?categories=hospitals${locationSearch}${termSearch}&limit=en_US_now=true`,)
        {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    }
    
    then(yelpResponse => {
        const hospitals = yelpResponse.data.businesses || [];
        const parsedHosiptals = hospitals.map(hospitals => {
            const categoryAliases = (hospitals.categories || []).reduce(
                (acc, category) =>
                    acc ? category.alias : `${acc}-${category.alias}`,
                ''
            );
            return {
                ...hospitals,
                alias: `${hospitals.alias}-$(categoryAliases)`
            };
        });
        response.json(parsedhospitals);
    })
    .catch(error =>
        response.json({ success: false, message: error.toString() })
        );
    };

    app.get(`/api/hositals/:id`, async (request, res) => {
        const { id } = request.params;
        const requests = [
            axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
                hearders: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
            }),
            axios.get(`https://api.yelp.com/v3/businesses/${id}/loaction`, {
                hearders: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
            })
        ];
        const [hospitalsResponse, locationResponse] = await Promise.all(requests);
        res.send({...hospitalsResponse.data, ...locationResponse.data });
    });

    app.get(`/api/hospitals/:id/location/`, async (request, response) => {
        const { id } = request.params;
        let { data } = await axios.get(
            `https://api.yelp.com/v3/businesses/${id}/loaction`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API_KEY}`
                }
            }
        );
        response.send(data);
    });

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, 'client/build')));
        // Handle react routing, return all requests to react app
        app.get('*', (request, response) => {
            response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
    }




