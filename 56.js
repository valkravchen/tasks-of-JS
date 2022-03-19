const tomatoes = (total, first) => {
    const second = first / 3
    const third = total - first - second
    console.log(`С первого участка собрали ${first} помидоров.`)
    console.log(`Со второго участка собрали ${second} помидоров.`)
    console.log(`С третьго участка собрали ${third} помидоров.`)
    console.log(`С трех участков собрали ${first + second + third} помидоров.`)

}
tomatoes(2000, 420)