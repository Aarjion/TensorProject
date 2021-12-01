from podgotovka import square, podgot_apartament
from Material import material_pol, material_sten, material_potolok

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




s_s, s_p = square(length_room, width_room, height_room, height_window, width_window, height_door, width_door)
print("\nПлощадь стен:", s_s, "\nПлощадь пола/потолка:", s_p)

shtuka, stoimost_sht, v_shpat, stoimost_spat_v, f_shpat, stoimost_spat_f, grunt, stoimost_grunt, stajka, \
 stoimost_stajka,  shpat, stoimost_spat = podgot_apartament(s_s, s_p)
print("____СТЕНЫ____", "\nШтукатурка (кг): ", shtuka, "Стоимость(руб): ", stoimost_sht,
      "\nВыравнивающая шпатлёвка (кг):", v_shpat, "Стоимость(руб): ", stoimost_spat_v, "\nФинишная шпатлёвка (кг):",
      f_shpat, "Стоимость(руб): ", stoimost_spat_f, "\nГрунтовка (л):", grunt, "Стоимость(руб): ",
      stoimost_grunt, "\n_____ПОЛ_____", "\nСтяжка (кг):", stajka, "Стоимость(руб): ",
      stoimost_stajka, "\n___ПОТОЛОК____", "\nШпатлёвка (кг):", shpat, "Стоимость(руб): ", stoimost_spat)
