from podgotovka import Square, Podgot_apartament
from Material import Material_pol, Material_sten, Material_potolok

# ###################   Начальные значения   ####################### (в метрах)
a = 5     # Длинна комнаты (метры)
b = 3    # Ширина комнаты (метры)
c = 2.3    # Высота комнаты (метры)

v_o = 1.2  # Высота окна (метры)
d_o = 1.3  # Ширина окна (метры)
v_d = 1.9   # Высота двери (метры)
d_d = 0.9  # Ширина двери (метры)

shi_ob = 50  # Ширина обоев (метры)
raport = 30  # Рапорт обоев для стыковки рисунка(если надо) (метры)
cena_ob = 839.89  # Цена обоев

sh_lin = 3   # Ширина лиолеума (метры)
cena_l = 1300  # Цена линолеума

cena_kras = 300  # Цена краски стены
cena_krasp = 400  # Цена краски потолок

dlina_lam = 126  # (сантиметры)
shir_lam = 18.5  # (сантиметры)
kol_lam_kor = 8  # Количество штук в упаковке
cena_lam = 2000  # Цена за упаковку

dlina_plitp = 40  # (сантиметры)
shir_plitp = 20  # (сантиметры)
kol_plit_korp = 6  # Количество штук в упаковке
cena_plitp = 2000  # Цена за упаковку

dlina_plits = 40  # (сантиметры)
shir_plits = 20  # (сантиметры)
kol_plit_kors = 6  # Количество штук в упаковке
cena_plits = 2000  # Цена за упаковку


###############################################################################


ne_s, s_s, s_p = Square(a, b, c, v_o, d_o, v_d, d_d)
print("Не рабочая площадь:", ne_s, "\nПлощадь стен:", s_s, "\nПлощадь пола/потолка:", s_p)

shtuka, stoimost_sht, v_shpat, stoimost_spat_v, f_shpat, stoimost_spat_f, grunt, stoimost_grunt, stajka, \
 stoimost_stajka,  shpat, stoimost_spat = Podgot_apartament(s_s, s_p)
print("____СТЕНЫ____", "\nШтукатурка (кг): ", shtuka, "Стоимость(руб): ", stoimost_sht,
      "\nВыравнивающая шпатлёвка (кг):", v_shpat, "Стоимость(руб): ", stoimost_spat_v, "\nФинишная шпатлёвка (кг):",
      f_shpat, "Стоимость(руб): ", stoimost_spat_f, "\nГрунтовка (л):", grunt, "Стоимость(руб): ",
      stoimost_grunt, "\n_____ПОЛ_____", "\nСтяжка (кг):", stajka, "Стоимость(руб): ",
      stoimost_stajka, "\n___ПОТОЛОК____", "\nШпатлёвка (кг):", shpat, "Стоимость(руб): ", stoimost_spat)
