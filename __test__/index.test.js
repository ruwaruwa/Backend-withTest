
const app=require('../index')
// const j=require('jest')

//
const testing = require('supertest')
  describe("tijaabinta / service ges,post,put MUST be  200",() => {

    let client_id;
    //get 
    it("get  waa  200 statuscode", async() => {
        const res=await testing(app).get('/clients')
        expect(res.statusCode).toBe(200)
    })




    //post
    it("post testing Route,expected 200 status code",async ()=>{
        const postes=await testing(app).post('/clients').send({
            name:"ruwa",
            client_logo:"https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    
        })
         client_id=postes.body.clients._id
      
        expect(postes.statusCode).toBe(200);

    })
 //get one clients
 it("get byid  waa  200 statuscode", async() => {

    const res=await testing(app).get(`/clients/${client_id}`)
    expect(res.statusCode).toBe(200)
    console.log(client_id)
})

   ///put
   it("updated value tobe  200 statuscode", async() => {

    const res=await testing(app).put(`/clients/${client_id}`)
    expect(res.statusCode).toBe(200)
    //console.log(client_id)
})
  
})
//



///servce TEST
describe("tijaabinta / service ges,post,put MUST be  200",() => {

     let service_id;
    //get 
    it("get  must be  200 statuscode", async() => {
        const response=await testing(app).get('/service')
        expect(response.statusCode).toBe(200)
    })




    //post
    it("post testing Route,expected 200 status code",async ()=>{
        const postes=await testing(app).post('/service').send({
            title:"welcome to services",
            description:"wxan heleysaa more infr",
            icon:"https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    
        })
        service_id=postes.body.sarvice._id
      //console.log(postes)
        expect(postes.statusCode).toBe(200);

    })
 //get one service
 it("get byid services  must be  200 statuscode", async() => {

    const res=await testing(app).get(`/service/${service_id}`)
    expect(res.statusCode).toBe(200)
    console.log(service_id)
})

   ///put
   it("updated value tobe  200 statuscode", async() => {

    const res=await testing(app).put(`/service/${service_id}`)
    expect(res.statusCode).toBe(200)
   
})
  
})



///gellry section

describe("tijaabinta / homesections ges,post,put MUST be  200",() => {

    let gellary_id;
   //get 
   it("getall must be  200 statuscode", async() => {
       const responses=await testing(app).get('/gellary')
       expect(responses.statusCode).toBe(200)
   })




   //post
    it("posts testing Route,expected 200 status code",async ()=>{
       const posts= await testing(app).post('/gellary').send({
       title:"hhasah",
       logo:"https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"

   
       })
       gellary_id=posts.body.gellary._id
    //  console.log(posts)
     expect(posts.statusCode).toBe(200)

   })

//get one gellary
it("get byid services  must be  200 statuscode", async() => {

   const respos=await testing(app).get(`/gellary/${gellary_id}`)
   expect(respos.statusCode).toBe(200)
   console.log(gellary_id)
})

///

  ///put
  it("updated values  must be 200 statuscode", async() => {

   const resp= await testing(app).put(`/gellary/${gellary_id}`)
   expect(resp.statusCode).toBe(200)
  
})

 //delete
 it("deleted gelerry values  must be  200 statuscode", async() => {

    const respo=await testing(app).delete(`/gellary/${gellary_id}`)
    expect(respo.statusCode).toBe(200)
   
 })

})

////about section
describe("tijaabinta / about ges,post,put MUST be  200",() => {

    let about_id;
   //get 
   it("getall must be  200 statuscode", async() => {
       const responses=await testing(app).get('/about')
       expect(responses.statusCode).toBe(200)
   })




   //post
    it("posts testing Route,expected 200 status code",async ()=>{
       const pos= await testing(app).post('/about').send({
        full_descrip:"gguuuuuu",
        description:"shsghsgahgs"
   
       })
       about_id=pos.body.contacts._id
    //  console.log(posts)
     expect(pos.statusCode).toBe(200)

   })

//get one about
it("get byid about  must be  200 statuscode", async() => {

   const respos=await testing(app).get(`/about/${about_id}`)
   expect(respos.statusCode).toBe(200)
   console.log(about_id)
})

///

  ///put
  it("updated values  must be 200 statuscode", async() => {

   const resp= await testing(app).put(`/about/${about_id}`)
   expect(resp.statusCode).toBe(200)
  
})

 //delete
 it("deleted about values  must be  200 statuscode", async() => {

    const respo=await testing(app).delete(`/about/${about_id}`)
    expect(respo.statusCode).toBe(200)
   
 })

})



////contactform Setion
describe("tijaabinta / contact ges,post,put,delete MUST be  200",() => {

    let contact_id;
   //get 
   it("ge tall must be  200 statuscode", async() => {
       const responses=await testing(app).get('/contact')
       expect(responses.statusCode).toBe(200)
   })




   //post
    it("post testing Route,expected 200 status code",async ()=>{
       const add= await testing(app).post('/contact').send({
        name:"welcome",
       phone:"0622152425",
       message:"hsdystwtegddddddd"

       })
       contact_id=add.body.contactus._id
     console.log(add)
     expect(add.statusCode).toBe(200)

   })

//get one gellary
it("get byid services  must be  200 statuscode", async() => {

   const respos=await testing(app).get(`/contact/${contact_id}`)
   expect(respos.statusCode).toBe(200)
   console.log(contact_id)
})

// ///

//   ///put
  it("updated values  must be 200 statuscode", async() => {

   const resp= await testing(app).put(`/contact/${contact_id}`)
   expect(resp.statusCode).toBe(200)
  
})

 //delete
 it("deleted contact values  must be  200 statuscode", async() => {

    const respo=await testing(app).delete(`/contact/${contact_id}`)
    expect(respo.statusCode).toBe(200)
   
 })

})

///home section

//users
describe("tijaabinta / shirkada ges,post,put,delete MUST be  200",() => {

    let shirkada_id;
   //get 
   it("ge tall must be  200 statuscode", async() => {
       const responses=await testing(app).get('/shirkada')
       expect(responses.statusCode).toBe(200)
   })




   //post
    it("post testing Route,expected 200 status code",async ()=>{
       const add= await testing(app).post('/shirkada').send({
        her_title:"welcome to services",
        name:"betah",
         hero_description:"wxan heleysaa more infr",
         hero_img:"https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
         footer_Text:"hhshshs",
         Instigram:"betahous",
         twitter:"betahous",
         tiktok:"hetahoustikt",
         facebook:"betahpuse pAGE",
         phone:"061535353",
         email:"ruwa@gmail.com",
         address:"madina",
         logo:"https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
         location:"makmadiina"

       })
    shirkada_id=add.body.homesection._id
     console.log(add)
     expect(add.statusCode).toBe(200)

   })

// get one homesection
 it("get byid home  must be  200 statuscode", async() => {

    const resp=await testing(app).get(`/shirkada/${shirkada_id}`)
    expect(resp.statusCode).toBe(200)
    console.log(shirkada_id)
 })

///

  ///put
  it("updated values  must be 200 statuscode", async() => {

   const resp= await testing(app).put(`/shirkada/${shirkada_id}`)
   expect(resp.statusCode).toBe(200)
  
})

 //delete
 it("deleted shirkada values  must be  200 statuscode", async() => {

    const respo=await testing(app).delete(`/shirkada/${shirkada_id}`)
    expect(respo.statusCode).toBe(200)
   
 })

})