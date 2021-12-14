const App = {
    el: "app",
    delimiters: ['[[', ']]'],

    data() {
        return {
            long_room: null,
            width_room: null,
            height_room: null,
            height_door: null,
            width_door: null,
            count_door: null,
            height_window: null,
            width_window: null,
            count_window: null,
            width_material: null,
            price_material: null,
            raport: null,
            length_plint: null,
            space_area: null,
            length_part: null,
            width_part: null,
            number_in_packeging: null,
            price_paint: null,
            width_wallpaper: null,
            price_wallpaper: null,



            wall_area: null,
            floor_area: null,
            plaster: null,
            cost_plaster: null,
            level_filling: null,
            finish_filling: null,
            cost_level_filling: null,
            cost_finish_filling: null,
            primer: null,
            cost_primer: null,
            filling_floor: null,
            cost_filling_floor: null,
            coupler: null,
            cost_coupler: null,
            number_items: null,
            number_roll: null,
            cost_wallpaper: null,
            number_paint: null,
            cost_paint: null,
            length_list: null,
            cost_material: null,
            calc_number: null,
            cost: null
        }
    },
    methods: {
        square() {
            ///   #///     Неактивная площадь комнаты  ###
            let ne_s = (this.height_window * this.width_window) * this.count_window + (this.height_door * this.width_door) * this.count_door

//   #///     Рабочая площадь стен ###
            this.wall_area = 2 * (this.long_room * this.height_room) + 2 * (this.width_room * this.height_room) - ne_s

//   #///     Площадь пол/потолок ###
            this.floor_area = this.long_room * this.width_room
        },



        get_res(unit, area, thickness, consumption, weight, width_room, width_material, long_room, height_room,
                price_material, length_part, width_part, number_in_packeging,
                raport, length_plint) {


            if (unit == "кг") {
                // Площадь * Толщину слоя * Расход на 1м2 = количестов в кг
                let calc_number = Math.ceil(area * thickness * consumption)
                // Цена за мешок / кг в мешке * Количество
                let cost = (price_material / weight) * calc_number
                return {calc_number: calc_number, cost: cost}//"кг"


            } else if (unit == "м.п.") {
                let number_list = width_room / width_material
                let length_list = parseFloat((long_room * number_list).toFixed(2) ) ///   в метрах погонных
                let cost_material = length_list * price_material

                return {length_list: length_list, cost_material: cost_material}// "м_погон"


            } else if (unit == "шт") {
                let value_area = area + (area * 0.05)
                let part_area = (length_part * width_part)
                let number_parts = value_area / part_area  ///   Штук  (не упаковок)
                let number_packegs = Math.ceil(number_parts / number_in_packeging)  ///   Количество упаковок
                let cost = number_packegs * price_material

                return {number_packegs: number_packegs, cost: cost} // "шт"


            } else if (unit == "л") {
                let number_paint = parseFloat((area / weight).toFixed(2))
                let cost_paint = price_material * number_paint

                return {number_paint: number_paint, cost_paint: cost_paint}  //"л"
            } 
            else if (unit == "рул") {
                let number_roll = 0
                let checkbox_stik_p = true
                if (raport == null) {
                    number_roll = Math.ceil(((long_room + width_room) * 2 / width_material) * height_room / 10)
                } else {
                    if (checkbox_stik_p == true) {
                        number_roll = Math.ceil(((long_room + width_room) * 2 / width_material) * (height_room + raport) / 10)

                    } else {
                        number_roll = Math.ceil(((long_room + width_room) * 2 / width_material) * (height_room + 1.5 * raport) / 10)
                    }
                }
                let cost_wallpaper = price_material * number_roll

                return {number_roll: number_roll, cost_wallpaper: cost_wallpaper}   //"рул"

            } else if (unit == "м") {
                let number_items = (2 * long_room + 2 * width_room) / length_plint
                return {number_items: number_items}// "шт для м"

            } 
            else if (unit == "м2") {
                let length_list = parseFloat((area / 2.6).toFixed(2))
                let cost_material = length_list * price_material

                return {length_list: length_list, cost_material: cost_material}// "м_погон"
            }
                else return 0
        },

        full_calc() {
            this.square()
            let material_ceiling = document.getElementById("input_ceiling").value;
            let material_floor = document.getElementById("input_floor").value;
            let material_walls = document.getElementById("input_wall").value;

            document.getElementById('output1').style.display = 'block';

            if (material_floor != 0) {
                let obj_floor = this.get_res(material_floor, this.floor_area, 0.4, 33, 30,
                    this.width_room, this.width_material, this.long_room, this.height_room, this.price_material = 1000,
                    this.length_part = 1.2, this.width_part = 0.4, this.number_in_packeging = 10, 
                     this.raport, this.length_plint)
                console.log(obj_floor)

            }


            if (material_ceiling != 0) {
                let obj_ceiling =  this.get_res(material_ceiling, this.floor_area, 0.4, 33, 30,
                    this.width_room, this.width_material, this.long_room, this.height_room, this.price_material = 1000,
                 this.length_part = 1, this.width_part = 0.5, this.number_in_packeging = 10,
                     this.raport, this.length_plint)
                console.log(obj_ceiling)

            }


            if (material_walls != 0) {
                let obj_walls = this.get_res(material_walls, this.wall_area, 0.1, 2, 30,
                    this.width_room, this.width_material = 1, this.long_room, this.height_room, this.price_material = 1000,
                     this.length_part = 2.5, this.width_part = 0.2, this.number_in_packeging = 10,
                     this.raport = 0.35, this.length_plint)
                console.log(obj_walls)
            }
        }
    }
};

Vue.createApp(App).mount('#app')