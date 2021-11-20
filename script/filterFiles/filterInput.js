let inputSearchField = document.querySelector('#inputSearch');
let inputSearchContainer = '';

//
const getResult = () => {
    inputSearch.addEventListener('keyup', () => {
        inputSearchContainer = inputSearchField.value.trim();
        let item = JSON.parse(JSON.stringify(cards));
        // let filteredText = item.filter((card) => card.title.includes(inputSearchContainer) || card.description.includes(inputSearchContainer))
        let filteredText = item.filter((card) => card.title.toLowerCase().includes(inputSearchContainer) || card.description.toLowerCase().includes(inputSearchContainer));
        console.log(filteredText);


        /*  let matches = cards.filter(state => {
            const regex = new RegExp(`^${inputSearchContainer}`, 'gi');
            return state.title.match(regex) || state.description.match(regex);
        });

        console.log(matches);
    }) */
    })
};
getResult();