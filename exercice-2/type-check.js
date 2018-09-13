
function type_check_v1(arg, type) {
    return typeof arg === type
}

function type_check_v2(arg1, arg2){
    if (typeof arg2 === 'object') {
        if (arg2.type !== undefined) {
            if (arg2.value !== undefined) {
                return typeof arg1 === arg2.type && arg1 === arg2.value
            }
            else {
                return typeof arg1 === arg2.type
            }
        }
        else if (arg2.enum !== undefined) {
            return arg2.enum.includes(arg1)
        }
    }
    else {
        console.log('Please send an object as a second argument')
    }
}

function type_check(arg1, arg2){
    if (type_check_v1(arg1, arg2.type)) {
        let prop = arg2.properties;
        Object.keys(prop).map(p => {
            console.log(type_check_v2(arg1[p], prop[p]));
            if(prop[p].type === 'object') {
                let prop_lvl2 = prop[p].properties;
                Object.keys(prop_lvl2).map(in_p => {
                    console.log(type_check_v2(arg1[p][in_p], { type: prop_lvl2[in_p] }))
                })
            }
        })
    }
}
