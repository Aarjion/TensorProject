def square(a, b, c, v_o, d_o, v_d, d_d):
    # ##   Неактивная площадь комнаты  ###
    ne_s = round((v_o * d_o) + (v_d * d_d), 2)

    # ##   Рабочая площадь стен ###
    s_s = round(2 * (a * c) + 2 * (b * c) - ne_s, 2)

    # ##   Площадь пол/потолок ###
    s_p = round(a * b, 2)

    return ne_s, s_s, s_p


def podgot_apartament(s_s, s_p):
    # ########### Cтены ###############
    #  Расчёт Штукатурки  (Площадь * Толщину слоя * Расход штукатурки на 1м2) = количество в кг
    shtuka = round(s_s * 1 * 17, 2)
    stoimost_sht = round(14 * shtuka, 2)

    # Расчёт Шпатлёвка (в кг)
    v_shpat = round(s_s * 4.5 * 0.5, 2)
    f_shpat = round(s_s * 1 * 0.2, 2)
    stoimost_spat_v = round(43 * v_shpat, 2)
    stoimost_spat_f = round(40 * f_shpat, 2)

    # Грунтовка (в кг)
    grunt = round(s_s * 0.16, 2)
    stoimost_grunt = round(84 * grunt, 2)

    # ######### Потолок ###########
    shpat = round(s_p * 1 * 0.2, 2)
    stoimost_spat = round(40 * shpat, 2)
    # ######### Пол ##########
    # Стяжка (в кг)
    stajka = round(s_p * 0.3 * 33, 2)
    stoimost_stajka = round(stajka * 17, 2)
    return shtuka, stoimost_sht, v_shpat, stoimost_spat_v, f_shpat, stoimost_spat_f, grunt, stoimost_grunt, stajka,\
           stoimost_stajka, shpat, stoimost_spat
