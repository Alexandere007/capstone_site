const {admin} = require('../../Imports')

function GetGarbage() {
    return new Promise((resolve, reject) => {
        admin.firestore().collection('Garbage').get()
            .then(garbageSnapshot => {
                let garbageData = [];
                garbageSnapshot.forEach(garbage => garbageData.push(garbage.data()))
                console.log(garbageData)
                resolve(garbageData)
            })
            .catch(catchError=>{
                reject(catchError)
            })
    })
}

function AddGarbage(data) {
    return new Promise((resolve, reject) => {
        admin.firestore().collection('Garbage').add({time: data.time, geoLocation: {lat: data.geoLocation.lat, lng: data.geoLocation.lng}, image: data.image})
            .then(()=>resolve("Added"))
            .catch(catchError=>{
                reject(catchError)
            })
    })
}

module.exports = {GetGarbage,  AddGarbage}
