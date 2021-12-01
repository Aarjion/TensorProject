import math


# ###################   Начальные значения   ####################### (в метрах)
length_room = 5     # Длинна комнаты (метры)
width_room = 3    # Ширина комнаты (метры)
height_room = 2.3    # Высота комнаты (метры)

height_window = 1.2  # Высота окна (метры)
width_window = 1.3  # Ширина окна (метры)
height_door = 1.9   # Высота двери (метры)
width_door = 0.9  # Ширина двери (метры)

width_wallpaper = 50  # Ширина обоев (метры)
raport = 30  # Рапорт обоев для стыковки рисунка(если надо) (метры)
price_wallpaper = 839.89  # Цена обоев

length_panel = 2.2  # Динна панелей
width_panel = 40  # Ширина панелей
number_panels_box = 8  # Количество в упаковке
price_panela = 5000  # Цена панелей

width_linol = 3   # Ширина лиолеума (метры)
price_linol = 1300  # Цена линолеума

price_paint = 300  # Цена краски стены
price_paint_ceil = 400  # Цена краски потолок

length_linol = 126  # (сантиметры)
width_lamin = 18.5  # (сантиметры)
number_lamin_box = 8  # Количество штук в упаковке
price_lamin = 2000  # Цена за упаковку

length_tile_floor = 40  # (сантиметры)
width_tile_floor = 20  # (сантиметры)
number_tile_floor_box = 6  # Количество штук в упаковке
price_tile_floor = 2000  # Цена за упаковку

length_tile_wall = 40  # (сантиметры)
width_tile_wall = 20  # (сантиметры)
number_tiles_box_wall = 6  # Количество штук в упаковке
price_tiles_wall = 2000  # Цена за упаковку

length_dekor_tiles = 40
width_dekor_tiles = 40
number_dekor_tiles_box = 15
price_dekor_tiles = 200
###############################################################################


def square(length_room, width_room, height_room, height_window, width_window, height_door, width_door):
    # ##   Неактивная площадь комнаты  ###
    ne_s = round((height_window * width_window) + (height_door * width_door), 2)

    # ##   Рабочая площадь стен ###
    wall_area = round(2 * (length_room * height_room) + 2 * (width_room * height_room) - ne_s, 2)

    # ##   Площадь пол/потолок ###
    floor_area = round(length_room * width_room, 2)

    return wall_area, floor_area


def podgot_apartament(wall_area, floor_area):
    # ########### Cтены ###############
    #  Расчёт Штукатурки  (Площадь * Толщину слоя * Расход штукатурки на 1м2) = количество в кг
    plaster = round(wall_area * 1 * 17, 2)
    cost_plaster = round(14 * plaster, 2)

    # Расчёт Шпатлёвка (в кг)
    level_filling = round(wall_area * 4.5 * 0.5, 2)
    finish_filling = round(wall_area * 1 * 0.2, 2)
    cost_level_filling = round(43 * level_filling, 2)
    cost_finish_filling = round(40 * finish_filling, 2)

    # Грунтовка (в кг)
    primer = round(wall_area * 0.16, 2)
    cost_primer = round(84 * primer, 2)

    # ######### Потолок ###########
    filling_floor = round(floor_area * 1 * 0.2, 2)
    cost_filling_floor = round(40 * filling_floor, 2)

    # ######### Пол ##########
    # Стяжка (в кг)
    coupler = round(floor_area * 0.3 * 33, 2)
    cost_coupler = round(coupler * 17, 2)
    return plaster, cost_plaster, level_filling, cost_level_filling, finish_filling, cost_finish_filling, primer,\
            cost_primer, coupler, cost_coupler, filling_floor, cost_filling_floor




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



s_s, s_p = square(length_room, width_room, height_room, height_window, width_window, height_door, width_door)
print("\nПлощадь стен:", s_s, "\nПлощадь пола/потолка:", s_p)

shtuka, stoimost_sht, v_shpat, stoimost_spat_v, f_shpat, stoimost_spat_f, grunt, stoimost_grunt, stajka, \
 stoimost_stajka,  shpat, stoimost_spat = podgot_apartament(s_s, s_p)
print("____СТЕНЫ____", "\nШтукатурка (кг): ", shtuka, "Стоимость(руб): ", stoimost_sht,
      "\nВыравнивающая шпатлёвка (кг):", v_shpat, "Стоимость(руб): ", stoimost_spat_v, "\nФинишная шпатлёвка (кг):",
      f_shpat, "Стоимость(руб): ", stoimost_spat_f, "\nГрунтовка (л):", grunt, "Стоимость(руб): ",
      stoimost_grunt, "\n_____ПОЛ_____", "\nСтяжка (кг):", stajka, "Стоимость(руб): ",
      stoimost_stajka, "\n___ПОТОЛОК____", "\nШпатлёвка (кг):", shpat, "Стоимость(руб): ", stoimost_spat)
