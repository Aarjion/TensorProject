// const App = {
//     data() {
//         return{
//             wall_area: wall_area,
//             floor_area: floor_area,
//             plaster: plaster,
//             cost_plaster: cost_plaster,
//             level_filling: level_filling,
//             finish_filling: finish_filling,
//             cost_level_filling: cost_level_filling,
//             cost_finish_filling: cost_finish_filling,
//             primer: primer,
//             cost_primer: cost_primer,
//             filling_floor: filling_floor,
//             cost_filling_floor: cost_filling_floor,
//             coupler: coupler,
//             cost_coupler: cost_coupler
//         }
//     },
//     methods: {
//         square(){
//             ///   #///     Неактивная площадь комнаты  ###
//             var ne_s = (height_window * width_window) * count_window + (height_door * width_door) * count_door

// //   #///     Рабочая площадь стен ###
//             this.wall_area = 2 * (length_room * height_room) + 2 * (width_room * height_room) - ne_s

// //   #///     Площадь пол/потолок ###
//             this.floor_area = length_room * width_room
            
            

//             // alert("Неактивная площадь комнаты",ne_s,
//             //     "Рабочая площадь стен", wall_area,
//             //     "Площадь пол/потолок",floor_area)
//         },
//         apartament_preparation(){
//             ///   ##########///   Cтены ###############
//             ///    Расчёт Штукатурки
//             this.plaster = wall_area * 1 * 17
//             this.cost_plaster = 14 * plaster


//             ///   Расчёт Шпатлёвка (в кг)
//             this.level_filling = wall_area * 4.5 * 0.5
//             this.finish_filling = wall_area * 1 * 0.2
//             this.cost_level_filling = 43 * level_filling
//             this.cost_finish_filling = 40 * finish_filling


//             ///   Грунтовка (в кг)
//             this.primer = wall_area * 0.16
//             this.cost_primer = 84 * primer


//             ///   ########///   Потолок ###########
//             this.filling_floor = floor_area * 1 * 0.2
//             this.cost_filling_floor = 40 * filling_floor


//             ///   ########///   Пол ##########
//             ///   Стяжка (в кг)
//             this.coupler = floor_area * 0.3 * 33
//             this.cost_coupler = coupler * 17
//         }
//     }
// }

// Vue.createApp(App).mount('#app')