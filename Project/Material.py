import math


def material_sten(a, b, c, s_s, cena_kras, shi_ob, raport, cena_ob, dlina_plits, shir_plits, kol_plit_kors, cena_plits):

    # Краска (в л)
    if checkbox_pokras == True:
        kras = math.ceil(s_s/10)
        stoimost_kras = round(cena_kras * kras, 2)
        return kras, stoimost_kras
    # Обои
    if (checkbox_oboi) == True:
        # if checkbox_raport == False:
        #     rul = math.ceil(((a + b) * 2 / shi_ob) * c / 10)  # Ко-во рулонов
        # else:
        #     if checkbox_stik_p == True:
        #         rul = math.ceil(((a + b) * 2 / shi_ob) * (c + raport) / 10)
        #     elif checkbox_stik_s == True:
        #         rul = math.ceil(((a + b) * 2 / shi_ob) * (c + 1.5 * raport) / 10)

        rul = math.ceil(((a + b) * 2 / shi_ob) * c / 10)  # Ко-во рулонов
        stoimost_o = cena_ob * rul

        # Клей в кг
        kley = round(s_s * 0.3)
        stoimost_kley = round(2 * kley, 2)
        return rul, stoimost_o, kley, stoimost_kley

    # Плитка
    if (checkbox_plitka) == True:
        pl_plits = dlina_plits * shir_plits / 10000
        kol_plits = math.ceil(s_s / pl_plits)
        kol_ps = math.ceil(kol_plits / kol_plit_kors)  # Количество упаковок
        stoimost_p_s = round(kol_ps * cena_plits)
        return kol_ps, stoimost_p_s


def material_pol(a, b, s_p, sh_lin, cena_l, dlina_lam, shir_lam, kol_lam_kor, cena_lam, dlina_plitp, shir_plitp,
                 kol_plit_korp, cena_plitp):
    # Линолеум
    if (checkbox_lin) == True:
        ko_listov = math.ceil(b/sh_lin)
        m_pog_lin = math.ceil(a * ko_listov)  # в метрах погонных
        stoimost_l = round(m_pog_lin * cena_l, 2)
        return m_pog_lin, stoimost_l

    # Ламинат
    if (checkbox_lamin) == True:
        pl = s_p + (s_p * 0.05)
        # ламель стандартного размера 185х1260мм закроет 0,2331 м2
        plam = dlina_lam * shir_lam/10000
        kol_lam = math.ceil(pl/plam)  # Штук Ламелей (не упаковок)
        kol_l = math.ceil(kol_lam/kol_lam_kor)  # Количество упаковок
        stoimost_lam = round(kol_l * cena_lam, 2)
        return kol_l, stoimost_lam

    # Плитка
    if (checkbox_plitka) == True:
        pl_plitp = dlina_plitp * shir_plitp / 10000
        kol_plitp = math.ceil(s_p / pl_plitp)
        kol_p = math.ceil(kol_plitp / kol_plit_korp)  # Количество упаковок
        stoimost_p_p = round(kol_p * cena_plitp, 2)
        return kol_p, stoimost_p_p


def material_potolok(s_p, cena_krasp):
    # Краска (в л)
    krasp = math.ceil(s_p / 10)
    stoimost_krasp = round(cena_krasp * krasp, 2)
    return krasp, stoimost_krasp