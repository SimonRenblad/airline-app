import { reactive } from 'vue'

export const store = reactive({
    user: "Rebecca",
    place1: "Copenhagen",
    place2: "Hong Kong",
    flight_number: "CX500",
    departure_time: "10:30am",
    airport_code_1: "CPH",
    airport_code_2: "HKG",
    terminal_number: 5,
    gate_number: 64,
    current_time: "load",
    immigration_duration: 10,
    bag_drop_duration: 12,
    security_duration: 5,
    distance_to_gate: 5
})
