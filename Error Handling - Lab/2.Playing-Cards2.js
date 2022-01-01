function Cards(face, suit){
    const validCardFace =  {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 'J', Q: 'Q', K: 'K', A: 'A',
    }
    const validCardSuit = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663', }

    
    }

    let [checkface,checkSuit] = [checker(validCardFace, face), checker(validCardSuit, suit)]

    return `${checkface}${checkSuit}`
}

console.log(Cards('A', 'S'))
