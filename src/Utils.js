export const generateEmptyDivs = (countDivs) => {
    let divs = [];
    for(let i = 0; i < countDivs; i++) {
        divs.push(<div className='empty-div'></div>);
    }

    return divs;
}