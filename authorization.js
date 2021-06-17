// export function authWithEmailAndPassword(email, password) {
//     const apiKey = 'iWSRBretlAZbV1n6HpHpA7ZOiYG2'
//     return fetch(`rdwd`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 email, password,
//                 returnSecureToken: true,
//             })
//         }
//     )
// }

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBRi77xSKKht2Uqqp_1ciCWl-YiAjkDprY'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => data.idToken)

}