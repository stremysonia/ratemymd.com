if (process.env.NODE_ENV !=='production') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('api.yelp.com/v3/categories/:locale//')
    const { } = request.params;
    const 
    const
axios
    .get(
        `https://api.yelp.com/v3/categories/{alias}`,
        {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    }
)
    .then(yelpResponse => {
        const medicalCenter = yelpResponse.data.categories || [];
        const parsedMedicalCenter = medicalCenter.map(medicalCenter => {
            const categoryAliases = (medicalCenter.categories || []).rerduce(
                (acc, category) =>
                    acc ? category.alias : `${acc}-${category.alias}`,
                ``
            );
            return {
                ...medicalCenter,
                alias: `${medicalCenter.alias}-$(categoryAliases)`
            };
        });
        response.json(parsedMedicalCenter);
    })
    .catch(error =>
        response.json({ success: false, message: error.toString() })
        );
    });

    app.get(``)
        const { category } = request.params;
        const request = [
            axios.get(`https://api.yelp.com/v3/categories/${alias}`, {
                hearders: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
            })
        ];
        const [medicalCeneter, reviewResponse] = await Promise.all(requests);
        res.send({...medicalCeneterResponse.data, ...reviewResponse.data });
    });



