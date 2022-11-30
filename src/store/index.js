import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { id: 'm1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ6P23TFEUsZdR3U5XXhJo4uGrgMoWMNcLQ&usqp=CAU', title: 'El viaje a la playa', descripcion: 'Sol, arena, mar, vacaciones de verano!' },
                { id: 'm2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdrXJ6vH0918PQBcNjP89ECIwu0SrNk9_5w&usqp=CAU', title: 'La comida con mis papas', descripcion: 'Reunion familiar con todos' },
                { id: 'm3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ6P23TFEUsZdR3U5XXhJo4uGrgMoWMNcLQ&usqp=CAU', title: 'El viaje a canada', descripcion: 'Viaje de trabajo y de conocer otra ciudad' },
                { id: 'm4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdrXJ6vH0918PQBcNjP89ECIwu0SrNk9_5w&usqp=CAU', title: 'La vista al rancho de mis abuelos', descripcion: 'Vista de mis personas favoritas' },
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        }
    }

});

export default store;