const getIDS = new Promise( 
    (resolve, reject) => {
        setTimeout(
            () => {resolve([523, 883, 432, 974])},
            1500)
    }
)

const getRecipe = recID => {
    return new Promise(
        (resolve, reject) => {
            setTimeout( 
                ID => {
                    const recipe = {
                        title: "Fresh tomato pasta",
                        publisher: "Jonas"
                    }
                    resolve(recipe)//se modifico
                },
                1500, 
                recID)
        }
    )
}

const getRelated = publisher => {
    return new Promise( 
        (resolve, reject) => {
            setTimeout(pub => {
                const recipe = {title: "Italian Pizzza",
                                publisher: "jonas"}
                resolve(`${pub}: ${recipe.title}`)
            }, 1500, publisher)
        }

    )
}

async function getRecipesAW(){
    const Ids = await getIDS
    console.log(Ids)

    const recipe = await getRecipe(Ids[2])
    console.log(`${Ids[2]}: ${recipe.title}, ${recipe.publisher}`)

    const related = await getRelated(recipe.publisher)
    console.log(related)

    return related
}

getRecipesAW().then( resultReturn => console.log(`aca tenes tu return de getRecipesAW, 
se hace esta forma: ${resultReturn}`))


