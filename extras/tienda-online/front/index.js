let app = new Vue({
    el: '#app',
    data: {
        titulo_pagina: 'Supermecado - Productos',
        productos: [

        ]
    },
    beforeMount() {
        this.cargarProductos()
    },
    methods: {
        async cargarProductos() {
            try {


                let url = 'http://localhost:3000/api/v1/productos'
                let { data } = await axios.get(url)
                this.productos = data.info
            } catch (error) {
                console.log(error);
            }
        }
    }
})