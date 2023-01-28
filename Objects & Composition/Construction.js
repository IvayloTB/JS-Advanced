function construction(obj) {
    if (obj.dizziness) {
        return {
            ...obj,
            levelOfHydrated: obj.weight * 0.1 * obj.experience,
            dizziness: false,
        }
    }
   return {...obj}

}
console.log(construction({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
}))


construction({
    weight: 120,

    experience: 20,

    levelOfHydrated: 200,

    dizziness: true
})
