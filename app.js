const request = require ("request")
const geocode = require ('./data.js/geocode')
const forecast = require ("./data.js/forecast")
const country = process.argv[2]
geocode ( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data , '\n')
        if (data) {
            forecast( data.latitude , data.longitude , (error , data) => {
                console.log("ERROR : " , error)
                console.log("DATA  : " , data)
        } )
        } else {
            console.log("Data Entered Has An Error")
        }
} )