const app = new Vue({
    el: '#app',
    methods: {
      showCart() {
          let total = 0;
          this.displayThis = !this.displayThis
          for (let i = 0; i < this.bookArray.length; i++) {
              if (this.bookArray[i].inCart === true) {
                  total += this.bookArray[i].bookPrice
              }
          }
          this.checkoutTotal = total;

      }
    },
    data: {
        checkoutTotal: 0,
        bookArray: [
            {
                product: 'No Longer Human',
                image: '../images/No Longer Human.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Osamu Dazai", "Page Count - 271", "Translator - Donald Keene"],
                getProductDetails: false,
                bookPrice: 13.43,
                inCart: false,
                showCart: false,
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
                bookPrice: 18.53,
                inCart: false,
                showCart: false,
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
                bookPrice: 3.99,
                inCart: false,
                showCart: false,
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
                bookPrice: 19.80,
                inCart: false,
                showCart: false,
                bookDetails: "Why do we so often seek out physical pain and emotional turmoil? " +
                    "We go to movies that make us cry, or scream, or gag. We poke at sores, " +
                    "eat spicy foods, immerse ourselves in hot baths, run marathons. " +
                    "Some of us even seek out pain and humiliation in sexual role-play. " +
                    "Where do these seemingly perverse appetites come from?"
            },
            {
                product: 'Discourses and Selected Writings',
                image: '../images/Epictetus.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Epictetus", "Page Count - 304"],
                getProductDetails: false,
                bookPrice: 15.99,
                inCart: false,
                showCart: false,
                bookDetails: "DESPITE BEING BORN into slavery, Greco-Roman philosopher Epictetus " +
                    "became one of the most influential thinkers of his time. Discourses and Selected " +
                    "Writings is a transcribed collection of informal lectures given by the philosopher " +
                    "around AD 108. A gateway into the life and mind of a great intellectual, it is also an " +
                    "important example of the usage of Koine or ?common? Greek, an ancestor to Standard Modern " +
                    "Greek."
            },
            {
                product: 'The Daily Stoic',
                image: '../images/Daily Stoic.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Ryan Holiday", "Page Count - 416"],
                getProductDetails: false,
                bookPrice: 17.32,
                inCart: false,
                showCart: false,
                bookDetails: "Why have history's greatest minds—from George Washington to Frederick the " +
                    "Great to Ralph Waldo Emerson, along with today's top performers from Super Bowl-winning " +
                    "football coaches to CEOs and celebrities—embraced the wisdom of the ancient Stoics? " +
                    "Because they realize that the most valuable wisdom is timeless and that philosophy is " +
                    "for living a better life, not a classroom exercise."
            },
            {
                product: 'Anxious: The Modern Mind in the Age of Anxiety',
                image: '../images/anxious.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Joseph LeDoux", "Page Count - 482"],
                getProductDetails: false,
                bookPrice: 14.59,
                inCart: false,
                showCart: false,
                bookDetails: "This is the groundbreaking premise behind a wave of new research, " +
                    "led by the lab of renowned neuroscientist Joseph LeDoux. He believes that fear and " +
                    "anxiety are not innate states, simply waiting to be unleashed in the brain. " +
                    "Rather they are assembled experiences, and that has huge implications for patients. " +
                    "By mapping brain circuits, LeDoux explains the origins of anxiety disorders and " +
                    "reveals discoveries that can restore sufferers to normality. As impressive as it is " +
                    "timely, Anxious is a comprehensive survey of cutting-edge research revolutionising " +
                    "the way we treat our most pressing mental health issue."
            },
            {
                product: 'Unwinding Anxiety',
                image: '../images/Unwinding Anxiety.jpg',
                inStock: true,
                inventory: 40,
                details: ["Author - Judson Brewer", "Page Count - 304"],
                getProductDetails: false,
                bookPrice: 19.99,
                inCart: false,
                showCart: false,
                bookDetails: "We are living through one of the most anxious periods any of us can remember. " +
                    "Whether facing issues as public as a pandemic or as personal as having kids at home " +
                    "and fighting the urge to reach for the wine bottle every night, we are feeling overwhelmed " +
                    "and out of control. But in this timely book, Judson Brewer explains how to uproot anxiety " +
                    "at its source using brain-based techniques and small hacks accessible to anyone."
            },
        ],

        displayThis: false
    }
});










