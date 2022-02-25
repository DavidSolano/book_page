const app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        bookShit: [
            {
                product: 'No Longer Human',
                image: '../images/No Longer Human.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Osamu Dazai", "Page Count - 271", "Translator - Donald Keene"],
                getProductDetails: false,
                bookDetails: "Portraying himself as a failure, the protagonist of Osamu Dazai's " +
                    "No Longer Human narrates a seemingly normal life even while he feels himself " +
                    "incapable of understanding human beings. Oba Yozo's attempts to reconcile himself " +
                    "to the world around him begin in early childhood, continue through high school, " +
                    "where he becomes a \"clown\" to mask his alienation, and eventually lead to a " +
                    "failed suicide attempt as an adult. Without sentimentality, he records the casual " +
                    "cruelties of life and its fleeting moments of human connection and tenderness."
            },
            {
                product: 'Oblomov',
                image: '../images/Oblomov.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Ivan Goncharov", "Page Count - 576", "Translator - C. J. Hogarth"],
                getProductDetails: false,
                bookDetails: "Written with sympathetic humor and compassion, this masterful portrait" +
                    " of upper-class decline made Ivan Goncharov famous throughout Russia on its " +
                    "publication in 1859. Ilya Ilyich Oblomov is a member of Russia’s dying " +
                    "aristocracy—a man so lazy that he has given up his job in the Civil Service, " +
                    "neglected his books, insulted his friends, and found himself in debt. " +
                    "Too apathetic to do anything about his problems, he lives in a grubby, " +
                    "crumbling apartment, waited on by Zakhar, his equally idle servant. " +
                    "Terrified by the activity necessary to participate in the real world, " +
                    "Oblomov manages to avoid work, postpones change, and—finally—risks " +
                    "losing the love of his life. This superb translation by David Magarshack " +
                    "captures all the subtle comedy and near-tragedy of the original."
            },
            {
                product: 'The Bridge to Lucy Dunne',
                image: '../images/The Bridge to Lucy Dunne.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Exurb1a", "Page Count - 166"],
                getProductDetails: false,
                bookDetails: "A mad astronaut ejects a starship's sleeping crew into deep space. " +
                    "A playwright conjures her perfect lover into existence. Three time travellers " +
                    "appear to a motorbike mechanic, drink a little tea, and ruin his life. Mankind " +
                    "discovers the secrets of travelling to the stars, and promptly forgets them again."
            },
            {
                product: 'The Sweet Spot: The Pleasures of Suffering and the Search for Meaning',
                image: '../images/The Sweet Spot.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Paul Bloom", "Page Count - 304"],
                getProductDetails: false,
                bookDetails: "Why do we so often seek out physical pain and emotional turmoil? " +
                    "We go to movies that make us cry, or scream, or gag. We poke at sores, " +
                    "eat spicy foods, immerse ourselves in hot baths, run marathons. " +
                    "Some of us even seek out pain and humiliation in sexual role-play. " +
                    "Where do these seemingly perverse appetites come from?"
            }
        ]
    },
    methods: {
        updateCart() {
            this.cart += 1;
        }
    }
});










