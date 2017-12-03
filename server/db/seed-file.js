const Promise = require('bluebird')
const db = require('./index.js')
const {Students, Campuses} = require('./models')

var data= {
    students: [
        {
            first_name: "Buffy",
            last_name: "Summers",
            email: "queenB@hotmail.com",
            gpa: 3.0
        },
        {
            first_name: "Xander",
            last_name: "Harris",
            email: "X_man9999@yahoo.com",
            gpa: 2.8
        },
        {
            first_name: "Willow",
            last_name: "Rosenberg",
            email: "WRosenburg@sunnydalehigh.com",
            gpa: 4.0
        },
        {
            first_name: "Cordelia",
            last_name: "Chase",
            email: "Cordettes1@hotmail.com",
            gpa: 3.1 
        },
        {
            first_name: "Anya",
            last_name: "Jenkins",
            email: "human12345@aol.com",
            gpa: 2.0
        },
        {
            first_name:"Jonathan",
            last_name: "Levinson",
            email: "theTrio4Ever@aol.com",
            gpa: 3.8
        },
        {
            first_name:"Dawn",
            last_name: "Summers",
            email: "misunderstood@yahoo.com",
            gpa: 3.8
        },
        {
            first_name:"Warren",
            last_name: "Mears",
            email: "robotlover@aol.com",
            gpa: 3.8
        },
        {
            first_name:"Andrew",
            last_name: "Wells",
            email: "TheDarkSide42@aol.com",
            gpa: 3.8
        },
        {
            first_name:"Faith",
            last_name: "Lehane",
            email: "AscensionOrBust@hotmail.com",
            gpa: 3.8
        }


    ],
    campuses:[
        {
            name:"Quad",
            imageUrl:"https://vignette3.wikia.nocookie.net/buffy/images/2/28/Sunnydale_high_school_quad_overhead_shot.jpg/revision/latest?cb=20131001073105",
            description:"A prominent area was the quad, a large exterior area located at the left of the school with a gate at the end of quad. The quad had benches, palm trees, a water fountain, and a clock tower where in 1999, the heavily bullied and ignored Jonathan Levinson almost killed himself.",
        },
        {
            name: "Library",
            imageUrl:"https://vignette.wikia.nocookie.net/buffy/images/0/01/Sunnydale_High_School_Library.jpg/revision/latest?cb=20131113065434",
            description:"Sunnydale High facilities included a library located around the middle of the school over the exact place of the Hellmouth. The library acted as the Scooby Gang's main base of operations and strangely was not often used by the students with the exception of the more studious. Cordelia Chase herself did not enter the library until she needed the gang's help as she claimed that she 'had a life'. The library has been known to give students the wiggins and when Rupert Giles took the position as librarian, he added many historical volumes and biographies (probably about Demonology and the Occult).",
        },
        {
            name:"Cafeteria",
            imageUrl:"https://vignette.wikia.nocookie.net/buffy/images/3/32/Season_one_sunnydale_cafeteria.jpg/revision/latest?cb=20131001071431",
            description:"The school dining facility. In 1997, Dr. Gregory's beheaded body was found here by Buffy and Cordelia. In 1998, James Stanley conjured a large number of snakes at the cafeteria. This resulted in the school being temporarily shutdown and the Sadie Hawkins dance being cancelled.",
        },
        {
            name: "Basement",
            imageUrl:"https://3.bp.blogspot.com/-n8uzqA9fD2o/WWmJEYqLwaI/AAAAAAAAAtw/NwGPK19O1Tsf3kOKavF3S4tMekPvrfilgCLcBGAs/s1600/NeverLeaveBSBasement.jpg",
            description:"The basement level of the school with a boiler room..In 1997, a student Laura Egler isolates herself there to smoke a cigarette and was beaten by the Ugly Man. In 1998, a tunnel was made in the boiler room that led to the location of the Bezoar who used its offspring, distributed via eggs in Health Class, to possess the student body as well as the faculty, and make them mine underground. This was stopped when Buffy killed the beast."

        },
        {
            name:"Gym",
            imageUrl:"https://vignette1.wikia.nocookie.net/buffy/images/b/ba/Sunnydale_high_school_new_gym.jpg/revision/latest?cb=20131001043623",
            description: "The gymnasium was where indoor sports events were held such as the basket ball matches with other schools. Cheerleading practice and auditions were held in the gym, where in one of these auditions Amber Grove's hands combusted when she was cursed by a witch. and Dawn Summers made a disastrous performance"
        }
    ]
}

db.sync({force: true})
.then(()=>{
    console.log("Dropped old data, seeding the database with new data")
    return Promise.map(Object.keys(data),(name)=>{
        console.log('name: ',name)
        //map each keys of data (the names of our models) 
        return Promise.map(data[name],(record)=>{
            //console.log('record: ', record)
            //map each object containing a single record into a model.create
            return db.model(name).create(record)
            console.log(db.model(name))
        })
    })
})
.then(()=>console.log("Finished instering data"))
.catch(err=>console.error("There was an error", err.message))
.finally(()=>{
    db.close();
    console.log("connection closed")
    return null;
})