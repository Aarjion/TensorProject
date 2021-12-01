import math


def calculate_quantity(space_area, length_part, width_part, number_in_packeging, price):
    value_area = space_area + (space_area * 0.05)
    part_area = length_part * width_part / 10000
    number_parts = math.ceil(value_area / part_area)  # Штук  (не упаковок)
    number_packegs = math.ceil(number_parts / number_in_packeging)  # Количество упаковок
    cost = round(number_packegs * price, 2)
    return number_packegs, cost


def material_sten(length_room, width_room, height_room, wall_area, price_paint, width_wallpaper, raport,
                  price_wallpaper, length_tile_wall, width_tile_wall, number_tiles_box_wall, price_tiles_wall):

    # Краска (в л)
    if checkbox_paint == True:
        number_paint = math.ceil(wall_area/10)
        cost_paint = round(price_paint * number_paint, 2)
        return number_paint, cost_paint
    # Обои
    if (checkbox_oboi) == True:
        # if checkbox_raport == False:
        #     number_roll = math.ceil(((length_room + width_room) * 2 / width_wallpaper) * height_room / 10)  # Ко-во рулонов
        # else:
        #     if checkbox_stik_p == True:
        #         number_roll = math.ceil(((length_room + width_room) * 2 / width_wallpaper) * (height_room + raport) / 10)
        #     elif checkbox_stik_s == True:
        #         number_roll = math.ceil(((length_room + width_room) * 2 / width_wallpaper) * (height_room + 1.5 * raport) / 10)

        number_roll = math.ceil(((length_room + width_room) * 2 / width_wallpaper) * height_room / 10)  # Ко-во рулонов
        cost_wallpaper = price_wallpaper * number_roll

        # Клей в кг
        glue = round(wall_area * 0.3)
        cost_glue = round(2 * glue, 2)
        return number_roll, cost_wallpaper, glue, cost_glue

    # Плитка

    number_tiles_wall, cost_tiles_wall = calculate_quantity(wall_area, length_tile_wall, width_tile_wall,
                                                            number_tiles_box_wall, price_tiles_wall)
    return number_tiles_wall, cost_tiles_wall
    # Панели
    number_panels_wall, cost_panels_wall = calculate_quantity(wall_area, length_panel, width_panel,
                                                            number_panels_box, price_panela)
    return number_panels_wall, cost_panels_wall


def material_pol(length_room, width_room, floor_area, width_linol, price_linol, length_linol, width_lamin,
                 number_lamin_box, price_lamin, length_tile_floor, width_tile_floor, number_tile_floor_box, price_tile_floor):
    # Линолеум
    if (checkbox_lin) == True:
        number_list = math.ceil(width_room/width_linol)
        length_list = math.ceil(length_room * number_list)  # в метрах погонных
        cost_linol = round(length_list * price_linol, 2)
        return length_list, cost_linol

    # Ламинат

    number_lamin, cost_lamin = calculate_quantity(floor_area, length_linol, width_lamin, number_lamin_box, price_lamin)



    # Плитка

    number_tail_floor, cost_tail_floor = calculate_quantity(floor_area, length_tile_floor, width_tile_floor,
                                                            number_tile_floor_box, price_tile_floor)
    return number_tail_floor, cost_tail_floor


def material_potolok(floor_area, price_paint_ceil):
    # Краска (в л)
    paint_ceil = math.ceil(floor_area / 10)
    cost_paint_ceil = round(price_paint_ceil * paint_ceil, 2)
    return paint_ceil, cost_paint_ceil

    # Декоративные плиты
    number_dekor_tiles, cost_dekor_tiles = calculate_quantity(floor_area, length_dekor_tiles, width_dekor_tiles,
                                                              number_dekor_tiles_box, price_dekor_tiles)

