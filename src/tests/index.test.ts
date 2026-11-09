const columns = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['d1', 'd2', 'd3'],
    ['e1', 'e2', 'e3'],
    ['z1', 'z2', 'z3'],
    ['w1', 'w2', 'w3'],
    ['t1', 't2', 't3'],
]

const columns2 = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['d1', 'd2', 'd3'],
]

const columns3 = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['d1', 'd2', 'd3'],
]

for (let i = 0; i < columns3[0].length; i++) {
    const rows = columns3.map((row) => {
        return row[i]
    })
    console.log(rows, rows.length)
    // console.log(rows.join(' '))
}
