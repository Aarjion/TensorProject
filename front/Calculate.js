
function square() {
    var length_room, width_room, height_room, count_window, height_window, width_window, count_door, height_door,
        width_door

    length_room = document.getElementById('long_room').value;
    length_room = parseFloat(length_room).toFixed(2)
    width_room = document.getElementById('width_room').value;
    width_room = parseFloat(width_room).toFixed(2)
    height_room = document.getElementById('height_room').value;
    height_room = parseFloat(height_room).toFixed(2)
    count_window = document.getElementById('count_windows').value;
    count_window =  parseInt(count_window).toFixed(2)
    height_window = document.getElementById('height_window').value;
    height_window = parseFloat(height_window).toFixed(2)
    width_window = document.getElementById('width_window').value;
    width_window = parseFloat(width_window).toFixed(2)
    count_door = document.getElementById('count_doors').value;
    count_door =  parseInt(count_door).toFixed(2)
    height_door = document.getElementById('height_door').value;
    height_door = parseFloat(height_door).toFixed(2)
    width_door = document.getElementById('width_door').value;
    width_door = parseFloat(width_door).toFixed(2)

///   #///     Неактивная площадь комнаты  ###
    var ne_s = (height_window * width_window) * count_window + (height_door * width_door) * count_door

///   #///     Рабочая площадь стен ###
    var wall_area = 2 * (length_room * height_room) + 2 * (width_room * height_room) - ne_s

///   #///     Площадь пол/потолок ###
    var floor_area = length_room * width_room

    return wall_area, floor_area
}

function apartament_preparation() {

        var wall_area, floor_area

///   ##########///   Cтены ###############
///    Расчёт Штукатурки  (Площадь * Толщину слоя * Расход штукатурки на 1м2) = количество в кг
    var plaster = wall_area * 1 * 17
    var cost_plaster = 14 * plaster
    document.getElementById('').innerHTML = plaster
    document.getElementById('').innerHTML = cost_plaster


///   Расчёт Шпатлёвка (в кг)
    var level_filling = wall_area * 4.5 * 0.5
    var finish_filling = wall_area * 1 * 0.2
    var cost_level_filling = 43 * level_filling
    var cost_finish_filling = 40 * finish_filling
    document.getElementById('').innerHTML = level_filling
    document.getElementById('').innerHTML = finish_filling
    document.getElementById('').innerHTML = cost_level_filling
    document.getElementById('').innerHTML = cost_finish_filling


///   Грунтовка (в кг)
    var primer = wall_area * 0.16
    var cost_primer = 84 * primer
    document.getElementById('').innerHTML = primer
    document.getElementById('').innerHTML = cost_primer


///   ########///   Потолок ###########
    var filling_floor = floor_area * 1 * 0.2
    var cost_filling_floor = 40 * filling_floor
    document.getElementById('').innerHTML = filling_floor
    document.getElementById('').innerHTML = cost_filling_floor


///   ########///   Пол ##########
///   Стяжка (в кг)
    var coupler = floor_area * 0.3 * 33
    var cost_coupler = coupler * 17
    document.getElementById('').innerHTML = coupler
    document.getElementById('').innerHTML = cost_coupler

}



function calculate_quantity() {

    var space_area, length_part, width_part, number_in_packeging, price

    var value_area = space_area + (space_area * 0.05)
    var part_area = (length_part * width_part) / 10000
    var number_parts = value_area / part_area  ///   Штук  (не упаковок)
    var number_packegs = number_parts / number_in_packeging  ///   Количество упаковок
    var cost = number_packegs * price

    return number_packegs, cost
}



function material_sten() {

    var length_room, width_room, height_room, wall_area, price_paint, width_wallpaper,
        price_wallpaper, length_tile_wall, width_tile_wall, number_tiles_box_wall, price_tiles_wall //, raport

    price_paint = document.getElementById('').value;
    price_paint = parseFloat(price_paint).toFixed(2)
    width_wallpaper = document.getElementById('').value;
    width_wallpaper = parseFloat(width_wallpaper).toFixed(2)
//    raport = document.getElementById('').value;
//    raport = parseFloat(raport).toFixed(2)
    price_wallpaper = document.getElementById('').value;
    price_wallpaper = parseFloat(price_wallpaper).toFixed(2)
    length_tile_wall = document.getElementById('').value;
    length_tile_wall = parseFloat(length_tile_wall).toFixed(2)
    width_tile_wall = document.getElementById('').value;
    width_tile_wall = parseFloat(width_tile_wall).toFixed(2)
    number_tiles_box_wall = document.getElementById('').value;
    number_tiles_box_wall = parseFloat(number_tiles_box_wall).toFixed(2)
    price_tiles_wall = document.getElementById('').value;
    price_tiles_wall = parseFloat(price_tiles_wall).toFixed(2)

///   Краска (в л)
    if (checkbox_paint == true){
        var number_paint = wall_area/10
        var cost_paint = price_paint * number_paint
        document.getElementById('').innerHTML = number_paint
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
        document.getElementById('').innerHTML = number_roll
        document.getElementById('').innerHTML = cost_wallpaper

///   Клей в кг
        var glue = wall_area * 0.3
        var cost_glue = 2 * glue
        document.getElementById('').innerHTML = glue
        document.getElementById('').innerHTML = cost_glue

    }
///   Плитка
    if (checkbox_tiles_wall == true) {
        var number_tiles_wall, cost_tiles_wall = calculate_quantity(wall_area, length_tile_wall, width_tile_wall,
            number_tiles_box_wall, price_tiles_wall)
        document.getElementById('').innerHTML = number_tiles_wall
        document.getElementById('').innerHTML = cost_tiles_wall

    }
///   Панели
    if (checkbox_panels_wall == true) {
        var number_panels_wall, cost_panels_wall = calculate_quantity(wall_area, length_panel, width_panel,
            number_panels_box, price_panela)
        document.getElementById('').innerHTML = number_panels_wall
        document.getElementById('').innerHTML = cost_panels_wall

    }
}



function material_pol() {
    var length_room, width_room, floor_area, width_linol, price_linol, length_linol, width_lamin,
        number_lamin_box, price_lamin, length_tile_floor, width_tile_floor, number_tile_floor_box, price_tile_floor

    width_linol = document.getElementById('').value;
    width_linol = parseFloat(width_linol).toFixed(2)
    price_linol = document.getElementById('').value;
    price_linol = parseFloat(price_linol).toFixed(2)
    length_linol = document.getElementById('').value;
    length_linol = parseFloat(length_linol).toFixed(2)
    width_lamin = document.getElementById('').value;
    width_lamin = parseFloat(width_lamin).toFixed(2)
    number_lamin_box = document.getElementById('').value;
    number_lamin_box = parseFloat(number_lamin_box).toFixed(2)
    price_lamin = document.getElementById('').value;
    price_lamin = parseFloat(price_lamin).toFixed(2)
    length_tile_floor = document.getElementById('').value;
    length_tile_floor = parseFloat(length_tile_floor).toFixed(2)
    width_tile_floor = document.getElementById('').value;
    width_tile_floor = parseFloat(width_tile_floor).toFixed(2)
    number_tile_floor_box = document.getElementById('').value;
    number_tile_floor_box = parseFloat(number_tile_floor_box).toFixed(2)
    price_tile_floor = document.getElementById('').value;
    price_tile_floor = parseFloat(price_tile_floor).toFixed(2)

///   Линолеум
    if (checkbox_lin == true) {
        var number_list = width_room / width_linol
        var length_list = length_room * number_list  ///   в метрах погонных
        var cost_linol = length_list * price_linol
        document.getElementById('').innerHTML = length_list
        document.getElementById('').innerHTML = cost_linol
    }

///   Ламинат
    if (checkbox_lamin == true) {
        var number_lamin, cost_lamin = calculate_quantity(floor_area, length_linol, width_lamin,
            number_lamin_box, price_lamin)
        document.getElementById('').innerHTML = number_lamin
        document.getElementById('').innerHTML = cost_lamin
    }


///   Плитка
    if (checkbox_tail_floor == true) {
        var number_tail_floor, cost_tail_floor = calculate_quantity(floor_area, length_tile_floor, width_tile_floor,
            number_tile_floor_box, price_tile_floor)
        document.getElementById('').innerHTML = number_tail_floor
        document.getElementById('').innerHTML = cost_tail_floor
    }
}


function material_potolok() {
    var floor_area, price_paint_ceil, length_dekor_tiles, width_dekor_tiles,
        number_dekor_tiles_box, price_dekor_tiles

    price_paint_ceil = document.getElementById('').value;
    price_paint_ceil = parseFloat(price_paint_ceil).toFixed(2)
    length_dekor_tiles = document.getElementById('').value;
    length_dekor_tiles = parseFloat(length_dekor_tiles).toFixed(2)
    width_dekor_tiles = document.getElementById('').value;
    width_dekor_tiles = parseFloat(width_dekor_tiles).toFixed(2)
    number_dekor_tiles_box = document.getElementById('').value;
    number_dekor_tiles_box = parseFloat(number_dekor_tiles_box).toFixed(2)
    price_dekor_tiles = document.getElementById('').value;
    price_dekor_tiles = parseFloat(price_dekor_tiles).toFixed(2)

///   Краска (в л)
    if (checkbox_tail_floor == true) {
        var paint_ceil = floor_area / 10
        var cost_paint_ceil = price_paint_ceil * paint_ceil
        document.getElementById('').innerHTML = paint_ceil
        document.getElementById('').innerHTML = cost_paint_ceil
        return paint_ceil, cost_paint_ceil
    }
//        ///   Декоративные плиты
    if (checkbox_dekor_tiles == true) {
        var number_dekor_tiles, cost_dekor_tiles = calculate_quantity(floor_area, length_dekor_tiles, width_dekor_tiles,
            number_dekor_tiles_box, price_dekor_tiles)
        document.getElementById('').innerHTML = number_dekor_tiles
        document.getElementById('').innerHTML = cost_dekor_tiles

    }
}