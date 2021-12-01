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
