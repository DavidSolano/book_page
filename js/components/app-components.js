Vue.component('products', {
    props: {
        booklist: {
            type: Array,
            required: true
        }
    },

    template: `
    <b-container class="p-0 m-0" fluid>
        <b-card-group v-for="book in booklist">
            <span class="d-inline-flex">
                
                <book v-bind:book="book" v-bind:booklist="booklist"></book>
                
            </span>
        </b-card-group>
    </b-container>
    `,
})



Vue.component('book', {
    props: {
        book: {
            type: Object,
            required: true
        },

        booklist: {
            type: Array,
            required: true
        },
    },

    template: `

    <b-card
    :header="book.product"
    
    img-alt="Image"
    img-overlay
    tag="article"
    style="max-width: 20rem"
    class="mb-2 d-inline-flex p-0"
    thumbnail
  >
    <b-card-img :src="book.image" alt="Image" top></b-card-img>
    <div v-for="stuff in book.details">
        <b-card-text>
            {{stuff}}
        </b-card-text>
    </div>
    <b-card-text>
       Price: {{book.bookPrice}}
    </b-card-text>
    <hr>
    <b-alert v-model="book.getProductDetails" variant="dark" dismissible>
        <h4>Book Information</h4>
        <hr>
        <p>
            {{ book.bookDetails }}
        </p>
    </b-alert>
    
   
    <b-button @click="book.inCart=true" variant="primary">Add to Cart</b-button>
      
    <b-button @click="book.getProductDetails=true" variant="primary">Get Info</b-button>
  </b-card>

    `
})

Vue.component ('shopping-cart', {
    props: {
        book: {
            type: Object,
            required: true
        },

        booklist: {
            type: Array,
            required: true
        }
    },

    template: `
    <b-card :title="book.product">
        <b-card-text>
            price: {{book.bookPrice}}
        </b-card-text>
    </b-card>
    
    `
})
