const {creat_id} = require("nv-facutil-basic");


function range(si,ei) {
    return(Array.from({ length: ei-si }).map((v, i) => i + si))
}

function seqs_slct(seqs,arr) {
    return(arr.filter((r,i)=>(seqs.includes(i))))
}



function is_empty_dict(d) {
    return(Object.entries(d).length === 0)
}

function dict_values(d) {
    let entries = Object.entries(d)
    let values = entries.map(r=>r[1])
    return(values)
}

function dict_keys(d) {
    let entries = Object.entries(d)
    let keys = entries.map(r=>r[0])
    return(keys)
}

function dict_length(d) {
    let entries = Object.entries(d)
    return(entries.length)
}

function dict_foreach(d,f) {
    for(let k in d) {
        f(k,d[k])
    }
    return(d)
}

function dict_map(d,f) {
    for(let k in d) {
        d[k] = f(k,d[k])
    }
    return(d)
}

function dict_plus(d0,d1) {
    //unique k ,no common k
    for(let k in d1) {
        d0[k] =d1[k]
    }
    return(d0)    
}

function dict_update(d0,d1) {
    //unique k ,no common k
    for(let k in d1) {
        let cond = !(k in d0)
        if(cond) {
            d0[k] =d1[k]
        }    
    }
    return(d0)
}



function dtb_kv_rm(k,v,dtb) {
    dtb = dtb.filter(r=>(r[k]!==v))
    return(dtb)
}

function dtb_kv_get_seq(k,v,dtb) {
    let seq = dtb.findIndex(r=>r[k]===v)
    return(seq)
}

function dcp(o) {
    return(JSON.parse(JSON.stringify(o)))
}

function mat_map(m,map_func) {
    for(let i=0;i<m.length;i++) {
        lyr = m[i]
        for(let j=0;j<lyr.length;j++) {
            m[i][j] = map_func(m[i][j],i,j)
        } 
    }
    return(m)
}


function is_cu_property(prop) {
    let cond0 = (prop[0] !== '_')
    let cond1 = (prop[0] !== '$')
    let cond = (cond0 && cond1)
    return(cond)
}



module.exports = {
    gen_guid:creat_id,
    range:range,
    seqs_slct:seqs_slct,
    dict_length:dict_length,
    is_empty_dict:is_empty_dict,
    dict_values:dict_values,
    dict_keys:dict_keys,
    dict_map:dict_map,
    dict_foreach:dict_foreach,
    dict_plus,
    dict_update,
    dtb_kv_rm,
    dtb_kv_get_seq,
    dcp:dcp,
    mat_map:mat_map,
    is_cu_property:is_cu_property
}
