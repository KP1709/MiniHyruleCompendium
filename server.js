import {createServer, Model, Response} from "miragejs"

createServer({
    models:{
        items:Model,
    },

    seeds(server){
        server.create("item", {
            id:1,
            name: "Energizing",
            description:"The Energizing effect restores Link's Stamina Wheel in whole or in part, which is used when performing physical actions such as climbing walls or swimming.",
            ingredients: ["Energetic Rhino Beetle or Restless Cricket", "Monster Parts"],
            imageURL: "Energizing.png",
            effect: "Restores stamina",
            tag:"Stamina",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 2, 
            name:"Hearty",
            description:"The Hearty effect fully refills Link's Heart Containers and grants Temporary Hearts on top.",
            ingredients: ['Hearty Lizard', 'Monster Parts'],
            imageURL: "Hearty.png",
            effect: "Hearts up",
            tag:"Hearts",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 3, 
            name:"Mighty",
            description:"The Mighty effect grants Attack Up, increasing the damage Link deals to enemies for the duration.",
            ingredients: ['Bladed Rhino Beetle', 'Monster Parts'],
            imageURL: "Mighty.png",
            effect: "Attack power up",
            tag:"Attack",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 4, 
            name:"Hasty",
            description:"The Hasty effect grants Speed Up, which boosts Link's movement speed while running, swimming, or climbing.",
            ingredients: ['Hightail Lizard', 'Hot-Footed Frog', 'Monster Parts'],
            imageURL: "Hasty.png",
            effect: "Speed up",
            tag: "Speed",
            ingredientsNo: '3'
        })

        server.create("item",{
            id: 5, 
            name:"Spicy",
            description:"The Spicy effect grants Cold Resistance, preventing Link from taking damage in cold environments. Very useful when exploring snow-covered mountains or at night in the desert.",
            ingredients: ['Summerwing Butterfly or Warm Darner', 'Monster Parts'],
            imageURL: "Spicy.png",
            effect: "Cold resistance",
            tag: "Cold",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 6, 
            name:"Chilly",
            description:"The Chilly effect grants Heat Resistance, preventing Link from taking damage in hot environments. Crucial for long journeys through the desert in the daytime.",
            ingredients: ['Cold Darners or Winterwing Butterflies', 'Monster Parts'],
            imageURL: "Chilly.png",
            effect: "Heat resistance",
            tag: "Heat",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 7, 
            name:"Electro",
            description:"The Electro effect gives Link Shock Resistance, reducing the damage he takes when hit by an electrical attack.",
            ingredients: ['Thunderwing Butterfly', 'Electric Darner', 'Monster Parts'],
            imageURL: "Electro.png",
            effect: "Shock resistance",
            tag: "Shock",
            ingredientsNo: '3'
        })

        server.create("item",{
            id: 8, 
            name:"Fireproof",
            description:"This item grants Flame Guard, preventing Link from bursting into flame in volcanic areas. Despite the common name, it should not be confused with the more powerful Fireproof effect, which it does not grant.",
            ingredients: ['Fireproof Lizard or Smotherwing Butterfly', 'Monster Parts'],
            imageURL: "Fireproof.png",
            effect: "Flame resistance",
            tag: "Flame",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 9, 
            name:"Sneaky",
            description:"The Sneaky effect grants Stealth Up, reducing the noise Link makes and making it easier for him to sneak up on enemies and animals without being detected.",
            ingredients: ['Sunset Firefly', 'Monster Parts'],
            imageURL: "Sneaky.png",
            effect: "Sneaky up",
            tag: "Sneaky",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 10, 
            name:"Enduring",
            description:"The Enduring effect fully refills Link's Stamina Wheel and grants Temporary Stamina on top.",
            ingredients: ['Tireless Frog', 'Monster Parts'],
            imageURL: "Enduring.png",
            effect: "Restores stamina",
            tag: "Stamina",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 11, 
            name:"Fairy",
            description:"Drop a Fairy over a Cooking Pot. The Fairy Dust dropped will congeal with any other ingredients into a Fairy Tonic.",
            ingredients: ['Fairy'],
            imageURL: "Fairy.png",
            effect: "Restores hearts",
            tag: "Hearts",
            ingredientsNo: '1'
        })

        server.create("item",{
            id: 12, 
            name:"Bright",
            description:"The Bright effect grants Glow, causing Link to literally light up, making a ring of light around him in dark areas such as the Depths.",
            ingredients: ['Deep Firefly', 'Monster Parts'],
            imageURL: "Bright.png",
            effect: "Glow",
            tag: "Glow",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 13, 
            name:"Tough",
            description:"The Tough effect grants Defense Up, reducing the damage Link takes from enemies for the duration.",
            ingredients: ['Rugged Rhino Beetle', 'Monster Parts'],
            imageURL: "Tough.png",
            effect: "Defense up",
            tag: "Defense",
            ingredientsNo: '2'
        })

        server.create("item",{
            id: 14, 
            name:"Sticky",
            description:"The Sticky effect grants Slip Resistance, meaning Link slips less when climbing in the rain or on icy walls.",
            ingredients: ['Sticky Lizard or Sticky Frog', 'Monster Parts'],
            imageURL: "Sticky.png",
            effect: "Slip resistance",
            tag: "Sticky",
            ingredientsNo: '2'
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing= 5000

        this.get("/", (schema) =>{
            return schema.items.all()
            // return new Response(404)
        })

        this.get("/:elixirName", (schema, request) =>{
            const name = request.params.elixirName
            return schema.items.where({name: name})
        })
    }
})