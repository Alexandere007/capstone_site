const  {GetGarbage,  AddGarbage} = require('./GarbageQueries')

function GarbageEndpoints(){
    this.getGarbage  =  (request,  response)=>{
        GetGarbage()
            .then(garbageData=>response.send(garbageData))
            .catch(catchError=>response.send(catchError))
    }
    this.addGarbage = (request, response)=>{
        AddGarbage(request.body)
            .then(r=>response.send(r))
            .catch(catchError=>response.send(catchError))
    }
}
module.exports  = {GarbageEndpoints}
