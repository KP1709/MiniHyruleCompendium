export default function isTonicOrElixir(item) {
    if (item === "Fairy") {
        return `${item} Tonic`
    }
    else {
        return `${item} Elixir`
    }
}

// This function is used on the home page and the details page about the specific elixir/tonic