export const node1 = {
    id: 111,
    text: "do something A",
    options: [{
        text: "did you try Q?",
        next_node: 222
    },{
        text: "or maybe W?",
        next_node: 333
    },{
        text: "we're done",
        next_node: null
    }],
}

export const node2 = {
    id: 222,
    text: "do something B",
    options: [{
        text: "ok, let's try T?",
        next_node: 333
    },{
        text: "we're done",
        next_node: null
    }],
}

export const node3 = {
    id: 333,
    text: "do something C",
    options: [{
        text: "we're done",
        next_node: null
    }],
}


export const scenario1 = {
    id: 999,
    name: "power up fails",
    description: "can't pass powerup",
    tags: ["powerup", "matlab service"],
    category: "matlab",
    owners: ["Ariel", "Lior Cohen", "Gary Dickerson"],
    first_node: 111,
}