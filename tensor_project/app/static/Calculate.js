
const App = {
    el: "app",
    data() {
        return{
            long_room: null,
            width_room: null,
            height_room: null,
            height_door: null,
            width_door: null,
            count_door: null,
            height_window: null,
            width_window: null,
            count_window: null,
            // space_area: null,
            // length_part: null,
            // width_part: null,
            // number_in_packeging: null,
            // price: null,
            // price_paint: null,
            // width_wallpaper: null,
            // price_wallpaper: null,
            // length_tile_wall: null,
            // width_tile_wall: null,
            // number_tiles_box_wall: null,
            // price_tiles_wall: null,
            // length_panel: null,
            // width_panel: null,
            // number_panels_box: null,
            // price_panela: null,
            // width_linol: null,
            // price_linol: null,
            // length_lamin: null,
            // width_lamin: null,
            // number_lamin_box: null,
            // price_lamin: null,
            // length_tile_floor: null,
            // width_tile_floor: null,
            // number_tile_floor_box: null,
            // price_tile_floor: null,
            // price_paint_ceil: null,
            // length_dekor_tiles: null,
            // width_dekor_tiles: null,
            // number_dekor_tiles_box: null,
            // price_dekor_tiles: null,



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
            cost_coupler: null
            // number_packegs: null,
            // cost: null,
            // number_paint: null,
            // cost_paint: null,
            // number_roll: null,
            // cost_wallpaper: null,
            // glue: null,
            // cost_glue: null,
            // number_tiles_wall: null,
            // cost_tiles_wall: null,
            // number_panels_wall: null,
            // cost_panels_wall: null,
            // length_list: null,
            // cost_linol: null,
            // number_lamin: null,
            // cost_lamin: null,
            // number_tail_floor: null,
            // cost_tail_floor: null,
            // paint_ceil: null,
            // cost_paint_ceil: null,
            // number_dekor_tiles: null,
            // cost_dekor_tiles: null
        }
    },
    methods: {
        square() {
            ///   #///     Неактивная площадь комнаты  ###
            var ne_s = (this.height_window * this.width_window) * this.count_window + (this.height_door * this.width_door) * this.count_door

//   #///     Рабочая площадь стен ###
            this.wall_area = 2 * (this.long_room * this.height_room) + 2 * (this.width_room * this.height_room) - ne_s

//   #///     Площадь пол/потолок ###
            this.floor_area = this.long_room * this.width_room

        },
        apartament_preparation() {
            ///   ##########///   Cтены ###############
            ///    Расчёт Штукатурки
            this.plaster = this.wall_area * 1 * 0.9
            this.cost_plaster = 14 * this.plaster


            ///   Расчёт Шпатлёвка (в кг)
            this.level_filling = this.wall_area * 4.5 * 0.5
            this.finish_filling = this.wall_area * 1 * 0.2
            this.cost_level_filling = 43 * this.level_filling
            this.cost_finish_filling = 40 * this.finish_filling


            ///   Грунтовка (в кг)
            this.primer = this.wall_area * 0.16
            this.cost_primer = 84 * this.primer


            ///   ########///   Потолок ###########
            this.filling_floor = this.floor_area * 1 * 0.2
            this.cost_filling_floor = 40 * this.filling_floor


            ///   ########///   Пол ##########
            ///   Стяжка (в кг)
            this.coupler = this.floor_area * 0.3 * 33
            this.cost_coupler = this.coupler * 17


        },
//         calculate_quantity(space_area, length_part, width_part, number_in_packeging) {
//             let value_area = space_area + (space_area * 0.05)
//             let part_area = (length_part * width_part) / 10000
//             let number_parts = value_area / part_area  ///   Штук  (не упаковок)
//             let number_packegs = number_parts / number_in_packeging  ///   Количество упаковок
//             let cost = number_packegs * price
//             let object = Object.create({}, {number_packegs: {number_packegs}, cost: {cost}})
//             return object
//         },
//         material_sten() {
//             ///   Краска (в л)
//             if (checkbox_paint == true) {
//                 this.number_paint = this.wall_area / 10
//                 this.cost_paint = this.price_paint * this.number_paint
//             }///   Обои
//             if (checkbox_oboi == true) {
//                 ///   if checkbox_raport == False {
// ///       number_roll = ((length_room + width_room) * 2 / width_wallpaper) * height_room / 10)  ///   Ко-во рулонов
// ///   else
// ///       if checkbox_stik_p == true
// ///           number_roll = ((length_room + width_room) * 2 / width_wallpaper) * (height_room + raport) / 10)
// ///       elif checkbox_stik_s == true
// ///           number_roll = ((length_room + width_room) * 2 / width_wallpaper) * (height_room + 1.5 * raport) / 10)

//                 this.number_roll = ((this.long_room + this.width_room) * 2 / this.width_wallpaper) * this.height_room / 10  ///   Ко-во рулонов
//                 this.cost_wallpaper = this.price_wallpaper * this.number_roll

//                 ///   Клей в кг
//                 this.glue = this.wall_area * 0.3
//                 this.cost_glue = 2 * this.glue
//             }
//             ///   Плитка
//             if (checkbox_tiles_wall == true) {
//                 this.number_tiles_wall.number_packegs,
//                     this.cost_tiles_wall.cost = this.calculate_quantity(this.wall_area, this.length_tile_wall, this.width_tile_wall,
//                         this.number_tiles_box_wall, this.price_tiles_wall)
//             }
//             ///   Панели
//             if (checkbox_panels_wall == true) {
//                 this.number_panels_wall.number_packegs,
//                     this.cost_panels_wall.cost = this.calculate_quantity(this.wall_area, this.length_panel, this.width_panel,
//                         this.number_panels_box, this.price_panela)
//             }
//         },
//         material_pol() {

// ///   Линолеум
//             if (checkbox_lin == true) {
//                 this.number_list = this.width_room / this.width_linol
//                 this.length_list = this.length_room * this.number_list  ///   в метрах погонных
//                 this.cost_linol = this.length_list * this.price_linol
//             }


// ///   Ламинат
//             if (checkbox_lamin == true) {
//                 this.number_lamin.number_packegs, this.cost_lamin.cost = this.calculate_quantity(this.floor_area,
//                     this.length_lamin, this.width_lamin, this.number_lamin_box.cost, this.price_lamin)

//             }

// ///   Плитка
//             if (checkbox_tail_floor == true) {
//                 this.number_tail_floor.number_packegs, this.cost_tail_floor.cost = this.calculate_quantity(this.floor_area,
//                     this.length_tile_floor, this.width_tile_floor, this.number_tile_floor_box, this.price_tile_floor)
//             }
//         },
//         material_potolok() {

// ///   Краска (в л)
//             if (checkbox_tail_floor == true) {
//                 this.paint_ceil = this.floor_area / 10
//                 this.cost_paint_ceil = this.price_paint_ceil * this.paint_ceil

//             }
// //        ///   Декоративные плиты
//             if (checkbox_dekor_tiles == true) {
//                 this.number_dekor_tiles.number_packegs, this.cost_dekor_tiles.cost = this.calculate_quantity(this.floor_area,
//                     this.length_dekor_tiles, this.width_dekor_tiles, this.number_dekor_tiles_box, this.price_dekor_tiles)
//             }
//         }
    }
};


Vue.createApp(App).mount('#app')



//
// function calculate(){
//     var wall_area, floor_area = square()
//     apartament_preparation()
//     if (check_na_stenu == true){
//         material_sten()
//     }
//     if (check_na_pol == true){
//         material_pol()
//     }
//     if (check_na_potolok == true){
//         material_potolok()
//     }
// }