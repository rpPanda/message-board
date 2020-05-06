export default async function trump () {
    const response = await fetch('http://api.tronalddump.io/random/quote')
    const { value } = await response.json()
    return value
}
