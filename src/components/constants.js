export const nodes = [{
    id: 111,
    text: "Are you working in simulation/tool?",
    tooltip: null,
    url: null,
    options: [{
        text: "Yes",
        next_node: 222
    },{
        text: "No",
        next_node: 1111
    }],
},
{
    id: 222,
    text: "Can you see the utility opened?",
    tooltip: null,
    url: null,
    options: [{
        text: "Yes",
        next_node: 333
    },{
        text: "No",
        next_node: 444
    }],
},
{
    id: 333,
    text: "Open 'Matlab is stuck when running' confluence page",
    tooltip: null,
    url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home",
    options: [{
        text: "Open page",
        next_node: null 
    }],
},
{
    id: 444,
    text: "Is 'Matlab Service' device in 'Exist' mode",
    tooltip: "Go to TPE->Devices->Units->Configuration Table, and see there.",
    url: null,
    options: [{
        text: "Yes",
        next_node: 666
    },{
        text: "No",
        next_node: 555
    }],
},{
    id: 555,
    text: "Open 'How to configure matlab service' confluence page",
    tooltip: null,
    url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home", // need to add url
    options: [{
        text: "Open page",
        next_node: null 
    }],
},{
    id: 666,
    text: "Are you using Level2 / MAI / LMAI utility?",
    tooltip: "Level 2 / MAI / LMAI are integrated matlab utilities",
    url: null,
    options: [{
        text: "Yes",
        next_node: 888
    },{
        text: "No",
        next_node: 1000
    }],
},{
    id: 1000,
    text: "Contact the Calibrations team",
    tooltip: null,
    url: "", // need to add url
    options: [{
        text: "Done",
        next_node: null 
    }],
},{
    id: 888,
    text: "Did you validate all schema parameters?",
    tooltip: "Level 2 / MAI / LMAI are integrated matlab utilities",
    url: null,
    options: [{
        text: "Yes",
        next_node: 1000
    },{
        text: "No",
        next_node: 999
    }],
},{
    id: 999,
    text: "Open 'How to validate schema parameters' confluence page",
    tooltip: null,
    url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home",
    options: [{
        text: "Open page",
        next_node: null 
    }],
},{
    id: 1111,
    text: "Is it a non-official utility?",
    tooltip: "Non official utility is a utility that is not a part of the production code",
    url: null,
    options: [{
        text: "Yes",
        next_node: 2222
    },{
        text: "No",
        next_node: 1000
    }],
},{
    id: 2222,
    text: "Are you using the correct MCR runner?",
    tooltip: "MCR runner is a Matlab Compilation Runner. There are 3 supported types of MCR - 2012a, 2016a, 2019b",
    url: null,
    options: [{
        text: "Yes",
        next_node: 1000
    },{
        text: "No",
        next_node: 3333
    }],
},{
    id: 3333,
    text: "Open 'How to configure the correct MCR' confluence page",
    tooltip: null,
    url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home",
    options: [{
        text: "Open page",
        next_node: null 
    }],
},{
        id: 301,
        text: "Did you push the commit?",
        tooltip: "",
        url: null,
        options: [{
            text: "Yes",
            next_node: 302
        },{
            text: "No",
            next_node: 303
        }],
},{
        id: 302,
        text: "Contact Devops",
        tooltip: "Devops_Service_Desk@AMAT.onmicrosoft.com",
        url: null,
        options: {
            text: "Open Outlook",
            next_node: null
        },
    },{
        id: 303,
        text: "Is this the last commit you did?",
        tooltip: "",
        url: null,
        options: [{
            text: "Yes",
            next_node: 304
        },{
            text: "No",
            next_node: 305
        }],
    },{
        id: 304,
        text: "open 'How To Commit Ammend' confluence page",
        tooltip: "",
        url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home",
        options: {
            text: "Open page",
            next_node: null
        },
    },{
        id: 305,
        text: "Is it only due to invalid Jira ID?",
        tooltip: "Search for reason in failure log",
        url: null,
        options: [{
            text: "Yes",
            next_node: 306
        },{
            text: "No",
            next_node: 307
        }],
    },{
        id: 306,
        text: "Ask DevOps | branch owner for delivery permission to the branch",
        tooltip: "",
        url: null,
        options: [{
            text: "Got permission",
            next_node: null
        },{
            text: "Didn't got permission",
            next_node: 307
        }],
    },{
        id: 307,
        text: "open 'How To Git Rebase' page",
        tooltip: "",
        url: "http://dcilpa317:8090/display/SysSW/Calibrations+SW+Home",
        options: {
            text: "Open page",
            next_node: null
        },
    }
];


export const scenario1 = {
    id: 1,
    name: "Matlab is not working",
    description: "matlab is not working",
    tags: ["powerup", "matlab service"],
    category: "matlab",
    owners: ["Ariel", "Lior Cohen", "Gary Dickerson"],
    first_node: 111,
};

export const scenario2 = {
    id: 2,
    name: "I wrote a wrong commit message",
    description: "I wrote a wrong commit message",
    tags: ["push", "git"],
    category: "git",
    owners: ["Ariel", "Lior Cohen", "Gary Dickerson"],
    first_node: 301,
};