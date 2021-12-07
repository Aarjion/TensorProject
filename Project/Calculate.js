function square() {
    var length_room, width_room, height_room, count_window, height_window, width_window, count_door, height_door,
        width_door

    length_room = document.getElementById('long_room');
    length_room = parseFloat(length_room.value).toFixed(2);
    width_room = document.getElementById('width_room');
    width_room = parseFloat(width_room.value).toFixed(2);
    height_room = document.getElementById('height_room');
    height_room = parseFloat(height_room.value).toFixed(2);

    // count_window = document.getElementById('count_windows');
    // count_window =  parseInt(count_window.value).toFixed(2);
    height_window = document.getElementById('height_window');
    height_window = parseFloat(height_window.value).toFixed(2);
    width_window = document.getElementById('width_window');
    width_window = parseFloat(width_window.value).toFixed(2);
    count_door = document.getElementById('count_doors');
    count_door =  parseInt(count_door.value).toFixed(2);
    height_door = document.getElementById('height_door');
    height_door = parseFloat(height_door.value).toFixed(2);
    width_door = document.getElementById('width_door');
    width_door = parseFloat(width_door.value).toFixed(2);

///   #///     Неактивная площадь комнаты  ###
    //var ne_s = (height_window * width_window) * count_window + (height_door * width_door) * count_door
    var ne_s = (height_window * width_window)  + (height_door * width_door) 

//   #///     Рабочая площадь стен ###
    var wall_area = 2 * (length_room * height_room) + 2 * (width_room * height_room) - ne_s

//   #///     Площадь пол/потолок ###
    var floor_area = Math.length_room * width_room


    return {wall_area:wall_area, floor_area:floor_area}
}



function apartament_preparation() {

    var wall_area, floor_area

///   ##########///   Cтены ###############
///    Расчёт Штукатурки  (Площадь * Толщину слоя * Расход штукатурки на 1м2) = количество в кг
    var plaster = wall_area * 1 * 17
    var cost_plaster = 14 * plaster
    document.getElementById('').innerHTML = Math.ceil(plaster)
    document.getElementById('').innerHTML = cost_plaster


///   Расчёт Шпатлёвка (в кг)
    var level_filling = wall_area * 4.5 * 0.5
    var finish_filling = wall_area * 1 * 0.2
    var cost_level_filling = 43 * level_filling
    var cost_finish_filling = 40 * finish_filling
    document.getElementById('').innerHTML = Math.ceil(level_filling)
    document.getElementById('').innerHTML = Math.ceil(finish_filling)
    document.getElementById('').innerHTML = cost_level_filling
    document.getElementById('').innerHTML = cost_finish_filling


///   Грунтовка (в кг)
    var primer = wall_area * 0.16
    var cost_primer = 84 * primer
    document.getElementById('').innerHTML = Math.ceil(primer)
    document.getElementById('').innerHTML = cost_primer


///   ########///   Потолок ###########
    var filling_floor = floor_area * 1 * 0.2
    var cost_filling_floor = 40 * filling_floor
    document.getElementById('').innerHTML =Math.ceil(filling_floor)
    document.getElementById('').innerHTML = cost_filling_floor


///   ########///   Пол ##########
///   Стяжка (в кг)
    var coupler = floor_area * 0.3 * 33
    var cost_coupler = coupler * 17
    document.getElementById('').innerHTML = Math.ceil(coupler)
    document.getElementById('').innerHTML = cost_coupler

}



function calculate_quantity() {

    var space_area, length_part, width_part, number_in_packeging, price

    var value_area = space_area + (space_area * 0.05)
    var part_area = (length_part * width_part) / 10000
    var number_parts = value_area / part_area  ///   Штук  (не упаковок)
    var number_packegs = number_parts / number_in_packeging  ///   Количество упаковок
    var cost = number_packegs * price

    return {number_packegs:number_packegs, cost:cost}
}



function material_sten() {

    var length_room, width_room, height_room, wall_area, price_paint, width_wallpaper,
        price_wallpaper, length_tile_wall, width_tile_wall, number_tiles_box_wall, price_tiles_wall //, raport

    price_paint = document.getElementById('');
    price_paint = parseFloat(price_paint.value).toFixed(2)
    width_wallpaper = document.getElementById('');
    width_wallpaper = parseFloat(width_wallpaper.value).toFixed(2)
//    raport = document.getElementById('');
//    raport = parseFloat(raport.value).toFixed(2)
    price_wallpaper = document.getElementById('');
    price_wallpaper = parseFloat(price_wallpaper.value).toFixed(2)
    length_tile_wall = document.getElementById('');
    length_tile_wall = parseFloat(length_tile_wall.value).toFixed(2)
    width_tile_wall = document.getElementById('');
    width_tile_wall = parseFloat(width_tile_wall.value).toFixed(2)
    number_tiles_box_wall = document.getElementById('');
    number_tiles_box_wall = parseFloat(number_tiles_box_wall.value).toFixed(2)
    price_tiles_wall = document.getElementById('');
    price_tiles_wall = parseFloat(price_tiles_wall.value).toFixed(2)

///   Краска (в л)
    if (checkbox_paint == true){
        var number_paint = wall_area/10
        var cost_paint = price_paint * number_paint
        document.getElementById('').innerHTML = Math.ceil(number_paint)
        document.getElementById('').innerHTML = cost_paint

    }
///   Обои
    if (checkbox_oboi == true){
    ///   if checkbox_raport == False {
///       number_roll = ((length_room + width_room) * 2 / width_wallpaper) * height_room / 10)  ///   Ко-во рулонов
///   else
///       if checkbox_stik_p == true
///           number_roll = ((length_room + width_room) * 2 / width_wallpaper) * (height_room + raport) / 10)
///       elif checkbox_stik_s == true
///           number_roll = ((length_room + width_room) * 2 / width_wallpaper) * (height_room + 1.5 * raport) / 10)

        var number_roll = ((length_room + width_room) * 2 / width_wallpaper) * height_room / 10  ///   Ко-во рулонов
        var cost_wallpaper = price_wallpaper * number_roll
        document.getElementById('').innerHTML = Math.ceil(number_roll)
        document.getElementById('').innerHTML = cost_wallpaper

///   Клей в кг
        var glue = wall_area * 0.3
        var cost_glue = 2 * glue
        document.getElementById('').innerHTML = Math.ceil(glue)
        document.getElementById('').innerHTML = cost_glue

    }
///   Плитка
    if (checkbox_tiles_wall == true) {
        var number_tiles_wall, cost_tiles_wall = calculate_quantity(wall_area, length_tile_wall, width_tile_wall,
            number_tiles_box_wall, price_tiles_wall)
        document.getElementById('').innerHTML = Math.ceil(number_tiles_wall)
        document.getElementById('').innerHTML = cost_tiles_wall

    }
///   Панели
    if (checkbox_panels_wall == true) {
        var number_panels_wall, cost_panels_wall = calculate_quantity(wall_area, length_panel, width_panel,
            number_panels_box, price_panela)
        document.getElementById('').innerHTML = Math.ceil(number_panels_wall)
        document.getElementById('').innerHTML = cost_panels_wall

    }
}



function material_pol() {
    var length_room, width_room, floor_area, width_linol, price_linol, length_linol, width_lamin,
        number_lamin_box, price_lamin, length_tile_floor, width_tile_floor, number_tile_floor_box, price_tile_floor

    width_linol = document.getElementById('');
    width_linol = parseFloat(width_linol.value).toFixed(2);
    price_linol = document.getElementById('');
    price_linol = parseFloat(price_linol.value).toFixed(2);
    length_linol = document.getElementById('');
    length_linol = parseFloat(length_linol.value).toFixed(2);
    width_lamin = document.getElementById('');
    width_lamin = parseFloat(width_lamin.value).toFixed(2);
    number_lamin_box = document.getElementById('');
    number_lamin_box = parseFloat(number_lamin_box.value).toFixed(2);
    price_lamin = document.getElementById('');
    price_lamin = parseFloat(price_lamin.value).toFixed(2);
    length_tile_floor = document.getElementById('');
    length_tile_floor = parseFloat(length_tile_floor.value).toFixed(2);
    width_tile_floor = document.getElementById('');
    width_tile_floor = parseFloat(width_tile_floor.value).toFixed(2);
    number_tile_floor_box = document.getElementById('');
    number_tile_floor_box = parseFloat(number_tile_floor_box.value).toFixed(2);
    price_tile_floor = document.getElementById('');
    price_tile_floor = parseFloat(price_tile_floor.value).toFixed(2);

///   Линолеум
    if (checkbox_lin == true) {
        var number_list = width_room / width_linol
        var length_list = length_room * number_list  ///   в метрах погонных
        var cost_linol = length_list * price_linol
        document.getElementById('').innerHTML = Math.ceil(length_list)
        document.getElementById('').innerHTML = cost_linol
    }

///   Ламинат
    if (checkbox_lamin == true) {
        var number_lamin, cost_lamin = calculate_quantity(floor_area, length_linol, width_lamin,
            number_lamin_box, price_lamin)
        document.getElementById('').innerHTML = Math.ceil(number_lamin)
        document.getElementById('').innerHTML = cost_lamin
    }


///   Плитка
    if (checkbox_tail_floor == true) {
        var number_tail_floor, cost_tail_floor = calculate_quantity(floor_area, length_tile_floor, width_tile_floor,
            number_tile_floor_box, price_tile_floor)
        document.getElementById('').innerHTML = Math.ceil(number_tail_floor)
        document.getElementById('').innerHTML = cost_tail_floor
    }
}


function material_potolok() {
    var floor_area, price_paint_ceil, length_dekor_tiles, width_dekor_tiles,
        number_dekor_tiles_box, price_dekor_tiles

    price_paint_ceil = document.getElementById('');
    price_paint_ceil = parseFloat(price_paint_ceil.value).toFixed(2);
    length_dekor_tiles = document.getElementById('');
    length_dekor_tiles = parseFloat(length_dekor_tiles.value).toFixed(2);
    width_dekor_tiles = document.getElementById('');
    width_dekor_tiles = parseFloat(width_dekor_tiles.value).toFixed(2);
    number_dekor_tiles_box = document.getElementById('');
    number_dekor_tiles_box = parseFloat(number_dekor_tiles_box.value).toFixed(2);
    price_dekor_tiles = document.getElementById('');
    price_dekor_tiles = parseFloat(price_dekor_tiles.value).toFixed(2);

///   Краска (в л)
    if (checkbox_tail_floor == true) {
        var paint_ceil = floor_area / 10
        var cost_paint_ceil = price_paint_ceil * paint_ceil
        document.getElementById('').innerHTML = Math.ceil(paint_ceil)
        document.getElementById('').innerHTML = cost_paint_ceil
        return {paint_ceil:paint_ceil, cost_paint_ceil:cost_paint_ceil}
    }
//        ///   Декоративные плиты
    if (checkbox_dekor_tiles == true) {
        var number_dekor_tiles, cost_dekor_tiles = calculate_quantity(floor_area, length_dekor_tiles, width_dekor_tiles,
            number_dekor_tiles_box, price_dekor_tiles)
        document.getElementById('').innerHTML = Math.ceil(number_dekor_tiles)
        document.getElementById('').innerHTML = cost_dekor_tiles

    }
}

// ЧЕк на кнопочку посчитать всё (Катя упоминала какой-то более логичный способ не через if)

function calculate(){
    var wall_area, floor_area = square()
    apartament_preparation()
    if (check_na_stenu == true){
        material_sten()
    }
    if (check_na_pol == true){
        material_pol()
    }
    if (check_na_potolok == true){
        material_potolok()
    }
}